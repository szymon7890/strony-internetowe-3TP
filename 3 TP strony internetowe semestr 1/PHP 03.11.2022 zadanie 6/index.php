<?php

	//$zmienna connection = nowy mysqli("localhost","nazwa użytkownika","hasło","nazwa bazy danych")
	$conn = new mysqli("localhost","root","","northwindmysql");
	// Utworzenie nowego połączenia z bazą danych MySQL o nazwie "northwindmysql" na localhost, używając nazwy użytkownika "root" i braku hasła

	// Sprawdzenie połączenia
	if ($conn -> connect_errno) {
		// Jeśli wystąpił błąd podczas połączenia, wyświetl komunikat o błędzie i przerwij wykonanie skryptu
		echo "Failed to connect to MySQL: " . $conn -> connect_error;
		exit();
	}

	$plus1 = 1; // Inicjalizacja zmiennej pomocniczej

	function getAge($birthDate) {
		// Funkcja obliczająca wiek na podstawie daty urodzenia
		return intval(substr(date('Ymd') - date('Ymd', strtotime($birthDate)), 0, -4));
	}

	// SQL query do pobrania danych
	$sql = "SELECT FirstName, LastName, HireDate, BirthDate FROM employees";
	$result = $conn->query($sql);

	// Sprawdzenie czy zapytanie zwróciło wyniki
	if ($result->num_rows > 0) {
		// Jeśli zapytanie zwróciło co najmniej jeden wiersz, wyświetl nagłówki kolumn
		echo "FirstName | LastName | HireDate | BirthDate <br>";

		// Wyświetlenie danych każdego wiersza wynikowego
		while ($row = $result->fetch_assoc()) {
			// Wyświetlenie danych z bieżącego wiersza, obliczenie wieku z daty zatrudnienia i daty urodzenia
			echo " " . $row["FirstName"] . " | " . $row["LastName"] . " | " . getAge($row["HireDate"]) . " | " . (getAge($row["BirthDate"]) + $plus1) . "</br>";
			
			// Uzyskanie bieżącej daty i czasu
			$now = date_create()->format('Y-m-d H:i:s');
		}
	} else {
		// Jeśli zapytanie nie zwróciło wyników, wyświetl komunikat "0 results"
		echo "0 results";
	}

?>