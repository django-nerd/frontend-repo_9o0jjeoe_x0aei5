import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #f59e0b 2px, transparent 2px), radial-gradient(circle at 80% 30%, #b45309 2px, transparent 2px), radial-gradient(circle at 40% 80%, #92400e 2px, transparent 2px)",
          backgroundSize: "40px 40px, 50px 50px, 60px 60px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:py-20 text-center">
        <p className="text-sm tracking-widest text-amber-700 uppercase">
          The Wedding of
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-amber-900">
          Aji &amp; Sari
        </h1>
        <div className="mt-4 inline-flex items-center gap-2 text-amber-800">
          <Heart className="h-5 w-5 fill-amber-600/30" />
          <span className="text-lg">Minggu, 22 Desember 2025</span>
          <Heart className="h-5 w-5 fill-amber-600/30" />
        </div>

        <p className="mt-6 text-stone-700 max-w-2xl mx-auto">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan
          akad dan resepsi pernikahan. Merupakan kehormatan dan kebahagiaan bagi
          kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>

        <a
          href="#schedule"
          className="mt-8 inline-block rounded-full bg-amber-600 px-6 py-3 text-white shadow hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          Lihat Susunan Acara
        </a>
      </div>
    </header>
  );
}
