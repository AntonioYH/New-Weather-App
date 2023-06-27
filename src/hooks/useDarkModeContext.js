import { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

const useDarkModeContext = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return { darkMode, setDarkMode };
};

export default useDarkModeContext;
