<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function index() {
        return Inertia::render('Login');
    }

    public function create() {
        return Inertia::render('Register');
    }

    public function save(Request $request) {
        $credentials = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', 'min:8'],
            'confirm_password' => ['required','same:password']
        ]);

        $user = new User();

        $user->fill($credentials);

        $user->save();

        return redirect('register');
    }
}