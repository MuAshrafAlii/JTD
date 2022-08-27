<?php
require("../connection.php");

$username = $_POST['regUn'];
$firstName = $_POST['regFn'];
$lastName = $_POST['regLn'];
$email = $_POST['regEmail1'];
$password = password_hash($_POST['regPw1'], PASSWORD_DEFAULT);
$profilePicPath = "./assets/imgs/uploadedPics/defaultPP.jpg";



$sttmnt = $con->prepare("INSERT INTO users (username,first_name,last_name,email,password,profile_pic) VALUES (:un,:fn,:ln,:em,:pw,:pp)");

$sttmnt->bindParam(":un", $username);
$sttmnt->bindParam(":fn", $firstName);
$sttmnt->bindParam(":ln", $lastName);
$sttmnt->bindParam(":em", $email);
$sttmnt->bindParam(":pw", $password);
$sttmnt->bindParam(":pp", $profilePicPath);

$sttmnt->execute();

session_start();

$_SESSION['username_email'] = $username;

?>