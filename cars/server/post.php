<?php
require 'db.php';


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$car_id = $data->car_id;
$image = $data->image;
$year = $data->year;
$doors = $data->doors;
$Maximum_speed = $data->Maximum_speed;

echo json_encode($request_body);
if(isset($data)){

$sql = "insert into cars(car_id, image , year , doors , Maximum_speed)
values($car_id, '$image', $year, $doors, $Maximum_speed );";

$result = mysqli_query($conn, $sql);
}


?>