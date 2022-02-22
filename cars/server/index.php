<?php
require 'db.php';


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$sql = "SELECT cars.id,
cars.image,
cars.year,
cars.doors,
cars.Maximum_speed,
producer.name as producer,
producer.icon
FROM cars 
inner join producer on cars.car_id = producer.id;";

$result = mysqli_query($conn, $sql);

$data = array();

while($row = mysqli_fetch_array($result)){
    $data[] = $row;
}

echo json_encode($data);

?>