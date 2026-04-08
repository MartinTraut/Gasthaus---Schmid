import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jetzt buchen",
  description:
    "Buchen Sie Ihren Aufenthalt im Gästehaus Schmid in Obermaiselstein im Allgäu – Zimmer mit Frühstück und Bergblick direkt online anfragen. Einfach und unkompliziert.",
}

export default function BuchenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
