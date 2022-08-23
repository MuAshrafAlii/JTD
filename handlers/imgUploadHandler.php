<?php

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

$fileDestination = "../assets/uploads/" . uniqid() . $fileName;

if(!file_exists("../assets/uploads")) {
    mkdir("../assets/uploads");
}

if(count($errors) === 0) {
    move_uploaded_file($fileTempName,$fileDestination);
    echo json_encode($errors);
}



?>