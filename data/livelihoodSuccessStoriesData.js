/**
 * Livelihood success stories — carousel on /livelihood and detail pages at /livelihood/success-stories/[id]
 */

export const LIVELIHOOD_SUCCESS_STORIES = [
  {
    id: "majeed",
    name: "Majeed",
    tagline: "From Struggle to Strength",
    snippet:
      "Born with a disability, Majeed was often seen as limited and dependent. Through Helpline’s livelihood support and skills pathway, he gained tools, training, and dignity—proving that ability is not defined by what others assume.",
    headline: "Story of Majeed: From Struggle to Strength",
    description:
      "Majeed: Rising Beyond Barriers. Every morning, Majeed would wake up not to a day of comfort, but to a quiet battle—one that began the day he was born with a disability. In a world where physical strength often defines survival, he struggled not just with mobility, but with how others saw him: limited and dependent. He never accepted that narrative.",
    image: "/img/Campaigns/Vocational.webp",
    imageAlt: "Vocational skills training supported by Helpline Welfare Trust",
    badge: "Livelihood",
    quoteCite: "— Helpline Livelihood Program",
    seoTitle: "Story of Majeed | Helpline Welfare Trust",
    seoDescription:
      "How Helpline’s livelihood support helped Majeed move from struggle and stigma toward skills, income, and dignity.",
    detailSections: [
      {
        title: "A quiet battle from the start",
        body:
          "In a small home crowded with daily needs, Majeed’s disability shaped how neighbors and even relatives spoke about his future. Errands that others took for granted were exhausting. Work options felt closed before he could prove what he could do. The hardest weight was not only physical—it was the story others wrote for him: that he would always need someone else to carry the load.",
      },
      {
        title: "Support that treated him as capable",
        body:
          "Helpline’s livelihood team met Majeed with practical steps, not pity: skills training suited to his strengths, adaptive tools where needed, and a clear path toward earning. Staff and trainers focused on what he could build—routine, confidence, and a trade—so income could grow alongside self-respect. Small milestones mattered: finishing a session, completing a product, receiving his first payment.",
      },
      {
        title: "Strength that others can see",
        body:
          "Today Majeed’s story is told differently in his community. He contributes to his household, mentors peers who face similar barriers, and shows that disability does not erase ambition. His journey from struggle to strength reminds families that the right support—skills, tools, and belief—can rewrite a life’s direction.",
      },
    ],
    pullQuote:
      "He never accepted the narrative that he was limited and dependent—and with the right support, neither did his future.",
  },
  {
    id: "fatima",
    name: "Fatima",
    tagline: "Stitching a New Future",
    snippet:
      "A young widow from rural Sindh with three children and no income, Fatima learned tailoring through Helpline’s vocational program, received a sewing machine, and built a home-based business that now feeds her family and trains other women.",
    headline: "Story of Fatima: Stitching a New Future",
    description:
      "When Fatima lost her husband, she also lost the household’s only steady wage. In a rural Sindh community with few formal jobs for women, three children depended on her overnight. Vocational training gave her a skill she could practice at home—and a sewing machine that turned that skill into income.",
    image: "/img/Campaigns/sewing-workshop.png",
    imageAlt: "Women learning stitching and embroidery at a Helpline sewing workshop",
    badge: "Livelihood",
    quoteCite: "— Helpline Vocational Training",
    seoTitle: "Story of Fatima | Helpline Welfare Trust",
    seoDescription:
      "How vocational tailoring training and a sewing machine helped widow Fatima build a home business and support her children.",
    detailSections: [
      {
        title: "When the wage stopped",
        body:
          "Fatima had no formal employment history and little savings. Relatives helped when they could, but charity was irregular and dignity was hard to hold. School fees, food, and rent pressed harder each month. She wanted work that fit childcare and community norms—something she could do from home without leaving her children unattended.",
      },
      {
        title: "Training, then tools",
        body:
          "Through Helpline’s vocational training program she learned cutting, stitching, and basic business habits: measuring orders, pricing simple garments, and keeping customers. After completing the course she received a sewing machine—the bridge from practice pieces to paying work. Within months, neighbors brought alterations and school-uniform orders to her door.",
      },
      {
        title: "Earning—and teaching others",
        body:
          "Fatima now earns enough to keep her children in school and food on the table. She also trains other women in her community, turning one household’s recovery into a small network of skilled earners. Her story shows how women’s skills support does more than fill a gap for a week—it rebuilds a family’s footing for years.",
      },
    ],
    pullQuote:
      "Within months she started her own small business from home—and today she trains other women in her community.",
  },
  {
    id: "ahmed",
    name: "Ahmed",
    tagline: "From Farmer to Entrepreneur",
    snippet:
      "A subsistence farmer in Tharparkar, Ahmed adopted climate-smart agriculture with Helpline’s support, diversified his crops, and used a livestock grant to build a poultry business that now employs neighbors and mentors nearby farmers.",
    headline: "Story of Ahmed: From Farmer to Entrepreneur",
    description:
      "Ahmed once grew barely enough to feed his family. Drought risk, thin soil, and limited inputs kept his harvests unpredictable. Climate-smart training, water-efficient techniques, and a small livestock grant helped him turn a fragile farm into a mixed livelihood that others now look to as a model.",
    image: "/img/Campaigns/Food.webp",
    imageAlt: "Food security and agricultural livelihood support from Helpline",
    badge: "Livelihood",
    quoteCite: "— Helpline Livelihood & Food Security",
    seoTitle: "Story of Ahmed | Helpline Welfare Trust",
    seoDescription:
      "How climate-smart farming training and a livestock grant helped Ahmed grow from subsistence farming to a poultry enterprise in Tharparkar.",
    detailSections: [
      {
        title: "Barely enough for one season",
        body:
          "In Tharparkar, Ahmed’s days were shaped by scarce water and thin margins. A poor rainfall year meant empty shelves before the next harvest. He knew the land, but not always the practices that could stretch every drop and diversify risk beyond a single crop. Asking neighbors for help was common—and exhausting for everyone.",
      },
      {
        title: "Training, then a second income stream",
        body:
          "Helpline’s climate-smart agriculture sessions introduced water-efficient methods, crop choices suited to local conditions, and simple planning for lean months. With a small livestock grant he started poultry alongside his fields—turning unused space and daily care routines into eggs and birds he could sell locally. Income no longer depended on one harvest alone.",
      },
      {
        title: "A mentor in his own village",
        body:
          "Ahmed now employs two other villagers and shares what he learned with neighboring farmers. His farm is still hard work, but it is no longer only survival. The shift from subsistence to small enterprise shows how livelihood support—skills plus starter assets—can multiply dignity across a whole community.",
      },
    ],
    pullQuote:
      "He diversified his crops, built a thriving poultry business, and now mentors neighboring farmers.",
  },
];

export function getLivelihoodSuccessStoryById(id) {
  return LIVELIHOOD_SUCCESS_STORIES.find((s) => s.id === id) ?? null;
}

export const LIVELIHOOD_SUCCESS_STORY_IDS = LIVELIHOOD_SUCCESS_STORIES.map(
  (s) => s.id
);
