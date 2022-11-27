<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ExpenseController extends Controller
{
    /**
     * Add expense page
     * GET /add/expense
     */
    public function index() {
        return Inertia::render('New/Index', [
            'types' => ['expense']
          ]);
    }
}
