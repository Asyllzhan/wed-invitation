import Countdown from "@/components/Countdown";
import Location from "@/components/Location";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-6xl font-light">
            Aqsezim
          </h1>
          <h1 className="text-4xl md:text-6xl font-light">
            QYZ UZATU
          </h1>
          <p className="mt-4 text-neutral-300">24 June 2026</p>

          <p className="mt-10 text-xs animate-bounce text-neutral-400">
            ↓ Scroll
          </p>
        </div>
      </section>

      {/* INVITATION */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-md text-center">
          <h2 className="text-2xl mb-4">Дорогие гости</h2>
          <p className="text-neutral-300 leading-relaxed">
            Мы рады пригласить вас разделить с нами один из самых важных дней нашей жизни.
          </p>
        </div>
      </section>

      {/* EVENT */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-neutral-950">
        <div className="text-center">
          <h2 className="text-xl mb-4">Дата и время</h2>
          <p className="text-neutral-300">24 June 2026</p>
          <p className="text-neutral-400">17:00</p>
        </div>
      </section>

      {/* COUNTDOWN (в конце логического блока) */}
      <Countdown />
      <Location />
      <RSVP />
    </main>
  );
}