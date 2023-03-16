<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function book_listing(){
        $books = Book::all();

        $books_array = [];

        foreach ($books as $book){
            array_push($books_array, [
                "id" => $book->id,
                "name" => $book->name,
                "volume" => $book->volume,
                "author" => $book->author,
                "editor" => $book->editor,
                "price" => $book->price,
                "type" => $book->type,
                "img_name" => $book->img_name,
                "add_date" => $book->add_date,
                "summary" => $book->summary,
                "user_lastname" => $book->user->lastname,
                "user_firstname" => $book->user->firstname,
            ]);
        };


        return $books_array;
    }


    public function book_first(){
        $book = Book::first();
        return print_r($book->user->surname);
    }

    public function book(){
        $books = Book::all();
        return print_r($books[0]->user->surname);
    }
}
