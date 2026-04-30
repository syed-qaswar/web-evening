<!-- connection with MySQL -->
<?php 
$server = 'localhost';
$username = 'root';
$password = '';
$dbname = 'evening_db';

$conn = mysqli_connect($server, $username, $password, $dbname);

if(!$conn){
    die('Connection Failed');
}



?>