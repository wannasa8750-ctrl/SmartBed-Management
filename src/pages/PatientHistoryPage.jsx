// src/pages/PatientHistoryPage.jsx
// ประวัติผู้ป่วย — Dark / Light theme support

import { useState } from "react";
import { ClipboardList, User, BedDouble, Building2, Stethoscope, Calendar, Activity } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { GENDER_CONFIG } from "../data/constants";

const ACTION_LABEL = {
  status_change: { label: "เปลี่ยนสถานะ", color: "#f59e0b", bg: "#fef3c7", bgDark: "rgba(245,158,11,0.12)" },
  deleted:       { label: "ลบเตียง",       color: "#ef4444", bg: "#fee2e2", bgDark: "rgba(239,68,68,0.12)" },
};

const STATUS_LABEL = {
  occupied:    "มีผู้ป่วย",
  available:   "ว่าง",
  maintenance: "ซ่อมบำรุง",
  cleaning:    "ทำความสะอาด",
};

function formatDate(ts) {
  if (!ts) return "—";
  const d = new Date(typeof ts === "number" ? ts : ts);
  return d.toLocaleString("th-TH", {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

export function PatientHistoryPage({ history }) {
  const { isDark } = useTheme();
  const [search, setSearch] = useState("");
  const [filterAction, setFilterAction] = useState("ทั้งหมด");

  const filtered = history.filter((h) => {
    const matchSearch =
      !search ||
      h.patient?.includes(search) ||
      h.bedNumber?.toLowerCase().includes(search.toLowerCase()) ||
      h.ward?.includes(search);
    const matchAction = filterAction === "ทั้งหมด" || h.action === filterAction;
    return matchSearch && matchAction;
  });

  // ── Theme tokens ─────────────────────────────────────────────
  const pageBg      = isDark ? "#060d1f" : "#f0f5ff";
  const cardBg      = isDark ? "rgba(15,23,42,0.9)" : "#ffffff";
  const border      = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
  const headBg      = isDark ? "rgba(15,23,42,0.6)"  : "#f8faff";
  const rowHover    = isDark ? "rgba(99,102,241,0.05)" : "rgba(239,246,255,0.7)";
  const titleClr    = isDark ? "#e2e8f0" : "#1e293b";
  const subTxt      = isDark ? "#64748b" : "#94a3b8";
  const textMd      = isDark ? "#94a3b8" : "#64748b";
  const textBody    = isDark ? "#cbd5e1" : "#334155";
  const divider     = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const inputBg     = isDark ? "rgba(15,23,42,0.8)" : "#ffffff";
  const inputBdr    = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const inputFocus  = isDark ? "#818cf8" : "#6366f1";
  const badgeBg     = isDark ? "rgba(99,102,241,0.12)" : "#eff6ff";
  const badgeBdr    = isDark ? "rgba(99,102,241,0.2)"  : "#bfdbfe";
  const badgeClr    = isDark ? "#818cf8" : "#4338ca";
  const avatarBg    = isDark ? "#1e3a5f" : "#e0e7ff";
  const avatarClr   = isDark ? "#93c5fd" : "#4338ca";
  const countBg     = isDark ? "rgba(99,102,241,0.12)" : "#eff6ff";
  const countBdr    = isDark ? "rgba(99,102,241,0.25)"  : "#bfdbfe";
  const countClr    = isDark ? "#818cf8" : "#4338ca";

  return (
    <div
      className="min-h-full px-8 py-6 max-w-[1400px] mx-auto"
      style={{ fontFamily: "'Sarabun', sans-serif", transition: "all 0.35s" }}
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <ClipboardList size={22} style={{ color: isDark ? "#818cf8" : "#4338ca" }} />
          <div>
            <h2 className="text-xl font-bold" style={{ color: titleClr }}>ประวัติผู้ป่วย</h2>
            <p className="text-sm" style={{ color: subTxt }}>บันทึกอัตโนมัติเมื่อมีการเปลี่ยนสถานะเตียงหรือลบเตียงที่มีผู้ป่วย</p>
          </div>
        </div>
        <div
          className="rounded-xl px-4 py-2 text-sm font-semibold border"
          style={{ background: countBg, borderColor: countBdr, color: countClr }}
        >
          {history.length} รายการ
        </div>
      </div>

      {/* ── Filters ── */}
      <div className="flex gap-3 mb-5 flex-wrap">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 ค้นหาชื่อผู้ป่วย, เตียง, วอร์ด..."
          className="rounded-xl px-4 py-2 text-sm outline-none flex-1 min-w-[220px] transition-all"
          style={{
            background: inputBg,
            border: `1.5px solid ${inputBdr}`,
            color: titleClr,
            fontFamily: "'Sarabun', sans-serif",
          }}
          onFocus={e => e.target.style.borderColor = inputFocus}
          onBlur={e => e.target.style.borderColor = inputBdr}
        />
        {["ทั้งหมด", "status_change", "deleted"].map((a) => (
          <button
            key={a}
            onClick={() => setFilterAction(a)}
            className="px-4 py-2 rounded-xl text-sm font-semibold border transition-all"
            style={{
              background: filterAction === a
                ? (isDark ? "#4f46e5" : "#4338ca")
                : (isDark ? "rgba(15,23,42,0.6)" : "#ffffff"),
              borderColor: filterAction === a
                ? (isDark ? "#6366f1" : "#4338ca")
                : (isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"),
              color: filterAction === a ? "#ffffff" : (isDark ? "#94a3b8" : "#475569"),
            }}
          >
            {a === "ทั้งหมด" ? "ทั้งหมด" : a === "status_change" ? "เปลี่ยนสถานะ" : "ลบเตียง"}
          </button>
        ))}
      </div>

      {/* ── Table ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20" style={{ color: subTxt }}>
          <ClipboardList size={48} className="mx-auto mb-3 opacity-30" />
          <p className="text-base">ยังไม่มีประวัติผู้ป่วย</p>
          <p className="text-sm mt-1">ประวัติจะถูกบันทึกอัตโนมัติเมื่อมีการเปลี่ยนสถานะเตียงหรือลบเตียงที่มีผู้ป่วย</p>
        </div>
      ) : (
        <div
          className="rounded-2xl overflow-auto shadow-sm"
          style={{ background: cardBg, border: `1px solid ${border}` }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: headBg, borderBottom: `1px solid ${divider}` }}>
                {[
                  { label: "เวลาบันทึก",      icon: Calendar },
                  { label: "การกระทำ",         icon: Activity },
                  { label: "ผู้ป่วย",          icon: User },
                  { label: "เตียง",            icon: BedDouble },
                  { label: "วอร์ด",            icon: Building2 },
                  { label: "การวินิจฉัย",      icon: Stethoscope },
                  { label: "สถานะเดิม → ใหม่", icon: null },
                  { label: "หมายเหตุ",         icon: null },
                ].map(({ label, icon: Icon }, i) => (
                  <th key={i} className="px-4 py-3 text-left">
                    <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide" style={{ color: textMd }}>
                      {Icon && <Icon size={12} />}
                      {label}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((h, i) => {
                const actionCfg = ACTION_LABEL[h.action] ?? {
                  label: h.action, color: "#6b7280",
                  bg: "#f3f4f6", bgDark: "rgba(107,114,128,0.12)",
                };
                const badgeColor = isDark ? actionCfg.bgDark : actionCfg.bg;
                return (
                  <tr
                    key={h.firebaseKey || i}
                    style={{ borderBottom: `1px solid ${divider}` }}
                    onMouseEnter={e => e.currentTarget.style.background = rowHover}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    {/* เวลา */}
                    <td className="px-4 py-3 text-xs whitespace-nowrap" style={{ color: textMd }}>
                      {formatDate(h.recordedAt)}
                    </td>
                    {/* action */}
                    <td className="px-4 py-3">
                      <span
                        className="px-2.5 py-1 rounded-lg text-xs font-bold"
                        style={{ color: actionCfg.color, background: badgeColor }}
                      >
                        {actionCfg.label}
                      </span>
                    </td>
                    {/* ผู้ป่วย */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                          style={{ background: avatarBg, color: avatarClr }}
                        >
                          {h.patient?.[0] || "?"}
                        </div>
                        <div>
                          <div className="font-semibold" style={{ color: titleClr }}>{h.patient || "—"}</div>
                          {h.gender && GENDER_CONFIG[h.gender] && (
                            <div className="text-xs" style={{ color: textMd }}>{GENDER_CONFIG[h.gender].label}</div>
                          )}
                          {h.age && <div className="text-xs" style={{ color: textMd }}>{h.age} ปี</div>}
                        </div>
                      </div>
                    </td>
                    {/* เตียง */}
                    <td className="px-4 py-3">
                      <span className="font-mono text-sm font-bold" style={{ color: isDark ? "#38bdf8" : "#2563eb" }}>
                        {h.bedNumber}
                      </span>
                    </td>
                    {/* วอร์ด */}
                    <td className="px-4 py-3">
                      <span
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold border"
                        style={{ background: badgeBg, color: badgeClr, borderColor: badgeBdr }}
                      >
                        {h.ward}
                      </span>
                    </td>
                    {/* วินิจฉัย */}
                    <td className="px-4 py-3 text-xs max-w-[150px]" style={{ color: textMd }}>
                      {h.diagnosis || "—"}
                    </td>
                    {/* สถานะ */}
                    <td className="px-4 py-3 text-xs whitespace-nowrap" style={{ color: textMd }}>
                      {h.fromStatus ? (
                        <span className="flex items-center gap-1">
                          <span className="font-medium" style={{ color: textBody }}>{STATUS_LABEL[h.fromStatus] ?? h.fromStatus}</span>
                          {h.toStatus && (
                            <>
                              <span style={{ color: subTxt }}>→</span>
                              <span className="font-medium" style={{ color: isDark ? "#818cf8" : "#4338ca" }}>
                                {STATUS_LABEL[h.toStatus] ?? h.toStatus}
                              </span>
                            </>
                          )}
                        </span>
                      ) : "—"}
                    </td>
                    {/* หมายเหตุ */}
                    <td className="px-4 py-3 text-xs max-w-[140px] truncate" style={{ color: subTxt }}>
                      {h.notes || "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
