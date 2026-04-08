import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung des Gästehaus Schmid in Obermaiselstein im Allgäu – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-warm-50 pt-44 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mb-8 font-serif text-4xl font-bold text-warm-900">Datenschutzerklärung</h1>

        <div className="space-y-8 font-serif text-lg leading-relaxed text-warm-800">
          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">1. Verantwortliche Stelle</h2>
            <p>
              Rosel Schmid<br />
              Gästehaus Schmid<br />
              Hoistaig 3<br />
              87538 Obermaiselstein<br />
              E-Mail: post@gaestehaus-schmid.info<br />
              Telefon: +49 8326 7165
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Beim Besuch unserer Website werden automatisch Informationen
              durch den Browser übermittelt und in Server-Logfiles gespeichert.
              Diese Daten werden nicht bestimmten Personen zugeordnet und
              nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">3. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben zur Bearbeitung der Anfrage bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">4. Google Maps</h2>
            <p>
              Diese Seite nutzt Google Maps zur Darstellung interaktiver
              Karten. Bei der Nutzung von Google Maps werden auch Daten
              über die Nutzung der Kartenfunktionen durch Besucher erhoben
              und an Google übermittelt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">5. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
              Sie haben zudem das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">6. Cookies</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Es werden
              lediglich technisch notwendige Cookies gesetzt, die für den
              Betrieb der Website erforderlich sind.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
