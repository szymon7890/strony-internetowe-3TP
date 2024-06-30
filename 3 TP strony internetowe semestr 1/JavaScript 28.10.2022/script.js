/*addEventListerner to metoda, dzięki której mozemy wywołyac jakąś funkcję w momencie, kiedy
zosatnie wykryte jakieś zdarzenie (event). Zdarzeniem moze byc kliknięcie przycisku, przwinięcie strony
czy najechanie kursorem na jakiś element.

Za pomocą "listenera" mozemy obsługiwa zdarzenia wywołane myszką, klawiaturą czy
zachowaniem samej strony internetowej (np. mozemy wywołac funkcję dopiero po załadowaniu
wszystkich elementów strony).

addEventListener mozemy nadac Document, obiekt windows czy pojedynczy element na naszej stronie

DOMContentLoaded zachodzi wówczas, gdy przeglądarka załaduje wszystkie elementy DOM strony internetowej.
Wtedy mozemy bezpiecznie uruchamia nasz skrypt
*/
document.addEventListener('DOMContentLoaded', () => {
  
  /*querySelector jest uniwersalny i kada nazwa będzie pasowac
  wyszukuje tylko jeden element
  */
  let button = document.querySelector('#submit'); 
  
  button.addEventListener('click', function() {
    //wyświetlanie zmiennej input z html jego wartośc
    let inputTxt = document.querySelector('#inputOne').value;
/*split jest to tekst na tablicę elementów ? rozbija podany tekst na tablicę mniejszych kawałków z których
kady oryginalnym tekście był rozdzielony od pozostałych określonym separatorem.
*/
    let dataArray = inputTxt.split(',');
/*jeśli zmienna dataArray length zwraca długoś łańcucha znaków, czyli liczbę znaków w zmiennej tekstowej 
3 jest mniejsze od zmiennej dataArray
*/
    if (dataArray.length > 3) {

/*sortowanie zmiennej dataArray */
    dataArray.sort((a, b) => a - b);

    //wyświetlanie zmiennej od 0 i 1
    const numberOne = dataArray[0];
    const numberTwo = dataArray[1];
/*Funkcja parseInt() parsuje łańcuch znaków i próbuje zwróci liczbę całkowitą typu integer. Jeśli natknie się na znak, 
który nie jest cyfrą ignoruje ten oraz wszystkie kolejne znaki, a następnie zwraca wartoś przetworzoną do tej pory.*/
    const numberFinal = parseInt(numberOne) + parseInt(numberTwo);

    //wyświetlanie zmiennej
    console.log(numberFinal);

//w przeciwnym ywpadku jesli uzytkownik poda za mało liczb wyświetl komunikat za mało podano liczb
    } else {
      alert('Podano za malo liczb');
    }
  });
  
});