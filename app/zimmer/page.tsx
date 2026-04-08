"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ROOMS } from "@/lib/data"
import { Users, ArrowRight } from "lucide-react"

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.unobserve(el) } }, { rootMargin: "-80px" })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${className}`} style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(30px)", transitionDelay: `${delay * 1000}ms` }}>
      {children}
    </div>
  )
}

export default function ZimmerPage() {
  return (
    <main className="min-h-screen bg-warm-50 pt-36 pb-20">
      <FadeIn className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6">
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl lg:text-6xl">
          Unsere Zimmer
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Fünf liebevoll eingerichtete Zimmer im Herzen des Allgäus.
          Alle Zimmer mit Frühstück, WLAN und Zugang zum Thermium.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {ROOMS.map((room, index) => (
            <FadeIn key={room.slug} delay={index * 0.1}>
              <div className="overflow-hidden rounded-2xl border border-warm-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <Link href={`/zimmer/${room.slug}`} className="relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6 md:p-8">
                  <Link href={`/zimmer/${room.slug}`}>
                    <h3 className="font-serif text-2xl font-bold text-warm-900 transition-colors hover:text-alpine-700 md:text-3xl">
                      {room.name}
                    </h3>
                  </Link>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-warm-50 px-3 py-1 font-serif text-base text-warm-800">
                      <Users className="h-4 w-4" />
                      {room.persons}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-warm-50 px-3 py-1 font-serif text-base text-warm-800">
                      {room.type}
                    </span>
                  </div>
                  <p className="mt-5 font-serif text-lg leading-relaxed text-warm-800">
                    {room.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {room.features.map((f) => (
                      <span key={f} className="flex items-start gap-2 font-serif text-base text-warm-900">
                        <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-alpine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/zimmer/${room.slug}`}
                      className="flex-1 text-center rounded-xl border-2 border-alpine-700 py-3 px-6 font-serif text-lg font-semibold text-alpine-700 transition-colors hover:bg-alpine-50"
                    >
                      Details ansehen
                    </Link>
                    <Link
                      href={`/buchen?zimmer=${encodeURIComponent(room.name)}`}
                      className="flex-1 text-center rounded-xl bg-alpine-700 py-3 px-6 font-serif text-lg font-semibold text-white shadow-md transition-colors hover:bg-alpine-800"
                    >
                      Jetzt buchen
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  )
}
