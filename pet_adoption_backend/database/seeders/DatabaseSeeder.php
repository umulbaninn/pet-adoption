<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Memanggil PetSeeder agar data hewan masuk ke database
        $this->call([
            PetSeeder::class,
            AdminSeeder::class
        ]);

        // Opsional: Tetap biarkan test user bawaan Laravel jika mau
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
