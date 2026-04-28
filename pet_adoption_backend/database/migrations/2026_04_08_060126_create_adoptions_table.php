<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('adoptions', function (Blueprint $table) {
            $table->id();
            // Menghubungkan ke tabel users (si pengadopsi)
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            // Menghubungkan ke tabel pets (hewan yang diadopsi)
            $table->foreignId('pet_id')->constrained()->onDelete('cascade');
            // Status untuk persetujuan admin
            $table->string('status')->default('pending'); // pending, approved, rejected
            $table->timestamps();
        });
    }

    public function down(): void
    {
       Schema::dropIfExists('adoptions');
    }
};