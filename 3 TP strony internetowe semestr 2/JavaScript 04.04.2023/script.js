//Linijka powyżej tworzy tablicę o nazwie arr i przypisuje jej pięć wartości.
const arr = [29, 10, 23, 37, 14];
// indeksy   0,  1,  2,  3,  4

//Linijka powyżej definiuje funkcję o nazwie sort, która przyjmuje jedną argument - tablicę, którą chcemy posortować.
function sort(arr) {
    //length długośc
//Powyższa linijka rozpoczyna pętlę for, która będzie iterować po elementach tablicy arr. Pętla wykonuje się arr.length - 1 razy.
    for (let i = 0; i < arr.length - 1; i++) {
//Powyższa linijka tworzy zmienną swapped, która służy do śledzenia tego, czy w obecnym przejściu pętli doszło do jakiejkolwiek zamiany.
        let swapped = false;
/* Powyższa linijka tworzy drugą pętlę for, która iteruje po elementach tablicy arr. Zaczyna od j=0 i wykonuje się arr.length - 1 - i razy,
ponieważ w każdym kolejnym przejściu pętli największa wartość jest przesuwana na koniec i nie trzeba jej porównywać z pozostałymi elementami. */
        for (let j = 0; j < arr.length - 1 - i; j++) {
//Powyższa linijka wyświetla w konsoli dwa elementy tablicy, które są obecnie porównywane.
            console.log(arr[j], arr[j + 1])
/*Powyższy warunek sprawdza, czy wartość arr[j] jest większa niż wartość arr[j + 1]. 
Jeśli tak, funkcja swap jest wywoływana, aby zamienić elementy miejscami. Następnie
 informacja o dokonanej zmianie jest wyświetlana w konsoli, a zmienna swapped ustawiana 
 jest na true, aby zasygnalizować, że doszło do zamiany. */
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                console.log('Zamiana', arr);
                swapped = true;
            }
        }
//Powyższa linijka wyświetla w konsoli informację o końcu danego przejścia pętli.
        console.log("Koniec przejścia" + (i + 1));
// Jeśli w danej iteracji nie dokonano żadnej zamiany, to tablica jest posortowana i można ją zwrócić
        if (!swapped) 
            return arr;
    }
    // Zwrócenie posortowanej tablicy
    return arr
}

// Funkcja zamieniająca elementy miejscami
function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

// Wywołanie funkcji sortującej na tablicy arr
sort(arr)


//Dodac komentarze co robi kod krok po kroku oraz dokończyc film na youtube https://www.youtube.com/watch?v=aYH8pyg0y3A
/*
function generateSort(arg) {
    let items = "";
    for(let k = 0; k < arg.length; k++) {
        items += `<li>${arg[k]}</li>`;
    }
    return items;
}

document.querySelector("main").innerHTML = `
<ol>
    ${generateSort(arr)}
</ol>
`; */

//Do zrobienia musisz dane z tablicy w javas