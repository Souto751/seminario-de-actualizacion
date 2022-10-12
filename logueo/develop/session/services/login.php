<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $user = $_GET["user"];
        $pass = $_GET["pass"];

        $statement = $con->prepare("CALL auth(?, ?)");
        $statement->bind_param("ss", $user, $pass);
        $statement->execute();
        $result = $statement->get_result();
        $array = array();

        if($con->affected_rows > 0){
            while($data = $result->fetch_assoc()){
                array_push($array, $data);
            }
            $token = hash('sha256', $data[0]["username"].$data[0]["pass"]);

            try{
                $statement->close();
                $statement2 = $con->prepare("CALL createtoken(?, ?)");
                $statement2->bind_param("is", $array[0]["id"], $token);
                $statement2->execute();
            }catch(Exception $e){

            }
            

            echo json_encode(array('status' => 'ok', 'token' => $token));
            $statement2->close();
        }else{
            echo json_encode(array('status' => 'error', 'message' => 'Invalid user/password!'));
        }
        
        $con->close();
    }catch(Exception $e){
        echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
    }
?>