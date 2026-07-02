"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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

const AUTOPLAY_DELAY = 5000;
const RESUME_DELAY = 7000;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const resumeTimeoutRef = useRef<number | null>(null);
  const autoplayTimeoutRef = useRef<number | null>(null);
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

  const clearResumeTimer = useCallback(() => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }, []);

  const clearAutoplayTimer = useCallback(() => {
    if (autoplayTimeoutRef.current) {
      window.clearTimeout(autoplayTimeoutRef.current);
      autoplayTimeoutRef.current = null;
    }
  }, []);

  const pauseAutoplay = useCallback(() => {
    clearResumeTimer();
    clearAutoplayTimer();
    setIsPaused(true);
  }, [clearAutoplayTimer, clearResumeTimer]);

  const resumeAutoplay = useCallback(
    (delay = 0) => {
      clearResumeTimer();

      if (delay > 0) {
        resumeTimeoutRef.current = window.setTimeout(() => {
          setIsPaused(false);
        }, delay);
        return;
      }

      setIsPaused(false);
    },
    [clearResumeTimer],
  );

  const handleManualInteraction = useCallback(() => {
    pauseAutoplay();
    resumeAutoplay(RESUME_DELAY);
  }, [pauseAutoplay, resumeAutoplay]);

  const goToSlide = useCallback(
    (index: number) => {
      api?.scrollTo(index);
      handleManualInteraction();
    },
    [api, handleManualInteraction],
  );

  const goToPrevious = useCallback(() => {
    api?.scrollPrev();
    handleManualInteraction();
  }, [api, handleManualInteraction]);

  const goToNext = useCallback(() => {
    api?.scrollNext();
    handleManualInteraction();
  }, [api, handleManualInteraction]);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    const resumeAfterDrag = () => resumeAutoplay(RESUME_DELAY);

    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);
    api.on("pointerDown", pauseAutoplay);
    api.on("settle", resumeAfterDrag);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
      api.off("pointerDown", pauseAutoplay);
      api.off("settle", resumeAfterDrag);
    };
  }, [api, pauseAutoplay, resumeAutoplay]);

  useEffect(() => {
    clearAutoplayTimer();

    if (!api || slideCount < 2 || isPaused || prefersReducedMotion || document.hidden) {
      return;
    }

    autoplayTimeoutRef.current = window.setTimeout(() => {
      api.scrollNext();
    }, AUTOPLAY_DELAY);

    return clearAutoplayTimer;
  }, [api, clearAutoplayTimer, currentIndex, isPaused, prefersReducedMotion, slideCount]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseAutoplay();
        return;
      }

      resumeAutoplay(RESUME_DELAY);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [pauseAutoplay, resumeAutoplay]);

  useEffect(
    () => () => {
      clearResumeTimer();
      clearAutoplayTimer();
    },
    [clearAutoplayTimer, clearResumeTimer],
  );

  if (slideCount === 0) {
    return null;
  }

  return (
    <section
      aria-label="Galeria do projeto Camila Timóteo Vieira"
      className="relative min-w-0 overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={() => resumeAutoplay(RESUME_DELAY)}
      onPointerEnter={pauseAutoplay}
      onPointerLeave={() => resumeAutoplay(RESUME_DELAY)}
      onFocusCapture={pauseAutoplay}
      onBlurCapture={() => resumeAutoplay(RESUME_DELAY)}
      onTouchStart={pauseAutoplay}
      onTouchEnd={() => resumeAutoplay(RESUME_DELAY)}
    >
      <div className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#1A1A1A] p-3 shadow-[0_20px_64px_rgba(0,0,0,0.24)] sm:p-4">
        <Carousel
          opts={{ align: "start", loop: true, duration: 28 }}
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
              <CarouselItem key={image.src} className="pl-0">
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
              onClick={goToPrevious}
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
              onClick={goToNext}
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
              onClick={() => goToSlide(index)}
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
