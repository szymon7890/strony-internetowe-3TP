//Zmienna o nazwie isHappy jest równa function n
var isHappy = function(n) {
    
    //zmienna var o nazwie map która posiada nawiasy
    var map = {};
    
    //zmienna var o nazwie tmp równa zero
    var tmp = 0;
  
    //jeśli n jest mniejsza od 1 zwróc zapytanie false
    if (n < 1) return false;

    //pętla while sparawdza czy jest liczba równa jeden
    while (n !== 1 && !map[n]) {
    //zwróc zapytanie liczby prawda
    map[n] = true;
    //zmienna tmp posiada zero
    tmp = 0;
  
        //pętla while
        while (n > 0) {
            //zmienna tmp równa się lub dodaj zmienną math gdzie wylicza nam resztę z dzielenia
            tmp += Math.pow(n % 10, 2);
            //zmienna n równa math gdzie dzieli nam na 10
            n = Math.floor(n / 10);
        }
        //porównywanie n do zmiennej tmp
        n = tmp;
    }
    //zwrócenie liczby czy jest reszta jeden
    return n === 1;

};

//wyświetlenie zmiennej isHappy i wpiszanie 7 czy jest liczbą wesołą
console.log(isHappy(7));