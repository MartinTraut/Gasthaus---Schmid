"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { label: "Willkommen", href: "/" },
  {
    label: "Gästehaus",
    href: "/gaestehaus",
    children: [
      { label: "Über uns", href: "/gaestehaus" },
      { label: "Thermium Wellness", href: "/gaestehaus/thermium" },
    ],
  },
  {
    label: "Zimmer",
    href: "/zimmer",
    children: [
      { label: "Alle Zimmer", href: "/zimmer" },
      { label: "Doppelzimmer Nr. 1", href: "/zimmer/doppelzimmer-1" },
      { label: "Doppelzimmer Nr. 2", href: "/zimmer/doppelzimmer-2" },
      { label: "Einzelzimmer Nr. 3", href: "/zimmer/einzelzimmer-3" },
      { label: "Doppelzimmer Nr. 4", href: "/zimmer/doppelzimmer-4" },
      { label: "Doppelzimmer Nr. 8", href: "/zimmer/doppelzimmer-8" },
    ],
  },
  {
    label: "Urlaubstipps",
    href: "/urlaubstipps",
    children: [
      { label: "Wandern & Aktivitäten", href: "/urlaubstipps" },
      { label: "Besler", href: "/urlaubstipps/besler" },
      { label: "Gaisalpe", href: "/urlaubstipps/gaisalpe" },
      { label: "Grünten", href: "/urlaubstipps/gruenten" },
      { label: "Riedbergerhorn", href: "/urlaubstipps/riedbergerhorn" },
      { label: "Sonderdorfer Kreuz", href: "/urlaubstipps/sonderdorfer-kreuz" },
    ],
  },
  {
    label: "Bildergalerie",
    href: "/galerie",
    children: [
      { label: "Alle Bilder", href: "/galerie" },
      { label: "Gästehaus Schmid", href: "/galerie#gaestehaus" },
      { label: "Umgebung & Natur", href: "/galerie#umgebung" },
    ],
  },
  { label: "Webcam", href: "/webcam" },
  { label: "Kontakt", href: "/kontakt" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleOpenDropdown = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpenDropdown(label)
  }, [])

  const handleCloseDropdown = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }, [])

  const headerHidden = isHome && !isScrolled

  const headerBg = isScrolled || !isHome
    ? "bg-white/98 backdrop-blur-md shadow-md"
    : "bg-transparent"

  const navTextColor = isScrolled || !isHome
    ? "text-warm-900 hover:text-alpine-700"
    : "text-white hover:text-white/80"

  const navActiveColor = isScrolled || !isHome
    ? "text-alpine-700 font-bold bg-alpine-50 rounded-lg"
    : "text-white font-bold underline underline-offset-4 decoration-2"

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg} ${
          headerHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-1.5">
            <Link
              href="/"
              className="shrink-0 py-1"
            >
              <Image
                src="/logo.png"
                alt="Gästehaus Schmid"
                width={360}
                height={120}
                className="logo-sharp h-auto w-36 sm:w-44 lg:w-48"
                priority
                quality={100}
              />
            </Link>

            <nav className="hidden items-center gap-0.5 xl:flex">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  item.children?.some((c) => pathname === c.href)
                const isOpen = openDropdown === item.label

                if (!item.children) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-lg px-3 py-2.5 font-serif text-[17px] font-bold transition-all duration-200 ${
                        isActive ? navActiveColor : navTextColor
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => handleOpenDropdown(item.label)}
                    onMouseLeave={handleCloseDropdown}
                  >
                    <Link
                      href={item.href}
                      onMouseEnter={() => handleOpenDropdown(item.label)}
                      className={`flex items-center gap-1 rounded-lg px-3 py-2.5 font-serif text-[17px] font-bold transition-all duration-200 ${
                        isActive ? navActiveColor : navTextColor
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    <div className="absolute top-full left-0 h-2 w-full" />

                    <div
                      className={`absolute top-full left-0 z-50 mt-2 min-w-[260px] overflow-hidden rounded-xl border border-warm-200 bg-white py-2 shadow-xl transition-all duration-150 origin-top ${
                        isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-[0.98] opacity-0 pointer-events-none"
                      }`}
                    >
                      {item.children.map((child, childIndex) => {
                        const isOverview = childIndex === 0 && (child.label.startsWith("Alle") || child.label.startsWith("Wandern"))
                        return (
                          <div key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className={`block px-5 transition-colors ${
                                isOverview
                                  ? "py-3.5 font-serif text-[18px] font-extrabold tracking-tight"
                                  : "py-3 font-serif text-[17px] font-semibold"
                              } ${
                                pathname === child.href
                                  ? "bg-alpine-50 text-alpine-700"
                                  : isOverview
                                    ? "text-alpine-900 hover:bg-alpine-50 hover:text-alpine-700"
                                    : "text-warm-800 hover:bg-warm-50 hover:text-alpine-700"
                              }`}
                            >
                              {child.label}
                            </Link>
                            {isOverview && (
                              <div className="mx-4 border-b border-warm-100" />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </nav>

            <a
              href="tel:+4983267165"
              className="hidden items-center gap-2 rounded-lg bg-alpine-700 px-5 py-2.5 font-serif text-[16px] font-bold text-white shadow-sm transition-all hover:bg-alpine-800 hover:shadow-md xl:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Anrufen
            </a>

            <div className="flex items-center gap-2 xl:hidden">
              <a
                href="tel:+4983267165"
                className="rounded-lg bg-alpine-700 p-3 text-white shadow-sm"
                aria-label="Anrufen"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`rounded-lg p-3 transition-colors ${
                  isHome && !isScrolled ? "text-white" : "text-warm-900"
                }`}
                aria-label="Menü"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-white xl:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex min-h-full flex-col pt-24 pb-8">
          <nav className="flex flex-1 flex-col px-6">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                className="border-b border-warm-100"
              >
                {item.children ? (
                  <>
                    <div className="flex items-center justify-between py-5">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-serif text-[24px] font-bold text-warm-900"
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label
                              ? null
                              : item.label
                          )
                        }
                        className="rounded-lg p-2"
                        aria-label={`${item.label} Untermenü`}
                      >
                        <ChevronDown
                          className={`h-5 w-5 text-warm-800/50 transition-transform duration-200 ${
                            mobileExpanded === item.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    </div>
                    <div
                      className="overflow-hidden transition-all duration-250 ease-in-out"
                      style={{
                        maxHeight: mobileExpanded === item.label ? "500px" : "0",
                        opacity: mobileExpanded === item.label ? 1 : 0,
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-3 pl-5 font-serif text-[19px] ${
                            pathname === child.href
                              ? "font-bold text-alpine-700"
                              : "font-semibold text-warm-800/80"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                      <div className="h-3" />
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-5 font-serif text-[24px] font-bold ${
                      pathname === item.href
                        ? "text-alpine-700"
                        : "text-warm-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="px-6 pt-6">
            <a
              href="tel:+4983267165"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-3 rounded-xl bg-alpine-700 py-4 font-serif text-[22px] font-bold text-white shadow-sm"
            >
              <Phone className="h-6 w-6" />
              08326 / 7165
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
