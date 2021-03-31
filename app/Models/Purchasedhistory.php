<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchasedhistory extends Model
{
    use HasFactory;

    // mass assign
    protected $fillable = ['book_id', 'quantity', 'user_id'];

    // define relationship between book detail model and purchased history model
    public function BookDetail()
    {
        return $this -> hasOne('App\Models\BookDetail');
    }

    // define relationship between user model and purchased history model
    public function User()
    {
        return $this -> hasOne('App\Models\User');
    }
}
