<?php
/**
 * Created by PhpStorm.
 * User: Cyril.GOLDENSCHUE
 * Date: 28/10/2020
 */
?>

<html>
    <body class="Page">
        <main class="BasePage">
            <div class="rowBook">
                <div class="columnBook">
                    <h1>Login</h1>
                    <form class="textLogin"  method="post" action="/">
                        <input type="text" class="textLogin" placeholder="Email">
                        <input type="text" class="textLogin" placeholder="Mot de passe">
                        <input type="submit" class="textLogin Button" value="Se connecter">
                    </form>

                </div>
                <div class="columnBook">
                    <h1>Register</h1>
                    <form class="textLogin" method="post" action="/">

                            <input type="text" class="textLogin" placeholder="Nom">
                            <input type="text" class="textLogin" placeholder="Prénom">

                            <input type="text" class="textLogin" placeholder="Pseudo">
                            <input type="text" class="textLogin" placeholder="Email">

                            <input type="text" class="textLogin" placeholder="Téléphone">

                            <input type="text" class="textLogin" placeholder="Mot de passe">
                            <input type="text" class="textLogin" placeholder="Confirmer le mot de passe">

                            <input type="submit" class="textLogin Button" value="S'inscrire">

                    </form>
                </div>
            </div>
        </main>
    </body>
</html>
