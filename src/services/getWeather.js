import axios from 'axios';
import currentWeatherAdapter from '../apadters/currentWeather.adapter';

const getWeather = async ({ latitude, longitude }, setCurrentWeather) => {
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=2b3c7e3d7560fcbf6b380d15e17c8324`;

  try {
    const res = await axios.get(BASE_URL);
    setCurrentWeather(currentWeatherAdapter(res.data));
  } catch (error) {
    Fahrenheit(error);
  }
};

export default getWeather;
