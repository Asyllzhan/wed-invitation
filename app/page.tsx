export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-md">
          <p className="text-xs tracking-[0.4em] uppercase text-neutral-300 mb-3">
            Wedding Invitation
          </p>

          <h1 className="text-4xl font-light mb-4">
            Aqsezim <br /> & Daniyar
          </h1>

          <p className="text-lg text-neutral-200">
            25 August 2026
          </p>

          <p className="text-xs text-neutral-400 mt-8 animate-bounce">
            ↓ Scroll down
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 text-center">
        <div className="max-w-md">
          <h2 className="text-2xl mb-4">You are invited</h2>
          <p className="text-neutral-300 leading-relaxed">
            We are happy to invite you to celebrate our wedding day.
            Please join us for this special moment.
          </p>
        </div>
      </section>

    </main>
  );
}