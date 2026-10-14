"use client";
import NavLink from "./NavLink";
import { NAV_ITEMS, isActivePath } from "./navigation";

const MENU_GRADIENT = {
    backgroundImage: `
        radial-gradient(at 15% 15%, rgba(212, 186, 145, 0.8) 0px, transparent 45%),
        radial-gradient(at 85% 85%, rgba(190, 160, 110, 0.8) 0px, transparent 45%),
        linear-gradient(to bottom, rgba(251, 250, 220, 0.3) 0%, transparent 60%)
    `,
};

export default function MobileMenu({ id, isOpen, pathname, onClose }) {
    return (
        <nav
            id={id}
            aria-label="Menu mobile"
            style={MENU_GRADIENT}
            className={`fixed inset-0 w-full h-dvh bg-brand-cream backdrop-blur-[25px] pt-20 z-9998
                transition-all duration-200 ease-in-out origin-top-right
                ${isOpen
                    ? "opacity-100 scale-100 visible pointer-events-auto"
                    : "opacity-0 scale-95 invisible pointer-events-none"}`}
        >
            <h2 className="w-full text-center pb-10 font-bold text-1xl uppercase tracking-[0.3em] text-brand-ink">
                Il salone di Marika
            </h2>
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col items-start gap-6 px-8 font-bold text-2xl max-h-[calc(100dvh-10rem)]">
                    {NAV_ITEMS.map((item) => {
                        const active = isActivePath(pathname, item.href);
                        return (
                            <NavLink
                                key={item.href}
                                href={item.href}
                                isActive={active}
                                onClick={onClose}
                                className={`transition-colors duration-500 text-brand-ink ${active ? "border-b-2 border-brand-ink" : ""}`}
                            >
                                {item.name}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}