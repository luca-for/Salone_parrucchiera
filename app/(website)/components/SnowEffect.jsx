'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function SnowEffect() {
  const containerRef = useRef(null);
  const [flakes, setFlakes] = useState([]);

  // 1. genera i fiocchi 
  useEffect(() => {
    const generatedFlakes = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 7 + 8,
      left: Math.random() * 100,
      drift: (Math.random() - 0.5) * 50,
      duration: Math.random() * 5 + 8,
      delay: Math.random() * 5,
    }));
    setFlakes(generatedFlakes);
  }, []);

  // 2. Anima fiocchi
  useEffect(() => {
    if (flakes.length === 0 || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const flakeElements = gsap.utils.toArray('.snow-flake');

      flakeElements.forEach((flake, i) => {
        const flakeData = flakes[i];
        if (!flakeData) return;

        const tl = gsap.timeline({
          repeat: -1,
          delay: flakeData.delay,
        });

        // Caduta dall'alto verso il basso con drift orizzontale
        tl.fromTo(
          flake,
          { y: -20, x: 0 },
          {
            y: '100vh',
            x: flakeData.drift,
            duration: flakeData.duration,
            ease: 'none',
          },
          0
        );

        // Ciclo di opacità keyframe sincronizzato con la durata
        tl.fromTo(
          flake,
          { opacity: 0 },
          {
            keyframes: [
              { opacity: 0.9, duration: flakeData.duration * 0.15 },
              { opacity: 0.9, duration: flakeData.duration * 0.7 },
              { opacity: 0, duration: flakeData.duration * 0.15 },
            ],
            ease: 'none',
          },
          0
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [flakes]);

  if (flakes.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-25 overflow-hidden"
    >
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="snow-flake absolute rounded-full bg-white blur-[1px]"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            left: `${flake.left}%`,
          }}
        />
      ))}
    </div>
  );
}