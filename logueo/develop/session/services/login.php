<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $json_body = file_get_contents('php://input');
        $object = json_decode($json_body);

        $user = $object->user;
        $pass = $object->pass;

        $encrypt_pass = hash('sha256', $pass);

        $statement = $con->prepare("CALL auth(?, ?)");
        $statement->bind_param("ss", $user, $encrypt_pass);
        $statement->execute();
        $result = $statement->get_result();
        $array = array();

        if($con->affected_rows > 0){
            $data = $result->fetch_assoc();

            if(strlen($data["token"]) === 0 && is_null($data["token"])){
                $token = hash('sha256', $user.$pass);

                try{
                    $statement->close();
                    $statement2 = $con->prepare("CALL createtoken(?, ?)");
                    $statement2->bind_param("is", $array["id"], $token);
                    $statement2->execute();
                }catch(Exception $e){
                    throw $e;
                }

            }else{
                try{
                    $statement->close();
                    $statement2 = $con->prepare("CALL validatetoken(?)");
                    $statement2->bind_param("s", $token);
                    $statement2->execute();
                    $result2 = $statement2->get_result();

                    if($con->affected_rows > 0){
                        $data = $result->fetch_assoc();
                        if(strlen($data["token"]) != 0){
                            $statement2->close();
                            $statement3 = $con->prepare("CALL updatetoken(?, ?)");
                            $statement3->bind_param("is", $array["id"], $token);
                            $statement3->execute();
                            $statement3->close();
                        }
                    }else{
                        $statement2->close();
                    }

                }catch(Exception $e){
                    throw $e;
                }

                $token = $data["token"];
            }
            

            echo json_encode(array('status' => 'ok', 'token' => $token));
            $statement2->close();
        }else{
            echo json_encode(array('status' => 'error', 'message' => 'Invalid user/password!'));
        }
        
        $con->close();
    }catch(Exception $e){
        echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
    }
?>