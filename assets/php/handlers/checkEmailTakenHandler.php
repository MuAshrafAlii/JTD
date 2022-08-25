<?php

require_once("../connection.php");

$sttmnt = $con ->prepare("SELECT email FROM users WHERE email = (:email)");

$sttmnt->bindParam(":email", $_POST['regEmail']);

$sttmnt->execute();

echo $sttmnt->rowCount();

?>