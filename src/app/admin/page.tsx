"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import * as XLSX from "xlsx";

export default function AdminPage() {
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
    fetchGuests();
  }, []);

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(guests);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Guests");

    XLSX.writeFile(workbook, "wedding-guests.xlsx");
  };

  return (
    <div className="p-10 bg-black text-white min-h-screen">

      <h1 className="text-2xl mb-6">Admin Panel</h1>

      <button
        onClick={exportExcel}
        className="mb-6 px-4 py-2 border border-white rounded hover:bg-white hover:text-black"
      >
        Export Excel
      </button>

      <div className="space-y-3">
        {guests.map((g) => (
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