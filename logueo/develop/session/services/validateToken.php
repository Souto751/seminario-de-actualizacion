<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $json_body = file_get_contents('php://input');
        $object = json_decode($json_body);

        $token = $object->token;

        $statement = $con->prepare("CALL validatetoken(?)");
        $statement->bind_param("s", $token);
        $statement->execute();
        $result = $statement->get_result();
        $array = array();

        if($con->affected_rows > 0){
            echo json_encode(array('status' => 'ok', 'valid' => true));
        }else{
            echo json_encode(array('status' => 'ok', 'valid' => false));
        }
        
        $statement->close();
        $con->close();
    }catch(Exception $e){
        echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
    }
?>