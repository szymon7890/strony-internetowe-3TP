import React from 'react'; // Importuje bibliotekę React, która jest niezbędna do tworzenia komponentów React
import { formatToLocalTime } from '../services/weatherServices'; // Importuje funkcję formatToLocalTime z pliku '../services/weatherServices'

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (
    <div>
      {/* Wyświetlenie daty i czasu w lokalnej strefie czasowej */}
      <div className="flex items-center justify-center my-6">
        <div className='text-white text-xl font-extralight'>
          {formatToLocalTime(dt, timezone)} {/* Wywołanie funkcji formatToLocalTime do formatowania czasu */}
        </div>
      </div>

      {/* Wyświetlenie nazwy miasta i kraju */}
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>{`${name}, ${country}`}</p> {/* Wyświetlenie nazwy miasta i kraju w formacie 'Miasto, Kraj' */}
      </div>
    </div>
  );
}

export default TimeAndLocation; // Eksport komponentu TimeAndLocation jako domyślny eksport