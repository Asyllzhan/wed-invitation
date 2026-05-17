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
<section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{ backgroundImage: "url('/aq5.jpeg')" }}
  />

  {/* DARK OVERLAY — чуть темнее снизу для читаемости */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

  {/* УГЛОВЫЕ ОРНАМЕНТЫ */}
  {/* Верхний левый */}
  <svg
    className="absolute top-5 left-5 w-14 h-14 opacity-50"
    viewBox="0 0 56 56" fill="none"
  >
    <path d="M4 4 L4 28 M4 4 L28 4" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 14 L14 4" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round"/>
    <circle cx="4" cy="4" r="2.5" fill="#c9a96e"/>
    <circle cx="28" cy="4" r="1" fill="#c9a96e" opacity="0.5"/>
    <circle cx="4" cy="28" r="1" fill="#c9a96e" opacity="0.5"/>
  </svg>

  {/* Верхний правый */}
  <svg
    className="absolute top-5 right-5 w-14 h-14 opacity-50"
    viewBox="0 0 56 56" fill="none"
    style={{ transform: "scaleX(-1)" }}
  >
    <path d="M4 4 L4 28 M4 4 L28 4" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 14 L14 4" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round"/>
    <circle cx="4" cy="4" r="2.5" fill="#c9a96e"/>
    <circle cx="28" cy="4" r="1" fill="#c9a96e" opacity="0.5"/>
    <circle cx="4" cy="28" r="1" fill="#c9a96e" opacity="0.5"/>
  </svg>

  {/* Нижний левый */}
  <svg
    className="absolute bottom-5 left-5 w-14 h-14 opacity-50"
    viewBox="0 0 56 56" fill="none"
    style={{ transform: "scaleY(-1)" }}
  >
    <path d="M4 4 L4 28 M4 4 L28 4" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 14 L14 4" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round"/>
    <circle cx="4" cy="4" r="2.5" fill="#c9a96e"/>
    <circle cx="28" cy="4" r="1" fill="#c9a96e" opacity="0.5"/>
    <circle cx="4" cy="28" r="1" fill="#c9a96e" opacity="0.5"/>
  </svg>

  {/* Нижний правый */}
  <svg
    className="absolute bottom-5 right-5 w-14 h-14 opacity-50"
    viewBox="0 0 56 56" fill="none"
    style={{ transform: "scale(-1)" }}
  >
    <path d="M4 4 L4 28 M4 4 L28 4" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 14 L14 4" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round"/>
    <circle cx="4" cy="4" r="2.5" fill="#c9a96e"/>
    <circle cx="28" cy="4" r="1" fill="#c9a96e" opacity="0.5"/>
    <circle cx="4" cy="28" r="1" fill="#c9a96e" opacity="0.5"/>
  </svg>

  {/* CONTENT */}
  <div className="relative z-10 text-center px-6 flex flex-col items-center">

    {/* Верхний маленький орнамент-разделитель 
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-[1px] bg-[#c9a96e]/60" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="#c9a96e" opacity="0.7">
        <polygon points="5,0 6.5,3.5 10,3.5 7.3,5.7 8.1,9.5 5,7.5 1.9,9.5 2.7,5.7 0,3.5 3.5,3.5"/>
      </svg>
      <div className="w-8 h-[1px] bg-[#c9a96e]/60" />
    </div>*/}

    {/* Подзаголовок сверху */}
    <p className="uppercase tracking-[8px] text-[11px] text-[#c9a96e] mb-15">
       
    </p>
    <p className="uppercase tracking-[8px] text-[11px] text-[#c9a96e] mb-15">
       
    </p>

    

    {/* Главное имя с золотым свечением */}
    <h1
      className="text-[80px] leading-none text-white"
      style={{
        fontFamily: "var(--font-kz-ceremonious)",
        textShadow: "0 0 60px rgba(182,139,60,0.55), 0 0 20px rgba(182,139,60,0.3)",
      }}
    >
      Ақсезім
    </h1>

    {/* Subtitle */}
    <p className="mt-4 text-[#e8d5a8] text-base tracking-[5px] uppercase font-light">
      Қыз ұзату
    </p>

    {/* Декоративная линия с ромбом */}
    <div className="flex items-center gap-3 my-6">
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c9a96e]/70" />
      <div
        className="w-2 h-2 rotate-45 border border-[#c9a96e]"
        style={{ minWidth: "8px" }}
      />
      <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c9a96e]/70" />
    </div>

    {/* Дата */}
    <p className="text-[#d4c4a0] tracking-[4px] uppercase text-[12px]">
      24 Маусым 2026 · 19:00
    </p>

    {/* Скролл-хинт внизу экрана */}
    <div className="mt-12 flex flex-col items-center gap-1 animate-bounce">
      <p className="text-[#a09070] text-[11px] tracking-[3px] uppercase">
        Айналдырыңыз
      </p>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a09070" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 5v14M5 15l7 7 7-7"/>
      </svg>
    </div>

  </div>
