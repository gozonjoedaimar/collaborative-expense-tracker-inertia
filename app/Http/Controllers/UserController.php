<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
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

            return redirect()->intended('dashboard')->with('notification', [
                'message'=>'Login successful.',
                'type' => 'success'
            ]);
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function index() {
        if (! Auth::check()) {
            return Inertia::render('Login');
        }
        else {
            return redirect()->route('dashboard')->with('notification', [
                'message' => 'Already logged in.',
                'type'=>'info'
            ]);
        }
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

        event(new Registered($user));

        return redirect()->route('login')->with('notification', [
            'message'=>'User registered. Please check your email.',
            'type' => 'success'
        ]);
    }

    public function verify() {
        if ( ! Auth::user()->hasVerifiedEmail()) {
            return Inertia::render('Verify');
        }
        else {
            return redirect()->route('dashboard')->with('notification', [
                'message'=>'Email already verified.',
                'type' => 'info'
            ]);
        }
    }

    public function handleVerify (EmailVerificationRequest $request) {
        $request->fulfill();
        return redirect('/dashboard')->with('notification', [
            'message'=>'User verified.',
            'type' => 'success'
        ]);
    }

    public function resendVerify (Request $request) {
        $request->user()->sendEmailVerificationNotification();
        
        return back()->with('notification', ['message' => 'Verification link sent!']);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('login')->with('notification', [
            'message'=>'Successfully logged out.',
            'type' => 'success'
        ]);
    }
}