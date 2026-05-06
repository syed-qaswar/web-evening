<?php 
// read and delete data
include 'config.php';

if(isset($_GET['delete'])){
    $id = $_GET['delete'];

    $sql = "DELETE FROM `students` WHERE `id` = $id";

    mysqli_query($conn, $sql);
    header('Location:index.php');
    exit();
}

$sql = "SELECT * FROM `students`";
$result = mysqli_query($conn, $sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> -->

    <style>
        table{border: 1px solid black; border-collapse: collapse;}
        th, td{padding: 10px 12px; border: 1px solid black;}
        th{background: rgb(43, 144, 43); color: #ffffff;}
        td:hover{background: rgb(241, 240, 240);}
    </style>
</head>
<body>
    <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>course</th>
            <th>created at</th>
        </tr>

        <?php while($row = mysqli_fetch_assoc($result)): ?>
        <tr>    
            <td><?= $row['id']; ?> </td>
            <td><?= $row['name']; ?> </td>
            <td><?= $row['email']; ?> </td>
            <td><?= $row['course']; ?> </td>
            <td><?= $row['created_at']; ?> </td>
            <td><a href="update.php?id=<?= $row['id'] ?>">Update</a></td>
            <td><a href="index.php?delete=<?= $row['id'] ?>" onclick="return confirm('Do you want to delete this student?')">Delete</a></td>
        </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>
