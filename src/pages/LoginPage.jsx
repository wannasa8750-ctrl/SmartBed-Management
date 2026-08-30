import { useState } from "react";
import { login, register } from "../firebase/authService";

export function LoginPage() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    if (!email || !password) return setError("กรุณากรอก Email และ Password");
    if (mode === "register" && !name) return setError("กรุณากรอกชื่อผู้ใช้");
    if (password.length < 6) return setError("Password ต้องมีอย่างน้อย 6 ตัวอักษร");
    setLoading(true);
    try {
      if (mode === "login") await login(email, password);
      else await register(email, password, name);
    } catch (err) {
      const msg = {
        "auth/user-not-found": "ไม่พบบัญชีนี้ในระบบ",
        "auth/wrong-password": "Password ไม่ถูกต้อง",
        "auth/email-already-in-use": "Email นี้ถูกใช้แล้ว",
        "auth/invalid-email": "รูปแบบ Email ไม่ถูกต้อง",
        "auth/invalid-credential": "Email หรือ Password ไม่ถูกต้อง",
      }[err.code] || err.message;
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f1f3d 0%, #1e3a5f 50%, #1d4ed8 100%)",
        fontFamily: "'Sarabun', sans-serif",
      }}
    >
      {/* BG rings */}
      {[300, 200, 400, 150, 250, 180].map((s, i) => (
        <div
          key={i}
          style={{
            width: s, height: s,
            top: `${[10, 60, 30, 80, 5, 50][i]}%`,
            left: `${[70, 10, 80, 20, 40, 90][i]}%`,
          }}
          className="absolute rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
      ))}

      <div className="flex w-full max-w-[960px] min-h-[540px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative z-10">

        {/* ── Left panel ── */}
        <div
          className="flex-1 p-12 flex flex-col justify-center relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #1e40af, #1e3a5f)" }}
        >
          <div className="absolute w-[280px] h-[280px] rounded-full bg-white/[0.04] -top-[60px] -right-[80px]" />
          <div className="absolute w-[180px] h-[180px] rounded-full bg-white/[0.04] bottom-10 -left-10" />
          <img
            src="logo.png"
            alt="Hospital Logo"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain"
            }}
          />
          <h1 className="text-white text-[1.8rem] font-extrabold m-0 mb-3 leading-tight">
            Smart Bed<br />Management
          </h1>
          <p className="text-[#93c5fd] text-[0.95rem] leading-[1.7] m-0 mb-8">
            ระบบจัดการเตียงผู้ป่วยอัจฉริยะ<br />
            เชื่อมต่อข้อมูลแบบ Realtime<br />
            ด้วย Firebase
          </p>
          {["🔴  ติดตามสถานะเตียง Realtime", "📊  Dashboard วิเคราะห์ข้อมูล", "✏️  จัดการข้อมูลผู้ป่วย", "🔒  ระบบ Login ปลอดภัย"].map((f, i) => (
            <div key={i} className="text-[#bfdbfe] text-[0.85rem] mb-2">{f}</div>
          ))}
        </div>

        {/* ── Right panel ── */}
        <div className="w-[400px] bg-white px-10 py-12 flex flex-col justify-center">
          <h2 className="m-0 mb-1 text-[1.5rem] font-extrabold text-[#1e3a5f]">
            {mode === "login" ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
          </h2>
          <p className="text-gray-500 text-[0.85rem] m-0 mb-7">
            {mode === "login" ? "กรอก Email และ Password ของคุณ" : "สร้างบัญชีใหม่เพื่อเข้าใช้งาน"}
          </p>

          {error && (
            <div className="bg-red-50 border border-red-300 text-red-600 px-[0.85rem] py-[0.65rem] rounded-lg text-[0.83rem] mb-4">
              ⚠️ {error}
            </div>
          )}

          {mode === "register" && (
            <Field label="ชื่อผู้ใช้" icon="👤" type="text" value={name} onChange={setName} placeholder="ชื่อ-นามสกุล" />
          )}
          <Field label="Email" icon="📧" type="email" value={email} onChange={setEmail} placeholder="example@hospital.com" />
          <Field label="Password" icon="🔒" type="password" value={password} onChange={setPassword} placeholder="อย่างน้อย 6 ตัวอักษร" onKeyDown={(e) => e.key === "Enter" && handleSubmit()} />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-[0.85rem] text-white border-none rounded-xl font-bold text-base cursor-pointer mt-2 disabled:cursor-not-allowed transition-opacity hover:opacity-90"
            style={{
              background: loading ? "#93c5fd" : "linear-gradient(135deg,#1e3a5f,#2563eb)",
              fontFamily: "'Sarabun', sans-serif",
            }}
          >
            {loading ? "⏳ กำลังดำเนินการ..." : mode === "login" ? "🔑 เข้าสู่ระบบ" : "✅ สมัครสมาชิก"}
          </button>

          <p className="text-center mt-6 text-[0.875rem] text-gray-500">
            {mode === "login" ? "ยังไม่มีบัญชี?" : "มีบัญชีแล้ว?"}
            {" "}
            <button
              onClick={() => { setMode(mode === "login" ? "register" : "login"); setError(""); }}
              className="bg-transparent border-none text-blue-600 font-bold cursor-pointer text-[0.875rem] hover:underline"
              style={{ fontFamily: "'Sarabun', sans-serif" }}
            >
              {mode === "login" ? "สมัครสมาชิก" : "เข้าสู่ระบบ"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, icon, type, value, onChange, placeholder, onKeyDown }) {
  return (
    <div className="mb-[1.1rem]">
      <label className="block text-[0.8rem] font-semibold text-gray-700 mb-[0.4rem]" style={{ fontFamily: "'Sarabun', sans-serif" }}>
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base">{icon}</span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="w-full py-[0.7rem] pr-[0.85rem] pl-[2.4rem] border-[1.5px] border-gray-200 rounded-[9px] text-[0.875rem] outline-none box-border bg-gray-50 focus:border-blue-500 transition-colors"
          style={{ fontFamily: "'Sarabun', sans-serif" }}
        />
      </div>
    </div>
  );
}
