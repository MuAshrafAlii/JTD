<?php

require("../connection.php");
session_start();

$un_email = $_SESSION['username_email'];

$errors = array();


$uploadedFile = $_FILES['imgUploaded'];

$fileName = $uploadedFile['name'];
$fileType = $uploadedFile['type'];
$fileTempName = $uploadedFile['tmp_name'];
$fileErrors = $uploadedFile['error'];
$FileSize = $uploadedFile['size'];

$imgType = explode("/",$fileType)[0];

if($imgType !== "image") {
    $errors[] = "Upload Failed, Only Images are accepted";
    echo json_encode($errors);
    return;
}

if($FileSize > 10000000) {
    $errors[] = "Upload Failed, Image can't exceed 10Mb";
    echo json_encode($errors);
    return;
}

$newName = uniqid() . $fileName;
$fileDestination = "../../imgs/uploadedPics/" . $newName;

if(!file_exists("../../imgs/uploadedPics")) {
    mkdir("../../imgs/uploadedPics");
}

if(count($errors) === 0) {
    move_uploaded_file($fileTempName,$fileDestination);

    $sttmnt = $con->query("UPDATE users SET profile_pic = './assets/imgs/uploadedPics/${newName}' WHERE username = '$un_email' or email = '$un_email'");
    echo json_encode($errors);
}



?>