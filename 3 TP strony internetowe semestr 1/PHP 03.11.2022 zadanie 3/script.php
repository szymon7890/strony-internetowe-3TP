<?php
	// Skrypt PHP do obsługi przesłanych danych z formularza

	// Sprawdzenie czy pole 'name' zostało przesłane
	if(isset($_POST['name']))
	{
		// Przypisanie wartości pola 'name' do zmiennej $name
		$name = $_POST['name'];
		
		// Otwarcie pliku 'imiona.txt' w trybie zapisu ('w')
		$file = fopen('imiona.txt', 'w');
		
		// Zapisanie wartości zmiennej $name do pliku 'imiona.txt'
		fwrite($file, $name . '\n');
		
		// Zamknięcie pliku
		fclose($file);
	} 
		
	// Sprawdzenie czy pole 'komentarz' zostało przesłane
	elseif(isset($_POST['komentarz']))
	{
		// Przypisanie wartości pola 'komentarz' do zmiennej $komentarz
		$komentarz = $_POST['komentarz'];
		
		// Otwarcie pliku 'imiona.txt' w trybie zapisu ('w')
		$file = fopen('imiona.txt', 'w');
		
		// Zapisanie wartości zmiennej $komentarz do pliku 'imiona.txt'
		fwrite($file, $komentarz . '\n');
		
		// Zamknięcie pliku
		fclose($file);
	} 

	// Sprawdzenie czy pole 'urodziny' zostało przesłane
	elseif(isset($_POST['urodziny']))
	{
		// Przypisanie wartości pola 'urodziny' do zmiennej $urodziny
		$urodziny = $_POST['urodziny'];
		
		// Otwarcie pliku 'imiona.txt' w trybie zapisu ('w')
		$file = fopen('imiona.txt', 'w');
		
		// Zapisanie wartości zmiennej $urodziny do pliku 'imiona.txt'
		fwrite($file, $urodziny . '\n');
		
		// Zamknięcie pliku
		fclose($file);
	}
?>