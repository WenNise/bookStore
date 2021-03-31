<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('bookdetails')->insert([

            [
                'book_name' => 'Memory',
                'book_cover'=> 'resources/images/Memory.jpg',
                'author' => 'Angelina Aludo',
                'price' => 50.50,
                'quantity' => 10,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now()
            ],
            [
                'book_name' => 'The Detective',
                'book_cover'=> 'resources/images/TheDetective.jpeg',
                'author' => 'D.I.Hills',
                'price' => 34.99,
                'quantity' => 24,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now()
            ],
            [
                'book_name' => 'The Gravity of Us',
                'book_cover'=> 'resources/images/TheGravityOfUs.jpg',
                'author' => 'Phil Stamper',
                'price' => 13.99,
                'quantity' => 19,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now()
            ],
            [
                'book_name' => 'The Great Nachby',
                'book_cover'=> 'resources/images/TheGreatNachby.jpeg',
                'author' => 'F.Scott Fitzgerald',
                'price' => 9.99,
                'quantity' => 5,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now()
            ],
            [
                'book_name' => 'The King of Drugs',
                'book_cover'=> 'resources/images/TheKingOfDrugs.jpg',
                'author' => 'Nora Barrett',
                'price' => 99.89,
                'quantity' => 16,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now()
            ],
        ]);
    }
}
