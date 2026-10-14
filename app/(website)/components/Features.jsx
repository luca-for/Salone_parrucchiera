"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features({ items }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!items || items.length === 0) return;

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".feature-item");

            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: index * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%", 
                            toggleActions: "play none none none", 
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [items]);

    if (!items) return null;

    return (
        <section
            ref={sectionRef}
            style={{
                backgroundColor: "#F4F0E0",
                backgroundImage: `
          radial-gradient(at 15% 15%, rgba(212, 186, 145, 0.8) 0px, transparent 45%), 
          radial-gradient(at 85% 85%, rgba(190, 160, 110, 0.8) 0px, transparent 45%),
          linear-gradient(to bottom, rgba(251, 250, 220, 0.3) 0%, transparent 60%)
        `,
            }}
            className="py-24 md:py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">
                {items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`feature-item flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"
                                } items-center gap-12 md:gap-24 mb-24 md:mb-32 last:mb-0`}
                        >
                            {/* Box Immagine */}
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-4/5 overflow-hidden shadow-xl">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>

                            {/* Box Testo */}
                            <div className="w-full md:w-1/2 flex flex-col items-start">
                                <span className="text-[#4A3F35] font-medium tracking-[0.3em] uppercase text-xs mb-4">
                                    {item.category}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bolder tracking-tight text-[#4A3F35] mb-6 leading-tight">
                                    {item.title}
                                </h2>
                                <div className="text-[#333333] text-lg leading-relaxed font-light mb-8">
                                    {item.description}
                                </div>
                                <div className="h-1px w-20 bg-black/20"></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}