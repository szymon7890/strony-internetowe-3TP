function NumberPerfect(number) {
    var sum = 0; // Inicjalizacja zmiennej sumy dzielników

    // Pętla iterująca przez liczby mniejsze od podanej liczby number
    for (var i = 1; i < number; i++) {
        // Sprawdzenie czy number jest podzielne przez i (i jest dzielnikiem number)
        if (number % i == 0) {
            sum = sum + i; // Dodanie i do sumy dzielników
            console.log("Numeru[" + number + "] jest podzielny przez=" + i + " Suma dzielników=" + sum);
        }
    }

    // Sprawdzenie czy suma dzielników (sum) jest równa podanej liczbie (number)
    if (number == sum) {
        console.log("Wprowadzona liczba jest doskonała");
    } else {
        console.log("Liczba nie jest doskonała, ponieważ suma dzielników nie równa się liczbie");
    }
}

// Wywołanie funkcji NumberPerfect z argumentem 200
NumberPerfect(200);