</section>


 {/* ================= PAGE 2 ================= */}
<section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg.png')" }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#ede6da]/80" />

  
  {/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
  style={{
    width: "160px",
    height: "160px",
    top: "-20px",
    left: "-20px",
    opacity: 0.80,
    animation: "oyu-spin 20s linear infinite",
  }}
/>
{/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
 style={{
  width: "160px",
  height: "160px",
  bottom: "-20px",
  right: "-20px",
  opacity: 0.80,
  animation: "oyu-spin 20s linear infinite",
}}
/>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-[420px] text-center px-6 py-16 text-black">

    {/* Верхний орнамент */}
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="w-10 h-[1px] bg-[#b68b3c]/50" />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 C12 2 8 8 12 12 C16 8 12 2 12 2Z" fill="#b68b3c" opacity="0.7"/>
        <path d="M12 22 C12 22 8 16 12 12 C16 16 12 22 12 22Z" fill="#b68b3c" opacity="0.5"/>
        <path d="M2 12 C2 12 8 8 12 12 C8 16 2 12 2 12Z" fill="#b68b3c" opacity="0.4"/>
        <path d="M22 12 C22 12 16 8 12 12 C16 16 22 12 22 12Z" fill="#b68b3c" opacity="0.4"/>
      </svg>
      <div className="w-10 h-[1px] bg-[#b68b3c]/50" />
    </div>

    {/* Құрметті */}
    <h2
      className="text-5xl italic mb-6 font-light text-[#3a2810]"
      style={{ letterSpacing: "2px" }}
    >
      Құрметті
    </h2>

    {/* Список гостей */}
    <p className="text-[23px] leading-[40px] italic text-[#4a3520]">
      Ағайын-туыс, бауырлар,<br />
      құда-жекжат,<br />
      нағашы-жиен, бөлелер,<br />
      дос-жаран, көршілер мен<br />
      әріптестер!
    </p>

    {/* Разделитель */}
    <div className="flex items-center gap-3 my-8">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#b68b3c]/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#b68b3c]/60" />
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#b68b3c]/40" />
    </div>

    {/* Шақырту текст */}
    <p className="text-[23px] italic text-[#4a3520] mb-1">
      Сіздерді аяулы қызымыз
    </p>
   {/* Имя в карточке */}
     <div className="relative text-center py-6 px-4 my-2">

      {/* Главное имя */}
      <h1
        className="text-[64px] italic text-[#b68b3c] leading-none"
        style={{
          fontFamily: "var(--font-kz-ceremonious)",
          letterSpacing: "-1px",
        }}
      >
        Ақсезімнің
      </h1>

      {/* Нижняя арка-линия */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[50%]"
        style={{
          background: "linear-gradient(90deg, transparent, #b68b3c44, transparent)",
        }}
      />
    </div>


    <p className="text-[23px] leading-[40px] italic text-[#4a3520] mt-5">
      Ұзату тойына арналған<br />
      салтанатты ақ дастарханымыздың<br />
      қадірлі қонағы болуға<br />
      шақырамыз!
    </p>

    {/* Нижний орнамент */}
    <div className="flex items-center justify-center gap-3 mt-8">
      <div className="w-10 h-[1px] bg-[#b68b3c]/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#b68b3c]/50" />
      <div className="w-10 h-[1px] bg-[#b68b3c]/40" />
    </div>
  </div>
</section>

{/* ================= PAGE 3 ================= */}
<section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg11.png')" }} 
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#ede6da]/80" />

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-[420px] text-center px-6 py-16 text-black">

    
  {/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
  style={{
    width: "160px",
    height: "160px",
    top: "-20px",
    left: "-20px",
    opacity: 0.80,
    animation: "oyu-spin 20s linear infinite",
  }}
/>
{/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
 style={{
  width: "160px",
  height: "160px",
  bottom: "-20px",
  right: "-20px",
  opacity: 0.80,
  animation: "oyu-spin 20s linear infinite",
}}
/>


    {/* Той иелері */}
    <p className="text-xl italic text-[#7a5c30] tracking-wide mb-4">
      Құрметпен, той иелері
    </p>

    <h2
      className="text-3xl italic mb-6 font-light text-[#3a2810]"
      style={{ letterSpacing: "2px" }}
    >
      Бақытжан-Мадина
    </h2>

    {/* Разделитель */}
    <div className="flex items-center gap-3 mb-8">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#b68b3c]/50" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#b68b3c]" />
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#b68b3c]/50" />
    </div>

    <h2 className="text-2xl italic mb-4 font-light text-[#3a2810]">
      Той салтанаты:
    </h2>
{/* ===== ДАТА + КАЛЕНДАРЬ + ВРЕМЯ ===== */}

{/* Текст даты */}
<p className="text-2xl italic text-[#3a2810] mb-6">
  24 Маусым 2026
</p>

{/* Календарь с сердцем */}
<div className="relative w-full mb-6">
  
  {/* Картинка календаря */}
  <img
    src="/calendar.png"
    alt="Маусым 2026"
    className="w-full h-auto"
    style={{ borderRadius: "16px" }}
  />

  {/* Анимированное сердце на 24-м числе */}
  {/* 
    Позиция сердца подобрана под твой календарь:
    - left: 24 находится в 4-й колонке из 7 (примерно 43% слева)
    - top:  24 в 5-й строке (примерно 78% сверху)
    Если сердце чуть смещено — подправь left/top в процентах
  */}
  <div
  className="absolute flex flex-col items-center justify-center"
  style={{
    left: "41.4%",
    top: "77%",
    transform: "translate(-50%, -50%)",
    width: "8vw",
    height: "8vw",
  }}
>
  {/* Пульсирующий круг */}
  <div
    className="absolute rounded-full"
    style={{
      width: "8vw",
      height: "8vw",
      background: "rgba(182,139,60,0.15)",
      animation: "pulse-ring 2s ease-in-out infinite",
    }}
  />

  {/* Сердце */}
  <svg
    style={{
      width: "6vw",
      height: "6vw",
      animation: "heartbeat 1.4s ease-in-out infinite",
      filter: "drop-shadow(0 0 6px rgba(182,139,60,0.8))",
    }}
    viewBox="0 0 24 24"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="none"
      stroke="#b68b3c"
      strokeWidth="1.2"
    />
  </svg>
</div>
</div>

{/* Время снизу */}
<p className="text-2xl italic text-[#3a2810]">
  Сағат 19:00-де
</p>
<p className="uppercase tracking-[8px] text-[11px] text-[#c9a96e] mb-10">
       
    </p>


    {/* Мекенжайы */}
    <h2 className="text-2xl italic mb-5 font-light text-[#3a2810]">
      Мекенжайы
    </h2>

    {/* Адрес — плашка с иконкой */}
    <div
      className="flex items-center gap-4 text-left p-4 mb-5"
      style={{
        border: "1.5px solid #d4b87a",
        borderRadius: "14px",
        background: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* Иконка геолокации */}
      <div
        className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
        style={{ background: "#b68b3c" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      </div>
      <div>
        <p className="text-[17px] italic font-medium text-[#3a2810] leading-tight">Qobyz    мейрамханасы</p>
        <p className="text-[13px] text-[#7a5c30] italic leading-snug mt-0.5">
          Тараз қаласы,<br />Әл-Фараби көшесі 68
        </p>
      </div>
    </div>

    {/* Кнопка карты */}
    <a
      href="https://2gis.kz/taraz/geo/70000001111844810/71.338587,42.899736"
      target="_blank"
      className="inline-flex items-center gap-2 mt-2 px-8 py-3 rounded-full text-[18px] italic transition duration-300"
      style={{
        border: "1.5px solid #3a2810",
        color: "#3a2810",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
      Картадан қарау
    </a>
  </div>
</section>

{/* ================= PAGE 4 ================= */}
<section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg.png')" }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#ede6da]/70" />

  
  {/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
  style={{
    width: "160px",
    height: "160px",
    top: "-20px",
    left: "-20px",
    opacity: 0.80,
    animation: "oyu-spin 20s linear infinite",
  }}
/>
{/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
 style={{
  width: "160px",
  height: "160px",
  bottom: "-20px",
  right: "-20px",
  opacity: 0.80,
  animation: "oyu-spin 20s linear infinite",
}}
/>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-[360px] text-center px-6 py-16 text-black">

    {/* Верхний орнамент */}
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="w-10 h-[1px] bg-[#b68b3c]/50" />
      <svg width="14" height="14" viewBox="0 0 10 10" fill="#b68b3c" opacity="0.7">
        <polygon points="5,0 6.5,3.5 10,3.5 7.3,5.7 8.1,9.5 5,7.5 1.9,9.5 2.7,5.7 0,3.5 3.5,3.5"/>
      </svg>
      <div className="w-10 h-[1px] bg-[#b68b3c]/50" />
    </div>

    <p className="text-[20px] italic leading-relaxed text-[#4a3520] mb-6">
      Тойға келетініңізді<br />
      растауыңызды сұраймыз
    </p>

    {/* RSVP карточка */}
    <div
      className="p-5"
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(10px)",
        border: "1.5px solid #d4b87a",
        borderRadius: "24px",
      }}
    >
      <RSVP />
    </div>

    {/* Разделитель перед таймером */}
    <div className="flex items-center gap-3 my-8">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#b68b3c]/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#b68b3c]/60" />
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#b68b3c]/40" />
    </div>

    {/* COUNTDOWN */}
    <Countdown />

    {/* Нижний декор */}
    <div className="flex items-center justify-center gap-3 mt-10">
      <div className="w-10 h-[1px] bg-[#b68b3c]/40" />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 C12 2 8 8 12 12 C16 8 12 2 12 2Z" fill="#b68b3c" opacity="0.6"/>
        <path d="M12 22 C12 22 8 16 12 12 C16 16 12 22 12 22Z" fill="#b68b3c" opacity="0.4"/>
        <path d="M2 12 C2 12 8 8 12 12 C8 16 2 12 2 12Z" fill="#b68b3c" opacity="0.35"/>
        <path d="M22 12 C22 12 16 8 12 12 C16 16 22 12 22 12Z" fill="#b68b3c" opacity="0.35"/>
      </svg>
      <div className="w-10 h-[1px] bg-[#b68b3c]/40" />
    </div>

    
  </div>
</section>

{/* ================= PAGE 01 ================= */}
<section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{ backgroundImage: "url('/aq8.jpeg')" }}
  />

  {/* DARK OVERLAY — чуть темнее снизу для читаемости */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

  {/* УГЛОВЫЕ ОРНАМЕНТЫ */}
  {/* Верхний левый */}
  <svg
    className="absolute top-5 left-5 w-14 h-14 opacity-50"
    viewBox="0 0 56 56" fill="none"
  >
    <path d="M4 4 L4 28 M4 4 L28 4" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 14 L14 4" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round"/>
    <circle cx="4" cy="4" r="2.5" fill="#c9a96e"/>
    <circle cx="28" cy="4" r="1" fill="#c9a96e" opacity="0.5"/>
    <circle cx="4" cy="28" r="1" fill="#c9a96e" opacity="0.5"/>
  </svg>

  {/* Верхний правый */}
  <svg
    className="absolute top-5 right-5 w-14 h-14 opacity-50"
    viewBox="0 0 56 56" fill="none"
    style={{ transform: "scaleX(-1)" }}
  >
    <path d="M4 4 L4 28 M4 4 L28 4" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 14 L14 4" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round"/>
    <circle cx="4" cy="4" r="2.5" fill="#c9a96e"/>
    <circle cx="28" cy="4" r="1" fill="#c9a96e" opacity="0.5"/>
    <circle cx="4" cy="28" r="1" fill="#c9a96e" opacity="0.5"/>
  </svg>

  {/* Нижний левый */}
  <svg
    className="absolute bottom-5 left-5 w-14 h-14 opacity-50"
    viewBox="0 0 56 56" fill="none"
    style={{ transform: "scaleY(-1)" }}
  >
    <path d="M4 4 L4 28 M4 4 L28 4" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 14 L14 4" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round"/>
    <circle cx="4" cy="4" r="2.5" fill="#c9a96e"/>
    <circle cx="28" cy="4" r="1" fill="#c9a96e" opacity="0.5"/>
    <circle cx="4" cy="28" r="1" fill="#c9a96e" opacity="0.5"/>
  </svg>

  {/* Нижний правый */}
  <svg
    className="absolute bottom-5 right-5 w-14 h-14 opacity-50"
    viewBox="0 0 56 56" fill="none"
    style={{ transform: "scale(-1)" }}
  >
    <path d="M4 4 L4 28 M4 4 L28 4" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 14 L14 4" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round"/>
    <circle cx="4" cy="4" r="2.5" fill="#c9a96e"/>
    <circle cx="28" cy="4" r="1" fill="#c9a96e" opacity="0.5"/>
    <circle cx="4" cy="28" r="1" fill="#c9a96e" opacity="0.5"/>
  </svg>

  {/* CONTENT */}
  <div className="relative z-10 text-center px-6 flex flex-col items-center">

    {/* Верхний маленький орнамент-разделитель 
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-[1px] bg-[#c9a96e]/60" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="#c9a96e" opacity="0.7">
        <polygon points="5,0 6.5,3.5 10,3.5 7.3,5.7 8.1,9.5 5,7.5 1.9,9.5 2.7,5.7 0,3.5 3.5,3.5"/>
      </svg>
      <div className="w-8 h-[1px] bg-[#c9a96e]/60" />
    </div>*/}

    {/* Подзаголовок сверху */}
    <p className="uppercase tracking-[8px] text-[11px] text-[#c9a96e] mb-15">
       
    </p>
    <p className="uppercase tracking-[8px] text-[11px] text-[#c9a96e] mb-15">
       
    </p>

    

    {/* Главное имя с золотым свечением */}
    <h1
      className="text-[80px] leading-none text-white"
      style={{
        fontFamily: "var(--font-kz-ceremonious)",
        textShadow: "0 0 60px rgba(182,139,60,0.55), 0 0 20px rgba(182,139,60,0.3)",
      }}
    >
      Ақсезім
    </h1>

    {/* Subtitle */}
    <p className="mt-4 text-[#e8d5a8] text-base tracking-[5px] uppercase font-light">
      Қыз ұзату
    </p>

    {/* Декоративная линия с ромбом */}
    <div className="flex items-center gap-3 my-6">
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c9a96e]/70" />
      <div
        className="w-2 h-2 rotate-45 border border-[#c9a96e]"
        style={{ minWidth: "8px" }}
      />
      <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c9a96e]/70" />
    </div>

    {/* Дата */}
    <p className="text-[#d4c4a0] tracking-[4px] uppercase text-[12px]">
      24 Маусым 2026 · 19:00
    </p>

    {/* Скролл-хинт внизу экрана */}
    <div className="mt-12 flex flex-col items-center gap-1 animate-bounce">
      <p className="text-[#a09070] text-[11px] tracking-[3px] uppercase">
        Айналдырыңыз
      </p>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a09070" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 5v14M5 15l7 7 7-7"/>
      </svg>
    </div>

  </div>
</section>



 {/* ================= PAGE 2 ================= */}
<section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg34.png')" }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#ede6da]/80" />

  {/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
  style={{
    width: "160px",
    height: "160px",
    top: "-20px",
    left: "-20px",
    opacity: 0.18,
    animation: "oyu-spin 20s linear infinite",
  }}
/>
{/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
 style={{
  width: "160px",
  height: "160px",
  bottom: "-20px",
  right: "-20px",
  opacity: 0.18,
  animation: "oyu-spin 20s linear infinite",
}}
/>
  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-[420px] text-center px-6 py-16 text-black">

    {/* Верхний орнамент */}
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="w-10 h-[1px] bg-[#b68b3c]/50" />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 C12 2 8 8 12 12 C16 8 12 2 12 2Z" fill="#b68b3c" opacity="0.7"/>
        <path d="M12 22 C12 22 8 16 12 12 C16 16 12 22 12 22Z" fill="#b68b3c" opacity="0.5"/>
        <path d="M2 12 C2 12 8 8 12 12 C8 16 2 12 2 12Z" fill="#b68b3c" opacity="0.4"/>
        <path d="M22 12 C22 12 16 8 12 12 C16 16 22 12 22 12Z" fill="#b68b3c" opacity="0.4"/>
      </svg>
      <div className="w-10 h-[1px] bg-[#b68b3c]/50" />
    </div>

    {/* Құрметті */}
    <h2
      className="text-5xl italic mb-6 font-light text-[#3a2810]"
      style={{ letterSpacing: "2px" }}
    >
      Құрметті
    </h2>

    {/* Список гостей */}
    <p className="text-[23px] leading-[40px] italic text-[#4a3520]">
      Ағайын-туыс, бауырлар,<br />
      құда-жекжат,<br />
      нағашы-жиен, бөлелер,<br />
      дос-жаран, көршілер мен<br />
      әріптестер!
    </p>

    {/* Разделитель */}
    <div className="flex items-center gap-3 my-8">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#b68b3c]/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#b68b3c]/60" />
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#b68b3c]/40" />
    </div>

    {/* Шақырту текст */}
    <p className="text-[23px] italic text-[#4a3520] mb-1">
      Сіздерді аяулы қызымыз
    </p>
   {/* Имя в карточке */}
     <div className="relative text-center py-6 px-4 my-2">

      {/* Главное имя */}
      <h1
        className="text-[64px] italic text-[#b68b3c] leading-none"
        style={{
          fontFamily: "var(--font-kz-ceremonious)",
          letterSpacing: "-1px",
        }}
      >
        Ақсезімнің
      </h1>

      {/* Нижняя арка-линия */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[50%]"
        style={{
          background: "linear-gradient(90deg, transparent, #b68b3c44, transparent)",
        }}
      />
    </div>


    <p className="text-[23px] leading-[40px] italic text-[#4a3520] mt-5">
      Ұзату тойына арналған<br />
      салтанатты ақ дастарханымыздың<br />
      қадірлі қонағы болуға<br />
      шақырамыз!
    </p>

    {/* Нижний орнамент */}
    <div className="flex items-center justify-center gap-3 mt-8">
      <div className="w-10 h-[1px] bg-[#b68b3c]/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#b68b3c]/50" />
      <div className="w-10 h-[1px] bg-[#b68b3c]/40" />
    </div>
  </div>
</section>

{/* ================= PAGE 3 ================= */}
<section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg35.png')" }} 
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#ede6da]/80" />

  
  {/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
  style={{
    width: "160px",
    height: "160px",
    top: "-20px",
    left: "-20px",
    opacity: 0.18,
    animation: "oyu-spin 20s linear infinite",
  }}
/>
{/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
 style={{
  width: "160px",
  height: "160px",
  bottom: "-20px",
  right: "-20px",
  opacity: 0.80,
  animation: "oyu-spin 20s linear infinite",
}}
/>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-[480px] text-center px-6 py-16 text-black">

    {/* Той иелері */}
    <p className="text-xl italic text-[#7a5c30] tracking-wide mb-4">
      Құрметпен, той иелері
    </p>

    <h2
      className="text-3xl italic mb-6 font-light text-[#3a2810]"
      style={{ letterSpacing: "2px" }}
    >
      Бақытжан-Мадина
    </h2>

    {/* Разделитель */}
    <div className="flex items-center gap-3 mb-8">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#b68b3c]/50" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#b68b3c]" />
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#b68b3c]/50" />
    </div>

    <h2 className="text-2xl italic mb-4 font-light text-[#3a2810]">
      Той салтанаты:
    </h2>
{/* ===== ДАТА + КАЛЕНДАРЬ + ВРЕМЯ ===== */}

{/* Текст даты */}
<p className="text-2xl italic text-[#3a2810] mb-6">
  24 Маусым 2026
</p>

{/* Календарь с сердцем */}
<div className="relative w-full mb-6">
  
  {/* Картинка календаря */}
  <img
    src="/calendar.png"
    alt="Маусым 2026"
    className="w-full h-auto"
    style={{ borderRadius: "16px" }}
  />

  {/* Анимированное сердце на 24-м числе */}
  {/* 
    Позиция сердца подобрана под твой календарь:
    - left: 24 находится в 4-й колонке из 7 (примерно 43% слева)
    - top:  24 в 5-й строке (примерно 78% сверху)
    Если сердце чуть смещено — подправь left/top в процентах
  */}
  <div
  className="absolute flex flex-col items-center justify-center"
  style={{
    left: "41.4%",
    top: "77%",
    transform: "translate(-50%, -50%)",
    width: "8vw",
    height: "8vw",
  }}
>
  {/* Пульсирующий круг */}
  <div
    className="absolute rounded-full"
    style={{
      width: "8vw",
      height: "8vw",
      background: "rgba(182,139,60,0.15)",
      animation: "pulse-ring 2s ease-in-out infinite",
    }}
  />

  {/* Сердце */}
  <svg
    style={{
      width: "6vw",
      height: "6vw",
      animation: "heartbeat 1.4s ease-in-out infinite",
      filter: "drop-shadow(0 0 6px rgba(182,139,60,0.8))",
    }}
    viewBox="0 0 24 24"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="none"
      stroke="#b68b3c"
      strokeWidth="1.2"
    />
  </svg>
</div>
</div>

{/* Время снизу */}
<p className="text-2xl italic text-[#3a2810]">
  Сағат 19:00-де
</p>
<p className="uppercase tracking-[8px] text-[11px] text-[#c9a96e] mb-10">
       
    </p>


    {/* Мекенжайы */}
    <h2 className="text-2xl italic mb-5 font-light text-[#3a2810]">
      Мекенжайы
    </h2>

    {/* Адрес — плашка с иконкой */}
    <div
      className="flex items-center gap-4 text-left p-4 mb-5 max-w-[360] mx-auto"
      style={{
        border: "1.5px solid #d4b87a",
        borderRadius: "14px",
        background: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* Иконка геолокации */}
      <div
        className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
        style={{ background: "#b68b3c" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      </div>
      <div>
        <p className="text-[17px] italic font-medium text-[#3a2810] leading-tight">Qobyz    мейрамханасы</p>
        <p className="text-[13px] text-[#7a5c30] italic leading-snug mt-0.5">
          Тараз қаласы,<br />Әл-Фараби көшесі 68
        </p>
      </div>
    </div>

    {/* Кнопка карты */}
    <a
      href="https://2gis.kz/taraz/geo/70000001111844810/71.338587,42.899736"
      target="_blank"
      className="inline-flex items-center gap-2 mt-2 px-8 py-3 rounded-full text-[18px] italic transition duration-300"
      style={{
        border: "1.5px solid #3a2810",
        color: "#3a2810",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
      Картадан қарау
    </a>
  </div>
</section>

{/* ================= PAGE 4 ================= */}
<section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg36.png')" }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#ede6da]/70" />

  
  {/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
  style={{
    width: "160px",
    height: "160px",
    top: "-20px",
    left: "-20px",
    opacity: 0.80,
    animation: "oyu-spin 20s linear infinite",
  }}
/>
{/* ОЮ — крутящийся орнамент в левом верхнем углу */}
<img
  src="/oyu1.png"
  alt=""
  className="absolute z-10"
 style={{
  width: "160px",
  height: "160px",
  bottom: "-20px",
  right: "-20px",
  opacity: 0.80,
  animation: "oyu-spin 20s linear infinite",
}}
/>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-[420px] text-center px-6 py-16 text-black">
    {/* Верхний орнамент */}
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="w-10 h-[1px] bg-[#b68b3c]/50" />
      <svg width="14" height="14" viewBox="0 0 10 10" fill="#b68b3c" opacity="0.7">
        <polygon points="5,0 6.5,3.5 10,3.5 7.3,5.7 8.1,9.5 5,7.5 1.9,9.5 2.7,5.7 0,3.5 3.5,3.5"/>
      </svg>
      <div className="w-10 h-[1px] bg-[#b68b3c]/50" />
    </div>

    <p className="text-[20px] italic leading-relaxed text-[#4a3520] mb-6">
      Тойға келетініңізді<br />
      растауыңызды сұраймыз
    </p>

    {/* RSVP карточка */}
    <div
      className="p-5"
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(10px)",
        border: "1.5px solid #d4b87a",
        borderRadius: "24px",
      }}
    >
      <RSVP />
    </div>

    {/* Разделитель перед таймером */}
    <div className="flex items-center gap-3 my-8">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#b68b3c]/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#b68b3c]/60" />
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#b68b3c]/40" />
    </div>

    {/* COUNTDOWN */}
    <Countdown />

    {/* Нижний декор */}
    <div className="flex items-center justify-center gap-3 mt-10">
      <div className="w-10 h-[1px] bg-[#b68b3c]/40" />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 C12 2 8 8 12 12 C16 8 12 2 12 2Z" fill="#b68b3c" opacity="0.6"/>
        <path d="M12 22 C12 22 8 16 12 12 C16 16 12 22 12 22Z" fill="#b68b3c" opacity="0.4"/>
        <path d="M2 12 C2 12 8 8 12 12 C8 16 2 12 2 12Z" fill="#b68b3c" opacity="0.35"/>
        <path d="M22 12 C22 12 16 8 12 12 C16 16 22 12 22 12Z" fill="#b68b3c" opacity="0.35"/>
      </svg>
      <div className="w-10 h-[1px] bg-[#b68b3c]/40" />
    </div>

    
  </div>
</section>

    </main>
  );
}