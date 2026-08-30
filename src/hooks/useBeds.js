// src/hooks/useBeds.js
//
// Custom hook จัดการ CRUD เตียงผ่าน Firebase Realtime Database
// ข้อมูลจะอัปเดต realtime ทันทีเมื่อมีการเปลี่ยนแปลงจากผู้ใช้คนอื่น

import { useState, useEffect } from "react";
import {
  subscribeBeds,
  addBedToDB,
  updateBedInDB,
  deleteBedFromDB,
  addPatientHistory,
  subscribePatientHistory,
} from "../firebase/bedService";

export function useBeds() {
  const [beds, setBeds] = useState([]);
  const [patientHistory, setPatientHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ─── Subscribe realtime ──────────────────────────────────────
  useEffect(() => {
    setLoading(true);
    const unsubBeds = subscribeBeds((updatedBeds) => {
      setBeds(updatedBeds);
      setLoading(false);
    });
    const unsubHistory = subscribePatientHistory((history) => {
      setPatientHistory(history);
    });
    return () => { unsubBeds(); unsubHistory(); };
  }, []);

  // ─── CREATE ─────────────────────────────────────────────────
  const addBed = async (formData) => {
    try {
      const { id, firebaseKey, ...cleanData } = formData;
      const key = await addBedToDB({
        ...cleanData,
        age: cleanData.age ? parseInt(cleanData.age) : "",
      });
      return key;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // ─── UPDATE ─────────────────────────────────────────────────
  // บันทึกประวัติผู้ป่วยก่อน ถ้าสถานะเปลี่ยน
  const editBed = async (firebaseKey, formData) => {
    try {
      const { id, firebaseKey: _key, ...cleanData } = formData;

      // หาข้อมูลเตียงเดิมก่อน update
      const oldBed = beds.find((b) => b.firebaseKey === firebaseKey);
      const oldStatus = oldBed?.status;
      const newStatus = cleanData.status;

      // บันทึกประวัติถ้าสถานะเปลี่ยน และเตียงเดิมมีผู้ป่วย
      if (oldBed && oldStatus !== newStatus && oldBed.patient) {
        await addPatientHistory(oldBed, "status_change", {
          fromStatus: oldStatus,
          toStatus: newStatus,
        });
      }

      await updateBedInDB(firebaseKey, {
        ...cleanData,
        age: cleanData.age ? parseInt(cleanData.age) : "",
      });
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // ─── DELETE ─────────────────────────────────────────────────
  // บันทึกประวัติผู้ป่วยก่อนลบ ถ้ามีผู้ป่วยอยู่
  const removeBed = async (firebaseKey) => {
    try {
      const bedToDelete = beds.find((b) => b.firebaseKey === firebaseKey);
      if (bedToDelete?.patient) {
        await addPatientHistory(bedToDelete, "deleted", {
          fromStatus: bedToDelete.status,
        });
      }
      await deleteBedFromDB(firebaseKey);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // ─── Filter (client-side) ────────────────────────────────────
  const filterBeds = ({ ward, status, search }) => {
    return beds.filter((b) => {
      const matchWard   = ward   === "ทั้งหมด" || b.ward   === ward;
      const matchStatus = status === "ทั้งหมด" || b.status === status;
      const matchSearch =
        !search ||
        b.bedNumber?.toLowerCase().includes(search.toLowerCase()) ||
        b.patient?.includes(search);
      return matchWard && matchStatus && matchSearch;
    });
  };

  return { beds, patientHistory, loading, error, addBed, editBed, removeBed, filterBeds };
}
