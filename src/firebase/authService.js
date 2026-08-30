// src/firebase/authService.js
//
// Firebase Authentication — Email / Password
// ────────────────────────────────────────────
// ฟังก์ชันทั้งหมดที่เกี่ยวกับ Auth ของแอป

import { auth } from "./firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

// ─── Login ────────────────────────────────────────────────────
// @returns Firebase User object
export async function login(email, password) {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
}

// ─── Register ─────────────────────────────────────────────────
// @param displayName — ชื่อที่จะแสดงในระบบ
export async function register(email, password, displayName) {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(result.user, { displayName });
  return result.user;
}

// ─── Logout ───────────────────────────────────────────────────
export async function logout() {
  await signOut(auth);
}

// ─── Subscribe auth state ─────────────────────────────────────
// ใช้ใน useEffect เพื่อ listen สถานะ login/logout แบบ realtime
// @returns unsubscribe function (ต้อง return จาก useEffect)
export function subscribeAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}
