import { useEffect, useState } from 'react';
import useLocationWeatherContext from '../../hooks/useLocationWeatherContext';
import getWeather from '../../services/getWeather';
import ButtonTemperature from './components/ButtonTemperature';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WeatherInfo = () => {
  const { location, currentWeather, setCurrentWeather } = useLocationWeatherContext();
  const [metric, setMetric] = useState('Fahrenheit');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (location.latitude && location.longitude) getWeather(location, setCurrentWeather);
  }, [location]);

  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className="w-full px-3 flex flex-col justify-center relative items-center"
    >
      {!currentWeather && <span className="loader"></span>}
      {currentWeather && (
        <>
          <div className="absolute bottom-[195px]">
            <img
              className="drop-shadow-custom-drop-shadow animate-pulse"
              src={currentWeather.icon}
              alt="weather image"
            />
          </div>
          <div className="w-full max-w-[400px] flex flex-col gap-4 relative top-[53px]">
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-2xl">{currentWeather.description}</h2>
              <p className="text-6xl">
                {currentWeather.temperature}
                <span>°{currentWeather.degrees.slice(0, 1)}</span>
              </p>
            </div>
            <section className="flex justify-between">
              <div className="flex justify-center items-center gap-2">
                <i className="text-xl fa-solid fa-temperature-three-quarters"></i>
                <p>{currentWeather.pressure} hpa</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <i className="text-xl fa-solid fa-droplet"></i>
                <p>{currentWeather.humidity} %</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <i className="text-xl fa-solid fa-wind"></i>
                <p>
                  {currentWeather.wind} <sup>m</sup>/s{' '}
                </p>
              </div>
            </section>
            <article className="flex justify-center">
              <div>
                <p>
                  from{' '}
                  <span>
                    {currentWeather.min_temp}°{currentWeather.degrees.slice(0, 1)}
                  </span>{' '}
                  to{' '}
                  <span>
                    {currentWeather.max_temp}°{currentWeather.degrees.slice(0, 1)}
                  </span>
                </p>
              </div>
            </article>
            <div className="flex justify-center">
              <p className="text-2xl font-light">
                {currentWeather.city}, {currentWeather.country}
              </p>
            </div>
            <div className="flex justify-center">
              <ButtonTemperature metric={metric} setMetric={setMetric} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default WeatherInfo;
