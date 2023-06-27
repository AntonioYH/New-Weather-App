import { useContext } from 'react';
import { LocationWeatherContext } from '../contexts/LocationWeatherContext';

const useLocationWeatherContext = () => {
  const { location, setLocation, currentWeather, setCurrentWeather } =
    useContext(LocationWeatherContext);

  return { location, setLocation, currentWeather, setCurrentWeather };
};

export default useLocationWeatherContext;
