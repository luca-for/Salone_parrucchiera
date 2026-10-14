"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function ContactButtons() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef(null);
  const hasShown = useRef(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 1024;
    setIsMobile(checkMobile());

    if (pathname.includes("Aura_Effect")) return;

    if ((pathname.includes("Aura_Effect") || pathname.includes("contatti")) && checkMobile()) {
      setIsVisible(false);
      return;
    }
    const osservatore = new IntersectionObserver(
      ([entry]) => {
        if (checkMobile()) {
          setIsVisible(!entry.isIntersecting);
        }
        else {
          setIsVisible(true)
        }
      },
      {
        rootMargin: "0px 0px -20px 0px",
        threshold: 0
      }
    );

    const footer = document.querySelector("footer");
    if (footer) osservatore.observe(footer);
    const handleResize = () => {
      if (!checkMobile()) setIsVisible(true);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      osservatore.disconnect();
      window.removeEventListener("resize", handleResize);
    };


  }, [pathname]);

  
  useEffect(() => {
    if (isVisible) setShouldRender(true);
  }, [isVisible]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.killTweensOf(el);

    if (isVisible) {
      if (!hasShown.current) {
        gsap.set(el, { scale: 0, opacity: 0, filter: "blur(0px)" });
        hasShown.current = true;
      }
      gsap.to(el, {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
      });
    } else {
      gsap.to(el, {
        scale: 1.5,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          hasShown.current = false;
          setShouldRender(false);
        },
      });
    }

    return () => gsap.killTweensOf(el);
  }, [isVisible, shouldRender]);

  
  const scaleTo = (el, value) =>
    gsap.to(el, { scale: value, duration: 0.25, ease: "power2.out", overwrite: "auto" });

  const handlePointerEnter = (e) => {
    if (e.pointerType === "mouse") scaleTo(e.currentTarget, 1.05);
  };
  const handlePointerLeave = (e) => scaleTo(e.currentTarget, 1);
  const handlePointerDown = (e) => scaleTo(e.currentTarget, 0.95);
  const handlePointerUp = (e) =>
    scaleTo(e.currentTarget, e.pointerType === "mouse" ? 1.05 : 1);

  if (pathname.includes("Aura_Effect") && isMobile) {
    return null;
  }

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="fixed z-999 flex flex-col gap-4 bottom-8 left-8 origin-bottom-left
          landscape:max-lg:left-auto landscape:max-lg:right-8 landscape:max-lg:bottom-4 landscape:max-lg:scale-90 landscape:max-lg:origin-bottom-right"
    >

      {/* Bottone WhatsApp */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerLeave}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center group transition-colors"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap text-[10px] uppercase tracking-widest font-bold">
          Scrivici
        </span>
      </a>

      {/* Bottone Chiamata */}
      <a
        href="#"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerLeave}
        className="bg-black text-white p-4 rounded-full shadow-2xl flex items-center group transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap text-[10px] uppercase tracking-widest font-bold">
          Chiamaci
        </span>
      </a>
    </div>
  );
}