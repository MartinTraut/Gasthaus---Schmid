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
      "Gemuetliches Doppelzimmer mit Balkon und Blick auf die Allgaeuer Bergwelt. Massivholzbett, bequeme Polstermoebel und helle Einrichtung im Landhausstil.",
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
      "Helles Doppelzimmer mit blauem Teppichboden und heimeligem Allgaeuer Charme. Bequemes Holzbett, Sitzgelegenheit und Balkon. Ideal fuer Paare.",
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
      "Gemuetliches Einzelzimmer mit Schreibtisch und Spiegelschrank – perfekt fuer Alleinreisende, die Ruhe und Erholung in den Bergen suchen.",
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
      "Geraeumiges Doppelzimmer mit Sitzecke, TV-Bereich und Balkonzugang. Panoramablick auf die umliegende Berglandschaft. Unser groeßtes Zimmer.",
    image: `${STORAGE}/gaestehaus-schmid-20252/982273/1200.jpg`,
    images: [
      `${STORAGE}/gaestehaus-schmid-20252/982273/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/994304/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/982275/1200.jpg`,
    ],
    features: [
      "Geraeumiger Grundriss",
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
      "Modernes Doppelzimmer mit Massivholzbett, gemuetlicher Eckbank und Bergbildern. Zeitgemaesser Komfort trifft auf Allgaeuer Gemuetlichkeit.",
    image: `${STORAGE}/gaestehaus-schmid-20252/982298/1200.jpg`,
    images: [
      `${STORAGE}/gaestehaus-schmid-20252/982298/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/989901/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/994307/1200.jpg`,
      `${STORAGE}/gaestehaus-schmid-20252/982276/1200.jpg`,
    ],
    features: [
      "Massivholzbett",
      "Gemuetliche Eckbank",
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
    alt: "Gaestehaus Schmid im Sommer mit Bergpanorama",
  },
  {
    src: `${STORAGE}/gaestehaus-schmid-20252/987421/1200.jpg`,
    alt: "Fruehstuecksraum im Gaestehaus Schmid",
  },
  {
    src: `${STORAGE}/gaestehaus-schmid-20252/987420/1200.jpg?r=1`,
    alt: "Fruehstueck im Garten mit Bergblick",
  },
  {
    src: `${STORAGE}/gaestehaus-schmid-20252/994593/600x400.jpg?r=1`,
    alt: "Allgaeuer Berglandschaft bei Obermaiselstein",
  },
]

