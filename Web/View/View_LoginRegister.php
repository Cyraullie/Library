<?php
/**
 * Created by PhpStorm.
 * User: Cyril.GOLDENSCHUE
 * Date: 28/10/2020
 */
?>

<html>
    <body>
        <main class="BasePage">
            <div class="row">
                <div class="column">
                    <h1>Login</h1>
                    <form method="post" action="/">
                        <table class="textLogin">
                            <tr class="textLogin">
                                <td><input type="text" class="textLogin" placeholder="Email"></td>
                            </tr>
                            <tr class="textLogin">
                                <td><input type="text" class="textLogin" placeholder="Mot de passe"></td>
                            </tr>
                            <tr>
                                <td><input type="submit" class="textLogin Button" value="Se connecter"></td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div class="column">
                    <h1>Register</h1>
                    <form method="post" action="/">
                        <table class="textLogin">
                            <tr class="textLogin">
                                <td><input type="text" class="textLogin" placeholder="Nom"></td>
                                <td><input type="text" class="textLogin" placeholder="Prénom"></td>
                            </tr>
                        </table>
                        <table class="textLogin">
                            <tr class="textLogin">
                                <td><input type="text" class="textLogin" placeholder="Pseudo"></td>
                                <td><input type="text" class="textLogin" placeholder="Email"></td>
                            </tr>
                            <tr class="textLogin">
                                <td><input type="text" class="textLogin" placeholder="Téléphone"></td>
                            </tr>
                            <tr class="textLogin">
                                <td><input type="text" class="textLogin" placeholder="Mot de passe"></td>
                                <td><input type="text" class="textLogin" placeholder="Confirmer le mot de passe"></td>
                            </tr>
                            <tr>
                                <td colspan="2"><input type="submit" class="textLogin Button" value="S'inscrire"></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </main>
    </body>
</html>
