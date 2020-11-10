<?php
/**
 * Created by PhpStorm.
 * User: Cyril.GOLDENSCHUE
 * Date: 28/10/2020
 */

include "Controler/Controler.php";

$request = '';
$get_params_offset = stripos($_SERVER['REQUEST_URI'], '?');
if(isset($_GET['id'])){
    $id = intval($_GET['id']);
}
// Remove GET parameters from request uri
if ($get_params_offset) {
    $request = substr($_SERVER['REQUEST_URI'], 0, $get_params_offset);
} else {
    $request = $_SERVER['REQUEST_URI'];
}

switch ($request) {
    case '' :
    case '/' :
        HomePage();; //home directory
        break;
    case '/Loan' :
        require 'View/View_LoanPage.php';
        break;
    case '/Render' :
        require 'View/View_RenderPage.php';
        break;
    case '/AddBook' :
        require 'View/View_NewBookPage.php';
        break;
    case '/Details' :
        Details($id);
        break;
    case '/Login' :
        LoginAndRegister();
        break;
    default:
        http_response_code(404);
        Error(); //Aie, something wrong ! (page not found)
        break;
}