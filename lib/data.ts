const STORAGE = "https://storage.tramino.net"

export interface RoomData {
  name: string
  slug: string
  shortName: string
  type: string
  persons: string
  description: string
  image: string
  images: string[]
  features: string[]
}

export const ROOMS: RoomData[] = [
  {
    name: "Doppelzimmer Nr. 1",
    slug: "doppelzimmer-1",
    shortName: "DZ 1",
    type: "Doppelzimmer",
    persons: "2 Personen",
    description:
      "Gemütliches Doppelzimmer mit Balkon und Blick auf die Allgäuer Bergwelt. Massivholzbett, bequeme Polstermöbel und helle Einrichtung im Landhausstil.",
    image: `${STORAGE}/gaestehaus-schmid-20252/989900/1200.jpg`,
    images: [
      `${STORAGE}/gaestehaus-schmid-20252/989900/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/989899/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/994304/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/982276/1200.jpg`,
    ],
    features: [
      "Balkon mit Bergblick",
      "Massivholzbett",
      "SAT-TV",
      "WLAN",
      "Eigenes Bad mit Dusche/WC",
    ],
  },
  {
    name: "Doppelzimmer Nr. 2",
    slug: "doppelzimmer-2",
    shortName: "DZ 2",
    type: "Doppelzimmer",
    persons: "2 Personen",
    description:
      "Helles Doppelzimmer mit blauem Teppichboden und heimeligem Allgäuer Charme. Bequemes Holzbett, Sitzgelegenheit und Balkon. Ideal für Paare.",
    image: `${STORAGE}/gaestehaus-schmid-20252/982277/1200.jpg`,
    images: [
      `${STORAGE}/gaestehaus-schmid-20252/982277/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/994307/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/982276/1200.jpg`,
    ],
    features: [
      "Balkon mit Bergblick",
      "Helle Einrichtung",
      "SAT-TV",
      "WLAN",
      "Eigenes Bad mit Dusche/WC",
    ],
  },
  {
    name: "Einzelzimmer Nr. 3",
    slug: "einzelzimmer-3",
    shortName: "EZ 3",
    type: "Einzelzimmer",
    persons: "1 Person",
    description:
      "Gemütliches Einzelzimmer mit Schreibtisch und Spiegelschrank, perfekt für Alleinreisende, die Ruhe und Erholung in den Bergen suchen.",
    image: `${STORAGE}/gaestehaus-schmid-20252/982282/1200.jpg`,
    images: [
      `${STORAGE}/gaestehaus-schmid-20252/982282/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/982276/1200.jpg`,
    ],
    features: [
      "Einzelbett",
      "Schreibtisch",
      "SAT-TV",
      "WLAN",
      "Eigenes Bad mit Dusche/WC",
    ],
  },
  {
    name: "Doppelzimmer Nr. 4",
    slug: "doppelzimmer-4",
    shortName: "DZ 4",
    type: "Doppelzimmer",
    persons: "2 Personen",
    description:
      "Geräumiges Doppelzimmer mit Sitzecke, TV-Bereich und Balkonzugang. Panoramablick auf die umliegende Berglandschaft. Unser größtes Zimmer.",
    image: `${STORAGE}/gaestehaus-schmid-20252/982273/1200.jpg`,
    images: [
      `${STORAGE}/gaestehaus-schmid-20252/982273/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/994304/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/982275/1200.jpg`,
    ],
    features: [
      "Geräumiger Grundriss",
      "Panoramablick mit Balkon",
      "Sitzecke",
      "SAT-TV",
      "WLAN",
      "Modernes Bad mit ebenerdiger Dusche",
    ],
  },
  {
    name: "Doppelzimmer Nr. 8",
    slug: "doppelzimmer-8",
    shortName: "DZ 8",
    type: "Doppelzimmer",
    persons: "2 Personen",
    description:
      "Modernes Doppelzimmer mit Massivholzbett, gemütlicher Eckbank und Bergbildern. Zeitgemäßer Komfort trifft auf Allgäuer Gemütlichkeit.",
    image: `${STORAGE}/gaestehaus-schmid-20252/982298/1200.jpg`,
    images: [
      `${STORAGE}/gaestehaus-schmid-20252/982298/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/989901/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/994307/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/982276/1200.jpg`,
    ],
    features: [
      "Massivholzbett",
      "Gemütliche Eckbank",
      "Bergblick",
      "SAT-TV",
      "WLAN",
      "Eigenes Bad mit Dusche/WC",
    ],
  },
]

