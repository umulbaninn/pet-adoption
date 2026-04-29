import Navbar from "/src/components/layout/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function PawIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M25.53 35.93c-5.23 4.1-8.73 9.03-7.3 13.37 1.88 5.66 10.23 5.34 13.77 1.75 3.54 3.59 11.89 3.91 13.77-1.75 1.43-4.34-2.07-9.27-7.3-13.37-3.03-2.38-7.6-2.38-10.94 0Z" />
      <path d="M18.22 24.36c2.88 0 5.21-3.22 5.21-7.2s-2.33-7.2-5.21-7.2-5.21 3.22-5.21 7.2 2.33 7.2 5.21 7.2Z" />
      <path d="M30.1 18.16c2.88 0 5.21-3.22 5.21-7.2s-2.33-7.2-5.21-7.2-5.21 3.22-5.21 7.2 2.33 7.2 5.21 7.2Z" />
      <path d="M45.78 24.36c2.88 0 5.21-3.22 5.21-7.2s-2.33-7.2-5.21-7.2-5.21 3.22-5.21 7.2 2.33 7.2 5.21 7.2Z" />
      <path d="M54.71 36.07c2.56 0 4.64-2.86 4.64-6.39s-2.08-6.39-4.64-6.39-4.64 2.86-4.64 6.39 2.08 6.39 4.64 6.39Z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.75 10.5 12 3.75l8.25 6.75" />
      <path d="M6.75 9.75v9a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5v-9" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15.46v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 1.12 2.72 2 2 0 0 1 3.11.54h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.61a2 2 0 0 1-.45 2.11L7 8.61a16 16 0 0 0 6.39 6.39l1.63-1.29a2 2 0 0 1 2.11-.45c.85.3 1.72.51 2.61.63A2 2 0 0 1 21 15.46Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5.25" width="18" height="13.5" rx="2" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  );
}

