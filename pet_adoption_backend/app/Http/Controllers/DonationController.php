<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class DonationController extends Controller
{
    // 1. Fungsi untuk User mengirim Donasi (Store)
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'donator_name' => 'required|string',
            'amount' => 'required|numeric|min:1000', // Minimal donasi 1000 rupiah
            'payment_proof' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'message' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ], 400);
        }

        // Proses Upload Foto Struk
        $imagePath = $request->file('payment_proof')->store('donations', 'public');

        // Simpan ke Database
        $donation = Donation::create([
            'user_id' => $request->user()->id, // Ambil ID dari user yang login
            'donator_name' => $request->donator_name,
            'amount' => $request->amount,
            'message' => $request->message,
            'payment_proof' => $imagePath,
            'status' => 'pending',
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Donasi berhasil dikirim, tunggu verifikasi admin ya!',
            'data' => $donation
        ], 201);
    }

    // 2. Fungsi untuk Admin melihat semua daftar donasi (Index)
    public function index()
    {
        $donations = Donation::orderBy('created_at', 'desc')->get();

        return response()->json([
            'status' => true,
            'message' => 'Daftar semua donasi',
            'data' => $donations
        ]);
    }

    // 3. Fungsi untuk Admin memverifikasi donasi (Update Status)
    public function verify($id)
    {
        $donation = Donation::find($id);

        if (!$donation) {
            return response()->json([
                'status' => false,
                'message' => 'Data donasi tidak ditemukan'
            ], 404);
        }

        $donation->update([
            'status' => 'verified'
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Donasi berhasil diverifikasi!',
            'data' => $donation
        ]);
    }
}