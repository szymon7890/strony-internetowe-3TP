import { DateTime } from 'luxon'; // Importuje DateTime z biblioteki Luxon do obsługi dat

const API_KEY = "d8c8de7496527623d42eef757408e923"; // Klucz API do OpenWeatherMap
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"; // Bazowy URL do zapytań API OpenWeatherMap

// Funkcja getWeatherData pobierająca dane pogodowe
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType); // Tworzy nowy obiekt URL na podstawie BASE_URL i infoType
    url.search = new URLSearchParams({...searchParams, appid:API_KEY}); // Dodaje parametry wyszukiwania do URL

    return fetch(url) // Wykonuje zapytanie fetch do API OpenWeatherMap
        .then((res) => res.json()) // Parsuje odpowiedź jako JSON
        .then((data) => data); // Zwraca dane z API
};

// Funkcja formatująca bieżące dane pogodowe
const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon}, // Współrzędne geograficzne
        main: {temp, feels_like, temp_min, temp_max, humidity}, // Temperatura i wilgotność
        name, // Nazwa miasta
        dt, // Timestamp danych
        sys: {country, sunrise, sunset}, // Informacje o kraju i czasie wschodu i zachodu słońca
        weather, // Warunki pogodowe
        wind: {speed} // Prędkość wiatru
    } = data; // Destrukturyzuje dane na poszczególne części

    const {main: details, icon} = weather[0]; // Pobiera główne warunki pogodowe i ikonę

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        weather,
        details,
        speed
    }; // Zwraca sformatowane dane pogodowe
};

// Funkcja formatująca dane prognozy pogody
const formatForecastWeather = (data) => {
    let { timezone, daily = [], hourly = [] } = data; // Destrukturyzuje dane na strefę czasową oraz dzienne i godzinowe dane prognozy

    daily = daily.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'), // Formatuje czas lokalny na dzień tygodnia
            temp: d.temp.day, // Temperatura dzienne
            icon: d.weather[0].icon // Ikona warunków pogodowych
        }
    });

    hourly = hourly.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'), // Formatuje czas lokalny na godzinę
            temp: d.temp, // Temperatura godzinowa
            icon: d.weather[0].icon // Ikona warunków pogodowych
        }
    });

    return { timezone, daily, hourly }; // Zwraca sformatowane dane prognozy pogody
};  

// Funkcja pobierająca i formatująca dane pogodowe
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        'weather', 
        searchParams
    ).then(formatCurrentWeather); // Pobiera i formatuje bieżące dane pogodowe

    const { lat, lon} = formattedCurrentWeather; // Pobiera współrzędne geograficzne

    const formattedForecastWeather = await getWeatherData('onecall',
    {
        lat,
        lon,
        exclude: "current,minutely,alerts",
        units: searchParams.units,
    }).then(formatForecastWeather); // Pobiera i formatuje dane prognozy pogodowe

    return {...formattedCurrentWeather, ...formattedForecastWeather }; // Zwraca połączone sformatowane dane
};

// Funkcja formatująca czas lokalny
const formatToLocalTime = (secs, zone) => {
    return DateTime.fromSeconds(secs).setZone(zone).toFormat('hh:mm a'); // Formatuje czas na lokalny używając biblioteki Luxon
};

// Funkcja generująca URL dla ikony na podstawie kodu
const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

// Eksportuje funkcję getFormattedWeatherData jako domyślną oraz formatToLocalTime i formatCurrentWeather jako nazwane eksporty
export default getFormattedWeatherData
export {formatToLocalTime, iconUrlFromCode, formatCurrentWeather};