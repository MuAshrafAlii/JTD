<?php

$dbUsername = "root";
$dbPassword = "";

try {
$con = new PDO("mysql:host=localhost;dbname=jtd",$dbUsername,$dbPassword, [
    PDO::FETCH_ASSOC
]);
} catch(PDOException $e) {
    die();
}




?>