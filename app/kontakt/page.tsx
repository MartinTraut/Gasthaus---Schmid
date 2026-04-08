"use client"

import { useRef, useState, useEffect } from "react"
import { Phone, Mail, MapPin, Users, Send, Smartphone } from "lucide-react"

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

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Nachricht über die Website")
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.telefon}\n\nNachricht:\n${formData.nachricht}`
    )
    window.location.href = `mailto:post@gaestehaus-schmid.info?subject=${subject}&body=${body}`
  }

  const inputClasses =
    "w-full rounded-lg border border-warm-200 bg-white px-3 py-2.5 font-serif text-base text-warm-900 placeholder:text-warm-800/40 focus:border-alpine-600 focus:outline-none focus:ring-2 focus:ring-alpine-600/20 transition-colors sm:rounded-xl sm:px-4 sm:py-3 sm:text-lg"

  return (
    <div className="min-h-screen bg-warm-50 pt-44 pb-20">
      {/* Header */}
      <FadeIn className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6">
        <p className="accent-script mb-2 text-2xl text-alpine-700 sm:text-3xl">
          Kontakt
        </p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl">
          Wir freuen uns{" "}
          <span className="accent-script text-alpine-700">auf Sie</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-xl leading-relaxed text-warm-800">
          Kontaktieren Sie uns gerne per Telefon, E-Mail oder über das
          Kontaktformular. Wir beraten Sie persönlich.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-5">
          {/* Linke Spalte: Kontakt-Infos + Karte */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-alpine-100 text-alpine-700">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-warm-900">
                      Ihre Gastgeberin
                    </h2>
                    <p className="accent-script text-xl text-alpine-700">
                      Rosl Schmid
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=47.4479675,10.2382746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-warm-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-alpine-50 text-alpine-700">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-warm-900">
                        Adresse
                      </p>
                      <p className="font-serif text-lg text-warm-800">
                        Hoistaig 3
                        <br />
                        87538 Obermaiselstein
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+4983267165"
                    className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-warm-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-alpine-50 text-alpine-700">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-warm-900">
                        Telefon
                      </p>
                      <p className="font-serif text-lg text-alpine-700">
                        08326 / 7165
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+4915111700333"
                    className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-warm-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-alpine-50 text-alpine-700">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-warm-900">
                        Mobil
                      </p>
                      <p className="font-serif text-lg text-alpine-700">
                        0151 / 117 003 33
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:post@gaestehaus-schmid.info"
                    className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-warm-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-alpine-50 text-alpine-700">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-warm-900">
                        E-Mail
                      </p>
                      <p className="font-serif text-lg text-alpine-700 break-all">
                        post@gaestehaus-schmid.info
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Google Maps – füllt den gesamten Restplatz */}
              <div className="flex-1 overflow-hidden rounded-2xl border border-warm-100 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d10.2382746!3d47.4479675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI2JzUyLjciTiAxMMKwMTQnMTcuOCJF!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                  style={{ border: 0, width: "100%", height: "100%", display: "block", minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gästehaus Schmid auf Google Maps"
                />
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Formular */}
          <div className="lg:col-span-3">
            <div className="h-full overflow-hidden rounded-2xl border border-warm-100 bg-white p-4 shadow-md sm:p-6 md:p-8">
              <h2 className="mb-5 font-serif text-xl font-bold text-warm-900 sm:mb-6 sm:text-2xl md:text-3xl">
                Nachricht senden
              </h2>
              <p className="mb-6 font-serif text-base text-warm-800">
                Sie haben eine Frage oder ein Anliegen? Schreiben Sie uns, wir melden uns schnellstmöglich bei Ihnen.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Name + Email */}
                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block font-serif text-base font-semibold text-warm-900 sm:mb-1.5"
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
                      className="mb-1 block font-serif text-base font-semibold text-warm-900 sm:mb-1.5"
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
                    className="mb-1 block font-serif text-base font-semibold text-warm-900 sm:mb-1.5"
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
                    className="mb-1.5 block font-serif text-base font-semibold text-warm-900"
                  >
                    Nachricht <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    rows={6}
                    required
                    value={formData.nachricht}
                    onChange={handleChange}
                    className={inputClasses + " resize-y"}
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-alpine-700 px-8 py-4 font-serif text-lg font-semibold text-white shadow-md transition-all hover:bg-alpine-800 hover:shadow-lg sm:w-auto"
                >
                  <Send className="h-5 w-5" />
                  Nachricht senden
                </button>

                <p className="text-center font-serif text-sm text-warm-800/50 sm:text-left">
                  Wir antworten in der Regel innerhalb von 24 Stunden.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
