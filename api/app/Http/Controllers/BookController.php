<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function book_listing(){
        $books = Book::all();
        return print_r($books);
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
