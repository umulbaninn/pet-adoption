import { Link, useParams } from "react-router-dom";
import Navbar from "/src/components/layout/Navbar";
import { PawIcon } from "/src/pages/Home";

const petProfiles = [
  {
    id: 1,
    slug: "xiao-bai",
    name: "Xiao Bai",
    about: "Xiao bai adalah kucing yang berasal dari china",
    breed: "Domestic Short Hair",
    age: "Adult (3-8 years)",
    food: "Whiskas",
    gender: "Male",
    allergy: "None",
    adoptionFee: "Please for contact us for Adoption fee",
    image: "/assets/pets/cat1.jpg",
    imagePosition: "center 20%",
  },
  {
    id: 2,
    slug: "buddy",
    name: "Buddy",
    about: "Buddy adalah anjing ramah yang suka bermain di luar rumah",
    breed: "Shiba Inu",
    age: "Young (1-3 years)",
    food: "Dry Food",
    gender: "Male",
    allergy: "None",
    adoptionFee: "Please for contact us for Adoption fee",
    image: "/assets/pets/dawg3.jpg",
    imagePosition: "center 28%",
  },
  {
    id: 3,
    slug: "milo",
    name: "Milo",
    about: "Milo adalah anjing aktif yang cocok untuk keluarga",
    breed: "Labrador Retriever",
    age: "Adult (3-8 years)",
    food: "Mixed Diet",
    gender: "Male",
    allergy: "None",
    adoptionFee: "Please for contact us for Adoption fee",
    image: "/assets/pets/dawg4.jpg",
    imagePosition: "center 35%",
  },
  {
    id: 4,
    slug: "luna",
    name: "Luna",
    about: "Luna adalah kucing lembut yang cocok untuk rumah yang tenang",
    breed: "Domestic Shorthair",
    age: "Adult (3-8 years)",
    food: "Mixed Diet",
    gender: "Female",
    allergy: "None",
    adoptionFee: "Please for contact us for Adoption fee",
    image: "/assets/pets/cat2.jpg",
    imagePosition: "center 46%",
  },
  {
    id: 5,
    slug: "coco",
    name: "Coco",
    about: "Coco adalah kucing penasaran yang senang diajak bermain",
    breed: "Beagle",
    age: "Young (1-3 years)",
    food: "Whiskas",
    gender: "Female",
    allergy: "None",
    adoptionFee: "Please for contact us for Adoption fee",
    image: "/assets/pets/cat3.jpg",
    imagePosition: "center 15%",
  },
  {
    id: 6,
    slug: "oliver",
    name: "Oliver",
    about: "Oliver adalah kucing manis yang mudah beradaptasi",
    breed: "British Shorthair",
    age: "Adult (3-8 years)",
    food: "Dry Food",
    gender: "Male",
    allergy: "None",
    adoptionFee: "Please for contact us for Adoption fee",
    image: "/assets/pets/cat4.jpg",
    imagePosition: "center 62%",
  },
  {
    id: "tengcat",
    slug: "tengcat",
    name: "Tengcat",
    about: "Tengcat adalah kucing tenang yang suka tempat hangat",
    breed: "Persian",
    age: "Young (1-3 years)",
    food: "Dry Food",
    gender: "Male",
    allergy: "None",
    adoptionFee: "Please for contact us for Adoption fee",
    image: "/assets/pets/silly cat.jpg",
    imagePosition: "center",
  },
  {
    id: "wlee",
    slug: "wlee",
    name: "Wlee",
    about: "Wlee adalah kucing aktif yang mudah akrab dengan orang baru",
    breed: "Domestic Shorthair",
    age: "Young (1-3 years)",
    food: "Wet Food",
    gender: "Female",
    allergy: "None",
    adoptionFee: "Please for contact us for Adoption fee",
    image: "/assets/pets/cat2.jpg",
    imagePosition: "center 46%",
  },
];

const moreCats = [
  petProfiles[0],
  petProfiles[6],
  petProfiles[7],
];

