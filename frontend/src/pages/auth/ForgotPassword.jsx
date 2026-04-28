import { Link } from "react-router-dom";

const ForgotPassword = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/90 transition-opacity" 
        onClick={onClose}
      ></div>

      <div className="relative bg-[#f9f3ea] rounded-2xl shadow-xl w-full max-w-md p-8 transform transition-all">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#FFA552]">Lupa Password?</h2>
          <p className="text-[#c8ae90] text-sm mt-2">
            Masukkan email kamu dan kami akan kirimkan instruksi reset password.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="nama@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <Link to="/reset">
            <button 
              className="w-full bg-[#FFA552] hover:bg-[#FFA552]/80 text-[#F9F3EA] font-semibold py-3 rounded-lg transition duration-200"
            >
              Kirim Link Reset
            </button>
          </Link>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={onClose}
            className="text-sm text-[#c8ae90] hover:text-[#FFA552] transition"
          >
            Kembali ke Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword