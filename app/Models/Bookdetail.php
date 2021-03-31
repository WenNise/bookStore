<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookdetail extends Model
{
    use HasFactory;

    // mass assign
    protected $fillable = ['book_name', 'book_cover', 'author', 'price', 'quantity'];

    // define relationship between book detail model and purchased history model
    public function Purchasedhistory()
    {
        return $this -> belongsTo('App\Models\Purchasedhistory');
    }
}