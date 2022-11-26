<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\IncomeController;
use App\Http\Controllers\ExpenseController;

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

// Email verify
Route::get('/email/verify', [UserController::class, 'verify'])->middleware('auth')->name('verification.notice');
Route::get('/email/verify/{id}/{hash}', [UserController::class, 'handleVerify'])->middleware(['auth', 'signed'])->name('verification.verify');
Route::post('/email/verification-notification', [UserController::class, 'resendVerify'])->middleware(['auth', 'throttle:6,1'])->name('verification.send');

// Register
Route::get('/register', [UserController::class,'create'])->name('register');
Route::post('/register', [UserController::class,'save'])->name('register.save');

// Login
Route::get('/login', [UserController::class,'index'])->name('login');

// Logout
Route::post('/logout', [UserController::class, 'logout'])->middleware('auth')->name('logout');

// Auth
Route::post('/login', [UserController::class,'authenticate'])->name('login.auth');

// TODO: add authorization to routes

Route::middleware(['auth','verified'])->group(function() {
  // Dashboard
  Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
  Route::get('/', fn() => redirect()->route('dashboard') );
  
  // New
  Route::get('/add/income', [IncomeController::class, 'index'])->name('add.income');
  Route::get('/add/expense', [ExpenseController::class, 'index'])->name('add.expense');
});
