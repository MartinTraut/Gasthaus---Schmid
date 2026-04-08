"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { HIKING_TIPS, ACTIVITY_LINKS, WINTER_ACTIVITIES } from "@/lib/data"
import { ArrowRight, ExternalLink, Trees, Mountain, Waves, CloudSun } from "lucide-react"

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

/* ── Weather ── */

interface WeatherDay {
  date: string
  weekday: string
  tempMax: number
  tempMin: number
  precipitation: number
  weatherCode: number
}

const WMO_ICONS: Record<number, { label: string; emoji: string }> = {
  0: { label: "Sonnig", emoji: "☀️" },
  1: { label: "Überwiegend sonnig", emoji: "🌤️" },
  2: { label: "Teilweise bewölkt", emoji: "⛅" },
  3: { label: "Bewölkt", emoji: "☁️" },
  45: { label: "Nebel", emoji: "🌫️" },
  48: { label: "Nebel mit Reif", emoji: "🌫️" },
  51: { label: "Leichter Nieselregen", emoji: "🌦️" },
  53: { label: "Nieselregen", emoji: "🌦️" },
  55: { label: "Starker Nieselregen", emoji: "🌧️" },
  61: { label: "Leichter Regen", emoji: "🌦️" },
  63: { label: "Regen", emoji: "🌧️" },
  65: { label: "Starker Regen", emoji: "🌧️" },
  71: { label: "Leichter Schneefall", emoji: "🌨️" },
  73: { label: "Schneefall", emoji: "❄️" },
  75: { label: "Starker Schneefall", emoji: "❄️" },
  77: { label: "Schneekörner", emoji: "🌨️" },
  80: { label: "Leichte Schauer", emoji: "🌦️" },
  81: { label: "Schauer", emoji: "🌧️" },
  82: { label: "Starke Schauer", emoji: "⛈️" },
  85: { label: "Schneeschauer", emoji: "🌨️" },
  86: { label: "Starke Schneeschauer", emoji: "❄️" },
  95: { label: "Gewitter", emoji: "⛈️" },
  96: { label: "Gewitter mit Hagel", emoji: "⛈️" },
  99: { label: "Starkes Gewitter", emoji: "⛈️" },
}

function getWeatherInfo(code: number) {
  return WMO_ICONS[code] || { label: "Unbekannt", emoji: "🌡️" }
}

const WEEKDAYS = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]

