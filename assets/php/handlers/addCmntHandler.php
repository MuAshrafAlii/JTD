<?php
require "../connection.php";

session_start();

$currentUn_email = $_SESSION['username_email'];

$currentId = $con->query("SELECT id FROM users WHERE username = '$currentUn_email' OR email = '$currentUn_email'")->fetch()['id'];

$comment = $_POST['myCmnt'];

$insertQuery = $con->prepare("INSERT INTO comments (user_id,comment) VALUES ('$currentId',:comment)");

$insertQuery->bindParam(":comment", $comment);

$insertQuery -> execute();

echo "tmam ya zmeely";

?>