// src/App.jsx — Main orchestrator with Login + Dashboard + Bed Management
import { useState } from "react";
import { Sun, Moon, ClipboardClock, Bed, History } from 'lucide-react';
import { FilterBar } from "./components/FilterBar";
import { BedCard } from "./components/BedCard";
import { AddModal, EditModal, ViewModal, DeleteModal } from "./components/Modals";
import { Toast } from "./components/UI";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { PatientHistoryPage } from "./pages/PatientHistoryPage";
import { useBeds } from "./hooks/useBeds";
import { useToast } from "./hooks/useToast";
import { useAuth } from "./hooks/useAuth";
import { logout } from "./firebase/authService";
import { seedInitialData } from "./firebase/bedService";
import { WARDS, INITIAL_BEDS } from "./data/constants";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const EMPTY_FORM = {
  bedNumber: "", ward: WARDS[0], status: "available",
  patient: "", gender: "", age: "", admitDate: "", diagnosis: "", notes: "",
};

// ── Theme Toggle Button ───────────────────────────────────────
function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      title={isDark ? "สลับเป็น Light Mode" : "สลับเป็น Dark Mode"}
      /* ปรับความกว้างเป็น 64px (w-16) เพื่อให้มีพื้นที่วิ่งสลับฝั่ง */
      className="relative w-16 h-10 rounded-full flex items-center p-1 transition-all duration-500 ease-in-out overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
          : "linear-gradient(135deg, #7dd3fc 0%, #38bdf8 100%)",
        border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
        boxShadow: isDark
          ? "inset 0 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(139,92,246,0.2)"
          : "inset 0 2px 4px rgba(255,255,255,0.3), 0 0 10px rgba(251,191,36,0.3)",
      }}
    >
      {/* วงกลมสีขาว/เหลืองที่จะเลื่อนไปมา */}
      <div
        className={`absolute w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)`}
        style={{
          background: isDark ? "#1e293b" : "#fff",
          transform: isDark ? "translateX(32px)" : "translateX(0px)", // เลื่อนตำแหน่ง
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        {isDark ? (
          <Moon
            size={14}
            className="rotate-[-(360deg)] transition-transform duration-500"
            style={{ color: "#c7d2fe", filter: "drop-shadow(0 0 4px #818cf8)" }}
          />
        ) : (
          <Sun
            size={14}
            className="rotate-0 transition-transform duration-500"
            style={{ color: "#fbbf24", filter: "drop-shadow(0 0 4px #fbbf24)" }}
          />
        )}
      </div>

      {/* ไอคอนจางๆ ด้านหลัง (Optional: เพิ่มลูกเล่น) */}
      <div className="flex justify-between w-full px-1 opacity-40">
        <Sun size={12} color="#fff" />
        <Moon size={12} color="#fff" />
      </div>
    </button>
  );
}

