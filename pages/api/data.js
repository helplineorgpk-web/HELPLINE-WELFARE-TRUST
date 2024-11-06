import Image from "next/image";
export const HelplineData = {
  statsData: [
    { id: 1, title: "Hospitals", target: 2 },
    { id: 2, title: "Mobile Dispensary", target: 1 },
    { id: 3, title: "Free Meal Service", target: 3 },
    { id: 4, title: "Ambulance", target: 1 },
    { id: 5, title: "Rehabilitation Hospitals", target: 2 },
    { id: 6, title: "Beneficiaries", target: 939129 },
    { id: 7, title: "Million / Year Expenditure", target: 2 },
  ],
  donationItems: [
    { id: 1, icon: "🚑", title: "Ambulance", amount: "PKR 2.8 Million" },
    { id: 2, icon: "🏥", title: "Hospital", amount: "PKR 500 Million" },
    { id: 3, icon: "🏬", title: "Poly Clinics", amount: "PKR 25 Million" },
    {
      id: 4,
      icon: "🩺",
      title: "Mega Diagnostic Centers",
      amount: "PKR 35 Million",
    },
    { id: 5, icon: "💉", title: "Blood Banks", amount: "PKR 25 Million" },
    { id: 6, icon: "🩹", title: "Medical Camps", amount: "PKR 70,000" },
  ],
  educationContent: {
    title: "HELPLINE EDUCATION",
    supportButtonText: "SUPPORTING APPEAL",
    videoSrc: "https://www.youtube.com/embed/your_video_id",
    heading: "Helpline Education System",
    description: `
      Being a developing country, Pakistan has suffered the most from
      different turmoil and plunged further deep in the fields of
      education and advancement. Approximately 25 million children are
      illiterate and the rest mostly are being imparted directionless
      education. Economical development, unless coupled with social
      development, cannot achieve desired progress in society. Helpline
      firmly believes that education is the most important means to
      achieve economic as well as social development. It is, therefore,
      actively engaged in providing quality education to underprivileged
      children in remote areas of Punjab and Sindh. The Helpline is
      running a system of 15 government schools along with 6 own schools
      across the country benefiting about 6000 students. Free education,
      daily lunch, Free Bags and free shoes are provided to the children in
      these schools. Apart from this, Technical Education Centers have
      been set up within the schools where women can learn sewing and
      embroidery for free. The total annual cost of this helpline
      educational project is Rs 54,697,938/-.
    `,
  },
  HelplineHealthData: {
    title: "HELPLINE HEALTH",
    supportButtonText: "SUPPORTING APPEAL",
    videoSrc: "https://www.youtube.com/embed/your_video_id",
    heading: "Helpline Health Projects",
    description: `
      Pakistan has been listed by the World Health Organization (WHO) as
      one of 57 nations facing a severe shortage of health workers, and
      the country ranks 122nd globally in terms of the quality of its
      healthcare services. Tragically, Pakistan also has one of the
      highest rates of infant mortality in the world.
  
      Helpline Social Welfare Foundation has established a nationwide
      network to ensure that people, regardless of their socio-economic
      status, have access to top-quality healthcare. This includes
      numerous hospitals, clinics, dispensaries, diagnostic centres, and
      blood banks, as well as mobile medical camps and ambulances.
      Notably, the foundation has implemented successful initiatives in
      remote and underdeveloped regions like Tharparkar in Sindh and
      Quetta in Balochistan.
  
      The foundation’s efforts have proven particularly beneficial
      in underdeveloped areas like Tharparkar in Sindh and Quetta in
      Balochistan. These regions, which have traditionally been deprived
      of healthcare facilities, have benefited significantly from the
      foundation’s healthcare initiatives. By ensuring that people in
      remote and impoverished areas receive quality healthcare, the
      foundation has made a significant contribution towards improving the
      overall health of the nation and reducing the disparities between
      different segments of society.
    `,
  },
  allOverPakistanStats: [
    { id: 1, title: "Beneficiaries", target: 256202 },
    { id: 2, title: "Donors", target: 587 },
    { id: 3, title: "Supporters", target: 1256 },
    { id: 4, title: "Volunteers", target: 10480 },
    { id: 5, title: "Reformers", target: 98 },
    { id: 6, title: "Offices", target: 7 },
  ],
  slidesData: [
    {
      image: "/img/causes/cause1.jpg",
      percentage: "65",
      label: "Fundraiser",
      description:
        "Become our Fundraiser, we just want to help those ones who need our help. Kindly help us to arrange necessary things for needy ones.",
      link: "/cause-details",
      Color: "pbar_1",
      bgColor: "rgb(95, 179, 91, 0.8), rgb(241, 91, 67, 0.8)",
    },
    {
      image: "/img/causes/cause17.jpg",
      percentage: "80",
      label: "Attend Event",
      description:
        "Be a volunteer to help us to arrange the event. And can join us on any event which will be arranged by HELPLINE.",
      link: "/cause-details",
      Color: "pbar_2",
      bgColor: "rgb(241, 91, 67, 0.8), rgba(101, 202, 187, 0.8)",
    },
    {
      image: "/img/causes/cause3.jpg",
      percentage: "50",
      label: "Donor",
      description:
        "Help us, we need your support because your little support for our good deeds will return to you and you will be amazed to donate.",
      link: "/cause-details",
      Color: "pbar_3",
      bgColor: "rgba(101, 202, 187, 0.8), rgb(95, 179, 91, 0.8)",
    },
  ],
  donationMethods: [
    {
      title: "Direct Deposit",
      description:
        "Direct deposits or transfers can be made into our accounts at any of the banks.",
      buttonLabel: "Bank Details",
      buttonType: "bankButton",
    },
    {
      title: "Cash Pickup",
      description:
        "To pick-up donations from your doorstep, simply call us at the given number, and we'll collect it.",
      buttonLabel: "0321 4388352",
      buttonType: "callButton",
    },
    {
      title: "Donate Online",
      description:
        "You can donate online using any Visa or MasterCard anywhere from the World.",
      buttonLabel: "Donate Now",
      buttonType: "donateButton",
    },
  ],
  HelplineCriteriaData: [
    {
      id: 1,
      icon: "📝",
      description: "Accepts application from deserving families",
    },
    {
      id: 2,
      icon: "🔍",
      description: "Our team investigates the applicant",
    },
    {
      id: 3,
      icon: "🤝",
      description:
        "Provides them immediate help in terms of cash or in services",
    },
    {
      id: 4,
      icon: "💵",
      description: "Rehabilitates them by providing a financial opportunity",
    },
  ],
  causes: [
    {
      id: 1,
      category: ["Water"],
      img: (
        <Image
          src="/img/causes/cause1.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "63",
      desc: "CLEAN WATER PROJECT IN KPK",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2025-12-27 00:00:00",
      color: "#5fb35b",
    },
    {
      id: 2,
      category: ["Water"],
      img: (
        <Image
          src="/img/causes/cause2.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "CLEAN WATER PROJECT IN PUNJAB",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2024-01-07 00:00:00",
      color: "#f15b43",
    },
    {
      id: 3,
      category: ["Water"],
      img: (
        <Image
          src="/img/causes/cause3.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "CLEAN WATER PROJECT IN BALOCHISTAN.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 4,
      category: ["Water", ""],
      img: (
        <Image
          src="/img/causes/cause4.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "CLEAN WATER PROJECT IN KARBATH.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#5fb35b",
    },
    {
      id: 5,
      category: ["Education"],
      img: (
        <Image
          src="/img/causes/cause13.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "GPS. Roru Goth School.",
      adopted: "Adopted",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#f15b43",
    },
    {
      id: 6,
      category: ["Education"],
      img: (
        <Image
          src="/img/causes/cause14.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "GPS. Bagliar Mithi School.",
      adopted: "Adopted",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 7,
      category: ["Education"],
      img: (
        <Image
          src="/img/causes/cause15.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "GPS. Kaktario Samma School.",
      adopted: "Adopted",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#5fb35b",
    },
    {
      id: 8,
      category: ["Education"],
      img: (
        <Image
          src="/img/causes/cause16.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "GPS. Misali Goth School.",
      adopted: "Adopted",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#f15b43",
    },
    {
      id: 9,
      category: ["Medical"],
      img: (
        <Image
          src="/img/causes/cause10.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "Karbath Medical Centre Hospital.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 10,
      category: ["Medical"],
      img: (
        <Image
          src="/img/causes/cause11.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "Hajra Bibi Memorial Trust Hospital.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#5fb35b",
    },
    {
      id: 11,
      category: ["Medical"],
      img: (
        <Image
          src="/img/causes/cause12.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "Cataract Surgeries Across Pakistan.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#f15b43",
    },
    {
      id: 12,
      category: ["Medical"],
      img: (
        <Image
          src="/img/causes/cause28.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "Hasene International & Helpline Medical Camp.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 13,
      category: ["Food"],
      img: (
        <Image
          src="/img/causes/cause23.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Rashan Distribution in ramzan.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#5fb35b",
    },
    {
      id: 14,
      category: ["Food"],
      img: (
        <Image
          src="/img/causes/cause24.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Rashan Distribution Between Needy People.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#f15b43",
    },
    {
      id: 15,
      category: ["Food"],
      img: (
        <Image
          src="/img/causes/cause25.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Ramzan Rashan Distribution in Blochistan.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 16,
      category: ["Food"],
      img: (
        <Image
          src="/img/causes/cause26.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Rashan Distribution in Flooded Area.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#5fb35b",
    },
  ],
  team:[
    {
      "id": 1,
      "designation": "General Manager",
      "name": "Colonel Muhammad Ali",
      "image": "/img/team/member1.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 2,
      "designation": "General Manager EDU (Punjab)",
      "name": "M.A Naeem Khan (Retd)",
      "image": "/img/team/member2.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 3,
      "designation": "General Manager Accounts",
      "name": "Mr Hameed Hassan khan",
      "image": "/img/team/member3.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 4,
      "designation": "Senior National Coordinator",
      "name": "Mr Sarfraz Ahmad Bhullar",
      "image": "/img/team/member4.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 5,
      "designation": "National Coordinator",
      "name": "Mr Hafiz Bilal Nurani",
      "image": "/img/team/member5.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 6,
      "designation": "Community Welfare Manager",
      "name": "Mr Atif Hussain",
      "image": "/img/team/member6.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 7,
      "designation": "Liaison Manager",
      "name": "Mr Abid Ali Abid",
      "image": "/img/team/member7.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 8,
      "designation": "Cashier",
      "name": "Mr Faisal Mushtaq",
      "image": "/img/team/member8.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 9,
      "designation": "Designer",
      "name": "Mr Adeem Mansoor",
      "image": "/img/team/member9.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 10,
      "designation": "Liaison Manager",
      "name": "Mr Arslan Ramzan",
      "image": "/img/team/member10.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 11,
      "designation": "Web Developer",
      "name": "Bilal Ramzan",
      "image": "/img/team/member11.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 12,
      "designation": "Manager Purchase",
      "name": "Mr Mehmood Ali joiya",
      "image": "/img/team/member12.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    },
    {
      "id": 13,
      "designation": "Manager Transport",
      "name": "Mr Amanat Ali",
      "image": "/img/team/member13.jpg",
      "socialLinks": [
        { "platform": "facebook", "icon": "fab fa-facebook-f", "url": "#" },
        { "platform": "twitter", "icon": "fab fa-twitter", "url": "#" },
        { "platform": "behance", "icon": "fab fa-behance", "url": "#" },
        { "platform": "youtube", "icon": "fab fa-youtube", "url": "#" }
      ]
    }
  ]
  
};
