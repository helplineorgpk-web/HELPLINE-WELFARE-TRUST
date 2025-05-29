export const campaigns = [
  {
    id: 1,
    category: "Education",
    title: "Al-Kitab School System",
    shortDescription: "Providing quality education to underprivileged children",
    longDescription: `The Al-Kitab School System is our flagship educational initiative aimed at providing quality education to underprivileged children across Pakistan. Our comprehensive approach includes:

    • Modern curriculum aligned with international standards
    • Qualified and trained teaching staff
    • Well-equipped classrooms and laboratories
    • Extra-curricular activities for holistic development
    • Free books and educational materials
    • Nutritious meals for students
    • Regular parent-teacher meetings`,
    images: [
      "/img/campaigns/education1.jpg",
      "/img/campaigns/education2.jpg",
      "/img/campaigns/education3.jpg"
    ],
    stats: {
      beneficiaries: "5000+ students",
      locations: ["Karachi", "Lahore", "Islamabad"],
      fundingGoal: "PKR 50 Million",
      raised: "PKR 30 Million",
      donors: 1200,
      daysLeft: 45
    },
    keyFeatures: [
      "Quality Education",
      "Modern Facilities",
      "Skilled Teachers",
      "Digital Learning",
      "Sports Activities"
    ],
    impact: [
      {
        metric: "Literacy Rate Improvement",
        value: "85%"
      },
      {
        metric: "Student Retention",
        value: "95%"
      },
      {
        metric: "Graduate Success Rate",
        value: "78%"
      }
    ],
    status: "Active"
  },
  {
    id: 2,
    category: "Healthcare",
    title: "Mobile Medical Camps",
    shortDescription: "Bringing healthcare services to remote areas",
    longDescription: `Our Mobile Medical Camps initiative is designed to reach communities with limited access to healthcare facilities. This program features:

    • Free medical consultations
    • Basic diagnostic services
    • Medicine distribution
    • Health awareness sessions
    • Vaccination drives
    • Women's health services
    • Child healthcare`,
    images: [
      "/img/campaigns/health1.jpg",
      "/img/campaigns/health2.jpg",
      "/img/campaigns/health3.jpg"
    ],
    stats: {
      beneficiaries: "10000+ patients",
      locations: ["Rural Punjab", "Interior Sindh", "KPK"],
      fundingGoal: "PKR 25 Million",
      raised: "PKR 15 Million",
      donors: 800,
      daysLeft: 30
    },
    keyFeatures: [
      "Free Consultations",
      "Medicine Distribution",
      "Diagnostic Services",
      "Health Education",
      "Follow-up Care"
    ],
    impact: [
      {
        metric: "Patients Treated",
        value: "10,000+"
      },
      {
        metric: "Villages Covered",
        value: "150+"
      },
      {
        metric: "Disease Prevention Rate",
        value: "65%"
      }
    ],
    status: "Active"
  }
];
