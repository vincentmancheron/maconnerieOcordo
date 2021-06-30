<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="/assets/css/style.css">
    <title>Maçonnerie Ocordo</title>
    <meta name="description" content="Yo Mec">
</head>
<body>
    <header>

    </header>
    <main>
    <!-- <?php include(dirname(__FILE__).'/navBar.php)') ?> -->
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto w-75 justify-content-around">
                        <li class="nav-item">
                            <a class="nav-link" href="#index.php?action=0">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#index.php?action=1">Qui sommes nous</a>
                        </li>
                        <div><img src="/assets/img/logo.png" height="50" width="50"></div>
                        <li class="nav-item">
                            <a class="nav-link" href="#index.php?action=2">Nos clients témoignent</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#index.php?action=3">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

<?php
// include(dirname(__FILE__).'/views/templates/header.php)');

$website = simplexml_load_file('models/source.xml');
echo $website->page[0]->content;

// include(dirname(__FILE__).'/views/templates/footer.php)');
echo $_SERVER['REQUEST_URI'];
?>