<?php
    require("../connection.php");
    session_start();

    $un_email = $_SESSION['username_email'];

    $sttmnt = $con->query("SELECT * FROM users WHERE username = '$un_email' OR email = '$un_email'");

    echo json_encode($sttmnt->fetch());


?>