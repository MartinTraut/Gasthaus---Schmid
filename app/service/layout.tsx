import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Service",
  description:
    "Unser Service im Gästehaus Schmid in Obermaiselstein im Allgäu – Frühstück, Brötchenservice, Gästekarten und alles für einen sorgenfreien Urlaub in den Bergen.",
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
