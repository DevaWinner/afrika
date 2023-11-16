<?php
require './vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Function to sanitize and validate input
    function sanitize_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Collect and sanitize form data
    $fname = sanitize_input($_POST["fname"]);
    $lname = sanitize_input($_POST["lname"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = sanitize_input($_POST["phone"]);
    $message = sanitize_input($_POST["message"]);

    // Validate form data
    $errors = [];

    if (empty($fname)) {
        $errors[] = "First Name is required";
    }

    if (empty($lname)) {
        $errors[] = "Last Name is required";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid Email format";
    }

    if (empty($errors)) {
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = 'mail.inclusionafrika.org';
            $mail->SMTPAuth = true;
            $mail->Username = 'submissions@inclusionafrika.org';
            $mail->Password = 'InclusionAfrika2023';
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            // Sender and recipient settings
            $mail->setFrom($email, $fname . ' ' . $lname);
            $mail->addAddress('winneraaniekan@gmail.com', 'Aniekan Winner');
            $mail->isHTML(false);

            // Content
            $mail->Subject = 'New Form Submission from ' . $fname . ' ' . $lname;
            $mail->Body = "First Name: $fname\n"
                . "Last Name: $lname\n"
                . "Email: $email\n"
                . "Phone: $phone\n"
                . "Message:\n$message";

            $mail->send();
            echo "success";
        } catch (Exception $e) {
            echo "error: " . $mail->ErrorInfo;
        }
    } else {
        // Return validation errors
        echo implode("\n", $errors);
    }
}
?>
