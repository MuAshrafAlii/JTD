<?php

require("../connection.php");
session_start();

$cmnt = $_POST['cmnt'];

$sttmnt = $con->prepare("DELETE FROM comments WHERE comment = (:cmnt)");

$sttmnt->bindParam(":cmnt",$cmnt);

$sttmnt->execute();


?>