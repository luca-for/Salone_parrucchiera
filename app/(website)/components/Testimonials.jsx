"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

const Stars = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 26 26"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: 'visible' }}
  >
    <path d="M12 2.5l2.85 5.8 6.4.93-4.63 4.51 1.1 6.37-5.72-3.01-5.72 3.01 1.1-6.37L2.75 9.23l6.4-.93L12 2.5z"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke="currentColor" />
  </svg>
)
const reviews = [
  { id: 1, name: "Chiara R.", text: "Marika è una vera artista. Il metodo Aura Effect mi ha cambiato la vita: capelli sani e colore sempre perfetto.", stars: 5 },
  { id: 2, name: "Elena V.", text: "Ambiente accogliente e professionalità al top. Non affiderei i miei capelli a nessun altro!", stars: 5 },
  { id: 3, name: "Martina G.", text: "Sfumature naturali incredibili. Sembra di essere baciate dal sole tutto l'anno.", stars: 5 },
  { id: 4, name: "Sara L.", text: "Finalmente un salone che ascolta davvero le tue esigenze. Consigliatissimo!", stars: 5 },
  { id: 5, name: "Federica M.", text: "Prodotti di altissima qualità e una cura del dettaglio che fa la differenza.", stars: 5 },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const dragRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (!dragRef.current) return;

    const [instance] = Draggable.create(dragRef.current, {
      type: "x",
      bounds: { minX: -width, maxX: 0 },
      inertia: true,       
      edgeResistance: 0.5,  
    });

    return () => instance.kill();
  }, [width]);

  return (
    <section className="py-24 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titolo della sezione */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest text-[#4A3F35]">
            Cosa dicono di noi
          </h2>
          <div className="mt-4 h-px w-20 bg-[#CBB79C] mx-auto"></div>
        </div>

        {/* Carosello Dragabile con GSAP */}

        <div className="relative -ml-1 sm:ml-0 lg:-ml-48" ref={scrollRef}>
          <div
            ref={dragRef}
            className="flex cursor-grab active:cursor-grabbing"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-[320px] md:min-w-100  p-8 bg-[#CBB79C] mr-6 shadow-sm rounded-4xl  flex flex-col justify-between"
              >
                <div>
                  <div className="flex mb-4 text-[#FAEBD7] gap-0.5">
                    {[...Array(review.stars)].map((_, i) => (
                      <Stars key={i} className="w-5 h-5 md:w-8 md:h-8" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                </div>
                <p className="font-bold tracking-wider text-xs uppercase text-[#4A3F35]">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottone Link a Google Reviews */}
        <div className="mt-20 text-center">
          <a
            aria-label="Leggi le recensioni del salone su Google"
            //Link per le recensioni
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-4xl border border-black text-[10px] 
            md:text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#4A3F35] hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 26 24"
              aria-hidden="true">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.21 5.39-7.84 5.39-4.84 0-8.79-4.01-8.79-8.92s3.95-8.92 8.79-8.92c2.75 0 4.59 1.16 5.64 2.17l2.58-2.49c-1.66-1.55-3.82-2.49-8.22-2.49-6.62 0-12 5.38-12 12s5.38 12 12 12c6.92 0 11.51-4.87 11.51-11.71 0-.79-.08-1.39-.19-1.99h-11.32z" />
            </svg>
            Guarda altre recensioni su Google
          </a>

        </div>

      </div>
    </section>
  );
}