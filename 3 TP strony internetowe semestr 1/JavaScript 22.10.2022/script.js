//Utwórz 3 kwadraty obok siebie po kliknięciu kazdy z nich ma on zmienic tlo na inny kolor kwadratu

//Szukanie elementów
//document.querySelector("#squareOne");

window.addEventListener('DOMContentLoaded', (event) => {
    // Poniżej znajduje się funkcja wykonywana po załadowaniu całego drzewa DOM

    // Zdefiniowanie stałych dla każdego kwadratu i prostokąta
    const oneSquare = document.querySelector("#squareOne");
    const twoSquare = document.querySelector("#squareTwo");
    const threSquare = document.querySelector("#squareThree");
    const oneRectangle = document.querySelector('#rectangleOne');

    // Event dla pierwszego kwadratu (#squareOne)
    oneSquare.addEventListener("click", function(){
        var letters = "0123456789ABCDEF";   // Zbiór znaków do losowania koloru w formacie heksadecymalnym
        var color = '#';                    // Zmienna przechowująca kolor, zaczynająca się od #

        // Generowanie losowego koloru w formacie heksadecymalnym
        for (var i = 0; i < 6; i++)
           color += letters[(Math.floor(Math.random() * 16))];

        oneSquare.style.backgroundColor = color;   // Ustawienie wylosowanego koloru tła dla pierwszego kwadratu
    });

    // Event dla drugiego kwadratu (#squareTwo)
    twoSquare.addEventListener("click", function(){
        var letters = "0123456789ABCDEF";   // Zbiór znaków do losowania koloru w formacie heksadecymalnym
        var color = '#';                    // Zmienna przechowująca kolor, zaczynająca się od #

        // Generowanie losowego koloru w formacie heksadecymalnym
        for (var i = 0; i < 6; i++)
            color += letters[(Math.floor(Math.random() * 16))];
        
        twoSquare.style.backgroundColor = color;   // Ustawienie wylosowanego koloru tła dla drugiego kwadratu
    });


    // Event dla trzeciego kwadratu (#squareThre)
    threSquare.addEventListener("click", function(){
        var letters = "0123456789ABCDEF";   // Zbiór znaków do losowania koloru w formacie heksadecymalnym
        var color = '#';                    // Zmienna przechowująca kolor, zaczynająca się od #

        // Generowanie losowego koloru w formacie heksadecymalnym
        for (var i = 0; i < 6; i++)
            color += letters[(Math.floor(Math.random() * 16))];
        
        threSquare.style.backgroundColor = color;   // Ustawienie wylosowanego koloru tła dla drugiego kwadratu
    });

    // Event dla prostokąta (#rectangleOne)
    oneRectangle.addEventListener("click", function() {
        var letters = "0123456789ABCDEF";   // Zbiór znaków do losowania koloru w formacie heksadecymalnym
        var color = '#';                    // Zmienna przechowująca kolor, zaczynająca się od #

        // Generowanie losowego koloru w formacie heksadecymalnym
        for (var i = 0; i < 6; i++)
            color += letters[(Math.floor(Math.random() * 16))];
        
        oneRectangle.style.backgroundColor = color;  // Ustawienie wylosowanego koloru tła dla prostokąta
    });

});

// Komentarz: Pętla jest zakomentowana i nie wpływa na działanie powyższego kodu
// pętle zaczynamy do I i kończymy na maksymalnie mozna dojsc do z

//pętle zaczynamy do I i kończymy na maksymalnie mozna dojsc do z