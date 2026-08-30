// src/components/UI.jsx — Dark / Light theme support

import { useTheme } from "../context/ThemeContext";

// ─── Modal ────────────────────────────────────────────────────
export function Modal({ title, children, onClose }) {
  const { isDark } = useTheme();
  const bg      = isDark ? "#0f172a"           : "#ffffff";
  const divider = isDark ? "rgba(255,255,255,0.06)" : "#f1f5f9";
  const overlay = isDark ? "rgba(0,0,0,0.75)"  : "rgba(0,0,0,0.5)";

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[1000] p-4"
      style={{ background: overlay }}
    >
      <div
        className="rounded-2xl w-full max-w-[540px] shadow-2xl overflow-hidden max-h-screen overflow-y-auto"
        style={{ background: bg, border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}` }}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] px-6 py-5 flex justify-between items-center">
          <h2 className="text-white m-0 text-[1.1rem] font-bold" style={{ fontFamily: "'Sarabun', sans-serif" }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            className="bg-white/20 border-none text-white w-8 h-8 rounded-full cursor-pointer text-[1.1rem] flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            ✕
          </button>
        </div>
        {/* Body */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ─── InputField ───────────────────────────────────────────────
export function InputField({ label, type = "text", value, onChange, options, required, disabled, lock= false }) {
  const { isDark } = useTheme();
  if (disabled) return null;

  const bg      = isDark ? "#1e293b"   : "#f8faff";
  const border  = isDark ? "rgba(255,255,255,0.1)" : "#e2e8f0";
  const focusC  = isDark ? "#818cf8"   : "#6366f1";
  const textClr = isDark ? "#e2e8f0"   : "#1e293b";
  const lblClr  = isDark ? "#94a3b8"   : "#475569";

  const inputCls = "w-full px-[0.85rem] py-[0.6rem] rounded-lg text-sm outline-none box-border transition-all";
  const inputStyle = {
    background: bg,
    border: `1.5px solid ${border}`,
    color: textClr,
    fontFamily: "'Sarabun', sans-serif",
  };

  const focusHandlers = {
    onFocus: (e) => { e.target.style.borderColor = focusC; e.target.style.boxShadow = `0 0 0 3px ${focusC}22`; },
    onBlur:  (e) => { e.target.style.borderColor = border; e.target.style.boxShadow = "none"; },
  };

  return (
    <div className="mb-4">
      <label
        className="block text-[0.8rem] font-semibold mb-[0.35rem]"
        style={{ color: lblClr, fontFamily: "'Sarabun', sans-serif" }}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>

      {options ? (
        <select 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
          style={{ ...inputStyle, cursor: "pointer" }}
          {...focusHandlers}
        >
          {options.map((o) => (
            <option key={o.value ?? o} value={o.value ?? o}
              style={{ background: isDark ? "#1e293b" : "#ffffff", color: textClr }}>
              {o.label ?? o}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className={`${inputCls} resize-y`}
          style={inputStyle}
          {...focusHandlers}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
          style={inputStyle}
          readOnly={lock}
          {...focusHandlers}
        />
      )}
    </div>
  );
}

// ─── BtnPrimary ───────────────────────────────────────────────
export function BtnPrimary({ onClick, children, color = "#2563eb", disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ background: disabled ? "#4b5563" : color, fontFamily: "'Sarabun', sans-serif" }}
      className="text-white border-none px-5 py-[0.6rem] rounded-lg cursor-pointer font-semibold text-sm transition-all disabled:cursor-not-allowed disabled:opacity-60 hover:opacity-85 hover:-translate-y-px active:scale-95"
    >
      {children}
    </button>
  );
}

// ─── BtnOutline ───────────────────────────────────────────────
export function BtnOutline({ onClick, children, color, bg, border, disabled }) {
  const { isDark } = useTheme();
  const _color  = color  ?? (isDark ? "#94a3b8" : "#374151");
  const _bg     = bg     ?? (isDark ? "rgba(255,255,255,0.05)" : "#ffffff");
  const _border = border ?? (isDark ? "rgba(255,255,255,0.15)" : "#e2e8f0");

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ border: `1.5px solid ${_border}`, background: _bg, color: _color, fontFamily: "'Sarabun', sans-serif" }}
      className="px-5 py-[0.6rem] rounded-lg cursor-pointer font-semibold text-sm disabled:cursor-not-allowed disabled:opacity-60 hover:opacity-80 transition-all"
    >
      {children}
    </button>
  );
}

// ─── Toast ────────────────────────────────────────────────────
export function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div
      style={{
        background: toast.type === "error" ? "#dc2626" : "#059669",
        fontFamily: "'Sarabun', sans-serif",
        animation: "fadeIn 0.3s ease",
      }}
      className="fixed bottom-6 right-6 z-[2000] text-white px-5 py-[0.85rem] rounded-xl shadow-2xl text-[0.9rem] font-semibold"
    >
      {toast.type === "error" ? "🗑️" : "✅"} {toast.msg}
    </div>
  );
}

export const inputStyle = {
  width: "100%",
  padding: "0.6rem 0.85rem",
  border: "1.5px solid #e5e7eb",
  borderRadius: "8px",
  fontSize: "0.875rem",
  fontFamily: "'Sarabun', sans-serif",
  outline: "none",
  boxSizing: "border-box",
  background: "#f9fafb",
  color: "#111827",
};
