// src/pages/DashboardPage.jsx
// Premium Private Hospital Dashboard — Dark/Light Theme Support

import { useState, useEffect, useMemo } from "react";
import {
  BedDouble, Users, CheckCircle2, Wrench, Sparkles,
  Activity, AlertTriangle, Building2,
  ChevronRight, Calendar, User, Stethoscope, Wifi,
  BarChart3, Shield, Zap, Clock, TrendingUp, TrendingDown,
} from "lucide-react";
import { STATUS_CONFIG, WARDS } from "../data/constants";
import { useTheme } from "../context/ThemeContext";

// ── Gauge ─────────────────────────────────────────────────────
function ArcGauge({ pct, isDark }) {
  const r = 70, cx = 100, cy = 100;
  const startAngle = -210, sweep = 240;
  const toRad = (d) => (d * Math.PI) / 180;
  const polar = (angle, rad) => ({
    x: cx + rad * Math.cos(toRad(angle)),
    y: cy + rad * Math.sin(toRad(angle)),
  });
  const arc = (startDeg, sweepDeg, rad) => {
    const s = polar(startDeg, rad), e = polar(startDeg + sweepDeg, rad);
    return `M ${s.x} ${s.y} A ${rad} ${rad} 0 ${sweepDeg > 180 ? 1 : 0} 1 ${e.x} ${e.y}`;
  };
  const fillSweep = (pct / 100) * sweep;
  const color = pct > 80 ? "#ef4444" : pct > 60 ? "#f59e0b" : "#06b6d4";
  const tip = polar(startAngle + fillSweep, r);
  const trackColor = isDark ? "#1e293b" : "#e2e8f0";
  const labelColor = isDark ? "#475569" : "#94a3b8";

  return (
    <svg viewBox="0 0 200 170" className="w-full max-w-[200px]">
      <path d={arc(startAngle, sweep, r)} fill="none" stroke={trackColor} strokeWidth="14" strokeLinecap="round" />
      <path d={arc(startAngle, fillSweep, r)} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round"
        style={{ filter: `drop-shadow(0 0 6px ${color}80)` }} />
      {pct > 0 && <circle cx={tip.x} cy={tip.y} r="7" fill={color} style={{ filter: `drop-shadow(0 0 8px ${color})` }} />}
      <text x="100" y="108" textAnchor="middle" fill={color}
        style={{ fontSize: 34, fontWeight: 800, fontFamily: "monospace" }}>{pct}%</text>
      <text x="100" y="130" textAnchor="middle" fill={labelColor}
        style={{ fontSize: 11, fontFamily: "sans-serif" }}>Occupancy Rate</text>
    </svg>
  );
}

// ── Ward Row ──────────────────────────────────────────────────
function WardRow({ ward, occupied, available, total, isDark }) {
  const pct = total ? Math.round((occupied / total) * 100) : 0;
  const color = pct > 80 ? "#ef4444" : pct > 60 ? "#f59e0b" : "#06b6d4";
  const textSub = isDark ? "#94a3b8" : "#64748b";
  const trackBg = isDark ? "#1e293b" : "#e2e8f0";
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
          <span className="text-sm font-medium" style={{ color: isDark ? "#cbd5e1" : "#334155" }}>{ward}</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span style={{ color: textSub }}>{occupied}/{total}</span>
          <span className="font-mono font-bold" style={{ color }}>{pct}%</span>
        </div>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: trackBg }}>
        <div className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}80, ${color})` }} />
      </div>
    </div>
  );
}

// ── Day Badge ─────────────────────────────────────────────────
function DayBadge({ days }) {
  if (days > 14) return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-red-500/15 text-red-400 border border-red-500/20">
      <AlertTriangle size={10} /> {days}d
    </span>
  );
  if (days > 7) return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/20">
      <Clock size={10} /> {days}d
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
      <CheckCircle2 size={10} /> {days}d
    </span>
  );
}

// ── KPI Card ──────────────────────────────────────────────────
function KpiCard({ icon: Icon, label, value, color, sub, isDark }) {
  const cardBg = isDark ? "rgba(15,23,42,0.8)" : "rgba(255,255,255,0.9)";
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const hoverBdr = isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.14)";
  const valColor = isDark ? "#ffffff" : "#1e293b";
  const lblColor = isDark ? "#94a3b8" : "#64748b";

  return (
    <div
      className="relative overflow-hidden rounded-2xl p-5 group transition-all duration-300"
      style={{ background: cardBg, border: `1px solid ${border}` }}
      onMouseEnter={e => e.currentTarget.style.borderColor = hoverBdr}
      onMouseLeave={e => e.currentTarget.style.borderColor = border}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 0% 0%, ${color}10 0%, transparent 60%)` }} />
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl" style={{ background: `${color}18`, border: `1px solid ${color}25` }}>
          <Icon size={18} style={{ color }} strokeWidth={2} />
        </div>
      </div>
      <div className="font-mono text-3xl font-bold mb-0.5" style={{ color: valColor, textShadow: `0 0 20px ${color}40` }}>
        {value}
      </div>
      <div className="text-xs font-medium tracking-wide" style={{ color: lblColor }}>{label}</div>
      {sub && <div className="mt-2 text-xs font-semibold" style={{ color }}>{sub}</div>}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
    </div>
  );
}

