import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie das Gästehaus Schmid in Obermaiselstein im Allgäu – Anfragen, Reservierungen und persönliche Beratung für Ihren Urlaub in den Allgäuer Alpen.",
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
