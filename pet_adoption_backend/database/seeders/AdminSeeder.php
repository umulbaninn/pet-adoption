<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\LoginModel; // Import model Login kamu
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Mengecek apakah admin sudah ada biar gak double
        $admin = LoginModel::where('email', 'admin@petshop.com')->first();

        if (!$admin) {
            LoginModel::create([
                'email' => 'admin@petshop.com', // Email resmi admin
                'password' => Hash::make('admin123'), // Jangan lupa di-hash!
                'role' => 'admin' // Ini kuncinya
            ]);
            
            $this->command->info('Akun Admin berhasil dibuat!');
        } else {
            $this->command->info('Akun Admin sudah ada di database.');
        }
    }
}