<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adoption extends Model
{
    use HasFactory;

    // Kolom yang boleh diisi lewat program
    protected $fillable = [
        'user_id',
        'pet_id',
        'status',
        'adopter_name',
        'phone_number',
        'address',
        'reason',
        'payment_proof',
    ];

    // Relasi: Mengambil data User yang melakukan adopsi ini
    public function user()
{
    return $this->belongsTo(LoginModel::class, 'user_id');
}

    // Relasi: Mengambil data Hewan yang sedang diadopsi ini
    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}