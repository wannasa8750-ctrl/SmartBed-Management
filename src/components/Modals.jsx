// src/components/Modals.jsx — Dark / Light theme support

import { Modal, BtnPrimary, BtnOutline } from "./UI";
import { BedForm } from "./BedForm";
import { STATUS_CONFIG, GENDER_CONFIG } from "../data/constants";
import { useTheme } from "../context/ThemeContext";

// ─── Add Modal ────────────────────────────────────────────────
export function AddModal({ form, setForm, onSave, onClose, saving }) {
  return (
    <Modal title="➕ เพิ่มเตียงใหม่" onClose={onClose}>
      <BedForm form={form} setForm={setForm} />
      <div className="flex gap-3 justify-end mt-2">
        <BtnOutline onClick={onClose} disabled={saving}>ยกเลิก</BtnOutline>
        <BtnPrimary onClick={onSave} color="#059669" disabled={saving}>
          {saving ? "⏳ กำลังบันทึก..." : "บันทึก"}
        </BtnPrimary>
      </div>
    </Modal>
  );
}

// ─── Edit Modal ───────────────────────────────────────────────
export function EditModal({ bed, form, setForm, onSave, onClose, saving }) {
  return (
    <Modal title={`✏️ แก้ไขเตียง ${bed.bedNumber}`} onClose={onClose}>
      <BedForm form={form} setForm={setForm} />
      <div className="flex gap-3 justify-end mt-2">
        <BtnOutline onClick={onClose} disabled={saving}>ยกเลิก</BtnOutline>
        <BtnPrimary onClick={onSave} color="#2563eb" disabled={saving}>
          {saving ? "⏳ กำลังบันทึก..." : "บันทึกการแก้ไข"}
        </BtnPrimary>
      </div>
    </Modal>
  );
}

// ─── View Modal ───────────────────────────────────────────────
export function ViewModal({ bed, onEdit, onClose }) {
  const { isDark } = useTheme();

  const labelClr = isDark ? "#64748b" : "#6b7280";
  const valueClr = isDark ? "#e2e8f0" : "#1e293b";
  const divider = isDark ? "rgba(255,255,255,0.06)" : "#f1f5f9";

  const statusLabel = STATUS_CONFIG[bed.status]?.label ?? bed.status ?? "-";
  const genderLabel = GENDER_CONFIG[bed.gender]?.label ?? "-";

  const rows = [
    ["🏥 วอร์ด", bed.ward || "-"],
    ["🛏️ หมายเลขเตียง", bed.bedNumber || "-"],
    ["🔖 สถานะ", statusLabel],
    ...(bed.patient? [
        ["👤 ชื่อผู้ป่วย", bed.patient],
        ["⚧️ เพศ", genderLabel],
        ["🎂 อายุ", bed.age ? `${bed.age} ปี` : "-"],
        ["📅 วันที่รับเข้า", bed.admitDate || "-"],
        ["🩺 การวินิจฉัย", bed.diagnosis || "-"],
      ]
      : [["ℹ️ ผู้ป่วย", "ไม่มีผู้ป่วยในขณะนี้"]]),
    ["📝 หมายเหตุ", bed.notes || "-"],
  ];

  return (
    <Modal title={`📋 รายละเอียดเตียง ${bed.bedNumber}`} onClose={onClose}>
      {rows.map(([label, value], i) => (
        <div
          key={i}
          className="flex py-[0.6rem]"
          style={{ borderBottom: `1px solid ${divider}` }}
        >
          <span
            className="w-40 text-[0.875rem] font-semibold shrink-0"
            style={{ color: labelClr, fontFamily: "'Sarabun', sans-serif" }}
          >
            {label}
          </span>
          <span
            className="text-[0.875rem]"
            style={{ color: valueClr, fontFamily: "'Sarabun', sans-serif" }}
          >
            {value}
          </span>
        </div>
      ))}
      <div className="flex gap-3 justify-end mt-4">
        <BtnOutline onClick={onEdit} color="#2563eb"
          bg={isDark ? "rgba(37,99,235,0.12)" : "#eff6ff"}
          border={isDark ? "rgba(59,130,246,0.3)" : "#3b82f6"}
        >
          ✏️ แก้ไข
        </BtnOutline>
        <BtnPrimary onClick={onClose} color={isDark ? "#334155" : "#6b7280"}>ปิด</BtnPrimary>
      </div>
    </Modal>
  );
}

// ─── Delete Modal ─────────────────────────────────────────────
export function DeleteModal({ bed, onConfirm, onClose, saving }) {
  const { isDark } = useTheme();

  const bodyTxt = isDark ? "#cbd5e1" : "#374151";
  const warnBg = isDark ? "rgba(239,68,68,0.1)" : "#fef2f2";
  const warnBdr = isDark ? "rgba(239,68,68,0.2)" : "#fecaca";
  const warnTxt = isDark ? "#f87171" : "#dc2626";
  const subTxt = isDark ? "#64748b" : "#9ca3af";

  return (
    <Modal title="🗑️ ยืนยันการลบ" onClose={onClose}>
      <div className="text-center py-4" style={{ fontFamily: "'Sarabun', sans-serif" }}>
        <div className="text-[3rem] mb-4">⚠️</div>
        <p className="text-base mb-2" style={{ color: bodyTxt }}>
          คุณต้องการลบเตียง{" "}
          <strong style={{ color: warnTxt }}>{bed.bedNumber}</strong> ใช่หรือไม่?
        </p>
        {bed.patient && (
          <p
            className="text-[0.85rem] p-2 rounded-lg mb-2 border"
            style={{ background: warnBg, borderColor: warnBdr, color: warnTxt }}
          >
            ⚠️ เตียงนี้มีผู้ป่วย <strong>{bed.patient}</strong> อยู่!
          </p>
        )}
        <p className="text-[0.8rem]" style={{ color: subTxt }}>การดำเนินการนี้ไม่สามารถย้อนกลับได้</p>
      </div>
      <div className="flex gap-3 justify-center">
        <BtnOutline onClick={onClose} disabled={saving}>ยกเลิก</BtnOutline>
        <BtnPrimary onClick={onConfirm} color="#dc2626" disabled={saving}>
          {saving ? "⏳ กำลังลบ..." : "ยืนยันการลบ"}
        </BtnPrimary>
      </div>
    </Modal>
  );
}
