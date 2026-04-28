import Navbar from '../../components/layout/Navbar'

const Privacy = () => {
  return (
    <>
      <Navbar />
        <div className="w-full mx-auto p-10">
          <h1 className="text-4xl font-extrabold text-[#ffa552] mb-4">Kebijakan Privasi</h1>
          <p className="text-[#70451b] mb-8 font-medium">Terakhir diperbarui: 26 April 2026</p>
          
          <div className="space-y-8 text-[#70451b] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[#ffa552] mb-3">Informasi yang Kami Terima</h2>
              <p>
                Kami mengumpulkan informasi yang Anda berikan langsung kepada kami saat mengisi 
                formulir adopsi, seperti nama, alamat email, nomor telepon, alamat rumah, 
                dan detail pekerjaan Anda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ffa552] mb-3">Penggunaan Informasi</h2>
              <p>Data pribadi Anda digunakan semata-mata untuk:</p>
              <div className="bg-[#ffa552]/80 p-4 rounded-lg mt-3">
                <ul className="list-disc ml-5 space-y-2 italic">
                  <li>Memproses aplikasi adopsi hewan Anda.</li>
                  <li>Verifikasi identitas dan kelayakan tempat tinggal.</li>
                  <li>Menghubungi Anda untuk jadwal kunjungan atau interview.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ffa552] mb-3">Keamanan Data</h2>
              <p>
                Kami menerapkan standar keamanan teknis untuk melindungi data pribadi Anda dari 
                akses tidak sah. Data Anda tidak akan dibagikan kepada pihak eksternal kecuali 
                diperlukan oleh hukum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ffa552] mb-3">Hak Anda</h2>
              <p>
                Anda berhak untuk meminta salinan data pribadi Anda yang kami simpan, atau meminta 
                penghapusan data tersebut jika proses adopsi telah selesai atau dibatalkan.
              </p>
            </section>
          </div>
        </div>
    </>
  )
}

export default Privacy