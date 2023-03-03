<?php
/**
 * Created by PhpStorm.
 * User: Cyril.GOLDENSCHUE
 * Date: 28/10/2020
 */
?>

<html lang="fr">
    <body class="Page">
<h1 align="center">Détails du livre</h1>
<main class="BasePage">
    <div class="rowBook">
        <div class="imageBook">
            <img class="ImageBookDetail" src="Assets/image/Livre1.jpg">
        </div>

        <div class="columnBook">
            <form class="DetailsBook" method="post" action="/Render">
                <div class="DataBookDetails">
                    <div class="InfoBook">
                        <h1>L'invocation : Le Novice</h1>
                        <p><b>Tome 1</b></p>
                        <p>Écrivain: <b>Taran Matharu</b></p>
                        <p>Éditeur: <b>Hachette</b></p>
                        <p>Propriétaire: <b>Cyril Goldenschue</b></p>
                    </div>


                </div>
                    <div class="SummaryDetailsBook">
                        <div class="summary">
                            <p><b>résumé : </b></p>
                            Orphelin, Fletcher imagine déjà le futur avec une vie assez difficile, mais dans la forge de son père adoptif, qui l'a pris sous son aile dès qu'il a été retrouvé seul, abandonné.
                        </div>
                    </div>
                    <input type="submit" class="ButtonBook" value="Emprunter">
                </div>
            </form>
        </div>
    </div>
</main>
</body>
</html>