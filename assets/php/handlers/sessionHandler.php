<?php
    session_start();

    if(isset($_SESSION['username_email'])) {
        echo "user logged";
    }

    if(isset($_POST['logout'])) {
        session_destroy();
    }


?>