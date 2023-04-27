# Site "Library"

## 1 Installation locale de l'api

### 1.1 Introduction

Une image laradock Docker est utilisée pour le déploiement du projet en locale (https://laradock.io/) (Apache 2, MySQL, Redis, PHP 7.4.*).

La version de Laravel (10.*) et des paquets est définie par le fichier composer.json.

Pour cet exemple d'installation le repository Laradock de ce projet est installé dans le répertoire `C:\projects\libdock`. Pour d'autres emplacement il faudra adapter les commandes ou configurations qui suivent dans cette guide.

### 1.2 Installation de ce repository

Se déplacer dans le répertoire de base des projets.

```
cd C:\projects
```

Télécharger le répository laradock dans `./libdock`.

```
git clone https://github.com/Laradock/laradock.git ./libdock
```

### 1.3 Installation et configuration laradock

Se déplacer dans le répertoire du projet laradock.

```
cd C:\projects\libdock
```

Copier le fichier de configuration d'exemple.

```
copy .env.example .env
```

Modifier le fichier de configuration .env (les fichiers qui se trouvent dans `C:\projects\Library` sont mis dans `/var/www` dans l'image docker).

```
APP_CODE_PATH_HOST=../Library/api/
PHP_VERSION=8.2
MYSQL_DATABASE=*au choix*
MYSQL_USER=*au choix*
MYSQL_PASSWORD=*au choix*
```



Copiez la configuration d'Apache ci-dessous dans ```apache2/sites/default.apache.conf```.

```
<VirtualHost *:80>
  ServerName laradock.test
  DocumentRoot /var/www/public
  Options Indexes FollowSymLinks

  <Directory "/var/www/public">
    AllowOverride All
    <IfVersion < 2.4>
      Allow from all
    </IfVersion>
    <IfVersion >= 2.4>
      Require all granted
    </IfVersion>
  </Directory>

  ErrorLog /var/log/apache2/error.log
  CustomLog /var/log/apache2/access.log combined
</VirtualHost>
```

### 1.4 Contruction de l'image docker

Se déplacer dans le répertoire du projet laradock.

```
cd C:\projects\libdock
```

Exécuter la ligne de commande suivante.

```
docker-compose up -d apache2 mysql phpmyadmin workspace
```

Cette commande va construire et démarrer les images suivantes :

- MySQL (host pour l'accès avec un outil MySQL `localhost:3306`).
- phpMyAdmin (URL d'accès `<a href="http://localhost:8081/">http://localhost:8081/</a>`).
- Serveur Apache (accès navigateur par URL `http://localhost` ou `https://localhost`).
- Serveur Redis.
- Serveur workspace (contient des outils pour le développement comme composer et node.js).
- Serveur e-mail test MailHog (URL d'accès `http://localhost:1025/`).


### 1.5 Configuration Laravel

Se déplacer dans le bon répertoire.

```
cd C:\projects\Library\api
```

Utiliser la configuration pour le serveur locale.

```
copy .env.example .env
```

### 1.6 Installation paquets Laravel

Se déplacer dans le bon répertoire.

```
cd C:\projects\Library\api
```
Ouvrir une CLI de l'image docker `workspace`.

```
docker exec -i -t laradock_workspace_1 bash
```

Installer les paquets selon le fichier composer.lock.

```
composer install 
```

### 1.7 Initialisation et visualisation de la base de données

#### Informations pour la connexion avec phpMyAdmin
à changer dans le `.env`

- DB_DATABASE=*choisi précédemment*
- DB_USERNAME=*choisi précédemment*
- DB_PASSWORD=*choisi précédemment*

#### Création des tables

Utiliser les fichiers de migration présents dans `database/migrations` et `database/seeds` pour générer les tables et des données avec la commande :

```
php artisan migrate:fresh --seed
```

### 1.8 Naviguer

Les routes définies dans Laravel pour l'api se trouve dans se trouvent dans le fichier `routes/api.php`.

## 2 Lancement de l'application

Pour lancer l'application il vous faudra être dans le répertoire `C:\projects\Library` et lancer la commande suivante :

```
npm start
```