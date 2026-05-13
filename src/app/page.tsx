import Countdown from "@/components/Countdown";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden scroll-smooth">

      {/* ================= PAGE 1 ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/aq1.jpeg')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">

          <p className="uppercase tracking-[8px] text-sm text-neutral-300 mb-6">
            Wedding Invitation
          </p>

          <h1 className="text-5xl md:text-7xl font-extralight tracking-wide">
            Aqsezim
          </h1>

          <p className="mt-4 text-neutral-300 text-lg">
            Qyz Uzatu
          </p>

          <div className="w-24 h-[1px] bg-white/40 mx-auto my-8" />

          <p className="text-neutral-300 tracking-[4px] uppercase text-sm">
            24 June 2026 • 18:00
          </p>

          <p className="mt-16 animate-bounce text-neutral-400 text-sm">
            ↓ Scroll
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

    <p className="text-xl italic">
      Сіздерді аяулы қызымыз
    </p>

    <h1 className="text-6xl italic my-10 font-light">
      Aqsezımnıñ
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

    {/* CALENDAR */}
    <div className="border-2 border-[#b68b3c] rounded-[30px] mt-12 p-5 bg-white/20 backdrop-blur-sm">

      <div className="grid grid-cols-7 gap-2 text-sm mb-4">
        {["ДС", "СС", "СР", "БС", "ЖМ", "СБ", "ЖС"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-sm">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={
              i + 1 === 24
                ? "border border-[#b68b3c] rounded-md"
                : ""
            }
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>

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
    </h2>

    <p className="text-xl italic leading-relaxed mb-10">
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