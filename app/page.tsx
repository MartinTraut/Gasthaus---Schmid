"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight, Mountain, Home, Users, ChevronDown, Coffee, Sparkles, BusFront } from "lucide-react"
import { HERO_IMAGES, ROOMS } from "@/lib/data"

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: "-50px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay * 1000}ms`,
      }}
    >
      {children}
    </div>
  )
}

const stats = [
  { icon: Mountain, value: "859m", label: "Hoehe" },
  { icon: Home, value: "5", label: "Zimmer" },
  { icon: Coffee, value: "Taeglich", label: "Fruehstueck" },
]

const usps = [
  { icon: Coffee, text: "Reichhaltiges Fruehstuecksbuffet mit regionalen Produkten" },
  { icon: Sparkles, text: "Thermium: Dampfsauna & Infrarotwaermekabine" },
  { icon: BusFront, text: "Bushaltestelle in 2 Min. – oeffentl. Verkehr groesstenteils kostenlos" },
  { icon: Users, text: "Familiaer, herzlich und persoenlich" },
]

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [heroHeight, setHeroHeight] = useState<string>("100svh")

  useEffect(() => {
    setHeroHeight(`${window.innerHeight}px`)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] w-full overflow-hidden sm:min-h-[600px]"
        style={{ height: heroHeight, transform: "translate3d(0,0,0)" }}
      >
        {HERO_IMAGES.map((img, index) => (
          <div
            key={img.src}
            className="absolute inset-0"
            style={{
              opacity: index === currentImage ? 1 : 0,
              transition: "opacity 2500ms ease-in-out",
              willChange: index === currentImage ? "opacity" : "auto",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-24 text-center text-white">
          <p
            className="mb-4 font-serif text-base tracking-[0.2em] uppercase text-white sm:text-lg animate-fade-in-up"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)", animationDelay: "0.2s" }}
          >
            Urlaub in Obermaiselstein auf 859m Hoehe
          </p>

          <h1
            className="mb-6 max-w-4xl font-serif text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up"
            style={{ textShadow: "0 3px 12px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)", animationDelay: "0.5s" }}
          >
            Nicht daheim und doch{" "}
            <span className="accent-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              zu Hause
            </span>
          </h1>

          <p
            className="mb-10 max-w-2xl font-serif text-lg leading-relaxed text-white sm:text-xl animate-fade-in-up"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)", animationDelay: "0.8s" }}
          >
            Gemuetlich, freundlich, familiaer – entfliehen Sie dem Alltag
            und geniessen Sie erholsame Tage im schoenen Allgaeu.
          </p>

          <div
            className="flex flex-col gap-4 sm:flex-row animate-fade-in-up"
            style={{ animationDelay: "1.1s" }}
          >
            <Link
              href="/zimmer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-serif text-base font-semibold text-alpine-800 shadow-md sm:px-10 sm:py-4 sm:text-lg"
            >
              Unsere Zimmer
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-alpine-700 px-6 py-3.5 font-serif text-base font-semibold text-white shadow-md sm:px-10 sm:py-4 sm:text-lg"
            >
              Anfrage senden
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll-Pfeil */}
      <div className="relative z-10 -mt-6 flex justify-center">
        <a
          href="#ueber-uns"
          className="flex flex-col items-center gap-1 rounded-full bg-white px-6 py-3 shadow-lg animate-fade-in-up"
          style={{ animationDelay: "1.5s" }}
        >
          <span className="font-serif text-sm font-semibold tracking-wider text-alpine-700">
            Mehr entdecken
          </span>
          <ChevronDown className="h-5 w-5 text-alpine-700 animate-pulse-arrow" />
        </a>
      </div>

      {/* Ueber uns Section */}
      <section id="ueber-uns" className="bg-warm-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeInSection>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://storage.tramino.net/gaestehaus-schmid-20252/993331/1200.jpg?r=1"
                  alt="Gaestehaus Schmid im Allgaeu"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeInSection>

            <div>
              <FadeInSection delay={0.15}>
                <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">
                  Willkommen bei uns
                </p>
                <h2 className="mb-6 font-serif text-3xl font-semibold text-warm-900 sm:text-4xl lg:text-5xl">
                  Ihr Zuhause in den Bergen
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <p className="mb-4 font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                  Das Gaestehaus Schmid laedt Sie ein, dem Alltag zu entfliehen.
                  In einem ruhigen Bergort auf 859m Hoehe, nahe Fischen und
                  Oberstdorf, erwartet Sie Tradition, Natur und
                  abwechslungsreiche Freizeitmoeglichkeiten von Fruehling bis
                  Winter.
                </p>
                <p className="mb-8 font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                  Geniessen Sie den Panoramablick auf die Berge, erholsame Ruhe
                  und zeitgemaessen Komfort. Ob Familien, Paare oder
                  Alleinreisende – bei uns finden Sie Ihren persoenlichen
                  Rueckzugsort.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.45}>
                <p className="accent-script mb-8 text-2xl text-alpine-700 sm:text-3xl">
                  Herzliche Gruesse, Familie Schmid
                </p>
              </FadeInSection>

              <FadeInSection delay={0.55}>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white p-4 text-center shadow-sm sm:p-6"
                    >
                      <stat.icon className="mx-auto mb-2 h-6 w-6 text-alpine-700 sm:h-7 sm:w-7" />
                      <p className="font-serif text-xl font-bold text-warm-900 sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="font-serif text-sm text-warm-800 sm:text-base">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* USPs / Vorteile Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection className="mb-10 text-center">
            <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">
              Was uns auszeichnet
            </p>
            <h2 className="font-serif text-3xl font-semibold text-warm-900 sm:text-4xl">
              Urlaub mit Herz
            </h2>
          </FadeInSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((usp, index) => (
              <FadeInSection key={usp.text} delay={index * 0.1}>
                <div className="flex flex-col items-center rounded-2xl bg-warm-50 p-6 text-center shadow-sm sm:p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-alpine-100 text-alpine-700">
                    <usp.icon className="h-7 w-7" />
                  </div>
                  <p className="font-serif text-base font-semibold leading-relaxed text-warm-900 sm:text-lg">
                    {usp.text}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fruehstueck Section */}
      <section className="bg-warm-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <FadeInSection>
                <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">
                  Guten Morgen
                </p>
                <h2 className="mb-6 font-serif text-3xl font-semibold text-warm-900 sm:text-4xl lg:text-5xl">
                  Unser Fruehstuecksbuffet
                </h2>
                <p className="mb-6 font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                  Starten Sie den Tag mit unserem leckeren, reichhaltigen
                  Fruehstuecksbuffet mit regionalen Produkten. Frisch gestaerkt
                  geniessen Sie einen erlebnisreichen Tag im schoenen Allgaeu.
                </p>
                <p className="font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                  Wir legen grossen Wert auf Qualitaet und Frische. Regionale Spezialitaeten,
                  frisches Gebaeck und hausgemachte Marmeladen machen unser Fruehstueck
                  zu einem besonderen Genuss.
                </p>
              </FadeInSection>
            </div>
            <FadeInSection delay={0.15} className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://storage.tramino.net/gaestehaus-schmid-20252/987421/1200.jpg"
                  alt="Fruehstuecksraum im Gaestehaus Schmid"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Zimmer Preview Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection className="mb-14 text-center">
            <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">
              Unsere Zimmer
            </p>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-warm-900 sm:text-4xl lg:text-5xl">
              Komfort und{" "}
              <span className="accent-script text-4xl text-alpine-700 sm:text-5xl">Gemuetlichkeit</span>
            </h2>
            <p className="mx-auto max-w-2xl font-serif text-lg text-warm-800 sm:text-xl">
              Fuenf liebevoll eingerichtete Zimmer erwarten Sie – finden Sie das
              passende fuer Ihren Traumurlaub.
            </p>
          </FadeInSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {ROOMS.slice(0, 3).map((room, index) => (
              <FadeInSection key={room.slug} delay={index * 0.1}>
                <Link
                  href={`/zimmer/${room.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-warm-50 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="mb-2 font-serif text-2xl font-semibold text-warm-900">
                      {room.name}
                    </h3>
                    <div className="mb-3 flex flex-wrap gap-3 font-serif text-base text-warm-800">
                      <span className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-alpine-700" />
                        {room.persons}
                      </span>
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="inline-flex items-center gap-1 font-serif text-base font-medium text-alpine-700 transition-transform group-hover:translate-x-1">
                        Details
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.4} className="mt-12 text-center">
            <Link
              href="/zimmer"
              className="inline-flex items-center gap-2 rounded-lg bg-alpine-700 px-8 py-3.5 font-serif text-lg font-semibold text-white shadow-md transition-all hover:bg-alpine-800 hover:shadow-lg"
            >
              Alle Zimmer ansehen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="bg-warm-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center">
            <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">
              Kontakt
            </p>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-warm-900 sm:text-4xl lg:text-5xl">
              Wir freuen uns{" "}
              <span className="accent-script text-4xl text-alpine-700 sm:text-5xl">auf Sie</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-serif text-lg text-warm-800 sm:text-xl">
              Haben Sie Fragen oder moechten Sie ein Zimmer buchen?
              Kontaktieren Sie uns gerne – wir helfen Ihnen weiter.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
              <a
                href="tel:+4983267165"
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <Phone className="mb-3 h-7 w-7 text-alpine-700" />
                <p className="mb-1 font-serif text-lg font-semibold text-warm-900">
                  Telefon
                </p>
                <p className="font-serif text-base text-warm-800">
                  08326 / 7165
                </p>
              </a>

              <a
                href="mailto:post@gaestehaus-schmid.info"
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <Mail className="mb-3 h-7 w-7 text-alpine-700" />
                <p className="mb-1 font-serif text-lg font-semibold text-warm-900">
                  E-Mail
                </p>
                <p className="font-serif text-base text-warm-800 break-all">
                  post@gaestehaus-schmid.info
                </p>
              </a>

              <div className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm sm:p-8">
                <MapPin className="mb-3 h-7 w-7 text-alpine-700" />
                <p className="mb-1 font-serif text-lg font-semibold text-warm-900">
                  Adresse
                </p>
                <p className="font-serif text-base text-warm-800">
                  Hoistaig 3
                  <br />
                  87538 Obermaiselstein
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.35} className="mt-12 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-alpine-700 px-8 py-3.5 font-serif text-lg font-semibold text-white shadow-md transition-all hover:bg-alpine-800 hover:shadow-lg"
            >
              Anfrage senden
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
