"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Flame, Waves } from "lucide-react"

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

export default function ThermiumPage() {
  return (
    <main className="min-h-screen bg-warm-50 pt-44 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Link href="/gaestehaus" className="mb-6 inline-flex items-center gap-2 font-serif text-lg text-alpine-700 hover:text-alpine-800">
          <ArrowLeft className="h-5 w-5" />
          Zurück zum Gästehaus
        </Link>
      </div>

      <FadeIn className="mx-auto mb-14 max-w-5xl px-4 text-center sm:px-6">
        <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">Wellness & Erholung</p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl">Thermium</h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Unsere kleine Wellnessanlage für Körper und Seele.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://storage.tramino.net/gaestehaus-schmid-20252/1022138/400x300.jpg"
              alt="Thermium Wellnessbereich"
              width={900}
              height={500}
              className="h-auto w-full object-cover"
              sizes="100vw"
              quality={90}
            />
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-alpine-100 text-alpine-700">
                  <Flame className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-warm-900">Dampfsauna</h2>
              </div>
              <p className="font-serif text-lg leading-relaxed text-warm-800">
                Genießen Sie wohltuende Wärme in unserer Dampfsauna. Die milde
                Temperatur und hohe Luftfeuchtigkeit sind besonders schonend
                und ideal zur Entspannung nach einem aktiven Tag in den Bergen.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-alpine-100 text-alpine-700">
                  <Waves className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-warm-900">Infrarotwärmekabine</h2>
              </div>
              <p className="font-serif text-lg leading-relaxed text-warm-800">
                Tiefenwärme für Muskeln und Gelenke. Unsere
                Infrarotwärmekabine sorgt für Entspannung und Wohlbefinden –
                besonders angenehm nach einer Wanderung oder einem Skitag.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="text-center">
          <p className="mb-6 font-serif text-lg text-warm-800">
            Das Thermium steht allen Gästen des Hauses kostenlos zur Verfügung.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-alpine-700 px-8 py-3.5 font-serif text-lg font-semibold text-white shadow-md transition-all hover:bg-alpine-800"
          >
            Jetzt anfragen
          </Link>
        </FadeIn>
      </div>
    </main>
  )
}
