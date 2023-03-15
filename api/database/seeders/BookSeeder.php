<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('books')->insert([
            'name' => "L'invocateur",
            "volume" => 1,
            "author" => "Taran Matharu",
            "editor" => "Hachette",
            "price" => "31.5",
            "user_id" => 1,
            "type" => "roman",
            "add_date" => now(),
        ]);
    }
}
