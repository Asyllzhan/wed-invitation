"use client";

import Countdown from "@/components/Countdown";
import RSVP from "@/components/RSVP";
import MusicPlayer from "@/components/MusicPlayer";
import { motion } from "framer-motion"; // Если установил ран

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden scroll-smooth">
      <MusicPlayer />
      {/* ================= PAGE 1 ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/aq7.jpeg')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />
{/* CONTENT */}
<div className="relative z-10 text-center px-6 mt-40 md:mt-0"> 
  {/* mt-40 опустит текст вниз на мобильных, md:mt-0 вернет как было на компьютерах */}

  <p className="uppercase tracking-[8px] text-sm text-neutral-300 mb-30">
    ТОЙҒА ШАҚЫРТУ
  </p>

  <h1 
    className="text-7xl md:text-9xl text-white drop-shadow-md"
    style={{ fontFamily: "var(--font-kz-ceremonious)" }}
  >
    Ақсезім
  </h1>

  <p className="mt-6 text-neutral-200 text-2xl md:text-2xl tracking-[4px] uppercase font-light">
    Qyz Uzatu
  </p>

  <div className="w-24 h-[1px] bg-white/40 mx-auto my-8" />

  <p className="text-neutral-300 tracking-[4px] uppercase text-sm">
    24 Маусым 2026 • 19:00
  </p>

  <p className="mt-10 animate-bounce text-neutral-400 text-sm">
    ↓ Астыға айналдырыңыз ↓
  </p>
</div>
      </section>

      {/* ================= PAGE 2 ================= */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/bg.png')",
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#e6dfd5]/88" />

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-sm text-center px-6 py-16 text-black">

    <h2 className="text-4xl italic mb-10 font-light">
      Құрметті
    </h2>

    <p className="text-[20px] leading-[42px] italic">
      Ағайын-туыс, бауырлар,
      құда-жекжат,
      нағашы-жиен, бөлелер,
      дос-жаран, көршілер мен
      әріптестер!
    </p>

    <div className="h-20" />

    <p className="text-xl italic mb-6"> 
  {/* mb-6 добавит отступ снизу от этой строки */}
  Сіздерді аяулы қызымыз
</p>

<h1 
  className="text-[48px] leading-[1.1] md:text-[100px] text-[#b68b3c] drop-shadow-md whitespace-nowrap mt-4 mb-4"
  style={{ 
    fontFamily: "var(--font-kz-ceremonious)",
    marginLeft: "-5px",
    marginRight: "-5px"
  }}
>
  Ақсезімнің
</h1>

    <p className="text-[20px] leading-[42px] italic">
      Ұзату тойына арналған
      салтанатты ақ дастарханымыздың
      қадірлі қонағы болуға
      шақырамыз!
    </p>
  </div>
</section>
{/* ================= PAGE 3 ================= */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/bg2.png')",
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#e6dfd5]/88" />

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-sm text-center px-6 py-16 text-black">

    <p className="text-2xl italic leading-loose">
      Құрметпен, той иелері
    </p>

    <h2 className="text-4xl italic my-10 font-light">
      Бақытжан – Мадина
    </h2>

    <h2 className="text-4xl italic mb-10 font-light">
      Той салтанаты
    </h2>

    <p className="text-2xl italic">
      24 Маусым 2026
    </p>

    <p className="text-xl mt-3">
      Сағат 18:00
    </p>
{/* CALENDAR CONTAINER */}
<motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative overflow-hidden border-2 border-[#b68b3c] rounded-[30px] mt-12 p-6 bg-white/10 backdrop-blur-md shadow-xl"
>
  {/* BACKGROUND IMAGE FOR CALENDAR */}
  <div 
    className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg4.png')" }} // Укажи здесь путь к своей фоновой картинке
  />

  {/* CALENDAR CONTENT */}
  <div className="relative z-10">
    <div className="grid grid-cols-7 gap-2 text-[11px] mb-6 font-medium tracking-widest text-[#b68b3c]">
      {["ДС", "СС", "СР", "БС", "ЖМ", "СБ", "ЖС"].map((d) => (
        <div key={d} className="text-center">{d}</div>
      ))}
    </div>

    <div className="grid grid-cols-7 gap-y-4 text-sm font-light">
      {[...Array(30)].map((_, i) => {
        const day = i + 1;
        const isTarget = day === 24;

        return (
          <div key={i} className="relative flex items-center justify-center h-10 w-full">
            {isTarget && (
              <motion.div 
                layoutId="calendarSelect"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 m-auto w-9 h-9 border-2 border-[#b68b3c] bg-[#b68b3c]/10 rounded-full"
              />
            )}
            <span className={isTarget ? "text-[#b68b3c] font-bold z-10" : "text-neutral-500 z-10"}>
              {day}
            </span>
          </div>
        );
      })}
    </div>
  </div>
</motion.div>


    {/* LOCATION */}
    <div className="mt-14">

      <h2 className="text-4xl italic mb-6 font-light">
        Мекенжайы
      </h2>

      <p className="text-xl italic leading-relaxed">
        Тараз қаласы,
        Әл-Фараби көшесі 68
      </p>

      <h1 className="text-6xl italic my-6 font-light">
        Qobyz
      </h1>

      <p className="text-xl italic">
        мейрамханасы
      </p>

      {/* MAP BUTTON */}
      <a
        href="https://2gis.kz/taraz/geo/70000001111844810/71.338587,42.899736"
        target="_blank"
        className="inline-block mt-8 border-2 border-black rounded-full px-10 py-3 text-xl italic hover:bg-black hover:text-white transition duration-300"
      >
        Карта
      </a>
    </div>
  </div>
</section>
{/* ================= PAGE 4 ================= */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/bg2.png')",
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#e6dfd5]/88" />

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-sm text-center px-6 py-16 text-black">

    {/* <h2 className="text-4xl italic mb-10 font-light">
      RSVP
    </h2>*/}

    <p className="text-xl italic leading-relaxed mb-2">
      Тойға келетініңізді
      растауыңызды сұраймыз
    </p>


    {/* RSVP */}
    <div className="bg-white/30 backdrop-blur-md rounded-[30px] p-5 border border-white/40">
      <RSVP />
    </div>

    {/* COUNTDOWN */}
    <div className="mt-14">
      <Countdown />
    </div>
  </div>
</section>

    </main>
  );
}