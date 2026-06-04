import { useEffect, useState } from 'react';

/*
  Shows a loading screen until:
   1. window "load" event fires (all assets fetched), and
   2. at least MIN_MS milliseconds have passed (for the animation to feel intentional).
  Then fades out and calls onComplete.
 */
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const MIN_MS = 2000;
    const startTime = Date.now();

    // Gradually fill the bar up to 92% while waiting
    const ticker = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 10 + 4;
        return prev + increment >= 92 ? 92 : prev + increment;
      });
    }, 160);

    const finish = () => {
      clearInterval(ticker);
      setProgress(100);
      // Small pause at 100% before fading out
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 550);
      }, 350);
    };

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const wait = Math.max(0, MIN_MS - elapsed);
      setTimeout(finish, wait);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => clearInterval(ticker);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-950 transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Bouncing dots */}
      <div className="flex gap-2 mb-8">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-black dark:bg-white animate-bounce"
            style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.8s' }}
          />
        ))}
      </div>

      {/* Name */}
      <p className="text-2xl font-bold tracking-[0.4em] text-black dark:text-white mb-1">
        ANSARI USMAN
      </p>
      <p className="text-base font-semibold tracking-widest text-gray-600 dark:text-gray-400 mb-8">
        Software Engineer
      </p>

      {/* Progress bar */}
      <div className="w-40 h-px bg-gray-200 dark:bg-gray-800 overflow-hidden rounded-full">
        <div
          className="h-full bg-black dark:bg-white rounded-full progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="mt-3 text-sm tracking-widest text-gray-600 dark:text-gray-400">
        {Math.min(100, Math.floor(progress))}%
      </p>
    </div>
  );
};

export default LoadingScreen;
