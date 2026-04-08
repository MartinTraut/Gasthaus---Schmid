"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { HIKING_TIPS } from "@/lib/data"
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"

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
    <div ref={ref} className={`transition-all duration-700 ease-out ${className}`} style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(20px)", transitionDelay: `${delay * 1000}ms` }}>
      {children}
    </div>
  )
}

export default function HikingDetail({ slug }: { slug: string }) {
  const tip = HIKING_TIPS.find((t) => t.slug === slug)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = () => setLightboxIndex(null)
  const goNext = useCallback(() => {
    if (!tip) return
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % tip.images.length : null)
  }, [tip])
  const goPrev = useCallback(() => {
    if (!tip) return
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + tip.images.length) % tip.images.length : null)
  }, [tip])

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

  if (!tip) {
    return (
      <main className="min-h-screen bg-warm-50 pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-3xl text-warm-900">Wanderziel nicht gefunden</h1>
          <Link href="/urlaubstipps" className="mt-4 inline-block font-serif text-lg text-alpine-700 underline">
            Zurueck zu Urlaubstipps
          </Link>
        </div>
      </main>
    )
  }

  const otherTips = HIKING_TIPS.filter((t) => t.slug !== slug)

  return (
    <main className="min-h-screen bg-warm-50 pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Link href="/urlaubstipps" className="mb-6 inline-flex items-center gap-2 font-serif text-lg text-alpine-700 hover:text-alpine-800">
          <ArrowLeft className="h-5 w-5" />
          Zurueck zu Urlaubstipps
        </Link>

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

        {/* Image Gallery */}
        {tip.images.length > 1 && (
          <FadeIn delay={0.2} className="mt-12">
            <h2 className="mb-6 font-serif text-2xl font-bold text-warm-900">Impressionen</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {tip.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src={img}
                    alt={`${tip.name} - Bild ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Other Tips */}
        <div className="mt-16">
          <h2 className="mb-6 font-serif text-2xl font-bold text-warm-900">Weitere Wanderziele</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {otherTips.map((t) => (
              <Link
                key={t.slug}
                href={`/urlaubstipps/${t.slug}`}
                className="group overflow-hidden rounded-xl border border-warm-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={t.image} alt={t.name} fill sizes="25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-3">
                  <h3 className="font-serif text-base font-bold text-warm-900 group-hover:text-alpine-700 transition-colors">{t.name}</h3>
                </div>
              </Link>
            ))}
          </div>
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
            <img src={tip.images[lightboxIndex]} alt={`${tip.name} - Bild ${lightboxIndex + 1}`} className="max-h-[85vh] max-w-full rounded-lg object-contain" />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-serif text-base text-white/60">{lightboxIndex + 1} / {tip.images.length}</p>
        </div>
      )}
    </main>
  )
}
