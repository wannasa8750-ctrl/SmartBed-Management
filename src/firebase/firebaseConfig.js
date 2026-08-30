// src/firebase/firebaseConfig.js
//
// ⚠️  วิธีหาค่าเหล่านี้:
//   1. ไปที่ https://console.firebase.google.com
//   2. เลือก Project → Project Settings (⚙️)
//   3. เลื่อนลงมาที่ "Your apps" → เลือก Web app (</>)
//   4. Copy ค่าจาก firebaseConfig มาวางแทนด้านล่าง

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJjI0KWxpkdzdF9HZNbHjdvfC7BDQmymc",
  authDomain: "smart-bed-4c402.firebaseapp.com",
  projectId: "smart-bed-4c402",
  storageBucket: "smart-bed-4c402.firebasestorage.app",
  messagingSenderId: "928489789074",
  appId: "1:928489789074:web:fc1ea97f991c544b4a384b",
  measurementId: "G-15TKEH90BK",
  databaseURL: "https://smart-bed-4c402-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const db   = getDatabase(app);
export const auth = getAuth(app);
