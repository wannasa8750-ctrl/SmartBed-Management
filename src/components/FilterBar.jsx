// src/components/FilterBar.jsx — Dark / Light theme support

import { WARDS, STATUS_CONFIG } from "../data/constants";
import { useTheme } from "../context/ThemeContext";

export function FilterBar({ filters, onChange, totalFiltered, totalAll }) {
  const { isDark } = useTheme();
  const { ward, status, search } = filters;

  const cardBg   = isDark ? "rgba(15,23,42,0.85)"       : "#ffffff";
  const border   = isDark ? "rgba(255,255,255,0.07)"     : "rgba(0,0,0,0.06)";
  const shadow   = isDark ? "0 4px 16px rgba(0,0,0,0.3)"  : "0 2px 8px rgba(0,0,0,0.07)";
  const inputBg  = isDark ? "#1e293b"                    : "#f8faff";
  const inputBdr = isDark ? "rgba(255,255,255,0.1)"      : "#e2e8f0";
  const focusClr = isDark ? "#818cf8"                    : "#6366f1";
  const textClr  = isDark ? "#e2e8f0"                    : "#1e293b";
  const lblClr   = isDark ? "#64748b"                    : "#94a3b8";

  const inputStyle = {
    background: inputBg,
    border: `1.5px solid ${inputBdr}`,
    color: textClr,
    fontFamily: "'Sarabun', sans-serif",
    outline: "none",
    borderRadius: "10px",
    padding: "0.6rem 0.85rem",
    fontSize: "0.875rem",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const focusHandlers = {
    onFocus: (e) => {
      e.target.style.borderColor = focusClr;
      e.target.style.boxShadow = `0 0 0 3px ${focusClr}22`;
    },
    onBlur: (e) => {
      e.target.style.borderColor = inputBdr;
      e.target.style.boxShadow = "none";
    },
  };

  return (
    <div
      className="rounded-xl px-5 py-4 mb-5 flex gap-3 flex-wrap items-center"
      style={{
        background: cardBg,
        border: `1px solid ${border}`,
        boxShadow: shadow,
        fontFamily: "'Sarabun', sans-serif",
      }}
    >
      {/* Search */}
      <input
        placeholder="🔍 ค้นหาเตียงหรือผู้ป่วย..."
        value={search}
        onChange={(e) => onChange({ ...filters, search: e.target.value })}
        style={{ ...inputStyle, width: "620px", cursor: "text" }}
        {...focusHandlers}
      />

      {/* Ward filter */}
      <select
        value={ward}
        onChange={(e) => onChange({ ...filters, ward: e.target.value })}
        style={{ ...inputStyle, width: "160px", cursor: "pointer" }}
        {...focusHandlers}
      >
        <option value="ทั้งหมด" style={{ background: isDark ? "#1e293b" : "#fff" }}>วอร์ดทั้งหมด</option>
        {WARDS.map((w) => (
          <option key={w} style={{ background: isDark ? "#1e293b" : "#fff" }}>{w}</option>
        ))}
      </select>

      {/* Status filter */}
      <select
        value={status}
        onChange={(e) => onChange({ ...filters, status: e.target.value })}
        style={{ ...inputStyle, width: "160px", cursor: "pointer" }}
        {...focusHandlers}
      >
        <option value="ทั้งหมด" style={{ background: isDark ? "#1e293b" : "#fff" }}>สถานะทั้งหมด</option>
        {Object.entries(STATUS_CONFIG).map(([k, v]) => (
          <option key={k} value={k} style={{ background: isDark ? "#1e293b" : "#fff" }}>
            {v.label}
          </option>
        ))}
      </select>

      {/* Result count */}
      <span className="text-[0.85rem] ml-auto font-medium" style={{ color: lblClr }}>
        แสดง{" "}
        <span className="font-bold" style={{ color: isDark ? "#818cf8" : "#6366f1" }}>
          {totalFiltered}
        </span>{" "}
        จาก {totalAll} เตียง
      </span>
    </div>
  );
}
