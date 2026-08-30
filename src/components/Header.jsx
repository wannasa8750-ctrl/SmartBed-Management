// src/components/Header.jsx — ไม่ได้ถูกใช้ใน App.jsx แต่ update ให้ครบ
import { BtnPrimary } from "./UI";

export function Header({ onAddClick, onSeedClick, showSeed }) {
  const today = new Date().toLocaleDateString("th-TH", { dateStyle: "long" });
  return (
    <div
      className="bg-gradient-to-br from-[#1e3a5f] to-[#1d4ed8] px-8 py-5 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex-wrap gap-4"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      <div className="flex items-center gap-4">
        <div className="text-[2rem]">📢</div>
        <div>
          <h1 className="text-white m-0 text-[1.4rem] font-extrabold tracking-tight">Smart Bed Management</h1>
          <p className="text-[#93c5fd] m-0 text-[0.8rem]">ระบบจัดการเตียงผู้ป่วยอัจฉริยะ · Firebase Realtime Database</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-white text-[0.85rem] font-semibold">โรงพยาบาลสมาร์ทแคร์</div>
          <div className="text-[#93c5fd] text-[0.75rem]">{today}</div>
        </div>
        {showSeed && (
          <button onClick={onSeedClick}
            className="bg-white/15 border-[1.5px] border-white/40 text-white px-4 py-[0.55rem] rounded-lg cursor-pointer font-semibold text-[0.8rem] hover:bg-white/25 transition-colors"
            style={{ fontFamily: "'Sarabun', sans-serif" }}>
            🌱 เพิ่มข้อมูลตัวอย่าง
          </button>
        )}
        <BtnPrimary onClick={onAddClick} color="#10b981">+ เพิ่มเตียง</BtnPrimary>
      </div>
    </div>
  );
}
