import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaRegUser, 
  FaCog, 
  FaLock, 
  FaRegBell, 
  FaRegQuestionCircle, 
  FaMoon, 
  FaRocket, 
  FaSignOutAlt
} from "react-icons/fa";

// 1. Terima props { user } dari Navbar
const AvatarDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Menutup dropdown jika user klik di luar area dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fungsi Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Hapus juga user dari storage
    setIsOpen(false);
    navigate("/"); 
    window.location.reload(); 
  };

  // 2. Jika props user belum masuk, jangan render dulu
  if (!user) return null;

  // 3. Akal-akalan tabel login: Ambil nama dari potongan email
  const displayName = user.email ? user.email.split('@')[0] : "User";
  const avatarUrl = `https://ui-avatars.com/api/?name=${displayName}&background=F9F3EA&color=FFA552`;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-full border-2 border-transparent transition-all hover:border-[#FFA552] focus:outline-none"
      >
        <img
          src={avatarUrl}
          alt="User avatar"
          className="h-10 w-10 rounded-full object-cover"
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-3 w-64 rounded-xl border border-gray-700 bg-[#1f2937] shadow-lg transition-all duration-200 ${
          isOpen ? "translate-y-0 opacity-100 visible" : "translate-y-2 opacity-0 invisible"
        } z-50`}
      >
        {/* Header: User Info */}
        <div className="flex items-center gap-3 border-b border-gray-700 p-4 bg-[#374151] rounded-t-xl">
          <img
            src={avatarUrl}
            alt="User avatar"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-bold text-white capitalize">{displayName}</p>
            <p className="truncate text-xs text-gray-400">{user.email}</p>
          </div>
          
          <span className="rounded bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold text-orange-400 tracking-wide border border-orange-500/50">
            MEMBER
          </span>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col py-2 text-sm text-gray-300">
          <Link to="/account" className="flex items-center gap-3 px-4 py-2.5 transition hover:bg-gray-700 hover:text-white">
            <FaRegUser className="text-gray-400 text-base" /> Account
          </Link>
          <Link to="/settings" className="flex items-center gap-3 px-4 py-2.5 transition hover:bg-gray-700 hover:text-white">
            <FaCog className="text-gray-400 text-base" /> Settings
          </Link>
          <Link to="/privacy" className="flex items-center gap-3 px-4 py-2.5 transition hover:bg-gray-700 hover:text-white">
            <FaLock className="text-gray-400 text-base" /> Privacy
          </Link>
          <Link to="/notifications" className="flex items-center gap-3 px-4 py-2.5 transition hover:bg-gray-700 hover:text-white">
            <FaRegBell className="text-gray-400 text-base" /> Notifications
          </Link>

          <div className="my-1 border-t border-gray-700"></div>

          <Link to="/help" className="flex items-center gap-3 px-4 py-2.5 transition hover:bg-gray-700 hover:text-white">
            <FaRegQuestionCircle className="text-gray-400 text-base" /> Help center
          </Link>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex w-full items-center justify-between px-4 py-2.5 transition hover:bg-gray-700 hover:text-white focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <FaMoon className="text-gray-400 text-base" /> Dark mode
            </div>
            <div className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${isDarkMode ? 'bg-blue-600' : 'bg-gray-500'}`}>
              <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-4.5' : 'translate-x-1'}`} />
            </div>
          </button>

          <div className="my-1 border-t border-gray-700"></div>

          <Link to="/upgrade" className="flex items-center gap-3 px-4 py-2.5 transition hover:bg-gray-700 hover:text-white">
            <FaRocket className="text-gray-400 text-base" /> Upgrade to PRO
          </Link>

          {/* Sign Out Action */}
          <button 
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-2.5 font-medium text-red-400 transition hover:bg-gray-700 hover:text-red-300 focus:outline-none"
          >
            <FaSignOutAlt className="text-red-400 text-base" /> Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarDropdown;