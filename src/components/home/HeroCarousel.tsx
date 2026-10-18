"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileSpreadsheet,
  Globe2,
  ListChecks,
  MessageCircle,
  PackageOpen,
  Pause,
  Play,
  Workflow,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import Container from "@/components/layout/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { homeHeroSlides } from "@/data/home";
import type { HeroVisualType } from "@/data/home";

const AUTOPLAY_DELAY = 6000;

function WebsiteVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[35rem]" aria-label="Demonstração de um site desenvolvido pela RODE em desktop e celular">
      <p className="sr-only">
        Captura real do portfólio executivo de Camila Timóteo Vieira apresentada
        em dispositivos desktop e mobile.
      </p>

      <div className="overflow-hidden rounded-2xl border border-border bg-surface-subtle p-2 sm:p-3">
        <div className="mb-2 flex items-center gap-1.5 px-1" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="h-2 w-2 rounded-full bg-foreground/20" />
          <span className="h-2 w-2 rounded-full bg-foreground/10" />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-background">
          <Image
            src="/images/projects/camila/hero.jpeg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className="absolute -bottom-5 right-2 w-[30%] min-w-24 overflow-hidden rounded-[1.25rem] border border-border bg-card p-1.5 shadow-card sm:right-5 sm:w-[27%]">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[0.9rem] bg-background">
          <Image
            src="/images/projects/camila/hero.jpeg"
            alt=""
            fill
            sizes="150px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

