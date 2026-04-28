import { Link } from "react-router-dom";
import { Lock, KeyRound, ChevronLeft } from "lucide-react";

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-[30px] bg-[#FFA552] shadow-2xl">
        <div className="grid min-h-[500px] md:grid-cols-2">
          
          {/* Form Section */}
          <div className="flex flex-col justify-center px-8 py-10 sm:px-12 md:px-16">
            <div className="mb-10 flex flex-col items-center text-center">
              <KeyRound className="mb-3 h-10 w-10 text-[#F9F3EA]" strokeWidth={1.8} />
              <h1 className="text-3xl font-bold uppercase tracking-wide text-[#F9F3EA]">
                Reset Password
              </h1>
              <p className="mt-2 text-sm text-[#F9F3EA]/90">
                Silakan buat password baru untuk akunmu.
              </p>
            </div>

            <form className="space-y-8">
              <div className="border-b border-white pb-3">
                <label className="mb-2 flex items-center gap-3 text-[#F9F3EA]">
                  <Lock size={18} />
                  <span>Password Baru</span>
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password baru"
                  className="w-full bg-transparent text-[#F9F3EA] outline-none placeholder:text-gray-300"
                />
              </div>

              <div className="border-b border-white pb-3">
                <label className="mb-2 flex items-center gap-3 text-[#F9F3EA]">
                  <Lock size={18} />
                  <span>Konfirmasi Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Ulangi password baru"
                  className="w-full bg-transparent text-[#F9F3EA] outline-none placeholder:text-gray-300"
                />
              </div>

              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  className="rounded-full bg-[#F9F3EA] px-8 py-3 font-semibold text-[#FFA552] transition hover:opacity-90 w-full sm:w-auto"
                >
                  SIMPAN PASSWORD
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-[#F9F3EA]">
              Sudah ingat passwordmu?{" "}
              <Link to="/login" className="font-semibold text-[#F9F3EA] hover:underline">
                Login di sini
              </Link>
            </p>
          </div>
        
          {/* Image Section */}
          <div className="hidden md:block relative">
            <Link to="/login" className="absolute top-4 left-4 z-10 rounded-full bg-[#FFA552]/40 p-2 shadow hover:bg-black/20 transition">
                <ChevronLeft className="text-[#F9f3EA]" />
            </Link>

            <img
              src="/assets/login-cat.jpg"
              alt="Cats"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;