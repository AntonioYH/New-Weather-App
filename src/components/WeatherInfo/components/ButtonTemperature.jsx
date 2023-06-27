import { useRef } from 'react';
import useLocationWeatherContext from '../../../hooks/useLocationWeatherContext';
import chageDegrees from '../../../utils/changeDegrees';
import { useInView } from 'framer-motion';

const ButtonTemperature = ({ metric, setMetric }) => {
  const { currentWeather, setCurrentWeather } = useLocationWeatherContext();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const hanldeClick = () => {
    chageDegrees(currentWeather, setCurrentWeather);
    if (metric === 'Celcius') setMetric('Fahrenheit');
    else if (metric === 'Fahrenheit') setMetric('Celcius');
  };

  return (
    <button
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(+200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className="w-[150px] px-4 py-2 rounded-lg shadow-sm shadow-black bg-[#2291cc] dark:bg-gray-800"
      onClick={hanldeClick}
    >
      <p className="flex justify-center items-center gap-1">
        Change to
        <span className="text-lg">°{metric.slice(0, 1)}</span>
      </p>
    </button>
  );
};

export default ButtonTemperature;
