<?php
	// Sprawdzenie, czy formularz został wysłany metodą POST
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		// Pobranie wartości pola 'nameA' z formularza
		$nameP = $_POST['nameA'];

		// Sprawdzenie, czy pole 'nameA' jest puste
		if (empty($nameP)) {
			// Wyświetlenie komunikatu "Name is empty", jeśli pole 'nameA' jest puste
			echo "Name is empty";
		} else {
			// Wyświetlenie powitania "Witaj" oraz wartości z pola 'nameA', jeśli pole nie jest puste
			echo "Witaj ".$nameP;
		}
	}

	// Pobranie wartości pola 'nameB' z formularza
	$nameP1 = $_POST['nameB']; {

		// Wyświetlenie wartości z pola 'nameB' bez dodatkowych warunków
		echo " ".$nameP1;
	}
	
	
	// Pobranie wartości pola 'age' z formularza
	$nameP2 = $_POST['age']; {
		// Wyświetlenie daty urodzenia, oddzielonej od poprzedniego wyniku przejściem do nowej linii HTML
		echo " <br>Urodzony dnia: ".$nameP2;
	}
?>