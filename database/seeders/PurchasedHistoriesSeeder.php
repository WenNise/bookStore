<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PurchasedHistoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('purchasedhistories')->insert([

            [
                'book_id' => 1,
                'quantity'=> 2,
                'user_id' => 2,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now(),
            ],
            [
                'book_id' => 2,
                'quantity'=> 1,
                'user_id' => 2,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now(),
            ],
            [
                'book_id' => 5,
                'quantity'=> 3,
                'user_id' => 1,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now(),
            ],
            [
                'book_id' => 3,
                'quantity'=> 4,
                'user_id' => 1,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now(),
            ],
            [
                'book_id' => 2,
                'quantity'=> 1,
                'user_id' => 2,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now(),
            ],
        ]);
    }
}
