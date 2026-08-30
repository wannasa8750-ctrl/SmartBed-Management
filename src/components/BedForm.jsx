// src/components/BedForm.jsx — ใช้ InputField จาก UI.jsx (theme ถูกจัดการใน InputField แล้ว)

import { useEffect } from "react";
import { WARDS, STATUS_CONFIG, GENDER_CONFIG } from "../data/constants";
import { InputField } from "./UI";

const wardCodeMap = {
  ICU: "ICU",
  อายุรกรรม: "MED",
  ศัลยกรรม: "SUR",
  กุมารเวช: "PED",
  สูติกรรม: "OBG",
  ออร์โธปิดิกส์: "ORT",
};

export function BedForm({ form, setForm }) {
  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const wardCode = wardCodeMap[form.ward] || "";
  const isOccupied = form.status === "occupied";
  const isLocked = !isOccupied;

  const statusOptions = Object.entries(STATUS_CONFIG).map(([k, v]) => ({
    value: k, label: v.label,
  }));

  const genderOptions = Object.entries(GENDER_CONFIG).map(([k, v]) => ({
    value: k, label: v.label,
  }));

  useEffect(() => {
    if (!form.bedNumber) return;
    const numberPart = form.bedNumber.replace(/^[A-Z]+-/, "");
    if (wardCode) {
      setForm((f) => ({ ...f, bedNumber: `${wardCode}-${numberPart}` }));
    }
  }, [form.ward]);

  useEffect(() => {
    if (!isOccupied) {
      setForm((f) => ({ ...f, patient: "", age: "", admitDate: "", diagnosis: "" }));
    }
  }, [form.status]);

  return (
    <>
      <InputField
        label="วอร์ด"
        value={form.ward}
        onChange={(v) => update("ward", v)}
        options={WARDS}
        required
      />

      <InputField
        label="หมายเลขเตียง"
        value={form.bedNumber.replace(`${wardCode}-`, "")}
        onChange={(v) => {
          const numberOnly = v.replace(/\D/g, "");
          update("bedNumber", wardCode ? `${wardCode}-${numberOnly}` : numberOnly);
        }}
        required
      />

      <InputField
        label="สถานะ"
        value={form.status}
        onChange={(v) => update("status", v)}
        options={statusOptions}
      />

      <InputField
        label="ชื่อผู้ป่วย"
        value={form.patient}
        onChange={(v) => update("patient", v)}
        disabled={isLocked}
        required
      />

      <InputField
        label="เพศ"
        value={form.gender}
        onChange={(v) => update("gender", v)}
        options={genderOptions}
        disabled={isLocked}
        required
      />

      <InputField
        label="อายุ"
        min={1}
        value={form.age}
        onChange={(v) => { const age = Number(v); if (age > 0) update("age", age); else if (!v) update("age", ""); }}
        disabled={isLocked}
        required
      />

      <InputField
        label="วันที่รับเข้า"
        type="date"
        value={form.admitDate}
        onChange={(v) => update("admitDate", v)}
        disabled={isLocked}
        required
      />

      <InputField
        label="การวินิจฉัย"
        value={form.diagnosis}
        onChange={(v) => update("diagnosis", v)}
        disabled={isLocked}
      />

      <InputField
        label="หมายเหตุ"
        type="textarea"
        value={form.notes}
        onChange={(v) => update("notes", v)}
      />
    </>
  );
}
