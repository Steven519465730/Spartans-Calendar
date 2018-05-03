<?php
$servername = "localhost";
$username = "root";
$password = "micemice123";
$dbname = "Local instance MySQL57";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
} 

// sql table
create table userinfo
(
    user_id int PRIMARY KEY,
    username varchar(20) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(32) NOT NULL,
    create_time timestamp
);

if ($conn->query($sql) === TRUE) 
{
    echo "Table 'userinfo' created successfully";
} else 
{
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
