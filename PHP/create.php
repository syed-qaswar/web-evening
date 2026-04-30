<!-- mysql insert query to add data in the table -->

<?php 
include 'config.php';

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = $_POST['username'];
    $email = $_POST['email'];
    $course = $_POST['course'];

    $sql = "INSERT INTO `students`(`name`, `email`, `course`) VALUES ('$name', '$email', '$course')";

    mysqli_query($conn, $sql);
    header('Location: index.php');
    exit();
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="create.php" method='POST'>
        <input type="text" placeholder="Enter your name" name="username">
        <input type="email" placeholder="Enter your email" name="email">
        <input type="text" placeholder="Enter your Course name" name="course">
        <button type="submit">Submit Form</button>
    </form>
</body>
</html>