"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import styles from "./GalleryFlip.module.css";
import AuraOverlay from "./AuraOverlay";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger, Flip);
ScrollTrigger.config({ ignoreMobileResize: true });

const IMAGES = [
  "/images/macro_capelli.webp",//top left
  "/images/main_foto.webp", //top center
  "/images/radici_hero.webp", //mid center
  "/images/radici1.webp", //top right
  "/images/color_glass.jpg", //mid left
  "/images/radici2.webp", //bot right
  "/images/hero_homepage.webp", //bot left
  "/images/nanoplastia.jpg", //bot center
]
const CENTER_INDEX = 2;
const CENTER_IMAGE_DESKTOP = "/images/radici_hero.webp";
const CENTER_IMAGE_MOBILE = "/images/radici_hero_mobile.webp";

const FLIP_DURATION = 1;
const HOLD_DURATION = 1.5; 
const MOBILE_BREAKPOINT = 768;

export default function GalleryFlip() {
  const galleryRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const hasPlayedOnMobileRef = useRef(false);
  const observerRef = useRef(null);
  const lastWidthRef = useRef(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useLayoutEffect(() => {
    const galleryElement = galleryRef.current;
    if (!galleryElement) return;

    let flipCtx;

    const createTween = ({ skipAnimation = false } = {}) => {
      const isMobile = window.matchMedia(
        `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
      ).matches;

      const galleryItems = galleryElement.querySelectorAll(
        `.${styles.galleryItem}`
      );

      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      flipCtx && flipCtx.revert();
      galleryElement.classList.remove(styles.final);
      if (!skipAnimation) setShowOverlay(false);

      flipCtx = gsap.context(() => {
        galleryElement.classList.add(styles.final);
        const flipState = Flip.getState(galleryItems);
        galleryElement.classList.remove(styles.final);

        if (isMobile) {
          // MOBILE:
          const flip = Flip.to(flipState, {
            simple: true,
            ease: "power2.inOut",
            duration: skipAnimation ? 0 : FLIP_DURATION,
            paused: true,
            onComplete: () => setShowOverlay(true),
          });

          if (skipAnimation) {
            flip.progress(1);
            hasPlayedOnMobileRef.current = true;
          } else {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting && !hasPlayedOnMobileRef.current) {
                    hasPlayedOnMobileRef.current = true;
                    flip.play();
                    observer.disconnect();
                  }
                });
              },
              { threshold: 0.4 }
            );
            observer.observe(galleryElement);
            observerRef.current = observer;
          }
        } else {
          // DESKTOP: comportamento invariato, guidato dallo scroll
          const flip = Flip.to(flipState, {
            simple: true,
            ease: "expoScale(1, 5)",
            duration: FLIP_DURATION,
          });

          const flipFraction =
            FLIP_DURATION / (FLIP_DURATION + HOLD_DURATION);
          const totalScrollPercent = Math.round(
            (FLIP_DURATION + HOLD_DURATION) * 100
          );

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: galleryElement,
              start: "center center",
              end: `+=${totalScrollPercent}%`,
              scrub: true,
              pin: galleryElement.parentNode,
              onUpdate: (self) => {
                setShowOverlay(self.progress >= flipFraction - 0.02);
              },
            },
          });

          tl.add(flip);
          tl.to({}, { duration: HOLD_DURATION });
        }

        return () => gsap.set(galleryItems, { clearProps: "all" });
      });
    };

    createTween();

    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth === lastWidthRef.current) return;
      lastWidthRef.current = newWidth;

      const isMobile = window.matchMedia(
        `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
      ).matches;

      createTween({ skipAnimation: isMobile && hasPlayedOnMobileRef.current });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observerRef.current && observerRef.current.disconnect();
      flipCtx && flipCtx.revert();
    };
  }, []);

  return (
    <div className={styles.galleryWrap}>
      <div ref={galleryRef} className={`${styles.gallery} ${styles.bento}`}>
        {IMAGES.map((src, i) => (
          <div key={i} className={styles.galleryItem}>
            {i === CENTER_INDEX ? (
              <>
                <div className="hidden md:block w-full h-full">
                  <Image
                    src={CENTER_IMAGE_DESKTOP}
                    alt=""
                    fill
                    sizes="100vw"
                    quality={85}
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="block md:hidden w-full h-full">
                  <Image
                    src={CENTER_IMAGE_MOBILE}
                    alt=""
                    fill
                    sizes="100vw"
                    quality={85}
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </>
            ) : (
              <Image
                src={src}
                alt=""
                fill
                sizes="100vw"
                quality={85}
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        ))}
      </div>

      <AuraOverlay visible={showOverlay} />
    </div>
  );
}