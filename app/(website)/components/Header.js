"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import useLockBodyScroll from "./useLockBodyScroll";

const MOBILE_MENU_ID = "mobile-menu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useLockBodyScroll(isMenuOpen);

    // Chiude il menu a ogni cambio di pagina
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Chiude il menu con Esc
    useEffect(() => {
        if (!isMenuOpen) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") setIsMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isMenuOpen]);

    return (
        <header className="absolute top-0 left-0 w-full z-50 py-1 px-4 md:px-12 bg-brand-dark">
            <div className="flex items-center w-full min-h-15">
                {/* Logo a sinistra */}
                <div className="flex justify-start z-50 md:px-20">
                    <NavLink
                        href="/"
                        className="text-xl md:text-2xl font-sans font-light uppercase tracking-tight text-white whitespace-nowrap"
                    >
                        Il salone di Marika
                    </NavLink>
                </div>

                <DesktopNav pathname={pathname} />

                {/* Burger */}
                <div className="xl:hidden flex ml-auto justify-end z-9999">
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-expanded={isMenuOpen}
                        aria-controls={MOBILE_MENU_ID}
                        aria-label={isMenuOpen ? "Chiudi menu di navigazione" : "Apri menu di navigazione"}
                        className={`transition-colors duration-300 ${isMenuOpen ? "text-gray-700/80" : "text-white"}`}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <MobileMenu
                id={MOBILE_MENU_ID}
                isOpen={isMenuOpen}
                pathname={pathname}
                onClose={() => setIsMenuOpen(false)}
            />
        </header>
    );
}