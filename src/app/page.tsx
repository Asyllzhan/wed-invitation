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
        <div className="absolute inset-0 bg-[#e6dfd5]/90" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-xl text-center px-8 py-24 text-black">

          <h2 className="text-6xl italic mb-16 font-light">
            Құрметті
          </h2>

          <p className="text-[28px] leading-[60px] italic">
            Ағайын-туыс, бауырлар,
            құда-жекжат,
            нағашы-жиен, бөле,
            дос-жаран, көршілер мен
            әріптестер!
          </p>

          <div className="h-32" />

          <p className="text-3xl italic">
            Сіздерді аяулы қызымыз
          </p>

          <h1 className="text-8xl italic my-14 font-light">
            Aqsezimnin
          </h1>

          <p className="text-[28px] leading-[60px] italic">
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
        <div className="absolute inset-0 bg-[#e6dfd5]/90" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-xl text-center px-8 py-24 text-black">

          <p className="text-3xl italic leading-loose">
            Құрметпен, той иелері
          </p>

          <h2 className="text-6xl italic my-14 font-light">
            Бақытжан – Мадина
          </h2>

          <h2 className="text-6xl italic mb-14 font-light">
            Той салтанаты
          </h2>

          <p className="text-4xl italic">
            24 Маусым 2026
          </p>

          <p className="text-3xl mt-4">
            Сағат 18:00
          </p>

          {/* CALENDAR */}
          <div className="border-[3px] border-[#b68b3c] rounded-[40px] mt-20 p-8 bg-white/20 backdrop-blur-sm">

            <div className="grid grid-cols-7 gap-4 text-xl mb-6">
              {["ДС", "СС", "СР", "БС", "ЖМ", "СБ", "ЖС"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-4 text-xl">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className={
                    i + 1 === 24
                      ? "border border-[#b68b3c] rounded-lg"
                      : ""
                  }
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* LOCATION */}
          <div className="mt-20">

            <h2 className="text-6xl italic mb-10 font-light">
              Мекенжайы
            </h2>

            <p className="text-3xl italic leading-loose">
              Тараз қаласы,
              Әл-Фараби көшесі 68
            </p>

            <h1 className="text-8xl italic my-10 font-light">
              Qobyz
            </h1>

            <p className="text-3xl italic">
              мейрамханасы
            </p>

            {/* MAP BUTTON */}
            <a
              href="https://2gis.kz/taraz"
              target="_blank"
              className="inline-block mt-12 border-2 border-black rounded-full px-14 py-5 text-3xl italic hover:bg-black hover:text-white transition duration-300"
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
        <div className="absolute inset-0 bg-[#e6dfd5]/90" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-xl text-center px-8 py-24 text-black">

          <h2 className="text-6xl italic mb-14 font-light">
            RSVP
          </h2>

          <p className="text-3xl italic leading-loose mb-16">
            Тойға келетініңізді
            растауыңызды сұраймыз
          </p>

          {/* RSVP */}
          <div className="bg-white/30 backdrop-blur-md rounded-[40px] p-8 border border-white/40">
            <RSVP />
          </div>

          {/* COUNTDOWN */}
          <div className="mt-24">
            <Countdown />
          </div>
        </div>
      </section>

    </main>
  );
}