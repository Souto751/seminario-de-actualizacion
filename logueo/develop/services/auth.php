<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $user = $_GET["user"];
        $pass = $_GET["pass"];

        $statement = $con->prepare("CALL authnormal(?, ?)");
        $statement->bind_param("ss", $user, $pass);
        $statement->execute();
        $result = $statement->get_result();
        $array = array();

        if($con->affected_rows > 0){
            while($data = $result->fetch_assoc()){
                array_push($array, $data);
            }
            echo json_encode(array('status' => 'ok', 'data' => $array));
            
        }else{
            echo json_encode(array('status' => 'error', 'message' => 'Invalid user/password!'));
        }
        
        $statement->close();
        $con->close();
    }catch(Exception $e){
        echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
    }
?>