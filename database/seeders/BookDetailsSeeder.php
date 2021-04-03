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
                'book_cover'=> "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1594616847",
                'author' => 'Angelina Aludo',
                'price' => 50.50,
                'quantity' => 10,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now()
            ],
            [
                'book_name' => 'The Detective',
                'book_cover'=> 'https://blog-cdn.reedsy.com/directories/gallery/38/large_60b66e669d1d08645dcc69c28d68f027.jpeg',
                'author' => 'D.I.Hills',
                'price' => 34.99,
                'quantity' => 24,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now()
            ],
            [
                'book_name' => 'The Gravity of Us',
                'book_cover'=> 'https://assets.teenvogue.com/photos/5cd4384fac4d9e712fe2ebb0/2:3/w_1852,h_2778,c_limit/The%20Gravity%20of%20Us_.jpg',
                'author' => 'Phil Stamper',
                'price' => 13.99,
                'quantity' => 19,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now()
            ],
            [
                'book_name' => 'The Great Nachby',
                'book_cover'=> 'https://149352953.v2.pressablecdn.com/wp-content/uploads/2013/07/The-Great-Nachby.jpeg',
                'author' => 'F.Scott Fitzgerald',
                'price' => 9.99,
                'quantity' => 5,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now()
            ],
            [
                'book_name' => 'The King of Drugs',
                'book_cover'=> 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105',
                'author' => 'Nora Barrett',
                'price' => 99.89,
                'quantity' => 16,
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now()
            ],
        ]);
    }
}
