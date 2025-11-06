import { Calendar, Clock } from "lucide-react";

export default function Schedule() {
  const schedule = [
    {
      title: "Akad Nikah",
      date: "Minggu, 22 Desember 2025",
      time: "08.00 WIB – 10.00 WIB",
      note: "Upacara akad secara khidmat bersama keluarga inti",
    },
    {
      title: "Resepsi",
      date: "Minggu, 22 Desember 2025",
      time: "11.00 WIB – 14.00 WIB",
      note: "Silakan hadir dan berbagi kebahagiaan bersama kami",
    },
  ];

  return (
    <section id="schedule" className="py-12 sm:py-16 bg-white/80 backdrop-blur">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-amber-800 tracking-wide">
          Susunan Acara
        </h2>
        <p className="text-center text-stone-600 mt-2">
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk
          menghadiri acara pernikahan kami.
        </p>

        <div className="mt-8 grid gap-4">
          {schedule.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 sm:p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-amber-900">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:gap-6 text-amber-800">
                    <div className="flex items-center gap-2 text-sm sm:text-base">
                      <Calendar className="h-5 w-5" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm sm:text-base mt-1 sm:mt-0">
                      <Clock className="h-5 w-5" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-stone-700 text-sm sm:text-base">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
