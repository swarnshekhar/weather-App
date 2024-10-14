import React, { useState } from 'react';
import axios from 'axios';

const api_key = 'd83270e9580c4c06a86154030240801';

const Weather = () => {
  const [city, setCity] = useState("london");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('Sunny');

  const FetchApi = async () => {
    if (!city) return;

    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`);
      setWeatherData(response.data);
      setError('');
      setWeatherCondition(response.data.current.condition.text);
      if(weatherCondition!== 'Sunny'||'Mist'||'Partly cloudy'||'Moderate or heavy rain with thunder'||'Rainy'||'Windy'){
        setWeatherCondition('Sunny');
      }

    } catch (error) {
      console.log("City not found! Please try again");
      setError("City not found! Please try again");
      setWeatherData(null);
    }
  };

  return (
    <div className="flex items-center">
      {/* Lottie Animation Container */}
      <div className="flex flex-col items-start w-1/2">
        {(weatherCondition === 'Sunny' ||weatherCondition==='Partly cloudy')&& (
          <lottie-player
            src="https://lottie.host/b58c4145-023b-4504-8d47-85292bdbe6d0/YlvT315k0b.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
            direction="1"
            mode="normal">
          </lottie-player>
        )}
        {weatherCondition === 'Mist' && (
          <lottie-player
            src="https://lottie.host/9f5e57a4-5e94-41bf-bb41-9953ae9f8467/2TWDuzTBGA.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
            direction="1"
            mode="normal">
          </lottie-player>
        )}
        {(weatherCondition === 'Rainy'||weatherCondition === 'Moderate or heavy rain with thunder') && (
          <lottie-player
            src="https://lottie.host/b5037b31-c97f-4784-8ac9-cb4a1789c584/rHOhaj26PO.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
            direction="1"
            mode="normal">
          </lottie-player>
        )}
        {(weatherCondition === 'Windy' || weatherCondition === 'Partly Cloudy') && (
          <lottie-player
            src="https://lottie.host/1a7f202d-a649-4ebd-af30-f1f55bf20eee/9ybiESVIwl.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
            direction="1"
            mode="normal">
          </lottie-player>
        )}
      </div>

      {/* Weather Information Container */}
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center my-10">Weather App</h1>
        <div className="flex items-center mb-4">
  <input
    type="text"
    placeholder="Enter city"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 mx-2 ml-1 focus:ring-blue-500"
  />
    <button onClick={FetchApi} className="bg-blue-600 text-white font-semibold rounded-lg px-4 py-0 shadow hover:bg-blue-700 transition duration-200">
      Get Weather
    </button>


</div>

        {error && <p className="text-red-600 mt-2">{error}</p>}
        {weatherData && (
       <div className="bg-white rounded-lg shadow-md p-4">
       <p className="text-1.5xl font-bold text-blue-600">
         Temperature: <span className="text-gray-800">{weatherData.current.temp_c} °C</span>
       </p>
       <p className="text-1.5xl text-gray-700">
         Weather Condition: <span className="font-semibold">{weatherData.current.condition.text}</span>
       </p>
       <p className="text-1.5xl text-gray-700">
         Wind Speed: <span className="font-semibold">{weatherData.current.wind_kph} km/h</span>
       </p>
       <p className="text-1.5xl text-gray-700">
         Wind Direction: <span className="font-semibold">{weatherData.current.wind_dir}</span>
       </p>
     </div>
     
       
        )}
      </div>
    </div>
  );
};

export default Weather;
