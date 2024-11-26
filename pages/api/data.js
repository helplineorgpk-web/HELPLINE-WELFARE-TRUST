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
    headerBg: "img/causes/cause17.jpg",
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
    headerBg: "img/causes/hospital.jpeg",
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
      category: ["House Constructions"],
      img: (
        <Image
          src="/img/causes/houseconstruction1.jpeg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
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
      category: ["House Constructions"],
      img: (
        <Image
          src="/img/causes/houseconstruction2.jpeg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
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
      category: ["House Constructions"],
      img: (
        <Image
          src="/img/causes/houseconstruction3.jpeg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
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
      category: ["House Constructions"],
      img: (
        <Image
          src="/img/causes/houseconstruction4.jpeg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      category: ["Water"],
      img: (
        <Image
          src="/img/causes/cause1.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 6,
      category: ["Water"],
      img: (
        <Image
          src="/img/causes/cause2.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 7,
      category: ["Water"],
      img: (
        <Image
          src="/img/causes/cause3.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 8,
      category: ["Water"],
      img: (
        <Image
          src="/img/causes/cause4.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 9,
      category: ["Education"],
      img: (
        <Image
          src="/img/causes/cause13.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 10,
      category: ["Education"],
      img: (
        <Image
          src="/img/causes/cause14.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 11,
      category: ["Education"],
      img: (
        <Image
          src="/img/causes/cause15.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 12,
      category: ["Education"],
      img: (
        <Image
          src="/img/causes/cause16.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 37,
      category: ["Education"],
      img: (
        <Image
          src="/img/causes/tandusindh1.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Tando Allahyar Sindh Program.",
      adopted: "Adopted",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#f15b43",
    },
    {
      id: 13,
      category: ["Medical"],
      img: (
        <Image
          src="/img/causes/cause10.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 14,
      category: ["Medical"],
      img: (
        <Image
          src="/img/causes/cause11.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 15,
      category: ["Medical"],
      img: (
        <Image
          src="/img/causes/cause12.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 36,
      category: ["Medical"],
      img: (
        <Image
          src="/img/causes/mithimedicalcamp1.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "HELPLINE Mithi-Tharparkar Medical Camp.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#f15b43",
    },
    {
      id: 16,
      category: ["Food"],
      img: (
        <Image
          src="/img/causes/cause23.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 17,
      category: ["Food"],
      img: (
        <Image
          src="/img/causes/cause24.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 18,
      category: ["Food"],
      img: (
        <Image
          src="/img/causes/cause25.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 19,
      category: ["Food"],
      img: (
        <Image
          src="/img/causes/cause26.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
    {
      id: 20,
      category: ["Idara-e-Nazariya-e-Pakistan"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Education Program Idara-e-Nazariya-e-Pakistan.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 21,
      category: ["Food"],
      img: (
        <Image
          src="/img/causes/cause27.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Rashan Distribution Campaign in Pakistan.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#5fb35b",
    },
    {
      id: 22,
      category: ["Helpline Schools"],
      img: (
        <Image
          src="/img/causes/cause1.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 23,
      category: ["Helpline Schools"],
      img: (
        <Image
          src="/img/causes/cause2.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 24,
      category: ["Helpline Schools"],
      img: (
        <Image
          src="/img/causes/cause3.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 25,
      category: ["Helpline Schools", ""],
      img: (
        <Image
          src="/img/causes/cause4.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 26,
      category: ["Helpline Adopted Students"],
      img: (
        <Image
          src="/img/causes/cause13.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 28,
      category: ["Helpline Adopted Students"],
      img: (
        <Image
          src="/img/causes/cause14.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 29,
      category: ["Helpline Adopted Students"],
      img: (
        <Image
          src="/img/causes/cause15.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 30,
      category: ["Helpline Adopted Students"],
      img: (
        <Image
          src="/img/causes/cause16.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 31,
      category: ["Al Kitab Education System"],
      img: (
        <Image
          src="/img/causes/cause10.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 32,
      category: ["Al Kitab Education System"],
      img: (
        <Image
          src="/img/causes/cause11.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 33,
      category: ["Al Kitab Education System"],
      img: (
        <Image
          src="/img/causes/cause12.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 34,
      category: ["Al Kitab Education System"],
      img: (
        <Image
          src="/img/causes/cause28.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
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
      id: 35,
      category: ["Idara-e-Nazariya-e-Pakistan"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Education Program Idara-e-Nazariya-e-Pakistan.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    // eee?
    {
      id: 38,
      category: ["Sadaqah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Sadaqah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 39,
      category: ["Sadaqah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Sadaqah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 40,
      category: ["Sadaqah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Sadaqah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 41,
      category: ["Sadaqah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Sadaqah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 42,
      category: ["Kaffarah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Kaffarah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 43,
      category: ["Kaffarah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Kaffarah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 44,
      category: ["Kaffarah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Kaffarah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 45,
      category: ["Kaffarah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Kaffarah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 46,
      category: ["Fidyah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Fidyah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 47,
      category: ["Fidyah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Fidyah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 48,
      category: ["Fidyah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Fidyah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 49,
      category: ["Fidyah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Fidyah Program .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 50,
      category: ["Aqiqah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Aqiqah – Celebrate the Birth of Your Child: .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 51,
      category: ["Aqiqah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Aqiqah – Celebrate the Birth of Your Child:.",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 52,
      category: ["Aqiqah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Aqiqah – Celebrate the Birth of Your Child: .",
      goal: "4,5100",
      raised: "45,300",
      toGo: "45,200",
      address: "Douglas Park, Chicago, IL",
      date: "2022-11-27 00:00:00",
      color: "#65cabb",
    },
    {
      id: 53,
      category: ["Aqiqah"],
      img: (
        <Image
          src="/img/causes/idaranazriyapakistan.jpg"
          layout="responsive"
          width={350}
          height={225}
        />
      ),
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people,",
      pbar: "pbar_1",
      progressData: "65",
      desc: "Helpline Aqiqah – Celebrate the Birth of Your Child: .",
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
  disasterContent: {
    title: "HELPLINE DISASTER",
    headerBg: "img/causes/disasterbg.jpg",
    supportButtonText: "SUPPORTING APPEAL",
    videoSrc:
      "https://www.youtube.com/embed/uBu8B3Cf9fg?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fhelpline.org.pk&amp;widgetid=3",
    videoSrc2:
      "https://www.youtube.com/embed/A9OMSHZOiv0?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fhelpline.org.pk&amp;widgetid=1",
    heading: "Helpline Disaster Management System",
    description: `
      Helpline NGO is committed to Disaster Management as one of its top priorities, given its nationwide presence and integrated network of volunteers across Pakistan. In the event of any sudden disaster anywhere in the country, the volunteers of Helpline NGO are always ready to provide immediate assistance and take part in relief activities. In addition, Helpline NGO has established specialized Disaster Management Cells throughout the country to ensure prompt rescue and relief services to deal with any unfortunate situation. These cells have been designated as independent departments at both the central and provincial levels, reflecting the importance that Helpline NGO places on Disaster Management.
    `,
    stats: [
      { label: "Ration Packages", value: "12,636" },
      { label: "Volunteers", value: "9,838" },
      { label: "Houses", value: "150" },
      { label: "Total Beneficiaries", value: "12,636" },
      { label: "Expenditure PKR (In Million)", value: "148" },
    ],
    donationOptions: [
      {
        label: "Shelter Tent",
        price: "Rs: 25,000/-",
        buttonText: "Donate Now",
      },
      {
        label: "Tarpaulin",
        price: "PKR: 3,000/-",
        buttonText: "Donate Now",
      },
      {
        label: "Rashan Package",
        price: "Rs: 25,000/-",
        buttonText: "Donate Now",
      },
    ],
  },
  familyWelfareContent: {
    title: "HELPLINE FAMILY WELFARE",
    headerBg: "img/causes/familywelfare.jpeg",
    supportButtonText: "SUPPORTING APPEAL",
    videoSrc:
      "https://www.youtube.com/embed/7p8vBnWjJes?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fhelpline.org.pk&amp;widgetid=3",
    heading: "Helpline Family Welfare Management System",
    description: `
     Pakistan is facing multifarious social problems for years ranging from poverty to civic ignorance and lack of basic facilities of life. People face severe problems in terms of health, education, and the economy. The country stands at 152nd position in Human Development Index (HDI) and almost 51% of Pakistan’s population is deprived of basic necessities (health, education, etc.).” The best amongst you is the one who helps others.
    `,
  },
  CleanWaterContent: {
    title: "HELPLINE CLEAN WATER PROGRAM",
    headerBg: "img/causes/cause4.jpg",
    supportButtonText: "SUPPORTING APPEAL",
    videoSrc:
      "https://www.youtube.com/embed/MzLy5zMRcgk?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fhelpline.org.pk&amp;widgetid=3",
    heading: "HELPLINE CLEAN WATER PROJECTS",
    description: `
Pakistan is on its way to become a water deficient country as it already stands at 30th position among the most water-deficient countries of the world. Safe drinking water is one of Pakistan’s most immediate and crucial problems that demands earliest actions to be taken for its resolution. Helpline is practically active to ensure the provision of clean drinking water by installing hand-pumps in arid lands, drilling water-wells in remote water-scarce areas, installing water-filtration plants in cities, and supplying water to homes in villages through its water schemes. Helpline Clean Water Program takes every possible measure according to the needs of the water-scarce regions to implement its mission.
    `,
  },
  WaterCauses: [
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
  ],
  cataractContent: {
    title: "HELPLINE CATARACT PROGRAM",
    supportButtonText: "SUPPORTING APPEAL",
    headerBg: "img/causes/cataractbg.jpeg",
    videoSrc: "https://www.youtube.com/embed/z49KpgNHTNM",
    heading: "Helpline Cataract Program",
    description: `
   Helpline Social Welfare Organization has successfully carried out a monumental initiative aimed at restoring vision and transforming lives across Pakistan. Collaborating with Hasene International, the organization orchestrated a commendable effort, conducting a total of 500 cataract operations throughout the country. The comprehensive project not only addressed the critical need for eye care but also alleviated financial burdens for individuals who may have otherwise struggled to access these essential services. The initiative encompassed a holistic approach, offering free three-eye checkups to identify those in need, followed by complimentary cataract surgeries, including the provision of free lenses and post-operative medicines.
The 500 individuals who benefitted from this initiative are now equipped with the gift of sight, enabling them to lead more fulfilling and independent lives. The success of this venture underscores the significance of philanthropic endeavors in addressing healthcare disparities and fostering a brighter future for communities in need.
    `,
  },
  qurbaniContent: {
    title: "HELPLINE QURBANI PROGRAM",
    supportButtonText: "SUPPORTING APPEAL",
    headerBg: "img/causes/qurbanibg.jpg",
    videoSrc: "https://www.youtube.com/embed/rU2ZxQshws8",
    heading: "Helpline Qurbani Program",
    description: `
        Qurbani is a great Sunnah of Ibrahim (AS) and the dearest deed to Allah (SWT). As you are preparing to commemorate Prophet Ibrahim (AS) dedication through Qurbani on this Eid-ul-Adha. Alkhidmat urges you to remember millions of underprivileged and undernourished families in Pakistan who eagerly await Eid-ul-Adha throughout the whole year to eat nutritious meat. Alkhidmat Foundation Pakistan is doing Qurbani Fi Sabeel Lillah to distribute nutritious meat to millions of underprivileged and undernourished Pakistanis on this Eid-ul-Adha. This year, Alkhidmat is also doing Qurbani specifically for the oppressed Palestinian families in Gaza. Take advantage of Alkhidmat online Qurbani Fi Sabeel Lillah
    `,
  },
  swiperData: [
    {
      image: "img/causes/qurbani1.jpg",
      detailHeader: "Qurbani",
      detail:
        "At Al Kitab School in Rana Town, we are organizing a qurbani event in collaboration with the Hasene Team and the Helpline Social Media Organization.",
    },
    {
      image: "img/causes/qurbani2.jpg",
      detailHeader: "Qurbani Meat",
      detail:
        "The Hasene team and Helpline Social Media Organization are distributing Qurbani meat to needy individuals in Rana Town’s Al Kitab School.",
    },
    {
      image: "img/causes/qurbani3.jpg",
      detailHeader: "Community Support",
      detail:
        "The event aims to support underprivileged families by providing essential resources and spreading joy during the festive season.",
    },
    {
      image: "img/causes/qurbani4.jpg",
      detailHeader: "Helping Hands",
      detail:
        "Join us in this noble cause as we collaborate to bring smiles and relief to those in need.",
    },
  ],
  MasjidContent: {
    title: "HELPLINE Masjid PROGRAM",
    supportButtonText: "SUPPORTING APPEAL",
    headerBg: "img/causes/masjidbg.jpg",
    videoSrc: "https://www.youtube.com/embed/6JoodIjZILk",
    heading: "Helpline Masjid Program",
    description: `
     By supporting Masjid Schools, Helpline is helping to provide a valuable service to communities where students can learn Islamic studies and other subjects such as Arabic and Quranic studies on the basis of Muakhaat-e-Madina. Helpline has adopted 6 Masjid schools as a means of improving educational opportunities for underprivileged children.
    `,
  },
  masjidData: [
    {
      image: "img/causes/masjid1.png",
      detailHeader: "Andu Mahajir Masjid",
      detail:
        "Andu Mahajir Masjid, backed by Helpline NGO, unites the community with education, healthcare, and social support, fostering harmony and togetherness.",
    },
    {
      image: "img/causes/masjid2.png",
      detailHeader: "Bilal Masjid Misalli Goth(TJM)",
      detail:
        "Bilal Masjid in Misalli Goth, supported by Helpline NGO, is a center for prayer, Islamic learning, healthcare, and social aid, promoting unity and community well-being.",
    },
    {
      image: "img/causes/masjid3.png",
      detailHeader: "Jamia Masjid Fatima Bhagliar Thar",
      detail:
        "Jamia Masjid Fatima Bhagliar Thar, supported by Helpline NGO, serves as a community hub in Thar, providing prayers, education, healthcare, and vital social services.",
    },
    {
      image: "img/causes/masjid4.png",
      detailHeader: "Kakrario Madrasa Tharparker",
      detail:
        "Kakrario Madrasa Tharparker, supported by Helpline NGO, is a vital center for Islamic education, providing knowledge, food, clothing, and shelter to students in need.",
    },
    {
      image: "img/causes/masjid5.png",
      detailHeader: "Katho Sama Madrasa",
      detail:
        "Katho Sama Madrasa in Sindh, supported by Helpline NGO, is a hub for Islamic education, offering knowledge, food, clothing, and shelter to students in need.",
    },
  ],
  HelplineHasneData: {
    title: "Helpline & Hesne Ration Distribution Program",
    supportButtonText: "SUPPORTING APPEAL",
    headerBg: "img/causes/hasnebg.jpg",
    videoSrc: "https://www.youtube.com/embed/Q9_GMDMJE7w",
    heading: "Helpline & Hesne Ration Distribution Program",
    description: `
      The Helpline organization is delighted to announce the distribution of shoes, clothes, and school bags to the students of Al-Kitab School in Rana Town, Lahore. This impactful initiative is designed to support these young learners by providing essential items that will enhance their educational experience and boost their confidence. By joining hands with us, you can help make a lasting difference in their lives, empowering them to focus on their studies and build a brighter future. Together, we can ensure that no child is held back by the lack of basic necessities, paving the way for success and opportunity.
    `,
    detailHeader: "Helpline & Hasne Distribution Program at Al-Kitab Rana town",
    detail:
      "The Helpline organization is proud to introduce an initiative focused on distributing shoes, clothes, and school bags to the students of Al-Kitab School in Rana Town, Lahore. This project is aimed at supporting students from underprivileged backgrounds by providing them with essential items that play a critical role in their everyday lives and educational journey.Many students in this area face significant challenges, including the lack of basic necessities such as appropriate clothing, footwear, and school supplies. These seemingly small yet crucial items can affect their confidence, comfort, and ability to engage fully in their studies. By providing new shoes, clothes, and school bags, we aim to alleviate some of these difficulties, ensuring that these young learners can attend school with dignity and focus on what truly matters: their education.This initiative goes beyond just providing material goods—it’s about empowering these children to believe in themselves and their potential. When students feel cared for and properly equipped, their self-esteem rises, and they are more likely to stay motivated in school, fostering a positive learning environment.The distribution of these essential items is part of our broader mission at Helpline to make education accessible and enriching for all children, regardless of their financial background. With the right support, these students can unlock their potential and work toward a brighter, more promising future.We invite you to be part of this meaningful cause. By contributing to this initiative, you can directly impact the lives of these students and help shape a future where every child has the opportunity to succeed. Together, we can make a difference and empower the next generation to achieve their dreams.",
  },
  HelplineRajanpurData: {
    title: "Helpline Rajanpur Gullowali Program",
    supportButtonText: "SUPPORTING APPEAL",
    headerBg: "img/causes/hasnebg.jpg",
    videoSrc: "https://www.youtube.com/embed/LVtB6r7dlzU",
    heading:
      "Distribution of Shoes, Clothes, and School Bags to Students of Al Kitab School.",
    description: `
The Helpline organization is proud to announce the distribution of shoes, clothes, and school bags to the students of Al-Kitab School in Rajanpur, Gullowali. This initiative aims to support and uplift underprivileged students by providing essential items that will enhance their educational experience. By joining us in this effort, you can contribute to empowering these young learners and making a meaningful difference in their lives, helping to build a brighter future for them.
    `,
    detailHeader:
      "Distribution of Shoes, Clothes, and School Bags to Students of Al Kitab School.",
    detail:
      "The Helpline organization is excited to launch an initiative dedicated to the distribution of essential items such as shoes, clothes, and school bags to the students of Al-Kitab School, located in Rajanpur, Gullowali. This initiative is part of our ongoing efforts to support education and provide underprivileged students with the resources they need to succeed.Many students in the region face significant challenges in accessing basic necessities, which can impact their ability to focus on education. By providing these items, we aim to remove some of the barriers that stand in the way of their learning journey. Ensuring that students have proper footwear, suitable clothing, and functional school bags not only improves their comfort and safety but also boosts their self-esteem and confidence in the classroom.The distribution drive is about more than just meeting immediate needs—it is about empowering students to thrive academically and personally. When students feel cared for and supported, they are more likely to engage fully in their education, opening up opportunities for a brighter future. Our team at Helpline is committed to improving the lives of these young learners and believes that by working together, we can make a significant, lasting impact.We invite you to join us in this meaningful cause. Your support can make a world of difference to these children, helping them to not only receive an education but also to gain the tools and confidence they need to succeed in life. Let’s work together to empower the next generation, one student at a time.",
  },
  HelplineItLabsData: {
    title: "Helpline IT Labs Program",
    supportButtonText: "SUPPORTING APPEAL",
    headerBg: "img/causes/itlabsbg.png",
    videoSrc: "https://www.youtube.com/embed/oSK1iD6k7OA",
    heading: "Helpline IT Labs Program",
    description: `
Helpline have realized that providing access to technology and digital education can help bridge the digital divide and empower communities. These IT labs are set up in different areas of the country like in schools (i.e. Al-Kitab School), community centers (i.e. Bahawalpur, Tando Allah Yar), and other public spaces (i.e. Lahore) to make them accessible to a larger audience. They can be a valuable resource for students and communities to gain new technical skills, explore new opportunities, and improve their quality of life.
    `,
    detailHeader: "Helpline IT Labs",
  },
  ITData: [
    {
      id: 1,
      title: "Brain Scoop in Lahore",
      description:
        "Brain Scoop is a Lahore-based IT company that has been making waves in the tech industry with its innovative products and services. With the support of the Helpline NGO, the company has been able to expand its operations and provide better services to its clients. Brain Scoop specializes in software development, web design, and digital marketing. They have a team of highly skilled professionals who are dedicated to delivering top-quality solutions to their clients. Their innovative approach to problem-solving has earned them a reputation as one of the most reliable IT companies in the region.",
      image: "/img/causes/itlab1.png",
    },
    {
      id: 2,
      title: "Brain Scoop in Islamabad",
      description:
        "Brain Scoop is an Islamabad-based IT company that has been making waves in the tech industry with its innovative products and services. With the support of the Helpline NGO, the company has been able to expand its operations and provide better services to its clients. Brain Scoop specializes in software development, web design, and digital marketing. They have a team of highly skilled professionals who are dedicated to delivering top-quality solutions to their clients. Their innovative approach to problem-solving has earned them a reputation as one of the most reliable IT companies in the region.",
      image: "/img/causes/itlab2.png",
    },
    {
      id: 3,
      title: "Brain Scoop in Bahalwapur",
      description:
        "The Helpline NGO provides financial and technical support to Brain Scoop, enabling it to invest in better technology, infrastructure, and talent. This has allowed the IT lab to take on more significant projects and expand its reach, while maintaining its commitment to providing top-quality solutions to its clients.Brain Scoop has a team of highly skilled professionals who are dedicated to delivering innovative solutions to its clients. The lab’s expertise in software development and web design has earned it a reputation as one of the most reliable IT labs in the region.",
      image: "/img/causes/itlab3.png",
    },
    {
      id: 4,
      title: "Brain Scoop in Nawab Shah",
      description:
        "Brain Scoop has a team of highly skilled professionals who are dedicated to delivering innovative solutions to its clients. The lab’s expertise in software development and web design has earned it a reputation as one of the most reliable IT labs in the region. Through its partnership with the Helpline NGO, Brain Scoop has also been able to promote IT education and training in the community, helping to develop local talent and create new opportunities for young people in the field of technology.",
      image: "/img/causes/itlab4.png",
    },
    {
      id: 5,
      title: "Brain Scoop in Tando Allah Yar",
      description:
        "Brain Scoop has also been able to promote IT education and training in the community, helping to develop local talent and create new opportunities for young people in the field of technology. Overall, Brain Scoop’s commitment to excellence, combined with the support of the Helpline NGO, has made it a valuable asset to the community, providing high-quality IT solutions and helping to develop local talent in Tando Allah Yar.",
      image: "/img/causes/itlab5.png",
    },
  ],
  HelplineregistrationData: {
    title: "Helpline Registrations",
    headerBg: "img/causes/itlabsbg.png",
    videoSrc: "https://www.youtube.com/embed/txy5egSzmUY",
    heading: "Helpline Registrations",
    description: `
This year, with your generous support, we’ve achieved incredible milestones in transforming lives. From providing clean water and distributing meals to underserved families to organizing healthcare camps and establishing IT labs in schools, your contributions have made a profound impact. Our education initiatives have empowered children with quality learning, while medical camps brought essential care to those in need. We also supported families with sustainable housing and vocational training. These achievements highlight the power of collective action and compassion. Thank you for standing with us and believing in our mission to build a brighter, better future for all.
    `,
    detailHeader: "Helpline IT Labs",
  },
  pdfDocuments: [
    {
      id: 1,
      title: "2014",
      pdf: "/img/pdfs/HELPLINE-2014.pdf",
    },
    {
      id: 2,
      title: "2015",
      pdf: "/img/pdfs/HELPLINE-2015.pdf",
    },
    {
      id: 3,
      title: "2016",
      pdf: "/img/pdfs/HELPLINE-2016.pdf",
    },
    {
      id: 4,
      title: "2017",
      pdf: "/img/pdfs/HELPLINE-2017.pdf",
    },
    {
      id: 5,
      title: "2018",
      pdf: "/img/pdfs/HELPLINE-2018.pdf",
    },
    {
      id: 6,
      title: "2019",
      pdf: "/img/pdfs/HELPLINE-2019.pdf",
    },
    {
      id: 7,
      title: "2020",
      pdf: "/img/pdfs/HELPLINE-2020.pdf",
    },
    {
      id: 8,
      title: "2021",
      pdf: "/img/pdfs/HELPLINE-2021.pdf",
    },
    {
      id: 9,
      title: "2022",
      pdf: "/img/pdfs/HELPLINE-2022.pdf",
    },
    {
      id: 10,
      title: "2023",
      pdf: "/img/pdfs/HELPLINE-2023.pdf",
    },
    {
      id: 11,
      title: "2020-24",
      pdf: "/img/pdfs/TaxPayer-Registration-Certificate.pdf",
    },
  ],
  HelplineIslamicData: {
    title: "Helpline Islamic Activity",
    headerBg: "img/causes/islam.png",
    videoSrc: "https://www.youtube.com/embed/1KuzgWg2m7o",
    heading: "Helpline Islamic Activity",
    description: `
       Helpline promotes Islamic values through Quran distribution, educational programs, Ramadan iftar campaigns, and zakat collection. It supports mosque construction, organizes study circles, and provides aid to orphans and the needy. Key initiatives include Eid celebrations and sacrificial meat distribution, fostering hope and unity in the community.
    `,
    detailHeader: "Helpline Islamic Activity",
  },
  digiLabs: [
    {
      title: "What is DigiSkills?",
      description:
        "DigiSkills is Pakistan’s first online training program to empower youth with in-demand skills for the freelance market. The courses are in a mix of Urdu-English for accessibility.",
    },
    {
      title: "Why join?",
      description:
        "Enhance your skills and earn through freelancing. Learning these skills will enable you to become part of the rapidly growing freelance market. The program is completely free!",
    },
    {
      title: "Is this a Government program?",
      description:
        "Yes, DigiSkills is an initiative of the Government of Pakistan spearheaded by the Ministry of IT & Telecom through Ignite – National Technology Fund and executed by Virtual University of Pakistan.",
    },
    {
      title: "When do enrollments open?",
      description:
        "Enrollments for Batch-05 opened on 5th June 2023. Enrollment is on a first-come, first-served basis.",
    },
    {
      title: "When do classes start?",
      description: "Classes for Batch-05 started on 4th July 2023.",
    },
    {
      title: "Do I have to pay?",
      description:
        "No, the program is absolutely free! Just sign up and enroll in your preferred courses.",
    },
    {
      title: "Courses Offered",
      courses: [
        "Freelancing (Mandatory for first-time trainees)",
        "E-Commerce Management",
        "Creative Writing",
        "Graphic Design",
        "QuickBooks",
        "WordPress",
        "AutoCAD",
        "Search Engine Optimization (SEO)",
        "Digital Marketing",
        "Digital Literacy",
        "Virtual Assistant",
        "Affiliate Marketing",
        "Communication & Soft Skills",
        "Video Editing, Animation & Vlogging",
        "Data Analytics & Business Intelligence",
      ],
    },
    {
      title: "Technical Requirements",
      description:
        "You need a stable internet connection and a desktop, laptop, or Android phone. You can also download the DigiSkills app from Google Play Store.",
      link: "https://play.google.com/store/apps/details?id=pk.digiskills.lms",
    },
    {
      title: "Training Location",
      description:
        "All training is online through the DigiSkills Learning Management System (LMS). You can access videos, materials, and course content at your convenience from home or office.",
    },
    {
      title: "How do I study?",
      description:
        "All the videos and learning material for each module will be available on DigiSkills Online Learning Platform. You can self-pace the training or you can follow the announced time table which will be available on Portal.",
    },
    {
      title:
        "Will this initiative offer jobs to freelancers or is it just to train them?",
      description:
        "This program has been launched to train people in those skills that are demanded in freelance markets. It will not offer jobs to trainees, rather, it will offer skill-based trainings, which will enable them to get projects from freelance markets.",
    },
    {
      title:
        "What is the maximum limit of courses I can take summed over all the batches?",
      description:
        "There are a total of 15 courses that are being offered in this program. In one batch, a trainee can take up to a maximum of two (2) courses. In this way, you can get training of all the 15 courses in 8 batches. The limit is imposed to make sure a trainee gets the maximum value out of the course(s) they are enrolled in and can actively participate in discussions, coaching, and assignments.",
    },
    {
      title: "Do I need professional advice in selection of the course(s)?",
      description:
        "Which course is suitable for you depends on your interest and to some extent on your previous education. All courses are of equal importance. The Freelancing course is mandatory if you are enrolling in DigiSkills.pk for the first time, whereas, from the remaining courses, you can select any course which excites you. Course introductions and learning outcomes that are available on the web portal can help you decide.",
    },
    {
      title:
        "How can I signup and enroll in the courses offered by the training program?",
      description: `You can sign up for this program by visiting.After Signup, you can enroll in any two courses of your choice. Freelancing is a mandatory course for the trainees enrolling the course(s) for the first time. Enrollment will open one month prior to the commencement of each upcoming batch.`,
      link: "https://digiskills.pk/Register.aspx",
    },
    {
      title:
        "I have registered with DigiSkills.pk, but unable to activate my account.",
      description:
        "You can Sign in with your registered Email Address using your current Password and regenerate the activation email to activate your account.",
    },
    {
      title:
        "I have enrolled in the courses, but unable to access study material and videos of the courses?",
      description:
        "The course-related study material, videos, and all related links such as Course Website, Announcements, and Discussions, etc., will be accessible after the start of the batch. We encourage you to sign up and you will automatically be notified once the batch starts.",
    },
    {
      title: "How can I reset my lost Password?",
      description:
        "You can reset your password yourself through the 'Forgot Password' link available on the 'Sign In' page and follow the given instructions. If the problem persists, you can contact the support team using the Contact Us interface.",
    },
    {
      title:
        "When will the videos and course contents of each week be available on LMS to the registered students?",
      description:
        "The content and videos of each week will be made available on the respective Monday by 11:00 AM.",
    },
    {
      title: "How to use LMS?",
      description:
        "The following link will help you in understanding the use of LMS",

      link: "https://lms.digiskills.pk/OrientationVideo.aspx",
    },
    {
      title: "How to watch videos through LMS?",
      link: "Login to https://lms.digiskills.pk/",
      courses: [
        "You will find your enrolled courses directly from the Home Screen on your LMS under “My Courses (DSTP2.0-BATCH-04)” section. Click on the respective course, and you will be redirected to the “Topic content” tab. Here you can watch the Videos of the current week.",
        "To go to the next topic video, click on “Next Topic” link available on the top right side.",
        "After logging in to your LMS account, click on “Course Website” icon under “My Courses (DSTP2.0-BATCH-04)” section.",
        "Here you will see the topics of the current and previous weeks under ‘Course topics’ tab.",
        "Click on ‘Week’ of which you want to watch Videos.",
        "Click on any topic; it will redirect you to the “Topic Content” tab. Here you can watch the Video.",
        "To go to the next topic video, click on “Next Topic” link available on the top right side.",
      ],
    },
    {
      title: "What if I need to ask a question?",
      courses: [
        "Discussion board: If you are an enrolled trainee, then visit the discussion board of LMS to post your query. On the discussion board, you can ask a question, help other trainees by commenting on their queries, and see previous queries related to that specific topic.",
        "Online support: You can send your general queries related to LMS, Course, and other matters related to DigiSkills.pk.",
        "Mobile phone number: You can call on 0304-111-1570, and ask your question directly from the coach.",
      ],
    },
    {
      title: "Will I get any certificate after completing the training?",
      description:
        "Yes, you will get an e-Certificate from DigiSkills Training Program if you fulfill the course completion criteria. DigiSkills e-Certificate will be issued by the Virtual University of Pakistan.",
    },
    {
      title:
        "What is the completion criteria to get E-certificate for any course of DigiSkills.pk?",
      description:
        "According to course completion criteria, trainees will need to secure 50% score to become eligible for an E-certificate.",
      courses: [
        "Watching Topic Videos through LMS = 60%",
        "Quizzes = 25%",
        "Hands-on Exercises = 15%",

        "If you watch 70% videos, attempt 60% quizzes and submit 50% Hands-on exercises, your total score will be as follows:",
        "Video score: 42",
        "Quiz score: 15",
        "Exercise score: 7.5",
        "Total score: 64.5 (eligible for E-certificate)",
      ],
    },
    {
      title: "How can we get a hard copy of E-Certificate?",
      description:
        "The eligible trainees will only get the soft copy of a verified e-certificate for each of their respective courses. You can access a verified e-certificate as soon as course certificates become available in your Learning Management System.",
      courses: [
        "Click on the Above button under the Trainee Services section (available on the homepage).",
        "Now click on the View option for any of the completed courses, it will redirect you to the e-certificate.",
        "Download and Print options are available on the top right corner of that page.",
      ],
      link: "https://lms.digiskills.pk",
    },
    {
      title:
        "Can I access content of the courses I enrolled in the previous batches?",
      description:
        "You can only access Videos, Hands-on Exercises, and their solutions of previously enrolled courses under the 'My Previous Courses' section on LMS. However, other content like Handouts, Internet Links, Books, etc. will not be available.",
    },
    {
      title:
        "After the completion of training, how can I get work from freelance markets?",
      description:
        "This program will help the trainees to learn new skills. As soon as a trainee learns any skill, he/she can create an online profile on any freelance marketplace. Trainees are encouraged to find jobs online on their own through freelancing platforms. During the training, our coaches will help you in creating your profile and guide in bidding for the projects in freelance markets.",
    },
    {
      title:
        "I missed some videos and course material. Can I access them later on LMS?",
      description:
        "You can access all Videos of the previous courses you were enrolled in but once a batch concludes then other learning material like hand-outs, books will not be available so please download and save them during the batch.",
    },
    {
      title: "How can I contact my Coach via call",
      description:
        "If you have any course-related queries, then you can call the relevant team at 0304-1111570 and dial the extension of your desired course:",
      courses: [
        "Freelancing",
        "Virtual Assistant",
        "Digital Marketing",
        "Affiliate Marketing",
        "Communication & Soft Skills",
        "Creative Writing",
        "Video Editing, Animation & Vlogging",
        "WordPress",
        "Graphic Design",
        "SEO",
        "Digital Literacy",
        "AutoCAD",
        "QuickBooks",
        "E-Commerce Management",
        "Video Editing, Animation & Vlogging",
        " Data Analytics & Business Intelligence",
      ],
    },
  ],
  newsFeedData: [
    {
      id: 1,
      image: "/img/news/newsfeed22.jpg",
      category: "Charity Water",
      title: "Healthy food for everyone in a campaign.",
      author: "Admin",
      date: "24th June 2021",
      link: "/blog-details",
    },
    {
      id: 2,
      image: "/img/news/newsfeed11.jpg",
      category: "Charity Goods",
      title: "Desired goods for all in a campaign.",
      author: "Admin",
      date: "24th June 2021",
      link: "/blog-details",
    },
    {
      id: 3,
      image: "/img/news/newsfeed33.jpg",
      category: "Charity Medicine",
      title: "Expected clothes for all in a campaign.",
      author: "Admin",
      date: "24th June 2021",
      link: "/blog-details",
    },
  ],
  formFields: [
    {
      label: "Designation",
      name: "designation",
      placeholder: "Enter Your Designation...",
      required: true,
    },
    {
      label: "Full Name",
      name: "fullName",
      placeholder: "Enter Your Full Name...",
      required: true,
    },
    {
      label: "Father's Name",
      name: "fatherName",
      placeholder: "Enter Your Father Name...",
      required: true,
    },
    {
      label: "CNIC",
      name: "cnic",
      placeholder: "Enter Your CNIC...",
      required: true,
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      placeholder: "Enter Your Phone Number...",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Your Email...",
      required: true,
    },
    {
      label: "Date of Joining",
      name: "dateOfJoining",
      type: "date",
      required: true,
    },
    {
      label: "Address",
      name: "address",
      type: "textarea",
      placeholder: "Enter Your Home Address...",
      required: true,
    },
    {
      label: "Select One Option",
      name: "maritalStatus",
      type: "select",
      options: ["Married", "Unmarried"],
      required: true,
    },
    {
      label: "If Married, No. of Wifes",
      name: "noOfWives",
      type: "select",
      options: Array.from({ length: 5 }, (_, i) => i + 1).map((val) => ({
        label: val,
        value: val,
      })),
      placeholder: "None",
    },
    {
      label: "Wife Name/s",
      name: "wifesNames",
      placeholder: "Enter Full Name of Your Wife...",
    },
    {
      label: "No. of Children",
      name: "noOfChildren",
      type: "select",
      options: Array.from({ length: 10 }, (_, i) => i + 1).map((val) => ({
        label: val,
        value: val,
      })),
      placeholder: "None",
    },
    {
      label: "Name of the Children",
      name: "childrenNames",
      placeholder: "Enter Name of Your Children...",
    },
    {
      label: "Mother",
      name: "mother",
      placeholder: "Enter Your Mother Name...",
    },
    {
      label: "Transport",
      name: "transport",
      type: "select",
      options: ["None", "Bike", "Car", "Bus"],
      placeholder: "Select Transport Type",
    },
    {
      label: "Make & Type",
      name: "makeAndType",
      placeholder: "Enter Make & Type...",
    },
    { label: "Model", name: "model", placeholder: "Enter Model..." },
    {
      label: "Reg. Number",
      name: "regNumber",
      placeholder: "Enter Registration Number...",
    },
    {
      label: "Any Other Information",
      name: "otherInfo",
      type: "textarea",
      placeholder: "Enter Additional Information...",
    },
    { label: "Date of Submission", name: "dateOfSubmission", type: "date" },
  ],
};