function WeatherWidget() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [weather, setWeather] = useState<WeatherDay[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.unobserve(el) } }, { rootMargin: "-60px" })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView || weather) return
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=47.4477&longitude=10.2510&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=Europe%2FBerlin&forecast_days=7"
    )
      .then((res) => res.json())
      .then((data) => {
        const days: WeatherDay[] = data.daily.time.map(
          (date: string, i: number) => ({
            date,
            weekday: WEEKDAYS[new Date(date).getDay()],
            tempMax: Math.round(data.daily.temperature_2m_max[i]),
            tempMin: Math.round(data.daily.temperature_2m_min[i]),
            precipitation: Math.round(data.daily.precipitation_sum[i] * 10) / 10,
            weatherCode: data.daily.weathercode[i],
          })
        )
        setWeather(days)
      })
      .catch(() => setError(true))
  }, [isInView, weather])

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(20px)" }}
    >
      <div className="overflow-hidden rounded-2xl shadow-xl">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-alpine-700 via-alpine-800 to-alpine-900 px-6 py-6 sm:px-8 sm:py-8">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber-300 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-alpine-200 blur-3xl" />
          </div>
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-4xl backdrop-blur-sm">
                {weather ? getWeatherInfo(weather[0].weatherCode).emoji : "🌤️"}
              </div>
              <div>
                <p className="accent-script text-2xl text-amber-300">Obermaiselstein</p>
                <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                  {weather ? `${weather[0].tempMax}°C` : "..."}
                </h2>
                <p className="font-serif text-sm text-white/50">
                  {weather ? getWeatherInfo(weather[0].weatherCode).label : "Wird geladen..."} &middot; 859m Höhe
                </p>
              </div>
            </div>
            <a
              href="https://14-tage-wettervorhersage.de/wetter/obermaiselstein/vorhersage/177202/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-xl bg-white/15 px-5 py-2.5 font-serif text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25 sm:self-auto"
            >
              <ExternalLink className="h-4 w-4" />
              14-Tage Details
            </a>
          </div>
        </div>

        {/* 7-Tage Karten */}
        <div className="bg-white p-5 sm:p-6">
          {error && (
            <p className="py-8 text-center font-serif text-lg text-warm-800/60">
              Wetter konnte nicht geladen werden.{" "}
              <a
                href="https://14-tage-wettervorhersage.de/wetter/obermaiselstein/vorhersage/177202/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-alpine-700 underline"
              >
                Direkt ansehen
              </a>
            </p>
          )}

          {!weather && !error && (
            <div className="flex items-center justify-center py-10">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-alpine-200 border-t-alpine-700" />
              <p className="ml-3 font-serif text-lg text-warm-800/50">Wetter wird geladen...</p>
            </div>
          )}

          {weather && (
            <div className="flex gap-2 overflow-x-auto pb-2 sm:grid sm:grid-cols-7 sm:gap-3 sm:overflow-x-visible sm:pb-0">
              {weather.map((day, i) => {
                const info = getWeatherInfo(day.weatherCode)
                const isToday = i === 0
                return (
                  <div
                    key={day.date}
                    className={`min-w-[5rem] shrink-0 rounded-xl p-2.5 text-center transition-all duration-500 sm:min-w-0 sm:shrink sm:p-4 ${
                      isToday ? "bg-alpine-700 text-white shadow-lg" : "bg-warm-50"
                    }`}
                    style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(15px)", transitionDelay: `${i * 60}ms` }}
                  >
                    <p className={`font-serif text-sm font-bold sm:text-base ${isToday ? "text-white" : "text-warm-900"}`}>
                      {isToday ? "Heute" : day.weekday}
                    </p>
                    <p className={`text-[10px] sm:text-xs ${isToday ? "text-white/60" : "text-warm-800/45"}`}>
                      {new Date(day.date).toLocaleDateString("de-DE", { day: "numeric", month: "short" })}
                    </p>
                    <p className="mt-2 text-3xl sm:mt-3 sm:text-4xl">{info.emoji}</p>
                    <p className={`mt-1 text-[10px] leading-tight sm:text-xs ${isToday ? "text-white/70" : "text-warm-800/55"}`}>
                      {info.label}
                    </p>
                    <div className="mt-2 sm:mt-3">
                      <p className={`font-serif text-xl font-bold sm:text-2xl ${isToday ? "text-white" : "text-warm-900"}`}>
                        {day.tempMax}°
                      </p>
                      <p className={`font-serif text-sm sm:text-base ${isToday ? "text-white/60" : "text-warm-800/45"}`}>
                        {day.tempMin}°
                      </p>
                    </div>
                    {day.precipitation > 0 && (
                      <p className={`mt-1 text-[10px] sm:text-xs ${isToday ? "text-blue-200" : "text-blue-600"}`}>
                        💧 {day.precipitation}mm
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Category Icons ── */

const categoryIcons: Record<string, React.ElementType> = {
  "Natur & Erlebnis": Trees,
  "Sport & Abenteuer": Mountain,
  "Freizeit & Region": Waves,
}

/* ── Page ── */

export default function UrlaubstippsPage() {
  return (
    <main className="min-h-screen bg-warm-50 pt-44 pb-20">
      <FadeIn className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6">
        <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">Erleben Sie das Allgäu</p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl lg:text-6xl">
          Urlaubstipps
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 sm:text-2xl">
          Urlaub im Allgäu ist Sommer wie Winter sehr abwechslungsreich.
          Entdecken Sie unsere Lieblingsziele rund um Obermaiselstein.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6">

        {/* Wettervorhersage */}
        <section>
          <FadeIn className="mb-8 flex items-center justify-center gap-3 text-center">
            <CloudSun className="h-7 w-7 text-alpine-700" />
            <h2 className="font-serif text-3xl font-bold text-warm-900 sm:text-4xl">Aktuelles Wetter</h2>
          </FadeIn>
          <WeatherWidget />
        </section>

        {/* Wanderziele */}
        <section>
          <FadeIn className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-warm-900 sm:text-4xl">Wanderziele</h2>
            <p className="mx-auto mt-3 max-w-2xl font-serif text-lg text-warm-800">
              Die schönsten Wanderungen direkt ab Obermaiselstein.
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HIKING_TIPS.slice(0, 3).map((tip, i) => (
              <FadeIn key={tip.slug} delay={i * 0.08}>
                <Link
                  href={`/urlaubstipps/${tip.slug}`}
                  className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-warm-100 bg-white shadow-sm"
                >
                  <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={tip.image}
                      alt={tip.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={90}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 text-center">
                    <h3 className="mb-2 font-serif text-xl font-bold text-warm-900 group-hover:text-alpine-700 transition-colors sm:text-2xl">
                      {tip.name}
                    </h3>
                    <p className="flex-1 font-serif text-base leading-relaxed text-warm-800 sm:text-lg">
                      {tip.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center justify-center gap-1.5 font-serif text-base font-semibold text-alpine-700">
                      Mehr erfahren <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          {HIKING_TIPS.length > 3 && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
              {HIKING_TIPS.slice(3).map((tip, i) => (
                <FadeIn key={tip.slug} delay={(i + 3) * 0.08}>
                  <Link
                    href={`/urlaubstipps/${tip.slug}`}
                    className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-warm-100 bg-white shadow-sm"
                  >
                    <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={tip.image}
                        alt={tip.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        quality={90}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 text-center">
                      <h3 className="mb-2 font-serif text-xl font-bold text-warm-900 group-hover:text-alpine-700 transition-colors sm:text-2xl">
                        {tip.name}
                      </h3>
                      <p className="flex-1 font-serif text-base leading-relaxed text-warm-800 sm:text-lg">
                        {tip.shortDescription}
                      </p>
                      <span className="mt-4 inline-flex items-center justify-center gap-1.5 font-serif text-base font-semibold text-alpine-700">
                        Mehr erfahren <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </section>

        {/* Winteraktivitäten mit Bildern */}
        <section>
          <FadeIn className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-warm-900 sm:text-4xl">Winteraktivitäten</h2>
            <p className="mx-auto mt-3 max-w-2xl font-serif text-lg text-warm-800">
              Auch im Winter bietet das Allgäu rund um Obermaiselstein vielfältige Erlebnisse.
            </p>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-3">
            {WINTER_ACTIVITIES.map((act, i) => (
              <FadeIn key={act.title} delay={i * 0.1}>
                <div className="hover-lift flex h-full flex-col overflow-hidden rounded-2xl border border-warm-100 bg-white shadow-sm">
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={act.image}
                      alt={act.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      quality={90}
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-center p-6 text-center">
                    <h3 className="mb-3 font-serif text-xl font-bold text-warm-900 sm:text-2xl">{act.title}</h3>
                    <p className="font-serif text-base leading-relaxed text-warm-800 sm:text-lg">{act.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Nützliche Links */}
        <section>
          <FadeIn className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-warm-900 sm:text-4xl">Ausflugsziele und Links</h2>
            <p className="mx-auto mt-3 max-w-2xl font-serif text-lg text-warm-800">
              Entdecken Sie die vielfältigen Freizeitmöglichkeiten im Allgäu.
            </p>
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
                            <span className="font-serif text-lg font-semibold text-warm-900 group-hover:text-alpine-700">
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
