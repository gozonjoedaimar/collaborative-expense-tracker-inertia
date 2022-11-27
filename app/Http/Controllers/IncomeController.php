<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IncomeController extends Controller
{
    /**
     * Add Income page
     * GET /add/income
     */
    public function index() {
        return Inertia::render('New/Index', [
            'types' => ['income']
          ]);
    }
}
