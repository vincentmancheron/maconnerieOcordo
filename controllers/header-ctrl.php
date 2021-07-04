<?php
    // Création des pages:
    $website = simplexml_load_file(dirname(__FILE__).'/../models/source.xml');
    $home = $website->page[0]->menu;
    $about = $website->page[1]->menu;
    $opinion = $website->page[2]->menu;
    $contact = $website->page[3]->menu;
    // Fin Création des pages
    // Génération du titre de la page:
    if (isset($_GET['action'])) {
        switch ($_GET['action']) {
            case 0:
                $title = $website->page[0]->title;
                
                break;
            case 1:
                $title = $website->page[1]->title;
                
                break;
            case 2:
                $title = $website->page[2]->title;
                
                break;
            case 3:
                $title = $website->page[3]->title;
                
        }
    } else {
        $title = $website->page[0]->title;
        $nav = $website->page[0]->menu;
    }
    // Fin Génération du titre de la page