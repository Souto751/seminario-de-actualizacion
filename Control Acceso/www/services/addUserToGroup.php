<?php

    require_once("../utils/connection.php");
    
    $input = json_decode( file_get_contents('php://input') );

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $idUser = $_GET["id_user"];
        $idGroup = $_GET["id_group"];

        $datos = array("id_user" => $idUser, "id_group" => $idGroup);

        $statement = $con->prepare("CALL addUserToGroup(?, ?)");
        $statement->bind_param("ii", $datos["id_user"], $datos["id_group"]);
        $statement->execute();
        $result = $statement->get_result();

        $statement->close();
        $con->close();

        echo json_encode(array('status' => 'ok'));

    }catch(Exception $e){
        $message = $e;
        echo json_encode(array('status' => 'error', 'message' => $message->getMessage()));
    }

?>