function CatalogVisual() {
  return (
    <div
      className="mx-auto w-full max-w-[31rem] rounded-3xl border border-border bg-card p-5 sm:p-7"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-border pb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-brand-champagne">
            <PackageOpen className="h-5 w-5" />
          </span>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-champagne">
              Catálogo digital
            </span>
            <span className="mt-1 block h-1.5 w-24 rounded-full bg-foreground/15" />
          </div>
        </div>
        <ListChecks className="h-5 w-5 text-muted-foreground" />
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
        {["Produtos", "Preços", "Ofertas", "Detalhes"].map((label, index) => (
          <div
            key={label}
            className="rounded-2xl border border-border bg-surface-subtle p-2 sm:p-3"
          >
            <div
              className={[
                "h-12 rounded-xl sm:aspect-[4/3] sm:h-auto",
                index === 0 ? "bg-primary/12" : "bg-foreground/[0.045]",
              ].join(" ")}
            />
            <span className="mt-2 block text-[0.65rem] font-medium text-muted-foreground sm:mt-3 sm:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground">
        <MessageCircle className="h-4 w-4" />
        Pedido pelo WhatsApp
      </div>
    </div>
  );
}

function AutomationVisual() {
  const nodes = [
    { label: "Site", icon: Globe2 },
    { label: "Planilhas", icon: FileSpreadsheet },
    { label: "Informações", icon: ListChecks },
  ];

  return (
    <div
      className="mx-auto w-full max-w-[34rem] rounded-3xl border border-border bg-card p-5 sm:p-8"
      aria-hidden="true"
    >
      <div className="mb-7 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-brand-champagne">
          <Workflow className="h-5 w-5" />
        </span>
        <div>
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-champagne">
            Fluxo integrado
          </span>
          <span className="mt-1 block text-sm text-muted-foreground">
            Ferramentas trabalhando em conjunto
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 sm:gap-3">
        {nodes.map(({ label, icon: Icon }, index) => (
          <div key={label} className="contents">
            <div className="flex min-h-24 flex-col items-center justify-center rounded-2xl border border-border bg-surface-subtle p-2 text-center sm:min-h-28 sm:p-4">
              <Icon className="h-6 w-6 text-brand-champagne" />
              <span className="mt-3 text-xs font-semibold text-foreground sm:text-sm">
                {label}
              </span>
            </div>
            {index < nodes.length - 1 && (
              <ArrowRight className="mx-auto h-4 w-4 text-primary" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-foreground/10">
        <div className="h-full w-2/3 rounded-full bg-primary" />
      </div>
    </div>
  );
}

function SlideVisual({ visual }: { visual: HeroVisualType }) {
  if (visual === "website") return <WebsiteVisual />;
  if (visual === "catalog") return <CatalogVisual />;
  return <AutomationVisual />;
}

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [isPointerInside, setIsPointerInside] = useState(false);
  const [isFocusInside, setIsFocusInside] = useState(false);
  const [isPageActive, setIsPageActive] = useState(true);
  const [isInViewport, setIsInViewport] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotionRef = useRef(false);

  const pauseFromInteraction = useCallback(() => {
    setAutoPlayEnabled(false);
  }, []);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => setCurrentIndex(api.selectedScrollSnap());
    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = motionQuery.matches;

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotionRef.current = event.matches;
      if (event.matches) setAutoPlayEnabled(false);
    };

    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    const handleVisibility = () => setIsPageActive(!document.hidden);
    const handleWindowFocus = () => setIsPageActive(true);
    const handleWindowBlur = () => setIsPageActive(false);

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const shouldRun =
      api &&
      autoPlayEnabled &&
      !isPointerInside &&
      !isFocusInside &&
      isPageActive &&
      isInViewport &&
      !reducedMotionRef.current;

    if (!shouldRun) return;

    const timer = window.setInterval(() => api.scrollNext(), AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [
    api,
    autoPlayEnabled,
    isFocusInside,
    isInViewport,
    isPageActive,
    isPointerInside,
  ]);

  const goToSlide = (index: number) => {
    pauseFromInteraction();
    api?.scrollTo(index);
  };

  const goToPrevious = () => {
    pauseFromInteraction();
    api?.scrollPrev();
  };

  const goToNext = () => {
    pauseFromInteraction();
    api?.scrollNext();
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      aria-label="Destaques da RODE"
      className="relative isolate overflow-hidden border-b border-border bg-background scroll-mt-24"
      onPointerEnter={() => setIsPointerInside(true)}
      onPointerLeave={() => setIsPointerInside(false)}
      onFocusCapture={() => setIsFocusInside(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocusInside(false);
        }
      }}
      onKeyDownCapture={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          pauseFromInteraction();
        }
      }}
    >
      <div className="hero-backdrop absolute inset-0 -z-10" />

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true, duration: 30 }}
        className="relative"
      >
        <CarouselContent
          className="ml-0"
          onPointerDown={pauseFromInteraction}
        >
          {homeHeroSlides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className="pl-0"
              aria-label={`${index + 1} de ${homeHeroSlides.length}`}
              aria-hidden={currentIndex !== index}
            >
              <Container>
                <div className="grid min-h-[42rem] items-center gap-12 pb-32 pt-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(28rem,1.05fr)] lg:gap-16 lg:pb-28 lg:pt-16">
                  <div className="max-w-[43rem]">
                    <p className="section-eyebrow">{slide.eyebrow}</p>
                    {index === 0 ? (
                      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[1.08]">
                        {slide.title}
                      </h1>
                    ) : (
                      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[1.08]">
                        {slide.title}
                      </h2>
                    )}
                    <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                      {slide.description}
                    </p>
                    <Link
                      href={slide.ctaHref}
                      tabIndex={currentIndex === index ? undefined : -1}
                      className="button-primary mt-8"
                    >
                      {slide.ctaLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="min-w-0 px-2 pb-4 sm:px-8 lg:px-0 lg:pb-0">
                    <SlideVisual visual={slide.visual} />
                  </div>
                </div>
              </Container>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute inset-x-0 bottom-7 z-10">
          <Container className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Slide anterior"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary/60 hover:text-brand-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Próximo slide"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary/60 hover:text-brand-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setAutoPlayEnabled((enabled) => !enabled)}
                aria-label={
                  autoPlayEnabled
                    ? "Pausar rotação automática"
                    : "Retomar rotação automática"
                }
                aria-pressed={!autoPlayEnabled}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary/60 hover:text-brand-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {autoPlayEnabled ? (
                  <Pause className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Play className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>

            <div
              className="flex items-center gap-2"
              aria-label="Selecionar destaque"
            >
              {homeHeroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para o slide ${index + 1}: ${slide.eyebrow}`}
                  aria-current={currentIndex === index ? "true" : undefined}
                  className="group flex h-11 min-w-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span
                    className={[
                      "block h-1.5 rounded-full transition-all",
                      currentIndex === index
                        ? "w-8 bg-primary"
                        : "w-4 bg-foreground/25 group-hover:bg-foreground/50",
                    ].join(" ")}
                  />
                </button>
              ))}
            </div>
          </Container>
        </div>
      </Carousel>

      <p
        className="sr-only"
        aria-live={autoPlayEnabled ? "off" : "polite"}
      >
        {`Slide ${currentIndex + 1} de ${homeHeroSlides.length}: ${homeHeroSlides[currentIndex]?.title}`}
      </p>
    </section>
  );
}
