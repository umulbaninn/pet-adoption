<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PetController extends Controller
{
    // GET /api/pets
    public function index()
    {
        $pets = Pet::orderBy('id', 'asc')->get()->map(function ($pet) {
            if ($pet->image) {
                $pet->image = url('storage/' . $pet->image);
            }
            return $pet;
        });

        return response()->json($pets);
    }

    // POST /api/pets
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'species' => 'required|string',
            'breed' => 'nullable|string',
            'age' => 'nullable|integer',
            'food' => 'nullable|string',
            'allergies' => 'nullable|string',
            'description' => 'nullable|string',
            'image' => 'nullable|file|image',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('pets', 'public');
        }

        $pet = Pet::create([
            'name' => $request->name,
            'species' => $request->species,
            'breed' => $request->breed,
            'age' => $request->age,
            'food' => $request->food,
            'allergies' => $request->allergies,
            'description' => $request->description,
            'image' => $imagePath,
            'status' => 'available',
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Hewan berhasil ditambahkan!',
            'data' => $pet
        ], 201);
    }

    // GET /api/pets/{id}
    public function show($id)
    {
        $pet = Pet::find($id);

        if (!$pet) {
            return response()->json(['message' => 'Hewan tidak ditemukan'], 404);
        }

        if ($pet->image) {
            $pet->image = url('storage/' . $pet->image);
        }

        return response()->json($pet);
    }

    // PUT /api/pets/{id}
    public function update(Request $request, $id)
    {
        $pet = Pet::find($id);

        if (!$pet) {
            return response()->json([
                'message' => 'Hewan tidak ditemukan'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string',
            'species' => 'sometimes|string',
            'breed' => 'nullable|string',
            'age' => 'nullable|integer',
            'food' => 'nullable|string',
            'allergies' => 'nullable|string',
            'description' => 'nullable|string',
            'image' => 'nullable|file|image',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $pet->update($request->except('image'));

        if ($request->hasFile('image')) {
            if ($pet->image && Storage::disk('public')->exists($pet->image)) {
                Storage::disk('public')->delete($pet->image);
            }

            $imagePath = $request->file('image')->store('pets', 'public');
            $pet->image = $imagePath;
            $pet->save();
        }

        return response()->json([
            'status' => true,
            'message' => 'Data hewan berhasil diupdate',
            'data' => $pet
        ]);
    }

    // DELETE /api/pets/{id}
    public function destroy($id)
    {
        $pet = Pet::find($id);

        if (!$pet) {
            return response()->json([
                'message' => 'Hewan tidak ditemukan'
            ], 404);
        }

        if ($pet->image && Storage::disk('public')->exists($pet->image)) {
            Storage::disk('public')->delete($pet->image);
        }

        $pet->delete();

        return response()->json([
            'status' => true,
            'message' => 'Hewan berhasil dihapus'
        ]);
    }
}
