<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CekRoleAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        // 1. Cek apakah user yang lagi login punya role 'admin'
        if (Auth::user() && Auth::user()->role === 'admin') {
            // Kalau admin, silakan lewat (lanjutkan request)
            return $next($request);
        }

        // 2. Kalau bukan admin (user biasa), langsung tendang!
        return response()->json([
            'status' => false,
            'message' => 'Akses ditolak! Fitur ini khusus Admin.'
        ], 403); // 403 artinya Forbidden (Terlarang)
    }
}