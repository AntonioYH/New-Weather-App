import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LocationWeatherContextProvider } from './contexts/LocationWeatherContext.jsx';
import { DarkModeContextProvider } from './contexts/DarkModeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <LocationWeatherContextProvider>
        <App />
      </LocationWeatherContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
);