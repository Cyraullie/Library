<?php
/**
 * Created by PhpStorm.
 * User: Cyril.GOLDENSCHUE
 * Date: 28/10/2020
 */

include "Model/Model.php";

?>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>LoanBook</title>
        <script src="https://kit.fontawesome.com/bf0671b196.js" crossorigin="anonymous"></script>
        <Link href="../Assets/css/style.css" rel="stylesheet" type="text/css">
    </head>

<?php

require "View/View_Header.php";





function HomePage(){
    require "View/View_HomePage.php";
    Footer();
}

function LoginAndRegister(){
    require "View/View_LoginRegister.php";
    Footer();
}



function Error(){
    require "View/View_Error404.php";
    Footer();
}

function Footer(){
    require "View/View_Footer.php";
}

