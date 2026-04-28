import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, UserCircle2, ChevronLeft } from "lucide-react";
import ForgotPassword from "/src/pages/auth/ForgotPassword";
import { useState } from "react";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State untuk form login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setIsLoading(true);
    setError("");

    try {
      // Pastikan URL dan Port sesuai dengan server Laravel kamu (biasanya localhost:8000)
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Menangkap error dari API (misal: 401 Unauthorized atau validasi gagal)
        throw new Error(data.message || "Login gagal. Periksa email dan password Anda.");
      }

      // Jika sukses, simpan token ke localStorage (sesuaikan nama 'token' dengan response API kamu)
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      
      // Opsional: simpan data user
      // localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect ke halaman utama/dashboard setelah berhasil login
      navigate("/");
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-[30px] bg-[#FFA552] shadow-2xl">
        <div className="grid min-h-[500px] md:grid-cols-2">
          
          <div className="flex flex-col justify-center px-8 py-10 sm:px-12 md:px-16">
            <div className="mb-10 flex flex-col items-center text-center">
              <UserCircle2 className="mb-3 h-10 w-10 text-[#F9F3EA]" strokeWidth={1.8} />
              <h1 className="text-3xl font-bold uppercase tracking-wide text-[#F9F3EA]">
                Sign In
              </h1>
            </div>

            {/* Menampilkan pesan error jika ada */}
            {error && (
              <div className="mb-6 rounded-md bg-red-500/20 p-3 text-sm text-white text-center border border-red-500/50">
                {error}
              </div>
            )}

            {/* Menambahkan onSubmit ke form */}
            <form className="space-y-8" onSubmit={handleLogin}>
              <div className="border-b border-white pb-3">
                <label className="mb-2 flex items-center gap-3 text-[#F9F3EA]">
                  <Mail size={18} />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Masukkan email"
                  className="w-full bg-transparent text-[#F9F3EA] outline-none placeholder:text-gray-300"
                />
              </div>

              <div className="border-b border-white pb-3">
                <label className="mb-2 flex items-center gap-3 text-[#F9F3EA]">
                  <Lock size={18} />
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Masukkan password"
                  className="w-full bg-transparent text-[#F9F3EA] outline-none placeholder:text-gray-300"
                />
              </div>

              <div className="text-left">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(true)} 
                  className="text-sm text-[#F9F3EA] hover:underline"
                >
                  Forgot password?
                </button>

                <ForgotPassword isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              </div>

              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-full bg-[#F9F3EA] px-8 py-3 font-semibold text-[#FFA552] transition hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "LOADING..." : "SIGN IN"}
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-[#F9F3EA]">
              Belum punya akun?{" "}
              <Link to="/register" className="font-semibold text-[#F9F3EA] hover:underline">
                Daftar
              </Link>
            </p>
          </div>
        
          <div className="hidden md:block relative">
            <Link to="/" className="absolute top-4 left-4 z-10 rounded-full bg-[#FFA552]/40 p-2 shadow hover:bg-black/20 transition">
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

export default Login;