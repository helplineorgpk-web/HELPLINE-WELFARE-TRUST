// Content for the Mawakhat Town / Rana Town Field Map detail page, from the "Field Map" hero slide.
// `uc23` points at the matching village section on the Union Council 23 page, when there is one.

export const FIELD_MAP_IMAGE = "/img/fieldmapheadermainislider.jpg";

export const FIELD_MAP_TITLE = "Mawakhat Town, Rana Town Field Map";

export const FIELD_MAP_TAGLINE =
  "The villages and towns where Helpline Welfare Trust carries out its Mawakhat-e-Madina field work.";

export const FIELD_MAP_INTRO =
  "The field map shows the area around Rana Town, along GT Road (N5) between Kala Shah Kaku and the Lahore Bypass, in Tehsil Ferozewala, District Sheikhupura. It marks the villages and towns included in the Mawakhat-e-Madina field survey, the Al Kitab school, and the main route that connects them, from Speedo Bus Stop on GT Road out to the M-11 motorway.";

export const FIELD_MAP_ROUTE = [
  {
    title: "Speedo Bus Stop, GT Road (N5)",
    text: "The route starts from Speedo Bus Stop on GT Road, south of the Kala Shah Kaku Toll Plaza, and heads east across the railway line.",
  },
  {
    title: "Gulshan e Babar",
    text: "It curves past Gulshan e Babar and turns north-east onto Hardosohal Road.",
  },
  {
    title: "Sanam Town and Bashir Town",
    text: "Hardosohal Road runs between Sanam Town on the west and Bashir Town on the east.",
  },
  {
    title: "Al Kitab and Abid Town",
    text: "East of the road lie the Al Kitab school and Abid Town, the centre of the field work.",
  },
  {
    title: "Chak 39 and Chak 40",
    text: "The road continues north-east between Chak 39 and Chak 40.",
  },
  {
    title: "Lahore Bypass and Chak 42",
    text: "It crosses the Lahore Bypass and passes Chak 42.",
  },
  {
    title: "Lahore Toll Plaza West (M-11)",
    text: "The route ends near Lahore Toll Plaza West on the M-11, close to the M11–M2 Interchange.",
  },
];

export const FIELD_MAP_LOCALITIES = [
  { name: "Rana Town", area: "West of GT Road (N5), south of Kala Shah Kaku", uc23: "rana-town-dargahi-gill" },
  { name: "Dargai Gill", area: "West of GT Road, north of Rana Town", uc23: "rana-town-dargahi-gill" },
  { name: "Ahmad Nagar", area: "West of GT Road, south of Rana Town" },
  { name: "Sanam Town", area: "West of Hardosohal Road, near Speedo Bus Stop" },
  { name: "Bashir Town", area: "East of Hardosohal Road, north of Gulshan e Babar", uc23: "bashir-town-khurram-town" },
  { name: "Abid Town", area: "Next to the Al Kitab school, east of Hardosohal Road", uc23: "abid-town" },
  { name: "Chak 39", area: "West of Hardosohal Road, south of the Lahore Bypass", uc23: "chak-39" },
  { name: "Chak 40", area: "East of Hardosohal Road, south of the Lahore Bypass", uc23: "chak-40" },
  { name: "Chak 42", area: "Along Hardosohal Road, north of the Lahore Bypass" },
  { name: "Chak 43", area: "North of Chak 42, west of Hardosohal Road" },
  { name: "Chak 41", area: "North-east of the route, near the M-11" },
  { name: "Abbas Nagar", area: "North of Chak 41, near the M-11" },
  { name: "Muhammadpura", area: "North-east corner of the map, beyond the M-11" },
];

export const FIELD_MAP_LANDMARKS = [
  { name: "Al Kitab School", type: "School", note: "Helpline's school next to Abid Town" },
  { name: "Speedo Bus Stop", type: "Bus stop", note: "GT Road (N5), start of the route" },
  { name: "Kala Shah Kaku Toll Plaza", type: "Toll plaza", note: "GT Road (N5)" },
  { name: "Kala Shah Kaku Railway Station", type: "Railway station", note: "North-west of the map" },
  { name: "National Highway & Motorway Police Office", type: "Office", note: "Kala Shah Kaku interchange" },
  { name: "Lahore Smart City", type: "Housing scheme", note: "Along the Lahore Bypass" },
  { name: "UHS Jinnah Campus", type: "Campus", note: "Kala Shah Kaku" },
  { name: "Lahore Bypass", type: "Road", note: "Runs east–west across the map" },
  { name: "Lahore Toll Plaza West", type: "Toll plaza", note: "M-11, end of the route" },
  { name: "M11 – M2 Interchange", type: "Interchange", note: "Sialkot–Lahore bypass junction" },
  { name: "Kala Khatai Interchange", type: "Interchange", note: "M-11, south-east of the map" },
];
