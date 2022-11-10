<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $json_body = file_get_contents('php://input');
        $object = json_decode($json_body);

        $user = $object->user;
        $pass = $object->pass;

        $encrypt_pass = hash('sha256', $pass);

        $statement = $con->prepare("CALL register(?, ?)");
        $statement->bind_param("ss", $user, $encrypt_pass);
        $statement->execute();
        $result = $statement->get_result();
        $array = array();

        if($con->affected_rows > 0){
            echo json_encode(array('status' => 'ok', 'message' => 'User created successfully'));
        }else{
            echo json_encode(array('status' => 'error', 'message' => 'Invalid user/password!'));
        }
        
        $con->close();
    }catch(Exception $e){
        echo json_encode(array('status' => 'error', 'message' => "Error inesperado"));
    }
?>