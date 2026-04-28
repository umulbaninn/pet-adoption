<?php

namespace App\Http\Controllers;

use App\Models\Adoption;
use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdoptionController extends Controller
{
    // GET /api/adoptions (Melihat semua riwayat adopsi)
    public function index()
    {
        $adoptions = Adoption::with(['user', 'pet'])->get();

        return response()->json([
            'status' => true,
            'data' => $adoptions
        ]);
    }

    // GET /api/adoptions/completed (Khusus yang sudah sukses diadopsi)
    public function getAdoptedList()
    {
        $completedAdoptions = Adoption::with(['user', 'pet'])
            ->whereHas('pet', function($query) {
                $query->where('status', 'adopted');
            })
            ->get();

        return response()->json([
            'status' => true,
            'message' => 'Daftar hewan yang berhasil mendapatkan rumah baru',
            'data' => $completedAdoptions
        ]);
    }

    // POST /api/adoptions (User mengajukan adopsi)
    public function store(Request $request)
    {
        // 1. VALIDASI: Pastikan semua data diri wajib diisi
        $request->validate([
            'pet_id'        => 'required|exists:pets,id',
            'adopter_name'  => 'required|string|max:255',
            'phone_number'  => 'required|string|max:20',
            'address'       => 'required|string',
            'reason'        => 'nullable|string',
            'payment_proof' => 'nullable|image|mimes:jpeg,png,jpg|max:2048' // Upload gambar max 2MB
        ]);

        // 2. AMBIL USER YANG LOGIN
        $user = Auth::id();

        // 3. CEK PET
        $pet = Pet::find($request->pet_id);

        if (!$pet) {
            return response()->json([
                'status' => false,
                'message' => 'Hewan tidak ditemukan'
            ], 404);
        }

        // CEK SUDAH DIADOPSI BELUM
        if ($pet->status === 'adopted') {
            return response()->json([
                'status' => false,
                'message' => 'Maaf, hewan ini sudah diadopsi oleh orang lain.'
            ], 400);
        }

        // 4. URUS UPLOAD BUKTI TRANSFER (Jika Ada)
        $paymentPath = null;
        if ($request->hasFile('payment_proof')) {
            // Simpan gambar ke folder 'storage/app/public/payments'
            $paymentPath = $request->file('payment_proof')->store('payments', 'public');
        }

        // 5. SIMPAN DATA ADOPSI (Status 'pending' menunggu Admin)
        $adoption = Adoption::create([
            'user_id'       => $user,
            'pet_id'        => $pet->id,
            'status'        => 'pending', 
            'adopter_name'  => $request->adopter_name,
            'phone_number'  => $request->phone_number,
            'address'       => $request->address,
            'reason'        => $request->reason,
            'payment_proof' => $paymentPath,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Berhasil mengajukan adopsi! Menunggu persetujuan Admin.',
            'data' => $adoption
        ], 201);
    }

    // =================================================================
    // Fungsi untuk Admin - Menerima atau Menolak Adopsi
    // =================================================================
    public function updateStatus(Request $request, $id)
    {
        // 1. Validasi input: cuma boleh diisi 'approved' atau 'rejected'
        $request->validate([
            'status' => 'required|in:approved,rejected'
        ]);

        // 2. Cari data adopsi berdasarkan ID
        $adoption = Adoption::find($id);
        
        if (!$adoption) {
            return response()->json([
                'status' => false,
                'message' => 'Data pengajuan adopsi tidak ditemukan.'
            ], 404);
        }

        // 3. Update status adopsinya ('approved' / 'rejected')
        $adoption->status = $request->status;
        $adoption->save();

        // 4. LOGIKA PENTING: Kalau di-approve, ubah status hewannya jadi 'adopted'
        if ($request->status === 'approved') {
            $pet = Pet::find($adoption->pet_id);
            if ($pet) {
                $pet->status = 'adopted'; // Hewan resmi laku!
                $pet->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Status pengajuan adopsi berhasil diperbarui!',
            'data' => $adoption
        ], 200);
    }
}