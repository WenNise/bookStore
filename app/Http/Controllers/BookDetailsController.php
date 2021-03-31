<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bookdetail;

class BookDetailsController extends Controller
{
    //display all
    public function index()
    {
        return Bookdetail::all();
    }

    // add book details
    public function store(Request $request)
    {
        return Bookdetail::create($request->all());
    }

    // update book details
    public function update(Request $request, $id)
    {
        $bookdetail = Bookdetail::findOrFail($id);
        $bookdetail -> update($request->all());
        return $bookdetail;
    }

    // delete book
    public function destroy(Request $request, $id)
    {
        $bookdetail = Bookdetail::findOrFail($id);
        $bookdetail -> delete();
        return 204;
    }
}
