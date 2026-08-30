// src/firebase/seedData.js
//
// ใช้สำหรับ seed ข้อมูลตัวอย่างเข้า Firebase ครั้งแรก
// ⚠️ รันครั้งเดียวเท่านั้น — ฟังก์ชันจะตรวจสอบอัตโนมัติว่ามีข้อมูลอยู่แล้วหรือไม่
//
// วิธีใช้: เรียกใน App.jsx ตอน mount ครั้งแรก
//   import { seedInitialData } from "./firebase/seedData";
//   useEffect(() => { seedInitialData(); }, []);

import { seedInitialData as seedToDB } from "./bedService";
import { INITIAL_BEDS } from "../data/constants";

export async function seedInitialData() {
  await seedToDB(INITIAL_BEDS);
}
