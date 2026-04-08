import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thermium Wellness",
  description:
    "Das Thermium in Obermaiselstein im Allgäu – Wellness, Sauna und Erholung direkt vor der Tür des Gästehaus Schmid. Entspannung pur nach dem Wandern oder Skifahren.",
}

export default function ThermiumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
