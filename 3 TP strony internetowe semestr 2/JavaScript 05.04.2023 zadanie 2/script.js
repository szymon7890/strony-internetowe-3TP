// Funkcja sortująca za pomocą algorytmu bubble sort
function bubbleSort() {
    // Wyłączenie przycisku "Sortuj" po kliknięciu
    document.querySelector("button").disabled = true;
  
    // Ustawienie danych początkowych
    let i = 0; // Zmienna i odpowiada za ilość przejść przez tablicę
    let j = 0; // Zmienna j odpowiada za porównania i zamiany elementów
    let swap = false; // Flaga wskazująca, czy doszło do zamiany elementów
  
    // Ustawienie interwału dla animacji (co 100ms)
    let intervalId = setInterval(() => {
        // Wykonaj sortowanie, jeśli i jest mniejsze od długości tablicy values
        if (i < values.length) {
            // Sprawdzenie warunku, czy wartość na pozycji j jest większa od wartości na pozycji j+1
            if (values[j] > values[j + 1]) {
                // Zamień miejscami elementy na pozycjach j i j+1
                let temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;
                swap = true; // Ustawienie flagi swap na true, co oznacza, że doszło do zamiany
            }
            j++; // Inkrementacja j, aby przejść do kolejnych elementów w tablicy
  
            // Warunek sprawdzający, czy j doszło do końca nieposortowanej części tablicy
            if (j === values.length - i - 1) {
                // Jeśli nie doszło do żadnej zamiany w bieżącym przejściu, zakończ sortowanie
                if (!swap) {
                    clearInterval(intervalId); // Zatrzymaj interwał animacji
                    console.log("Sortowanie zakończone.");
                    // Włącz ponownie przycisk "Sortuj" po zakończeniu sortowania
                    document.querySelector("button").disabled = false;
                }
                swap = false; // Zresetowanie flagi swap
                j = 0; // Zresetowanie j do początkowej wartości
                i++; // Inkrementacja i, aby przejść do następnego przejścia przez tablicę
            }
        }
    }, 100); // Przerwa między krokami sortowania (100ms)
}

// Początkowe dane do sortowania
const arraySize = 50; // Definicja rozmiaru tablicy do sortowania
let values = []; // Inicjalizacja pustej tablicy, która będzie przechowywać wartości do sortowania

// Funkcja setup z p5.js - wywoływana raz podczas ładowania strony
function setup() {
    createCanvas(600, 400); // Utworzenie canvasa o wymiarach 600x400 pikseli
    frameRate(30); // Ustawienie częstotliwości odświeżania na 30 klatek na sekundę

    // Generowanie losowych wartości do sortowania i dodawanie ich do tablicy values
    for (let i = 0; i < arraySize; i++) {
        // Losowanie wartości z przedziału [10, height-1] i dodanie ich do tablicy values
        values.push(Math.floor(Math.random() * (height - 10)) + 10);
    }
}

// Funkcja draw z p5.js - wywoływana automatycznie po funkcji setup(), cyklicznie odświeża zawartość canvasa
function draw() {
    background(0); // Wyczyszczenie tła canvasa (kolor czarny)

    // Rysowanie słupków na canvasie na podstawie wartości w tablicy `values`
    for (let i = 0; i < values.length; i++) {
        stroke(255); // Ustawienie koloru obrysu na biały
        fill(255); // Ustawienie koloru wypełnienia na biały
        // Rysowanie prostokątnego słupka na canvasie
        rect(i * (width / values.length), height - values[i], width / values.length, values[i]);
        // (i * (width / values.length)) - obliczenie pozycji poziomej każdego słupka
        // height - values[i] - obliczenie wysokości każdego słupka (canvas jest "odwrócony", więc rysujemy od góry)
        // width / values.length - szerokość każdego słupka proporcjonalnie do ilości wartości w tablicy
    }
}
