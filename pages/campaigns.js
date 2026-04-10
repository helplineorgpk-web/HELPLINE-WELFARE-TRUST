import React, { useState, useCallback, useMemo, useEffect } from "react";
import Layout1 from "../Components/Layout/Layout1";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import UBLPaymentForm from "../Components/Elements/Payment/UBLPaymentForm";
import styles from "../styles/Campaigns.module.css";

const HERO_VIDEO_URL = "https://www.youtube.com/embed/Zed6wEaHiag";
const MIN_DONATION = 100;

const CATEGORY_FILTERS = [
  { id: "all", label: "All Categories" },
  { id: "education", label: "Education" },
  { id: "sustainability", label: "Sustainability" },
  { id: "social-welfare", label: "Social Welfare" },
  { id: "healthcare", label: "Healthcare" },
  { id: "disaster-relief", label: "Disaster Relief" },
];

export const campaignsData = [
  {
    id: "ramzan-2026",
    title: "Ramadan Food Package 2026",
    href: "/ramzanRashan",
    description:
      "Provide essential food items to families during the blessed month of Ramadan. Help us ensure no family goes hungry.",
    image: "/img/Campaigns/RamadanPackage2.webp",
    details: {
      goal: 2000000,
      raised: 850000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          description: "Essential food supplies for one family",
        },
        {
          name: "Family Package",
          price: 8000,
          description: "Complete Ramadan ration for one family",
        },
      ],
      endDate: "2026-04-15",
    },
    status: "Running",
    featured: true,
    categories: ["social-welfare"],
  },
  {
    id: "rashan-program",
    title: "Rashan Program",
    href: "/rashan",
    description:
      "Provide essential food supplies to struggling families across Pakistan throughout the year.",
    image: "/img/causes/cause25.jpg",
    details: {
      goal: 1500000,
      raised: 650000,
      packages: [
        {
          name: "Monthly Package",
          price: 5000,
          description: "One month food supply for a family",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["social-welfare"],
  },
  {
    id: "support-the-student",
    title: "Support A Student",
    href: "/student-support",
    description:
      "Sponsor students' education, ensuring they don't drop out due to financial constraints.",
    image: "/img/causes/StudentSupportProgram.jpg",
    details: {
      goal: 1000000,
      raised: 450000,
      packages: [
        {
          name: "Monthly Sponsorship",
          price: 2200,
          description: "Support one student for a month",
        },
        {
          name: "Support 5 Students",
          price: 11000,
          description: "Monthly sponsorship for 5 students",
        },
        {
          name: "Support 10 Students",
          price: 22000,
          description: "Monthly sponsorship for 10 students",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "adopt-one-student",
    title: "Adopt One Student",
    href: "/campaigns",
    description:
      "Sponsor one child's education and help secure a brighter future through consistent school support.",
    image: "/img/causes/School-1-scaled.jpg",
    details: {
      goal: 800000,
      raised: 245000,
      packages: [
        {
          name: "1 Student",
          price: 2200,
          description: "Support one student for one month",
        },
        {
          name: "5 Students",
          price: 11000,
          description: "Monthly sponsorship for five students",
        },
        {
          name: "10 Students",
          price: 22000,
          description: "Monthly sponsorship for ten students",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "keep-a-free-school-running",
    title: "Keep a Free School Running",
    href: "/campaigns",
    description:
      "Help us keep tuition-free education active by covering school operations, staff, and student resources.",
    image: "/img/causes/upgraded1.JPG",
    details: {
      goal: 1500000,
      raised: 520000,
      packages: [
        {
          name: "School Operations Support",
          price: 10000,
          description: "Contribute to one month operational costs",
        },
        {
          name: "Classroom Essentials",
          price: 5000,
          description: "Books and stationery for students",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "sponsor-an-orphan-education",
    title: "Sponsor an Orphan",
    href: "/campaigns",
    description:
      "Support orphan children with school fees, supplies, and learning support so they can continue education.",
    image: "/img/causes/womenedu1.jpg",
    details: {
      goal: 1200000,
      raised: 410000,
      packages: [
        {
          name: "Monthly Sponsorship",
          price: 5000,
          description: "Sponsor one orphan student's monthly education",
        },
        {
          name: "Annual Sponsorship",
          price: 15000,
          description: "Full year education sponsorship",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education", "social-welfare"],
  },
  {
    id: "sponsor-one-classroom",
    title: "Sponsor One Classroom",
    href: "/campaigns",
    description:
      "Contribute to building and furnishing a classroom to provide a safe and productive learning space.",
    image: "/img/causes/construction2.jpeg",
    details: {
      goal: 2000000,
      raised: 630000,
      packages: [
        {
          name: "Classroom Contribution",
          price: 25000,
          description: "Support classroom construction and setup",
        },
        {
          name: "Classroom Build Support",
          price: 50000,
          description: "Major contribution to classroom structure",
        },
        {
          name: "Classroom Furnishing",
          price: 100000,
          description: "Fund full furniture and setup",
        },
        {
          name: "Sponsor Multiple Classrooms",
          price: 500000,
          description: "High-impact classroom expansion support",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "build-school-play-area",
    title: "Build School Play Area",
    href: "/campaigns",
    description:
      "Help create a dedicated play area for students to support healthy development and active learning.",
    image: "/img/causes/illiyasschool2.jpg",
    details: {
      goal: 900000,
      raised: 210000,
      packages: [
        {
          name: "Play Area Support",
          price: 10000,
          description: "Contribute to play equipment and safe flooring",
        },
        {
          name: "Play Area Expansion",
          price: 25000,
          description: "Support additional student play facilities",
        },
        {
          name: "Play Equipment Package",
          price: 50000,
          description: "Fund core equipment for school children",
        },
        {
          name: "Complete Play Zone",
          price: 100000,
          description: "Support complete play area development",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "build-new-six-story-alkitab-school",
    title: "Build the New Six-Story Alkitab School",
    href: "/campaigns",
    description:
      "Education Al Kitab capital campaign to build a new six-story school building for students.",
    image: "/img/causes/alkitab4.jpg",
    details: {
      goal: 600000000,
      raised: 50000000,
      packages: [
        {
          name: "Capital Support",
          price: 25000,
          description: "General contribution to construction",
        },
        {
          name: "Construction Support",
          price: 100000,
          description: "Support school structure development",
        },
        {
          name: "Major Build Support",
          price: 500000,
          description: "High-value contribution for civil work",
        },
        {
          name: "Lead Sponsor",
          price: 1000000,
          description: "Premium contribution for school build phase",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "sponsor-one-floor-new-school",
    title: "Sponsor One Floor of the New School",
    href: "/campaigns",
    description:
      "Raise support to sponsor one complete floor in the new Alkitab School building.",
    image: "/img/causes/construction.jpeg",
    details: {
      goal: 100000000,
      raised: 25000000,
      packages: [
        {
          name: "Floor Sponsorship Support",
          price: 500000,
          description: "Contribution toward one school floor",
        },
        {
          name: "Major Floor Donation",
          price: 1000000,
          description: "Support structural completion of a floor",
        },
        {
          name: "Principal Floor Sponsor",
          price: 5000000,
          description: "Large-scale donation toward floor sponsorship",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "support-adopted-government-school",
    title: "Support an Adopted Government School",
    href: "/campaigns",
    description:
      "Give direct support for adopted government schools in interior Sindh for education continuity.",
    image: "/img/causes/masari.jpg",
    details: {
      goal: 2500000,
      raised: 670000,
      packages: [
        {
          name: "Basic School Support",
          price: 5000,
          description: "Core support for school operations",
        },
        {
          name: "Learning Materials Support",
          price: 10000,
          description: "Books and classroom material support",
        },
        {
          name: "School Improvement Support",
          price: 25000,
          description: "Infrastructure and quality uplift support",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "adopt-student-at-alkitab-school",
    title: "Adopt a Student at Alkitab School",
    href: "/campaigns",
    description:
      "Direct student sponsorships for Alkitab School to keep children in classrooms.",
    image: "/img/causes/alkitab2.jpg",
    details: {
      goal: 1200000,
      raised: 360000,
      packages: [
        {
          name: "1 Student",
          price: 2200,
          description: "Monthly sponsorship for one student",
        },
        {
          name: "5 Students",
          price: 11000,
          description: "Monthly sponsorship for five students",
        },
        {
          name: "10 Students",
          price: 22000,
          description: "Monthly sponsorship for ten students",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "adopt-student-at-marawan-school",
    title: "Adopt a Student at Marawan School",
    href: "/campaigns",
    description:
      "Drive direct student sponsorships for Marawan School under student adoption campaign.",
    image: "/img/causes/irtiqa1.jpg",
    details: {
      goal: 1200000,
      raised: 280000,
      packages: [
        {
          name: "1 Student",
          price: 2200,
          description: "Monthly sponsorship for one student",
        },
        {
          name: "5 Students",
          price: 11000,
          description: "Monthly sponsorship for five students",
        },
        {
          name: "10 Students",
          price: 22000,
          description: "Monthly sponsorship for ten students",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "adopt-student-at-umer-kot-school",
    title: "Adopt a Student at Umer Kot School",
    href: "/campaigns",
    description:
      "Drive direct student sponsorships for children enrolled in Umer Kot School.",
    image: "/img/causes/illasschool1.jpg",
    details: {
      goal: 1200000,
      raised: 260000,
      packages: [
        {
          name: "1 Student",
          price: 2200,
          description: "Monthly sponsorship for one student",
        },
        {
          name: "5 Students",
          price: 11000,
          description: "Monthly sponsorship for five students",
        },
        {
          name: "10 Students",
          price: 22000,
          description: "Monthly sponsorship for ten students",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "adopt-student-at-ch-rehmat-ali-school",
    title: "Adopt a Student at Ch Rehmat Ali School",
    href: "/campaigns",
    description:
      "Direct student sponsorships to support education at Ch Rehmat Ali School.",
    image: "/img/causes/chrehmat1.png",
    details: {
      goal: 1200000,
      raised: 240000,
      packages: [
        {
          name: "1 Student",
          price: 2200,
          description: "Monthly sponsorship for one student",
        },
        {
          name: "5 Students",
          price: 11000,
          description: "Monthly sponsorship for five students",
        },
        {
          name: "10 Students",
          price: 22000,
          description: "Monthly sponsorship for ten students",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "adopt-student-at-imran-maryam-school",
    title: "Adopt a Student at Imran Maryam School",
    href: "/campaigns",
    description:
      "Drive direct student sponsorships for Imran Maryam School students.",
    image: "/img/causes/imanmaryam.png",
    details: {
      goal: 1200000,
      raised: 235000,
      packages: [
        {
          name: "1 Student",
          price: 2200,
          description: "Monthly sponsorship for one student",
        },
        {
          name: "5 Students",
          price: 11000,
          description: "Monthly sponsorship for five students",
        },
        {
          name: "10 Students",
          price: 22000,
          description: "Monthly sponsorship for ten students",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "adopt-student-at-imam-maryam-smart-school",
    title: "Adopt a Student at Imam Maryam Smart School",
    href: "/campaigns",
    description:
      "Direct student sponsorships for Imam Maryam Smart School student adoption campaign.",
    image: "/img/causes/smart2.png",
    details: {
      goal: 1200000,
      raised: 210000,
      packages: [
        {
          name: "1 Student",
          price: 2200,
          description: "Monthly sponsorship for one student",
        },
        {
          name: "5 Students",
          price: 11000,
          description: "Monthly sponsorship for five students",
        },
        {
          name: "10 Students",
          price: 22000,
          description: "Monthly sponsorship for ten students",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "adopt-student-at-chaman-goth-school",
    title: "Adopt a Student at Chaman Goth School",
    href: "/campaigns",
    description:
      "Drive direct student sponsorships for Chaman Goth School students.",
    image: "/img/causes/chani22.jpg",
    details: {
      goal: 1200000,
      raised: 220000,
      packages: [
        {
          name: "1 Student",
          price: 2200,
          description: "Monthly sponsorship for one student",
        },
        {
          name: "5 Students",
          price: 11000,
          description: "Monthly sponsorship for five students",
        },
        {
          name: "10 Students",
          price: 22000,
          description: "Monthly sponsorship for ten students",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "adopt-student-at-helpline-operated-school-bhidotki",
    title: "Adopt a Student at Helpline Operated School (Bhidotki)",
    href: "/campaigns",
    description:
      "Direct student sponsorships for Helpline-operated school students in Bhidotki.",
    image: "/img/causes/roruschool.jpg",
    details: {
      goal: 1200000,
      raised: 205000,
      packages: [
        {
          name: "1 Student",
          price: 2200,
          description: "Monthly sponsorship for one student",
        },
        {
          name: "5 Students",
          price: 11000,
          description: "Monthly sponsorship for five students",
        },
        {
          name: "10 Students",
          price: 22000,
          description: "Monthly sponsorship for ten students",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "give-name-in-memory-of-loved-one",
    title: "Give a Name in Memory of a Loved One",
    href: "/campaigns",
    description:
      "Offer donors a naming opportunity to support the new Alkitab School in memory of a loved one.",
    image: "/img/causes/foundition2.png",
    details: {
      goal: 10000000,
      raised: 1750000,
      packages: [
        {
          name: "Naming Contribution",
          price: 500000,
          description: "High-value naming contribution for school support",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education"],
  },
  {
    id: "vocational-training-center",
    title: "Vocational Training Center",
    href: "/vocationalTrainingCenters",
    description:
      "Equip youth with technical skills for sustainable employment and self-reliance.",
    image: "/img/Campaigns/Vocational3.webp",
    details: {
      goal: 1200000,
      raised: 380000,
      packages: [
        {
          name: "Training Sponsorship",
          price: 15000,
          description: "Sponsor one student's complete training",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education", "sustainability"],
  },
  {
    id: "school-masjid-project",
    title: "School Masjid Project",
    href: "/masjid",
    description:
      "Building integrated school and masjid facilities to uplift communities spiritually and educationally.",
    image: "/img/Campaigns/MasjidMaktab2.webp",
    details: {
      goal: 2500000,
      raised: 750000,
      packages: [
        {
          name: "Brick Contribution",
          price: 5000,
          description: "Contribute to construction",
        },
        {
          name: "Room Sponsor",
          price: 100000,
          description: "Sponsor a complete classroom",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
    categories: ["education", "social-welfare"],
  },
  {
    id: "qurbani-2026",
    title: "Qurbani Program 2026",
    href: "/qurbani",
    description:
      "Participate in our Qurbani program to help distribute meat to deserving families during Eid ul Adha.",
    image: "/img/causes/qurbani1.jpg",
    details: {
      goal: 2000000,
      raised: 200000,
      packages: [
        {
          name: "Goat Share",
          price: 25000,
          description: "1/7th share in a collective sacrifice",
        },
        {
          name: "Full Goat",
          price: 175000,
          description: "Complete sacrifice of one goat",
        },
        {
          name: "Cow Share",
          price: 20000,
          description: "1/7th share in a cow",
        },
      ],
      endDate: "2026-06-15",
    },
    status: "Upcoming",
    categories: ["social-welfare"],
  },
  {
    id: "sponsor-womens-skills-training",
    title: "Sponsor a Woman's Skills Training",
    href: "/campaigns",
    description:
      "Women trainee sponsorship — help more women complete employable skills training.",
    image: "/img/causes/cause13.jpg",
    details: {
      goal: 1500000,
      raised: 0,
      packages: [
        {
          name: "Starter support",
          price: 3000,
          description: "Starter support for a woman trainee",
        },
        {
          name: "Training materials",
          price: 5000,
          description: "Training materials for skills programs",
        },
        {
          name: "Trainee support",
          price: 10000,
          description: "Full trainee support tier",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["sustainability"],
    campaignCode: "CAM-SUST-WTRN-012",
    longDescription:
      "Help more women complete employable skills training. Your sponsorship covers materials, continuity, and direct support so trainees can finish programs and move toward stable income.",
    impact: [
      { value: "Sponsor a trainee", label: "Call to action" },
      { value: "PKR 3,000+", label: "Suggested support tiers" },
      { value: "Skills", label: "Employable training focus" },
    ],
  },
  {
    id: "fund-womens-workshop",
    title: "Fund a Women's Workshop",
    href: "/campaigns",
    description:
      "Workshop support and equipment — raise funds for machines, materials, and workshop continuity.",
    image: "/img/programs/computerlab.jpg",
    details: {
      goal: 2000000,
      raised: 0,
      packages: [
        {
          name: "Materials support",
          price: 5000,
          description: "Materials support for women's workshops",
        },
        {
          name: "Machine support",
          price: 10000,
          description: "Machine and equipment support",
        },
        {
          name: "Workshop support",
          price: 25000,
          description: "Broader workshop continuity support",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["sustainability"],
    campaignCode: "CAM-SUST-WWS-013",
    longDescription:
      "Raise funds for machines, materials, and workshop continuity so women can keep learning in a safe, equipped space. Donations help sustain operations and replace or repair essential equipment.",
    impact: [
      { value: "Fund a workshop", label: "Call to action" },
      { value: "PKR 5,000+", label: "Materials to full support" },
      { value: "Continuity", label: "Workshop operations" },
    ],
  },
  {
    id: "sponsor-chicken-box",
    title: "Sponsor a Chicken Box",
    href: "/campaigns",
    description:
      "Livelihood and chicken box campaign — help families move toward self-sufficiency through small livestock support.",
    image: "/img/Campaigns/Food.webp",
    details: {
      goal: 1500000,
      raised: 0,
      packages: [
        {
          name: "Starter support",
          price: 3000,
          description: "Starter support for a chicken box",
        },
        {
          name: "Family support",
          price: 10000,
          description: "Expanded family livelihood support",
        },
        {
          name: "Bigger support",
          price: 25000,
          description: "Larger livelihood package",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["sustainability"],
    campaignCode: "CAM-SUST-CHICK-016",
    longDescription:
      "Help families move toward self-sufficiency through small livestock support. A chicken box provides a practical starting point for income and nutrition while building longer-term resilience.",
    impact: [
      { value: "Sponsor a chicken box", label: "Call to action" },
      { value: "PKR 3,000+", label: "Starter to expanded support" },
      { value: "Livelihood", label: "Small livestock pathway" },
    ],
  },
  {
    id: "give-zakat-highest-need",
    title: "Give Zakat Where It Is Needed Most",
    href: "/campaigns",
    description:
      "Flexible Zakat — let donors give Zakat toward urgent eligible needs across programs.",
    image: "/img/causes/RashanPackage.jpg",
    details: {
      goal: 3000000,
      raised: 0,
      packages: [
        {
          name: "Starter gift",
          price: 2500,
          description: "Starter Zakat contribution",
        },
        {
          name: "Zakat support",
          price: 5000,
          description: "Mid-tier Zakat gift",
        },
        {
          name: "Zakat contribution",
          price: 10000,
          description: "Larger Zakat allocation",
        },
        {
          name: "Major Zakat",
          price: 25000,
          description: "High-impact Zakat tier",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["social-welfare"],
    campaignCode: "CAM-SW-ZAKAT-023",
    longDescription:
      "Pool Zakat where need is greatest among eligible recipients, with suggested amounts and a custom field for any lawful amount. Best paired with clear eligibility messaging and distribution oversight.",
    impact: [
      { value: "Pay Zakat now", label: "Call to action" },
      { value: "PKR 2,500+", label: "Suggested Zakat tiers" },
      { value: "Highest need", label: "Flexible urgent deployment" },
    ],
  },
  {
    id: "install-ro-filter-plant",
    title: "Install a New RO Filter Plant",
    href: "/campaigns",
    description:
      "New RO plant — raise funds to install a new RO filter plant in a water-scarcity area (~PKR 1,000,000 per plant).",
    image: "/img/causes/blochistanwater.jpg",
    details: {
      goal: 1000000,
      raised: 0,
      packages: [
        {
          name: "Plant support",
          price: 25000,
          description: "Contribution toward new RO installation",
        },
        {
          name: "Plant build support",
          price: 50000,
          description: "Mid-tier plant funding",
        },
        {
          name: "Major plant support",
          price: 100000,
          description: "Strong push toward plant completion",
        },
        {
          name: "Lead plant support",
          price: 250000,
          description: "Large contribution toward one plant",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["social-welfare"],
    campaignCode: "CAM-SW-WATER-024",
    longDescription:
      "Fund installation of a new reverse-osmosis plant where clean water is scarce. Approximate full plant cost is around one million PKR; tiered gifts help reach that target while allowing many donors to participate.",
    impact: [
      { value: "Donate for a new RO plant", label: "Call to action" },
      { value: "~PKR 1M", label: "Approx. per plant" },
      { value: "Water-scarce areas", label: "New installation focus" },
    ],
  },
  {
    id: "support-existing-ro-plant",
    title: "Keep an Existing RO Plant Running",
    href: "/campaigns",
    description:
      "RO plant running costs — monthly support for maintenance and electricity (~PKR 150,000 / month).",
    image: "/img/water/IMG_20201101_124923.jpg",
    details: {
      goal: 150000,
      raised: 0,
      packages: [
        {
          name: "Monthly support",
          price: 5000,
          description: "Toward maintenance and utilities",
        },
        {
          name: "Operations support",
          price: 10000,
          description: "Stronger monthly operations gift",
        },
        {
          name: "Plant upkeep",
          price: 25000,
          description: "Major monthly upkeep contribution",
        },
        {
          name: "Sustainer support",
          price: 50000,
          description: "Large monthly running-cost support",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["social-welfare"],
    campaignCode: "CAM-SW-WATER-025",
    longDescription:
      "Existing RO plants need steady funds for filters, repairs, and electricity. This campaign frames ~PKR 150,000 per month as a running-cost target donors can chip away at through recurring or one-time gifts.",
    impact: [
      { value: "Support an RO plant", label: "Call to action" },
      { value: "~PKR 150k/mo", label: "Running cost target" },
      { value: "Maintenance", label: "Keep plants operational" },
    ],
  },
  {
    id: "fund-kmc-essential-medicines",
    title: "Fund Essential Medicines at KMC",
    href: "/campaigns",
    description:
      "Hospital medicines fund — flexible support for free medicines at KMC for patients who cannot afford them.",
    image: "/img/causes/freemedical.jpg",
    details: {
      goal: 2000000,
      raised: 0,
      packages: [
        {
          name: "Starter support",
          price: 2500,
          description: "Starter medicines support",
        },
        {
          name: "Medicine support",
          price: 5000,
          description: "Medicine purchase support",
        },
        {
          name: "Patient support",
          price: 10000,
          description: "Broader patient medicine support",
        },
        {
          name: "Major medicine support",
          price: 50000,
          description: "High-impact medicines contribution",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["healthcare"],
    campaignCode: "CAM-HC-MEDS-026",
    longDescription:
      "Raise flexible support for essential free medicines at KMC so deserving patients receive prescriptions without financial barriers. Works well alongside recurring monthly medicine drives as costs are finalized.",
    impact: [
      { value: "Donate for medicines", label: "Call to action" },
      { value: "PKR 2,500+", label: "Flexible gift tiers" },
      { value: "KMC", label: "Hospital medicines focus" },
    ],
  },
  {
    id: "support-kmc-patient-care",
    title: "Support Patient Care at KMC",
    href: "/campaigns",
    description:
      "Hospital patient care — support free checkups and clinic-day care for patients at KMC.",
    image: "/img/causes/karbathhospital.JPG",
    details: {
      goal: 2000000,
      raised: 0,
      packages: [
        {
          name: "Starter support",
          price: 2500,
          description: "Starter patient care support",
        },
        {
          name: "Care support",
          price: 5000,
          description: "Direct care support",
        },
        {
          name: "Clinic support",
          price: 10000,
          description: "Clinic-day and consultation support",
        },
        {
          name: "Major clinic support",
          price: 25000,
          description: "Major contribution to patient care",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["healthcare"],
    campaignCode: "CAM-HC-CARE-027",
    longDescription:
      "Raise flexible support for free checkups and clinic-day care so more patients can access dignified outpatient services. Complements medicines and other KMC giving options.",
    impact: [
      { value: "Support patient care", label: "Call to action" },
      { value: "PKR 2,500+", label: "Care & clinic tiers" },
      { value: "KMC", label: "Checkups & clinic days" },
    ],
  },
  {
    id: "mithi-mobile-dispensary-ambulance",
    title: "Upgrade the Mithi Mobile Dispensary to an Ambulance",
    href: "/campaigns",
    description:
      "Capital campaign — raise PKR 13 million to upgrade the Mithi mobile dispensary into a fully equipped ambulance.",
    image: "/img/causes/mithimedicalcamp1.jpg",
    details: {
      goal: 13000000,
      raised: 0,
      packages: [
        {
          name: "Support gift",
          price: 25000,
          description: "Contribution toward ambulance upgrade",
        },
        {
          name: "Bigger gift",
          price: 50000,
          description: "Stronger capital support",
        },
        {
          name: "Major gift",
          price: 100000,
          description: "Major gift toward vehicle & equipment",
        },
        {
          name: "Lead gift",
          price: 250000,
          description: "Leadership-level capital support",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["healthcare"],
    campaignCode: "CAM-HC-AMB-028",
    longDescription:
      "Fund the capital requirement to upgrade the Mithi mobile dispensary into an ambulance so emergency and outreach care can reach remote communities safely. Campaign goal reflects the approximate PKR 13 million upgrade target.",
    impact: [
      { value: "Support the ambulance upgrade", label: "Call to action" },
      { value: "PKR 13M", label: "Capital goal (approx.)" },
      { value: "Mithi", label: "Mobile care upgrade" },
    ],
  },
  {
    id: "restore-sight-cataract-surgery",
    title: "Restore Sight Through Cataract Surgery",
    href: "/campaigns",
    description:
      "Cataract surgery campaign — sponsor sight-restoring operations including lens (PKR 13,000 per operation).",
    image: "/img/Campaigns/Medical.webp",
    details: {
      goal: 2000000,
      raised: 0,
      packages: [
        {
          name: "1 surgery",
          price: 13000,
          description: "One cataract operation including lens",
        },
        {
          name: "2 surgeries",
          price: 26000,
          description: "Two cataract operations including lens",
        },
        {
          name: "5 surgeries",
          price: 65000,
          description: "Five cataract operations including lens",
        },
        {
          name: "10 surgeries",
          price: 130000,
          description: "Ten cataract operations including lens",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["healthcare"],
    campaignCode: "CAM-HC-CAT-029",
    longDescription:
      "Raise funds for sight-restoring cataract surgeries for deserving patients, priced at approximately PKR 13,000 per operation including lens. Scale impact by sponsoring one or multiple procedures.",
    impact: [
      { value: "Sponsor a cataract operation", label: "Call to action" },
      { value: "PKR 13,000", label: "Per operation (incl. lens)" },
      { value: "Sight restoration", label: "Deserving patients" },
    ],
  },
  {
    id: "emergency-response-fund",
    title: "Emergency Response Fund",
    href: "/campaigns",
    description:
      "Rapid response — raise fast, flexible emergency funds for rescue and relief when crises hit.",
    image: "/img/causes/disasterbg.jpg",
    details: {
      goal: 3000000,
      raised: 0,
      packages: [
        {
          name: "Starter gift",
          price: 5000,
          description: "Starter emergency response support",
        },
        {
          name: "Family relief",
          price: 10000,
          description: "Family-level relief contribution",
        },
        {
          name: "Bigger relief",
          price: 25000,
          description: "Stronger response support",
        },
        {
          name: "Major relief",
          price: 100000,
          description: "Major emergency response gift",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["disaster-relief"],
    campaignCode: "CAM-DR-RESP-032",
    longDescription:
      "Keep a ready pool of funds for rescue and first-line relief—food, shelter material, transport, and coordination—when disasters strike. Flexible gifts help teams move quickly before larger appeals launch.",
    impact: [
      { value: "Donate for emergency response", label: "Call to action" },
      { value: "PKR 5,000+", label: "Flexible relief tiers" },
      { value: "Rapid", label: "Rescue & relief focus" },
    ],
  },
  {
    id: "donate-calamity-management-program",
    title: "Donate for Calamity Management Program",
    href: "/flood-relief",
    description:
      "Calamity management — preparedness, relief, rehabilitation, and recovery for natural or human-made disasters.",
    image: "/img/causes/houseconstruction4.jpeg",
    details: {
      goal: 5000000,
      raised: 0,
      packages: [
        {
          name: "Emergency supplies",
          price: 5000,
          description: "Emergency supplies and kit support",
        },
        {
          name: "Family relief",
          price: 10000,
          description: "Family relief support",
        },
        {
          name: "Response support",
          price: 25000,
          description: "Broader response and field support",
        },
        {
          name: "Major support",
          price: 100000,
          description: "Major calamity program support",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["disaster-relief"],
    campaignCode: "CAM-DR-REHAB-033",
    longDescription:
      "Support the full cycle of calamity work: preparedness, immediate relief, rehabilitation, and longer recovery—not only floods but earthquakes and other shocks. This program replaces a single flood-only framing with one durable disaster pipeline.",
    impact: [
      { value: "Donate for calamity management", label: "Call to action" },
      { value: "PKR 5,000+", label: "Relief to recovery" },
      { value: "Full cycle", label: "Preparedness & rehab" },
    ],
  },
  {
    id: "sponsor-safe-home-disaster-family",
    title: "Sponsor a Safe Home for a Disaster-Hit Family",
    href: "/campaigns",
    description:
      "Safe housing — support safer rebuilding for families after disasters, backed by Helpline’s shelter track record.",
    image: "/img/causes/houseconstruction1.jpeg",
    details: {
      goal: 4000000,
      raised: 0,
      packages: [
        {
          name: "Starter support",
          price: 25000,
          description: "Starter housing recovery support",
        },
        {
          name: "Housing support",
          price: 50000,
          description: "Stronger safe-home contribution",
        },
        {
          name: "Major housing support",
          price: 100000,
          description: "Major gift toward safer housing",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Upcoming",
    categories: ["disaster-relief"],
    campaignCode: "CAM-DR-HOME-034",
    longDescription:
      "Raise support for future safe housing and proof-of-impact rebuilding after disasters. Donors sponsor dignified, safer shelter aligned with field assessments and Helpline’s housing experience.",
    impact: [
      { value: "Sponsor safer housing", label: "Call to action" },
      { value: "PKR 25,000+", label: "Housing gift tiers" },
      { value: "Rebuild", label: "Disaster-hit families" },
    ],
  },
];

function getPresetAmounts(campaign) {
  const fromPackages = (campaign.details?.packages || []).map((p) => p.price);
  const unique = [...new Set(fromPackages)].sort((a, b) => a - b);
  const extra = [1000, 2500].filter((n) => !unique.includes(n));
  return [...extra, ...unique].slice(0, 6);
}

function formatPkr(value) {
  return new Intl.NumberFormat("en-PK").format(value);
}

/** ISO date only (YYYY-MM-DD); avoid toLocaleDateString — server vs browser locale breaks hydration. */
function formatCampaignEndDate(isoDate) {
  if (!isoDate || typeof isoDate !== "string") return "";
  const parts = isoDate.trim().split("-");
  if (parts.length !== 3) return isoDate;
  const [y, mo, da] = parts;
  const month = Number(mo);
  const day = Number(da);
  if (!y || Number.isNaN(month) || Number.isNaN(day)) return isoDate;
  return `${month}/${day}/${y}`;
}

function campaignMatchesCategory(campaign, categoryId) {
  const cats = campaign.categories || [];
  return cats.includes(categoryId);
}

export default function Campaigns({ campaigns = campaignsData }) {
  const [cardState, setCardState] = useState({});
  const [paymentCampaign, setPaymentCampaign] = useState(null);
  const [donationErrorId, setDonationErrorId] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [listingHydrated, setListingHydrated] = useState(false);

  useEffect(() => {
    setListingHydrated(true);
  }, []);

  const filteredCampaigns = useMemo(() => {
    if (!activeCategoryId || activeCategoryId === "all") return campaigns;
    return campaigns.filter((c) => campaignMatchesCategory(c, activeCategoryId));
  }, [campaigns, activeCategoryId]);

  const selectCategoryFilter = useCallback((id) => {
    setActiveCategoryId(id);
  }, []);

  const getAmount = useCallback(
    (id) => cardState[id]?.amount ?? "",
    [cardState]
  );
  const setAmount = useCallback((id, value) => {
    setCardState((s) => ({ ...s, [id]: { ...s[id], amount: value } }));
    setDonationErrorId((prev) => (prev === id ? null : prev));
  }, []);

  const openPaymentModal = useCallback(
    (campaign) => {
      const amt = getAmount(campaign.id);
      const num = parseInt(amt, 10);
      if (!amt || isNaN(num) || num < MIN_DONATION) {
        setDonationErrorId(campaign.id);
        return;
      }
      setDonationErrorId(null);
      setPaymentCampaign(campaign);
    },
    [getAmount]
  );

  const closePaymentModal = useCallback(() => {
    setPaymentCampaign(null);
  }, []);

  return (
    <Layout1>
      {/* Hero banner with YouTube video */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>HELPLINE WELFARE TRUST</p>
            <h1 className={styles.heroTitle}>OUR CAMPAIGNS</h1>
            <p className={styles.heroSubtitle}>
              Explore active Helpline drives—from food relief and Ramadan
              packages to education, healthcare, and vocational training. Your
              donation funds transparent, community-led programs across Pakistan.
            </p>
            <div className={styles.heroCta}>
              <Link href="/ramzanRashan" className={styles.heroBtnPrimary}>
                DONATE NOW
              </Link>
              <Link href="/campaigns#featured" className={styles.heroBtnSecondary}>
                BECOME A FUNDRAISER
              </Link>
            </div>
          </div>
          <div className={styles.heroVideoWrap}>
            <div className={styles.heroVideoInner}>
              <iframe
                src={HERO_VIDEO_URL}
                title="Helpline campaigns and field impact"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.heroVideoIframe}
              />
              <p className={styles.heroVideoTitle}>Helpline campaigns and impact</p>
            </div>
          </div>
        </div>
      </section>

      <div
        id="featured"
        className={styles.listingBackdrop}
        suppressHydrationWarning
      >
        <Container className={`py-5 ${styles.listingContainer}`}>
          {!listingHydrated ? (
            <div className={styles.listingHydrationShell} aria-hidden>
              <div className={styles.listingHydrationTitle} />
              <div className={styles.listingHydrationPills} />
              <div className={styles.listingHydrationCards} />
            </div>
          ) : (
            <>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Campaigns</h2>
            <p className={styles.sectionSubtitle}>
              Your Generosity Changes Lives.
            </p>
          </div>

          <div className={styles.filterPanel}>
            <p className={styles.filterPanelEyebrow}>Find your cause</p>
            <div className={styles.filterScroll}>
              <div
                className={styles.filterBar}
                role="group"
                aria-label="Filter campaigns by category"
              >
                {CATEGORY_FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={
                      activeCategoryId === f.id
                        ? `${styles.filterBtn} ${styles.filterBtnActive}`
                        : styles.filterBtn
                    }
                    aria-pressed={activeCategoryId === f.id}
                    onClick={() => selectCategoryFilter(f.id)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
            {activeCategoryId && activeCategoryId !== "all" ? (
              <p className={styles.filterHint}>
                <span className={styles.filterHintBadge}>
                  {filteredCampaigns.length}{" "}
                  {filteredCampaigns.length === 1 ? "campaign" : "campaigns"}
                </span>
                <span className={styles.filterHintText}>
                  in{" "}
                  <strong>
                    {
                      CATEGORY_FILTERS.find((x) => x.id === activeCategoryId)
                        ?.label
                    }
                  </strong>
                  <button
                    type="button"
                    className={styles.filterClearLink}
                    onClick={() => setActiveCategoryId("all")}
                  >
                    All categories
                  </button>
                </span>
              </p>
            ) : (
              <p className={styles.filterAllHint}>
                Tap a category to narrow the list, or browse everything below.
              </p>
            )}
          </div>

          <Row className="g-4 g-lg-5">
          {filteredCampaigns.length === 0 ? (
            <Col xs={12}>
              <div className={styles.filterEmpty}>
                <div className={styles.filterEmptyVisual} aria-hidden />
                <p className={styles.filterEmptyTitle}>Nothing here yet</p>
                <p className={styles.filterEmptyText}>
                  There are no campaigns in this category right now. Pick another
                  cause above or show all campaigns.
                </p>
                <button
                  type="button"
                  className={styles.filterEmptyBtn}
                  onClick={() => setActiveCategoryId("all")}
                >
                  View all campaigns
                </button>
              </div>
            </Col>
          ) : null}
          {filteredCampaigns.map((campaign, index) => {
            const presets = getPresetAmounts(campaign);
            const amount = getAmount(campaign.id);
            const detailHref = `/campaign/${campaign.id}`;
            const showDonationError = donationErrorId === campaign.id;
            const isCampaignWebp = campaign.image.startsWith("/img/Campaigns/") && campaign.image.endsWith(".webp");
            const isPriorityImage = isCampaignWebp || campaign.featured || index < 2;
            const isEagerImage = isCampaignWebp || index < 4;

            return (
              <Col key={campaign.id} lg={4} md={6} sm={12} className="mb-4 mb-lg-5">
                <Card
                  className={`h-100 ${styles.campaignCard} ${campaign.featured ? styles.campaignCardFeatured : ""}`}
                >
                  <div className={styles.imageWrapper}>
                    {campaign.featured ? (
                      <span className={styles.featuredRibbon}>Featured</span>
                    ) : null}
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      priority={isPriorityImage}
                      loading={isEagerImage ? "eager" : "lazy"}
                      fetchPriority={isPriorityImage ? "high" : "auto"}
                      quality={75}
                      decoding="async"
                      sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                      className={styles.image}
                    />
                    <div className={styles.imageGradient} aria-hidden />
                  </div>
                  <Card.Body>
                    {campaign.categories?.length ? (
                      <div className={styles.cardCatRow}>
                        {campaign.categories.map((catId) => {
                          const label = CATEGORY_FILTERS.find(
                            (f) => f.id === catId
                          )?.label;
                          if (!label) return null;
                          return (
                            <span key={catId} className={styles.cardCatChip}>
                              {label}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                    <Card.Title className={styles.cardTitle}>
                      {campaign.title}
                    </Card.Title>
                    <Card.Text className={styles.cardDescription}>
                      {campaign.description}
                    </Card.Text>
                    <div className="mb-3">
                      <div className={styles.progress}>
                        <div
                          className={styles.progressBar}
                          role="progressbar"
                          style={{
                            width: `${
                              (campaign.details.raised /
                                campaign.details.goal) *
                              100
                            }%`,
                          }}
                          aria-valuenow={
                            (campaign.details.raised /
                              campaign.details.goal) *
                            100
                          }
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <div className={styles.statsContainer}>
                        <small className="text-muted">
                          Raised: Rs.{formatPkr(campaign.details.raised)}
                        </small>
                        <small className="text-muted">
                          Goal: Rs.{formatPkr(campaign.details.goal)}
                        </small>
                      </div>
                    </div>

                    {/* In-card payment options */}
                    <div className={styles.paymentSection}>
                      <p className={styles.paymentLabel}>Amount (PKR)</p>
                      <div className={styles.presetButtons}>
                        {presets.map((p) => (
                          <button
                            key={p}
                            type="button"
                            className={`${styles.presetBtn} ${amount === String(p) ? styles.presetBtnActive : ""}`}
                            onClick={() => setAmount(campaign.id, String(p))}
                          >
                            Rs.{formatPkr(p)}
                          </button>
                        ))}
                      </div>
                      <input
                        type="text"
                        placeholder="Other amount"
                        className={styles.amountInput}
                        value={
                          amount && !presets.includes(Number(amount))
                            ? amount
                            : ""
                        }
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, "");
                          setAmount(campaign.id, v);
                        }}
                      />
                    </div>

                    {showDonationError && (
                      <p className={styles.donationError}>
                        Please select or enter amount (min Rs.{formatPkr(MIN_DONATION)}).
                      </p>
                    )}

                    <div className={styles.cardActions}>
                      <Link
                        href={detailHref}
                        className={`btn ${styles.detailButton}`}
                      >
                        Campaign Detail
                      </Link>
                      <button
                        type="button"
                        className={`btn ${styles.actionButton}`}
                        onClick={() => openPaymentModal(campaign)}
                      >
                        DONATE NOW
                      </button>
                    </div>
                  </Card.Body>
                  <Card.Footer className={styles.cardFooter}>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        {campaign.status === "Running"
                          ? "Running"
                          : campaign.status === "Upcoming"
                            ? "Upcoming"
                            : "Ended"}{" "}
                        {formatCampaignEndDate(campaign.details.endDate)}
                      </small>
                      <span
                        className={`${styles.badge} ${
                          campaign.status === "Upcoming"
                            ? styles.badgeUpcoming
                            : styles.badgeActive
                        }`}
                      >
                        {campaign.status}
                      </span>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
          </Row>
            </>
          )}
        </Container>
      </div>

      {paymentCampaign && (
        <div
          className={styles.paymentModal}
          onClick={(e) =>
            e.target === e.currentTarget && closePaymentModal()
          }
        >
          <div className={styles.paymentModalContent}>
            <button
              type="button"
              className={styles.paymentModalClose}
              onClick={closePaymentModal}
              aria-label="Close"
            >
              &times;
            </button>
            <UBLPaymentForm
              donationAmount={parseInt(getAmount(paymentCampaign.id), 10) || 0}
              donationType={paymentCampaign.title}
              onPaymentCompleted={closePaymentModal}
              onPaymentFailed={() => {}}
            />
          </div>
        </div>
      )}
    </Layout1>
  );
}

export async function getStaticProps() {
  return {
    props: {
      campaigns: campaignsData,
    },
    revalidate: 3600,
  };
}
