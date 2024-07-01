// Importowanie biblioteki React z pakietu 'react'
import React from 'react';

// Importowanie funkcji 'iconUrlFromCode' z pliku weatherServices znajdującego się w katalogu '../services'
import { iconUrlFromCode } from '../services/weatherServices';

// Deklaracja funkcji komponentu 'Forecast' przyjmującej jako argumenty obiekt destructuring: 'title' i 'items'
function Forecast({ title, items }) {
    // Wyświetlenie zawartości argumentu 'items' w konsoli w celach debugowania
    console.log(items);

    // Instrukcja 'return' - funkcja zwraca wynik
    return 
}
  
// Eksport komponentu 'Forecast' jako domyślny eksport modułu
export default Forecast;