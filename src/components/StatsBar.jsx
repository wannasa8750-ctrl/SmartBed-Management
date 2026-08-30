// src/components/StatsBar.jsx — Dark / Light theme support

import { STATUS_CONFIG } from "../data/constants";
import { useTheme } from "../context/ThemeContext";

export function StatsBar({ beds }) {
  const { isDark } = useTheme();

  const cardBg  = isDark ? "rgba(15,23,42,0.85)"       : "#ffffff";
  const border  = isDark ? "rgba(255,255,255,0.07)"     : "rgba(0,0,0,0.06)";
  const shadow  = isDark ? "0 4px 16px rgba(0,0,0,0.4)"  : "0 2px 8px rgba(0,0,0,0.07)";
  const lblClr  = isDark ? "#64748b" : "#6b7280";

  const total = { label: "เตียงทั้งหมด", count: beds.length, color: "#818cf8", icon: "🛏️" };
  const stats = Object.entries(STATUS_CONFIG).map(([key, cfg]) => ({
    key, label: cfg.label, count: beds.filter((b) => b.status === key).length,
    color: cfg.color, icon: cfg.icon,
  }));

  return (
    <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
      {[total, ...stats].map((s, i) => (
        <div
          key={i}
          style={{
            background: cardBg,
            border: `1px solid ${border}`,
            borderLeft: `4px solid ${s.color}`,
            boxShadow: isDark ? `${shadow}, 0 0 0 0.5px ${s.color}15` : shadow,
            fontFamily: "'Sarabun', sans-serif",
            transition: "all 0.2s",
          }}
          className="rounded-xl px-5 py-4 flex items-center gap-3 hover:-translate-y-px"
        >
          <div className="text-[1.6rem]">{s.icon}</div>
          <div>
            <div
              className="text-[1.6rem] font-extrabold leading-none"
              style={{
                color: s.color,
                textShadow: isDark ? `0 0 16px ${s.color}60` : "none",
              }}
            >
              {s.count}
            </div>
            <div className="text-[0.78rem] font-medium" style={{ color: lblClr }}>
              {s.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
