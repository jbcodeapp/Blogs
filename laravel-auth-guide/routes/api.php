<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth', 'can:edit-post,post'])->group(function () {
    // Define your routes that require authorization here

    // Example: Edit Post Route
    Route::get('/posts/{post}/edit', 'PostController@edit')->name('posts.edit');

    // Add more routes as needed
});
