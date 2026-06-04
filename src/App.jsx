import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import RadiantGridlineBackground from './components/RadiantGridlineBackground';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div
        className={`relative min-h-svh bg-neutral-100 dark:bg-neutral-950 text-black dark:text-white transition-colors duration-500 ${loading ? 'overflow-hidden' : ''}`}
      >
        {/* Moving radiant gridlines background (z-0) */}
        <RadiantGridlineBackground />

        {/* Foreground content (z-10) */}
        <div
          className={`relative z-10 transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
        >
          <Navbar />

          <main>
            <Hero />
            <div className="border-t border-gray-500 dark:border-gray-500 mx-6 max-w-6xl md:mx-auto" />
            <About />
            <div className="border-t border-gray-500 dark:border-gray-500 mx-6 max-w-6xl md:mx-auto" />
            <TechStack />
            <div className="border-t border-gray-500 dark:border-gray-500 mx-6 max-w-6xl md:mx-auto" />
            <Projects />
            <div className="border-t border-gray-500 dark:border-gray-500 mx-6 max-w-6xl md:mx-auto" />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App
