<?php
    header('Access-Control-Allow-Origin: *');
    $username_login = $_POST['username'];
    $password_login = $_POST['password'];

    $servername = "localhost";
    $username = "username";
    $password = "password";


    //$conn = mysqli_connect($servername, $username, $password);

    if($username_login=="admin" && $password_login=="1234"){
        echo "1";
    }
    else{
        //echo $username_login. . $password_login;
        echo "0";
    }
?>
