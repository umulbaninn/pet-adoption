import Navbar from "../components/layout/Navbar";
import { useState } from "react";
import { Heart, WalletCards, Info } from "lucide-react";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = [
    { value: 50000, label: "Rp 50.000", impact: "Makan 1 minggu" },
    { value: 100000, label: "Rp 100.000", impact: "Vaksinasi dasar" },
    { value: 250000, label: "Rp 250.000", impact: "Biaya steril" },
  ];

  return (
    <>
      <Navbar />
        <div className="min-h-screen bg-[#F9F3EA] px-4 py-12 text-[#70451b]">
            <div className="mx-auto max-w-5xl">
            
            <div className="mb-12 text-center">
            <img src="/assets/logo2.png" alt="Hewan lucu menatap" className="mx-auto mb-4 h-16" />
            <h1 className="mb-4 text-4xl font-bold uppercase tracking-wide">
                Beri Mereka Harapan
            </h1>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
                Setiap donasi yang kamu berikan akan langsung digunakan untuk makanan, 
                perawatan medis, dan fasilitas tempat tinggal sementara bagi hewan-hewan 
                yang sedang menunggu keluarga baru.
            </p>
            </div>

            <div className="grid gap-8 md:grid-cols-5">
            
            <div className="flex flex-col justify-center space-y-6 md:col-span-2">
                <img 
                src="/assets/donate-img2.jpg" 
                alt="Hewan diselamatkan" 
                className="h-64 w-full rounded-[30px] object-cover shadow-lg"

                />
                <div className="rounded-[20px] bg-[#FFA552]/10 p-6">
                <h3 className="mb-3 flex items-center gap-2 font-bold text-[#FFA552]">
                    <Info size={20} /> Ke Mana Donasimu Pergi?
                </h3>
                <ul className="space-y-2 text-sm">
                    <li>🐾 40% - Makanan & Nutrisi harian</li>
                    <li>💉 35% - Perawatan medis & Vaksinasi</li>
                    <li>🏡 25% - Pemeliharaan & Operasional Shelter</li>
                </ul>
                </div>
            </div>

            <div className="rounded-[30px] bg-white p-8 shadow-xl md:col-span-3 border border-[#FFA552]/20">
                <h2 className="mb-6 text-2xl font-bold text-[#FFA552]">Pilih Nominal Donasi</h2>
                
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {presetAmounts.map((item) => (
                    <button
                    key={item.value}
                    onClick={() => {
                        setAmount(item.value);
                        setCustomAmount("");
                    }}
                    className={`flex flex-col items-center justify-center rounded-2xl border-2 p-4 transition-all ${
                        amount === item.value
                        ? "border-[#FFA552] bg-[#FFA552] text-[#F9F3EA]"
                        : "border-[#FFA552]/30 bg-transparent text-[#70451b] hover:border-[#FFA552]"
                    }`}
                    >
                    <span className="font-bold">{item.label}</span>
                    <span className="text-xs opacity-80 mt-1">{item.impact}</span>
                    </button>
                ))}
                </div>

                <div className="mb-8">
                <label className="mb-2 block text-sm font-semibold">Atau masukkan nominal lain:</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-[#70451b]/50">Rp</span>
                    <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount(""); // Reset preset amount
                    }}
                    placeholder="10000"
                    className="w-full rounded-2xl border-2 border-[#FFA552]/30 bg-[#F9F3EA] px-12 py-3 text-[#70451b] outline-none transition focus:border-[#FFA552]"
                    />
                </div>
                </div>

                <div className="mb-8">
                <label className="mb-2 block text-sm font-semibold">Metode Pembayaran</label>
                <div className="flex items-center gap-3 rounded-2xl border-2 border-[#FFA552]/30 bg-[#F9F3EA] p-3 text-[#70451b]">
                    <WalletCards size={20} className="text-[#FFA552]" />
                    <select className="w-full bg-transparent outline-none">
                    <option value="bca">Transfer Bank BCA</option>
                    <option value="mandiri">Transfer Bank Mandiri</option>
                    </select>
                </div>
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FFA552] py-4 font-bold tracking-wide text-[#F9F3EA] transition-all hover:bg-[#70451b]">
                <Heart size={20} fill="currentColor" />
                DONASI SEKARANG
                </button>
            </div>

            </div>
        </div>
        </div>
    </>
  );
};

export default Donate;