// ── Admit Chart ───────────────────────────────────────────────
function AdmitChart({ beds, isDark }) {
  const [view, setView] = useState("daily"); // "daily" | "weekly" | "monthly"

  const enrichedData = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let arr = [];

    if (view === "daily") {
      // 1. รายวัน: 7 วันย้อนหลัง
      for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        // สร้าง string YYYY-MM-DD แบบ Local Time ป้องกันบัค Timezone
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        const dateStr = `${year}-${month}-${day}`;

        const count = beds.filter((b) => b.admitDate === dateStr).length;
        arr.push({ date: dateStr, label: d.toLocaleDateString("th-TH", { day: "numeric", month: "short" }), count });
      }
    } else if (view === "weekly") {
      // 2. รายสัปดาห์: เฉพาะสัปดาห์ในเดือนปัจจุบัน
      const year = today.getFullYear();
      const month = today.getMonth();
      let currentDay = new Date(year, month, 1);
      let weekNum = 1;

      while (currentDay.getMonth() === month) {
        let wStart = new Date(currentDay);
        wStart.setDate(currentDay.getDate() - currentDay.getDay()); // เริ่มวันอาทิตย์
        let wEnd = new Date(wStart);
        wEnd.setDate(wStart.getDate() + 6); // สิ้นสุดวันเสาร์

        let count = 0;
        beds.forEach(b => {
          if (b.admitDate) {
            const bDate = new Date(b.admitDate);
            bDate.setHours(0, 0, 0, 0);
            if (bDate >= wStart && bDate <= wEnd) count++;
          }
        });

        arr.push({ label: `สัปดาห์ ${weekNum}`, count });
        weekNum++;

        // ขยับไปสัปดาห์ถัดไป
        currentDay.setDate(currentDay.getDate() - currentDay.getDay() + 7);
      }
    } else if (view === "monthly") {
      // 3. รายเดือน: 6 เดือนย้อนหลัง (แก้บัค UTC ข้ามเดือน)
      for (let i = 5; i >= 0; i--) {
        const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const monthStr = `${y}-${m}`; // ใช้ Local Time ตัดปัญหา toISOString() ข้ามวัน

        const count = beds.filter((b) => b.admitDate && b.admitDate.startsWith(monthStr)).length;
        arr.push({ label: d.toLocaleDateString("th-TH", { month: "short", year: "2-digit" }), count });
      }
    }
    return arr;
  }, [beds, view]);

  const maxCount = Math.max(...enrichedData.map((d) => d.count), 1);
  const n = enrichedData.length;
  const W = 600, H = 110, PAD = { top: 15, right: 15, bottom: 20, left: 25 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;
  const xPos = (i) => PAD.left + (i / (n - 1)) * chartW;
  const yPos = (v) => PAD.top + chartH - (v / (maxCount * 1.15)) * chartH;

  const linePath = enrichedData.map((d, i) => `${i === 0 ? "M" : "L"} ${xPos(i)} ${yPos(d.count)}`).join(" ");
  const areaPath = linePath + ` L ${xPos(n - 1)} ${PAD.top + chartH} L ${xPos(0)} ${PAD.top + chartH} Z`;
  const peakIdx = enrichedData.reduce((mi, d, i) => (d.count > enrichedData[mi].count ? i : mi), 0);
  const todayCount = enrichedData[n - 1].count;
  const trend = todayCount - (enrichedData[n - 2]?.count || 0);
  const avg = (enrichedData.reduce((s, d) => s + d.count, 0) / n).toFixed(1);
  const totalPeriod = enrichedData.reduce((s, d) => s + d.count, 0);

  const cardBg = isDark ? "rgba(15,23,42,0.8)" : "rgba(255,255,255,0.9)";
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const gridColor = isDark ? "#1e293b" : "#e2e8f0";
  const gridTxt = isDark ? "#334155" : "#94a3b8";
  const divider = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const subTxt = isDark ? "#475569" : "#94a3b8";
  const titleClr = isDark ? "#cbd5e1" : "#334155";
  const valuClr = isDark ? "#ffffff" : "#1e293b";
  const dateTxt = isDark ? "#334155" : "#94a3b8";
  return (
    <div className="rounded-2xl p-5" style={{ background: cardBg, border: `1px solid ${border}` }}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calendar size={15} className="text-blue-500" />
            <span className="text-slate-800 text-sm font-semibold" style={{ color: titleClr }}>จำนวนผู้ป่วย Admit</span>
          </div>
          <p className="text-xs" style={{ color: subTxt }}>14 วันย้อนหลัง · อัปเดตแบบ Real-time</p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg">
          {[
            { id: "daily", label: "รายวัน" },
            { id: "weekly", label: "รายสัปดาห์" },
            { id: "monthly", label: "รายเดือน" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setView(tab.id)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${view === tab.id ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id="admitGradLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradLight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>

          {[0, Math.round(maxCount * 0.5), maxCount].map((v) => (
            <g key={v}>
              <line x1={PAD.left} y1={yPos(v)} x2={PAD.left + chartW} y2={yPos(v)} stroke={gridColor} strokeWidth="1" />
              <text x={PAD.left - 5} y={yPos(v) + 4} textAnchor="end" fill={gridTxt}
                style={{ fontSize: 9, fontFamily: "monospace" }}>{v}</text>
            </g>
          ))}

          <path d={areaPath} fill="url(#admitGradLight)" />
          <path d={linePath} fill="none" stroke="url(#lineGradLight)" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" />

          {/* จุดบนกราฟ (แสดงทุกจุดเพราะข้อมูลน้อยลงแล้ว) */}
          {enrichedData.map((d, i) => {
            const isPeak = i === peakIdx && d.count > 0;
            const isToday = i === n - 1;
            return (
              <g key={i}>
                <circle cx={xPos(i)} cy={yPos(d.count)} r={isPeak || isToday ? 4 : 3}
                  fill={isPeak ? "#f59e0b" : isToday ? "#3b82f6" : "#ffffff"}
                  stroke={isPeak ? "#f59e0b" : isToday ? "#3b82f6" : "#94a3b8"} strokeWidth="2" />
                {(isPeak || isToday) && (
                  <text x={xPos(i)} y={yPos(d.count) - 8} textAnchor="middle"
                    fill={isPeak ? "#d97706" : "#2563eb"}
                    style={{ fontSize: 9, fontWeight: 700, fontFamily: "monospace" }}>
                    {d.count}
                  </text>
                )}
              </g>
            );
          })}

          {/* แกน X Labels (แสดงทุก Label) */}
          {enrichedData.map((d, i) => (
            <text key={i} x={xPos(i)} y={H - 2} textAnchor="middle"
              fill={i === n - 1 ? "#3b82f6" : "#64748b"}
              style={{ fontSize: 8.5, fontFamily: "sans-serif" }}>
              {d.label}
            </text>
          ))}
        </svg>
      </div>

      <div className="flex items-center gap-6 mt-4 pt-4" style={{ borderTop: `1px solid ${divider}` }}>
        <div>
          <p className="text-slate-500 text-[10px] mb-0.5">สูงสุดในรอบนี้</p>
          <p className="font-mono text-xs font-bold text-amber-500">{enrichedData[peakIdx]?.count || 0} คน</p>
        </div>
        <div className="w-px h-8" style={{ background: divider }} />
        <div>
          <p className="text-slate-500 text-[10px] mb-0.5">เฉลี่ย</p>
          <p className="font-mono text-xs font-bold text-blue-500">{avg} คน/หน่วย</p>
        </div>
        <div className="w-px h-8" style={{ background: divider }} />
        <div>
          <p className="text-slate-500 text-[10px] mb-0.5">รวมทั้งหมด</p>
          <p className="font-mono text-xs font-bold text-indigo-500">{totalPeriod} คน</p>
        </div>
        <div className="ml-auto flex items-center gap-2 justify-end">
          <span className="font-mono text-lg font-bold text-slate-700">{todayCount}</span>
          <span className={`flex items-center text-[10px] font-bold ${trend >= 0 ? "text-red-500" : "text-emerald-500"}`}>
            {trend >= 0 ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
            {Math.abs(trend)}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Dashboard ─────────────────────────────────────────────────
export function DashboardPage({ beds }) {
  const { isDark } = useTheme();
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const total = beds.length;
  const countBy = (s) => beds.filter((b) => b.status === s).length;
  const occupied = countBy("occupied");
  const available = countBy("available");
  const maintenance = countBy("maintenance");
  const cleaning = countBy("cleaning");
  const occupancy = total ? Math.round((occupied / total) * 100) : 0;

  const wardStats = WARDS.map((ward) => {
    const wb = beds.filter((b) => b.ward === ward);
    return {
      ward, total: wb.length,
      occupied: wb.filter((b) => b.status === "occupied").length,
      available: wb.filter((b) => b.status === "available").length,
    };
  }).filter((w) => w.total > 0);

  const longestStay = beds
    .filter((b) => b.status === "occupied" && b.admitDate)
    .sort((a, b) => new Date(a.admitDate) - new Date(b.admitDate))
    .slice(0, 6);

  const daysSince = (d) => Math.floor((new Date() - new Date(d)) / 86400000);

  const timeStr = now.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const dateStr = now.toLocaleDateString("th-TH", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  // ── Theme tokens ─────────────────────────────────────────────
  const pageBg = isDark ? "#060d1f" : "#f0f5ff";
  const cardBg = isDark ? "rgba(15,23,42,0.8)" : "rgba(255,255,255,0.9)";
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const titleClr = isDark ? "#cbd5e1" : "#334155";
  const subTxt = isDark ? "#475569" : "#94a3b8";
  const textMd = isDark ? "#94a3b8" : "#64748b";
  const divider = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const trackBg = isDark ? "#1e293b" : "#e2e8f0";
  const gridLines = isDark
    ? "linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)"
    : "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)";

  const kpis = [
    { icon: BedDouble, label: "เตียงทั้งหมด", value: total, color: "#818cf8", sub: null },
    { icon: Users, label: "มีผู้ป่วย", value: occupied, color: "#f87171", sub: `${occupancy}% utilization` },
    { icon: CheckCircle2, label: "ว่าง", value: available, color: "#34d399", sub: null },
    { icon: Wrench, label: "ซ่อมบำรุง", value: maintenance, color: "#fbbf24", sub: null },
    { icon: Sparkles, label: "ทำความสะอาด", value: cleaning, color: "#60a5fa", sub: null },
  ];

  const statusBars = [
    { label: "มีผู้ป่วย", key: "occupied", color: "#f87171" },
    { label: "ว่าง", key: "available", color: "#34d399" },
    { label: "ซ่อมบำรุง", key: "maintenance", color: "#fbbf24" },
    { label: "ทำความสะอาด", key: "cleaning", color: "#60a5fa" },
  ];

  return (
    <div className="min-h-full font-sarabun" style={{ background: pageBg, transition: "background 0.35s" }}>
      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: gridLines, backgroundSize: "40px 40px" }} />

      <div className="relative z-10 px-6 py-5 max-w-screen-2xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "#0992C2" }}>Live · Firebase Realtime</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: isDark ? "#ffffff" : "#1e293b" }}>Hospital Operations Dashboard</h1>
            <p className="text-sm mt-0.5" style={{ color: subTxt }}>โรงพยาบาลสมาร์ทแคร์ · ภาพรวมระบบบริหารเตียงผู้ป่วย</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold tracking-widest tabular-nums"
              style={{ color: isDark ? "#ffffff" : "#1e293b", textShadow: isDark ? "0 0 30px rgba(6,182,212,0.4)" : "none" }}>
              {timeStr}
            </div>
            <div className="text-xs mt-1" style={{ color: subTxt }}>{dateStr}</div>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid-res">
          <div className="grid grid-cols-5 gap-3 mb-5">
            {kpis.map((k, i) => <KpiCard key={i} {...k} isDark={isDark} />)}
          </div>
        </div>

        {/* Admit Chart */}
        <div className="mb-4">
          <AdmitChart beds={beds} isDark={isDark} />
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-12 gap-4 mb-4">
          {/* Gauge */}
          <div className="col-span-3 rounded-2xl p-5 flex flex-col" style={{ background: cardBg, border: `1px solid ${border}` }}>
            <div className="flex items-center gap-2 mb-4">
              <Activity size={15} className="text-cyan-400" />
              <span className="text-sm font-semibold" style={{ color: titleClr }}>อัตราการใช้เตียง</span>
            </div>
            <div className="flex justify-center">
              <ArcGauge pct={occupancy} isDark={isDark} />
            </div>
            <div className="mt-3 space-y-2">
              {statusBars.map((s) => (
                <div key={s.key} className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
                  <span className="flex-1" style={{ color: textMd }}>{s.label}</span>
                  <span className="font-mono font-bold" style={{ color: s.color }}>{countBy(s.key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ward stats */}
          <div className="col-span-4 rounded-2xl p-5" style={{ background: cardBg, border: `1px solid ${border}` }}>
            <div className="flex items-center gap-2 mb-5">
              <Building2 size={15} className="text-cyan-400" />
              <span className="text-sm font-semibold" style={{ color: titleClr }}>การใช้งานแต่ละวอร์ด</span>
            </div>
            {wardStats.length > 0 ? (
              <div className="space-y-4">
                {wardStats.map((w) => <WardRow key={w.ward} {...w} isDark={isDark} />)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-32" style={{ color: subTxt }}>
                <BarChart3 size={32} className="mb-2 opacity-40" />
                <span className="text-sm">ยังไม่มีข้อมูล</span>
              </div>
            )}
          </div>

          {/* Status bars */}
          <div className="col-span-5 rounded-2xl p-5" style={{ background: cardBg, border: `1px solid ${border}` }}>
            <div className="flex items-center gap-2 mb-5">
              <BarChart3 size={15} className="text-cyan-400" />
              <span className="text-sm font-semibold" style={{ color: titleClr }}>สัดส่วนสถานะเตียง</span>
            </div>
            {total > 0 ? (
              <div className="space-y-4">
                {statusBars.map((s) => {
                  const cnt = countBy(s.key);
                  const pct = total ? Math.round((cnt / total) * 100) : 0;
                  return (
                    <div key={s.key}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm" style={{ color: titleClr }}>{s.label}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono" style={{ color: textMd }}>{cnt} เตียง</span>
                          <span className="font-mono font-bold text-sm w-10 text-right" style={{ color: s.color }}>{pct}%</span>
                        </div>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: trackBg }}>
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${s.color}60, ${s.color})`, boxShadow: `0 0 8px ${s.color}50` }} />
                      </div>
                    </div>
                  );
                })}
                <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${divider}` }}>
                  <div className="flex justify-between text-xs mb-2" style={{ color: textMd }}>
                    <span>เตียงทั้งหมด {total} เตียง</span>
                    <span className="flex items-center gap-1 text-cyan-400">
                      <Shield size={10} />capacity
                    </span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden flex" style={{ background: trackBg }}>
                    {statusBars.map((s) => {
                      const cnt = countBy(s.key);
                      const pct = total ? (cnt / total) * 100 : 0;
                      return pct > 0 ? (
                        <div key={s.key} className="h-full transition-all duration-700" style={{ width: `${pct}%`, background: s.color }} />
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-32" style={{ color: subTxt }}>
                <Zap size={32} className="mb-2 opacity-40" />
                <span className="text-sm">ยังไม่มีข้อมูลเตียง</span>
              </div>
            )}
          </div>
        </div>

        {/* Patient Table */}
        <div className="rounded-2xl overflow-auto" style={{ border: `1px solid ${border}`, background: cardBg }}>
          <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: `1px solid ${divider}` }}>
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-cyan-400" />
              <span className="text-sm font-semibold" style={{ color: titleClr }}>ผู้ป่วยที่พักรักษานานที่สุด</span>
              {longestStay.length > 0 && (
                <span className="ml-1 px-2 py-0.5 rounded-full text-xs font-mono border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  {longestStay.length}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-xs" style={{ color: subTxt }}>
              <Wifi size={11} />
              <span>อัปเดตอัตโนมัติ</span>
            </div>
          </div>

          {longestStay.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: `1px solid ${divider}` }}>
                  {[
                    { label: "เตียง", icon: BedDouble },
                    { label: "ผู้ป่วย", icon: User },
                    { label: "วอร์ด", icon: Building2 },
                    { label: "การวินิจฉัย", icon: Stethoscope },
                    { label: "วันรับเข้า", icon: Calendar },
                    { label: "ระยะเวลา", icon: Clock },
                    { label: "ความเสี่ยง", icon: TrendingUp },
                  ].map(({ label, icon: Icon }) => (
                    <th key={label} className="px-5 py-3 text-left">
                      <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase" style={{ color: subTxt }}>
                        <Icon size={11} />{label}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {longestStay.map((b, i) => {
                  const days = daysSince(b.admitDate);
                  const rowBg = days > 14
                    ? (isDark ? "rgba(239,68,68,0.02)" : "rgba(254,226,226,0.4)")
                    : "transparent";
                  return (
                    <tr
                      key={b.firebaseKey || i}
                      style={{ borderBottom: `1px solid ${divider}`, background: rowBg }}
                      onMouseEnter={e => e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.02)" : "rgba(239,246,255,0.6)"}
                      onMouseLeave={e => e.currentTarget.style.background = rowBg}
                    >
                      <td className="px-5 py-3.5">
                        <span className="font-mono text-sm font-bold text-cyan-400">{b.bedNumber}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                            style={{ background: isDark ? "#334155" : "#e0e7ff", color: isDark ? "#cbd5e1" : "#4338ca" }}>
                            {b.patient?.[0] || "?"}
                          </div>
                          <span className="text-sm font-medium" style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}>{b.patient}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                          {b.ward}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="text-sm" style={{ color: textMd }}>{b.diagnosis || "—"}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="font-mono text-xs" style={{ color: textMd }}>{b.admitDate}</span>
                      </td>
                      <td className="px-5 py-3.5"><DayBadge days={days} /></td>
                      <td className="px-5 py-3.5">
                        {days > 14 ? (
                          <div className="flex items-center gap-1.5 text-red-400 text-xs font-semibold">
                            <AlertTriangle size={13} /><span>ต้องติดตาม</span>
                          </div>
                        ) : days > 7 ? (
                          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                            <Activity size={13} /><span>เฝ้าระวัง</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-semibold">
                            <CheckCircle2 size={13} /><span>ปกติ</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center py-16" style={{ color: subTxt }}>
              <Users size={40} className="mb-3 opacity-30" />
              <span className="text-sm">ยังไม่มีผู้ป่วยในระบบ</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between text-xs pb-4" style={{ color: isDark ? "#334155" : "#94a3b8" }}>
          <span>Smart Bed Management System · v1.0</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            Connected to Firebase Realtime Database
          </span>
        </div>

      </div>
    </div>
  );
}
