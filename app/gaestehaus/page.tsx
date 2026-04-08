"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Coffee, Sparkles, Droplets, Award } from "lucide-react"

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

const highlights = [
  { icon: Coffee, title: "Frühstücksbuffet", text: "Reichhaltiges Buffet mit regionalen Produkten – täglich frisch für Sie zubereitet." },
  { icon: Sparkles, title: "Thermium Wellness", text: "Kleine Wellnessanlage mit Dampfsauna und Infrarotwärmekabine zur Erholung." },
  { icon: Droplets, title: "Grander Wasser", text: "Belebtes Wasser nach der Grander-Technologie für Ihr Wohlbefinden." },
  { icon: Award, title: "Ausgezeichnete Qualität", text: "Persönlicher Service und liebevolle Ausstattung für Ihren perfekten Urlaub." },
]

export default function GaestehausPage() {
  return (
    <main className="min-h-screen bg-warm-50 pt-36 pb-20">
      {/* Header */}
      <FadeIn className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6">
        <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">Nicht daheim und doch zu Hause</p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl lg:text-6xl">
          Gästehaus Schmid
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Urlaub mit Herz in Obermaiselstein im Allgäu – gemütlich, freundlich, familiär.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6">
        {/* Ueber uns */}
        <FadeIn>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://storage.tramino.net/gaestehaus-schmid-20252/987420/567x319.jpg?r=1"
                alt="Gästehaus Schmid Außenansicht"
                width={600}
                height={340}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="mb-6 font-serif text-3xl font-semibold text-warm-900 sm:text-4xl">
                Willkommen in unserem Gästehaus
              </h2>
              <p className="mb-4 font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                Unser Gästehaus liegt in ruhiger Lage auf 859m Höhe in
                Obermaiselstein, nahe Fischen und Oberstdorf. Hier erwartet
                Sie Tradition, Natur und abwechslungsreiche
                Freizeitmöglichkeiten von Frühling bis Winter.
              </p>
              <p className="mb-6 font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                Genießen Sie den Panoramablick auf die Berge, erholsame
                Ruhe und zeitgemäßen Komfort. Fünf individuell
                eingerichtete Zimmer, ein reichhaltiges Frühstücksbuffet
                und unser kleiner Wellnessbereich machen Ihren Aufenthalt
                unvergesslich.
              </p>
              <p className="accent-script text-2xl text-alpine-700 sm:text-3xl">
                Familie Schmid
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Highlights Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <FadeIn key={h.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-alpine-100 text-alpine-700">
                    <h.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-warm-900 sm:text-2xl">{h.title}</h3>
                </div>
                <p className="font-serif text-lg leading-relaxed text-warm-800">{h.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Fruehstueck Section */}
        <FadeIn>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">Guten Morgen</p>
              <h2 className="mb-6 font-serif text-3xl font-semibold text-warm-900 sm:text-4xl">
                Frühstück mit regionalen Produkten
              </h2>
              <p className="mb-4 font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                Starten Sie den Tag mit unserem leckeren, reichhaltigen
                Frühstücksbuffet mit regionalen Produkten. Frisch gestärkt
                genießen Sie einen erlebnisreichen Tag im schönen Allgäu.
              </p>
              <p className="font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                Von frischem Gebäck über hausgemachte Marmeladen bis hin
                zu regionaler Wurst und Käse – wir verwenden Produkte
                von Erzeugern aus der Region.
              </p>
            </div>
            <div className="relative order-1 overflow-hidden rounded-2xl shadow-xl lg:order-2">
              <Image
                src="https://storage.tramino.net/gaestehaus-schmid-20252/987421/400x300.jpg"
                alt="Frühstücksraum mit gedecktem Tisch"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="text-center">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/zimmer"
              className="inline-flex items-center gap-2 rounded-lg bg-alpine-700 px-8 py-3.5 font-serif text-lg font-semibold text-white shadow-md transition-all hover:bg-alpine-800"
            >
              Unsere Zimmer
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/gaestehaus/thermium"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-alpine-700 px-8 py-3.5 font-serif text-lg font-semibold text-alpine-700 transition-all hover:bg-alpine-50"
            >
              Thermium entdecken
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
