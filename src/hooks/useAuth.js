// src/hooks/useAuth.js
//
// Custom hook จัดการ Authentication state
// ติดตาม user แบบ realtime — ถ้า logout หรือ token หมดอายุ
// state จะอัปเดตอัตโนมัติ

import { useState, useEffect } from "react";
import { subscribeAuthState } from "../firebase/authService";

export function useAuth() {
  // null  = ยังไม่รู้ (กำลัง check session)
  // false = ไม่ได้ login
  // object = user object จาก Firebase
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeAuthState((firebaseUser) => {
      setUser(firebaseUser); // null ถ้า logout, object ถ้า login
      setAuthLoading(false);
    });
    return unsubscribe; // cleanup
  }, []);

  return { user, authLoading };
}
