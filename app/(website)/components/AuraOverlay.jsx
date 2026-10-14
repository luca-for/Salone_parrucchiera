'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const desktopHotspots = [
  { id: 1, x: 40, y: 35, position: "left", title: "Trattamento Rigenerante", description: "Nutrimento profondo della fibra capillare per una luminosità naturale a lunga durata." },
  { id: 2, x: 55, y: 45, position: "right", title: "Sfumatura Armonica", description: "Studio personalizzato della fisionomia per esaltare i riflessi e i toni del viso." },
  { id: 3, x: 50, y: 70, position: "left", title: "Protezione della Cute", description: "Formulazioni botaniche selezionate per preservare la salute e il benessere del cuoio capelluto." }
];

const mobileHotspots = [
  { id: 1, x: 38, y: 30, title: "Trattamento Rigenerante", description: "Nutrimento profondo della fibra capillare per una luminosità naturale a lunga durata." },
  { id: 2, x: 65, y: 55, title: "Sfumatura Armonica", description: "Studio personalizzato della fisionomia per esaltare i riflessi e i toni del viso." },
  { id: 3, x: 35, y: 72, title: "Protezione della Cute", description: "Formulazioni botaniche selezionate per preservare la salute e il benessere del cuoio capelluto." }
];

export default function AuraOverlay({ visible }) {
  const [activeMobileId, setActiveMobileId] = useState(null);
  const [shouldRender, setShouldRender] = useState(visible);

  const containerRef = useRef(null);
  const mobileModalRef = useRef(null);
  const desktopPinsRef = useRef([]);
  const desktopCardsRef = useRef([]);
  const desktopLinesRef = useRef([]);

  // 1. Gestione montaggio/smontaggio ed exit animation
  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    } else if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => setShouldRender(false)
      });
    }
  }, [visible]);

  // 2. Animazioni di entrata dell'overlay e dei punti desktop
  useEffect(() => {
    if (shouldRender && visible && containerRef.current) {
      const ctx = gsap.context(() => {
        // Fade in contenitore principale
        gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power2.out" }
        );

        // Animazione pallini
        const validPins = desktopPinsRef.current.filter(Boolean);
        if (validPins.length > 0) {
          gsap.fromTo(
            validPins,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)", delay: 0.2, stagger: 0.1 }
          );
        }

        // Animazione cartelli e linee di congiunzione
        desktopHotspots.forEach((point, index) => {
          const card = desktopCardsRef.current[index];
          const line = desktopLinesRef.current[index];
          const isRight = point.position === "right";

          if (card) {
            gsap.fromTo(
              card,
              { opacity: 0, x: isRight ? -20 : 20 },
              { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", delay: 0.4 + index * 0.1 }
            );
          }

          if (line) {
            gsap.fromTo(
              line,
              { scaleX: 0 },
              { scaleX: 1, duration: 0.5, ease: "power2.out", delay: 0.5 + index * 0.1 }
            );
          }
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [shouldRender, visible]);

  // 3. Animazione modale mobile all'apertura
  useEffect(() => {
    if (activeMobileId && mobileModalRef.current) {
      gsap.fromTo(
        mobileModalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [activeMobileId]);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-50 pointer-events-none"
    >
      {/* Overlay scuro*/}
      <div className="absolute inset-0 md:bg-black/40 bg-black/15 pointer-events-none" />

      {/* Titolo principale */}
      <div className="absolute top-33 md:top-45 left-0 right-0 text-center pointer-events-none px-6">
        <h1 className="text-white text-2xl md:text-5xl uppercase tracking-[0.50em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          Aura Effect
        </h1>
      </div>

      {/* MOBILE: pallini + modale */}
      <div className="block md:hidden">
        {mobileHotspots.map((point) => (
          <div
            key={`mob-${point.id}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          >
            <button
              onClick={() => setActiveMobileId(activeMobileId === point.id ? null : point.id)}
              className="relative group flex items-center justify-center focus:outline-none cursor-pointer pointer-events-auto"
              aria-label={point.title}
            >
              <span className="absolute -inset-3 rounded-full bg-[#D4AF37]/50 animate-ping opacity-75 pointer-events-none" />
              <div className="relative w-7 h-7 rounded-full border-2 border-white bg-[#D4AF37] flex items-center justify-center shadow-xl">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
            </button>
          </div>
        ))}

        {activeMobileId && (
          <div
            ref={mobileModalRef}
            className="absolute bottom-20 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-[#D4AF37]/30 text-left pointer-events-auto"
          >
            {mobileHotspots.filter(p => p.id === activeMobileId).map(p => (
              <div key={p.id}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base font-bold text-[#4A3F35] uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <button
                    onClick={() => setActiveMobileId(null)}
                    className="text-gray-400 hover:text-gray-600 text-lg font-bold px-2"
                  >
                    ✕
                  </button>
                </div>
                <div className="w-10 h-px bg-[#D4AF37] mb-2 opacity-60" />
                <p className="text-[#333333] text-xs leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DESKTOP: cartelli fissi con linee */}
      <div className="hidden md:block">
        {desktopHotspots.map((point, index) => {
          const isRight = point.position === "right";
          return (
            <div
              key={`desk-${point.id}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
            >
              <div
                ref={(el) => (desktopPinsRef.current[index] = el)}
                className="relative group flex items-center justify-center pointer-events-auto"
              >
                <span className="absolute -inset-3 rounded-full bg-[#D4AF37]/50 animate-ping opacity-75 pointer-events-none" />
                <div className="relative w-6 h-6 rounded-full border-2 border-white bg-[#D4AF37] flex items-center justify-center shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>

              <div
                ref={(el) => (desktopCardsRef.current[index] = el)}
                className={`absolute top-1/2 -translate-y-1/2 w-80 p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-[#D4AF37]/30 text-left pointer-events-auto ${isRight ? 'left-48' : 'right-48'
                  }`}
              >
                <div
                  ref={(el) => (desktopLinesRef.current[index] = el)}
                  style={{ transformOrigin: isRight ? 'left center' : 'right center' }}
                  className={`absolute top-1/2 -translate-y-1/2 w-42 h-px bg-[#D4AF37] ${isRight ? '-left-42' : '-right-42'
                    }`}
                />
                <h3 className="text-lg font-bold text-[#4A3F35] uppercase tracking-wide mb-2">
                  {point.title}
                </h3>
                <div className="w-10 h-px bg-[#D4AF37] mb-3 opacity-60" />
                <p className="text-[#333333] text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center pointer-events-none px-4">
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto px-6 md:px-8 py-3.5 md:py-4 bg-brand-gold text-black rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] shadow-2xl hover:bg-[#4A3F35] hover:text-white transition-all duration-300 hover:-translate-y-1"
        >
          Prenota la consulenza gratuita
        </Link>
      </div>
    </div>
  );
}