"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Slide, { SlideItem } from "./Slide";

export type CarouselProps = {
  slides: SlideItem[];
  interval?: number;
  showIndicators?: boolean;
  showNav?: boolean;
  className?: string;
};

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  interval = 5000,
  showIndicators = true,
  showNav = true,
  className = "",
}) => {
  const [index, setIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const timeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef<number | null>(null);
  const deltaXRef = useRef<number>(0);

  // estado para detectar mobile de forma reactiva
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    // usa matchMedia si prefieres (más eficiente)
    window.addEventListener("resize", onResize);
    // set initial value (en caso de SSR -> client hydration)
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [slides.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length]
  );

  // autoplay — ahora depende de isMobile también
  useEffect(() => {
    clearTimer();
    if (!isPlaying || slides.length <= 1 || isMobile) return;
    timeoutRef.current = window.setTimeout(() => next(), interval);
    return () => clearTimer();
  }, [isPlaying, index, interval, next, slides.length, clearTimer, isMobile]);

  // navegación con teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setIsPlaying(false);
        next();
      }
      if (e.key === "ArrowLeft") {
        setIsPlaying(false);
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // swipe táctil — usa el estado isMobile y se incluye en deps
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      startXRef.current = e.touches[0].clientX;
      deltaXRef.current = 0;
      setIsPlaying(false);
      clearTimer();

      // pausamos autoplay en mobile
      if (isMobile) setIsPlaying(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (startXRef.current === null) return;
      deltaXRef.current = e.touches[0].clientX - startXRef.current;
    };

    const onTouchEnd = () => {
      const threshold = 50;
      if (deltaXRef.current > threshold) prev();
      else if (deltaXRef.current < -threshold) next();
      startXRef.current = null;
      deltaXRef.current = 0;
      // en mobile no reanudamos autoplay automáticamente
      if (!isMobile) setIsPlaying(true);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev, clearTimer, isMobile]);

  // pausa al entrar el mouse
  const handleMouseEnter = () => {
    setIsPlaying(false);
    clearTimer();
  };
  const handleMouseLeave = () => {
    // solo reanuda si no está en mobile
    if (!isMobile) setIsPlaying(true);
  };

  const goTo = (idx: number) => {
    setIndex(idx);
    setIsPlaying(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carrusel de imágenes"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <div key={s.id} className="w-full flex-shrink-0 px-2">
            <Slide slide={s} />
          </div>
        ))}
      </div>

      {/* Flechas */}
      {showNav && slides.length > 1 && (
        <>
          <button
            onClick={() => {
              setIsPlaying(false);
              prev();
            }}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/40 text-bonga-dark rounded-full p-2 shadow hover:bg-white hidden md:block"
            aria-label="Anterior"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              setIsPlaying(false);
              next();
            }}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/40 text-bonga-dark rounded-full p-2 shadow hover:bg-white hidden md:block"
            aria-label="Siguiente"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Indicadores */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2 mb-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-bonga-yellow" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
