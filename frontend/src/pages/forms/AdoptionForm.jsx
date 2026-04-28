import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Phone, MapPin, Heart, CheckCircle } from 'lucide-react';

const AdoptionForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    reason: '',
    paymentProof: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Adopsi Dikirim:', formData);
    setStep(3); // Tampilkan halaman sukses setelah pengiriman
  };

  const renderTopBar = () => {
    let phaseText = '';
    if (step === 1) phaseText = 'Langkah 1';
    else if (step === 2) phaseText = 'Langkah 2';
    else if (step === 3) phaseText = 'Selesai';

    return (
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#70451b]/20 ">
        <h1 className="text-sm  font-medium text-[#70451b]">Checkout Adopsi Hewan</h1>
        <div className="flex space-x-12 text-sm text-[#70451b]">
          <div className='text-sm flex flex-col items-center'>
              <span className='font-light'>HEWAN</span>
              <span className='font-normal'>Snowy</span>
          </div>
          <div className='text-sm flex flex-col items-center'>
              <span className='font-light'>BIAYA</span>
              <span className='font-normal'>Rp 150.000</span>
          </div>
          <div className='text-sm flex flex-col items-center'>
              <span className='font-light'>TAHAP</span>
              <span className='font-normal'>{phaseText}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderFormFields = () => (
    <div className='space-y-6'>
        <div className='text-center space-y-2 mb-8'>
            <p className='text-xs text-[#70451b]'>Langkah 1 dari 2</p>
            <div className="flex justify-center items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ffa522]"></div>
                <div className="w-full h-1 bg-[#eee6cb]"></div>
                <div className="w-3 h-3 rounded-full bg-[#eee6cb]"></div>
            </div>
        </div>

        <div className='space-y-4'>
            <div className='space-y-1.5'>
                <label className="text-sm font-light text-[#70451b]">Nomor WhatsApp</label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center">
                        <Phone className="w-5 h-5 text-[#ffa522]" />
                    </span>
                    <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-12 py-3 rounded-xl border border-[#70451b] bg-[#F9F3EA] focus:ring-1 focus:ring-[#ffa522] focus:border-[#ffa522] text-sm text-[#70451b] placeholder:text-[#70451b]/80 placeholder:font-light outline-none transition"
                        placeholder="0812-XXXX-XXXX"
                        onChange={handleChange}
                    />
                </div>
            </div>
            
            <div className='space-y-1.5'>
                <label className="text-sm font-light text-[#70451b]">Alamat Lengkap</label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center">
                        <MapPin className="w-5 h-5 text-[#ffa522]" />
                    </span>
                    <input
                        type="text"
                        name="address"
                        required
                        className="w-full px-12 py-3 rounded-xl border border-[#70451b] bg-[#F9F3EA] focus:ring-1 focus:ring-[#ffa522] focus:border-[#ffa522] text-sm text-[#70451b] placeholder:text-[#70451b]/80 placeholder:font-light outline-none transition"
                        placeholder="Jl. Melati No. 123..."
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className='space-y-1.5'>
                <label className="text-sm font-light text-[#70451b]">Alasan Mengadopsi</label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center">
                        <Heart className="w-5 h-5 text-[#ffa522]" />
                    </span>
                    <input
                        type="text"
                        name="reason"
                        required
                        className="w-full px-12 py-3 rounded-xl border border-[#70451b] bg-[#F9F3EA] focus:ring-1 focus:ring-[#ffa522] focus:border-[#ffa522] text-sm text-[#70451b] placeholder:text-[#70451b]/80 placeholder:font-light outline-none transition"
                        placeholder="Ingin memberikan rumah..."
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>

        <button
            type="button"
            onClick={handleNext}
            className="w-full mt-10 bg-[#ffa522] hover:bg-[#ff972f] text-white text-sm font-normal py-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98]"
        >
            Selanjutnya ke Pembayaran
        </button>
    </div>
  );

  const renderPaymentFields = () => (
    <div className='space-y-6'>
        <div className='text-center space-y-2 mb-8'>
            <p className='text-xs text-[#70451b]'>Langkah 2 dari 2</p>
            <div className="flex justify-center items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#eee6cb]"></div>
                <div className="w-full h-1 bg-[#eee6cb]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffa552]"></div>
            </div>
        </div>

        <div className='bg-[#F9F3EA] p-6 rounded-xl border border-[#70451b] space-y-1.5 mb-6 text-sm text-[#70451b]'>
            <p className='font-light'>Adopsi: <span className='font-normal'>Snowy</span></p>
            <p className='font-light'>Total Biaya: <span className='font-normal'>Rp 150.000</span></p>
        </div>

        <div className='space-y-3 mb-8'>
            <p className='text-sm text-[#70451b] font-light'>Transfer ke rekening berikut:</p>
            <p className='text-sm text-[#70451b] font-bold'>BCA - 1234567890 a.n Pet Adoption Center</p>
        </div>

        <div className="border-2 border-dashed border-[#70451b] rounded-xl p-6 text-center cursor-pointer text-sm text-[#70451b]">
            Upload Bukti Transfer
        </div>

        <div className='flex space-x-4 mt-10'>
            <button
                type="button"
                onClick={handlePrev}
                className="w-1/2 bg-[#70451b]/20 hover:bg-[#70451b]/30 text-[#f9f3ea] text-sm font-normal py-4 rounded-xl transition"
            >
                Kembali
            </button>
            <button
                type="submit"
                onClick={handleSubmit}
                className="w-1/2 bg-[#ffa552] hover:bg-[#ff972f] text-[#f9f3ea] text-sm font-normal py-4 rounded-xl shadow-lg transition transform active:scale-[0.98]"
            >
                Kirim Pengajuan
            </button>
        </div>
    </div>
  );

  const renderSuccessPage = () => (
    <div className='flex flex-col items-center text-center space-y-6'>
        <div className='w-20 h-20 rounded-full border-2 border-[#ffa552] flex items-center justify-center'>
            <CheckCircle className='w-12 h-12 text-[#ffa552]' />
        </div>

        <h2 className='text-xl font-bold text-[#70451b]'>Terima Kasih!</h2>
        <p className='text-sm text-[#70451b] font-light'>Pengajuan adopsi sedang diproses. <br/> Admin akan menghubungi Anda segera.</p>
        
        <Link to="/catalog"
                type="button"
                className="w-full mt-10 bg-[#ffa552] hover:bg-[#ff972f] text-[#f9f3ea] text-sm font-normal py-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98]"
            >
                Kembali ke Beranda
        </Link>
    </div>
  );

  return (
    <div className="min-h-screen p-6 sm:p-12 lg:p-24">
        {renderTopBar()}

      <div className="mx-auto bg-[#F9F3EA] p-10 rounded-2xl border border-[#70451b] shadow-sm">
        <div className="text-center mb-10">
          <h2 className="text-xl font-bold text-[#ffa522]">Checkout Adopsi</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && renderFormFields()}
          {step === 2 && renderPaymentFields()}
          {step === 3 && renderSuccessPage()}
        </form>
      </div>
      
        <Link to="/pets/1"className="absolute top-4 left-4 z-10 rounded-full bg-[#FFA552]/40 p-2 shadow hover:bg-black/20 transition">
                <ChevronLeft className="text-[#F9f3EA]" />
            </Link>
    </div>
  )
}

export default AdoptionForm;