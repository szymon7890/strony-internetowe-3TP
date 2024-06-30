<?php

	//$zmienna connection = nowy mysqli("localhost","nazwa użytkownika","hasło","nazwa bazy danych")
	$conn = new mysqli("localhost","root","","biblioteka03112022");
	// Utworzenie nowego połączenia z bazą danych MySQL o nazwie "biblioteka" na localhost, używając nazwy użytkownika "root" i braku hasła

	// Sprawdzenie połączenia
	if ($conn -> connect_errno) {
		// Jeśli wystąpił błąd podczas połączenia, wyświetl komunikat o błędzie
		echo "Failed to connect to MySQL: " . $conn -> connect_error;
		exit();
	}

	// SQL query do pobrania danych
	$sql = "SELECT id_klienta, nazwisko, imie, plec, pesel, telefon FROM klient";
	$result = $conn->query($sql);

	// Sprawdzenie czy zapytanie zwróciło wyniki
	if ($result->num_rows > 0) {
		// Jeśli zapytanie zwróciło co najmniej jeden rekord, wyświetl nagłówki kolumn
		echo "id_klienta | imie | nazwisko | plec | pesel | telefon <br>";

		// Wyświetlenie danych każdego rekordu
		while($row = $result->fetch_assoc()) {
			// Pobranie danych z bieżącego wiersza i ich wyświetlenie
			echo " ".$row["id_klienta"]. " | " . $row["imie"]. " | ". $row["nazwisko"]." | ". $row["plec"]." | ". $row["pesel"]. " | ".$row["telefon"]."</br>";
		}
	} else {
		// Jeśli zapytanie nie zwróciło wyników, wyświetl komunikat "0 results"
		echo "0 results";
	}

?>