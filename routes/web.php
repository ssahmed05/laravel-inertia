<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::get('/home', 'App\Http\Controllers\HomeController@index')->name('home');
Route::get('/home', [HomeController::class,'index'])->name('home');
Route::get('/about', [HomeController::class,'aboutUs'])->name('aboutus');
Route::get('/contact', [HomeController::class,'contact'])->name('contact.show');
Route::post('/contact', [HomeController::class,'postContact'])->name('contact.submit');

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
