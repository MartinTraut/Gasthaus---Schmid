"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { HIKING_TIPS } from "@/lib/data"
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react"

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.unobserve(el) } }, { rootMargin: "-40px" })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`will-change-[opacity,transform] ${className}`} style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(16px)", transition: `opacity 0.5s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s` }}>
      {children}
    </div>
  )
}

/** Replace the size portion of a tramino storage URL with 1200.jpg for full quality */
function getFullSizeUrl(url: string): string {
  return url.replace(/\/\d+(?:x\d+)?\.jpg/, "/1200.jpg")
}

export default function HikingDetail({ slug }: { slug: string }) {
  const tip = HIKING_TIPS.find((t) => t.slug === slug)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const goNext = useCallback(() => {
    if (!tip) return
    setIsLoading(true)
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % tip.images.length : null)
  }, [tip])
  const goPrev = useCallback(() => {
    if (!tip) return
    setIsLoading(true)
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + tip.images.length) % tip.images.length : null)
  }, [tip])

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [lightboxIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxIndex, goNext, goPrev, closeLightbox])

  // Touch swipe
  useEffect(() => {
    if (lightboxIndex === null) return
    let startX = 0
    const handleStart = (e: TouchEvent) => { startX = e.touches[0].clientX }
    const handleEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX
      if (Math.abs(diff) > 60) {
        if (diff > 0) goNext()
        else goPrev()
      }
    }
    window.addEventListener("touchstart", handleStart, { passive: true })
    window.addEventListener("touchend", handleEnd, { passive: true })
    return () => {
      window.removeEventListener("touchstart", handleStart)
      window.removeEventListener("touchend", handleEnd)
    }
  }, [lightboxIndex, goNext, goPrev])

  if (!tip) {
    return (
      <main className="min-h-screen bg-warm-50 pt-44 pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-3xl text-warm-900">Wanderziel nicht gefunden</h1>
          <Link href="/urlaubstipps" className="mt-4 inline-block font-serif text-lg text-alpine-700 underline">
            Zurück zu Urlaubstipps
          </Link>
        </div>
      </main>
    )
  }

  const otherTips = HIKING_TIPS.filter((t) => t.slug !== slug)

  return (
    <main className="min-h-screen bg-warm-50">
      <div className="pt-44 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Hero Image */}
          <FadeIn>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={tip.images[0]}
                alt={tip.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8">
            <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl">{tip.name}</h1>
            <p className="mt-6 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 sm:text-2xl">
              {tip.description}
            </p>
          </FadeIn>

          {/* Image Gallery – Impressionen (ohne erstes Bild, das ist bereits der Hero) */}
          {tip.images.length > 1 && (
            <div className="mt-14">
              <FadeIn>
                <h2 className="mb-6 font-serif text-2xl font-bold text-warm-900 sm:text-3xl">Impressionen</h2>
              </FadeIn>
              <div className="grid grid-cols-2 gap-4">
                {tip.images.slice(1).map((img, i) => (
                  <FadeIn key={img} delay={0.05 + i * 0.1}>
                    <button
                      onClick={() => { setIsLoading(true); setLightboxIndex(i + 1) }}
                      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md"
                    >
                      <Image
                        src={getFullSizeUrl(img)}
                        alt={`${tip.name} - Bild ${i + 2}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, 50vw"
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                    </button>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}

          <FadeIn delay={0.2} className="mt-10">
            <Link href="/urlaubstipps" className="inline-flex items-center gap-2 font-serif text-lg font-semibold text-alpine-700 hover:text-alpine-800 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Zurück zu Urlaubstipps
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* Weitere Wanderziele – eigene Section mit anderem Hintergrund */}
      <section className="bg-alpine-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="mb-10 text-center">
            <p className="accent-script mb-2 text-2xl text-white/70 sm:text-3xl">Entdecken Sie mehr</p>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">Weitere Wanderziele</h2>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherTips.map((t, i) => (
              <FadeIn key={t.slug} delay={0.1 + i * 0.1}>
                <Link
                  href={`/urlaubstipps/${t.slug}`}
                  className="hover-lift group block overflow-hidden rounded-2xl bg-white shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={90}
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-serif text-lg font-bold text-warm-900 group-hover:text-alpine-700 transition-colors duration-200 sm:text-xl">
                      {t.name}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 font-serif text-base font-semibold text-alpine-700">
                      Entdecken <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox – Fullscreen */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/97 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-20 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
            aria-label="Schließen"
          >
            <X className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-6 sm:p-4"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-6 sm:p-4"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>

          <div
            className="relative flex h-full w-full items-center justify-center px-14 py-20 sm:px-24 sm:py-24"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-3 border-white/20 border-t-white" />
              </div>
            )}
            <Image
              key={lightboxIndex}
              src={getFullSizeUrl(tip.images[lightboxIndex])}
              alt={`${tip.name} - Bild ${lightboxIndex + 1}`}
              fill
              className={`object-contain transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
              sizes="100vw"
              quality={90}
              priority
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-xl bg-black/70 px-5 py-2 text-center backdrop-blur-sm sm:bottom-6">
            <p className="font-serif text-sm font-semibold text-white/70">
              {lightboxIndex + 1} / {tip.images.length}
            </p>
          </div>
        </div>
      )}
    </main>
  )
}
