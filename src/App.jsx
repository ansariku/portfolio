import { ThemeProvider } from './context/ThemeContext';
import RadiantGridlineBackground from './components/RadiantGridlineBackground';

const App = () => {
  return (
    <ThemeProvider>
      <div
        className={`relative min-h-svh bg-white dark:bg-black text-black dark:text-white transition-colors duration-500
        `}
      >
        {/* Moving radiant gridlines background (z-0) */}
        <RadiantGridlineBackground />
      </div>
    </ThemeProvider>
  );
}

export default App
