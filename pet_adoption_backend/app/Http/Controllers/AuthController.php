<?php

namespace App\Http\Controllers;

use App\Models\LoginModel;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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

        // Proses pembuatan user baru dengan role otomatis 'user'
        $login = LoginModel::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'user', 
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Register Berhasil sebagai User',
            'data' => $login
        ]);
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
}