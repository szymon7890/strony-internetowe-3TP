import './App.css'; // Import stylów CSS dla aplikacji
import TopButtons from './components/TopButtons'; // Import komponentu TopButtons z lokalnego pliku
import Inputs from './components/Inputs'; // Import komponentu Inputs z lokalnego pliku
import TimeAndLocation from './components/TimeAndLocation'; // Import komponentu TimeAndLocation z lokalnego pliku
import TemperatureAndDetails from './components/TemperatureAndDetails'; // Import komponentu TemperatureAndDetails z lokalnego pliku
import Forecast from './components/Forecast'; // Import komponentu Forecast z lokalnego pliku
import getFormattedWeatherData from './services/weatherServices'; // Import funkcji getFormattedWeatherData z usługi weatherServices
import { useEffect, useState } from 'react'; // Import funkcji useEffect i useState z Reacta
import { ToastContainer, toast } from 'react-toastify'; // Import komponentów ToastContainer i toast z react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import stylów CSS dla react-toastify

function App() {
  const [query, setQuery] = useState({ q: "berlin" }); // Stan dla zapytania i jego ustawienia początkowego
  const [units, setUnits] = useState('metric'); // Stan dla jednostek temperatury i ich ustawienia początkowego
  const [weather, setWeather] = useState(null); // Stan dla danych pogodowych i ich ustawienia początkowego jako null

  useEffect(() => {
    // Efekt uboczny do pobierania danych pogodowych przy zmianie zapytania lub jednostek
    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location.'; // Wiadomość informująca o aktualnie pobieranych danych

      toast.info('Fetching weather for ' + message); // Wyświetlenie informacji o rozpoczęciu pobierania danych

      await getFormattedWeatherData({ ...query, units }).then(data => { // Wywołanie funkcji pobierającej i formatującej dane pogodowe
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}.`); // Powiadomienie o pomyślnym pobraniu danych
        setWeather(data); // Ustawienie pobranych danych pogodowych w stanie komponentu
      });
    }

    fetchWeather(); // Wywołanie funkcji do pobrania danych pogodowych
  }, [query, units]); // Zależności dla efektu ubocznego - zmiana zapytania lub jednostek

  const formatBackground = () => {
    if (!weather) return 'from-gray-700 to-gray-700'; // Domyślne tło dla braku danych pogodowych

    const threshold = units === 'metric' ? 20 : 60; // Próg temperatury dla zmiany tła w zależności od jednostek
    if (weather.temp <= threshold) return 'from-gray-700 to-gray-700'; // Tło dla niskich temperatur

    return 'from-yellow-700 to-orange-700'; // Tło dla wysokich temperatur
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      {/* Kontener główny aplikacji z dynamicznie zmieniającym się tłem */}
      <TopButtons setQuery={setQuery} /> {/* Komponent przycisków nawigacyjnych z przekazaniem funkcji ustawiającej zapytanie */}
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} /> {/* Komponent wejściowy do wprowadzania danych z przekazaniem funkcji ustawiającej zapytanie i jednostki */}

      {/* Wyświetlenie komponentów na podstawie danych pogodowych */}
      {weather && (
        <div>
          <TimeAndLocation weather={weather} /> {/* Komponent informacji o czasie i lokalizacji */}
          <TemperatureAndDetails weather={weather} /> {/* Komponent temperatury i szczegółów pogodowych */}

          <Forecast title="hourly forecast" items={weather.hourly} /> {/* Prognoza godzinowa */}
          <Forecast title="daily forecast" items={weather.daily} /> {/* Prognoza dzienna */}
        </div>
      )}

      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} /> {/* Kontener dla powiadomień o akcji aplikacji */}

    </div>
  );
}

export default App; // Eksport komponentu głównego aplikacji