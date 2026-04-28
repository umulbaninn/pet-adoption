import { Routes, Route } from "react-router-dom";
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
