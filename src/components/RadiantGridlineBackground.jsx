import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/*
  Animated background with a subtle moving grid.
  Direction changes smoothly every 5 seconds using lerp on velocity.
  A radial gradient overlay creates the "radiant" depth effect.
 */

const RadiantGridlineBackground = () => {
  const { isDark } = useTheme();
  const gridRef = useRef(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const GRID_SIZE = 48;  // px between grid lines
    const LERP = 0.018;    // how quickly direction changes (lower = smoother)

    let x = 0, y = 0;
    let vx = 0.12, vy = 0.08;
    let targetVx = 0.12, targetVy = 0.08;
    let rafId;

    const pickNewDirection = () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.1 + Math.random() * 0.12;
      targetVx = Math.cos(angle) * speed;
      targetVy = Math.sin(angle) * speed;
    };

    const tick = () => {
      // Smoothly interpolate velocity toward target
      vx += (targetVx - vx) * LERP;
      vy += (targetVy - vy) * LERP;

      // Advance position and wrap within one grid cell for seamless repeat
      x = ((x + vx) % GRID_SIZE + GRID_SIZE) % GRID_SIZE;
      y = ((y + vy) % GRID_SIZE + GRID_SIZE) % GRID_SIZE;

      el.style.backgroundPosition = `${x}px ${y}px`;
      rafId = requestAnimationFrame(tick);
    };

    const intervalId = setInterval(pickNewDirection, 5000);
    rafId = requestAnimationFrame(tick);

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const lineColor = isDark
    ? 'rgba(255,255,255,0.1)'
    : 'rgba(0,0,0,0.1)';

  const radialOverlay = isDark
    ? 'radial-gradient(ellipse 80% 80% at 50% 40%, transparent 20%, rgba(0,0,0,0.75) 100%)'
    : 'radial-gradient(ellipse 80% 80% at 50% 40%, transparent 20%, rgba(255,255,255,0.75) 100%)';

  return (
    <>
      {/* Moving grid layer */}
      <div
        ref={gridRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(${lineColor} 1px, transparent 1px),
            linear-gradient(90deg, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial vignette / radiant overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-all duration-700"
        style={{ background: radialOverlay }}
      />
    </>
  );
};

export default RadiantGridlineBackground;
