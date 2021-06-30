<?php
include(dirname(__FILE__).'/views/templates/header.php');

$website = simplexml_load_file('models/source.xml');

if(isset($_GET['action'])){
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
}else{
    echo $website->page[0]->content;
}


include('views/templates/footer.php');

?>