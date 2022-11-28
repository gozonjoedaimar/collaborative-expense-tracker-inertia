<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use NumberFormatter;
use Carbon\Carbon;

class Summary extends Model
{
    public function getAll() {
      $income = DB::table('incomes')
        ->select(DB::raw('"+" type'))
        ->addSelect(DB::raw('"income" description'))
        ->addSelect(DB::raw('"green" color'))
        ->addSelect('amount', 'created_at')
      ;
      $expense = DB::table('expenses')
      ->select(DB::raw('"-" type'))
      ->addSelect(DB::raw('"expense" description'))
      ->addSelect(DB::raw('"red" color'))
      ->addSelect('amount', 'created_at')
      ;

      $expense
        ->union($income)
        ->groupBy('created_at')
        ->orderBy('created_at','desc');
      ;

      $results = $expense->get();
      $formatted = [];

      foreach ($results as $result) {
        // format date
        $result->created_at = Carbon::parse($result->created_at)->diffForHumans();
        // format amount
        $fmt = new NumberFormatter( 'en_PH', NumberFormatter::CURRENCY );
        $result->amount = $result->type . $fmt->formatCurrency($result->amount,'php');
        $formatted[] = $result;
      }

      return $formatted;
    }
}
