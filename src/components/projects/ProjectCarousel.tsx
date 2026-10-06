"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { ProjectImage } from "@/data/projects";

interface ProjectCarouselProps {
  images: ProjectImage[];
}

const carouselOptions = {
  align: "start",
  loop: true,
  duration: 28,
} as const;

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = images.length;

  const currentImage = images[currentIndex];
  const currentLabel = currentImage?.label ?? "Imagem do projeto";
  const currentCounter = useMemo(
    () =>
      String(currentIndex + 1).padStart(2, "0") +
      " / " +
      String(slideCount).padStart(2, "0"),
    [currentIndex, slideCount],
  );

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      const selectedIndex = api.selectedScrollSnap();

      setCurrentIndex((current) =>
        current === selectedIndex ? current : selectedIndex,
      );
    };
    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  if (slideCount === 0) {
    return null;
  }

  return (
    <section
      aria-label="Galeria do projeto Camila Timóteo Vieira"
      className="relative min-w-0 overflow-hidden"
    >
      <div className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#1A1A1A] p-3 shadow-[0_20px_64px_rgba(0,0,0,0.24)] sm:p-4">
        <Carousel
          opts={carouselOptions}
          setApi={setApi}
          className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#090909]"
        >
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>

            <div className="min-w-0 flex-1 text-center">
              <span className="block truncate text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {currentLabel}
              </span>
            </div>

            <span className="shrink-0 rounded-full border border-primary/25 px-3 py-1 text-[0.65rem] font-semibold text-primary">
              {currentCounter}
            </span>
          </div>

          <CarouselContent className="ml-0 max-w-full">
            {images.map((image, index) => (
              <CarouselItem
                key={image.src}
                className="pl-0"
                aria-label={`Imagem ${index + 1} de ${slideCount}: ${image.label}`}
              >
                <div className="relative flex aspect-[16/11] items-center justify-center bg-[#050505] p-3 sm:aspect-[16/10] sm:p-4 lg:aspect-[16/11]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1280px) 560px, (min-width: 1024px) 48vw, 100vw"
                    priority={index === 0}
                    className={image.fit === "cover" ? "object-cover" : "object-contain"}
                    style={{ objectPosition: image.objectPosition }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3 sm:px-5">
            <button
              type="button"
              aria-label="Imagem anterior do projeto"
              onClick={() => api?.scrollPrev()}
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-white/10 bg-[#111111] text-primary transition hover:border-primary/45 hover:bg-[#181818] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 sm:min-h-11 sm:min-w-11"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <p className="min-w-0 flex-1 truncate text-center text-xs font-medium text-muted-foreground sm:text-sm">
              {currentLabel}
            </p>

            <button
              type="button"
              aria-label="Próxima imagem do projeto"
              onClick={() => api?.scrollNext()}
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-white/10 bg-[#111111] text-primary transition hover:border-primary/45 hover:bg-[#181818] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 sm:min-h-11 sm:min-w-11"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </Carousel>
      </div>

      {slideCount > 1 && (
        <div className="mt-4 flex justify-center gap-2" aria-label="Selecionar captura do projeto">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={"Ir para a imagem " + (index + 1) + " de " + slideCount}
              aria-current={currentIndex === index ? "true" : undefined}
              onClick={() => api?.scrollTo(index)}
              className={[
                "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
                currentIndex === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-white/25 hover:bg-white/45",
              ].join(" ")}
            >
              <span className="sr-only">{image.label}</span>
            </button>
          ))}
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        {"Imagem " + (currentIndex + 1) + " de " + slideCount + ": " + currentLabel}
      </p>
    </section>
  );
}
