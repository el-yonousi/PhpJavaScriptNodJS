<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\PetitionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('petitions', PetitionController::class);

Route::resource('authors', AuthorController::class)->only([
    'index', 'show' //remove other mthods, just only show index and show mthods
]);
// Route::resource('petitions', PetitionController::class)->only([
//     'index', 'store'
// ]);
