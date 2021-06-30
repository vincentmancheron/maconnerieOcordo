<?php
// Declarations:
$error = [];
$name = trim(filter_input(INPUT_POST, 'your-name', FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES));
$email = trim(filter_input(INPUT_POST, 'your-email', FILTER_SANITIZE_EMAIL));
$phoneNumber = trim(filter_input(INPUT_POST, 'your-tel-615', FILTER_SANITIZE_NUMBER_INT));
$subject = trim(filter_input(INPUT_POST, 'your-subject', FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES));
$city = trim(filter_input(INPUT_POST, 'your-ville', FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES));
$text = trim(filter_input(INPUT_POST, 'your-message', FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES));
$vars = ['name'=>$name,'email'=>$email,'phoneNumber'=>$phoneNumber,'subject'=>$subject,'city'=>$city,'text'=>$text];
$requiredVars = ['name'=>$name,'phoneNumber'=>$phoneNumber,'text'=>$text];
// End Declarations

// Checking:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Empty Check:
    foreach($requiredVars as $key => $value) {
        if (empty($value)) {
            $error['empty'][$key] = "";
        }
    }
    // End Empty Check
    // RegMatch Check:
    foreach($vars as $key => $value) {
        switch ($value) {
            case ($value == $name || $value == $subject || $value == $city || $value == $text):
                if (preg_match('/'.regAlpha.'/',$value)) {
                    $error['regMatch'][$key] = "";
                }
                break;
            case ($value == $email):
                if (preg_match('/'.regEmail.'/',$value)) {
                    $error['regMatch'][$key] = "";
                }
                break;
            case ($value == $phoneNumber):
                if (preg_match('/'.regNumber.'/',$value)) {
                    $error['regMatch'][$key] = "";
                }
        }
    }
    // End RegMatch Check
    // Length Check:
    foreach($Vars as $key => $value) {
        switch ($value) {
            case ($value == $name || $value == $email || $value == $subject || $value == $city):
                if(strlen($value)<2 || strlen($value)>70) {
                    $error['length'][$key] = "";
                }
                break;
            case ($value == $phoneNumber):
                if(strlen($value) == 10) {
                    $error['length'][$key] = "";
                }
                break;
            case ($value == $text):
                if(strlen($value) > 500) {
                    $error['length'][$key] = "";
                }
        }
    }
    // End Length Check
}
// End Checking