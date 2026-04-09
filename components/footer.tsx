import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Smartphone, CloudSun } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-alpine-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Beschreibung */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Gästehaus Schmid"
                width={320}
                height={107}
                className="logo-sharp h-11 w-auto brightness-0 invert sm:h-12"
                quality={100}
              />
            </Link>
            <p className="mt-5 font-serif text-base leading-relaxed text-white/70">
              Gemütliches Gästehaus mit Frühstück und Panoramablick in die
              Allgäuer Alpen. Ihr Zuhause auf 859 Metern Höhe.
            </p>
            <a
              href="https://14-tage-wettervorhersage.de/wetter/obermaiselstein/vorhersage/177202/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2.5 font-serif text-sm font-semibold text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            >
              <CloudSun className="h-4 w-4" />
              Wettervorhersage
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white">
              Schnellzugriff
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Startseite", href: "/" },
                { label: "Gästehaus", href: "/gaestehaus" },
                { label: "Zimmer", href: "/zimmer" },
                { label: "Urlaubstipps", href: "/urlaubstipps" },
                { label: "Galerie", href: "/galerie" },
                { label: "Webcam", href: "/webcam" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-serif text-base font-semibold text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zimmer */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white">
              Unsere Zimmer
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                { name: "Doppelzimmer Nr. 1", href: "/zimmer/doppelzimmer-1" },
                { name: "Doppelzimmer Nr. 2", href: "/zimmer/doppelzimmer-2" },
                { name: "Einzelzimmer Nr. 3", href: "/zimmer/einzelzimmer-3" },
                { name: "Doppelzimmer Nr. 4", href: "/zimmer/doppelzimmer-4" },
                { name: "Doppelzimmer Nr. 8", href: "/zimmer/doppelzimmer-8" },
              ].map((room) => (
                <li key={room.href}>
                  <Link
                    href={room.href}
                    className="font-serif text-base font-semibold text-white/70 transition-colors hover:text-white"
                  >
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 font-serif text-base font-semibold">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white/50" />
                <span className="text-white/80">
                  Hoistaig 3
                  <br />
                  87538 Obermaiselstein
                </span>
              </li>
              <li>
                <a
                  href="tel:+4983267165"
                  className="flex items-center gap-3 font-serif text-base font-semibold text-white/80 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5 text-white/50" />
                  08326 / 7165
                </a>
              </li>
              <li>
                <a
                  href="tel:+4915111700333"
                  className="flex items-center gap-3 font-serif text-base font-semibold text-white/80 transition-colors hover:text-white"
                >
                  <Smartphone className="h-5 w-5 text-white/50" />
                  0151 / 117 003 33
                </a>
              </li>
              <li>
                <a
                  href="mailto:post@gaestehaus-schmid.info"
                  className="flex items-center gap-3 font-serif text-base font-semibold text-white/80 transition-colors hover:text-white break-all"
                >
                  <Mail className="h-5 w-5 text-white/50" />
                  post@gaestehaus-schmid.info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row sm:px-8">
          <p className="font-serif text-sm font-semibold text-white/50">&copy; {new Date().getFullYear()} Gästehaus Schmid. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="font-serif text-sm font-semibold text-white/50 transition-colors hover:text-white/80">
              Impressum
            </Link>
            <Link href="/datenschutz" className="font-serif text-sm font-semibold text-white/50 transition-colors hover:text-white/80">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
