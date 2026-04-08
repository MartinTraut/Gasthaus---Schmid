import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und Angaben gemäß § 5 TMG zum Gästehaus Schmid in Obermaiselstein im Allgäu – Kontaktdaten, Verantwortlicher und rechtliche Informationen.",
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-warm-50 pt-44 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mb-8 font-serif text-4xl font-bold text-warm-900">Impressum</h1>

        <div className="space-y-8 font-serif text-lg leading-relaxed text-warm-800">
          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">Angaben gemäß § 5 DDG</h2>
            <p>
              Rosel Schmid<br />
              Gästehaus Schmid<br />
              Hoistaig 3<br />
              87538 Obermaiselstein<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">Kontakt</h2>
            <p>
              Telefon: +49 8326 7165<br />
              Fax: +49 8326 384 285<br />
              Mobil: +49 151 117 003 33<br />
              E-Mail: post@gaestehaus-schmid.info
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
              bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten
              ist stets der jeweilige Anbieter verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-warm-900">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder
              verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
