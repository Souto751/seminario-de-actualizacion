<?php

    require_once("../utils/connection.php");
    
    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $id_group = $_GET["id_group"];

        $statement = $con->prepare("CALL deleteGroup(?)");
        $statement->bind_param("i", $id_group);
        $statement->execute();
        $result = $statement->get_result();

        if($con->affected_rows > 0) {
            echo json_encode(array('status' => 'ok'));
        }else{
            echo json_encode(array('status' => 'error', 'message' => 'No existe el grupo.'));
        }

        $statement->close();
        $con->close();

    }catch(Exception $e){
        echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
    }

?>