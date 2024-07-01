import React from 'react'; // Importuje bibliotekę React, która jest niezbędna do tworzenia komponentów React

function TopButtons({setQuery}) { // Deklaracja funkcji komponentu TopButtons, przyjmującej props setQuery

    // Tablica obiektów reprezentująca różne miasta
    const cities = [
        {
            id: 1,
            title: 'Berlin, DE', // Nazwa i kod kraju dla Berlina
        },
        {
            id: 2,
            title: "Stockholm, SE", // Nazwa i kod kraju dla Sztokholmu
        },
        {
            id: 3,
            title: 'Brighton', // Nazwa miasta Brighton
        },
        {
            id: 4,
            title: 'Melbourne, AU', // Nazwa i kod kraju dla Melbourne
        },
    ]

    return (
        <div className="flex items-center justify-around my-6">
            {/* Mapowanie tablicy cities i renderowanie przycisków */}
           {cities.map((city) => (
               <button key={city.id} className="text-white text-lg font-medium" onClick={() => setQuery({q: city.title}) }>
                   {city.title} {/* Wyświetlenie nazwy miasta na przycisku */}
               </button>
           ))}
       </div>
     );
   }
   
export default TopButtons; // Eksport komponentu TopButtons jako domyślny eksport