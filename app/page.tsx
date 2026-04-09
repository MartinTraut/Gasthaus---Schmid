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
  { icon: Mountain, value: "859m", label: "Höhe" },
  { icon: Home, value: "5", label: "Zimmer" },
  { icon: Coffee, value: "Täglich", label: "Frühstück" },
]

const usps = [
  { icon: Coffee, text: "Reichhaltiges Frühstücksbuffet mit regionalen Produkten" },
  { icon: Sparkles, text: "Thermium: Dampfsauna & Infrarotwärmekabine" },
  { icon: BusFront, text: "Bushaltestelle in 2 Min. mit größtenteils kostenlosem Nahverkehr" },
  { icon: Users, text: "Familiär, herzlich und persönlich" },
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
        className="relative min-h-[100svh] w-full overflow-hidden sm:min-h-[600px]"
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
              quality={90}
              priority={index === 0}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 pt-20 pb-8 text-center text-white sm:px-6 sm:pt-24">
          <Image
            src="/logo.png"
            alt="Gästehaus Schmid"
            width={400}
            height={134}
            className="logo-sharp mb-3 h-8 w-auto brightness-0 invert sm:mb-4 sm:h-14 md:h-16 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
            priority
            quality={100}
          />
          <p
            className="mb-3 font-serif text-sm tracking-[0.18em] uppercase text-white/90 sm:mb-4 sm:text-base md:text-lg animate-fade-in-up"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)", animationDelay: "0.3s" }}
          >
            Urlaub in Obermaiselstein auf 859m Höhe
          </p>

          <h1
            className="mb-4 max-w-4xl font-serif text-[1.5rem] leading-tight font-semibold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up"
            style={{ textShadow: "0 3px 12px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)", animationDelay: "0.6s" }}
          >
            Nicht daheim und doch{" "}
            <span className="accent-script text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl text-alpine-200">
              zu Hause
            </span>
          </h1>

          <p
            className="mb-6 max-w-2xl font-serif text-sm leading-relaxed text-white/90 sm:mb-10 sm:text-xl animate-fade-in-up"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)", animationDelay: "0.9s" }}
          >
            Lassen Sie in gemütlicher, herzlicher Atmosphäre den Alltag hinter sich
            und genießen Sie erholsame Tage im wunderschönen Allgäu.
          </p>

          <div
            className="mb-16 flex w-full flex-col gap-3 px-2 sm:mb-20 sm:w-auto sm:flex-row sm:gap-4 sm:px-0 animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            <Link
              href="/zimmer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-serif text-base font-bold text-alpine-800 shadow-md sm:px-10 sm:py-4 sm:text-lg"
            >
              Unsere Zimmer
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/kontakt"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-alpine-700 px-6 py-3.5 font-serif text-base font-bold text-white shadow-md transition-all duration-300 hover:bg-alpine-800 hover:shadow-lg sm:px-10 sm:py-4 sm:text-lg"
            >
              Anfrage senden
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll-Pfeil */}
      <div className="relative z-10 -mt-14 flex justify-center pb-6 sm:-mt-20">
        <a
          href="#ueber-uns"
          className="group flex flex-col items-center gap-1 animate-fade-in-up"
          style={{ animationDelay: "1.5s" }}
        >
          <span className="font-serif text-base font-extrabold tracking-widest uppercase text-white transition-colors duration-300 group-hover:text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            Mehr entdecken
          </span>
          <ChevronDown className="h-6 w-6 text-white/80 animate-pulse-arrow transition-colors duration-300 group-hover:text-white" />
        </a>
      </div>

      {/* Über uns Section */}
      <section id="ueber-uns" className="bg-warm-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeInSection>
              <div className="img-zoom relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://storage.tramino.net/gaestehaus-schmid-20252/993331/1200.jpg?r=1"
                  alt="Gästehaus Schmid im Allgäu"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
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
                  Unser Gästehaus liegt in Obermaiselstein auf 859m Höhe,
                  eingebettet zwischen Fischen und Oberstdorf. Hier erwartet
                  Sie Allgäuer Gastfreundschaft, unberührte Natur und
                  abwechslungsreiche Freizeitmöglichkeiten zu jeder
                  Jahreszeit.
                </p>
                <p className="mb-8 font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                  Genießen Sie den Panoramablick auf die Allgäuer Berge,
                  die Ruhe der Natur und zeitgemäßen Komfort. Ob als Familie,
                  Paar oder allein, bei uns finden Sie Ihren persönlichen
                  Rückzugsort.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.45}>
                <p className="accent-script mb-8 text-2xl text-alpine-700 sm:text-3xl">
                  Herzliche Grüße, Familie Schmid
                </p>
              </FadeInSection>

              <FadeInSection delay={0.55}>
                <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="hover-glow rounded-xl bg-white px-2 py-4 text-center shadow-sm sm:p-6"
                    >
                      <stat.icon className="mx-auto mb-2 h-5 w-5 text-alpine-700 sm:h-7 sm:w-7" />
                      <p className="font-serif text-lg font-bold text-warm-900 sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="font-serif text-xs text-warm-800 sm:text-base">
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
      <section className="bg-white py-20 sm:py-28">
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
                <div className="hover-lift flex h-full flex-col items-center rounded-2xl bg-warm-50 p-6 text-center shadow-sm sm:p-8">
                  <div className="icon-hover mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-alpine-100 text-alpine-700">
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

      {/* Frühstück Section */}
      <section className="bg-warm-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <FadeInSection>
                <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">
                  Guten Morgen
                </p>
                <h2 className="mb-6 font-serif text-3xl font-semibold text-warm-900 sm:text-4xl lg:text-5xl">
                  Unser Frühstücksbuffet
                </h2>
                <p className="mb-6 font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                  Starten Sie gut gestärkt in den Tag: Unser reichhaltiges
                  Frühstücksbuffet verwöhnt Sie mit regionalen Produkten
                  aus dem Allgäu. So beginnt jeder Urlaubstag genau richtig.
                </p>
                <p className="font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                  Wir legen großen Wert auf Qualität und Frische. Regionale
                  Spezialitäten, frisches Gebäck und hausgemachte Marmeladen
                  machen unser Frühstück zu einem besonderen Genuss.
                </p>
              </FadeInSection>
            </div>
            <FadeInSection delay={0.15} className="order-1 lg:order-2">
              <div className="img-zoom relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://storage.tramino.net/gaestehaus-schmid-20252/987421/1200.jpg"
                  alt="Frühstücksraum im Gästehaus Schmid"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
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
              <span className="accent-script text-4xl text-alpine-700 sm:text-5xl">Gemütlichkeit</span>
            </h2>
            <p className="mx-auto max-w-2xl font-serif text-lg text-warm-800 sm:text-xl">
              Fünf liebevoll eingerichtete Zimmer erwarten Sie. Finden Sie
              das passende für Ihren Urlaub im Allgäu.
            </p>
          </FadeInSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {ROOMS.slice(0, 3).map((room, index) => (
              <FadeInSection key={room.slug} delay={index * 0.1}>
                <Link
                  href={`/zimmer/${room.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-warm-50 shadow-sm hover-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={90}
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
              className="btn-shine inline-flex items-center gap-2 rounded-lg bg-alpine-700 px-8 py-3.5 font-serif text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-alpine-800 hover:shadow-lg"
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
              Haben Sie Fragen oder möchten Sie ein Zimmer buchen?
              Wir sind gerne für Sie da und helfen Ihnen weiter.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
              <a
                href="tel:+4983267165"
                className="hover-glow flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm sm:p-8"
              >
                <Phone className="icon-hover mb-3 h-7 w-7 text-alpine-700" />
                <p className="mb-1 font-serif text-lg font-semibold text-warm-900">
                  Telefon
                </p>
                <p className="font-serif text-base text-warm-800">
                  08326 / 7165
                </p>
              </a>

              <a
                href="mailto:post@gaestehaus-schmid.info"
                className="hover-glow flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm sm:p-8"
              >
                <Mail className="icon-hover mb-3 h-7 w-7 text-alpine-700" />
                <p className="mb-1 font-serif text-lg font-semibold text-warm-900">
                  E-Mail
                </p>
                <p className="font-serif text-base text-warm-800 break-all">
                  post@gaestehaus-schmid.info
                </p>
              </a>

              <div className="hover-glow flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm sm:p-8">
                <MapPin className="icon-hover mb-3 h-7 w-7 text-alpine-700" />
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
              className="btn-shine inline-flex items-center gap-2 rounded-lg bg-alpine-700 px-8 py-3.5 font-serif text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-alpine-800 hover:shadow-lg"
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
