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

// Register
Route::get('/register', [UserController::class,'create'])->name('register');
Route::post('/register', [UserController::class,'save'])->name('register.save');

// Login
Route::get('/login', [UserController::class,'index'])->name('login');

// Auth
Route::post('/login', [UserController::class,'authenticate'])->name('login.auth');

// TODO: add authorization to routes

// Dashboard
Route::get('/dashboard', fn() => redirect()->route('dashboard') );
Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

// New
Route::get('/add/income', [IncomeController::class, 'index'])->name('add.income');
Route::get('/add/expense', [ExpenseController::class, 'index'])->name('add.expense');
