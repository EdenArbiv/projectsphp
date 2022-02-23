<?php 

$conn = mysqli_connect("localhost", "username","");
$db = mysqli_select_db($conn, "vehicles");

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
?>

