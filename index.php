<?php
include('views/templates/header.php');

$website = simplexml_load_file('models/source.xml');
switch ($_GET['action']) {
    case '':
        echo $website->page[0]->content;
        break;
    case 0:
        echo $website->page[0]->content;
        break;
    case 1:
        echo $website->page[1]->content;
        break;
    case 2:
        echo $website->page[2]->content;
        break;
    case 3:
        echo $website->page[3]->content;
}

include('views/templates/footer.php');

?>