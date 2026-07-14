import { useState, useEffect, Fragment } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'About',      id: 'about'     },
  { label: 'Tech Stack', id: 'techstack' },
  { label: 'Experience', id: 'experience'  },
  { label: 'Projects',   id: 'projects'  },
  { label: 'Contact',    id: 'contact'   },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

// Theme Toggle Button
const ThemeToggle = ({ isDark, toggleTheme, showLabel = false }) => (
  <button
    onClick={toggleTheme}
    aria-label="Toggle theme"
    className="flex items-center gap-2 p-2 rounded-md text-sm tracking-wider hover:bg-gray-300 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-800 transition-colors duration-200 cursor-pointer"
  >
    {isDark ? <Sun size={15} /> : <Moon size={15} />}
    {showLabel && (
      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    )}
  </button>
);

// Divider
const VDivider = () => (
  <div className="w-px h-4 bg-gray-400 dark:bg-gray-600" />
);

// Navbar
const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  const mobileCheck = /android|iphone|kindle|ipad/i.test(navigator.userAgent);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: mobileCheck ? 0.2 : 0.4 }
    );

    ['hero', ...NAV_LINKS.map(({ id }) => id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // True while the hero section is the active section
  const isHero = activeId === 'hero' || activeId === '';

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleNavClick = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Main nav bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-500 dark:border-gray-500`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Left side: Logo */}
          <button
            key={'hero'}
            onClick={() => scrollTo('hero')}
            className={`font-bold text-lg indent-1.5 tracking-[0.2em] hover:scale-110 transition-opacity duration-200 cursor-pointer ${isHero ? 'scale-110' : ''}`}
          >
            <img
              src={`${isDark ? 'logo-dark.png' : 'logo-light.png'}`}
              alt="Anzel logo"
              className="w-8 h-8 rounded-full logo-spin"
            />
          </button>

          {/* Right side: Desktop view nav links */}
          <div className="hidden md:flex items-center font-bold gap-5">
            <VDivider />
            {NAV_LINKS.map(({ label, id }) => (
              <Fragment key={id}>
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer ${activeId === id ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                >
                  {label}
                </button>
                <VDivider />
              </Fragment>
            ))}
            
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          {/* Right side: Mobile hamburger */}
          <button
            className="md:hidden p-2 hover:opacity-50 transition-opacity duration-200"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-visibility duration-300 ${menuOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 flex flex-col transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Panel header: theme switch in the left, close button in the right */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-500 dark:border-gray-500">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} showLabel />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 hover:opacity-50 active:opacity-30 transition-opacity duration-150"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col py-2">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`px-6 py-4 text-left text-sm font-bold tracking-widest uppercase transition-colors duration-150 hover:bg-gray-300 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-800 ${activeId === id ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-500'}`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
