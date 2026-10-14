"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

export default function GalleryClient({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [shouldRender, setShouldRender] = useState(false);

  const modalRef = useRef(null);
  const contentRef = useRef(null);

  const isOpen = selectedIndex !== null;

  // Funzione per chiudere con animazione di fade-out
  const closeGallery = useCallback(() => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.inOut",
        onComplete: () => {
          setSelectedIndex(null);
          setShouldRender(false);
        },
      });
    } else {
      setSelectedIndex(null);
      setShouldRender(false);
    }
  }, []);

  const showNext = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
    },
    [images.length]
  );

  const showPrev = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
    },
    [images.length]
  );

  // Sincronizza lo stato di montaggio quando viene aperta la modale
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  // Animazione di apertura e transizione al cambio di foto
  useEffect(() => {
    if (shouldRender && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out" }
      );
    }
  }, [shouldRender]);

  // Pop-in/scale al cambio di immagine
  useEffect(() => {
    if (shouldRender && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" }
      );
    }
  }, [selectedIndex, shouldRender]);

  // Gestione tastiera e blocco dello scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.documentElement.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, closeGallery, showNext, showPrev]);

  return (
    <>
      {/* --- GRIGLIA 3x3 --- */}
      <div className="grid grid-cols-3 md:gap-x-10 gap-x-5 gap-y-10 md:gap-y-10">
        {images.map((image, index) => (
          <div
            key={image._key || index}
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-3/4 w-full overflow-hidden bg-gray-900 cursor-pointer group"
          >
            <div className="relative w-full h-full">
              <Image
                src={urlFor(image).width(600).auto("format").url()}
                alt="Lavoro Salone Marika"
                fill
                className="object-top object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 170px, 303px"
                priority={index < 3}
                loader={({ width }) => {
                  let finalWidth;
                  if (width <= 170) finalWidth = 170;
                  else if (width <= 281) finalWidth = 281;
                  else if (width <= 342) finalWidth = 342;
                  else finalWidth = 562;
                  return urlFor(image)
                    .width(finalWidth)
                    .quality(85)
                    .auto("format")
                    .url();
                }}
              />
            </div>
            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl font-light">
                +
              </span>
            </div>
          </div>
        ))}
      </div>

      {/*LIGHTBOX*/}
      {shouldRender && selectedIndex !== null && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-101 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeGallery}
        >
          {/* Chiusura overlay */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-110 cursor-pointer"
            onClick={closeGallery}
          >
            <X size={40} />
          </button>

          {/* Freccia sinistra */}
          <button
            className="absolute left-2 md:left-8 text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-110 cursor-pointer"
            onClick={showPrev}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Freccia destra */}
          <button
            className="absolute right-2 md:right-8 text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-110 cursor-pointer"
            onClick={showNext}
          >
            <ChevronRight size={40} />
          </button>

          {/* CONTENITORE FOTO */}
          <div className="relative w-full h-[80vh] md:h-[85vh] max-w-6xl px-4 md:px-20 pointer-events-none flex items-center justify-center">
            <div
              ref={contentRef}
              className="relative w-full h-full pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={urlFor(images[selectedIndex]).width(600).quality(75).auto("format").url()}
                alt="Ingrandimento anteprima"
                fill
                className="object-contain z-0"
              />
              <Image
                src={urlFor(images[selectedIndex]).width(1920).quality(90).auto("format").url()}
                alt="Ingrandimento"
                fill
                className="object-contain drop-shadow-2xl z-10"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>

          {/* Contatore foto */}
          <div className="absolute bottom-6 text-white/50 text-xs tracking-widest pointer-events-none">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}