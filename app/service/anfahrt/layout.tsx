import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lage & Anfahrt",
  description:
    "So finden Sie das Gästehaus Schmid in Obermaiselstein im Allgäu – Anfahrt mit Auto und Bahn, Lage auf 859 m Höhe inmitten der Allgäuer Alpen und Hörnerdörfer.",
}

export default function AnfahrtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
