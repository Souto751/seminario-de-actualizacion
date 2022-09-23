<?php

    require_once("../utils/connection.php");
    
    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $idUser = $_GET["id_user"];
        $idGroup = $_GET["id_group"];

        $datos = array("id_user" => $idUser, "id_group" => $idGroup);

        $statement = $con->prepare("CALL removeUserFromGroup(?, ?)");
        $statement->bind_param("ii", $datos["id_user"], $datos["id_group"]);
        $statement->execute();
        $result = $statement->get_result();

        if($con->affected_rows > 0) {
            echo json_encode(array('status' => 'ok'));
        }else{
            echo json_encode(array('status' => 'error', 'message' => 'El usuario no se encuentra en el grupo.'));
        }

        $statement->close();
        $con->close();
    }catch(Exception $e){
        echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
    }

?>