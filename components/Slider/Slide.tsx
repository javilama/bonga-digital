

'use client';

import Image from 'next/image';
import Link from 'next/link';

// Tipos de datos de un slide
export type SlideItem = {
  id: string;
  imageSrc: string;
  imageAlt?: string;
  title: React.ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// Componente de un slide individual
export const Slide: React.FC<{ slide: SlideItem; className?: string }> = ({ slide, className }) => {
  return (
    <div className={`relative w-full h-[50vh] md:h-[70vh] flex-shrink-0 overflow-hidden rounded-lg ${className ?? ''}`} aria-label={slide.imageAlt}>
      {/* Imagen optimizada */}
      <Image
        src={slide.imageSrc}
        alt={slide.imageAlt ?? 'Imagen del slide'}
        fill
        sizes="(max-width: 640px) 750px, (max-width: 1280px) 1280px, 1920px"
        className="object-cover"
        priority={false}
      />

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col items-start justify-center p-6 md:p-12">
        <h3 className="text-2xl md:text-4xl font-bold text-white leading-snug" dangerouslySetInnerHTML={{ __html: slide.title as string }} />
        {slide.subtitle && <p className="mt-3 text-sm md:text-base text-white/90 max-w-lg">{slide.subtitle}</p>}

        {slide.ctaLabel && slide.ctaHref && (
          <Link
            href={slide.ctaHref}
            className="mt-6 inline-block bg-bonga-yellow text-bonga-blue px-4 py-2 rounded-lg font-semibold shadow"
            aria-label={`Ir a ${slide.ctaLabel}`}
          >
            {slide.ctaLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Slide;
