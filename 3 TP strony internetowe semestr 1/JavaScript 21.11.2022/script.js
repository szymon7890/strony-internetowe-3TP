// Nasłuchiwanie na zdarzenie DOMContentLoaded, które występuje po załadowaniu całej zawartości strony
window.addEventListener('DOMContentLoaded', (event) => {
    
    // Przypisanie przycisku "Sprawdź czy liczba jest doskonała" do zmiennej perfectNumberBtn
    var perfectNumberBtn = document.querySelector("#checkPerfectNumber");
    
    // Przypisanie pola inputowego dla liczby doskonałej do zmiennej perfectNumberInput
    var perfectNumberInput = document.querySelector("#perfektNamber");
    
    // Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku "Sprawdź czy liczba jest doskonała"
    perfectNumberBtn.addEventListener("click", function(){
        // Wywołanie funkcji checkPerfectNumber po kliknięciu, przekazując jej wartość z pola inputowego po konwersji na liczbę
        checkPerfectNumber(parseInt(perfectNumberInput.value));
    });

    // Przypisanie przycisku "Sprawdź czy liczba jest wesoła" do zmiennej HappyNumberBtn
    var HappyNumberBtn = document.querySelector("#checkHappyNumber");
    
    // Przypisanie pola inputowego dla liczby wesołej do zmiennej happyNumberInput
    var happyNumberInput = document.querySelector("#happynumber");
    
    // Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku "Sprawdź czy liczba jest wesoła"
    HappyNumberBtn.addEventListener("click", function(){
        // Wywołanie funkcji checkHappyNumber po kliknięciu, przekazując jej wartość z pola inputowego po konwersji na liczbę
        checkHappyNumber(parseInt(happyNumberInput.value));
    });
});

/**
 * Funkcja sprawdzająca, czy liczba jest doskonała.
 * @param {number} perfectNumber - Liczba do sprawdzenia
 * @returns {void} - Brak zwracanej wartości, ale wyświetla alert z informacją o wyniku sprawdzenia
 */
function checkPerfectNumber(perfectNumber){
    // Tworzenie pustej tablicy devideNumbers na dzielniki liczby perfectNumber
    var devideNumbers = [];
    
    // Iteracja od 1 do perfectNumber-1 w celu znalezienia dzielników
    for (var i = 1; i <= perfectNumber-1; i++){            
        // Sprawdzenie, czy perfectNumber jest podzielne przez i
        if(perfectNumber % i == 0)    {
            // Dodanie i do tablicy devideNumbers, jeśli jest dzielnikiem
            devideNumbers.push(i);
        }
    }
    
    // Obliczenie sumy wszystkich dzielników liczby perfectNumber
    var sum = 0;
    for (var j = 0; j<devideNumbers.length;j++){
        sum += devideNumbers[j];
    }
    
    // Sprawdzenie, czy suma dzielników jest równa perfectNumber i wyświetlenie odpowiedniego alertu
    if(sum == perfectNumber){
        alert("Liczba " + perfectNumber + " jest liczbą doskonałą.");
    } else{
        alert("Liczba " + perfectNumber + " nie jest liczbą doskonałą.");
    }
}

/**
 * Funkcja sprawdzająca, czy liczba jest wesoła.
 * @param {number} happyNumber - Liczba do sprawdzenia
 * @returns {void} - Brak zwracanej wartości, ale wyświetla informacje w konsoli o operacjach wykonywanych na liczbie
 */
function checkHappyNumber(happyNumber){
    // Obliczenie kwadratu liczby happyNumber
    var power = Math.pow(happyNumber, 2);
    console.log(power); // Wyświetlenie kwadratu liczby w konsoli
    
    // Konwersja wyniku na string
    var powering = String(power);
    console.log(powering[0]); // Wyświetlenie pierwszej cyfry wyniku w konsoli
    console.log(powering[1]); // Wyświetlenie drugiej cyfry wyniku w konsoli
    console.log(powering[2]); // Wyświetlenie trzeciej cyfry wyniku w konsoli
}
