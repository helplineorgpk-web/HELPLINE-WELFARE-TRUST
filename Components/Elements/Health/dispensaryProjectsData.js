function formatPkr(amount) {
  return `PKR ${Number(amount).toLocaleString("en-PK")}`;
}

export const DISPENSARY_DETAIL_HERO_IMAGE = "/img/causes/karbathhospital.JPG";

export const dispensaryProjects = [
  {
    slug: "rana-town",
    title: "Rana Town, Sub Lahore",
    tagline: "A dispensary at the heart of the Al-Kitab community",
    cardDescription:
      "Free medicines, doctor checkups, and patient welfare for families who cannot afford private healthcare — right where Helpline already serves through education and community care.",
    image: "/img/campaigns-opt/img_causes_alkitab2.webp",
    monthlyMedicalTotal: 230000,
    monthlyGrandTotal: 230000,
    monthlyGrandTotalNote: "Tele-medicine equipment costs to be finalized",
    medicalCosts: [
      { item: "Medicine", cost: 60000 },
      { item: "Doctor Pay (3 doctors × approx. PKR 60,000/month)", cost: 80000 },
      { item: "Conveyance", cost: 20000 },
      { item: "Dispenser Pay", cost: 50000 },
      { item: "Aya / Nurse Trainee", cost: 20000 },
    ],
    teleMedicineCosts: [],
    teleMedicineRequirements: [
      "Tele-medicine doctor on call",
      "Laptop / computer for online consultations",
    ],
    patientWelfare: [
      "Water cooler for waiting patients",
      "Benches for families",
      "Patient bed",
      "Washroom facility",
      "Security arrangements",
      "Electricity bill coverage",
    ],
    services: [
      "Free doctor consultations",
      "Free medicines for deserving patients",
      "Dispenser and nursing support on site",
      "Tele-medicine link to specialist doctors",
      "Patient welfare facilities (seating, water, washroom)",
    ],
    detailSections: [
      {
        title: "Why Rana Town needs this dispensary",
        paragraphs: [
          "In Rana Town, Sub Lahore, many families live one illness away from crisis. A fever in a child, diabetes in an elderly parent, or a wound that will not heal — and the only options are expensive private clinics or long journeys to city hospitals that working families simply cannot afford.",
          "Helpline Welfare Trust already walks alongside this community through Al-Kitab and other programs. A permanent dispensary here is the natural next step: a door that stays open, a doctor who listens, and medicine given freely to those who would otherwise go without.",
        ],
      },
      {
        title: "What your support makes possible every month",
        paragraphs: [
          "Each month, PKR 230,000 covers the essentials that keep care running — medicines on the shelf, doctors present for checkups, a dispenser who prepares prescriptions with care, conveyance for staff and supplies, and an aya or nurse trainee who watches over patients with dignity.",
          "Beyond medicine, patient welfare matters deeply. Families who arrive tired, thirsty, or anxious deserve a clean place to sit, safe water to drink, and the basic comfort of a bed and washroom while they wait for care. Security and electricity keep the facility safe and operational — because healthcare cannot stop when the lights go out.",
        ],
      },
      {
        title: "Tele-medicine: bringing specialists closer",
        paragraphs: [
          "Not every village can host a specialist — but every patient deserves specialist advice. Tele-medicine connects Rana Town to doctors who can review cases online, guide treatment, and reduce the need for costly travel to Lahore.",
          "This unit requires a dedicated tele-medicine doctor and a laptop or computer setup. Your support helps bridge the distance between a worried parent in Rana Town and a qualified physician who can help — without the family spending what they do not have on transport.",
        ],
      },
    ],
    impactHighlights: [
      "Monthly medical operations: PKR 230,000",
      "Free medicines and doctor checkups for underserved families",
      "Integrated with Helpline's Al-Kitab community work in Sub Lahore",
      "Tele-medicine setup planned for online specialist consultations",
    ],
    ctaText: "Support Rana Town Dispensary",
    ctaHref: "/donation",
  },
  {
    slug: "umar-kot",
    title: "Umar Kot",
    tagline: "Healthcare and tele-medicine for an underserved village",
    cardDescription:
      "Doctor consultations, free medicines, and a full tele-medicine setup — internet, LCD, and printer — so specialist care reaches families who cannot travel to the city.",
    image: "/img/campaigns-opt/img_causes_mithimedicalcamp1.webp",
    monthlyMedicalTotal: 230000,
    monthlyTeleMedicineTotal: 17500,
    monthlyGrandTotal: 247500,
    medicalCosts: [
      { item: "Medicine", cost: 60000 },
      { item: "Doctor Pay", cost: 80000 },
      { item: "Conveyance", cost: 20000 },
      { item: "Dispenser Pay", cost: 50000 },
      { item: "Aya / Nurse Trainee", cost: 20000 },
    ],
    teleMedicineCosts: [
      { item: "Internet Connectivity", cost: 5000 },
      { item: "LCD Display", cost: 5000 },
      { item: "Printer", cost: 5000 },
      { item: "Electricity", cost: 2500 },
    ],
    teleMedicineRequirements: [],
    patientWelfare: [
      "Water cooler",
      "Benches for waiting families",
      "Patient bed",
      "Washroom facility",
      "Security arrangements",
    ],
    services: [
      "Free doctor consultations",
      "Free medicines",
      "On-site dispenser and nursing support",
      "Tele-medicine with internet, LCD, and printer",
      "Patient welfare facilities for dignified waiting and care",
    ],
    detailSections: [
      {
        title: "The distance between pain and treatment",
        paragraphs: [
          "For families in Umar Kot, illness is not only a medical problem — it is a journey. Every trip to a city hospital means lost wages, borrowed money for transport, and children left behind. Many simply stay home and suffer, hoping the pain will pass.",
          "Helpline Welfare Trust is preparing a dispensary that brings care to their doorstep: a doctor who checks patients, medicines given free, and a tele-medicine unit that lets a specialist see the case without the family ever leaving the village.",
        ],
      },
      {
        title: "Monthly medical care — PKR 230,000",
        paragraphs: [
          "Medicine, doctor pay, conveyance, dispenser salary, and nursing support form the backbone of daily operations. This is not abstract charity — it is the concrete cost of keeping a room open where a mother can bring her sick child and leave with both treatment and hope.",
          "When medicine is free, a family chooses health over hunger. When a doctor is present, small problems are caught before they become emergencies. That is what PKR 230,000 sustains each month.",
        ],
      },
      {
        title: "Tele-medicine setup — PKR 17,500 per month",
        paragraphs: [
          "Internet connectivity, an LCD display, a printer, and electricity power a tele-medicine desk where remote doctors can consult, review, and guide local staff. For PKR 17,500 monthly, Umar Kot is connected to expertise that would otherwise be hours away.",
          "A printed prescription, a clear diagnosis on screen, a specialist's voice through the connection — these are small technologies with enormous human impact for people who have been told for too long that quality care is not for them.",
        ],
      },
    ],
    impactHighlights: [
      "Total monthly project cost: PKR 247,500",
      "Medical services: PKR 230,000 | Tele-medicine: PKR 17,500",
      "Online doctor consultations without travel to the city",
      "Patient welfare: water, seating, bed, washroom, and security",
    ],
    ctaText: "Support Umar Kot Dispensary",
    ctaHref: "/donation",
  },
  {
    slug: "shamki-village",
    title: "Shamki Village",
    tagline: "Recommended by Kareem Medical Centre for tele-medicine",
    cardDescription:
      "4–5 km off GT Road with poor access to city hospitals. Kareem Medical Centre's team visited in March 2026 and recommended a tele-medicine unit with digital X-ray and ultrasound support.",
    image: "/img/causes/karbathhospital.JPG",
    monthlyMedicalTotal: 290000,
    monthlyTeleMedicineTotal: 13000,
    monthlyGrandTotal: 308000,
    medicalCosts: [
      { item: "Medicine", cost: 120000 },
      { item: "Doctor Pay (3 doctors × approx. PKR 60,000/month)", cost: 80000 },
      { item: "Conveyance", cost: 20000 },
      { item: "Dispenser Pay", cost: 50000 },
      { item: "Aya / Nurse Trainee", cost: 20000 },
    ],
    teleMedicineCosts: [
      { item: "Internet Expenditure", cost: 5000 },
      { item: "LCD Display", cost: 5000 },
      { item: "Operator / Computer", cost: 3000 },
    ],
    teleMedicineRequirements: [
      "1 Digital X-Ray machine",
      "1 Ultrasound machine",
      "1 X-Ray doctor",
      "1 X-Ray technician",
    ],
    patientWelfare: [
      "Electricity bill — PKR 5,000/month",
      "Water cooler",
      "Benches",
      "Patient bed",
      "Washroom facility",
      "Security",
      "Patient appliances",
    ],
    recommendation: {
      from: "Kareem Medical Centre, Lahore",
      date: "12 March 2026",
      to: "Help Line Welfare Trust, Rana Town, Sub Lahore",
      subject: "Establishment of Telemedicine Medical Unit at Shamki Village",
      team: [
        "Dr. Muhammad Asif",
        "Dr. Salahuddin",
        "Mr. Muhammad Tahir",
        "Mr. Muhammad Ameen",
      ],
      locationNotes: [
        "Village approximately 4–5 km off GT Road",
        "Difficult access due to poor roads",
        "Patients face problems reaching city hospitals",
        "Tele-medicine facility would help local residents",
      ],
      additionalNote:
        "Arrangements for patients should be made because the facility is currently non-operational due to lack of rehabilitation.",
    },
    services: [
      "Free doctor consultations and medicines",
      "Tele-medicine with internet, LCD, and operator support",
      "Digital X-ray and ultrasound (as recommended)",
      "Higher medicine budget for greater patient volume",
      "Full patient welfare and rehabilitation support",
    ],
    detailSections: [
      {
        title: "When the road to the hospital is the hardest part",
        paragraphs: [
          "Shamki Village sits roughly 4 to 5 kilometres off GT Road — a distance that sounds short until you travel it on broken roads with a sick child in your arms, or an elderly parent who can barely stand. For these families, the hospital is not unreachable in theory. It is unreachable in practice.",
          "Patients delay care. Conditions worsen. Preventable suffering becomes permanent loss. This is the reality Kareem Medical Centre's team saw when they visited in March 2026 — and why they wrote to Helpline Welfare Trust recommending a tele-medicine medical unit for Shamki Village.",
        ],
      },
      {
        title: "A recommendation born from a site visit",
        paragraphs: [
          "On 12 March 2026, Dr. Muhammad Asif, Dr. Salahuddin, Mr. Muhammad Tahir, and Mr. Muhammad Ameen inspected the infrastructure and discussed establishing a tele-medicine medical unit. Their assessment was clear: the need is urgent, the location is underserved, and tele-medicine can bring specialist-level support where roads fail.",
          "They recommended digital X-ray and ultrasound capability, supported by an X-ray doctor and technician — equipment and expertise that would transform Shamki from a place people leave to seek care into a place where care arrives.",
        ],
      },
      {
        title: "Why Shamki's monthly cost is higher — and why it matters",
        paragraphs: [
          "Medicine alone requires PKR 120,000 monthly — double the other locations — reflecting the volume and severity of need in a community cut off from regular healthcare. Combined with doctor pay, staff, conveyance, and tele-medicine connectivity, the full monthly project cost reaches PKR 308,000.",
          "The facility is currently non-operational due to lack of rehabilitation. Patient arrangements — water, seating, beds, washrooms, security, electricity, and basic appliances — are not luxuries. They are what turns an empty building into a place of healing. Your support reopens that door.",
        ],
      },
    ],
    impactHighlights: [
      "Total monthly project cost: PKR 308,000",
      "Endorsed by Kareem Medical Centre, Lahore (March 2026)",
      "Highest medicine budget — PKR 120,000/month for underserved patients",
      "Tele-medicine plus digital X-ray and ultrasound recommended",
      "Facility awaiting rehabilitation — your support makes it operational",
    ],
    ctaText: "Support Shamki Village Dispensary",
    ctaHref: "/donation",
  },
];

export function getDispensaryProjectBySlug(slug) {
  return dispensaryProjects.find((project) => project.slug === slug) ?? null;
}

export { formatPkr };
