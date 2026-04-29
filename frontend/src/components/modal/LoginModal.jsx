import { Link } from "react-router-dom";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-[24px] bg-[#f9f3ea] p-8 text-center shadow-2xl transition-all">
        {/* Tombol Close (X) */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-[#c8ae90] hover:text-[#ffa552] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon / Ilustrasi */}
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#ffa552]/20 text-[#ffa552]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" />
          </svg>
        </div>

        <h2 className="mb-2 text-2xl font-bold text-[#ffa552]">Oops! Kamu belum login</h2>
        <p className="mb-8 text-sm text-[#70451b]">
          Untuk mengadopsi hewan lucu ini, kamu harus masuk ke akunmu terlebih dahulu atau daftar jika belum punya akun.
        </p>

        <div className="flex flex-col gap-3">
          <Link to="/login">
            <button className="w-full rounded-full bg-[#ffa552] py-3 font-bold text-white shadow-lg transition hover:bg-[#ff972f] hover:scale-[1.02]">
              Login Sekarang
            </button>
          </Link>
          
          <Link to="/register">
            <button className="w-full rounded-full border-2 border-[#ffa552] bg-transparent py-3 font-bold text-[#ffa552] transition hover:bg-[#ffa552]/10">
              Daftar Akun Baru
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;