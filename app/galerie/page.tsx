"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { GALLERY_IMAGES } from "@/lib/data"
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react"

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

const allImages = [...GALLERY_IMAGES.gaestehaus, ...GALLERY_IMAGES.umgebung]

export default function GaleriePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = () => setLightboxIndex(null)
  const goNext = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % allImages.length : null)
  }, [])
  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + allImages.length) % allImages.length : null)
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxIndex, goNext, goPrev])

  return (
    <div className="min-h-screen bg-warm-50 pt-28 pb-20">
      <FadeIn className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6">
        <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">Impressionen</p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl">Unsere Bildergalerie</h1>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-xl leading-relaxed text-warm-800">
          Entdecken Sie das Gaestehaus Schmid und die wunderschoene Umgebung in Bildern.
        </p>
        <p className="mt-2 font-serif text-base text-warm-800/50">{allImages.length} Bilder</p>
      </FadeIn>

      {/* Gaestehaus Section */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-warm-900 sm:text-3xl">Gaestehaus Schmid</h2>
          <p className="mt-2 font-serif text-lg text-warm-800/70">Unser Haus und die Raeumlichkeiten.</p>
        </FadeIn>

        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
          {GALLERY_IMAGES.gaestehaus.map((img, index) => (
            <div key={img.src} className="mb-3 break-inside-avoid">
              <FadeIn delay={(index % 6) * 0.05}>
                <button
                  onClick={() => setLightboxIndex(index)}
                  className="group w-full overflow-hidden rounded-2xl shadow-md"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </button>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Umgebung Section */}
        <FadeIn className="mb-8 mt-16">
          <h2 className="font-serif text-2xl font-bold text-warm-900 sm:text-3xl">Umgebung & Natur</h2>
          <p className="mt-2 font-serif text-lg text-warm-800/70">Die traumhafte Allgaeuer Landschaft rund um Obermaiselstein.</p>
        </FadeIn>

        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
          {GALLERY_IMAGES.umgebung.map((img, index) => {
            const globalIndex = GALLERY_IMAGES.gaestehaus.length + index
            return (
              <div key={img.src} className="mb-3 break-inside-avoid">
                <FadeIn delay={(index % 6) * 0.05}>
                  <button
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="group w-full overflow-hidden rounded-2xl shadow-md"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} className="w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </button>
                </FadeIn>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 z-10 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/25"><X className="h-6 w-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); goPrev() }} className="absolute left-4 z-10 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/25"><ChevronLeft className="h-7 w-7" /></button>
          <button onClick={(e) => { e.stopPropagation(); goNext() }} className="absolute right-4 z-10 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/25"><ChevronRight className="h-7 w-7" /></button>
          <div className="flex max-h-[85vh] max-w-5xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={allImages[lightboxIndex].src} alt={allImages[lightboxIndex].alt} className="max-h-[85vh] max-w-full rounded-lg object-contain" />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-serif text-base text-white/60">{lightboxIndex + 1} / {allImages.length}</p>
        </div>
      )}
    </div>
  )
}
