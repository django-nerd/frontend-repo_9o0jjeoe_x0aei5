import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  const mapsUrl =
    "https://www.google.com/maps/place/Tugu+Yogyakarta/@-7.782889,110.367083,15z";
  const address = "Pendopo Ndalem Wironegaran, Yogyakarta";

  return (
    <section id="location" className="py-12 sm:py-16 bg-amber-50/60">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-amber-800">
          Lokasi Acara
        </h2>
        <p className="text-center text-stone-600 mt-2">
          {address}
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-amber-200 shadow-sm">
          <iframe
            title="Lokasi Acara"
            src="https://www.google.com/maps?q=-7.782889,110.367083&z=14&output=embed"
            className="w-full h-64 sm:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-3 text-white shadow hover:bg-amber-700"
          >
            <Navigation className="h-5 w-5" /> Buka di Google Maps
          </a>
          <div className="flex items-center gap-2 text-amber-800">
            <MapPin className="h-5 w-5" />
            <span className="text-sm">Koordinat: -7.782889, 110.367083</span>
          </div>
        </div>
      </div>
    </section>
  );
}
