"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-08-25T17:00:00");

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
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center">
        <h2 className="text-xl mb-10 tracking-widest uppercase text-neutral-400">
          Countdown to Wedding
        </h2>

        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-3xl font-light">{timeLeft.days}</p>
            <p className="text-xs text-neutral-400">Days</p>
          </div>

          <div>
            <p className="text-3xl font-light">{timeLeft.hours}</p>
            <p className="text-xs text-neutral-400">Hours</p>
          </div>

          <div>
            <p className="text-3xl font-light">{timeLeft.minutes}</p>
            <p className="text-xs text-neutral-400">Min</p>
          </div>

          <div>
            <p className="text-3xl font-light">{timeLeft.seconds}</p>
            <p className="text-xs text-neutral-400">Sec</p>
          </div>
        </div>
      </div>
    </section>
  );
}