"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

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

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-warm-50 pt-36 pb-20">
      <FadeIn className="mx-auto mb-14 max-w-5xl px-4 text-center sm:px-6">
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl lg:text-6xl">Service</h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Alles rund um Ihren Aufenthalt im Gästehaus Schmid.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn>
            <Link href="/service/anfahrt" className="group block rounded-2xl border border-warm-100 bg-white shadow-md transition-shadow hover:shadow-lg overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="https://storage.tramino.net/gaestehaus-schmid-20252/996674/450x253.jpg?r=1"
                  alt="Lage und Anfahrt"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-2xl font-bold text-warm-900 group-hover:text-alpine-700 transition-colors">Lage & Anfahrt</h2>
                <p className="mt-2 font-serif text-lg text-warm-800">So finden Sie uns – mit Karte und Wegbeschreibung.</p>
                <span className="mt-3 inline-flex items-center gap-1 font-serif text-base font-medium text-alpine-700">
                  Mehr erfahren <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Link href="/kontakt" className="group block rounded-2xl border border-warm-100 bg-white shadow-md transition-shadow hover:shadow-lg overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="https://storage.tramino.net/gaestehaus-schmid-20252/993331/450x253.jpg?r=1"
                  alt="Kontakt"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-2xl font-bold text-warm-900 group-hover:text-alpine-700 transition-colors">Kontakt</h2>
                <p className="mt-2 font-serif text-lg text-warm-800">Schreiben Sie uns oder rufen Sie an – wir helfen gerne.</p>
                <span className="mt-3 inline-flex items-center gap-1 font-serif text-base font-medium text-alpine-700">
                  Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </div>
    </main>
  )
}
