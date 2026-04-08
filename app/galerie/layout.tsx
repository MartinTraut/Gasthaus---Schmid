import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bildergalerie",
  description:
    "Bildergalerie vom Gästehaus Schmid in Obermaiselstein im Allgäu – Eindrücke unserer Zimmer, des Hauses und der Allgäuer Berglandschaft rund um die Hörnerdörfer.",
}

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
