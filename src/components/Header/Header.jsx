import useDarkModeContext from '../../hooks/useDarkModeContext';
import toggleMode from '../../utils/toggleMode';

const Header = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();

  return (
    <header className="w-full max-w-[850px] px-3 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Weather App</h1>
      <button
        style={{ justifyContent: darkMode === 'dark' ? 'end' : 'start' }}
        onClick={() => toggleMode(darkMode, setDarkMode)}
        className="toggle-mode bg-[#010409] dark:bg-[#37a2db]"
      >
        <div className="w-[18px] h-[16px] bg-white rounded-full"></div>
      </button>
    </header>
  );
};

export default Header;
