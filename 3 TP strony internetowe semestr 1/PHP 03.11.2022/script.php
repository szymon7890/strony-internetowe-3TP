<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		// Sprawdzenie, czy metoda żądania to POST
		$name = $_POST['name'];
		// Pobranie wartości z pola formularza o nazwie 'name'
		if (empty($name)) {
			// Sprawdzenie, czy pole 'name' jest puste
			echo "Name is empty";
			// Jeśli pole jest puste, wyświetl komunikat
		} else {
			echo "Witaj ".$name;
			// Jeśli pole nie jest puste, wyświetl powitanie z wprowadzonym imieniem
		}
	}
?>