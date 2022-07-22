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
        $data = $result->fetch_assoc();

        $statement->close();
        $con->close();

        echo json_encode("Success");

    }catch(Exception $e){
        echo $e;
    }

?>