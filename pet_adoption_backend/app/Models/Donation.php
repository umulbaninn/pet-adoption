<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;

    // Nama tabel di database
    protected $table = 'donations';

    // Kolom yang boleh diisi
    protected $fillable = [
        'user_id',
        'donator_name',
        'amount',
        'message',
        'payment_proof',
        'status',
    ];

    /**
     * Relasi ke User/Login (Opsional, tapi bagus buat nanti)
     */
    public function user()
    {
        return $this->belongsTo(LoginModel::class, 'user_id');
    }
}