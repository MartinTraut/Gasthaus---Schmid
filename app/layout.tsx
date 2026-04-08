import type { Metadata } from "next"
import { Inter, Cormorant_Garamond, Great_Vibes } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-script",
})

export const metadata: Metadata = {
  title: {
    default: "Gaestehaus Schmid | Urlaub in Obermaiselstein im Allgaeu",
    template: "%s | Gaestehaus Schmid",
  },
  description:
    "Gemuetliches Gaestehaus mit Fruehstueck und Panoramablick in die Allgaeuer Alpen. Komfortable Zimmer in Obermaiselstein auf 859m Hoehe. Familiaer, herzlich, erholsam.",
  keywords: [
    "Gaestehaus Obermaiselstein",
    "Pension Allgaeu",
    "Urlaub Obermaiselstein",
    "Gaestehaus Schmid",
    "Zimmer mit Fruehstueck Allgaeu",
    "Wanderurlaub Allgaeu",
    "Skiurlaub Allgaeu",
    "Hoernerdoerfer",
  ],
  openGraph: {
    title: "Gaestehaus Schmid | Urlaub in Obermaiselstein im Allgaeu",
    description:
      "Gemuetliches Gaestehaus mit Fruehstueck und Panoramablick in die Allgaeuer Alpen.",
    url: "https://www.gaestehaus-schmid.info",
    siteName: "Gaestehaus Schmid",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://storage.tramino.net/gaestehaus-schmid-20252/993331/1200.jpg?r=1",
        width: 1200,
        height: 630,
        alt: "Gaestehaus Schmid - Urlaub in Obermaiselstein",
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`antialiased ${inter.variable} ${cormorant.variable} ${greatVibes.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Gaestehaus Schmid",
              description:
                "Gemuetliches Gaestehaus mit Fruehstueck und Panoramablick in die Allgaeuer Alpen in Obermaiselstein.",
              url: "https://www.gaestehaus-schmid.info",
              telephone: "+49 8326 7165",
              email: "post@gaestehaus-schmid.info",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hoistaig 3",
                addressLocality: "Obermaiselstein",
                postalCode: "87538",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.4479675,
                longitude: 10.2382746,
              },
              image:
                "https://storage.tramino.net/gaestehaus-schmid-20252/993331/1200.jpg?r=1",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Fruehstuecksbuffet", value: true },
                { "@type": "LocationFeatureSpecification", name: "WLAN", value: true },
                { "@type": "LocationFeatureSpecification", name: "Thermium Wellness", value: true },
              ],
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
