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
        $data = $result->fetch_assoc();

        $statement->close();
        $con->close();

        echo json_encode("Success");

    }catch(Exception $e){
        echo $e;
    }

?>