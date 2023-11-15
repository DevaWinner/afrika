<?php
    // Check if form is submitted
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get form data
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

        // Connect to the database
        $servername = "localhost";
        $username = "username";
        $password = "password";
        $dbname = "myDB";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email, phone, message) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $fname, $lname, $email, $phone, $message);

        // Execute the prepared statement
        $stmt->execute();

        echo "New record created successfully";

        // Close the connections
        $stmt->close();
        $conn->close();
    }
?>
