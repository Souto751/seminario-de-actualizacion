<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $statement = $con->prepare("CALL getUsers()");
        $statement->execute();
        $result = $statement->get_result();
        $array = array();

        if($con->affected_rows > 0){
            while($data = $result->fetch_assoc()){
                foreach($data as $value){
                    array_push($array, $value);
                }
            }
            echo json_encode($array);
            
        }else{
            echo json_encode("Error");
        }
        
        $statement->close();
        $con->close();
    }catch(Exception $e){
        echo $e;
    }
?>