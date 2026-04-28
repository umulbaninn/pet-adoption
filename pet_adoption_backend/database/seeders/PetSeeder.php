<?php

namespace Database\Seeders;

use App\Models\Pet;
use Illuminate\Database\Seeder;

class PetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data Hewan 1: Mochi
        Pet::create([
            'name' => 'Mochi',
            'species' => 'Kucing',
            'breed' => 'Persia',
            'age' => 12,
            'food' => 'Whiskas Salmon',
            'allergies' => 'Alergi Susu Sapi',
            'description' => 'Mochi sangat manja dan suka tidur di sofa.',
            'status' => 'available'
        ]);

        // Data Hewan 2: Bruno
        Pet::create([
            'name' => 'Bruno',
            'species' => 'Anjing',
            'breed' => 'Golden Retriever',
            'age' => 24,
            'food' => 'Royal Canin Dog',
            'allergies' => 'Tidak ada',
            'description' => 'Bruno anjing yang aktif dan pintar menjaga rumah.',
            'status' => 'available'
        ]);
    }
}