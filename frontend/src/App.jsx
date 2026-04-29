import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Import SplashScreen
import SplashScreen from "./components/SplashScreen"; 

import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Catalog from "./pages/pets/Catalog";
import PetProfile from "./pages/pets/PetProfile";
import Facts from "./pages/pets/Facts";
import AdoptionForm from "./pages/forms/AdoptionForm";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // 1. Gunakan useLocation untuk mendeteksi perubahan URL/halaman
  const location = useLocation();

  useEffect(() => {
    // 2. Setiap kali location berubah, munculkan loading
    setIsLoading(true);

    // 3. Set timer untuk menghilangkan loading (800ms = 0.8 detik)
    // Angka ini bisa kamu ubah sesuai selera
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); 

    // Bersihkan timer
    return () => clearTimeout(timer);
    
  // 4. Tambahkan location.pathname ke dalam dependency array [ ]
  // Ini artinya: "Jalankan ulang useEffect ini setiap kali path URL berubah"
  }, [location.pathname]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/pets/:id" element={<PetProfile />} />
      <Route path="/facts" element={<Facts />} />
      <Route path="/form" element={<AdoptionForm />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/reset" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;