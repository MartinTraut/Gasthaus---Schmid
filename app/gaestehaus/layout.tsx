import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Über unser Gästehaus",
  description:
    "Lernen Sie das Gästehaus Schmid in Obermaiselstein im Allgäu kennen – familiär geführt, mit Panoramablick auf die Berge und herzlicher Gastfreundschaft seit Generationen.",
}

export default function GaestehausLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
