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
        $data = $result->fetch_assoc();

        $statement->close();
        $con->close();

        echo json_encode("Success");

    }catch(Exception $e){
        echo $e;
    }

?>