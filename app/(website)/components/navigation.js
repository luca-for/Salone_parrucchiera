export const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "Servizi", href: "/servizi" },
    { name: "Chi Sono", href: "/chi_sono" },
    { name: "Aura Effect", href: "/Aura_Effect" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contatti", href: "/contatti" },
];

export function isActivePath(pathname, href) {
    return pathname === href;
}