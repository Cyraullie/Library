<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Support\Facades\Storage;

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


    public function new_book(Request $request){
        
        $book = Book::create([
            "name" => $request->input("title"),
            "editor" => $request->input("editor"),
            "summary" => $request->input("summary"),
            "author" => $request->input("writer"),
            "user_id" => $request->input("owner"),
            "volume" => $request->input("volume"),
            "img_name" => $request->input("img_name"),
            "add_date" => now(),
            "price" => 31.5,
            "type" => "roman"
        ]);
        
        

        return $request;
    }

    public function new_pic(Request $request){

        $file = $request->file("image");
        $path = Storage::putFile('pics', $request->file('image'));

        return $file;
    }
}
