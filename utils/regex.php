<?php
define('regAlpha','[a-zA-Zéèçàùâêîûüëï ,\'"]*');
define('regNumber','\d{10}');
define('regPhoneNumber','(0|\+33)[1-9]( *[0-9]{2}){4}');
define('regEmail','[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}');