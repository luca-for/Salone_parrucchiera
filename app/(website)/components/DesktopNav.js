"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import NavLink from "./NavLink";
import { NAV_ITEMS, isActivePath } from "./navigation";

export default function DesktopNav({ pathname }) {
    const activeLineRef = useRef(null);
    const prevRectRef = useRef(null);

    useEffect(() => {
        if (activeLineRef.current) {
            const newRect = activeLineRef.current.getBoundingClientRect();

            // Se esiste una posizione precedente (cambio scheda)
            if (prevRectRef.current) {
                const prevRect = prevRectRef.current;
                const deltaX = prevRect.left - newRect.left;
                const scaleX = prevRect.width / newRect.width;

                gsap.fromTo(
                    activeLineRef.current,
                    {
                        x: deltaX,
                        scaleX: scaleX,
                        transformOrigin: "left center",
                    },
                    {
                        x: 0,
                        scaleX: 1,
                        duration: 0.4,
                        ease: "power2.out",
                        clearProps: "transform",
                    }
                );
            }

            // Salva le coordinate correnti per la prossima transizione
            prevRectRef.current = newRect;
        }
    }, [pathname]);

    return (
        <nav
            aria-label="Menu principale"
            className="hidden xl:flex items-center justify-end ml-auto xl:pr-32 gap-1 text-white/80 text-sm uppercase tracking-widest font-medium"
        >
            {NAV_ITEMS.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                    <NavLink
                        key={item.href}
                        href={item.href}
                        isActive={active}
                        className="relative px-4 py-2 group transition-colors duration-300 hover:text-white"
                    >
                        <span
                            className={`relative z-10 transition-colors duration-300 ${active ? "text-brand-gold" : ""
                                }`}
                        >
                            {item.name}
                        </span>

                        {active ? (
                            <div
                                ref={activeLineRef}
                                className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-brand-gold"
                            />
                        ) : (
                            <div className="absolute bottom-0 left-4 right-4 h-px bg-white/0 group-hover:bg-white/30 transition-colors duration-300" />
                        )}
                    </NavLink>
                );
            })}
        </nav>
    );
}