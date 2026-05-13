"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import * as XLSX from "xlsx";

const ADMIN_PASSWORD = "асек2005";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const [guests, setGuests] = useState<any[]>([]);

  // FETCH DATA
  const fetchGuests = async () => {
    const snapshot = await getDocs(collection(db, "guests"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setGuests(data);
  };

  useEffect(() => {
    if (authorized) {
      fetchGuests();
    }
  }, [authorized]);

  // STATS
  const comingAlone = guests.filter(
    (g) => g.attendance === "coming"
  ).length;

  const comingWithSpouse = guests.filter(
    (g) => g.attendance === "with_spouse"
  ).length;

  const notComing = guests.filter(
    (g) => g.attendance === "not_coming"
  ).length;

  // TOTAL PEOPLE
  const totalPeople =
    comingAlone + comingWithSpouse * 2;

  // EXPORT
  const exportExcel = () => {
    const formatted = guests.map((g) => ({
      "Аты-жөні": g.name,
      "Қатысуы":
        g.attendance === "coming"
          ? "Қатысады"
          : g.attendance === "with_spouse"
          ? "Жұбайымен келеді"
          : "Келе алмайды",
    }));

    const worksheet = XLSX.utils.json_to_sheet(formatted);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Guests"
    );

    XLSX.writeFile(workbook, "aqsezim-guests.xlsx");
  };

  // LOGIN
  if (!authorized) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#e6dfd5]
          px-6
        "
      >
        <div
          className="
            w-full
            max-w-sm
            bg-white/50
            backdrop-blur-md
            border
            border-[#b68b3c]/30
            rounded-[40px]
            p-8
            text-center
          "
        >

          <h1 className="text-4xl italic font-light text-black mb-8">
            Admin
          </h1>

          <input
            type="password"
            placeholder="Құпия сөз"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              px-5
              py-4
              rounded-full
              bg-white/70
              border
              border-[#b68b3c]/30
              outline-none
              text-black
              mb-5
            "
          />

          <button
            onClick={() =>
              setAuthorized(password === ADMIN_PASSWORD)
            }
            className="
              w-full
              py-4
              rounded-full
              bg-[#b68b3c]
              text-white
              italic
              text-lg
            "
          >
            Кіру
          </button>

          {password && password !== ADMIN_PASSWORD && (
            <p className="text-red-500 text-sm mt-4 italic">
              Қате құпия сөз
            </p>
          )}

        </div>
      </div>
    );
  }

  // DASHBOARD
  return (
    <div className="min-h-screen bg-[#e6dfd5] p-5">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-5xl italic font-light text-black">
              Guests
            </h1>

            <p className="text-neutral-600 italic mt-2">
              Aqsezim Qyz Uzatu
            </p>
          </div>

          <button
            onClick={exportExcel}
            className="
              px-6
              py-3
              rounded-full
              bg-[#b68b3c]
              text-white
              italic
            "
          >
            Excel
          </button>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">

          {/* TOTAL */}
          <div className="bg-white/60 rounded-[30px] p-6 backdrop-blur-md">

            <p className="text-neutral-500 italic mb-2">
              Барлығы
            </p>

            <h2 className="text-4xl font-light text-black">
              {guests.length}
            </h2>
          </div>

          {/* COMING */}
          <div className="bg-white/60 rounded-[30px] p-6 backdrop-blur-md">

            <p className="text-neutral-500 italic mb-2">
              Қатысады
            </p>

            <h2 className="text-4xl font-light text-black">
              {comingAlone}
            </h2>
          </div>

          {/* WITH SPOUSE */}
          <div className="bg-white/60 rounded-[30px] p-6 backdrop-blur-md">

            <p className="text-neutral-500 italic mb-2">
              Жұбайымен
            </p>

            <h2 className="text-4xl font-light text-black">
              {comingWithSpouse}
            </h2>
          </div>

          {/* TOTAL PEOPLE */}
          <div className="bg-white/60 rounded-[30px] p-6 backdrop-blur-md">

            <p className="text-neutral-500 italic mb-2">
              Адам саны
            </p>

            <h2 className="text-4xl font-light text-black">
              {totalPeople}
            </h2>
          </div>

        </div>

        {/* NOT COMING */}
        <div className="bg-white/60 rounded-[30px] p-6 backdrop-blur-md mb-8">

          <p className="text-neutral-500 italic mb-2">
            Келе алмайды
          </p>

          <h2 className="text-4xl font-light text-black">
            {notComing}
          </h2>
        </div>

        {/* GUESTS LIST */}
        <div className="space-y-4">

          {guests.map((g) => (
            <div
              key={g.id}
              className="
                bg-white/60
                rounded-[30px]
                p-5
                backdrop-blur-md
              "
            >

              <div className="flex items-center justify-between gap-4">

                <div>

                  <h2 className="text-2xl italic text-black">
                    {g.name}
                  </h2>

                  <p className="text-neutral-600 mt-2">

                    {g.attendance === "coming" &&
                      "✅ ҚАТЫСАДЫ"}

                    {g.attendance === "with_spouse" &&
                      "💍 ЖҰБАЙЫМЕН КЕЛЕДІ"}

                    {g.attendance === "not_coming" &&
                      "❌ КЕЛЕ АЛМАЙДЫ"}

                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}