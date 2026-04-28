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
        Schema::table('adoptions', function (Blueprint $table) {
            // Tambahkan ->nullable() supaya data lama tidak error
            $table->string('adopter_name')->nullable()->after('status'); 
            $table->string('phone_number')->nullable()->after('adopter_name');
            $table->text('address')->nullable()->after('phone_number');
            $table->text('reason')->nullable()->after('address'); 
            $table->string('payment_proof')->nullable()->after('reason'); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('adoptions', function (Blueprint $table) {
            $table->dropColumn([
                'adopter_name', 
                'phone_number', 
                'address', 
                'reason', 
                'payment_proof'
            ]);
        });
    }
};