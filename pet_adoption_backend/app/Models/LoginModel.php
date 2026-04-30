<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class LoginModel extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    // Nama tabel di pgAdmin kamu
   protected $table = 'login'; // Pastikan mengarah ke tabel login

    protected $fillable = [
        'email',
        'password',
        'role',
        'otp',               // WAJIB ADA
        'otp_expires_at',    // WAJIB ADA
        'email_verified_at'  // WAJIB ADA
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