export const HERO_IMAGES = [
  {
    src: `${STORAGE}/gaestehaus-schmid-20252/993331/1200.jpg?r=1`,
    alt: "Gästehaus Schmid im Sommer mit Bergpanorama",
  },
  {
    src: `${STORAGE}/gaestehaus-schmid-20252/987421/1200.jpg`,
    alt: "Frühstücksraum im Gästehaus Schmid",
  },
  {
    src: `${STORAGE}/gaestehaus-schmid-20252/987420/1200.jpg?r=1`,
    alt: "Frühstück im Garten mit Bergblick",
  },
  {
    src: `${STORAGE}/gaestehaus-schmid-20252/994593/1200.jpg?r=1`,
    alt: "Allgäuer Berglandschaft bei Obermaiselstein",
  },
]

export const GALLERY_IMAGES = {
  gaestehaus: [
    { src: `${STORAGE}/gaestehaus-schmid-20252/993331/1200.jpg?r=1`, alt: "Gästehaus Schmid Außenansicht Sommer" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/994309/1200.jpg`, alt: "Gästehaus Schmid im Winter" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982286/1200.jpg`, alt: "Gästehaus Schmid Schriftzug" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/989900/1200.jpg`, alt: "Doppelzimmer Nr. 1" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982277/1200.jpg`, alt: "Doppelzimmer Nr. 2" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982282/1200.jpg`, alt: "Einzelzimmer Nr. 3" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982273/1200.jpg`, alt: "Doppelzimmer Nr. 4" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982298/1200.jpg`, alt: "Doppelzimmer Nr. 8" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982275/1200.jpg`, alt: "Modernes Bad mit Naturstein-Dusche" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982276/1200.jpg`, alt: "Badezimmer mit Dusche" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/994304/1200.jpg`, alt: "Balkonaussicht mit Bergpanorama" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982278/1200.jpg`, alt: "Frühstücksraum" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982290/1200.jpg`, alt: "Frühstück im Garten" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982283/1200.jpg`, alt: "Thermium Sauna und Ruhebereich" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982284/1200.jpg`, alt: "Blumen am Eingang" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982285/1200.jpg`, alt: "Eingangsbereich" },
  ],
  umgebung: [
    { src: `${STORAGE}/gaestehaus-schmid-20252/994593/1200.jpg?r=1`, alt: "Blick Richtung Balderschwang" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/1130479/1200.jpg`, alt: "Allgäuer Bergwelt" },
    { src: `${STORAGE}/suedallgaeu/940884/1200.jpg?r=1`, alt: "Bergblick Allgäu" },
    { src: `${STORAGE}/suedallgaeu/998798/1200.jpg`, alt: "Gaisberg Panorama" },
    { src: `${STORAGE}/suedallgaeu/940870/1200.jpg?r=1`, alt: "Gaisalpe Wanderweg" },
    { src: `${STORAGE}/suedallgaeu/940865/1200.jpg?r=1`, alt: "Tobelweg zur Gaisalpe" },
    { src: `${STORAGE}/suedallgaeu/940867/1200.jpg?r=1`, alt: "Blumenwiese Allgäu" },
    { src: `${STORAGE}/suedallgaeu/944588/1200.jpg?r=1`, alt: "Grünten mit Funkturm" },
    { src: `${STORAGE}/suedallgaeu/944592/1200.jpg?r=1`, alt: "Blick Richtung Kranzegg" },
    { src: `${STORAGE}/suedallgaeu/944687/1200.jpg?r=1`, alt: "Sonnenaufgang am Sonderdorfer Kreuz" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/994580/1200.jpg?r=1`, alt: "Besler Gipfel" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/994591/1200.jpg?r=1`, alt: "Auf dem Besler" },
  ],
}

