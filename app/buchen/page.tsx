"use client"

import { useRef, useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { ROOMS } from "@/lib/data"
import { Send, CalendarDays } from "lucide-react"

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
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
      { rootMargin: "-60px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay * 1000}ms`,
      }}
    >
      {children}
    </div>
  )
}

function BuchenForm() {
  const searchParams = useSearchParams()
  const preselectedRoom = searchParams.get("zimmer") || ""

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    zimmer: preselectedRoom,
    anreise: "",
    abreise: "",
    erwachsene: "",
    kinder: "",
    nachricht: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Buchungsanfrage ${formData.zimmer ? formData.zimmer : "Gästehaus Schmid"}`
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.telefon}\n\nGewünschtes Zimmer: ${formData.zimmer}\nAnreise: ${formData.anreise}\nAbreise: ${formData.abreise}\nErwachsene: ${formData.erwachsene}\nKinder: ${formData.kinder}\n\nNachricht:\n${formData.nachricht}`
    )
    window.location.href = `mailto:post@gaestehaus-schmid.info?subject=${subject}&body=${body}`
  }

  const inputClasses =
    "w-full rounded-xl border border-warm-200 bg-white px-4 py-3 font-serif text-base text-warm-900 placeholder:text-warm-800/40 focus:border-alpine-600 focus:outline-none focus:ring-2 focus:ring-alpine-600/20 transition-colors sm:text-lg"

  return (
    <div className="min-h-screen bg-warm-50 pt-44 pb-20">
      <FadeIn className="mx-auto mb-14 max-w-3xl px-4 text-center sm:px-6">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-alpine-100 text-alpine-700">
            <CalendarDays className="h-8 w-8" />
          </div>
        </div>
        <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">
          Jetzt buchen
        </p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl">
          Zimmer anfragen
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-xl leading-relaxed text-warm-800">
          Füllen Sie das Formular aus und wir melden uns schnellstmöglich
          mit der Verfügbarkeit bei Ihnen.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-warm-100 bg-white p-4 shadow-lg sm:p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Zimmerauswahl */}
            <div>
              <label
                htmlFor="zimmer"
                className="mb-1.5 block font-serif text-base font-bold text-warm-900"
              >
                Gewünschtes Zimmer <span className="text-red-600">*</span>
              </label>
              <select
                id="zimmer"
                name="zimmer"
                required
                value={formData.zimmer}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Bitte wählen...</option>
                {ROOMS.map((r) => (
                  <option key={r.slug} value={r.name}>
                    {r.name} ({r.persons})
                  </option>
                ))}
              </select>
            </div>

            {/* Anreise + Abreise */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="anreise"
                  className="mb-1.5 block font-serif text-base font-bold text-warm-900"
                >
                  Anreise <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  id="anreise"
                  name="anreise"
                  required
                  value={formData.anreise}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="abreise"
                  className="mb-1.5 block font-serif text-base font-bold text-warm-900"
                >
                  Abreise <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  id="abreise"
                  name="abreise"
                  required
                  value={formData.abreise}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Personen */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="erwachsene"
                  className="mb-1.5 block font-serif text-base font-bold text-warm-900"
                >
                  Erwachsene <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="erwachsene"
                  name="erwachsene"
                  min="1"
                  max="10"
                  required
                  value={formData.erwachsene}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="z.B. 2"
                />
              </div>
              <div>
                <label
                  htmlFor="kinder"
                  className="mb-1.5 block font-serif text-base font-bold text-warm-900"
                >
                  Kinder <span className="font-normal text-warm-800/50">(optional)</span>
                </label>
                <input
                  type="number"
                  id="kinder"
                  name="kinder"
                  min="0"
                  max="10"
                  value={formData.kinder}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="z.B. 0"
                />
              </div>
            </div>

            <hr className="border-warm-100" />

            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-serif text-base font-bold text-warm-900"
                >
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-serif text-base font-bold text-warm-900"
                >
                  E-Mail <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="ihre@email.de"
                />
              </div>
            </div>

            {/* Telefon */}
            <div>
              <label
                htmlFor="telefon"
                className="mb-1.5 block font-serif text-base font-bold text-warm-900"
              >
                Telefon <span className="font-normal text-warm-800/50">(optional)</span>
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Ihre Telefonnummer"
              />
            </div>

            {/* Nachricht */}
            <div>
              <label
                htmlFor="nachricht"
                className="mb-1.5 block font-serif text-base font-bold text-warm-900"
              >
                Nachricht <span className="font-normal text-warm-800/50">(optional)</span>
              </label>
              <textarea
                id="nachricht"
                name="nachricht"
                rows={4}
                value={formData.nachricht}
                onChange={handleChange}
                className={inputClasses + " resize-y"}
                placeholder="Besondere Wünsche oder Anmerkungen..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-alpine-700 px-8 py-4 font-serif text-lg font-bold text-white shadow-lg transition-all hover:bg-alpine-800 hover:shadow-xl"
            >
              <Send className="h-5 w-5" />
              Buchungsanfrage senden
            </button>

            <p className="text-center font-serif text-sm text-warm-800/50">
              Wir antworten in der Regel innerhalb von 24 Stunden mit der Verfügbarkeit.
            </p>
          </form>
        </div>
      </FadeIn>
    </div>
  )
}

export default function BuchenPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-warm-50 pt-44" />}>
      <BuchenForm />
    </Suspense>
  )
}
