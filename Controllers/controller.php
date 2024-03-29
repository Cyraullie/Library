<?php
/**
 * Created by PhpStorm.
 * User: Cyril.GOLDENSCHUE
 * Date: 28/10/2020
 */

require_once "../php/Models/model.php";

?>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>LendBooks</title>
        <script src="https://kit.fontawesome.com/bf0671b196.js" crossorigin="anonymous"></script>
        <Link href="../Assets/css/style.css" rel="stylesheet" type="text/css">
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    </head>

<?php

require "../php/View/View_Header.php";


function HomePage(){
    require "../php/View/View_HomePage.php";
    Footer("normal");
}

function Loan(){
    require '../php/View/View_LoanPage.php';
    Footer("normal");
}

function Render(){
    require '../php/View/View_RenderPage.php';
    Footer("normal");
}

function RenderBook(){
    HomePage();
}

function AddBook(){
    require '../php/View/View_NewBookPage.php';
    Footer("normal");
}






function LoginAndRegister(){
    require "../php/View/View_LoginRegister.php";

    Footer("login");
}

function Details($id){
    require "../php/View/View_DetailsBook.php";

    Footer("normal");
}








function Error(){
    require "../php/View/View_Error404.php";
    Footer("normal");
}

function Footer($value){
    require "../php/View/View_Footer.php";
}

