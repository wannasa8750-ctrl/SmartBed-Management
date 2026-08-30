export const STATUS_CONFIG = {
  available: { label: "ว่าง", color: "#10b981", bg: "#d1fae5", icon: "🟢" },
  occupied: { label: "มีผู้ป่วย", color: "#ef4444", bg: "#fee2e2", icon: "🔴" },
  maintenance: { label: "ซ่อมบำรุง", color: "#f59e0b", bg: "#fef3c7", icon: "🟡" },
  cleaning: { label: "ทำความสะอาด", color: "#3b82f6", bg: "#dbeafe", icon: "🔵" },
};

export const GENDER_CONFIG = {
  none: { label: "เลือกเพศ"},
  male: { label: "ชาย"},
  female: { label: "หญิง"},
  other: { label: "อื่นๆ"},
};

export const WARDS = [
  "ICU",
  "ศัลยกรรม",
  "อายุรกรรม",
  "กุมารเวช",
  "สูติกรรม",
  "ออร์โธปิดิกส์",
];

// ─── Demo Data Helpers ────────────────────────────────────────

const THAI_FIRST_NAMES = [
  "สมชาย","มาลี","วิชัย","นภา","ประเสริฐ","สุดา","อนุชา","ลัดดา","บุญมี","สมหญิง",
  "ชาญชัย","วรรณา","ธนพล","กัญญา","สุรชัย","นิตยา","ปิยะ","รัตนา","เกรียงไกร","อารี",
  "สมศักดิ์","พรทิพย์","ณัฐพล","สุภาพ","วีระ","จิราภรณ์","ธีรยุทธ","ศิริพร","อภิชัย","นวลจันทร์",
  "สุวิทย์","กนกวรรณ","ภูมิพัฒน์","มนัส","ชุติมา","ประวิทย์","ศิริวรรณ","วิเชียร","ปาณิสรา","สุเมธ",
  "ขวัญใจ","อัครเดช","เบญจมาศ","วรพงษ์","จันทิมา","ธนาธิป","สุกัญญา","ชัยวัฒน์","ปิยนุช","รัตนชัย",
  "ไพรัช","นฤมล","อิทธิพล","วาสนา","เดชา","ปรารถนา","ศราวุธ","กาญจนา","พิษณุ","สายฝน",
];

const THAI_LAST_NAMES = [
  "ใจดี","รักสวย","สุขใจ","แสงทอง","มีสุข","พรมมา","ดีงาม","วงศ์ไทย","แก้วใส","ทองคำ",
  "ศรีสุข","พันธุ์ดี","รุ่งเรือง","หวังดี","มั่นคง","สดใส","วิไล","แสนดี","พูลสุข","ใจงาม",
  "ภูมิดี","เจริญสุข","ทรัพย์มาก","วิชาดี","คงดี","สุขสันต์","มงคล","แสนสุข","ดีเด่น","ผลดี",
  "ใจเย็น","สว่าง","รักดี","ศรีงาม","วงศ์ดี","สุขสม","ทองใส","คุณดี","มีศิล","ใจบุญ",
  "รุ่งโรจน์","พรหมดี","ทองดี","สุขศรี","แก้วดี","ศรีดี","วิทยา","ดีงาม","สำเร็จ","มีสุขทุกวัน",
];

const DIAGNOSES_BY_WARD = {
  ICU: [
    "หัวใจล้มเหลว","ระบบหายใจล้มเหลว","ความดันโลหิตต่ำวิกฤต","ติดเชื้อในกระแสเลือด",
    "บาดเจ็บสาหัส","ภาวะช็อก","เนื้อสมองขาดเลือด","ไตวายเฉียบพลัน","ตับวาย",
  ],
  ศัลยกรรม: [
    "ผ่าตัดไส้ติ่ง","ผ่าตัดนิ่วในถุงน้ำดี","ผ่าตัดเนื้องอก","ผ่าตัดลำไส้",
    "บาดแผลจากอุบัติเหตุ","ผ่าตัดไส้เลื่อน","ผ่าตัดกระเพาะอาหาร","ผ่าตัดตับ",
  ],
  อายุรกรรม: [
    "เบาหวาน","ความดันโลหิตสูง","โรคไต","ปอดอักเสบ","โรคหัวใจ",
    "ตับอักเสบ","โรคเกาต์","ไทรอยด์","โรคหลอดเลือดสมอง","ลูปัส",
  ],
  กุมารเวช: [
    "ไข้เลือดออก","ปอดอักเสบในเด็ก","ท้องร่วงรุนแรง","ชักจากไข้สูง",
    "ภูมิแพ้รุนแรง","หืดหอบ","สุกใส","คางทูม","หัดเยอรมัน",
  ],
  สูติกรรม: [
    "คลอดปกติ","ผ่าตัดคลอด","ภาวะครรภ์เป็นพิษ","รกเกาะต่ำ",
    "ตั้งครรภ์แฝด","เบาหวานขณะตั้งครรภ์","ภาวะแท้งบุตร",
  ],
  ออร์โธปิดิกส์: [
    "กระดูกหักจากอุบัติเหตุ","เปลี่ยนข้อเข่า","เปลี่ยนข้อสะโพก",
    "กระดูกสันหลังเสื่อม","ข้ออักเสบรูมาตอยด์","เอ็นฉีกขาด","กระดูกผุ",
    "หมอนรองกระดูกทับเส้นประสาท",
  ],
};

