import Countdown from "@/components/Countdown";
import Location from "@/components/Location";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">

        {/* IMAGE */}
        <div className="absolute inset-0 bg-[url('src/app/suret.jpeg')] bg-cover bg-center scale-105" />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

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

          <p className="text-neutral-400 tracking-[4px] uppercase text-sm">
            24 June 2026 • 17:00
          </p>

          <p className="mt-16 animate-bounce text-neutral-400 text-sm">
            ↓ Scroll
          </p>
        </div>
      </section>

      {/* INVITATION */}
      <section className="py-32 px-6 bg-[#111111]">
        <div className="max-w-2xl mx-auto text-center">

          <p className="uppercase tracking-[6px] text-neutral-500 text-sm mb-6">
            Dear Guests
          </p>

          <h2 className="text-4xl font-light mb-10">
            Мы рады пригласить вас
          </h2>

          <p className="text-neutral-300 leading-8 text-lg">
            Разделите с нами один из самых важных и счастливых дней нашей жизни.
            Будем счастливы видеть вас на нашем торжестве.
          </p>

        </div>
      </section>

      {/* EVENT */}
      <section className="py-32 px-6 bg-black">

        <div className="max-w-xl mx-auto text-center border border-white/10 rounded-[40px] p-12 bg-white/[0.03] backdrop-blur-sm">

          <p className="uppercase tracking-[6px] text-neutral-500 text-sm mb-6">
            Event Details
          </p>

          <h2 className="text-4xl font-light mb-8">
            Дата и время
          </h2>

          <p className="text-2xl text-neutral-200">
            24 June 2026
          </p>

          <p className="mt-3 text-neutral-400 text-lg">
            17:00
          </p>

        </div>
      </section>

      {/* LOCATION */}
      <Location />

      {/* RSVP */}
      <RSVP />

      {/* COUNTDOWN */}
      <Countdown />

      {/* FOOTER */}
      <footer className="py-10 text-center text-neutral-500 text-sm border-t border-white/10">
        Aqsezim Qyz Uzatu • 2026
      </footer>

    </main>
  );
}