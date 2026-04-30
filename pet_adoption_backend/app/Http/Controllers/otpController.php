<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LoginModel;

class OtpController extends Controller
{
    public function verifyOtp(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required|numeric'
        ]);

        $login = LoginModel::where('email', $request->email)->first();

        if (!$login) {
            return response()->json(['message' => 'Email tidak terdaftar.'], 404);
        }

        if ($login->otp != $request->otp) {
            return response()->json(['message' => 'Kode OTP salah.'], 400);
        }

        if (now()->isAfter($login->otp_expires_at)) {
            return response()->json(['message' => 'Kode OTP sudah kedaluwarsa.'], 400);
        }

        // Jika sukses, hapus OTP dan tandai verified
        $login->update([
            'email_verified_at' => now(),
            'otp' => null,
            'otp_expires_at' => null
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Verifikasi OTP berhasil! Akun Anda sudah aktif.'
        ], 200);
    }
}
