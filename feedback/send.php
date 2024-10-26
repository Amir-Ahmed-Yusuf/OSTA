<?php
$servername = "localhost";
$username = "root";
$password = "";
$db_name = "feedback";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db_name);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user = $_POST["username"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Prepared statement to avoid SQL injection
    $stmt = $conn->prepare("INSERT INTO greetings (username, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $user, $email, $message);

    if ($stmt->execute()) {
        echo "Data added successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Invalid request method";
}

// Close connection
$conn->close();
?>
