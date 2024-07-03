<?php

require_once "config.php";

try{
    $pdo = new PDO("mysql:host=" . DB_SERVER . ";dbname=" . DB_NAME , DB_USERNAME , DB_PASSWORD);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
}



?>