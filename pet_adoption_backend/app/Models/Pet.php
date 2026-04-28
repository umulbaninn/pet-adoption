<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    protected $fillable = [
        'name',
        'species',
        'breed',
        'age',
        'food',
        'allergies',
        'description',
        'image',
        'status'
    ];
}