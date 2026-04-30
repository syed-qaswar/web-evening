<?php 
// read and delete data
include 'config.php';

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
            <td><?php echo $row['id']; ?> </td>
            <td><?php echo $row['name']; ?> </td>
            <td><?php echo $row['email']; ?> </td>
            <td><?php echo $row['course']; ?> </td>
            <td><?php echo $row['created_at']; ?> </td>
        </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>
