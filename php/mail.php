<?php


$errorMSG = "";
$name = "";
$phone = "";
$email = "";
$address = "";
$designation = "";
$date = "";


/* NAME */
if (empty($_POST["name"])) {
    $errorMSG = "<li>Name is required</<li>";
} else {
    $name = $_POST["name"];
}


/* EMAIL */
if (empty($_POST["email"])) {
    $errorMSG .= "<li>Email is required</li>";
}else {
    $email = $_POST["email"];
}


/* MSG SUBJECT */
if (empty($_POST["phone"])) {
    $errorMSG .= "<li>Subject is required</li>";
} else {
    $phone = $_POST["phone"];
}


/* MESSAGE */
if (empty($_POST["address"])) {
    $errorMSG .= "<li>Message is required</li>";
} else {
    $address = $_POST["address"];
}

if (empty($_POST["address"])) {
    $errorMSG .= "<li>Message is required</li>";
} else {
    $address = $_POST["address"];
}

if (empty($_POST["designation"])) {
    $errorMSG .= "<li>Message is required</li>";
} else {
    $designation = $_POST["designation"];
}

if (empty($_POST["date"])) {
    $errorMSG .= "<li>Message is required</li>";
} else {
    $date = $_POST["date"];
}



    $msg = "Name:" . $name . "\nAddress: " . $address . "\nPhone: " . $phone . "\nEmail: " . $email . "\nDesignation: " . $designation . "\nDate: " . $date;

    mail("info@drmanusurendher.com","New registration",$msg);
?>