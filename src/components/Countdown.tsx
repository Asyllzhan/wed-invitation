"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-06-24T18:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((distance / (1000 * 60)) % 60)),
        seconds: Math.max(0, Math.floor((distance / 1000) % 60)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const items = [
    { value: timeLeft.days, label: "Күн" },
    { value: timeLeft.hours, label: "Сағат" },
    { value: timeLeft.minutes, label: "Минут" },
    { value: timeLeft.seconds, label: "Секунд" },
  ];

  return (
    <div className="text-center text-black">

      <h2 className="text-2xl italic mb-6 font-light text-[#3a2810]">
        Той салтанатына дейін:
      </h2>

      <div className="grid grid-cols-4 gap-2">
        {items.map(({ value, label }) => (
          <div
            key={label}
            className="py-4 px-1 text-center"
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(8px)",
              border: "1.5px solid #d4b87a",
              borderRadius: "14px",
            }}
          >
            <p className="text-[28px] font-light text-[#b68b3c] leading-none">
              {pad(value)}
            </p>
            <p className="text-[9px] uppercase tracking-[2px] mt-2 text-[#9a7a50]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}