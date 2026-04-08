"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ROOMS } from "@/lib/data"
import { ArrowLeft, Users, ChevronLeft, ChevronRight } from "lucide-react"

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

function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9] overflow-hidden rounded-2xl bg-warm-900">
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 300ms ease-in-out",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${name} - Bild ${i + 1}`}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-warm-900 shadow-lg transition-colors hover:bg-white"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-warm-900 shadow-lg transition-colors hover:bg-white"
              aria-label="Naechstes Bild"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 right-4 z-10 rounded-lg bg-black/50 px-3 py-1.5 font-serif text-sm text-white backdrop-blur-sm">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all md:h-20 md:w-28 ${
                i === current
                  ? "ring-3 ring-alpine-600 ring-offset-2"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function RoomDetail({ slug }: { slug: string }) {
  const room = ROOMS.find((r) => r.slug === slug)

  if (!room) {
    return (
      <main className="min-h-screen bg-warm-50 pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-3xl text-warm-900">Zimmer nicht gefunden</h1>
          <Link href="/zimmer" className="mt-4 inline-block font-serif text-lg text-alpine-700 underline">
            Zurueck zur Uebersicht
          </Link>
        </div>
      </main>
    )
  }

  const otherRooms = ROOMS.filter((r) => r.slug !== slug)

  return (
    <main className="min-h-screen bg-warm-50 pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Link href="/zimmer" className="mb-6 inline-flex items-center gap-2 font-serif text-lg text-alpine-700 hover:text-alpine-800 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          Zurueck zur Uebersicht
        </Link>

        {/* Image Carousel */}
        <FadeIn>
          <ImageCarousel images={room.images} name={room.name} />
        </FadeIn>

        {/* Header Info */}
        <FadeIn delay={0.1} className="mt-8">
          <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl">{room.name}</h1>

          <div className="mt-6 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2.5 bg-warm-100 text-warm-900 font-serif text-xl font-semibold px-5 py-3 rounded-xl">
              <Users className="h-6 w-6" />
              {room.persons}
            </span>
            <span className="inline-flex items-center gap-2.5 bg-warm-100 text-warm-900 font-serif text-xl font-semibold px-5 py-3 rounded-xl">
              {room.type}
            </span>
          </div>

          <p className="mt-8 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 sm:text-2xl">
            {room.description}
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-wrap gap-3">
            {room.features.map((f) => (
              <span key={f} className="inline-flex items-center gap-2.5 bg-alpine-50 text-alpine-800 font-serif text-lg px-5 py-2.5 rounded-xl border border-alpine-100">
                <svg className="w-5 h-5 text-alpine-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {f}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Inklusivleistungen */}
        <FadeIn delay={0.2} className="mt-12">
          <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md sm:p-8">
            <h2 className="mb-6 font-serif text-2xl font-bold text-warm-900 sm:text-3xl">
              Inklusive fuer Sie
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Reichhaltiges Fruehstuecksbuffet",
                "Thermium (Dampfsauna & Infrarot)",
                "WLAN kostenlos",
                "Willkommensgruss",
                "Oeffentliche Verkehrsmittel groesstenteils kostenlos",
                "Bushaltestelle in 2 Min. erreichbar",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-warm-50 p-4">
                  <svg className="h-5 w-5 flex-shrink-0 text-alpine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-serif text-lg text-warm-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3} className="mt-12">
          <div className="rounded-2xl bg-alpine-50 border-2 border-alpine-100 p-6 sm:p-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-warm-900 mb-4">
              Interesse an diesem Zimmer?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-serif text-lg text-warm-800">
              Senden Sie uns eine unverbindliche Anfrage – wir melden uns schnellstmoeglich bei Ihnen.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/kontakt"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-alpine-700 px-10 py-4 font-serif text-xl font-bold text-white shadow-lg transition-all hover:bg-alpine-800 sm:w-auto"
              >
                Anfrage senden
              </Link>
              <a
                href="tel:+4983267165"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-alpine-700 px-10 py-4 font-serif text-xl font-bold text-alpine-700 transition-all hover:bg-alpine-50 sm:w-auto"
              >
                Anrufen: 08326 / 7165
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Other Rooms */}
        <div className="mt-16">
          <h2 className="mb-6 font-serif text-3xl font-bold text-warm-900">Weitere Zimmer</h2>
          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:grid-cols-4">
            {otherRooms.map((r) => (
              <Link
                key={r.slug}
                href={`/zimmer/${r.slug}`}
                className="group overflow-hidden rounded-xl border border-warm-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-warm-900 group-hover:text-alpine-700 transition-colors">
                    {r.name}
                  </h3>
                  <p className="mt-1 font-serif text-base text-warm-800">{r.persons}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/zimmer" className="inline-flex items-center gap-2 font-serif text-lg text-alpine-700 hover:text-alpine-800 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Zurueck zur Uebersicht
          </Link>
        </div>
      </div>
    </main>
  )
}
