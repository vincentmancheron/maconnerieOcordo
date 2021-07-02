<?php
// Appel du controller pour les titres des pages:
include(dirname(__FILE__).'/controllers/header-ctrl.php');

// Génération du Head:
include(dirname(__FILE__).'/views/templates/header.php');

// Appel du controller pour générer la page:
include(dirname(__FILE__).'/controllers/xmlIncluder-ctrl.php');

// Génération du Footer:
include(dirname(__FILE__).'/views/templates/footer.php');