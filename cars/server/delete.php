<?php
require 'db.php';


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin,access-control-allow-headers');
header("Access-Control-Allow-Methods: *");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

if(isset($data)){

$sql = "DELETE FROM cars WHERE id =$data";

$result = mysqli_query($conn, $sql);
}


?>