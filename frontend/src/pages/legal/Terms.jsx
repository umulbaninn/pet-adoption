import Navbar from '../../components/layout/Navbar'

const Terms = () => {
  return (
    <>
      <Navbar />
        <div className="w-full mx-auto p-10">
          <h1 className="text-4xl font-extrabold text-[#ffa552] mb-4">Syarat & Ketentuan</h1>
          <p className="text-[#70451b] mb-8 font-medium">Terakhir diperbarui: 26 April 2026</p>
          
          <div className="space-y-8 text-[#70451b] leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold text-[#ffa552] mb-3">1. Kelayakan Adopsi</h2>
              <p>
                Dengan menggunakan layanan kami, Anda menyatakan bahwa Anda setidaknya berusia 18 tahun 
                dan memiliki kapasitas hukum untuk menyetujui komitmen perawatan hewan jangka panjang.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ffa552] mb-3">2. Komitmen Perawatan</h2>
              <p>Adopter setuju untuk:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Memberikan lingkungan tempat tinggal yang aman dan layak.</li>
                <li>Menyediakan makanan berkualitas dan perawatan medis rutin (vaksin & obat cacing).</li>
                <li>Tidak melakukan tindakan kekerasan atau penelantaran dalam bentuk apa pun.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ffa552] mb-3">3. Larangan Penjualan Kembali</h2>
              <p>
                Hewan yang diadopsi melalui platform ini dilarang keras untuk dijual kembali, 
                dijadikan objek penelitian, atau diserahkan ke pihak ketiga tanpa sepengetahuan tim kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ffa552] mb-3">4. Pembatalan Adopsi</h2>
              <p>
                Kami berhak membatalkan proses adopsi atau menarik kembali hewan jika ditemukan bukti 
                bahwa informasi yang diberikan adopter tidak benar atau terjadi pelanggaran kesejahteraan hewan.
              </p>
            </section>
          </div>
        </div>
    </>
  )
}

export default Terms