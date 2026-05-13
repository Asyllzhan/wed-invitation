"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-06-24T18:00:00");

  const [timeLeft, setTimeLeft] = useState({
    Күн: 0,
    Сағат: 0,
    Минут: 0,
    Секунд: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        Күн: Math.max(
          0,
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ),
        Сағат: Math.max(
          0,
          Math.floor((distance / (1000 * 60 * 60)) % 24)
        ),
        Минут: Math.max(
          0,
          Math.floor((distance / (1000 * 60)) % 60)
        ),
        Секунд: Math.max(
          0,
          Math.floor((distance / 1000) % 60)
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-black">

      <h2 className="text-4xl italic mb-10 font-light">
        ТОЙ САЛТАНАТЫНА
        ДЕЙІН:
      </h2>

      <div className="grid grid-cols-4 gap-3">

        {/* DAYS */}
        <div className="bg-white/40 backdrop-blur-md rounded-[24px] py-5 px-2 border border-[#b68b3c]/30">

          <p className="text-3xl font-light">
            {timeLeft.Күн}
          </p>

          <p className="text-xs uppercase tracking-[3px] mt-2 text-neutral-600">
            Күн
          </p>
        </div>

        {/* HOURS */}
        <div className="bg-white/40 backdrop-blur-md rounded-[24px] py-5 px-2 border border-[#b68b3c]/30">

          <p className="text-3xl font-light">
            {timeLeft.Сағат}
          </p>

          <p className="text-xs uppercase tracking-[3px] mt-2 text-neutral-600">
            Сағат
          </p>
        </div>

        {/* MINUTES */}
        <div className="bg-white/40 backdrop-blur-md rounded-[24px] py-5 px-2 border border-[#b68b3c]/30">

          <p className="text-3xl font-light">
            {timeLeft.Минут}
          </p>

          <p className="text-xs uppercase tracking-[3px] mt-2 text-neutral-600">
            Минут
          </p>
        </div>

        {/* SECONDS */}
        <div className="bg-white/40 backdrop-blur-md rounded-[24px] py-5 px-2 border border-[#b68b3c]/30">

          <p className="text-3xl font-light">
            {timeLeft.Секунд}
          </p>

          <p className="text-xs uppercase tracking-[3px] mt-2 text-neutral-600">
            Секунд
          </p>
        </div>

      </div>
    </div>
  );
}