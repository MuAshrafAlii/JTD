<?php

require_once("../connection.php");

$sttmnt = $con ->prepare("SELECT username FROM users WHERE username = (:un)");

$sttmnt->bindParam(":un", $_POST['regUn']);

$sttmnt->execute();

echo $sttmnt->rowCount();

?>