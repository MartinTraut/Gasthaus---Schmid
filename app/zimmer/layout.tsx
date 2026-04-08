import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Unsere Zimmer",
  description:
    "Entdecken Sie unsere 5 gemütlichen Zimmer im Gästehaus Schmid in Obermaiselstein im Allgäu – mit Frühstück, Bergblick und komfortabler Ausstattung für Ihren Urlaub.",
}

export default function ZimmerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
