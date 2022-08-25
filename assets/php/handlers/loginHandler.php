<?php

include("../connection.php");

$logUn_email = $_POST['logUn_email'];
$pwSubmitted = $_POST['logPw'];

$passwordQuery = $con->query("SELECT password FROM users WHERE username = '$logUn_email' OR email = '$logUn_email'");


$dbPw = $passwordQuery->fetch()[0] ?? '';



$sttmnt = $con->prepare("SELECT * FROM users WHERE username = (:logUn) OR email = (:logEmail)");
$sttmnt->bindParam(":logUn", $logUn_email);
$sttmnt->bindParam(":logEmail", $logUn_email);
$sttmnt->execute();

if(password_verify($pwSubmitted,$dbPw)) {
    $_SESSION['username'] = $logUn_email;
    echo "found user";
}
else {
    echo "not found";
}


?>