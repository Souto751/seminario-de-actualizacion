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
        $data = $result->fetch_assoc();

        $statement->close();
        $con->close();

        echo json_encode("Success");

    }catch(Exception $e){
        echo $e;
    }

?>