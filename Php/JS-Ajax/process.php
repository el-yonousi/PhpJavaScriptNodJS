<?php

// connect to db
$conn = mysqli_connect('localhost', 'root', '', 'ajaxDB');

echo 'Processing...';

//check for POST variables
if (isset($_POST['name'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $query  = "INSERT INTO users(name) VALUES('$name')";
    if (mysqli_query($conn, $query)) {
        echo 'user added...';
    } else {
        echo 'ERROR: ' . mysqli_error($conn);
    }
    echo 'GET: Your name is ' . $_POST['name'];
}

//check for GET variables
if (isset($_GET['name'])) {
    echo 'GET: Your name is ' . $_GET['name'];
}
