"use client"

import { useRef, useState, useEffect } from "react"
import { WEBCAM_URL } from "@/lib/data"
import { Camera, ExternalLink } from "lucide-react"

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

export default function WebcamPage() {
  return (
    <main className="min-h-screen bg-warm-50 pt-44 pb-20">
      <FadeIn className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6">
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl lg:text-6xl">Webcam</h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Live-Blick auf Obermaiselstein und die Allgäuer Berge.
        </p>
      </FadeIn>

      <FadeIn delay={0.1} className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-warm-100 bg-alpine-800 shadow-xl">
          <div className="flex items-center gap-3 px-6 py-4">
            <Camera className="h-6 w-6 text-alpine-100" />
            <h2 className="font-serif text-xl font-bold text-white md:text-2xl">Obermaiselstein Live</h2>
            <div className="ml-auto flex items-center gap-2">
              <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
              <span className="font-serif text-sm text-alpine-100">Live</span>
            </div>
          </div>

          <a href={WEBCAM_URL} target="_blank" rel="noopener noreferrer" className="block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.foto-webcam.eu/webcam/obermaiselstein/current/1920.jpg"
              alt="Live Webcam Obermaiselstein - Aktueller Blick auf die Allgäuer Alpen"
              className="w-full"
              style={{ display: "block" }}
            />
          </a>

          <div className="flex flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">
            <p className="font-serif text-base text-alpine-100">Quelle: foto-webcam.eu</p>
            <a
              href={WEBCAM_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-serif text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ExternalLink className="h-5 w-5" />
              Webcam im neuen Tab
            </a>
          </div>
        </div>
      </FadeIn>
    </main>
  )
}
