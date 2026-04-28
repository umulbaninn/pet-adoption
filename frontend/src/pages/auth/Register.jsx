import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, UserCircle2, ChevronLeft } from "lucide-react";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  // State untuk form register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
  // State untuk status loading dan error
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Validasi dasar di sisi frontend
    if (password !== passwordConfirmation) {
      setError("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    setIsLoading(true);

    try {
      // Sesuaikan URL dengan endpoint API Laravel kamu
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          password_confirmation: passwordConfirmation, // Format bawaan Laravel
          role: "user", // Opsional: kirim role default jika diperlukan oleh API
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Menangani pesan error validasi dari Laravel
        if (data.errors) {
          // Mengambil pesan error pertama dari object errors
          const firstError = Object.values(data.errors)[0][0];
          throw new Error(firstError);
        }
        throw new Error(data.message || "Registrasi gagal, silakan coba lagi.");
      }

      // Jika registrasi sukses (biasanya API mengembalikan token atau sekadar pesan sukses)
      // Opsi 1: Langsung redirect ke halaman login
      navigate("/login"); 
      
      // Opsi 2: Jika API langsung mengembalikan token, bisa langsung login
      // localStorage.setItem("token", data.token);
      // navigate("/");

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-[30px] bg-[#FFA552] shadow-2xl">
        <div className="grid min-h-[500px] md:grid-cols-2">

          <div className="hidden md:block relative">
            <Link to="/" className="absolute top-4 left-4 z-10 rounded-full bg-[#FFA552]/40 p-2 shadow hover:bg-black/20 transition">
                <ChevronLeft className="text-[#F9f3EA]" />
            </Link>

            <img
              src="/assets/register.jpg"
              alt="Dog and Cat"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-10 sm:px-12 md:px-16">
            <div className="mb-10 flex flex-col items-center text-center">
              <UserCircle2 className="mb-3 h-10 w-10 text-[#F9F3EA]" strokeWidth={1.8} />
              <h1 className="text-3xl font-bold uppercase tracking-wide text-[#F9F3EA]">
                Sign Up
              </h1>
            </div>

            {/* Tampilkan pesan error jika ada */}
            {error && (
              <div className="mb-6 rounded-md bg-red-500/20 p-3 text-sm text-white text-center border border-red-500/50">
                {error}
              </div>
            )}

            <form className="space-y-8" onSubmit={handleRegister}>

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

              <div className="border-b border-white pb-3">
                <label className="mb-2 flex items-center gap-3 text-[#F9F3EA]">
                  <Lock size={18} />
                  <span>Confirm Password</span>
                </label>
                <input
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                  placeholder="Ulangi password"
                  className="w-full bg-transparent text-[#F9F3EA] outline-none placeholder:text-gray-300"
                />
              </div>

              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-full bg-[#F9F3EA] px-8 py-3 font-semibold text-[#FFA552] transition hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "LOADING..." : "SIGN UP"}
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-[#F9F3EA]">
              Sudah punya akun?{" "}
              <Link to="/login" className="font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;