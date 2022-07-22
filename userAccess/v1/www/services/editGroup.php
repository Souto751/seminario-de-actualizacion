<?php

    require_once("../utils/connection.php");
    
    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $id_group = $_GET["id_group"];
        $name = $_GET["name"];
        $desc = $_GET["desc"];

        $datos = array("id_group" => $id_group, "name" => $name, "desc" => $desc);

        $statement = $con->prepare("CALL editGroup(?, ?, ?)");
        $statement->bind_param("iss", $datos["id_group"], $datos["name"], $datos["desc"]);
        $statement->execute();
        $result = $statement->get_result();
        $data = $result->fetch_assoc();

        $statement->close();
        $con->close();

        echo json_encode($data);

    }catch(Exception $e){
        echo $e;
    }

?>