function MiniPetCard({ pet }) {
  return (
    <Link
      to={`/pets/${pet.id}`}
      className="group block h-[200px] overflow-hidden rounded-[16px] bg-[#f9f3ea] shadow-[0_10px_20px_rgba(203,135,70,0.15)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_30px_rgba(203,135,70,0.25)] md:h-[280px]"
    >
      <article className="relative h-full w-full overflow-hidden">
        <img
          src={pet.image}
          alt={pet.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          style={{ objectPosition: pet.imagePosition }}
        />
        
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-[-15%] h-5 rounded-t-[100%] bg-[#f9f3ea] md:h-8" />
          
          <div className="bg-[#f9f3ea] px-3 pb-4 text-center md:px-4 md:pb-6">
            <h3 className="truncate text-[13px] font-bold text-[#ffa552] md:text-lg">
              {pet.name}
            </h3>
            {/* Styling untuk breed agar lebih rapi dan ukurannya pas */}
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
  const petData =
    petProfiles.find((pet) => String(pet.id) === id || pet.slug === id) ??
    petProfiles[0];

  const petDetails = [
    ["Breed", petData.breed],
    ["Age", petData.age],
    ["Food", petData.food],
    ["Gender", petData.gender],
    ["Allergy", petData.allergy],
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f9f3ea] px-6 pb-16 pt-8 text-[#70451b]">
        <section className="mx-auto flex w-full max-w-[1000px] flex-col items-center">
          
          {/* Header Image Section */}
          <div className="relative h-[220px] w-full max-w-[700px] overflow-hidden rounded-[20px] bg-white shadow-[0_15px_35px_rgba(119,91,62,0.15)] md:h-[320px]">
            <img
              src={petData.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-xl"
              style={{ objectPosition: petData.imagePosition }}
            />
            <img
              src={petData.image}
              alt={petData.name}
              className="relative z-10 mx-auto h-full w-auto object-contain"
              style={{ objectPosition: petData.imagePosition }}
            />
          </div>

          {/* Grid Layout: Detail vs Action Buttons */}
          <div className="mt-10 grid w-full gap-8 md:grid-cols-[1fr_300px] md:items-start">
            
            {/* Box Info Kiri (About) */}
            <article className="rounded-[24px] border-2 border-[#ffa552] bg-[#fffaf4] p-6 shadow-[0_12px_30px_rgba(203,135,70,0.12)] md:p-10">
              <div>
                <h1 className="text-2xl font-bold text-[#ffa552] md:text-3xl">
                  About {petData.name}
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-[#70451b] md:text-base">
                  {petData.about}
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

              <h2 className="text-xl font-bold text-[#ff8f2d]">Adoption fee</h2>
              <p className="mt-2 text-base font-semibold text-[#70451b]">
                {petData.adoptionFee}
              </p>
            </article>

            <aside className="flex flex-col gap-5">
              <Link to="/form">
              <button
                type="button"
                className="w-full rounded-[18px] bg-[#ffa552] py-5 text-xl font-bold text-white shadow-lg hover:bg-[#ff972f] hover:scale-[1.02] active:scale-95"
              >
                Adopt Me
              </button>
              </Link>

              <Link
                to="/facts"
                className="flex min-h-[160px] items-center justify-center rounded-[24px] bg-white p-8 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-lg font-bold leading-snug text-[#ff8f2d] md:text-xl">
                  Click Here for Learn more about pets before adopt
                </p>
              </Link>
            </aside>
          </div>

          {/* Section Rekomendasi di Bawah */}
          <section className="mt-16 w-full">
            <h2 className="text-center text-xl font-bold text-[#ff8f2d] md:text-2xl">
              More Cats from all kind Animal initiative
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8">
              {moreCats.map((pet) => (
                <MiniPetCard key={pet.slug} pet={pet} />
              ))}
              
              <Link
                to="/catalog"
                className="flex h-[200px] flex-col overflow-hidden rounded-[12px] bg-gradient-to-b from-[#ff8412] to-[#ffa552] text-white shadow-lg transition-transform hover:-translate-y-1 md:h-[280px]"
              >
                <div className="flex flex-1 flex-col items-center justify-center">
                  <PawIcon />
                  <p className="font-bold">More Pets</p>
                </div>
                <div className="bg-black/10 py-2 text-center text-[10px] font-bold uppercase tracking-wider">
                  Meet Them
                </div>
              </Link>
            </div>
          </section>

        </section>
      </main>
    </>
  );
}

export default PetProfile;
