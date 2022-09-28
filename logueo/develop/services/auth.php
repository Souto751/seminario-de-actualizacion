<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $user = $_GET["user"];
        $pass = $_GET["pass"];

        $datos = array("user" => $user, "pass" => $pass);

        $statement = $con->prepare("CALL auth_normal(?, ?)");
        $statement->bind_param("ss", $datos["user"], $datos["pass"]);
        $statement->execute();
        $result = $statement->get_result();
        $array = array();

        if($con->affected_rows > 0){
            while($data = $result->fetch_assoc()){
                array_push($array, $data);
            }
            echo json_encode(array('status' => 'ok', 'data' => $array));
            
        }else{
            echo json_encode(array('status' => 'ok', 'data' => array()));
        }
        
        $statement->close();
        $con->close();
    }catch(Exception $e){
        echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
    }
?>