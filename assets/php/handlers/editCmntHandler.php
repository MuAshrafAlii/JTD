<?php
require("../connection.php");
session_start();

$oldCmnt = $_POST['oldcmnt'];
$newCmnt = $_POST['newCmnt'];

$sttmnt = $con->prepare("UPDATE comments SET comment= (:newCmnt) WHERE comment = (:oldCmnt)");

$sttmnt->bindParam(":oldCmnt", $oldCmnt);
$sttmnt->bindParam(":newCmnt", $newCmnt);

$sttmnt->execute();

?>