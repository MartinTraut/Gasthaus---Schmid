"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { HIKING_TIPS, ACTIVITY_LINKS } from "@/lib/data"
import { ArrowRight, ExternalLink, Trees, Mountain, Waves, Snowflake, PersonStanding, Bike } from "lucide-react"

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

const winterActivities = [
  { icon: Snowflake, title: "Winterwandern", text: "Maerchenhafte Wanderungen auf gut geraeumten Wegen laden zum Geniessen ein." },
  { icon: PersonStanding, title: "Langlaufen", text: "Unser Loipennetz mit unzaehligen Kilometern verspricht Langlaufvergnuegen vom Feinsten." },
  { icon: Mountain, title: "Skifahren", text: "Die Hoernerdoerfer bieten Skivergnuegen fuer Jung und Alt, Koenner oder Anfaenger." },
]

const categoryIcons: Record<string, React.ElementType> = {
  "Natur & Erlebnis": Trees,
  "Sport & Abenteuer": Mountain,
  "Freizeit & Region": Waves,
}

export default function UrlaubstippsPage() {
  return (
    <main className="min-h-screen bg-warm-50 pt-28 pb-20">
      <FadeIn className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6">
        <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">Erleben Sie das Allgaeu</p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl lg:text-6xl">
          Urlaubstipps
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Urlaub im Allgaeu ist Sommer wie Winter sehr abwechslungsreich.
          Entdecken Sie unsere Lieblingsziele.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6">
        {/* Wanderziele */}
        <section>
          <FadeIn className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-warm-900 sm:text-4xl">Wanderziele</h2>
            <p className="mx-auto mt-3 max-w-2xl font-serif text-lg text-warm-800">
              Die schoensten Wanderungen direkt ab Obermaiselstein.
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HIKING_TIPS.map((tip, i) => (
              <FadeIn key={tip.slug} delay={i * 0.08}>
                <Link
                  href={`/urlaubstipps/${tip.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-warm-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={tip.image}
                      alt={tip.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 font-serif text-xl font-bold text-warm-900 group-hover:text-alpine-700 transition-colors sm:text-2xl">
                      {tip.name}
                    </h3>
                    <p className="font-serif text-base leading-relaxed text-warm-800 line-clamp-3">
                      {tip.shortDescription}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 font-serif text-base font-medium text-alpine-700">
                      Mehr erfahren <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Winter */}
        <section>
          <FadeIn className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-warm-900 sm:text-4xl">Winteraktivitaeten</h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-3">
            {winterActivities.map((act, i) => (
              <FadeIn key={act.title} delay={i * 0.1}>
                <div className="flex flex-col items-center rounded-2xl border border-warm-100 bg-white p-6 text-center shadow-sm sm:p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-alpine-100 text-alpine-700">
                    <act.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-warm-900">{act.title}</h3>
                  <p className="font-serif text-base leading-relaxed text-warm-800">{act.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Nuetzliche Links */}
        <section>
          <FadeIn className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-warm-900 sm:text-4xl">Nuetzliche Links</h2>
          </FadeIn>
          <div className="space-y-8">
            {ACTIVITY_LINKS.map((cat, catIndex) => {
              const Icon = categoryIcons[cat.category] || Trees
              return (
                <FadeIn key={cat.category} delay={catIndex * 0.1}>
                  <div className="overflow-hidden rounded-2xl border border-warm-200 bg-white shadow-lg">
                    <div className="flex items-center gap-4 border-b border-warm-100 bg-warm-50 px-6 py-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-alpine-700 text-white shadow-sm">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-warm-900">{cat.category}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      {cat.items.map((item, i) => (
                        <a
                          key={item.name}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between border-b border-warm-100/60 px-6 py-4 transition-colors last:border-b-0 hover:bg-alpine-50"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-alpine-100 font-serif text-sm font-bold text-alpine-700">
                              {i + 1}
                            </span>
                            <span className="font-serif text-lg font-medium text-warm-900 group-hover:text-alpine-700">
                              {item.name}
                            </span>
                          </div>
                          <ExternalLink className="h-5 w-5 shrink-0 text-warm-300 transition-colors group-hover:text-alpine-600" />
                        </a>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
