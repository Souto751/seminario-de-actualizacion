<?php 
include_once("./server.php");

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

# Si la key es valida, se envia un mensaje
if(validate_key($object->sender, $object->key)){
    $data = send_message($object->sender, $object->target, $object->message);
}else{
    $data = array('status' => 'error', 'message' => 'invalid user');
}



echo json_encode($data);

?>