export const HIKING_TIPS = [
  {
    name: "Besler",
    slug: "besler",
    shortDescription: "Wunderschöner Aussichtsberg, ab Obermaiselstein in ca. 3 Stunden über den Königsweg oder ab Grasgehren in nur 1 Stunde erreichbar.",
    description: "Der Besler ist ein wunderschöner Aussichtsberg und direkt von Obermaiselstein aus in ca. 3 Stunden Fußmarsch über den Königsweg zu erreichen. Von Grasgehren aus gelangen Sie in nur 1 Stunde hinauf.",
    image: `${STORAGE}/suedallgaeu/814973/1200.jpg?r=1`,
    images: [
      `${STORAGE}/suedallgaeu/814973/1200.jpg?r=1`,
      `${STORAGE}/gaestehaus-schmid-20252/994580/1200.jpg?r=1`,
      `${STORAGE}/gaestehaus-schmid-20252/994591/1200.jpg?r=1`,
      `${STORAGE}/gaestehaus-schmid-20252/994311/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/814971/1200.jpg?r=1`,
    ],
  },
  {
    name: "Gaisalpe",
    slug: "gaisalpe",
    shortDescription: "Beliebtes Ausflugsziel, ab Parkplatz Reichenbach in ca. 45 Minuten erreichbar. Im Winter tolle Rodelstrecke!",
    description: "Die Gaisalpe ist eines der beliebtesten Ausflugsziele im Allgäu. Vom Parkplatz in Reichenbach aus erreichen Sie die Alpe in ca. 45 Minuten. Im Winter führt eine tolle Rodelstrecke zurück ins Tal, also unbedingt einen Schlitten mitnehmen.",
    image: `${STORAGE}/suedallgaeu/940870/1200.jpg?r=1`,
    images: [
      `${STORAGE}/suedallgaeu/940870/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/940865/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/940867/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/940877/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/940874/1200.jpg?r=1`,
    ],
  },
  {
    name: "Grünten",
    slug: "gruenten",
    shortDescription: "Der Wächter des Allgäus. Eine Wanderung von Burgberg aus dauert ca. 3 Stunden und belohnt mit einzigartiger Aussicht.",
    description: "Der Wächter des Allgäus. Die Wanderung auf den Grünten dauert von Burgberg aus etwa 3 Stunden und belohnt mit einer einzigartigen Aussicht. Bei klarem Wetter reicht der Blick vom Bodensee bis zur Zugspitze.",
    image: `${STORAGE}/suedallgaeu/944588/1200.jpg?r=1`,
    images: [
      `${STORAGE}/suedallgaeu/944588/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/944592/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/944595/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/944590/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/944598/1200.jpg?r=1`,
    ],
  },
  {
    name: "Riedbergerhorn",
    slug: "riedbergerhorn",
    shortDescription: "Ab Grasgehren in einer Stunde erreichbar mit wunderschönen Ausblicken. Rückweg über die Mittelalpe möglich.",
    description: "Ab Grasgehren geht es in einer Stunde hoch zum Riedbergerhorn. Wunderschöne Ausblicke belohnen den Aufstieg. Auf dem Rückweg können Sie über die Mittelalpe einkehren und von dort zurück nach Grasgehren laufen.",
    image: `${STORAGE}/gaestehaus-schmid-20252/994593/1200.jpg?r=1`,
    images: [
      `${STORAGE}/gaestehaus-schmid-20252/994593/1200.jpg?r=1`,
      `${STORAGE}/gaestehaus-schmid-20252/994313/1200.jpg?r=1`,
      `${STORAGE}/gaestehaus-schmid-20252/994594/1200.jpg?r=1`,
    ],
  },
  {
    name: "Sonderdorfer Kreuz",
    slug: "sonderdorfer-kreuz",
    shortDescription: "Beliebte Wanderung ab der gedeckten Holzbrücke zwischen Obermaiselstein und Bolsterlang. Perfekt für Sonnenaufgangstouren.",
    description: "Die Wanderung zum Sonderdorfer Kreuz ist bei vielen Gästen in den Hörnerdörfern sehr beliebt. Ab der gedeckten Holzbrücke zwischen Obermaiselstein und Bolsterlang führt der Weg am Waldrand entlang nach Bolsterlang und weiter zum Aussichtspunkt. Etwas kürzer ist die Variante ab der Talstation der Hörnerbahn, perfekt für eine kleine Sonnenaufgangstour.",
    image: `${STORAGE}/suedallgaeu/944687/1200.jpg?r=1`,
    images: [
      `${STORAGE}/suedallgaeu/944687/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/944688/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/940885/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/944691/1200.jpg?r=1`,
      `${STORAGE}/suedallgaeu/940888/1200.jpg?r=1`,
    ],
  },
]

