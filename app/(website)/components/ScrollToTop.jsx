'use client';
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const buttonRef = useRef(null);

    // 1. Rileva lo scroll oltre 150px
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 150);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 2. Gestione smontaggio ed exit animation
    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
        } else if (buttonRef.current) {
            gsap.to(buttonRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => setShouldRender(false)
            });
        }
    }, [isVisible]);

    // 3. Animazione di entrata
    useEffect(() => {
        if (shouldRender && isVisible && buttonRef.current) {
            gsap.fromTo(
                buttonRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
            );
        }
    }, [shouldRender, isVisible]);

    if (!shouldRender) return null;

    return (
        <button
            ref={buttonRef}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hidden fixed bottom-6 right-6 z-999 md:w-15 w-11 h-15 rounded-full bg-[#4A3F35] text-brand-gold lg:flex items-center justify-center shadow-lg hover:bg-[#3A2E1E] transition-colors duration-300 cursor-pointer"
            aria-label="Torna in cima"
        >
            <svg width="28" height="28" viewBox="0 0 18 18" fill="none">
                <path d="M9 14V4M4 9l5-5 5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}