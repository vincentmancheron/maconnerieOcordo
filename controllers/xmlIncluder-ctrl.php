<?php
$website = simplexml_load_file(dirname(__FILE__).'/../models/source.xml');
if (isset($_GET['action'])) {
    switch ($_GET['action']) {
        case 0:
            echo '<div id="p0">'.$website->page[0]->content.'</div>';
            break;
        case 1:
            echo '<div id="p2">'.$website->page[1]->content.'</div>';
            break;
        case 2:
            echo '<div id="p2">'.$website->page[2]->content.'</div>';
            break;
        case 3:
            echo '<div id="p3">'.$website->page[3]->content.'</div>';
    }
} else {
    echo '<div id="p0">'.$website->page[0]->content.'</div>';
}