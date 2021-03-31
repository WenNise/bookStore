<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([

            [
                'name' => 'Angeline',
                'email'=> 'angeline@gmail.com',
                'password' => 'P@ssw0rd',
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now(),
                'role' => 'admin'
            ],
            [
                'name' => 'Wen Nise',
                'email'=> 'wennise@gmail.com',
                'password' => 'P@ssw0rd',
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now(),
                'role' => 'admin'
            ],
        ]);
    }
}
