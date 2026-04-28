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
    protected $table = 'login';

    // Kolom yang boleh diisi secara otomatis
    protected $fillable = [
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}