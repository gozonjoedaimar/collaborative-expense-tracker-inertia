<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Summary;

class DashboardController extends Controller
{
  /**
   * Dashboard page
   * GET /dashboard
   */
  public function index()
  {
    return Inertia::render('Dashboard/Index', [
      'message' => 'Nice',
      'summary' => Summary::getAll()
    ]);
  }
}
