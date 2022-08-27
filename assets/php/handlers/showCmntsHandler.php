<?php
require "../connection.php";

session_start();

$currentUn_email = $_SESSION['username_email'];

$currentUserCmntsQ = $con->query("SELECT u.id,first_name,last_name,profile_pic,comment FROM users as u INNER JOIN comments as c ON u.id = c.user_id ORDER BY CASE WHEN (u.username= '$currentUn_email' OR u.email = '$currentUn_email') THEN 1 ELSE 2 END, c.date DESC");

echo json_encode($currentUserCmntsQ->fetchAll());

?>