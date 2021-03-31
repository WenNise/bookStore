<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Purchasedhistory;

class PurchasedHistoriesController extends Controller
{
    //display all
    public function index()
    {
        return Purchasedhistory::all();
    }

    // add book details
    public function store(Request $request)
    {
        return Purchasedhistory::create($request->all());
    }

    // update book details
    public function update(Request $request, $id)
    {
        $purchasedhistory = Purchasedhistory::findOrFail($id);
        $purchasedhistory -> update($request->all());
        return $purchasedhistory;
    }

    // delete book
    public function destroy(Request $request, $id)
    {
        $purchasedhistory = Purchasedhistory::findOrFail($id);
        $purchasedhistory -> delete();
        return 204;
    }
}
