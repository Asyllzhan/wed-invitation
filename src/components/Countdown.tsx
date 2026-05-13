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
        days: Math.max(
          0,
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ),
        hours: Math.max(
          0,
          Math.floor((distance / (1000 * 60 * 60)) % 24)
        ),
        minutes: Math.max(
          0,
          Math.floor((distance / (1000 * 60)) % 60)
        ),
        seconds: Math.max(
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
        Countdown
      </h2>

      <div className="grid grid-cols-4 gap-3">

        {/* DAYS */}
        <div className="bg-white/40 backdrop-blur-md rounded-[24px] py-5 px-2 border border-[#b68b3c]/30">

          <p className="text-3xl font-light">
            {timeLeft.days}
          </p>

          <p className="text-xs uppercase tracking-[3px] mt-2 text-neutral-600">
            Days
          </p>
        </div>

        {/* HOURS */}
        <div className="bg-white/40 backdrop-blur-md rounded-[24px] py-5 px-2 border border-[#b68b3c]/30">

          <p className="text-3xl font-light">
            {timeLeft.hours}
          </p>

          <p className="text-xs uppercase tracking-[3px] mt-2 text-neutral-600">
            Hours
          </p>
        </div>

        {/* MINUTES */}
        <div className="bg-white/40 backdrop-blur-md rounded-[24px] py-5 px-2 border border-[#b68b3c]/30">

          <p className="text-3xl font-light">
            {timeLeft.minutes}
          </p>

          <p className="text-xs uppercase tracking-[3px] mt-2 text-neutral-600">
            Min
          </p>
        </div>

        {/* SECONDS */}
        <div className="bg-white/40 backdrop-blur-md rounded-[24px] py-5 px-2 border border-[#b68b3c]/30">

          <p className="text-3xl font-light">
            {timeLeft.seconds}
          </p>

          <p className="text-xs uppercase tracking-[3px] mt-2 text-neutral-600">
            Sec
          </p>
        </div>

      </div>
    </div>
  );
}