// ── Inner App ────────────────────────────────────────────────
function AppInner() {
  const { user, authLoading } = useAuth();
  const { beds, patientHistory, loading, error, addBed, editBed, removeBed, filterBeds } = useBeds();
  const { toast, showToast } = useToast();
  const { isDark } = useTheme();

  const [page, setPage] = useState("beds");
  const [modal, setModal] = useState(null);
  const [selectedBed, setSelectedBed] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [filters, setFilters] = useState({ ward: "ทั้งหมด", status: "ทั้งหมด", search: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  const closeModal = () => { setModal(null); setSelectedBed(null); };
  const openAdd = () => { setForm(EMPTY_FORM); setModal("add"); };
  const openEdit = (b) => { setSelectedBed(b); setForm({ ...b }); setModal("edit"); };
  const openView = (b) => { setSelectedBed(b); setModal("view"); };
  const openDelete = (b) => { setSelectedBed(b); setModal("delete"); };

  const handleAdd = async () => {
    if (!form.bedNumber || !form.ward) return alert("กรุณากรอกหมายเลขเตียงและวอร์ด");

    if (form.status !== "occupied") {
      form.patient = "";
      form.age = "";
      form.gender = "";
      form.admitDate = "";
      form.diagnosis = "";
      form.notes = "";
    }

    if (form.status === "occupied") {
      console.log(form)
      if (!form.patient.trim()) return alert("กรุณากรอกชื่อผู้ป่วยเมื่อสถานะเป็น 'มีผู้ป่วย'");
      if (form.age <= 0) return alert("กรุณากรอกอายุผู้ป่วย");
      if (!form.gender || form.gender === "none") return alert("กรุณากรอกเพศผู้ป่วย");
      if (!form.admitDate) return alert("กรุณากรอกวันที่เข้า Admit");
    }

    try {
      await addBed(form);
      closeModal();
      showToast(`เพิ่มเตียง ${form.bedNumber} สำเร็จ`);
    } catch {
      showToast("ไม่สามารถเพิ่มข้อมูลได้", "error");
    }
  };

  const handleEdit = async () => {
    if (form.status !== "occupied") {
      form.patient = "";
      form.gender = "";
      form.age = "";
      form.admitDate = "";
      form.diagnosis = "";
      form.notes = "";
    }

    if (form.status === "occupied") {
      if (!form.patient.trim()) return alert("กรุณากรอกชื่อผู้ป่วยเมื่อสถานะเป็น 'มีผู้ป่วย'");
      if (form.age <= 0) return alert("กรุณากรอกอายุผู้ป่วย");
      if (!form.gender || form.gender === "none") return alert("กรุณากรอกเพศผู้ป่วย");
      if (!form.admitDate) return alert("กรุณากรอกวันที่เข้า Admit");
    }

    try {
      await editBed(selectedBed.firebaseKey, form);
      showToast(`อัปเดต ${form.bedNumber} สำเร็จ`);
      closeModal();
    } catch {
      showToast("ไม่สามารถแก้ไขข้อมูลได้", "error");
    }
  };
  const handleDelete = async () => {
    const name = selectedBed.bedNumber;
    try {
      await removeBed(selectedBed.firebaseKey);
      closeModal();
      showToast(`ลบเตียง ${name} แล้ว`, "error");
    } catch {
      showToast("ไม่สามารถลบข้อมูลได้", "error");
    }
  };

  const handleSeed = async () => {
    if (!window.confirm("ต้องการเพิ่มข้อมูลตัวอย่างเข้า Firebase หรือไม่?")) return;
    await seedInitialData(INITIAL_BEDS);
    showToast("เพิ่มข้อมูลตัวอย่างสำเร็จ");
  };
  const handleLogout = async () => { await logout(); showToast("ออกจากระบบแล้ว", "error"); };

  const filtered = filterBeds(filters);

  // Theme tokens
  const pageBg = isDark ? "#060d1f" : "#f0f5ff";
  const cardBg = isDark ? "#0f172a" : "#ffffff";
  const textPrimary = isDark ? "#f1f5f9" : "#1e293b";
  const textSecondary = isDark ? "#94a3b8" : "#64748b";
  const borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";

  if (authLoading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: pageBg, fontFamily: "'Sarabun',sans-serif" }}>
      <div className="text-center">
        <div className="text-[3rem] animate-spin inline-block">⚙️</div>
        <p className="mt-4" style={{ color: textSecondary }}>กำลังตรวจสอบสถานะการเข้าสู่ระบบ...</p>
      </div>
    </div>
  );

  if (!user) return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{"*{box-sizing:border-box;margin:0;padding:0;}"}</style>
      <LoginPage />
    </>
  );


  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:${pageBg};transition:background 0.35s;}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      `}</style>

      <div className="min-h-screen flex flex-col" style={{ background: pageBg, transition: "background 0.35s" }}>

        {/* ── Top bar ── */}
        <div
          className="px-8 flex items-center justify-between min-h-[75px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] shrink-0 py-2"
          style={{
            background: "linear-gradient(135deg,#1e3a5f 0%,#1d4ed8 100%)",
            flexDirection: "column"
          }}
        >

          <div className="nav-top">
            <div className="flex items-center justify-between w-full">

              {/* Logo */}
              <div className="flex items-center gap-3">
                <img
                  src="../logo.png"
                  alt="Hospital Logo"
                  className="w-[50px] h-[50px] object-contain"
                />

                <div>
                  <div
                    className="text-white font-extrabold text-base"
                    style={{ fontFamily: "'Sarabun',sans-serif" }}
                  >
                    Smart Bed Management
                  </div>

                  <div
                    className="text-[#93c5fd] text-[0.7rem]"
                    style={{ fontFamily: "'Sarabun',sans-serif" }}
                  >
                    โรงพยาบาลสมาร์ทแคร์
                  </div>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-3">

                <ThemeToggle />

                <div className="bg-white/15 rounded-[20px] px-[0.85rem] py-[0.3rem] pl-2 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center text-[0.9rem]">
                    {(user.displayName || user.email || "?")[0].toUpperCase()}
                  </div>

                  <span
                    className="text-white text-[0.82rem] font-semibold"
                    style={{ fontFamily: "'Sarabun',sans-serif" }}
                  >
                    {user.displayName || user.email}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-600 to-rose-700 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg hover:from-red-500 hover:to-rose-600 active:scale-95 transition-all duration-200"
                  style={{ fontFamily: "'Sarabun',sans-serif" }}
                >
                  ออกจากระบบ
                </button>

              </div>

              {/* Hamburger */}
              <button
                className="md:hidden flex flex-col gap-[5px]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="w-6 h-[2px] bg-white"></span>
                <span className="w-6 h-[2px] bg-white"></span>
                <span className="w-6 h-[2px] bg-white"></span>
              </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="md:hidden mt-3 bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col gap-4 menu">

                <ThemeToggle />

                <div className="bg-white/15 rounded-[20px] px-[0.85rem] py-[0.5rem] flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center text-[0.9rem]">
                    {(user.displayName || user.email || "?")[0].toUpperCase()}
                  </div>

                  <span
                    className="text-white text-sm font-semibold"
                    style={{ fontFamily: "'Sarabun',sans-serif" }}
                  >
                    {user.displayName || user.email}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-600 to-rose-700 text-white py-2 rounded-xl font-semibold text-sm"
                  style={{ fontFamily: "'Sarabun',sans-serif" }}
                >
                  ออกจากระบบ
                </button>

              </div>
            )}
          </div>

        </div>
        <div
          className="nav-bottom flex justify-center items-center py-3"
          style={{

            position: "rela tive",
            zIndex: 20,

          }}
        >
          <div className="flex gap-3 bg-white/10 backdrop-blur-md px-3 py-2 rounded-2xl shadow-md">
            {[
              { icon: <ClipboardClock />, id: "dashboard", label: "Dashboard" },
              { icon: <Bed />, id: "beds", label: "จัดการเตียง" },
              { icon: <History />, id: "history", label: "ประวัติการใช้งาน" }].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  style={{ fontFamily: "'Sarabun',sans-serif" }}
                  className={`flex flexDirection-row px-5 py-2 rounded-xl cursor-pointer font-semibold text-sm transition-all duration-200 border ${page === item.id
                    ? "bg-white text-blue-700 shadow-md border-white"
                    : "bg-transparent text-[#93c5fd] border-transparent hover:text-blue hover:bg-white/50"
                    }`}
                >
                  <i style={{ paddingRight: 5 }}>{item.icon}</i> {item.label}
                </button>
              ))}
          </div>
        </div>

        {/* ── Page content ── */}
        <div className="flex-1 overflow-auto">
          {error && (
            <div className="mx-8 mt-4 px-4 py-3 rounded-xl border" style={{
              background: isDark ? "rgba(239,68,68,0.1)" : "#fff1f2",
              borderColor: isDark ? "rgba(239,68,68,0.3)" : "#fca5a5",
              color: isDark ? "#f87171" : "#dc2626",
              fontFamily: "'Sarabun',sans-serif",
            }}>
              ⚠️ Firebase Error: {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-20" style={{ color: textSecondary }}>
              <div className="text-[2.5rem] animate-spin inline-block">⚙️</div>
              <div className="mt-4" style={{ fontFamily: "'Sarabun',sans-serif" }}>กำลังโหลดข้อมูลจาก Firebase...</div>
            </div>
          ) : page === "dashboard" ? (
            <DashboardPage beds={beds} />
          ) : page === "history" ? (
            <PatientHistoryPage history={patientHistory} />
          ) : (
            /* ── Beds Page ── */
            <div className="px-8 py-6 max-w-[1400px] mx-auto">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block shadow-[0_0_0_3px_#d1fae5]" />
                  <span className="text-[0.78rem]" style={{ color: textSecondary }}>
                    Firebase Realtime — อัปเดตอัตโนมัติ
                  </span>
                </div>
                <div className="flex gap-3">
                  {beds.length === 0 && (
                    <button
                      onClick={handleSeed}
                      className="px-4 py-[0.55rem] rounded-lg cursor-pointer font-semibold text-[0.85rem] transition-colors"
                      style={{ background: cardBg, border: `1.5px solid ${borderColor}`, color: textPrimary, fontFamily: "'Sarabun',sans-serif" }}
                    >
                      🌱 เพิ่มข้อมูลตัวอย่าง
                    </button>
                  )}
                  <button
                    onClick={openAdd}
                    className="bg-emerald-600 border-none text-white px-[1.1rem] py-[0.55rem] rounded-lg cursor-pointer font-bold text-[0.9rem] hover:bg-emerald-700 transition-colors"
                    style={{ fontFamily: "'Sarabun',sans-serif" }}
                  >
                    + เพิ่มเตียง
                  </button>
                </div>
              </div>

              <FilterBar filters={filters} onChange={setFilters} totalFiltered={filtered.length} totalAll={beds.length} />
              {filtered.length > 0 ? (
                <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}>
                  {filtered.map((bed) => (
                    <BedCard key={bed.firebaseKey} bed={bed} onView={openView} onEdit={openEdit} onDelete={openDelete} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12" style={{ color: textSecondary }}>
                  <div className="text-[3rem]">{beds.length === 0 ? "🗄️" : "🔍"}</div>
                  <div className="mt-2" style={{ fontFamily: "'Sarabun',sans-serif" }}>
                    {beds.length === 0 ? "ยังไม่มีข้อมูลเตียง" : "ไม่พบข้อมูลที่ค้นหา"}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Modals ── */}
        {modal === "add" && <AddModal form={form} setForm={setForm} onSave={handleAdd} onClose={closeModal} />}
        {modal === "edit" && selectedBed && <EditModal bed={selectedBed} form={form} setForm={setForm} onSave={handleEdit} onClose={closeModal} />}
        {modal === "view" && selectedBed && <ViewModal bed={selectedBed} onEdit={() => { closeModal(); openEdit(selectedBed); }} onClose={closeModal} />}
        {modal === "delete" && selectedBed && <DeleteModal bed={selectedBed} onConfirm={handleDelete} onClose={closeModal} />}

        <Toast toast={toast} />
      </div >
    </>
  );
}

// ── Root export ──────────────────────────────────────────────
export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
