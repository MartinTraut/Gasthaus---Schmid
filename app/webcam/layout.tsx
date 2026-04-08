import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Webcam",
  description:
    "Live-Webcam aus Obermaiselstein im Allgäu – aktueller Blick auf die Bergwelt rund um das Gästehaus Schmid. Wetter und Schneelage in Echtzeit verfolgen.",
}

export default function WebcamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
