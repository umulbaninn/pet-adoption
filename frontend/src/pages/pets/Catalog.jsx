import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import Navbar from "/src/components/layout/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const speciesOptions = [
  { value: "cat", label: "Kucing" },
  { value: "dog", label: "Anjing" },
];

const ageOptions = [
  { value: "kitten-puppy", label: "Kitten / Puppy (< 1 tahun)" },
  { value: "young", label: "Young (1-3 tahun)" },
  { value: "adult", label: "Adult (3-8 tahun)" },
  { value: "senior", label: "Senior (> 8 tahun)" },
];

const foodOptions = [
  { value: "Dry Kibble", label: "Dry Kibble" },
  { value: "Wet Food", label: "Wet Food" },
  { value: "Canned Food", label: "Canned Food" },
  { value: "Raw Meat Diet", label: "Raw Meat Diet" },
];

// Mengubah FilterSelect menjadi Controlled Component
function FilterSelect({ label, options, value, onChange }) {
  return (
    <div className="relative">
      <select
        aria-label={label}
        value={value}
        onChange={onChange}
        className="w-full appearance-none rounded-full border border-[#ffa552] bg-[#f9f3ea] px-5 py-3 text-base font-medium text-[#ffa552] shadow-[0_10px_20px_rgba(255,165,82,0.3)] outline-none transition focus:border-[#f9f3ea]"
      >
        <option value="all">{label}</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-[#ffa552]"
          >
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#ffa522]"
      />
    </div>
  );
}

function PetCard({ pet }) {
  return (
    <Link to={`/pets/${pet.id}`}>
      <article className="group mx-auto w-full max-w-[220px] overflow-hidden rounded-[18px] bg-white shadow-[0_14px_28px_rgba(203,135,70,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(203,135,70,0.22)]">
        <div className="relative h-[290px]">
          <img
            src={pet.image || "/assets/pets/cat1.jpg"}
            alt={pet.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            style={{ objectPosition: "center" }}
          />

          <div className="absolute inset-x-0 bottom-0 h-[30px] bg-[#f9f3ea]">
            <div className="absolute -top-14 left-1/2 h-28 w-[135%] -translate-x-1/2 rounded-[55%] bg-white" />
            <div className="relative z-10 flex h-full items-end justify-center px-4 pb-6 text-center">
              <h2 className="text-[1.05rem] flex flex-col font-semibold text-[#ffa552]">
                {pet.name}
                <span className="text-sm font-normal text-[#70451b]">
                  {pet.breed}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function Catalog() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State untuk Filter & Pencarian
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    species: "all",
    breed: "all",
    age: "all",
    food: "all",
    allergies: "all",
  });

  // State untuk Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Opsi Dinamis berdasarkan data API
  const [dynamicBreeds, setDynamicBreeds] = useState([]);
  const [dynamicAllergies, setDynamicAllergies] = useState([]);

  // 1. Fetch Data API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/pets");
        const result = await response.json();
        const data = result.data ? result.data : result;
        
        setPets(data);
        setFilteredPets(data);

        // Ekstrak data unik untuk dropdown Breed dan Allergy dari API
        const breeds = [...new Set(data.map((p) => p.breed))].sort();
        setDynamicBreeds(breeds.map((b) => ({ value: b, label: b })));

        const allergies = [...new Set(data.map((p) => p.allergies))].sort();
        setDynamicAllergies(allergies.map((a) => ({ value: a, label: a })));

      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPets();
  }, []);

  // 2. Fungsi Menerapkan Filter & Search
  useEffect(() => {
    let result = pets;

    // Filter Pencarian Text
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (pet) =>
          pet.name.toLowerCase().includes(query) ||
          pet.breed.toLowerCase().includes(query)
      );
    }

    // Filter Dropdown
    if (filters.species !== "all") {
      result = result.filter((pet) => pet.species.toLowerCase() === filters.species.toLowerCase());
    }
    if (filters.breed !== "all") {
      result = result.filter((pet) => pet.breed === filters.breed);
    }
    if (filters.food !== "all") {
      result = result.filter((pet) => pet.food === filters.food);
    }
    if (filters.allergies !== "all") {
      result = result.filter((pet) => pet.allergies === filters.allergies);
    }

    // Filter Umur (Logika Custom)
    if (filters.age !== "all") {
      result = result.filter((pet) => {
        const age = parseInt(pet.age) || 0;
        if (filters.age === "kitten-puppy") return age < 1;
        if (filters.age === "young") return age >= 1 && age <= 3;
        if (filters.age === "adult") return age > 3 && age <= 8;
        if (filters.age === "senior") return age > 8;
        return true;
      });
    }

    setFilteredPets(result);
    setCurrentPage(1); // Reset ke halaman pertama setiap kali filter diubah
  }, [pets, filters, searchQuery]);

  // Handle Perubahan Dropdown Filter
  const handleFilterChange = (e, filterName) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: e.target.value,
    }));
  };

  // Handle Tombol Clear All
  const clearFilters = () => {
    setSearchQuery("");
    setFilters({
      species: "all",
      breed: "all",
      age: "all",
      food: "all",
      allergies: "all",
    });
  };

  // Hitung Data Pagination
  const totalPages = Math.ceil(filteredPets.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPetsToDisplay = filteredPets.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Navbar />

      <section className="catalog px-4 pb-12 pt-24 sm:px-6 lg:px-8 bg-[#F9F3EA] min-h-screen">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start mx-auto max-w-7xl">
          
          {/* SIDEBAR FILTER */}
          <aside className="w-full lg:max-w-[250px] bg-white p-5 rounded-2xl shadow-[0_10px_30px_rgba(203,135,70,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-[1.8rem] font-bold text-[#ffa552]">
                Filters
              </h1>
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-medium text-[#c8ae90] transition hover:text-[#ffa552]"
              >
                Clear All
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <FilterSelect 
                label="Species" 
                options={speciesOptions} 
                value={filters.species}
                onChange={(e) => handleFilterChange(e, "species")} 
              />
              <FilterSelect 
                label="Breed" 
                options={dynamicBreeds} 
                value={filters.breed}
                onChange={(e) => handleFilterChange(e, "breed")} 
              />
              <FilterSelect 
                label="Age" 
                options={ageOptions} 
                value={filters.age}
                onChange={(e) => handleFilterChange(e, "age")} 
              />
              <FilterSelect 
                label="Food" 
                options={foodOptions} 
                value={filters.food}
                onChange={(e) => handleFilterChange(e, "food")} 
              />
              <FilterSelect 
                label="Allergy" 
                options={dynamicAllergies} 
                value={filters.allergies}
                onChange={(e) => handleFilterChange(e, "allergies")} 
              />
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-[#4f3216] sm:text-xl">
              Find your Best Friend and Adopt a pet!
            </h2>

            {/* SEARCH BAR */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name or breed"
                  className="w-full rounded-full border border-[#f6bc84] bg-[#fffaf4] py-3 pl-6 pr-4 text-sm text-[#70451b] shadow-[0_10px_20px_rgba(255,165,82,0.12)] outline-none transition placeholder:text-[#d1aa85] focus:border-[#ffa552]"
                />
              </div>
            </div>

            {/* GRID KATALOG */}
            <div className="mt-4 rounded-[28px] border-2 border-[#ffae63] bg-[#fffaf4] p-4 shadow-[0_16px_32px_rgba(205,141,77,0.12)] sm:p-5">
              {isLoading ? (
                <div className="flex justify-center py-20">
                  <p className="text-lg font-medium text-[#70451B]">Memuat data...</p>
                </div>
              ) : currentPetsToDisplay.length === 0 ? (
                <div className="flex justify-center py-20">
                  <p className="text-lg font-medium text-[#70451B]">Tidak ada peliharaan yang cocok dengan filter.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {currentPetsToDisplay.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                  ))}
                </div>
              )}
            </div>

            {/* PAGINATION BUTTONS */}
            <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
              
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#fffaf4] px-5 py-3 text-lg font-medium text-[#3f2b17] shadow-[0_10px_20px_rgba(70,45,18,0.12)] transition hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                <ChevronLeft className="h-5 w-5" />
                Prev
              </button>

              <div className="rounded-2xl bg-[#fffaf4] px-6 py-3 text-lg font-medium text-[#3f2b17] shadow-[0_10px_20px_rgba(70,45,18,0.12)]">
                Page {currentPage} / {totalPages}
              </div>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#fffaf4] px-5 py-3 text-lg font-medium text-[#3f2b17] shadow-[0_10px_20px_rgba(70,45,18,0.12)] transition hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                Next
                <ChevronRight className="h-5 w-5" />
              </button>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;