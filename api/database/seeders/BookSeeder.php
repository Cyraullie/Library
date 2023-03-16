<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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
            "summary" => "Orphelin, Fletcher imagine déjà le futur avec une vie assez difficile, mais dans la forge de son père adoptif, qui l'a pris sous son aile dès qu'il a été retrouvé seul, abandonné.",
            "img_name" => "TMIT1.jpg",
        ]);

        DB::table('books')->insert([
            'name' => "L'invocateur",
            "volume" => 2,
            "author" => "Taran Matharu",
            "editor" => "Hachette",
            "price" => "31.5",
            "user_id" => 1,
            "type" => "roman",
            "add_date" => now(),
            "summary" => "Orphelin, Fletcher imagine déjà le futur avec une vie assez difficile, mais dans la forge de son père adoptif, qui l'a pris sous son aile dès qu'il a été retrouvé seul, abandonné.",
            "img_name" => "TMIT2.jpg",
        ]);
    }
}
