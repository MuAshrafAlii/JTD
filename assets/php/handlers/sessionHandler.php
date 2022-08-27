<?php
    session_start();

    if(isset($_POST['logout'])) {
        session_destroy();
    }
    
    if(isset($_SESSION['username_email'])) {
        echo "user logged";
    }


?>