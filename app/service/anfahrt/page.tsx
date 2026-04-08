"use client"

import { useRef, useState, useEffect } from "react"
import { MapPin, Phone, Mail, Navigation, Smartphone } from "lucide-react"

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.unobserve(el) } }, { rootMargin: "-60px" })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${className}`} style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(30px)", transitionDelay: `${delay * 1000}ms` }}>
      {children}
    </div>
  )
}

export default function AnfahrtPage() {
  return (
    <main className="min-h-screen bg-warm-50 pt-28 pb-20">
      <FadeIn className="mx-auto mb-14 max-w-5xl px-4 text-center sm:px-6">
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl lg:text-6xl">Lage & Anfahrt</h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Ihr Weg zu uns – Kommen Sie zu uns, wir freuen uns auf Sie!
        </p>
      </FadeIn>

      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-alpine-100 text-alpine-700"><MapPin className="h-7 w-7" /></div>
              <h3 className="font-serif text-xl font-bold text-warm-900">Adresse</h3>
              <p className="mt-2 font-serif text-lg text-warm-800">Hoistaig 3<br />87538 Obermaiselstein</p>
            </div>
            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-alpine-100 text-alpine-700"><Phone className="h-7 w-7" /></div>
              <h3 className="font-serif text-xl font-bold text-warm-900">Telefon</h3>
              <a href="tel:+4983267165" className="mt-2 block font-serif text-lg text-alpine-700 hover:text-alpine-800">08326 / 7165</a>
              <a href="tel:+4915111700333" className="mt-1 block font-serif text-base text-alpine-700 hover:text-alpine-800">Mobil: 0151 / 117 003 33</a>
            </div>
            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-alpine-100 text-alpine-700"><Mail className="h-7 w-7" /></div>
              <h3 className="font-serif text-xl font-bold text-warm-900">E-Mail</h3>
              <a href="mailto:post@gaestehaus-schmid.info" className="mt-2 block font-serif text-lg text-alpine-700 hover:text-alpine-800 break-all">post@gaestehaus-schmid.info</a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-warm-100 bg-white shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d10.2382746!3d47.4479675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI2JzUyLjciTiAxMMKwMTQnMTcuOCJF!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full"
              title="Gaestehaus Schmid auf Google Maps"
            />
            <div className="p-6 text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=47.4479675,10.2382746"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-alpine-700 px-8 py-3 font-serif text-lg font-semibold text-white shadow-md transition-colors hover:bg-alpine-800"
              >
                <Navigation className="h-5 w-5" />
                Route planen
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
