import { Link } from "react-router-dom";
import Navbar from "/src/components/layout/Navbar";

const Facts = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[#f9f3ea] px-6 pb-16 pt-8 text-[#70451b]">
        <div className="mx-auto max-w-[1000px]">
          
          <h1 className="mb-6 text-3xl font-bold text-[#ff8f2d] md:text-4xl">
            Panduan Memilih Sahabat Berbulumu
          </h1>

          <div className="mb-10 grid gap-6 md:grid-cols-[1fr_300px]">
            <div className="overflow-hidden rounded-[24px] shadow-[0_12px_30px_rgba(203,135,70,0.15)]">
              <img
                src="/assets/facts1.jpg"
                alt="Panduan"
                className="h-[250px] w-full object-cover md:h-[350px]"
              />
            </div>

            <Link
              to="/catalog"
              className="flex min-h-[200px] items-center justify-center rounded-[24px] bg-[#fffaf4] p-8 text-center shadow-[0_12px_30px_rgba(203,135,70,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:min-h-full"
            >
              <h2 className="text-2xl font-bold leading-snug text-[#ff8f2d]">
                Click here if you were ready for adoption
              </h2>
            </Link>
          </div>

          <article className="space-y-8 text-sm leading-relaxed md:text-base">
            <p>
              Memutuskan untuk mengadopsi anjing atau kucing adalah langkah besar yang penuh komitmen. Sebelum membawa mereka pulang, yuk simak panduan lengkapnya!
            </p>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#ff8f2d]">Tips Sebelum Adopsi</h2>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">Siapkan Komitmen Jangka Panjang:</span> Mengadopsi hewan bukan sekadar hobi sementara. Kamu harus siap meluangkan waktu, tenaga, dan finansial untuk makanan, vaksinasi, hingga perawatan medis selama bertahun-tahun.
                </p>
                <p>
                  <span className="font-semibold">Sesuaikan dengan Gaya Hidup:</span> Jika kamu sibuk bekerja dari pagi hingga malam, kucing yang lebih mandiri mungkin lebih cocok daripada anjing yang butuh diajak jalan-jalan setiap hari.
                </p>
                <p>
                  <span className="font-semibold">Cek Kondisi Lingkungan:</span> Pastikan tempat tinggalmu ramah hewan dan memiliki ruang yang cukup. Beberapa jenis anjing butuh halaman untuk berlari, sementara kucing butuh ruang vertikal (seperti cat tree) untuk memanjat.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#ff8f2d]">Trik Memilih Anjing & Kucing yang Tepat</h2>
              <div className="space-y-4">
                <p>Pilih Berdasarkan Kategori Umur: Energi dan kebutuhan perawatan hewan sangat bergantung pada usianya. Pahami kategori umur ini agar tidak salah pilih:</p>
                
                <ul className="list-disc space-y-2 pl-6 marker:text-[#ff8f2d]">
                  <li>
                    <span className="font-semibold">Kitten / Puppy (&lt; 1 tahun):</span> Sangat menggemaskan tapi butuh perhatian ekstra, pelatihan intensif, dan punya energi yang meledak-ledak.
                  </li>
                  <li>
                    <span className="font-semibold">Young (1 - 3 tahun):</span> Masih sangat aktif dan suka bermain, tapi sudah melewati fase paling merepotkan saat bayi.
                  </li>
                  <li>
                    <span className="font-semibold">Adult (3 - 8 tahun):</span> Kepribadiannya sudah terbentuk, lebih tenang, mandiri, dan cocok untuk gaya hidup yang lebih santai.
                  </li>
                  <li>
                    <span className="font-semibold">Senior (8 - 10 tahun):</span> Sangat tenang, butuh banyak istirahat, dan menghargai lingkungan yang damai. Sering kali menjadi pendamping yang paling setia.
                  </li>
                </ul>

                <p>
                  <span className="font-semibold">Jangan Hanya Terkecoh Penampilan:</span> Fokuslah pada chemistry dan kepribadian. Kadang, hewan yang terlihat biasa saja justru memiliki karakter yang paling klop denganmu.
                </p>
                <p>
                  <span className="font-semibold">Kenali Karakter Aslinya di Luar Kandang:</span> Mintalah pihak shelter untuk mengeluarkan hewan dari kandang. Hewan bisa terlihat sangat pasif atau justru terlalu agresif saat stres di dalam kandang.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#ff8f2d]">Fakta Unik yang Mungkin Belum Kamu Tahu</h2>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">Sidik Hidung Kucing:</span> Sama seperti sidik jari manusia yang tidak ada duanya, setiap kucing memiliki pola hidung yang 100% unik!
                </p>
                <p>
                  <span className="font-semibold">Kekuatan Dengkur Kucing:</span> Suara dengkuran (purring) kucing berada di frekuensi 25 hingga 140 Hertz, yang secara ilmiah terbukti dapat membantu penyembuhan tulang, otot, dan meredakan stres pada manusia.
                </p>
                <p>
                  <span className="font-semibold">Anjing Bisa "Membaca" Wajahmu:</span> Anjing adalah satu-satunya hewan (selain primata) yang secara insting menatap mata manusia untuk membaca emosi, mencari petunjuk, atau sekadar mencari perhatian.
                </p>
                <p>
                  <span className="font-semibold">Penciuman Super Anjing:</span> Bagian otak anjing yang memproses bau berukuran 40 kali lebih besar daripada manusia. Mereka tidak hanya mencium bau makanan, tapi bisa mencium perubahan hormon dan bahkan beberapa jenis penyakit.
                </p>
              </div>
            </section>

          </article>
        </div>
      </main>
    </>
  );
};

export default Facts;