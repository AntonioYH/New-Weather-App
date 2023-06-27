import { useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import useLocationWeatherContext from './hooks/useLocationWeatherContext';
import getLocation from './utils/getLocation';
import Footer from './components/Footer/Footer';
import useDarkModeContext from './hooks/useDarkModeContext';
import setDefaultSystemTheme from './utils/setDefaultSystemTheme';
import { useInView } from 'framer-motion';

function App() {
  const { location, setLocation } = useLocationWeatherContext();
  const { setDarkMode } = useDarkModeContext();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    getLocation(location, setLocation);
    setDefaultSystemTheme(setDarkMode);
  }, []);

  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <div
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        ref={ref}
        className="w-full h-[60px] flex justify-center items-center shadow shadow-black fixed top-0 bg-[#37a2db] dark:bg-[#010409]"
      >
        <Header />
      </div>
      <main className="h-screen flex justify-center items-center">
        <WeatherInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
