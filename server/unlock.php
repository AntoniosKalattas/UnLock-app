<?php
    header('Access-Control-Allow-Origin: *');
    $unlock_state = $_POST['unlock_state'];
    if($unlock_state=='true'){
        unlock();
    }
    else{
        lock();
    }

    function unlock(){
        echo"unlocked";   
    }

    function lock(){
        echo"locked";
    }
?>
