<?php

    require_once("../utils/connection.php");
    
    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $user = $_GET["user"];
        $pass = $_GET["password"];

        $pass = password_hash($pass, PASSWORD_DEFAULT);

        $datos = array("user" => $user, "pass" => $pass);

        $statement = $con->prepare("CALL createUser(?, ?)");
        $statement->bind_param("ss", $datos["user"], $datos["pass"]);
        $statement->execute();
        $result = $statement->get_result();

        $statement->close();
        $con->close();
                
        echo json_encode(array('status' => 'ok'));


    }catch(Exception $e){
        echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
    }

?>