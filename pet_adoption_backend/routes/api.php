<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\AdoptionController;
use App\Http\Controllers\DonationController; 
use App\Http\Middleware\CekRoleAdmin; // Tambahan: Import Middleware Satpam Admin
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// --- AUTH (Public) ---
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// --- PETS (Public) ---
// User bisa lihat semua hewan & detail hewan tanpa login
Route::get('/pets', [PetController::class, 'index']);
Route::get('/pets/{id}', [PetController::class, 'show']);

// --- ADOPTION SUCCESS LIST (Public) ---
// Menampilkan daftar hewan yang SUDAH BERHASIL diadopsi (untuk konten di website)
Route::get('/adoptions/completed', [AdoptionController::class, 'getAdoptedList']);


// --- PROTECTED ROUTES (Harus Login / Pakai Token) ---
Route::middleware('auth:sanctum')->group(function () {

    // Auth Management
    Route::post('/logout', [AuthController::class, 'logout']);

    // ==========================================
    // 🛡️ ZONA KHUSUS ADMIN
    // ==========================================
    Route::middleware([CekRoleAdmin::class])->group(function () {
        // Pet Management: Hanya Admin yang bisa nambah/edit/hapus hewan
        Route::post('/pets', [PetController::class, 'store']);
        Route::put('/pets/{id}', [PetController::class, 'update']);
        Route::delete('/pets/{id}', [PetController::class, 'destroy']);

        // Adoption Management: Admin menerima atau menolak pengajuan adopsi
        Route::put('/adoptions/{id}/status', [AdoptionController::class, 'updateStatus']); 
    });

    // ==========================================
    // 👤 ZONA USER BIASA & ADMIN (Semua yang login)
    // ==========================================
    // Adoption Process
    Route::post('/adoptions', [AdoptionController::class, 'store']); // Mengajukan adopsi
    Route::get('/adoptions', [AdoptionController::class, 'index']);  // Melihat riwayat adopsi

    // Route untuk Donasi
Route::post('/donations', [DonationController::class, 'store']); // User kirim donasi
Route::get('/donations', [DonationController::class, 'index']); // Admin lihat donasi
Route::put('/donations/{id}/verify', [DonationController::class, 'verify']); // Admin verifikasi
    
});