function Home() {
  // 1. Buat state untuk menyimpan data pets dari API
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. Fetch data saat komponen pertama kali di-render
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/pets");
        if (!response.ok) {
          throw new Error("Gagal mengambil data dari server");
        }
        
        const result = await response.json();
        // Cek struktur response Laravel kamu, biasanya dibungkus dalam "data" (result.data) 
        // atau langsung array (result). Di sini kita handle keduanya.
        const petsData = result.data ? result.data : result;
        
        // Ambil hanya 3 data pertama untuk ditampilkan di Home
        setPets(petsData.slice(0, 3));
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPets();
  }, []);

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="hero relative flex min-h-[100svh] w-full items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-img.jpg')" }}
      >
        <div className="absolute inset-0 rounded-lg bg-orange-300/35"></div>

        <div className="relative z-10 w-full max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold leading-tight text-[#F9f3ea] capitalize md:text-5xl">
            find your new best friend and adopt a pet
          </h1>
          
          <p className="mt-6 text-lg text-[#f9f3ea] sm:text-xl">
            We are dedicated to connecting loving homes with pets in need. Explore our wide selection of cats and dogs available for adoption, and give a furry friend a second chance at happiness.
          </p>
        </div>
      </section>

      <section id="pets" className="pets px-6 pb-10">
        <h2 className="mt-16 mb-4 text-center text-2xl font-bold text-[#Ffa522] md:text-4xl">
          Available Pets for Adoption
        </h2>
        <h6 className="mb-10 text-center text-[#70451b]">
          Find your new best friend today!
        </h6>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          
          {/* Tampilkan indikator loading jika data masih diambil */}
          {isLoading ? (
             <p className="col-span-full text-center text-[#70451b]">Memuat data peliharaan...</p>
          ) : (
            // Map data dari state 'pets' yang sudah difetch
            pets.map((pet) => {
              return (
                <Link to={`/pets/${pet.id}`} key={pet.id}>
                  <article
                    key={pet.id}
                    className="group relative min-h-[360px] overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_rgba(18,18,23,0.12)]"
                  >
                    <img
                      // Sesuaikan 'pet.image' dengan nama kolom gambar di database Laravel kamu
                      // Jika API mengembalikan path, kamu mungkin perlu menambahkan base URL, contoh: `http://localhost:8000/storage/${pet.image}`
                      src={pet.image || "/assets/pets/cat1.jpg"} 
                      alt={pet.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0">
                      <div className="mx-[-12%] h-10 rounded-t-[100%] bg-white"></div>
                      <div className="bg-white px-6 pb-7 pt-2 text-center">
                        <h3 className="text-2xl font-semibold flex flex-col text-[#ffa552]">
                          {pet.name}
                          <span className="text-sm font-normal text-[#70451b]">
                            {pet.breed}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })
          )}

          <Link
            to="/catalog"
            className="flex min-h-[360px] flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-[#ff8412] to-[#ffa552] text-white shadow-[0_18px_40px_rgba(106,17,203,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(106,17,203,0.32)]"
          >
            <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
              <PawIcon />
              <p className="mt-8 max-w-[220px] text-2xl leading-snug font-medium">
                There are more pets available on PetAdoption
              </p>
            </div>
            <div className="border-t border-black/15 bg-black/10 px-6 py-5 text-center text-lg font-semibold uppercase tracking-[0.14em]">
              Meet Them
            </div>
          </Link>
        </div>
      </section>

        <section id="about" className="tentang w-full h-full mt-20 pb-16">
            <div className="bg-[#ffa552] rounded-lg max-w-full max-h-full px-0 py-0 sm:px-0 sm:py-16 lg:px-16 lg:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
                <div className="relative mx-auto h-[360px] w-full max-w-[420px] sm:h-[430px] sm:max-w-[470px]">
                <div className="absolute left-25 top-0 bottom-[37%] h-[270px] w-[45%] overflow-hidden rounded-[16px] shadow-[0_18px_36px_rgba(125,72,22,0.18)] sm:h-[320px] sm:rounded-[18px]">
                    <img
                    src="/assets/About2.jpg"
                    alt="Hewan peliharaan"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    style={{ objectPosition: "24% center" }}
                    />
                </div>

                <div className="absolute top-[35%] bottom-0 left-[50%] h-[270px] w-[45%] overflow-hidden rounded-[16px] shadow-[0_18px_36px_rgba(125,72,22,0.2)] sm:h-[285px] sm:rounded-[18px]">
                    <img
                    src="/assets/about3.jpg"
                    alt="Hewan peliharaan"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    style={{ objectPosition: "76% center" }}
                    />
                </div>
                </div>

                <div className="relative mx-auto flex w-full max-w-[550px] flex-col lg:pt-3">
                <div className="rounded-[18px] bg-[#fdc48f] px-7 py-14 text-white shadow-[0_20px_40px_rgba(125,72,22,0.12)] sm:px-8 sm:py-9">
                    <h2 className="text-[2rem] font-bold leading-none sm:text-[2.2rem]">
                    About us
                    </h2>
                    <p className="mt-5 max-w-[430px] text-[13px] leading-7 text-white/92 sm:text-[14px]">
                    Kami percaya bahwa setiap hewan berhak mendapatkan rumah yang
                    penuh kasih. Melalui platform ini, kami menghubungkan
                    hewan-hewan yang membutuhkan dengan calon pemilik yang peduli
                    dan bertanggung jawab. Dengan proses adopsi yang mudah dan
                    transparan, kami ingin memastikan setiap adopsi menjadi awal
                    dari hubungan yang bahagia dan berkelanjutan. Mari
                    bersama-sama memberi kesempatan kedua bagi mereka untuk hidup
                    yang lebih baik.
                    </p>
                </div>

                <Link
                    to="/facts"
                    className="mt-[-18px] ml-auto w-full max-w-[290px] rounded-[16px] bg-white px-6 py-5 text-center shadow-[0_16px_32px_rgba(125,72,22,0.16)] transition duration-300 hover:-translate-y-1"
                >
                    <p className="text-lg font-semibold leading-5 text-[#ffa552] sm:text-xl">
                    Click here for read more
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-[#f0a562] sm:text-xs">
                    here for more fact about cat and dogs
                    </p>
                </Link>
                
                </div>
            </div>
            </div>
        </section>

        <section id="contact" className="kontak mt-20 px-4 pb-16 sm:px-6">
            <div className="mx-auto max-w-6xl overflow-hidden]">
            <div className="grid items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-14 lg:py-14">
                <div className="max-w-[420px]">
                <h2 className="text-4xl font-bold tracking-tight text-[#ffa552] sm:text-5xl">
                    Get in touch
                </h2>

                <div className="mt-8 space-y-6 text-[#70451b]">
                    <div className="flex items-start gap-4">
                    <div className="shrink-0 text-[#ffa552]">
                        <HomeIcon />
                    </div>
                    <p className="pt-0.5 text-base leading-6 sm:text-lg">
                        Jl. Cendana No. 27, Kel. Cihapit, Kec. Bandung Wetan, Kota
                        Bandung, Jawa Barat
                    </p>
                    </div>

                    <div className="flex items-center gap-4">
                    <div className="shrink-0 text-[#ffa552]">
                        <PhoneIcon />
                    </div>
                    <p className="text-base sm:text-lg">+62-821-5678-4321</p>
                    </div>

                    <div className="flex items-center gap-4">
                    <div className="shrink-0 text-[#ffa552]">
                        <MailIcon />
                    </div>
                    <p className="text-base sm:text-lg">
                        andi.pratama.adopt@gmail.com
                    </p>
                    </div>
                </div>

                <div className="my-8 h-px w-full max-w-[260px] bg-[#ccb39a]"></div>

                <div className="text-[#70451b]">
                    <h3 className="text-3xl font-bold text-[#ffa552] sm:text-[2.3rem]">
                    Appointments:
                    </h3>

                    <div className="mt-7 space-y-7 text-base leading-6 sm:text-lg">
                    <div>
                        <p className="font-semibold">Monday to Friday,</p>
                        <p>9am - 11am and 3pm - 5pm</p>
                    </div>

                    <div>
                        <p className="font-semibold">Saturday,</p>
                        <p>9am - 12pm</p>
                    </div>

                    <p className="max-w-[320px]">
                        Appointments between these times are available on request.
                    </p>
                    </div>
                </div>
                </div>

                <div className="relative flex min-h-[320px] items-end justify-center lg:min-h-[520px]">
                <div className="absolute inset-x-[12%] bottom-6 h-10 rounded-full bg-[#d8c1ab]/35 blur-2xl"></div>
                <div className="absolute top-12 right-[16%] h-36 w-36 rounded-full bg-[#ffe2c7] blur-3xl"></div>
                <img
                    src="/assets/contactimg.png"
                    alt="Ilustrasi anjing dan kucing"
                    className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-[0_24px_32px_rgba(120,80,35,0.18)]"
                />
                </div>
            </div>
            </div>
        </section>
    </>
  );
}

export default Home;