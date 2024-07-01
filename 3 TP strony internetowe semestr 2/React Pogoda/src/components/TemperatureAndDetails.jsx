import React from 'react';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

// Importowanie funkcji formatToLocalTime z pliku '../services/weatherServices'
import { formatToLocalTime } from '../services/weatherServices';

// Funkcja generująca URL do ikony na podstawie kodu
function iconUrlFromCode(code) {
  return `https://www.weatherbit.io/static/img/icons/${code}.png`;
}

// Deklaracja funkcji komponentu TemperatureAndDetails, który przyjmuje obiekt weather jako props
function TemperatureAndDetails({weather: {
  details,
  icon,
  temp,
  temp_min,
  temp_max,
  sunrise,
  sunset,
  speed,
  humidity,
  feels_like,
  timezone,
}}) {
  return (
    // Główny kontener komponentu, wyśrodkowany pionowo i poziomo
    <div className='flex flex-col justify-center items-center'>

      {/* Wyświetlanie szczegółów pogodowych */}
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>{details}</p>
      </div>

      {/* Wyświetlanie ikony pogodowej i temperatury */}
      <div className='flex flex-row items-center justify-between text-white py-3'>
        <img src={iconUrlFromCode(icon)} alt="" className='w-20' />
        <p className='text-5xl'>{`${temp.toFixed()} °`}</p>
      </div>
    </div>
  );
}

// Eksport komponentu TemperatureAndDetails jako domyślny eksport
export default TemperatureAndDetails;