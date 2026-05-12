"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function RSVP() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("coming");
  const [withWhom, setWithWhom] = useState("alone");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!name) return;

    try {
      setLoading(true);

      await addDoc(collection(db, "guests"), {
        name,
        status,
        withWhom,
        createdAt: new Date(),
      });

      setSent(true);
      setName("");
    } catch (error) {
      console.log(error);
      alert("Ошибка отправки");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20">
      <div className="max-w-md w-full text-center">

        <h2 className="text-2xl mb-8 tracking-widest uppercase text-neutral-300">
          RSVP
        </h2>

        {sent ? (
          <div>
            <p className="text-green-400 mb-4">
              Спасибо! Ваш ответ сохранён 💍
            </p>

            <button
              onClick={() => setSent(false)}
              className="text-sm underline text-neutral-400"
            >
              Отправить ещё раз
            </button>
          </div>
        ) : (
          <div className="space-y-4">

            {/* NAME */}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="w-full p-3 rounded bg-white/10 border border-white/20"
            />

            {/* STATUS */}
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 rounded bg-white/10 border border-white/20"
            >
              <option value="coming">Приду</option>
              <option value="not_coming">Не приду</option>
            </select>

            {/* WITH WHOM */}
            <select
              value={withWhom}
              onChange={(e) => setWithWhom(e.target.value)}
              className="w-full p-3 rounded bg-white/10 border border-white/20"
            >
              <option value="alone">Один</option>
              <option value="with_spouse">С супругой/супругом</option>
            </select>

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              {loading ? "Отправка..." : "Отправить"}
            </button>

          </div>
        )}

      </div>
    </section>
  );
}