<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wyświetlanie ocen ucznia</title>
        <meta name="author" content="Szymon Kalinowski">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

        <form action="index.php" method="post">
            <label>Wyświetl ocenę ucznia: </label><input type="text" name="klasa">
            <input type="submit" value="Pokaz klase">
        </form>

    </body>
</html>
<?php

    /*
    Połączenie zewnętrznego pliku php include "dbconnect.php"; lub require "dbconnect.php";
    require_once "dbconnect.php"; Ta komnda spowoduje e jeśli w przyszłości chemy podpiąc te same pliki to tylko spowoduje podpięcie jednego pliku

    */


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "szkola08062022";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if form was submitted
    if(isset($_POST['klasa'])) {
        // Sanitize input (you should use prepared statements instead)
        $klasa = $_POST['klasa'];

        // SQL query with prepared statement
        $sql = "SELECT * FROM `uczen` WHERE srednia_ocen = ?";
        
        // Prepare statement
        $stmt = $conn->prepare($sql);
        if ($stmt === false) {
            die("Prepare failed: (" . $conn->errno . ") " . $conn->error);
        }
        
        // Bind parameter and execute statement
        $stmt->bind_param("i", $klasa);
        if ($stmt->execute() === false) {
            die("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        }

        // Get result
        $result = $stmt->get_result();
        
        // Check if there are rows returned
        if ($result->num_rows > 0) {
            // Output data of each row
            while($row = $result->fetch_assoc()) {
                echo "Imię: " . $row["imie"]. " - Nazwisko: " . $row["nazwisko"]. " - Średnia ocen: " . $row["srednia_ocen"]. "<br>";
            }
        } else {
            echo "Brak wyników dla średniej oceny: $klasa";
        }

        // Close statement
        $stmt->close();
    }

    // Close connection
    $conn->close();

?>