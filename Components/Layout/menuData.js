export const menuData = [
  { label: "Home", href: "/", dropdown: null },
  {
    label: "Who We Are",
    href: "#",
    dropdown: {
      title: "Who We Are",
      description:
        "The Helpline Welfare Organization is a non-profit dedicated to empowering communities in Pakistan. Since 1997, we've tackled poverty through programs in education, health, economic growth, environment, and social development, helping people build lives of dignity, opportunity, and hope.",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Our Leadership", href: "/organization" },
        { label: "Registration", href: "/registration" },
        { label: "Our Journey", href: "/ourjourney" },
      ],
    },
  },
  {
    label: "What We Do",
    href: "#",
    dropdown: {
      title: "What We Do",
      description:
        "At Helpline, we go beyond aid to create lasting change. Through programs in education, health, economic growth, environment and social development, we empower communities to rise above poverty, ensuring that children learn, families thrive and generations flourish. We believe lasting transformation begins when people are empowered from within.",
      items: [
        { label: "Education & Literacy", href: "/edu" },
        { label: "Primary Healthcare", href: "/health" },
        { label: "Disaster Relief", href: "/disaster" },
        { label: "Social Welfare Development", href: "/social-capital-development" },
        { label: "Sustainability & Endowment", href: "/sustainable-environment-wash" },
      ],
    },
  },
  {
    label: "Our Impact",
    href: "#",
    dropdown: {
      title: "Our Impact",
      description:
        "Founded by Pakistani expatriates in 1997, Helpline set out to empower rural communities in Pakistan. With a vision of every child in school, healthcare for all, clean water and self-sustaining communities, Helpline works to break the cycle of poverty and restore dignity.",
      items: [
        { label: "Our Impact", href: "/our-impact" },
        { label: "Success Stories", href: "/success-stories" },
        { label: "Annual Reports", href: "/annual-reports" },
        { label: "Blogs", href: "/blogs" },
      ],
    },
  },
  {
    label: "Campaign",
    href: "#",
    dropdown: {
      title: "Campaign",
      description:
        "At Helpline, every act of kindness creates a ripple of hope. Your support brings education, healthcare, clean water and opportunities for communities to thrive. By donating, sponsoring, volunteering or partnering, you join a movement transforming lives across Pakistan, turning compassion into action and hope into reality.",
      items: [
        { label: "All Campaigns", href: "/campaigns" },
        { label: "Volunteer", href: "/volunteer" },
        { label: "Images Gallery", href: "/images" },
        { label: "Videos", href: "/videos" },
        { label: "Daily News", href: "/mawakhat-e-Madina" },
        { label: "Zakat Calculator", href: "/zakat" },
      ],
    },
  },
];
