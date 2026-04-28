<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('adoptions', function (Blueprint $table) {

            // 🔥 Drop foreign key lama (ke users)
            $table->dropForeign(['user_id']);

            // 🔥 Tambah foreign key baru ke tabel login
            $table->foreign('user_id')
                  ->references('id')
                  ->on('login')
                  ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::table('adoptions', function (Blueprint $table) {

            // 🔁 Balikin lagi ke users (kalau rollback)
            $table->dropForeign(['user_id']);

            $table->foreign('user_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');
        });
    }
};