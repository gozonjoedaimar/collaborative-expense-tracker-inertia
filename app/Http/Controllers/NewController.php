<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NewController extends Controller
{
    public function index() {
        return Inertia::render('New/Index', [
            'types' => ['income', 'expense']
          ]);
    }
}