export const GALLERY_IMAGES = {
  gaestehaus: [
    { src: `${STORAGE}/gaestehaus-schmid-20252/993331/1200.jpg?r=1`, alt: "Gaestehaus Schmid Aussenansicht Sommer" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/994309/1200.jpg`, alt: "Gaestehaus Schmid im Winter" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982286/1200.jpg`, alt: "Gaestehaus Schmid Schriftzug" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/989900/1200.jpg`, alt: "Doppelzimmer Nr. 1" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982277/1200.jpg`, alt: "Doppelzimmer Nr. 2" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982282/1200.jpg`, alt: "Einzelzimmer Nr. 3" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982273/1200.jpg`, alt: "Doppelzimmer Nr. 4" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982298/1200.jpg`, alt: "Doppelzimmer Nr. 8" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982275/1200.jpg`, alt: "Modernes Bad mit Naturstein-Dusche" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982276/1200.jpg`, alt: "Badezimmer mit Dusche" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/994304/1200.jpg`, alt: "Balkonaussicht mit Bergpanorama" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982278/1200.jpg`, alt: "Fruehstuecksraum" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982290/1200.jpg`, alt: "Fruehstueck im Garten" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982283/1200.jpg`, alt: "Thermium Sauna und Ruhebereich" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982284/1200.jpg`, alt: "Blumen am Eingang" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/982285/1200.jpg`, alt: "Eingangsbereich" },
  ],
  umgebung: [
    { src: `${STORAGE}/gaestehaus-schmid-20252/994593/600x400.jpg?r=1`, alt: "Blick Richtung Balderschwang" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/1130479/595x350.jpg`, alt: "Allgaeuer Bergwelt" },
    { src: `${STORAGE}/suedallgaeu/940884/400x300.jpg?r=1`, alt: "Bergblick Allgaeu" },
    { src: `${STORAGE}/suedallgaeu/998798/400x300.jpg`, alt: "Gaisberg Panorama" },
    { src: `${STORAGE}/suedallgaeu/940870/567x319.jpg?r=1`, alt: "Gaisalpe Wanderweg" },
    { src: `${STORAGE}/suedallgaeu/940865/300x225.jpg?r=1`, alt: "Tobelweg zur Gaisalpe" },
    { src: `${STORAGE}/suedallgaeu/940867/300.jpg?r=1`, alt: "Blumenwiese Allgaeu" },
    { src: `${STORAGE}/suedallgaeu/944588/567x319.jpg?r=1`, alt: "Gruenten mit Funkturm" },
    { src: `${STORAGE}/suedallgaeu/944592/300.jpg?r=1`, alt: "Blick Richtung Kranzegg" },
    { src: `${STORAGE}/suedallgaeu/944687/567x319.jpg?r=1`, alt: "Sonnenaufgang am Sonderdorfer Kreuz" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/994580/300.jpg?r=1`, alt: "Besler Gipfel" },
    { src: `${STORAGE}/gaestehaus-schmid-20252/994591/300x225.jpg?r=1`, alt: "Auf dem Besler" },
  ],
}

export const HIKING_TIPS = [
  {
    name: "Besler",
    slug: "besler",
    shortDescription: "Wunderschoener Aussichtsberg, ab Obermaiselstein in ca. 3 Std. ueber den Koenigsweg oder ab Grasgehren in nur 1 Stunde erreichbar.",
    description: "Der Besler ist ein wunderschoener Aussichtsberg und direkt von Obermaiselstein in ca. 3 Stunden Fussmarsch ueber den Koenigsweg zu erreichen. Ebenso koennen Sie ab Grasgehren in nur 1 Stunde hinauf gelangen.",
    image: `${STORAGE}/suedallgaeu/814973/567x319.jpg?r=1`,
    images: [
      `${STORAGE}/suedallgaeu/814973/567x319.jpg?r=1`,
      `${STORAGE}/gaestehaus-schmid-20252/994580/300.jpg?r=1`,
      `${STORAGE}/gaestehaus-schmid-20252/994591/300x225.jpg?r=1`,
      `${STORAGE}/gaestehaus-schmid-20252/994311/300.jpg?r=1`,
    ],
  },
  {
    name: "Gaisalpe",
    slug: "gaisalpe",
    shortDescription: "Beliebtes Ausflugsziel, ab Parkplatz Reichenbach in ca. 45 Minuten erreichbar. Im Winter tolle Rodelstrecke!",
    description: "Im Allgaeu ist die Gaisalpe ein sehr beliebtes Ausflugsziel. Vom Parkplatz in Reichenbach aus erreicht man die Gaisalpe in ca. 45 Minuten. Im Winter fuehrt eine tolle Rodelstrecke zurueck ins Tal – also unbedingt einen Schlitten mitnehmen.",
    image: `${STORAGE}/suedallgaeu/940870/567x319.jpg?r=1`,
    images: [
      `${STORAGE}/suedallgaeu/940870/567x319.jpg?r=1`,
      `${STORAGE}/suedallgaeu/940865/300x225.jpg?r=1`,
      `${STORAGE}/suedallgaeu/940867/300.jpg?r=1`,
      `${STORAGE}/suedallgaeu/940877/300.jpg?r=1`,
    ],
  },
  {
    name: "Gruenten",
    slug: "gruenten",
    shortDescription: "Der Waechter des Allgaeus – eine Wanderung von Burgberg aus dauert ca. 3 Stunden mit einzigartiger Aussicht.",
    description: "Der Waechter des Allgaeus. Eine Wanderung auf den Gruenten dauert von Burgberg aus circa 3 Stunden, belohnt jedoch mit einer einzigartigen Sicht. Bei klarem Wetter reicht der Blick vom Bodensee bis zur Zugspitze.",
    image: `${STORAGE}/suedallgaeu/944588/567x319.jpg?r=1`,
    images: [
      `${STORAGE}/suedallgaeu/944588/567x319.jpg?r=1`,
      `${STORAGE}/suedallgaeu/944592/300.jpg?r=1`,
      `${STORAGE}/suedallgaeu/944595/300.jpg?r=1`,
      `${STORAGE}/suedallgaeu/944590/300.jpg?r=1`,
    ],
  },
  {
    name: "Riedbergerhorn",
    slug: "riedbergerhorn",
    shortDescription: "Ab Grasgehren in einer Stunde erreichbar mit wunderschoenen Ausblicken. Rueckweg ueber die Mittelalpe moeglich.",
    description: "Ab Grasgehren in einer Stunde geht es hoch zum Riedbergerhorn. Wunderschoene Ausblicke werden Sie belohnen. Auf dem Rueckweg koennen Sie ueber die Mittelalpe (Einkehr) zurueck nach Grasgehren laufen.",
    image: `${STORAGE}/gaestehaus-schmid-20252/994593/567x319.jpg?r=1`,
    images: [
      `${STORAGE}/gaestehaus-schmid-20252/994593/567x319.jpg?r=1`,
      `${STORAGE}/gaestehaus-schmid-20252/994313/300.jpg?r=1`,
      `${STORAGE}/gaestehaus-schmid-20252/994594/300.jpg?r=1`,
    ],
  },
  {
    name: "Sonderdorfer Kreuz",
    slug: "sonderdorfer-kreuz",
    shortDescription: "Beliebte Wanderung ab der gedeckten Holzbruecke zwischen Obermaiselstein und Bolsterlang. Perfekt fuer Sonnenaufgangstouren.",
    description: "Die Wanderung zum Sonderdorfer Kreuz ist bei vielen Gaesten in den Hoernerdoerfern sehr beliebt. Ab der gedeckten Holzbruecke zwischen Obermaiselstein und Bolsterlang fuehrt der Weg am Waldrand nach Bolsterlang und zum Aussichtspunkt. Etwas kuerzer ist die Wanderung ab der Talstation der Hoernerbahn – perfekt fuer eine kleine Sonnenaufgangstour.",
    image: `${STORAGE}/suedallgaeu/944687/567x319.jpg?r=1`,
    images: [
      `${STORAGE}/suedallgaeu/944687/567x319.jpg?r=1`,
      `${STORAGE}/suedallgaeu/944688/300.jpg?r=1`,
      `${STORAGE}/suedallgaeu/940885/300x225.jpg?r=1`,
      `${STORAGE}/suedallgaeu/944691/300.jpg?r=1`,
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
      { name: "Allgaeuer Bergkaeserei", url: "https://www.allgaeuer-bergkaese.de/" },
    ],
  },
  {
    category: "Sport & Abenteuer",
    items: [
      { name: "Grasgehrenlifte", url: "https://grasgehren.de/" },
      { name: "Hoernerbahn Bolsterlang", url: "https://www.hoernerbahn.de/" },
      { name: "Soellereckbahn Oberstdorf", url: "https://www.ok-bergbahnen.com/bergbahnen/soellereckbahn/" },
      { name: "Sommerrodelbahn Alpsee Bergwelt", url: "https://www.alpsee-bergwelt.de/" },
      { name: "Kletterwald Baerenfalle", url: "https://www.kletterwald-baerenfalle.de/" },
    ],
  },
  {
    category: "Freizeit & Region",
    items: [
      { name: "Hoernerdoerfer", url: "https://www.hoernerdoerfer.de/" },
      { name: "Obermaiselstein Tourismus", url: "https://www.hoernerdoerfer.de/obermaiselstein" },
      { name: "Wonnemar Sonthofen", url: "https://www.wonnemar.de/sonthofen/" },
      { name: "Allgaeu Walser Card", url: "https://www.allgaeu-walser-card.com/" },
    ],
  },
]

export const WEBCAM_URL = "https://www.foto-webcam.eu/webcam/obermaiselstein/"
