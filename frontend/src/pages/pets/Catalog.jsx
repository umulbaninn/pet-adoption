import { ChevronDown, ChevronRight } from "lucide-react";
import Navbar from "/src/components/layout/Navbar";
import { MdPadding } from "react-icons/md";
import { Link } from "react-router-dom";

const speciesOptions = [
  { value: "dog", label: "Anjing" },
  { value: "cat", label: "Kucing" },
];

const ageOptions = [
  { value: "kitten-puppy", label: "Kitten / Puppy (< 1 tahun)" },
  { value: "young", label: "Young (1-3 tahun)" },
  { value: "adult", label: "Adult (3-8 tahun)" },
  { value: "senior", label: "Senior (8 tahun >)" },
];

const foodOptions = [
  { value: "dry-food", label: "Dry Food" },
  { value: "wet-food", label: "Wet Food" },
  { value: "mixed-diet", label: "Mixed Diet" },
];

const allergyOptions = [
  { value: "none", label: "No Allergy" },
  { value: "chicken", label: "Chicken Allergy" },
  { value: "grain", label: "Grain Allergy" },
  { value: "seafood", label: "Seafood Allergy" },
];

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const petCatalog = [
  {
    id: 1,
    name: "Xiao Bai",
    breed: "Persian",
    image: "/assets/pets/cat1.jpg",
    imagePosition: "center 20%",
  },
  {
    id: 2,
    name: "Buddy",
    breed: "Shiba Inu",
    image: "/assets/pets/dawg3.jpg",
    imagePosition: "center 28%",
  },
  {
    id: 3,
    name: "Milo",
    breed: "Labrador Retriever",
    image: "/assets/pets/dawg4.jpg",
    imagePosition: "center 35%",
  },
  {
    id: 4,
    name: "Luna",
    breed: "Domestic Shorthair",
    image: "/assets/pets/cat2.jpg",
    imagePosition: "center 46%",
  },
  {
    id: 5,
    name: "Coco",
    breed: "Beagle",
    image: "/assets/pets/cat3.jpg",
    imagePosition: "center 15%",
  },
  {
    id: 6,
    name: "Oliver",
    breed: "British Shorthair",
    image: "/assets/pets/cat4.jpg",
    imagePosition: "center 62%",
  },
];

const breedOptions = [
  ...new Set(
    [
      "Persian",
      "Golden Retriever",
      "Labrador Retriever",
      "Domestic Shorthair",
      "Beagle",
      "British Shorthair",
      "Poodle",
      "Maine Coon",
      "Shih Tzu",
      "Siamese",
      "Pomeranian",
      "Bengal",
    ].sort((firstBreed, secondBreed) =>
      firstBreed.localeCompare(secondBreed),
    ),
  ),
].map((breed) => ({ value: breed, label: breed }));

function FilterSelect({ label, options }) {
  return (
    <div className="relative">
      <select
        aria-label={label}
        defaultValue="all"
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
          src={pet.image}
          alt={pet.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          style={{ objectPosition: pet.imagePosition }}
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
  return (
    <>
      <Navbar />

      <section className="catalog px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <aside className="w-full lg:max-w-[250px]">
              <div className="flex items-center gap-3">
                <h1 className="text-[1.8rem] font-bold text-[#ffa552]">
                  Fillters
                </h1>
                <button
                  type="button"
                  className="text-sm font-medium text-[#c8ae90] transition hover:text-[#ffa552]"
                >
                  Clear All
                </button>
              </div>

              <div className="mt-5 space-y-4">
                <FilterSelect label="Species" options={speciesOptions} />
                <FilterSelect label="Breed" options={breedOptions} />
                <FilterSelect label="Age" options={ageOptions} />
                <FilterSelect label="Food" options={foodOptions} />
                <FilterSelect label="Allergy" options={allergyOptions} />
                <FilterSelect label="Gender" options={genderOptions} />
              </div>

              {/* <div className="flex items-center gap-3 pt-7">
                <h1 className="text-[1.8rem] font-bold text-[#ffa552]">
                  Fillters
                </h1>
              </div> */}
            </aside>

            <div className="flex-1">
              <h2 className="text-lg font-semibold text-[#4f3216] sm:text-xl">
                Find your Best Friend and Adopt a pets!
              </h2>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search by name or breed"
                    className="w-full rounded-full border border-[#f6bc84] bg-[#fffaf4] py-3 pl-11 pr-4 text-sm text-[#70451b] shadow-[0_10px_20px_rgba(255,165,82,0.12)] outline-none transition placeholder:text-[#d1aa85] focus:border-[#ffa552]"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[#ffa552] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(255,165,82,0.28)] transition hover:bg-[#ff972f]"
                >
                  Search
                </button>
              </div>

              <div className="mt-4 rounded-[28px] border-2 border-[#ffae63] bg-[#fffaf4] p-4 shadow-[0_16px_32px_rgba(205,141,77,0.12)] sm:p-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {petCatalog.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
                <div className="rounded-2xl bg-[#fffaf4] px-6 py-3 text-xl font-medium text-[#3f2b17] shadow-[0_10px_20px_rgba(70,45,18,0.12)]">
                  Page 1/2
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#fffaf4] px-6 py-3 text-xl font-medium text-[#3f2b17] shadow-[0_10px_20px_rgba(70,45,18,0.12)] transition hover:-translate-y-0.5"
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
