<?php 
include 'config.php';

$id = $_GET['id'];

$result = mysqli_query($conn, "SELECT `name`, `email`, `course` FROM `students` WHERE `id` = $id" );

$student = mysqli_fetch_assoc($result);

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = $_POST['username'];
    $email = $_POST['email'];
    $course = $_POST['course'];

    $sql = "UPDATE `students` set `name` = '$name', `email` = '$email', `course` = '$course' WHERE `id` = $id";

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
    <form action="update.php?id=<?= $id ?>" method ="POST">
        <input type="text" name='username' value="<?= $student['name'] ?>">
        <input type="email" name='email' value="<?= $student['email'] ?>">
        <input type="text" name='course' value="<?= $student['course'] ?>">
        <button type="submit">Update Data</button>
    </form>
</body>
</html>