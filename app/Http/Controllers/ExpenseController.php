<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Expense;

class ExpenseController extends Controller
{
    /**
     * Add expense page
     * GET /add/expense
     */
    public function index() {
        return Inertia::render('New/Index', [
            'type' => 'expense'
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
            'amount' => 'numeric|gte:0.01',
        ]);

        $expense = new Expense();

        $expense->fill($amount);

        $expense->save();

        return redirect()->route('dashboard')->with('notification', [
            'type' => 'success',
            'message' => 'Expense added'
        ]);
    }
}
