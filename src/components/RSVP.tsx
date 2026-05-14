"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("coming");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!name) return;

    try {
      setLoading(true);

      await addDoc(collection(db, "guests"), {
        name,
        attendance,
        createdAt: new Date(),
      });

      setSent(true);
      setName("");
    } catch (error) {
      console.log(error);
      alert("Қате пайда болды");
    } finally {
      setLoading(false);
    }
  };

  const options = [
    { value: "coming", label: "Келемін" },
    { value: "with_spouse", label: "Жұбайыммен барамын" },
    { value: "not_coming", label: "Келе алмаймын" },
  ];

  if (sent) {
    return (
      <div className="text-center py-6">
        {/* Иконка успеха */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(182,139,60,0.12)", border: "1.5px solid #b68b3c" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b68b3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <p className="text-[17px] italic text-[#3a2810] mb-1">
          Жауабыңыз сәтті жіберілді
        </p>
        <p className="text-2xl mb-6">💍</p>

        <button
          onClick={() => setSent(false)}
          className="text-[13px] italic underline text-[#9a7a50]"
        >
          Қайта жіберу
        </button>
      </div>
    );
  }

  return (
    <div className="w-full text-black space-y-6">

      {/* ИМЯ */}
      <div>
        <p className="text-[15px] uppercase tracking-[3px] text-[#9a7a50] mb-3 text-left">
          Аты-жөніңіз
        </p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Есім(дер)іңіз"
          className="w-full px-5 py-3.5 outline-none italic text-[15px] text-[#3a2810] placeholder:text-[#b8a080]"
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1.5px solid #d4b87a",
            borderRadius: "999px",
          }}
        />

        <p className="text-[13px] italic text-[#9a7a50] mt-2 leading-relaxed text-left">
          Жұбайыңызбен келетін болсаңыз,
          екеуіңіз де есімдеріңізді жазыңыз
        </p>
      </div>

      {/* ҚАТЫСУ */}
      <div>
        <p className="text-[12px] uppercase tracking-[3px] text-[#9a7a50] mb-3 text-left">
          Қатысуыңыз
        </p>

        <div className="space-y-2.5">
          {options.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 cursor-pointer py-3 px-4 transition-all"
              style={{
                background: attendance === opt.value
                  ? "rgba(182,139,60,0.08)"
                  : "rgba(255,255,255,0.5)",
                border: attendance === opt.value
                  ? "1.5px solid #b68b3c"
                  : "1.5px solid #e0d0b0",
                borderRadius: "12px",
              }}
            >
              {/* Кастомный radio */}
              <div
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  border: "1.5px solid #b68b3c",
                  background: attendance === opt.value ? "#b68b3c" : "transparent",
                }}
              >
                {attendance === opt.value && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>

              <input
                type="radio"
                name="attendance"
                value={opt.value}
                checked={attendance === opt.value}
                onChange={(e) => setAttendance(e.target.value)}
                className="hidden"
              />

              <span className="italic text-[15px] text-[#3a2810]">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* КНОПКА */}
      <button
        onClick={handleSubmit}
        disabled={loading || !name}
        className="w-full py-4 rounded-full text-white text-[16px] italic transition-all active:scale-[0.98]"
        style={{
          background: loading || !name
            ? "#c9a96e"
            : "linear-gradient(135deg, #c9a96e 0%, #b68b3c 100%)",
          opacity: !name ? 0.7 : 1,
          boxShadow: name ? "0 4px 20px rgba(182,139,60,0.3)" : "none",
        }}
      >
        {loading ? "Жіберілуде..." : "Жіберу"}
      </button>

    </div>
  );
}