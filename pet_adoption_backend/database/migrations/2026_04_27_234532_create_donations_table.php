<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('donations', function (Blueprint $table) {
            $table->id();
            
            // Relasi ke tabel login (siapa yang melakukan donasi)
            // onDelete('cascade') artinya jika user dihapus, data donasinya ikut terhapus
            $table->foreignId('user_id')->constrained('login')->onDelete('cascade');
            
            // Nama donatur (bisa beda dengan nama di akun, misal "Hamba Allah")
            $table->string('donator_name');
            
            // Nominal donasi (menggunakan bigInteger untuk antisipasi angka besar)
            $table->bigInteger('amount');
            
            // Pesan atau doa dari donatur (nullable karena tidak wajib diisi)
            $table->text('message')->nullable();
            
            // Nama file bukti transfer yang disimpan di storage
            $table->string('payment_proof');
            
            // Status verifikasi oleh admin
            $table->enum('status', ['pending', 'verified'])->default('pending');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donations');
    }
};