export const ACTIVITY_LINKS = [
  {
    category: "Natur & Erlebnis",
    items: [
      { name: "Sturmannshöhle Obermaiselstein", url: "https://www.hoernerdoerfer.de/a-sturmannshoehle-obermaiselstein-allgaeu" },
      { name: "Breitachklamm", url: "https://www.breitachklamm.com/" },
      { name: "Alpenwildpark", url: "https://www.alpenwildpark.de/" },
      { name: "Erlebnis-Erzgruben Burgberg", url: "https://www.erzgruben.de/" },
      { name: "Bergbauernmuseum Diepolz", url: "https://www.bergbauernmuseum.de/willkommen.html" },
      { name: "Allgäuer Bergkäserei", url: "https://www.allgaeuer-bergkaese.de/" },
    ],
  },
  {
    category: "Sport & Abenteuer",
    items: [
      { name: "Grasgehrenlifte", url: "https://grasgehren.de/" },
      { name: "Hörnerbahn Bolsterlang", url: "https://www.hoernerbahn.de/" },
      { name: "Söllereckbahn Oberstdorf", url: "https://www.ok-bergbahnen.com/bergbahnen/soellereckbahn/" },
      { name: "Sommerrodelbahn Alpsee Bergwelt", url: "https://www.alpsee-bergwelt.de/" },
      { name: "Kletterwald Bärenfalle", url: "https://www.kletterwald-baerenfalle.de/" },
    ],
  },
  {
    category: "Freizeit & Region",
    items: [
      { name: "Hörnerdörfer", url: "https://www.hoernerdoerfer.de/" },
      { name: "Obermaiselstein Tourismus", url: "https://www.hoernerdoerfer.de/obermaiselstein" },
      { name: "Wonnemar Sonthofen", url: "https://www.wonnemar.de/sonthofen/" },
      { name: "Allgäu Walser Card", url: "https://www.allgaeu-walser-card.com/" },
    ],
  },
]

export const WINTER_ACTIVITIES = [
  {
    title: "Winterwandern",
    text: "Märchenhafte Wanderungen auf gut geräumten Wegen laden zum Genießen ein.",
    image: `${STORAGE}/gaestehaus-schmid-20252/1065540/1400.jpg`,
  },
  {
    title: "Langlaufen",
    text: "Unser Loipennetz mit unzähligen Kilometern verspricht Langlaufvergnügen vom Feinsten.",
    image: `${STORAGE}/gaestehaus-schmid-20252/1065541/1400.jpg`,
  },
  {
    title: "Skifahren",
    text: "Die Hörnerdörfer bieten Skivergnügen für Jung und Alt, Könner oder Anfänger.",
    image: `${STORAGE}/gaestehaus-schmid-20252/1065542/1400.jpg`,
  },
]

export const WEBCAM_URL = "https://www.foto-webcam.eu/webcam/obermaiselstein/"
