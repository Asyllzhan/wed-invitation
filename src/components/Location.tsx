export default function Location() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20">
      <div className="max-w-md w-full text-center">

        <h2 className="text-2xl mb-6 tracking-widest uppercase text-neutral-300">
          Location
        </h2>

        {/* Card */}
        <div className="border border-white/20 rounded-2xl p-6 bg-white/5 backdrop-blur-sm">

          <h3 className="text-xl mb-2">
            Qobyz Ballroom
          </h3>

          <p className="text-neutral-400 text-sm mb-6">
            Taraz, Kazakhstan
          </p>

          {/* Map preview */}
          <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
            <iframe
              src="https://www.google.com/maps?q=42.899736,71.338587&z=15&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Button */}
          <a
            href="https://2gis.kz/taraz/geo/70000001111844810/71.338587,42.899736"
            target="_blank"
            className="inline-block w-full py-3 rounded-full border border-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition"
          >
            Open in Maps
          </a>

        </div>

      </div>
    </section>
  );
}