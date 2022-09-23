<?php

    class connection{
        private $conn;

        public function __construct()
        {
            $this->conn = new mysqli('localhost', 'root', 'root', 'useraccess');
        }

        public function get_connection()
        {
            return $this->conn;
        }
    };

?>