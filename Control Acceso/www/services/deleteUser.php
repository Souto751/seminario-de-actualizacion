<?php

    require_once("../utils/connection.php");
    
    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $id_user = $_GET["id_user"];

        $statement = $con->prepare("CALL deleteUser(?)");
        $statement->bind_param("i", $id_user);
        $statement->execute();
        $result = $statement->get_result();

        if($con->affected_rows > 0) {
            echo json_encode(array('status' => 'ok'));
        }else{
            echo json_encode(array('status' => 'error', 'message' => 'No existe el usuario.'));
        }

        $statement->close();
        $con->close();

    }catch(Exception $e){
        echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
    }

?>