<?php

    require_once("../utils/connection.php");
    
    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $name = $_GET["name"];
        $desc = $_GET["desc"];

        $datos = array("name" => $name, "desc" => $desc);

        $statement = $con->prepare("CALL createGroup(?, ?)");
        $statement->bind_param("ss", $datos["name"], $datos["desc"]);
        $statement->execute();
        $result = $statement->get_result();

        $statement->close();
        $con->close();

        echo json_encode(array('status' => 'ok'));

    }catch(Exception $e){
        echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
    }

?>