<?php
/**
 * Created by PhpStorm.
 * User: Cyril.GOLDENSCHUE
 * Date: 28/10/2020
 */
?>

<html lang="fr">
    <body class="Page">
        <h1 align="center">Création de livre</h1>
        <main class="BasePage">
            <div class="rowBook">
                <div class="imageBook image-upload">
                    <label for="file-input">
                        <img src="Assets/image/iconPlus.png">
                    </label>
                    <input id="file-input" type="file" />
                </div>

                <div class="columnBook">
                    <form class="NewBook" method="post" action="/">
                        <div class="DataBook">
                            <input type="text" placeholder="Titre">
                            <input type="text" placeholder="Tome">
                            <input type="text" placeholder="Auteur">
                            <input type="text" placeholder="Éditeur">
                            <input type="text" placeholder="Propriétaire">
                        </div>
                        <div class="SummaryBook">
                            <textarea placeholder="Résumé"></textarea>

                            <input type="submit" class="ButtonBook" value="Ajouter">
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </body>
</html>