const PATIENT_NOTES = [
  "อาการดีขึ้นต่อเนื่อง","ติดตามอาการใกล้ชิด","รอผลตรวจเพิ่มเติม",
  "เตรียมจำหน่ายพรุ่งนี้","ต้องการกายภาพบำบัด","นัดตรวจติดตาม 1 สัปดาห์",
  "ควบคุมอาหารเข้มงวด","แพ้ยา Penicillin","เตรียมผ่าตัดพรุ่งนี้",
  "รับการรักษาวันที่ 3","ครอบครัวรับทราบแล้ว","","","",
];

const MAINTENANCE_NOTES = [
  "เปลี่ยนที่นอน","ซ่อมรั้วเตียง","ตรวจเช็กอุปกรณ์","รอช่างมาซ่อม","เปลี่ยนราวกั้น",
];

const CLEANING_NOTES = [
  "ทำความสะอาดหลังจำหน่าย","รอทำความสะอาด","ฆ่าเชื้อโรค","ผู้ป่วยเพิ่งจำหน่าย","",
];

const ADMIT_DATES = [
  "2026-01-10","2026-01-15","2026-01-20","2026-01-25","2026-01-28",
  "2026-02-01","2026-02-05","2026-02-08","2026-02-10","2026-02-12",
  "2026-02-14","2026-02-15","2026-02-17","2026-02-18","2026-02-19",
  "2026-02-20","2026-02-21","2026-02-22","2026-02-23",
];

// ─── Seeded PRNG (deterministic — same output every reload) ───
const seededRandom = (seed) => {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
};

const pick = (rand, arr) => arr[Math.floor(rand() * arr.length)];

const weightedStatus = (rand) => {
  const r = rand();
  if (r < 0.45) return "occupied";
  if (r < 0.80) return "available";
  if (r < 0.90) return "maintenance";
  return "cleaning";
};

// ─── Core generator ───────────────────────────────────────────
const generateBeds = (wardName, prefix, count, startId) => {
  const rand = seededRandom(startId * 31337);

  return Array.from({ length: count }, (_, i) => {
    const id        = startId + i;
    const bedNumber = `${prefix}-${String(i + 1).padStart(3, "0")}`;
    const status    = weightedStatus(rand);

    if (status === "occupied") {
      const isChild     = wardName === "กุมารเวช";
      const isObstetric = wardName === "สูติกรรม";
      const diagList    = DIAGNOSES_BY_WARD[wardName] ?? DIAGNOSES_BY_WARD["อายุรกรรม"];
      const age         = isChild
        ? Math.floor(rand() * 14) + 1
        : isObstetric
          ? Math.floor(rand() * 20) + 20
          : Math.floor(rand() * 65) + 18;
      const genderOptions = isObstetric
        ? ["female"]
        : ["male", "male", "female", "female", "other"];
      const gender = pick(rand, genderOptions);

      return {
        id,
        bedNumber,
        ward:      wardName,
        status,
        patient:   `${pick(rand, THAI_FIRST_NAMES)} ${pick(rand, THAI_LAST_NAMES)}`,
        gender,
        age,
        admitDate: pick(rand, ADMIT_DATES),
        diagnosis: pick(rand, diagList),
        notes:     pick(rand, PATIENT_NOTES),
      };
    }

    if (status === "maintenance") {
      return {
        id, bedNumber, ward: wardName, status,
        patient: "", age: "", admitDate: "", diagnosis: "",
        notes: pick(rand, MAINTENANCE_NOTES),
      };
    }

    if (status === "cleaning") {
      return {
        id, bedNumber, ward: wardName, status,
        patient: "", age: "", admitDate: "", diagnosis: "",
        notes: pick(rand, CLEANING_NOTES),
      };
    }

    // available
    return {
      id, bedNumber, ward: wardName, status,
      patient: "", age: "", admitDate: "", diagnosis: "", notes: "",
    };
  });
};

// ─── INITIAL_BEDS: 200 beds across 6 wards ───────────────────
export const INITIAL_BEDS = [
  ...generateBeds("ICU",           "ICU", 40,   1),
  ...generateBeds("ศัลยกรรม",     "SUR", 40,  41),
  ...generateBeds("อายุรกรรม",    "MED", 40,  81),
  ...generateBeds("กุมารเวช",     "PED", 30, 121),
  ...generateBeds("สูติกรรม",     "OBS", 25, 151),
  ...generateBeds("ออร์โธปิดิกส์","ORT", 25, 176),
];