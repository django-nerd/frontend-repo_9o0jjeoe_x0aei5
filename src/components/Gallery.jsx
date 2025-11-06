export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-amber-50/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-amber-800">
          Galeri
        </h2>
        <p className="text-center text-stone-600 mt-2">
          Sekilas momen kebersamaan kami
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {images.map((src, idx) => (
            <div key={src} className={`${idx === 0 ? "col-span-2 row-span-2" : ""} relative overflow-hidden rounded-lg shadow-sm`}>
              <img
                src={src}
                alt={`Galeri ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
