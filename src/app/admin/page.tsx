"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import * as XLSX from "xlsx";

const ADMIN_PASSWORD = "1234";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const [guests, setGuests] = useState<any[]>([]);

  const fetchGuests = async () => {
    const snapshot = await getDocs(collection(db, "guests"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setGuests(data);
  };

  useEffect(() => {
    if (authorized) fetchGuests();
  }, [authorized]);

  const comingCount = guests.filter((g) => g.status === "coming").length;
  const notComingCount = guests.filter((g) => g.status === "not_coming").length;

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(guests);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Guests");
    XLSX.writeFile(workbook, "wedding-guests.xlsx");
  };

  // 🔐 LOGIN SCREEN
  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="space-y-4 text-center">
          <h1 className="text-xl">Admin Login</h1>

          <input
            type="password"
            className="p-2 rounded bg-white/10 border"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => setAuthorized(password === ADMIN_PASSWORD)}
            className="px-4 py-2 border rounded"
          >
            Enter
          </button>

          {password && password !== ADMIN_PASSWORD && (
            <p className="text-red-400 text-sm">Wrong password</p>
          )}
        </div>
      </div>
    );
  }

  // 📊 ADMIN DASHBOARD
  return (
    <div className="p-10 bg-black text-white min-h-screen">

      <h1 className="text-2xl mb-6">Admin Panel</h1>

      {/* STATS */}
      <div className="mb-6 p-4 border rounded space-y-1">
        <p>✅ Придут: {comingCount}</p>
        <p>❌ Не придут: {notComingCount}</p>
        <p>👥 Всего: {guests.length}</p>
      </div>

      {/* EXPORT */}
      <button
        onClick={exportExcel}
        className="mb-6 px-4 py-2 border rounded hover:bg-white hover:text-black"
      >
        Export Excel
      </button>

      {/* LIST */}
      <div className="space-y-3">
  {[...guests].reverse().map((g) => (
    <div
      key={g.id}
      className="p-3 border border-white/20 rounded"
    >
      <p><b>Name:</b> {g.name}</p>
      <p><b>Status:</b> {g.status}</p>
      <p><b>With:</b> {g.withWhom}</p>
    </div>
  ))}
</div>

    </div>
  );
}