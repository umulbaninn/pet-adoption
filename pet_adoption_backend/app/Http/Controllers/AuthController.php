<?php

namespace App\Http\Controllers;

use App\Mail\OtpMail;
use App\Models\LoginModel;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\ForgotPasswordMail;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:login,email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ], 400);
        }

        // 1. Generate OTP
        $otp = rand(100000, 999999);

        // 2. Simpan ke tabel login beserta OTP-nya
        $login = LoginModel::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'user',
            'otp' => $otp,
            'otp_expires_at' => now()->addMinutes(10)
        ]);

        // 3. Kirim email
        Mail::to($login->email)->send(new OtpMail($otp));

        return response()->json([
            'status' => true,
            'message' => 'Register Berhasil! Silakan cek email Anda untuk kode OTP.',
            'data' => $login
        ], 201);
    }
    public function login(Request $request)
    {
        $login = LoginModel::where('email', $request->email)->first();

        if (!$login || !Hash::check($request->password, $login->password)) {
            return response()->json([
                'status' => false,
                'message' => 'Email Atau Password Salah',
            ], 401);
        }

        $token = $login->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'Login Berhasil',
            'token' => $token,
            'data' => $login
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => true,
            'message' => 'Logout Berhasil',
        ]);
    }


    public function forgotPassword(Request $request)
    {
        // 1. Validasi input email
        $request->validate([
            'email' => 'required|email'
        ]);

        // 2. Cari email di database (tabel login)
        $login = LoginModel::where('email', $request->email)->first();

        // 3. Jika email tidak ada di database
        if (!$login) {
            return response()->json([
                'status' => false,
                'message' => 'Email tidak terdaftar di sistem kami.'
            ], 404);
        }

        // 4. Bikin angka acak 6 digit untuk OTP
        $otp = rand(100000, 999999);

        // 5. Update kolom OTP di database
        $login->update([
            'otp' => $otp,
            'otp_expires_at' => now()->addMinutes(10)
        ]);

        // 6. Kirim email OTP (KITA PAKAI FILE EMAIL YANG SAMA SEPERTI REGISTER)
        Mail::to($login->email)->send(new ForgotPasswordMail($otp));

        return response()->json([
            'status' => true,
            'message' => 'Kode OTP untuk reset password telah dikirim ke email Anda.'
        ], 200);
    }

    // Fungsi 2: Mengubah Password Baru menggunakan OTP
    public function resetPassword(Request $request)
    {
        // 1. Validasi input
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required|numeric',
            'new_password' => 'required|min:6'
        ]);

        // 2. Cari user berdasarkan email
        $login = LoginModel::where('email', $request->email)->first();

        if (!$login) {
            return response()->json(['status' => false, 'message' => 'Email tidak ditemukan.'], 404);
        }

        // 3. Cek kebenaran OTP
        if ($login->otp != $request->otp) {
            return response()->json(['status' => false, 'message' => 'Kode OTP salah.'], 400);
        }

        // 4. Cek apakah OTP kedaluwarsa
        if (now()->isAfter($login->otp_expires_at)) {
            return response()->json(['status' => false, 'message' => 'Kode OTP sudah kedaluwarsa.'], 400);
        }

        // 5. Jika sukses: Ganti password lama, lalu hapus OTP-nya
        $login->update([
            'password' => Hash::make($request->new_password), // Password di-enkripsi ulang
            'otp' => null,
            'otp_expires_at' => null
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Password berhasil diubah! Silakan login menggunakan password baru Anda.'
        ], 200);
    }
}
