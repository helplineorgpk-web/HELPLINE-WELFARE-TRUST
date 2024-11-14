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
      id: 17,
      category: ["House Constructions"],
      img: (
        <Image
          src="/img/causes/houseconstruction1.jpeg"
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
      id: 18,
      category: ["House Constructions"],
      img: (
        <Image
          src="/img/causes/houseconstruction2.jpeg"
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
      id: 19,
      category: ["House Constructions"],
      img: (
        <Image
          src="/img/causes/houseconstruction3.jpeg"
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
      id: 20,
      category: ["House Constructions", ""],
      img: (
        <Image
          src="/img/causes/houseconstruction4.jpeg"
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
  education: [
    {
      id: 1,
      category: ["Helpline Schools"],
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
      category: ["Helpline Schools"],
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
      category: ["Helpline Schools"],
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
      category: ["Helpline Schools", ""],
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
      category: ["Helpline Adopted Students"],
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
      category: ["Helpline Adopted Students"],
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
      category: ["Helpline Adopted Students"],
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
      category: ["Helpline Adopted Students"],
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
      category: ["Al Kitab Education System"],
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
      category: ["Al Kitab Education System"],
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
      category: ["Al Kitab Education System"],
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
      category: ["Al Kitab Education System"],
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
  ],
  team: [
    {
      id: 1,
      designation: "General Manager",
      name: "Colonel Muhammad Ali",
      image: "/img/team/member1.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 2,
      designation: "General Manager EDU (Punjab)",
      name: "M.A Naeem Khan (Retd)",
      image: "/img/team/member2.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 3,
      designation: "General Manager Accounts",
      name: "Mr Hameed Hassan khan",
      image: "/img/team/member3.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 4,
      designation: "Senior National Coordinator",
      name: "Mr Sarfraz Ahmad Bhullar",
      image: "/img/team/member4.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 5,
      designation: "National Coordinator",
      name: "Mr Hafiz Bilal Nurani",
      image: "/img/team/member5.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 6,
      designation: "Community Welfare Manager",
      name: "Mr Atif Hussain",
      image: "/img/team/member6.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 7,
      designation: "Liaison Manager",
      name: "Mr Abid Ali Abid",
      image: "/img/team/member7.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 8,
      designation: "Cashier",
      name: "Mr Faisal Mushtaq",
      image: "/img/team/member8.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 9,
      designation: "Designer",
      name: "Mr Adeem Mansoor",
      image: "/img/team/member9.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 10,
      designation: "Liaison Manager",
      name: "Mr Arslan Ramzan",
      image: "/img/team/member10.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 11,
      designation: "Web Developer",
      name: "Bilal Ramzan",
      image: "/img/team/member11.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 12,
      designation: "Manager Purchase",
      name: "Mr Mehmood Ali joiya",
      image: "/img/team/member12.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 13,
      designation: "Manager Transport",
      name: "Mr Amanat Ali",
      image: "/img/team/member13.jpg",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "behance", icon: "fab fa-behance", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
  ],
  certificationData: [
    {
      id: 1,
      title: "Certification",
      announcement:
        "We are proud to announce that Helpline, a dedicated social welfare organization, has been certified by the Pakistan Center of Philanthropy (PCP) and is registered with the Federal Board of Revenue (FBR). These certifications demonstrate our unwavering commitment to transparency, accountability, and excellence in all our endeavors.",
      details:
        "The certification from PCP highlights our adherence to the highest standards in governance, financial management, and program implementation. Being registered with the FBR empowers us to accept donations domestically and internationally, enhancing trust and credibility among donors.",
      conclusion:
        "Join us in making a lasting impact. Together, we can transform lives and create a brighter future.",
      img: [
        {
          id: 1,
          src: "/img/about/PCP-certificate2.jpg",
          alt: "FBR Certificate",
        },
        {
          id: 2,
          src: "/img/about/PCP-certificate1.jpeg",
          alt: "PCP Certificate",
        },
      ],
    },
  ],
  journeyData: [
    {
      title:
        "HELPLINE is 'Bridging the Gap between Have and Have not' on the Principles of",
      title1: '"MAWAKHAT-E-MADINAH"',
      announcement:
        "Helpline Social Welfare Charity Organization is built on the fundamental concept of Mawakhat, which is an Arabic term that refers to the bond of brotherhood and solidarity between individuals or groups of people. Mawakhat embodies the spirit of social responsibility, where people from different backgrounds and communities come together to support one another in times of need. At Helpline Social Welfare Charity Organization, this concept of Mawakhat is the cornerstone of our work, and we strive to build stronger communities by fostering a sense of collective responsibility and empathy. We believe that everyone deserves equal opportunities and access to basic necessities such as food, education, and healthcare, regardless of their background or socioeconomic status. Through our various initiatives and programs, we aim to create a more equitable society where people can live with dignity and respect. Our team of dedicated volunteers works tirelessly to provide assistance and support to those in need, and we are committed to making a positive impact in the lives of the people we serve. Overall, Helpline Social Welfare Charity Organization is grounded in the principles of Mawakhat, and we believe that by working together, we can create a better world for everyone.",
      announcement1:
        "Helpline started its journey with the private construction of a school in Pak Patan, Punjab in 1993 which got completed in the year 2000.The basic purpose of Helpline is Betterment of the academic activities of Government Schools and concentration towards providing basic necessities of life, especially support of poor students. Helpline’s proper registration was done in the year 2000 which included academic improvement of Government schools, wellness of prisoners and supply of food to patients.",
      details:
        "The certification from PCP highlights our adherence to the highest standards in governance, financial management, and program implementation. Being registered with the FBR empowers us to accept donations domestically and internationally, enhancing trust and credibility among donors.",
      conclusion: "Overview of Helpline’s Massive Work Over the Years",
      datayearly: [
        {
          id: 1,
          year: "2001",
          detail:
            "Helpline started its journey with the private construction of a school in Pak Patan, Punjab in 1993 which got completed in the year 2000. The basic purpose of Helpline is Betterment of the academic activities of Government Schools and concentration towards providing basic necessities of life, especially support of poor students. Helpline’s proper registration was done in the year of 2000 which included academic improvement of Government schools, wellness of prisoners and supply of food to patients.",
        },
        {
          id: 2,
          year: "2002",
          detail:
            "Initially, four rooms were repaired in Government Boys Primary School Sattu Katla, and free books were distributed among needy students because the government did not provide books at that time. Additionally, an initiative called “Muhammadi Dastarkhwan” was started to provide free food to laborers who were unable to find work or labor. This service was available to all laborers on roads and road junctions.",
        },
        {
          id: 3,
          year: "2003",
          detail:
            "Free books were distributed among children and two rooms were constructed in Kot Lakhpat Girls Middle School. In Government Services Hospital, a free food service was started three times a day for a period of eight years, serving up to 1000 patients. Eventually, this responsibility was taken on by a donor, and the service is still ongoing. In addition, a service to provide quality food to prisoners in jails was initiated, providing food once a month for two years to approximately 4000 prisoners. The donor then passed on this responsibility to another catering company.",
        },
        {
          id: 4,
          year: "2004",
          detail:
            "In the Government Mian Munshi Hospital located on Band Road, a food service was initiated for patients, which is still in operation today. The service aims to provide nutritious meals to patients during their stay in the hospital. The number of patients benefiting from this service is estimated to be around 150.",
        },
        {
          id: 5,
          year: "2005",
          detail:
            "A huge number of October 2005 Earthquake victims were shifted to Lahore which kept on increasing and reached up to 700. Clothes and residence were managed for them and for six months food was also provided on which Pak Helpline spent a huge sum of money. In addition to this, a restoration camp was also organized in Mansehra.",
        },
        {
          id: 6,
          year: "2006",
          detail:
            "A scheme was started on behalf of city district government through which community had to provide 20% and government had to provide 80% of the amount and every possible work which can be done in favor of public e.g., school, dispensary, road and public toilet etc. Helpline started its work initially from Government Girls High School, Hanjarwal which by the Grace of Almighty Allah got completed on 2007. In this project 7 rooms, 1 office and concrete stairs were completed which was very eye catching and beneficial for the students. Food service was started in Jinnah Hospital in which the number of patients was 1000.",
        },
        {
          id: 7,
          year: "2007",
          detail:
            "A dispensary was established in Green Town, and a Stitching Center for Girls was also set up alongside it. The centre has been functioning ever since, and hundreds of girls have benefitted. Furthermore, food service was initiated for cancer ward patients at Mayo Hospital, which currently serves 150 patients.",
        },
        {
          id: 8,
          year: "2008",
          detail:
            "At the Shadab school for mentally challenged individuals, a lunch service for 150 patients was established and has continued to operate. Under the CBC Scheme, several schools were improved with necessary infrastructure.",
        },
        {
          id: 9,
          year: "2009",
          detail:
            "In the impoverished areas of Amar Sidhu and Harbanspura, stitching centres were established with one in each area. These centres have remained functional over the years and have graduated hundreds of girls annually.",
        },
        {
          id: 10,
          year: "2010",
          detail:
            "In response to the devastating floods in Muzaffargarh, a camp was established to assist the affected individuals in their restoration efforts. The camp included a room for shelter, a veranda for additional living space, and a hand pump to provide access to clean water.",
        },
        {
          id: 11,
          year: "2011",
          detail:
            "Once again, devastating floods caused extensive damage, particularly in the province of Sindh. In response to this crisis, Helpline was established to aid in the restoration efforts. The helpline has been tirelessly working to provide assistance to those who were affected by the floods.",
        },
        {
          id: 12,
          year: "2012",
          detail:
            "The establishment of the Karbath Medical Center was a significant step in providing healthcare access to individuals in the Bedian road area.",
        },
        {
          id: 13,
          year: "2013",
          detail:
            "The Gojra Educational Complex was facing an uncertain future as the owners were unable to continue running it. However, a remarkable development occurred when the owners handed over the management of the school to Helpline under an agreement.",
        },
        {
          id: 14,
          year: "2014",
          detail:
            "The School and stitching centre in Manawan were facing challenges in their operations, resulting in inadequate educational and vocational training opportunities for the community.",
        },
        {
          id: 15,
          year: "2015",
          detail:
            "Issuance of interest free loans started which is continuing with great success and till now thousands have been benefited.",
        },
        {
          id: 16,
          year: "2016",
          detail:
            "The provision of food service to patients admitted to Government Nawaz Sharif Hospital is a great initiative, which is benefiting a large number of patients.",
        },
        {
          id: 17,
          year: "2017",
          detail:
            "Start of Computer lab in Chitral for educational purposes. The aid of Muslim Refugees through food and medicine.",
        },
        {
          id: 18,
          year: "2018",
          detail:
            "The major contribution in Ramzan is food packages distributing to poor families, and disabled persons registered in this office.",
        },
        {
          id: 19,
          year: "2019",
          detail:
            "In 2019 Helpline slaughtered hundreds of animals with the help of our donors throughout the country.",
        },
        {
          id: 20,
          year: "2020",
          detail:
            "Pakistan now in a critical situation in the world’s water-deficient nations, indicating that it is rapidly approaching this status.",
        },
        {
          id: 21,
          year: "2021",
          detail:
            "In the year 2021, Helpline Social Welfare organization distributed 13,000 ration packages, ensuring that countless underprivileged households had access to essential food supplies during challenging times.",
        },
        {
          id: 22,
          year: "2022",
          detail:
            "In the year 2022, Helpline Social Welfare Organization emerged as a beacon of hope and support during the devastating flood 2022 in flood-affected areas of Sindh, Southern Punjab and Baluchistan.",
        },
        {
          id: 23,
          year: "2023",
          detail:
            "In the year 2023, So far, Helpline distributed 3005 ration packages in Ramzan, and undertook the sacred act of Qurbani, sacrificing 527 animals.",
        },
      ],
    },
  ],
  images: [
    {
      id: 1,
      image: "/img/causes/cause1.jpg",
    },
    {
      id: 2,
      image: "/img/causes/cause2.jpg",
    },
    {
      id: 3,
      image: "/img/causes/cause3.jpg",
    },
    {
      id: 4,
      image: "/img/causes/cause4.jpg",
    },
    {
      id: 5,
      image: "/img/causes/cause10.jpg",
    },
    {
      id: 6,
      image: "/img/causes/cause11.jpg",
    },
    {
      id: 7,
      image: "/img/causes/cause12.jpg",
    },
    {
      id: 8,
      image: "/img/causes/cause28.jpg",
    },
    {
      id: 9,
      image: "/img/causes/cause24.jpg",
    },
    {
      id: 10,
      image: "/img/causes/cause23.jpg",
    },
    {
      id: 11,
      image: "/img/causes/cause25.jpg",
    },
    {
      id: 12,
      image: "/img/causes/cause13.jpg",
    },
    {
      id: 13,
      image: "/img/causes/cause14.jpg",
    },
    {
      id: 14,
      image: "/img/causes/cause15.jpg",
    },
    {
      id: 15,
      image: "/img/causes/cause16.jpg",
    },
    {
      id: 16,
      image: "/img/causes/cause17.jpg",
    },
    {
      id: 17,
      image: "/img/causes/houseconstruction1.jpeg",
    },
    {
      id: 18,
      image: "/img/causes/houseconstruction2.jpeg",
    },
    {
      id: 19,
      image: "/img/causes/houseconstruction4.jpeg",
    },
    {
      id: 20,
      image: "/img/causes/houseconstruction3.jpeg",
    },
    {
      id: 21,
      image: "/img/causes/support5.jpg",
    },
    {
      id: 22,
      image: "/img/team/member1.jpg",
    },
    {
      id: 23,
      image: "/img/team/member2.jpg",
    },
    {
      id: 24,
      image: "/img/team/member3.jpg",
    },
    {
      id: 25,
      image: "/img/team/member4.jpg",
    },
    {
      id: 26,
      image: "/img/team/member5.jpg",
    },
    {
      id: 27,
      image: "/img/team/member6.jpg",
    },
    {
      id: 28,
      image: "/img/team/member7.jpg",
    },
    {
      id: 29,
      image: "/img/team/member8.jpg",
    },
    {
      id: 30,
      image: "/img/team/member9.jpg",
    },
    {
      id: 31,
      image: "/img/team/member10.jpg",
    },
    {
      id: 32,
      image: "/img/team/member11.jpg",
    },
  ],
  videoData: [
    {
      id: 1,
      src: "https://www.youtube.com/embed/SsDAXkU1BiU?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fhelpline.org.pk&widgetid=1",
      title: "YouTube video player 1",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/qIWgzMfnCYk?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fhelpline.org.pk&widgetid=3",
      title: "YouTube video player 2",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/SG9EJl9oihQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fhelpline.org.pk&widgetid=5",
      title: "YouTube video player 3",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/icydKjkJhXs?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fhelpline.org.pk&widgetid=7",
      title: "Qurbani - Eid UL Azha Message 2019",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/o2bU86CxKWQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fhelpline.org.pk&widgetid=9",
      title: "Qubani Program by Pak Helpline",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/e1DF3RJT1xA?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fhelpline.org.pk&widgetid=11",
      title: "Distribution of 500 Rations to Deserving Families of Lahore",
    },
  ],
  RashanData: [
    {
      id: 1,
      title: "Ration Program At Al-Kitab",
      year: 2024,
      description:
        "Helpline, like previous year's has started its Ramadan campaign with full vigor. We have planned to benefit 8000 destitute families all over Pakistan.",
      image: "/img/rashan/alkitabrashan.jpg",
      imagebg: "/img/rashan/alkitabrashan2.jpg",
      programTitle: "HELPLINE RAMADAN RATION BOX",
    },
    {
      id: 2,
      title: "Helpline Bahawalpur Ration Program",
      year: 2024,
      description:
        "Helpline, like previous year's has started its Ramadan campaign with full vigor. We have planned to benefit 8000 destitute families all over Pakistan.",
      image: "/img/rashan/bahawalpurrashan.jpg",
      imagebg: "/img/rashan/bahawalpurrashan2.jpg",
      programTitle: "HELPLINE RATION PROGRAM 2024",
    },
    {
      id: 3,
      title: "Helpline Gojra Ration Program",
      year: 2024,
      description:
        "Helpline, like previous year's has started its Ramadan campaign with full vigor. We have planned to benefit 8000 destitute families all over Pakistan.",
      image: "/img/rashan/gojrarashan.jpg",
      imagebg: "/img/rashan/gojrarashan2.jpg",
      programTitle: "HELPLINE RATION PROGRAM 2024",
    },
    {
      id: 4,
      title: "Helpline Noshki Ration Program",
      year: 2024,
      description:
        "Helpline, like previous year's has started its Ramadan campaign with full vigor. We have planned to benefit 8000 destitute families all over Pakistan.",
      image: "/img/rashan/noshkirashan.jpg",
      imagebg: "/img/rashan/noshkirashan2.jpg",
      programTitle: "HELPLINE RATION PROGRAM 2024",
    },
    {
      id: 5,
      title: "Helpline Mithi Tharparker Ration Program",
      year: 2024,
      description:
        "Helpline, like previous year's has started its Ramadan campaign with full vigor. We have planned to benefit 8000 destitute families all over Pakistan.",
      image: "/img/rashan/tharparkarrashan.jpg",
      imagebg: "/img/rashan/tharparkarrashan2.jpg",
      programTitle: "HELPLINE RATION PROGRAM 2024",
    },
    {
      id: 6,
      title: "Rashan Program at IRTIQA-E-ITTEFAL School",
      year: 2024,
      description:
        "Helpline, like previous year’s has started it’s Ramadan campaign with full vigor. We have planned to benefit 8000 destitute families all over the Pakistan.",
      image: "/img/rashan/irtikaschoolrashan.jpg",
      imagebg: "/img/rashan/irtikaschoolrashan2.jpg",
      programTitle: "HELPLINE RATION PROGRAM 2024",
    },
  ],
};
