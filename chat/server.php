<?php 

$messages = array(); # Es una variable a modo de ejemplo, para no estar modelando la base de datos

function connect_user($id_user_a, $id_user_b){
    # Se deberia traer el usuario de la base de datos
    return generate_key('A', 'B');
}

function disconnect_user($id_user_a, $id_user_b){
    // Se deberia eliminar de la base de datos la key del usuario, y retornar algun valor para que la pagina sepa que se desconecto
    return "";
}

function send_message($id_user_sender, $id_user_target, $body_message){
    # Se deberia guardar el mensaje en una base de datos
    $message = array('sender' => $id_user_sender, 'target' => $id_user_target, 'message' => $body_message);
    $messages[] = $message; # En lugar de guardarlo en un array, se deberia guardar en la BD
    return array('status' => 'ok', 'data' => $message);
}

function generate_key($id_user_sender, $id_user_target){
    # Se deberia guardar la key en la base de datos, asociada al usuario
    return hash('sha256', uniqid());
}

function get_messages($id_user){
    # Leer de la base de datos los mensajes correspondientes al usuario
    $user = $id_user;
    $user_messages = array_filter($messages, function($value) {
        return $user == $value['sender'];
    }, ARRAY_FILTER_USE_KEY);
    return $messages; # Deberia retornar mensajes de la BD
}

function validate_key($id_user, $key){
    # Se deberia validar que la key existe para el usuario en cuestion
    return !is_null($id_user) && !is_null($key);
}

?>