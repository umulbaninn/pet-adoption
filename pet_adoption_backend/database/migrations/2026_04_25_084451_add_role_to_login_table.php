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
        Schema::table('login', function (Blueprint $table) {
            // Menambahkan kolom 'role' dengan nilai bawaan (default) 'user'
            // Diletakkan setelah kolom password
            $table->string('role')->default('user')->after('password');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('login', function (Blueprint $table) {
            // Menghapus kolom 'role' jika migrasi di-rollback (dibatalkan)
            $table->dropColumn('role');
        });
    }
};