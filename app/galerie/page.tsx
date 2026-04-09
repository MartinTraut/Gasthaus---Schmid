"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { GALLERY_IMAGES } from "@/lib/data"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.unobserve(el) } }, { rootMargin: "-50px" })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${className}`} style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(30px)", transitionDelay: `${delay * 1000}ms` }}>
      {children}
    </div>
  )
}

/** Replace the size portion of a tramino storage URL with 1200.jpg for full quality */
function getFullSizeUrl(url: string): string {
  return url.replace(/\/\d+(?:x\d+)?\.jpg/, "/1200.jpg")
}

const allImages = [...GALLERY_IMAGES.gaestehaus, ...GALLERY_IMAGES.umgebung]

export default function GaleriePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const goNext = useCallback(() => {
    setIsLoading(true)
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % allImages.length : null)
  }, [])
  const goPrev = useCallback(() => {
    setIsLoading(true)
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + allImages.length) % allImages.length : null)
  }, [])

  // Lock body scroll when lightbox is open
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

  // Touch swipe support
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

  return (
    <div className="min-h-screen bg-warm-50 pt-44 pb-20">
      <FadeIn className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6">
        <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">Impressionen</p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl">Unsere Bildergalerie</h1>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-xl leading-relaxed text-warm-800">
          Entdecken Sie das Gästehaus Schmid und die wunderschöne Umgebung in Bildern.
        </p>
        <p className="mt-2 font-serif text-base text-warm-800/50">{allImages.length} Bilder</p>
      </FadeIn>

      {/* Gästehaus Section */}
      <div id="gaestehaus" className="mx-auto max-w-6xl scroll-mt-48 px-4 sm:px-6">
        <FadeIn className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-warm-900 sm:text-3xl">Gästehaus Schmid</h2>
          <p className="mt-2 font-serif text-lg text-warm-800/70">Unser Haus und die Räumlichkeiten.</p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.gaestehaus.map((img, index) => (
            <FadeIn key={img.src} delay={(index % 8) * 0.05}>
              <button
                onClick={() => { setIsLoading(true); setLightboxIndex(index) }}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </button>
            </FadeIn>
          ))}
        </div>

        {/* Umgebung Section */}
        <div id="umgebung" className="scroll-mt-48" />
        <FadeIn className="mb-8 mt-16">
          <h2 className="font-serif text-2xl font-bold text-warm-900 sm:text-3xl">Umgebung & Natur</h2>
          <p className="mt-2 font-serif text-lg text-warm-800/70">Die traumhafte Allgäuer Landschaft rund um Obermaiselstein.</p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.umgebung.map((img, index) => {
            const globalIndex = GALLERY_IMAGES.gaestehaus.length + index
            return (
              <FadeIn key={img.src} delay={(index % 8) * 0.05}>
                <button
                  onClick={() => { setIsLoading(true); setLightboxIndex(globalIndex) }}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </button>
              </FadeIn>
            )
          })}
        </div>
      </div>

      {/* Lightbox – Fullscreen */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/97 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-20 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
            aria-label="Schließen"
          >
            <X className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-6 sm:p-4"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-6 sm:p-4"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>

          {/* Image Container – truly fullscreen */}
          <div
            className="relative flex h-full w-full items-center justify-center px-4 py-16 sm:px-14 sm:py-20 lg:px-24 lg:py-24"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-3 border-white/20 border-t-white" />
              </div>
            )}
            <Image
              key={lightboxIndex}
              src={getFullSizeUrl(allImages[lightboxIndex].src)}
              alt={allImages[lightboxIndex].alt}
              fill
              className={`object-contain transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
              sizes="100vw"
              quality={90}
              priority
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-xl bg-black/70 px-5 py-2 text-center backdrop-blur-sm sm:bottom-6">
            <p className="font-serif text-sm font-semibold text-white/70">
              {lightboxIndex + 1} / {allImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
