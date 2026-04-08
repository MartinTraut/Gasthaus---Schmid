import Link from "next/link"
import { MapPin, Phone, Mail, Smartphone, CloudSun } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-warm-900 text-white/75">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Beschreibung */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-serif text-xl font-bold text-white">
              Gaestehaus Schmid
            </Link>
            <p className="mt-4 font-serif text-[14px] leading-relaxed text-white/50">
              Gemuetliches Gaestehaus mit Fruehstueck und Panoramablick in die
              Allgaeuer Alpen. Ihr Zuhause auf 859 Metern Hoehe.
            </p>
            <a
              href="https://14-tage-wettervorhersage.de/wetter/obermaiselstein/vorhersage/177202/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/8 px-3 py-2 font-serif text-[13px] text-white/60 transition-colors hover:bg-white/15 hover:text-white"
            >
              <CloudSun className="h-4 w-4" />
              Wettervorhersage Obermaiselstein
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-[15px] font-semibold text-white">
              Schnellzugriff
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Startseite", href: "/" },
                { label: "Gaestehaus", href: "/gaestehaus" },
                { label: "Zimmer", href: "/zimmer" },
                { label: "Urlaubstipps", href: "/urlaubstipps" },
                { label: "Galerie", href: "/galerie" },
                { label: "Webcam", href: "/webcam" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-serif text-[14px] text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zimmer */}
          <div>
            <h3 className="font-serif text-[15px] font-semibold text-white">
              Unsere Zimmer
            </h3>
            <ul className="mt-4 space-y-2">
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
                    className="font-serif text-[14px] text-white/50 transition-colors hover:text-white"
                  >
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-serif text-[15px] font-semibold text-white">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 font-serif text-[14px]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
                <span>
                  Hoistaig 3
                  <br />
                  87538 Obermaiselstein
                </span>
              </li>
              <li>
                <a
                  href="tel:+4983267165"
                  className="flex items-center gap-2.5 font-serif text-[14px] transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-white/30" />
                  08326 / 7165
                </a>
              </li>
              <li>
                <a
                  href="tel:+4915111700333"
                  className="flex items-center gap-2.5 font-serif text-[14px] transition-colors hover:text-white"
                >
                  <Smartphone className="h-4 w-4 text-white/30" />
                  0151 / 117 003 33
                </a>
              </li>
              <li>
                <a
                  href="mailto:post@gaestehaus-schmid.info"
                  className="flex items-center gap-2.5 font-serif text-[14px] transition-colors hover:text-white break-all"
                >
                  <Mail className="h-4 w-4 text-white/30" />
                  post@gaestehaus-schmid.info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-[12px] text-white/30 sm:flex-row sm:px-8">
          <p>&copy; {new Date().getFullYear()} Gaestehaus Schmid. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="transition-colors hover:text-white/60">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-white/60">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
