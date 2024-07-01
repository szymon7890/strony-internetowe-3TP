// Importowanie React oraz useState z biblioteki 'react'
import React, { useState } from 'react';

// Importowanie ikon UilSearch oraz UilLocationPoint z biblioteki '@iconscout/react-unicons'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

// Importowanie komponentu 'toast' z biblioteki 'react-toastify'
import { toast } from 'react-toastify';

// Importowanie stylów CSS dla komunikatów toast z biblioteki 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Deklaracja funkcji komponentu Inputs, która przyjmuje propsy setQuery, units oraz setUnits
function Inputs({ setQuery, units, setUnits }) {
  
  // Ustawianie lokalnego stanu 'city' za pomocą useState z początkową wartością pustego ciągu znaków
  const [city, setCity] = useState("");

  // Funkcja obsługująca zmianę jednostek miary
  const handleUnitsChange = (e) => {
    // Pobranie wartości wybranej jednostki z eventu
    const selectedUnit = e.currentTarget.name;
    // Aktualizacja stanu 'units' tylko jeśli wybrana jednostka się różni od obecnej
    if (units !== selectedUnit) setUnits(selectedUnit);
  }

  // Funkcja obsługująca kliknięcie przycisku wyszukiwania
  const handleSearchClick = () => {
    // Sprawdzenie czy pole 'city' nie jest puste przed wysłaniem zapytania
    if (city !== '') setQuery({ q: city });
  }

  // Funkcja obsługująca kliknięcie przycisku lokalizacji
  const handleLocationClick = () => {
    // Sprawdzenie czy przeglądarka wspiera geolokację
    if (navigator.geolocation) {
      // Wyświetlenie informacji o pobieraniu lokalizacji użytkownika za pomocą komunikatu toast
      toast.info("Pobieranie lokalizacji użytkownika.");
      // Pobranie aktualnej pozycji użytkownika
      navigator.geolocation.getCurrentPosition((position) => {
        // Wyświetlenie powiadomienia o pomyślnym pobraniu lokalizacji za pomocą komunikatu toast
        toast.success("Lokalizacja pobrana!");
        // Pobranie szerokości i długości geograficznej
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        // Ustawienie zapytania z parametrami szerokości i długości geograficznej
        setQuery({
          lat,
          lon,
        });
      })
    }
  }

  // Zwracanie JSX komponentu Inputs
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            {/* Pole tekstowe do wprowadzania nazwy miasta z obsługą zmiany stanu 'city' */}
            <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder='Szukaj miasta...' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' />
            {/* Ikona wyszukiwania z obsługą kliknięcia za pomocą funkcji handleSearchClick */}
            <UilSearch
                size={25}
                className="text-white cursor-pointer transition ease-out hover:scale-125"
                onClick={handleSearchClick}
            />
        </div>
    </div>
  )
}

// Eksportowanie komponentu Inputs jako domyślny eksport modułu
export default Inputs;