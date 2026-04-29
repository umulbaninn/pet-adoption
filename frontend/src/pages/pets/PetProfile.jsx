import { Link, useParams, useNavigate } from "react-router-dom"; // <-- Tambah useNavigate
import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react"; 
import Navbar from "/src/components/layout/Navbar";
import { PawIcon } from "/src/pages/Home";
import LoginModal from "/src/components/modal/LoginModal"; // <-- Import Modal-nya di sini

function MiniPetCard({ pet }) {
    // ... (Isi MiniPetCard tetap sama) ...
    return (
        <Link
          to={`/pets/${pet.id}`}
          className="group block h-[200px] overflow-hidden rounded-[16px] bg-[#f9f3ea] shadow-[0_10px_20px_rgba(203,135,70,0.15)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_30px_rgba(203,135,70,0.25)] md:h-[280px]"
        >
          <article className="relative h-full w-full overflow-hidden">
            <img
              src={pet.image || "/assets/pets/cat1.jpg"}
              alt={pet.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              style={{ objectPosition: "center" }}
            />
            
            <div className="absolute inset-x-0 bottom-0">
              <div className="mx-[-15%] h-5 rounded-t-[100%] bg-[#f9f3ea] md:h-8" />
              
              <div className="bg-[#f9f3ea] px-3 pb-4 text-center md:px-4 md:pb-6">
                <h3 className="truncate text-[13px] font-bold text-[#ffa552] md:text-lg">
                  {pet.name}
                </h3>
                <span className="block truncate text-[10px] text-[#70451b] md:mt-0.5 md:text-[13px]">
                  {pet.breed}
                </span>
              </div>
            </div>
          </article>
        </Link>
      )
}

function PetProfile() {
  const { id } = useParams();
  const navigate = useNavigate(); // <-- Inisialisasi useNavigate
  
  const [petData, setPetData] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // <-- State untuk mengontrol Modal Login
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); 

  useEffect(() => {
    // ... (Logic fetchPetData tetap persis sama) ...
    const fetchPetData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch("http://localhost:8000/api/pets");
        
        if (!response.ok) {
          throw new Error("Gagal mengambil data dari server");
        }
        
        const result = await response.json();
        const allPets = result.data ? result.data : result;

        const currentPet = allPets.find((pet) => String(pet.id) === String(id));
        
        if (!currentPet) {
          throw new Error("Peliharaan tidak ditemukan.");
        }
        
        setPetData(currentPet);

        const sameSpeciesPets = allPets.filter((pet) => {
          if (!pet.species || !currentPet.species) return false;
          
          const petSpecies = pet.species.trim().toLowerCase();
          const targetSpecies = currentPet.species.trim().toLowerCase();
          
          return petSpecies === targetSpecies && String(pet.id) !== String(id);
        });
        
        setRecommendations(sameSpeciesPets.slice(0, 3));

      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPetData();
  }, [id]);

  // Fungsi untuk menangani klik tombol Adopsi
  const handleAdoptClick = () => {
    const token = localStorage.getItem("token"); // Cek token di localStorage
    
    if (token) {
      // Jika sudah login, lanjut ke form adopsi
      navigate("/form");
    } else {
      // Jika belum login, buka modal
      setIsLoginModalOpen(true);
    }
  };

  if (isLoading) {
      // ... (Loading state tetap sama) ...
      return (
        <>
          <Navbar />
          <div className="flex min-h-screen items-center justify-center bg-[#f9f3ea]">
            <p className="text-xl font-bold text-[#ffa552]">Loading Pet Profile...</p>
          </div>
        </>
      );
  }

  if (error || !petData) {
      // ... (Error state tetap sama) ...
      return (
        <>
          <Navbar />
          <div className="flex min-h-screen items-center justify-center bg-[#f9f3ea]">
            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <h2 className="text-2xl font-bold text-red-500">Oops!</h2>
              <p className="mt-2 text-[#70451b]">{error || "Data peliharaan tidak ditemukan."}</p>
              <Link to="/catalog" className="mt-4 inline-block font-bold text-[#ffa552] hover:underline">
                Kembali ke Katalog
              </Link>
            </div>
          </div>
        </>
      );
  }

  const petDetails = [
    ["Species", petData.species],
    ["Breed", petData.breed],
    ["Age", petData.age + " Tahun"], 
    ["Food", petData.food || "Not specified"],
    ["Allergy", petData.allergies || "None"],
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#f9f3ea] px-6 pb-16 pt-32 text-[#70451b]">
        <section className="mx-auto flex w-full max-w-[1000px] flex-col items-center">
          
          <div className="relative h-[220px] w-full max-w-[700px] overflow-hidden rounded-[20px] bg-white shadow-[0_15px_35px_rgba(119,91,62,0.15)] md:h-[320px]">
            <Link 
              to="/catalog" 
              type="button" 
              className="absolute top-4 left-4 z-20 rounded-full bg-[#FFA552]/80 p-2 shadow backdrop-blur-sm hover:bg-[#FFA552] transition"
            >
              <ChevronLeft className="text-[#F9f3EA]" />
            </Link>

            <img
              src={petData.image || "/assets/pets/cat1.jpg"}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-xl"
              style={{ objectPosition: "center" }}
            />
            <img
              src={petData.image || "/assets/pets/cat1.jpg"}
              alt={petData.name}
              className="relative z-10 mx-auto h-full w-auto object-contain"
              style={{ objectPosition: "center" }}
            />
          </div>

          <div className="mt-10 grid w-full gap-8 md:grid-cols-[1fr_300px] md:items-start">
            
            <article className="rounded-[24px] border-2 border-[#ffa552] bg-[#fffaf4] p-6 shadow-[0_12px_30px_rgba(203,135,70,0.12)] md:p-10">
              <div>
                <h1 className="text-2xl font-bold text-[#ffa552] md:text-3xl">
                  About {petData.name}
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-[#70451b] md:text-base">
                  {petData.description || `${petData.name} adalah ${petData.species} yang menggemaskan.`}
                </p>
              </div>

              <div className="my-6 h-px bg-[#f4c498]" />

              <dl className="space-y-4 text-sm md:text-base">
                {petDetails.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[100px_1fr] gap-4 md:grid-cols-[140px_1fr]">
                    <dt className="font-bold text-[#ff8f2d]">{label}</dt>
                    <dd className="font-medium text-[#70451b]">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="my-6 h-px bg-[#f4c498]" />

              <h2 className="text-xl font-bold text-[#ff8f2d]">Adoption Status</h2>
              <p className="mt-2 text-base font-semibold capitalize text-[#70451b]">
                {petData.status || "Available"}
              </p>
            </article>

            <aside className="flex flex-col gap-5">
              {/* TOMBOL ADOPSI DIUBAH DI SINI */}
              <button
                type="button"
                onClick={handleAdoptClick}
                className="w-full rounded-[18px] bg-[#ffa552] py-5 text-xl font-bold text-white shadow-lg hover:bg-[#ff972f] hover:scale-[1.02] active:scale-95 transition-all"
              >
                Adopt Me!
              </button>

              <Link
                to="/facts"
                className="flex min-h-[160px] items-center justify-center rounded-[24px] bg-white p-8 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-lg font-bold leading-snug text-[#ff8f2d] md:text-xl">
                  Klik disini untuk mempelajari fakta menarik tentang {petData.name}!
                </p>
              </Link>
            </aside>
          </div>

          <section className="mt-16 w-full">
            <h2 className="text-center text-xl font-bold text-[#ff8f2d] md:text-2xl">
              {petData.species} lainnya sedang menunggu adopsi!
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8">
              {recommendations.length > 0 ? (
                recommendations.map((pet) => (
                  <MiniPetCard key={pet.id} pet={pet} />
                ))
              ) : (
                <div className="col-span-3 flex items-center justify-center text-[#70451b]">
                  <p>Belum ada rekomendasi lain saat ini.</p>
                </div>
              )}
              
              <Link
                to="/catalog"
                className="flex h-[200px] flex-col overflow-hidden rounded-[12px] bg-gradient-to-b from-[#ff8412] to-[#ffa552] text-white shadow-lg transition-transform hover:-translate-y-1 md:h-[280px]"
              >
                <div className="flex flex-1 flex-col items-center justify-center">
                  <PawIcon />
                  <p className="mt-2 font-bold text-sm text-center">See All <br/>Pets</p>
                </div>
                <div className="bg-black/10 py-2 text-center text-[10px] font-bold uppercase tracking-wider">
                  Meet Them
                </div>
              </Link>
            </div>
          </section>

        </section>

        {/* COMPONENT MODAL DIPANGGIL DI SINI */}
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={() => setIsLoginModalOpen(false)} 
        />
      </main>
    </>
  );
}

export default PetProfile;