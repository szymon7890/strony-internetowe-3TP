//Tworzenie pustej tablicy
let arr = [];
//Generowanie 10 losowych liczb całkowitych i dodawanie ich do tablicy arr
for (let i = 0; i < 10; i++) {
  //generuje losowe liczby całkowite od 0 do 99 i dodaje je do tablicy arr
  arr.push(Math.floor(Math.random() * 10));
}

//Tworzymy funkcje o nazwie sortowanie Bąbelkowe
function sortowanieBabelkowe() {
//zmienna i z wartością 0
  let i = 0;
//zmienna j z wartością 0
  let j = 0;
//Uruchamianie interwału, który będzie wykonywał sortowanie
  let interval = setInterval(function() {
//Sprawdzanie, czy i jest mniejsze od długości tablicy arr
    if (i < arr.length) {
//Sprawdzanie, czy j jest mniejsze od długości tablicy arr pomniejszonej o i oraz 1
      if (j < arr.length - i - 1) {
//Sprawdzanie, czy wartość arr[j] jest większa niż wartość arr[j+1]
        if (arr[j] > arr[j+1]) {
          //Zamiana miejscami wartości w tablicy
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
        //Zwiększanie wartości j o 1
        j++;
      } else {
        //Zwiększanie aktualnej tablicy
        i++;
        j = 0;
      }
      console.log(arr);
    } else {
      //Zakończenie interwału
      clearInterval(interval);
    }
  //Czas trwania interwału
  }, 10)
}
//Uruchamienie funkcji sortowania
sortowanieBabelkowe()