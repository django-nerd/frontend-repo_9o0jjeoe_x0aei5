import { Banknote, Copy } from "lucide-react";
import { useState } from "react";

function Copyable({ label, value }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-amber-200 bg-white p-4">
      <div>
        <p className="text-sm text-stone-500">{label}</p>
        <p className="font-semibold text-amber-900 break-all">{value}</p>
      </div>
      <button
        onClick={onCopy}
        className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full bg-amber-600 px-4 py-2 text-white hover:bg-amber-700"
      >
        <Copy className="h-4 w-4" /> {copied ? "Disalin" : "Salin"}
      </button>
    </div>
  );
}

export default function Accounts() {
  return (
    <section id="accounts" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-amber-800">
          Nomor Rekening
        </h2>
        <p className="text-center text-stone-600 mt-2">
          Doa restu Anda adalah hadiah terindah. Bagi yang ingin memberikan
          tanda kasih, dapat melalui rekening berikut:
        </p>

        <div className="mt-8 grid gap-4">
          <div className="flex items-center gap-2 text-amber-800">
            <Banknote className="h-5 w-5" />
            <span className="font-medium">Atas Nama: Aji Prasetyo &amp; Sari Wulandari</span>
          </div>
          <Copyable label="BCA" value="1234567890" />
          <Copyable label="BNI" value="9876543210" />
          <Copyable label="BRI" value="4567890123" />
        </div>
      </div>
    </section>
  );
}
