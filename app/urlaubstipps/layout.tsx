import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Urlaubstipps",
  description:
    "Wandern, Skifahren und Ausflüge rund um Obermaiselstein im Allgäu – die besten Urlaubstipps und Freizeitaktivitäten vom Gästehaus Schmid für Ihren Aufenthalt.",
}

export default function UrlaubstippsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
