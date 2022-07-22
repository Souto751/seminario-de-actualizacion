<?php

    require_once("../utils/connection.php");
    
    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $id_user = $_GET["id_user"];
        $user = $_GET["user"];
        $pass = $_GET["password"];

        $pass = password_hash($pass, PASSWORD_DEFAULT);

        $datos = array("id_user" => $id_user, "user" => $user, "pass" => $pass);

        $statement = $con->prepare("CALL editUser(?, ?, ?)");
        $statement->bind_param("iss", $datos["id_user"], $datos["user"], $datos["pass"]);
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