<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $idGroup = $_GET["id_group"];

        $statement = $con->prepare("CALL getMembersFromGroup(?)");
        $statement->bind_param("i", $idGroup);
        $statement->execute();
        $result = $statement->get_result();
        $array = array();

        if($con->affected_rows > 0){
            while($data = $result->fetch_assoc()){
                foreach($data as $value){
                    array_push($array, $value);
                }
            }            
        }
        echo json_encode($array);
        
        $statement->close();
        $con->close();
    }catch(Exception $e){
        echo $e;
    }
?>