
import { db } from "./firebaseConfig";
import {
  ref,
  push,
  set,
  update,
  remove,
  onValue,
  off,
  serverTimestamp,
  get,
} from "firebase/database";

const BEDS_PATH = "beds";
const HISTORY_PATH = "patient_history";

// ─── Helper: snapshot → array ─────────────────────────────────
// Firebase เก็บข้อมูลเป็น object ต้องแปลงเป็น array ก่อนใช้งาน
function snapshotToArray(snapshot) {
  const data = snapshot.val();
  if (!data) return [];
  return Object.entries(data).map(([firebaseKey, value]) => ({
    ...value,
    firebaseKey, // ✅ เก็บ key ของ Firebase ไว้ใช้ตอน update/delete
  }));
}

// ─── READ: Subscribe (Realtime) ───────────────────────────────
// ✅ ใช้ใน useEffect → ข้อมูลอัปเดตอัตโนมัติเมื่อ DB เปลี่ยน
// @param callback - function(beds: Array) ที่จะถูกเรียกทุกครั้งที่ข้อมูลเปลี่ยน
// @returns unsubscribe - ต้องเรียกใน cleanup ของ useEffect
export function subscribeBeds(callback) {
  const bedsRef = ref(db, BEDS_PATH);
  onValue(bedsRef, (snapshot) => {
    callback(snapshotToArray(snapshot));
  });
  return () => off(bedsRef); // cleanup function
}

// ─── READ: Get Once (ไม่ realtime) ───────────────────────────
// ✅ ใช้เมื่อต้องการอ่านข้อมูลครั้งเดียว (ไม่ subscribe)
export async function fetchBedsOnce() {
  const bedsRef = ref(db, BEDS_PATH);
  const snapshot = await get(bedsRef);
  return snapshotToArray(snapshot);
}

// ─── CREATE ───────────────────────────────────────────────────
// ✅ push() สร้าง key อัตโนมัติ เช่น -NxABC123...
// @param bedData - object ข้อมูลเตียง (ไม่ต้องมี id หรือ firebaseKey)
// @returns firebaseKey - key ที่ Firebase สร้างให้
export async function addBedToDB(bedData) {
  const bedsRef = ref(db, BEDS_PATH);
  const newBedRef = push(bedsRef); // สร้าง reference ใหม่พร้อม auto key
  await set(newBedRef, {
    ...bedData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return newBedRef.key;
}

// ─── UPDATE ───────────────────────────────────────────────────
// ✅ update() แก้ไขเฉพาะ field ที่ส่งมา ไม่ลบ field อื่น
// @param firebaseKey - key จาก subscribeBeds (เช่น -NxABC123...)
// @param bedData - object ข้อมูลที่ต้องการอัปเดต
export async function updateBedInDB(firebaseKey, bedData) {
  const bedRef = ref(db, `${BEDS_PATH}/${firebaseKey}`);
  // ตัด firebaseKey ออกก่อนบันทึก (ไม่เก็บ key ซ้อนใน value)
  const { firebaseKey: _key, ...cleanData } = bedData;
  await update(bedRef, {
    ...cleanData,
    updatedAt: serverTimestamp(),
  });
}

// ─── DELETE ───────────────────────────────────────────────────
// ✅ remove() ลบ node ทั้งหมดออกจาก DB
// @param firebaseKey - key จาก subscribeBeds
export async function deleteBedFromDB(firebaseKey) {
  const bedRef = ref(db, `${BEDS_PATH}/${firebaseKey}`);
  await remove(bedRef);
}

// ─── PATIENT HISTORY: บันทึกประวัติผู้ป่วย ───────────────────
// เรียกเมื่อ: (1) มีการเปลี่ยนสถานะเตียง หรือ (2) ลบเตียงที่มีผู้ป่วย
// @param bedData  - ข้อมูลเตียง ณ เวลานั้น (patient, ward, diagnosis, ฯลฯ)
// @param action   - "status_change" | "deleted"
// @param extra    - ข้อมูลเพิ่มเติม เช่น { fromStatus, toStatus }
export async function addPatientHistory(bedData, action, extra = {}) {
  if (!bedData.patient) return; // ไม่บันทึกถ้าไม่มีผู้ป่วย
  const historyRef = ref(db, HISTORY_PATH);
  const newRef = push(historyRef);
  await set(newRef, {
    bedNumber:  bedData.bedNumber  ?? "",
    ward:       bedData.ward       ?? "",
    patient:    bedData.patient    ?? "",
    gender:     bedData.gender     ?? "",
    age:        bedData.age        ?? "",
    admitDate:  bedData.admitDate  ?? "",
    diagnosis:  bedData.diagnosis  ?? "",
    notes:      bedData.notes      ?? "",
    action,
    ...extra,
    recordedAt: serverTimestamp(),
  });
  return newRef.key;
}

// ─── PATIENT HISTORY: Subscribe (Realtime) ───────────────────
// @param callback - function(history: Array)
// @returns unsubscribe
export function subscribePatientHistory(callback) {
  const historyRef = ref(db, HISTORY_PATH);
  onValue(historyRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) { callback([]); return; }
    const arr = Object.entries(data)
      .map(([key, value]) => ({ ...value, firebaseKey: key }))
      .sort((a, b) => (b.recordedAt ?? 0) - (a.recordedAt ?? 0));
    callback(arr);
  });
  return () => off(ref(db, HISTORY_PATH));
}

// ─── SEED ─────────────────────────────────────────────────────
// ✅ ใช้ครั้งแรกเพื่อ seed ข้อมูลตัวอย่างเข้า DB
// ⚠️ เรียกครั้งเดียวเท่านั้น ไม่งั้นข้อมูลจะซ้ำ
// @param initialBeds - array จาก INITIAL_BEDS ใน constants.js
export async function seedInitialData(initialBeds) {
  console.log("🌱 กำลัง seed ข้อมูลเริ่มต้น...");
  const bedsRef = ref(db, BEDS_PATH);
  const snapshot = await get(bedsRef);

  // ตรวจสอบว่ามีข้อมูลอยู่แล้วหรือไม่
  if (snapshot.exists()) {
    console.warn("⚠️ มีข้อมูลใน DB อยู่แล้ว ยกเลิก seed");
    return;
  }

  for (const bed of initialBeds) {
    const { id, ...rest } = bed; // ตัด local id ออก ให้ Firebase generate ใหม่
    await addBedToDB(rest);
  }
  console.log(`✅ Seed สำเร็จ: ${initialBeds.length} เตียง`);
}
