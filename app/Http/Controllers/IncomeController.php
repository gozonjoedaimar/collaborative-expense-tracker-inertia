<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Income;

class IncomeController extends Controller
{
    /**
     * Add Income page
     * GET /add/income
     */
    public function index() {
        return Inertia::render('New/Index', [
            'type' => 'income'
          ]);
    }

    /**
     * Save expense
     * POST /add/expense
     * 
     * @param \Illuminate\Http\Request
     */
    public function save(Request $request) {
        $amount = $request->validate([
            'amount' => ['required','numeric'],
        ]);

        $expense = new Income();

        $expense->fill($amount);

        $expense->save();

        return redirect()->route('dashboard')->with('notification', [
            'type' => 'success',
            'message' => 'Income added'
        ]);
    }
}
