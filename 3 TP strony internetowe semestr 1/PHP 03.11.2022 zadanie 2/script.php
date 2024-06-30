<?php
    // Wyświetlanie nagłówka
    echo "Dane respondenta<br>";

    // Wyświetlanie opisu dotyczącego wieku
    echo "Wiek respondenta wynosi: ";

    // Pobranie wartości z pola formularza 'podajwiek'
    $wiek = $_POST["podajwiek"];

    // Instrukcja warunkowa sprawdzająca zakres wiekowy
    if($wiek == 1) {
        $wiek = "16-25 lat";
        echo "16-25 lat";
    }
    elseif($wiek == 2){
        $wiek = "26-35 lat";
        echo "26-35 lat";
    }
    elseif($wiek == 3) {
        $wiek = "36-45 lat";
        echo "36-45 lat";
    }
    elseif($wiek == 4) {
        $wiek = "46-60 lat";
        echo "46-60 lat";
    }
    elseif($wiek == 5) {
        $wiek = "61-75 lat";
        echo "61-75 lat";
    }
    elseif($wiek == 6) {
        $wiek = "76-100 lat";
        echo "76-100 lat";
    }

	// Wyświetlenie tekstu "Płeć respondenta wynosi: " oraz przejście do nowej linii
	echo "<br>Płeć respondenta wynosi: ";

	// Pobranie wartości z pola formularza 'podajplec' i przypisanie jej do zmiennej $plec
	$plec = $_POST["podajplec"];

	// Sprawdzenie wartości zmiennej $plec
	if($plec == 1) {
		// Jeśli $plec równa się 1, przypisz tekst "mężczyzna" do zmiennej $plec
		$plec = "mężczyzna";
		// Wyświetl tekst "mężczyzna"
		echo "mężczyzna";
	}
	elseif($plec == 2) {
		// Jeśli $plec równa się 2, przypisz tekst "kobieta" do zmiennej $plec
		$plec = "kobieta";
		// Wyświetl tekst "kobieta"
		echo "kobieta";
	}
		
	// Wyświetlenie tekstu "Zadowolenie z Produktu: "
	echo "<br>Zadowolenie z Produktu: ";
	// Pobranie wartości zmiennej $ocena z formularza POST
	$ocena = $_POST["ocena"];

	// Sprawdzenie wartości zmiennej $ocena i wyświetlenie odpowiedniej oceny
	if($ocena == 1) {
		// Jeśli $ocena równa się 1, wyświetl tekst "Ocena 1"
		echo "Ocena 1";
	} elseif($ocena == 2) {
		// Jeśli $ocena równa się 2, wyświetl tekst "Ocena 2"
		echo "Ocena 2";
	} elseif($ocena == 3) {
		// Jeśli $ocena równa się 3, wyświetl tekst "Ocena 3"
		echo "Ocena 3";
	} elseif($ocena == 4) {
		// Jeśli $ocena równa się 4, wyświetl tekst "Ocena 4"
		echo "Ocena 4";
	} elseif($ocena == 5) {
		// Jeśli $ocena równa się 5, wyświetl tekst "Ocena 5"
		echo "Ocena 5";
	}
		
	// Wyświetlenie tekstu "Uwagi Produktu: "
	echo "<br>Uwagi Produktu: ";
	// Wyświetlenie wartości pola 'uwagi' z formularza POST
	print_r($_POST['uwagi']);

	// Przypisanie wartości pola 'uwagi' do zmiennej $zmienna
	$zmienna = $_POST['uwagi'];

	// Wyświetlenie tekstu "Produkty innych marek ?: "
	echo "<br>Produkty innych marek ?: ";

	// Pobranie wartości pola 'marki' z formularza POST
	$marki=$_POST["marki"];

	// Sprawdzenie wartości pola 'marki' i wyświetlenie odpowiedniego komunikatu
	if($marki==1) {
		$marki = "Produkt 1";
		echo "Dziękujemy za produkt 1";
	} elseif($marki==2) {
		$marki = "Produkt 2";
		echo "Dziękujemy za produkt 2";
	}
	
	// Wyświetlenie tekstu "Jaki jest podobny produkt: "
	echo "<br>Jaki jest podobny produkt: ";

	// Wyświetlenie wartości pola 'opinia2' z formularza POST
	print_r($_POST['opinia2']);

	// Przypisanie wartości pola 'opinia2' do zmiennej $opinia2
	$opinia2 = $_POST['opinia2'];
	
	// Połączenie z bazą danych MySQL
	$conn = new mysqli("localhost", "root", "", "ankietaOnline03112022");

	// Sprawdzenie połączenia
	if ($conn->connect_errno) {
		// Wyświetlenie komunikatu o błędzie w przypadku nieudanego połączenia
		echo "Failed to connect to MySQL: " . $conn->connect_error;
		exit(); // Zakończenie działania skryptu w przypadku błędu połączenia
	}

	// Zapytanie SQL do wstawienia danych do tabeli formularz
	$sql = "INSERT INTO `formularzonline` (`id`, `wiek`, `plec`, `ocena`, `uwagi`, `inne_produkty`, `atrybuty_produktu`) VALUES (NULL, '$wiek', '$plec', '$ocena', '$zmienna', '$marki', '$opinia2')";

	// Wykonanie zapytania SQL do bazy danych
	$result = $conn->query($sql);

	// Sprawdzenie, czy zapytanie się powiodło
	if ($result) {
		echo "Dane zostały dodane poprawnie do tabeli formularz.";
	} else {
		echo "Wystąpił problem podczas dodawania danych: " . $conn->error;
	}

	// Zakończenie połączenia z bazą danych
	$conn->close();

?>