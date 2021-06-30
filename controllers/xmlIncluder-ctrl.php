<?php
$website = simplexml_load_file('source.xml');
echo $website->page[0]->content;