// src/components/BedCard.jsx — Dark / Light theme support

import { STATUS_CONFIG, GENDER_CONFIG } from "../data/constants";
import { useTheme } from "../context/ThemeContext";

export function BedCard({ bed, onView, onEdit, onDelete }) {
  const { isDark } = useTheme();
  const cfg = STATUS_CONFIG[bed.status];

  const cardBg = isDark ? "rgba(15,23,42,0.85)" : "#ffffff";
  const cardBdr = isDark ? `${cfg.color}25` : `${cfg.color}30`;
  const hdrBg = isDark
    ? `linear-gradient(135deg, ${cfg.color}18, ${cfg.color}08)`
    : cfg.bg;
  const hdrBdr = isDark ? `${cfg.color}25` : `${cfg.color}30`;
  const bedNumClr = isDark ? "#e2e8f0" : "#1e3a5f";
  const wardBg = isDark ? "rgba(99,102,241,0.12)" : "#f1f5f9";
  const wardClr = isDark ? "#818cf8" : "#475569";
  const patientClr = isDark ? "#f1f5f9" : "#1e293b";
  const subTxt = isDark ? "#64748b" : "#6b7280";
  const diagBg = isDark ? "rgba(255,255,255,0.04)" : "#f8faff";
  const diagClr = isDark ? "#94a3b8" : "#374151";
  const notesBdr = isDark ? "rgba(255,255,255,0.06)" : "#f1f5f9";
  const notesClr = isDark ? "#64748b" : "#9ca3af";
  const footerBg = isDark ? "rgba(255,255,255,0.03)" : "#f8faff";
  const footerBdr = isDark ? "rgba(255,255,255,0.06)" : "#f1f5f9";
  const emptyClr = isDark ? "#334155" : "#9ca3af";

  return (
    <div
      style={{
        background: cardBg,
        border: `1.5px solid ${cardBdr}`,
        fontFamily: "'Sarabun', sans-serif",
        boxShadow: isDark
          ? `0 4px 20px rgba(0,0,0,0.4), 0 0 0 0.5px ${cfg.color}15`
          : "0 2px 12px rgba(0,0,0,0.08)",
        transition: "all 0.2s",
      }}
      className="rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-[3px]"
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = isDark
          ? `0 12px 32px rgba(0,0,0,0.5), 0 0 0 1px ${cfg.color}35`
          : `0 8px 24px rgba(0,0,0,0.12)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = isDark
          ? `0 4px 20px rgba(0,0,0,0.4), 0 0 0 0.5px ${cfg.color}15`
          : "0 2px 12px rgba(0,0,0,0.08)";
      }}
    >
      {/* Card Header */}
      <div
        style={{ background: hdrBg, borderBottom: `2px solid ${hdrBdr}` }}
        className="px-4 py-3 flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <span className="text-[1.1rem]">🛏️</span>
          <span className="font-bold text-[0.95rem]" style={{ color: bedNumClr }}>{bed.bedNumber}</span>
        </div>
        <span
          className="px-[0.65rem] py-[0.2rem] rounded-full text-[0.75rem] font-semibold text-white"
          style={{
            background: cfg.color,
            boxShadow: isDark ? `0 0 10px ${cfg.color}60` : "none",
          }}
        >
          {cfg.label}
        </span>
      </div>

      {/* Card Body */}
      <div className="px-4 py-[0.875rem] flex-1">
        <span
          className="text-[0.78rem] px-2 py-[0.2rem] rounded-md inline-block mb-2 font-medium"
          style={{ background: wardBg, color: wardClr }}
        >
          {bed.ward}
        </span>

        {bed.patient ? (
          <div>
            <div className="text-[0.95rem] font-bold mb-1" style={{ color: patientClr }}>
              👤 {bed.patient}
            </div>
            <div className="text-[0.8rem]" style={{ color: subTxt }}>
              {bed.gender && GENDER_CONFIG[bed.gender] ? `${GENDER_CONFIG[bed.gender].label} | ` : ""}อายุ: {bed.age} ปี | รับ: {bed.admitDate}
            </div>
            <div
              className="text-[0.8rem] mt-1 px-2 py-[0.35rem] rounded-md"
              style={{ background: diagBg, color: diagClr }}
            >
              🩺 {bed.diagnosis}
            </div>
          </div>
        ) : (
          <div className="text-[0.85rem] italic py-2" style={{ color: emptyClr }}>
            ไม่มีผู้ป่วย
          </div>
        )}

        {bed.notes && (
          <div
            className="text-[0.75rem] mt-[0.4rem] pt-[0.4rem]"
            style={{
              borderTop: `1px solid ${notesBdr}`,
              color: notesClr,
            }}
          >
            📝 {bed.notes}
          </div>
        )}
      </div>

      {/* Card Actions */}
      <div
        className="flex gap-2 px-4 py-3 mt-auto"
        style={{ background: footerBg, borderTop: `1px solid ${footerBdr}` }}
      >
        <ActionBtn isDark={isDark} onClick={() => onView(bed)} label="📋 ดู" />
        <ActionBtn isDark={isDark} onClick={() => onEdit(bed)} label="✏️ แก้ไข"
          color="#2563eb" bg={isDark ? "rgba(37,99,235,0.12)" : "#eff6ff"} border={isDark ? "rgba(59,130,246,0.3)" : "#3b82f6"} />
        <ActionBtn isDark={isDark} onClick={() => onDelete(bed)} label="🗑️ ลบ"
          color="#ef4444" bg={isDark ? "rgba(239,68,68,0.1)" : "#fef2f2"} border={isDark ? "rgba(239,68,68,0.3)" : "#ef4444"} />
      </div>
    </div>
  );
}

function ActionBtn({ isDark, onClick, label, color, bg, border }) {
  const _color = color ?? (isDark ? "#94a3b8" : "#374151");
  const _bg = bg ?? (isDark ? "rgba(255,255,255,0.05)" : "#ffffff");
  const _border = border ?? (isDark ? "rgba(255,255,255,0.1)" : "#e5e7eb");

  return (
    <button
      onClick={onClick}
      style={{
        border: `1.5px solid ${_border}`,
        background: _bg,
        color: _color,
        fontFamily: "'Sarabun', sans-serif",
      }}
      className="flex-1 py-[0.45rem] rounded-[7px] cursor-pointer text-[0.8rem] font-semibold hover:opacity-80 transition-opacity"
    >
      {label}
    </button>
  );
}
