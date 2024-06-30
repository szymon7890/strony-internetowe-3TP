{

// Poproś użytkownika o podanie liczby dziesiętnej za pomocą prompt
var input = prompt('Podaj swoją liczbę dziesiętną');

// Wyświetl podaną liczbę dziesiętną na konsoli
console.log("liczba dziesiętna         :", input);

// Skonwertuj podaną liczbę dziesiętną na liczbę binarną i wyświetl wynik
console.log("liczba binarna            :", Number.parseInt(input, 8));

}

{

// Poproś użytkownika o wpisanie liczby binarnej za pomocą prompt i przekonwertuj ją na liczbę
var input = Number(prompt("Wpisz liczbę binarną"));

// Wyświetl podaną przez użytkownika liczbę binarną oraz jej wartość jako liczba dziesiętna na konsoli
console.log(input, "liczba binarna:          ", input);
console.log(input, "liczba dziesiętna:       ", input.toString(2));

}