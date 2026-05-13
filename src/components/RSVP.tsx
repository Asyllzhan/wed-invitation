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

  return (
    <div className="w-full text-black">

      {sent ? (
        <div className="text-center">

          <p className="text-green-700 text-lg italic mb-6">
            Жауабыңыз сәтті жіберілді 💍
          </p>

          <button
            onClick={() => setSent(false)}
            className="text-sm italic underline text-neutral-600"
          >
            Қайта жіберу
          </button>

        </div>
      ) : (
        <div className="space-y-8">

          {/* NAME TITLE */}
          <div>

            <p className="text-center text-lg italic mb-4">
              АТЫ-ЖӨНІҢІЗ:
            </p>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ЕСІМ(ДЕР)ІҢІЗ"
              className="
                w-full
                px-5
                py-4
                rounded-full
                bg-white/60
                border
                border-[#b68b3c]/40
                backdrop-blur-sm
                outline-none
                text-black
                placeholder:text-neutral-500
              "
            />

            <p className="text-sm italic text-neutral-600 mt-4 leading-relaxed">
              (ЖҰБАЙЫҢЫЗБЕН КЕЛЕТІН БОЛСАҢЫЗ,
              ЕКЕУІҢІЗ ДЕ ЕСІМДЕРІҢІЗДІ
              ЖАЗУЫҢЫЗДЫ СҰРАЙМЫЗ)
            </p>

          </div>

          {/* ATTENDANCE */}
          <div>

            <p className="text-left text-lg italic mb-5">
              ҚАТЫСУЫҢЫЗ:
            </p>

            <div className="space-y-4">

              {/* OPTION 1 */}
              <label className="flex items-center gap-4 cursor-pointer">

                <input
                  type="radio"
                  name="attendance"
                  value="coming"
                  checked={attendance === "coming"}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="w-5 h-5 accent-[#b68b3c]"
                />

                <span className="italic text-lg">
                  КЕЛЕМІН
                </span>

              </label>

              {/* OPTION 2 */}
              <label className="flex items-center gap-4 cursor-pointer">

                <input
                  type="radio"
                  name="attendance"
                  value="with_spouse"
                  checked={attendance === "with_spouse"}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="w-5 h-5 accent-[#b68b3c]"
                />

                <span className="italic text-lg">
                  ЖҰБАЙЫММЕН БАРАМЫН
                </span>

              </label>

              {/* OPTION 3 */}
              <label className="flex items-center gap-4 cursor-pointer">

                <input
                  type="radio"
                  name="attendance"
                  value="not_coming"
                  checked={attendance === "not_coming"}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="w-5 h-5 accent-[#b68b3c]"
                />

                <span className="italic text-lg">
                  КЕЛЕ АЛМАЙМЫН
                </span>

              </label>

            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              w-full
              py-4
              rounded-full
              bg-[#b68b3c]
              text-white
              text-lg
              italic
              transition
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            {loading ? "Жіберілуде..." : "Жіберу"}
          </button>

        </div>
      )}
    </div>
  );
}