<?php

/* $dbUsername = "iIlnb5AXXG";
$dbPassword = "FxeJChwiaY";
$dbName = "iIlnb5AXXG";
$host = "remotemysql.com"; */
$dbUsername = "root";
$dbPassword = "";
$dbName = "jtd";
$host = "localhost";

try {
$con = new PDO("mysql:host=${host};dbname=${dbName}",$dbUsername,$dbPassword, [
    PDO::FETCH_ASSOC
]);
} catch(PDOException $e) {
    die();
}





?>