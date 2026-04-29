import { Link, useNavigate, useLocation } from "react-router-dom";
import { Lock, KeyRound, ChevronLeft, Hash } from "lucide-react";
import { useState } from "react";

const ResetPassword = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ""; // Mengambil email yang dikirim dari ForgotPassword

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== passwordConfirmation) {
      setError("Password dan Konfirmasi Password tidak cocok.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ 
          email, 
          otp, 
          password, 
          password_confirmation: passwordConfirmation 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Gagal reset password.");
      }

      setMessage("Password berhasil direset! Silakan login.");
      setTimeout(() => navigate("/login"), 2000);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

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
                Silakan masukkan kode OTP yang dikirim ke email {email && <span className="font-bold">{email}</span>} dan buat password baru.
              </p>
            </div>

            {error && <p className="mb-4 text-sm text-red-500 text-center bg-white/20 p-2 rounded">{error}</p>}
            {message && <p className="mb-4 text-sm text-green-500 text-center bg-white/20 p-2 rounded">{message}</p>}

            <form onSubmit={handleResetPassword} className="space-y-6">
              
              <div className="border-b border-white pb-3">
                <label className="mb-2 flex items-center gap-3 text-[#F9F3EA]">
                  <Hash size={18} />
                  <span>Kode OTP</span>
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  placeholder="Masukkan 6 digit OTP"
                  className="w-full bg-transparent text-[#F9F3EA] outline-none placeholder:text-gray-300"
                />
              </div>

              <div className="border-b border-white pb-3">
                <label className="mb-2 flex items-center gap-3 text-[#F9F3EA]">
                  <Lock size={18} />
                  <span>Password Baru</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                  placeholder="Ulangi password baru"
                  className="w-full bg-transparent text-[#F9F3EA] outline-none placeholder:text-gray-300"
                />
              </div>

              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-full bg-[#F9F3EA] px-8 py-3 font-semibold text-[#FFA552] transition hover:opacity-90 w-full sm:w-auto disabled:opacity-70"
                >
                  {isLoading ? "MENYIMPAN..." : "SIMPAN PASSWORD"}
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
              src="/assets/auth1.jpg"
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