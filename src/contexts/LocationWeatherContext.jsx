import { createContext, useState } from 'react';

export const LocationWeatherContext = createContext();

export const LocationWeatherContextProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [currentWeather, setCurrentWeather] = useState(null);

  return (
    <LocationWeatherContext.Provider
      value={{
        location,
        setLocation,
        currentWeather,
        setCurrentWeather,
      }}
    >
      {children}
    </LocationWeatherContext.Provider>
  );
};
