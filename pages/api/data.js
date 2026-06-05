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
    title: "Education that Opens Doors",
    supportButtonText: "SUPPORT EDUCATION",
    headerBg: "img/causes/cause17.jpg",
    videoSrc: "https://www.youtube.com/embed/TZKNHw18OhM",
    heading: "Education for Children Who Need It Most",
    description: `
      Education changes the direction of a child's life. It gives confidence, discipline, hope, and the ability to dream beyond present circumstances. Helpline Welfare Trust works to make education possible for children from low-income and underserved communities by supporting schools, students, and learning environments across Pakistan. Through the Al-Kitab education system and related support efforts, Helpline helps children continue their studies in safe and supportive learning environments. The work includes Helpline-operated schools, adopted schools, student support, orphan care, Quran education, and expansion projects that aim to serve even more children in the years ahead.
    `,
  },
  HelplineHealthData: {
    title: "Healthcare & Clean Water",
    supportButtonText: "SUPPORT HEALTHCARE",
    headerBg: "img/causes/karbathheader.png",
    videoSrc: "https://www.youtube.com/embed/G25BUguOoEc",
    heading: "Healthcare and Clean Water for Families Who Cannot Afford to Wait",
    description: `
      Good health is not a luxury. It is a basic need that affects every part of life. Helpline Welfare Trust supports free medical services, medicine access, eye care, and water solutions that reduce illness and make daily life safer.
  
      Over 2,000 water pumps installed across Pakistan, 1,000+ free cataract operations, and 3,000+ free medical care cases reflect the scale and commitment of this work.       Support healthcare and clean water to help Helpline deliver treatment, medicine, safe water, and life-changing care to families who need it most.
  

    `,
  },
  HelplineLivelihoodData: {
    title: "Skills, Training & Livelihoods",
    supportButtonText: "SUPPORT LIVELIHOODS",
    headerBg: "/img/causes/livelihood-header.jpg",
    heading: "Skills That Help Families Stand on Their Own Feet",
    description: `
      Not every form of support should end with short-term relief. In many cases, the most meaningful help is the kind that equips a person to support themselves and their family with confidence. Helpline Welfare Trust supports practical skills, training opportunities, and livelihood pathways that help people earn with dignity and move toward self-reliance.

      This focus area brings together vocational training, skill development, digital learning, and livelihood support. The purpose is simple: help deserving individuals, especially youth and women, develop useful skills that can improve their economic condition and strengthen their role within the family and community.
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
      label: "AWARENESS",
      description:
        "Use your network to promote the NGO’s mission, share their work on social media, or organize events to spread the word and attract more supporters.",
      link: "/donation",
      Color: "pbar_1",
    },
    {
      image: "/img/causes/cause17.jpg",
      percentage: "80",
      label: "DONATE",
      description:
        "Contribute financially to generously support Helpline’s vital programs, effectively helping them fund their successfully reach more people in urgent need.",
      link: "/donation",
      Color: "pbar_2",
    },
    {
      image: "/img/causes/cause3.jpg",
      percentage: "50",
      label: "VOLUNTEER",
      description:
        "Offer your time and skills to assist with the NGO's operations, whether in-person or remotely, and actively participate in their community projects.",
      link: "/donation",
      Color: "pbar_3",
    },
  ],
  donationMethods: [
    {
      title: "JAZZ CASH / EasyPaisa ",
      description:
        "Direct deposits or transfers can be made into our UBL Account at any of the banks.",
      buttonLabel: "063563501118170",
      buttonType: "bankButton",
      href: "./donation",
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
        "You can donate online using any Visa or MasterCard anywhere from the World. Secure payment powered by UBL Pay.",
      buttonLabel: "Donate Now",
      buttonType: "donateButton",
      href: "/donation",
    },
  ],
  HelplineCriteriaData: [
    {
      id: 1,
      icon: "📝",
      description: "Accept Application from deserving family",
    },
    {
      id: 2,
      icon: "🔍",
      description: "Investigates the Applicant",
    },
    {
      id: 3,
      icon: "🤝",
      description: "Provide immediate Help in terms of Cash/ Service",
    },
    {
      id: 4,
      icon: "💵",
      description: "Rehabilitate by providing financial Support",
    },
  ],
  ownSchools: [
    {
      id: 23,
      category: ["Own School"],
      img: "/img/bg/breadcrumb_bg_4.jpg",
      img1: "/img/causes/DJI_0010.JPG",
      img2: "/img/causes/DJI_0018.JPG",
      img3: "/img/causes/history.jpg",
      img4: "/img/causes/history.png",
      img5: "/img/causes/upgraded.png",
      img6: "/img/causes/upgraded1.JPG",
      img7: "/img/causes/future.jpg",
      img8: "/img/causes/future1.jpg",
      link: "https://www.youtube.com/embed/uW6QxzriY1A",
      link3: "https://www.youtube.com/embed/6RliogbPdII",
      ActualName: "Al-Kitab Higher Secondary School",
      detail:
        "Al-Kitab provides free education to underprivileged children, ensuring growth.",
      description:
        "Al-Kitab Higher Secondary School – Empowering Through Free Education As of today, Al-Kitab Higher Secondary School stands as a remarkable beacon of hope and transformation in Rana Town, Lahore. The school is currently providing completely free-of-cost education to over 1,100 students, including 645 girls and more than 500 boys. This milestone is not just a number—it represents lives changed, futures reshaped, and a community uplifted through the power of education. ",
      historyTitle: "History of Al-Kitab Higher Secondary School",
      UpgradeTitle: "Upgradation of Al-Kitab Higher Secondary School",
      FutureTitle: "Future of Al-Kitab Higher Secondary School",
      desc: "Al-Kitab Education System School Shaikhupura (Abid Town ).",
      detail2:
        "The journey of Al-Kitab School began humbly in 2015, on a 10-acre piece of donated land that once housed an abandoned poultry farm. What started with only 15 students and a handful of committed educators has now become a full-fledged educational institution serving hundreds of underprivileged families. The founders envisioned a school that would provide quality education to children who otherwise had no access to learning, and today that vision has become a thriving reality.",
      detail3:
        "We also provide additional support to students who require it, such as counselling and extra academic assistance, to ensure that they reach their full potential. Al-Kitab is more than just a school; it is a community that is committed to creating a better future for our students and their families. We are proud of the work that we do and are dedicated to continuing to provide support to children in need.",
      detail4:
        "Despite its success, Al-Kitab Higher Secondary School has now reached its maximum capacity. The existing infrastructure can no longer accommodate the growing demand for admissions. With more and more families seeking a better future for their children, the school is in urgent need of a new six-story building to continue expanding its life-changing mission. Without this crucial development, many children will remain out of school, trapped in the cycle of poverty and illiteracy.Al-Kitab Higher Secondary School is a living testament to what can be achieved with dedication, vision, and community support. But the journey is far from over—the next step requires collective effort to build more space, provide more opportunities, and transform even more lives.",
      color: "#f15b43",
    },
    {
      id: 18,
      category: ["Own School"],
      img: "/img/causes/irtiqa.png",
      img1: "/img/causes/irtiqa1.jpg",
      img2: "/img/causes/irtiqa2.png",
      img3: "/img/causes/DSC_0172.JPG",
      img4: "/img/causes/DSC_0290.JPG",
      img5: "/img/causes/irtiqafuture1.JPG",
      img6: "/img/causes/future2.JPG",
      img7: "/img/causes/waterirtiqa.JPG",
      img8: "/img/causes/waterirtiqa2.JPG",

      link: "https://www.youtube.com/embed/3ZCDpJxgIGk",
      link2: "https://www.youtube.com/embed/UuphWKN263I",
      ActualName: "Irtaqa-e-Itfal High School",
      detail:
        "Al-Kitab provides free education to underprivileged children, ensuring growth.",
      description:
        "Irtaqa-e-Itfal School – A Beacon of Hope in Manawan, Lahore Transforming Lives Through Free Education and Community Support Irtaqa-e-Itfal School, located in the heart of Manawan, Lahore, stands as a shining example of compassion, resilience, and empowerment. Dedicated to uplifting the lives of the underprivileged, the school provides free-of-cost quality education to over 1,000 deserving students—most of whom were previously out of school due to financial hardship.",
      desc: "Al-Kitab Education System School Lahore (Manawan).",
      historyTitle: "Holistic Approach of Irtaqa-e-Itfal High Schooll",
      UpgradeTitle: "Securing Futures of Irtaqa-e-Itfal High School",
      FutureTitle: "Clean Water for Irtaqa-e-Itfal High School",
      detail2:
        "Beyond Books: A Holistic Approach to Uplift Communities Education at Irtaqa-e-Itfal goes beyond the classroom. The school ensures that every student receives: Free uniforms, textbooks, and school supplies Regular medical check-ups to monitor and maintain student health Nutritious dry rations for the most deserving families, helping combat food insecurity",
      detail3:
        "Empowering Mothers, Securing Futures Recognizing the crucial role of women in breaking the cycle of poverty, Irtaqa-e-Itfal School also offers vocational training in stitching and embroidery to single mothers of enrolled students. This initiative helps women gain valuable skills to earn a sustainable livelihood and support their families with dignity.",
      detail4:
        "Clean Water for All In response to the pressing issue of waterborne illnesses in the area, the school has installed a Reverse Osmosis (RO) filtration plant, providing clean, safe drinking water to not just the school community but also the local residents. At Irtaqa-e-Itfal School, we believe that every child deserves a chance to learn, grow, and thrive—regardless of their background. With your support, we can continue to transform lives, one child and one family at a time. Join us in building a brighter, more equitable future for the children of Manawan.",
      color: "#65cabb",
    },
    {
      id: 33,
      category: ["Own School"],
      img: "/img/causes/futureplan1.png",
      img1: "/img/causes/gullowali2.jpg",
      img2: "/img/causes/gullowali3.jpg",
      img3: "/img/causes/underconstruction2.jpg",
      img4: "/img/causes/gullowali111.jpg",
      img7: "/img/causes/futureplan1.png",
      img8: "/img/causes/futureplan2.png",
      detail:
        "Al-Kitab provides free education to underprivileged children, ensuring growth.",
      ActualName: "Al-Kitab School Rajanpur (Gullowali)",

      desc: "Al-Kitab Education System School Rajanpur (Gullowali).",
      color: "#5fb35b",
      description:
        "Al-Kitab School Rajanpur (Gullowali) is a project of Helpline Welfare Trust NGO, dedicated to providing quality education to children from underprivileged backgrounds in one of the most underserved areas of the region. The school is being established with the vision of creating an accessible learning environment where every child, regardless of financial circumstances, can receive an excellent education. More than 75% of students will study free of cost with full NGO support, while the remaining will pay a minimal fee to help cover basic operational expenses. Alongside a strong academic curriculum, the school will also focus on personal growth, character development, and creating opportunities for a brighter future.",
      historyTitle: "Under Construction Al-Kitab School Rajanpur (Gullowali)",
      detail2:
        "Currently under construction, Al-Kitab School will fill a critical educational gap in a community where, within a 25 km radius, only a handful of primary schools exist. This makes the project not just important but essential for ensuring that children have access to quality learning. The institution will also prioritize women’s education, offering Islamic studies and Quran learning programs, so that future generations grow up with strong moral, ethical, and spiritual foundations. To bring this vision to life, we urgently need donations for construction, furnishing, and classroom setup. Your support will directly contribute to opening doors of knowledge, hope, and opportunity for the children and families of Rajanpur.",
      FutureTitle: "Future of Al-Kitab School Rajanpur (Gullowali)",
      detail4:
        "Our long-term vision for Al-Kitab School is to expand beyond primary and secondary education, growing step-by-step into a college and eventually a full-fledged university. This will allow students from the community to pursue higher education without leaving their hometown, breaking the cycle of limited opportunities in the region. By integrating both modern academics and Islamic education, we aim to create a balanced and capable generation that can lead with knowledge, values, and faith. Your contributions today will not only help complete the school but will lay the foundation for an educational institution that will transform lives for decades to come.",
    },
    {
      id: 25,
      category: ["Own School"],
      img: "/img/causes/rehmat.jpeg",
      img1: "/img/causes/chrehmat1.png",
      img2: "/img/causes/rehmat2.png",
      img3: "/img/causes/rehmat3.png",
      img4: "/img/causes/rehmat4.png",
      // img5: "/img/causes/alkitab3.jpg",
      // img6: "/img/causes/alkitab4.jpg",
      // img7: "/img/causes/alkitab5.jpg",
      // img8: "/img/causes/alkitab6.jpg",
      // link: "https://www.youtube.com/embed/uW6QxzriY1A",
      // link3: "https://www.youtube.com/embed/6RliogbPdII",
      ActualName: "Ch Rehmat Ali Higher Secondary School for Boys",
      detail:
        "Al-Kitab provides free education to underprivileged children, ensuring growth.",
      description:
        "Aligarh Educational Complex in Gojra is a project owned by Helpline NGO, aimed at providing free education to underprivileged students. The complex comprises a school, a computer lab, a library, and a hostel. The school has a team of highly qualified teachers who are committed to providing quality education to children from low-income families. The computer lab at the complex is equipped with the latest technology and offers students the opportunity to learn computer skills. The library is stocked with a wide range of books, which provides students with access to a wealth of knowledge and information. The hostel offers comfortable accommodation for students who live far away from the school and ensures that they have a safe and secure environment to study in. Aligarh Educational Complex in Gojra is making a significant contribution to the community it serves. The school’s focus on providing quality education to underprivileged children has helped to break the cycle of poverty and provide a brighter future for many families.",

      desc: "Al-Kitab Education System School, TobaTekSingh (Gojra).",
      historyTitle: "Holistic Approach of Aligarh Educational Complex",
      UpgradeTitle: "Securing Futures of Aligarh Educational Complex",
      FutureTitle: "Clean Water for Aligarh Educational Complex",
      detail2:
        "Beyond Books: A Holistic Approach to Uplift Communities Education at Irtaqa-e-Itfal goes beyond the classroom. The school ensures that every student receives: Free uniforms, textbooks, and school supplies Regular medical check-ups to monitor and maintain student health Nutritious dry rations for the most deserving families, helping combat food insecurity",
      detail3:
        "Empowering Mothers, Securing Futures Recognizing the crucial role of women in breaking the cycle of poverty, Irtaqa-e-Itfal School also offers vocational training in stitching and embroidery to single mothers of enrolled students. This initiative helps women gain valuable skills to earn a sustainable livelihood and support their families with dignity.",
      detail4:
        "Clean Water for All In response to the pressing issue of waterborne illnesses in that slum area, the school has installed a Reverse Osmosis (RO) filtration plant, providing clean, safe drinking water to not just the school community but also the local residents. At Irtaqa-e-Itfal School, we believe that every child deserves a chance to learn, grow, and thrive—regardless of their religion and background. With your support, we can continue to transform lives, every child and every family. Join us in building a brighter, more equitable future for the children of Manawan.",
      color: "#f15b43",
    },
    {
      id: 26,
      category: ["Own School"],
      img: "/img/causes/imanmaryam.png",
      img1: "/img/causes/sideangle.png",
      img2: "/img/causes/maryamgirls.png",
      img3: "/img/causes/roote.jpg",
      img4: "/img/causes/rooted1.jpg",
      img7: "/img/causes/womenedu1.jpg",
      img8: "/img/causes/womenedu2.jpg",

      link: "",
      link3: "",
      ActualName:
        "Iman Maryam Girls Higher Secondary School Alighar Education Complex",
      detail: "Free education for brighter futures.",
      description: `Aligarh Educational Complex – A Legacy of Learning and Service  
    The Aligarh Educational Complex, located in 244 G.B, continues to be a source of empowerment for over 1,400 students across three schools. Among them is:
    Iman Maryam Girls’ Higher Secondary School – serving more than 600 girls with access to free, high-quality education and pick-and-drop services.  
    This initiative ensures that no girl is held back due to financial hardship or travel difficulties, allowing them to focus fully on their studies and future.`,
      desc: "Iman Maryam Girls Higher Secondary School Alighar Education Complex (Gojra)",
      historyTitle: "A Vision Rooted in Empowerment",
      UpgradeTitle: "Helpline’s Ongoing Commitment to Girls’ Education",
      FutureTitle: "Building Confident, Educated Women for Tomorrow",
      detail2: `Founded in 2002 in response to overwhelming demand after the boys’ school launch, Iman Maryam Girls’ Higher Secondary School was established to offer equal opportunity education for girls.  
    It was built on a separate, purpose-built campus and even included hostel facilities to accommodate students from distant areas.  
    In 2013, Helpline Lahore adopted the management of the entire complex after the founder’s passing, enhancing operations, modernizing infrastructure, and ensuring uninterrupted educational support for hundreds of girls.`,
      detail3: `Helpline Lahore continues to drive the school’s growth with targeted investments and initiatives.  
    👧 Free Uniforms, Textbooks, and Stationery – removing all cost barriers  
    🏗️ Renovation of Girls' School Campus – 2.2 Million PKR spent to uplift learning conditions  
    💼 Qualified Female Educators – appointed through rigorous staff replacement drive  
    🎯 Emphasis on Holistic Development – academic, leadership, and extracurricular training  
    🚌 Transportation Services – enabling safe travel from remote areas  
    🌾 Rural Outreach – benefiting young girls from 22 surrounding villages`,
      detail4:
        "Through strategic investment and deep compassion, Helpline Lahore ensures the school continues to empower the next generation of confident, educated women—each ready to lead, uplift, and transform her community.",
      color: "#65cabb",
    },

    {
      id: 27,
      category: ["Own School"],
      img: "/img/causes/smart2.png",
      img1: "/img/causes/smart.png",
      img2: "/img/causes/eman1.jpeg",

      img5: "/img/causes/foundition1.png",
      img6: "/img/causes/foundition2.png",
      img7: "/img/causes/begin.JPG",
      img8: "/img/causes/begin1.JPG",
      link: "https://www.youtube.com/embed/7sh2krvAEZY",
      link3: "https://www.youtube.com/embed/_hliltW3iEM",
      ActualName: "Emman Maryam Smart School Alighar Education Complex",
      detail: "Free education for brighter futures.",
      description: `Aligarh Educational Complex – A Legacy of Learning and Service  
    Within the same powerful framework of educational empowerment, the Emman Maryam Smart School caters to more than 300 primary-level children.  
    This school represents the foundation of lifelong learning, where underprivileged children receive quality education, loving mentorship, and the confidence to dream bigger.`,
      desc: "Emman Maryam Smart School Alighar Education Complex (Gojra)",
      historyTitle: "Where Young Minds Begin Their Journey",
      UpgradeTitle: "Helpline’s Focus on Foundational Learning",
      FutureTitle: "Smart Kids, Brighter Futures",
      detail2: `Established as the third arm of the Aligarh Educational Complex, the Smart School focuses on early childhood and primary education for children who may otherwise have no access to schools.  
    The vision is simple yet powerful—begin education early, make it fun and effective, and empower children for higher success later in life.  
    When Helpline Lahore took charge in 2013, they prioritized this segment by investing in purpose-built infrastructure and child-friendly learning spaces.`,
      detail3: `Helpline Lahore’s mission for the Smart School is rooted in technology, engagement, and equity.  
    🏫 Brand-New Smart School Campus – fully constructed for a cost of 0.3 Million PKR  
    🧸 Early Learning Tools & Resources – age-appropriate, interactive, and engaging  
    💻 Computer Lab Setup – 24 systems installed to develop digital literacy early  
    🪑 Smart School Furniture – 0.25 Million PKR spent on child-friendly furnishings  
    👩‍🏫 Qualified Primary Teachers – passionate and trained to handle young learners  
    📚 Personalized Learning Paths – ensuring no child is left behind  
    🌍 Strong Community Support – reaching children from surrounding rural villages`,
      detail4:
        "With its tailored focus on primary education, the Emman Maryam Smart School prepares young children to enter the future with curiosity, resilience, and purpose—paving the way for a brighter Pakistan.",
      color: "#5fb35b",
    },
    {
      id: 24,
      category: ["Own School"],
      img: "/img/causes/alkitabghani1.jpg",
      img1: "/img/causes/1.jpg",
      img2: "/img/causes/2.jpg",
      img3: "/img/causes/chani11.jpg",
      img4: "/img/causes/chani22.jpg",
      img5: "/img/causes/chani5.jpg",
      img6: "/img/causes/chani6.jpg",
      detail:
        "Al-Kitab provides free education to underprivileged children, ensuring growth.",
      description:
        "Alkitab Primary School was established in 2021 in a small village of Tehsil Ahmedpur Sharqia by Helpline, a nonprofit organization. The school building was generously donated by Mr. Jam Hazoor Bakhsh. Starting with just 15 out-of-school children from nearby villages, the school has grown significantly and now educates 83 students. With a dedicated team of six teachers, Alkitab Primary School provides quality education to underprivileged children, helping bridge the educational gap in the region. The institution remains committed to empowering young minds and fostering community development through learning.",
      historyTitle: "The Green Growth Initiative ",
      UpgradeTitle: "Celebrating the Independence Day",
      detail3:
        "The Independence Day celebration at Al-Kitab Education System School, Bahawalpur (Chani Goth) was a vibrant and patriotic event filled with joy and enthusiasm. The program began with the hoisting of the national flag, followed by the recitation of the national anthem, creating a spirit of unity and pride among students and teachers. Children showcased their talents through speeches, national songs, and tableaus that highlighted the sacrifices of our heroes and the importance of freedom. The school premises were decorated with green and white flags, balloons, and banners, giving a festive look to the occasion. Teachers delivered motivational talks on the value of independence and the role of youth in building a stronger Pakistan. With active participation from parents and community members, the event fostered a sense of belonging, patriotism, and commitment to the nation’s progress, making the day truly memorable for everyone involved.",
      detail2:
        "The Green Growth Initiative was launched in 2021 by Helpline, a nonprofit organization, to promote environmental awareness and sustainability in Tehsil Ahmedpur Sharqia. The project began with the generous support of local community members, who donated land for a small nursery. Starting with just 50 saplings, the initiative has expanded into a vibrant green space with over 1,000 plants and trees. Managed by a dedicated team of volunteers, the program not only enhances the beauty of the surroundings but also educates local residents, especially children, about the importance of environmental conservation. Through regular planting drives and community engagement, the Green Growth Initiative continues to inspire a culture of care for nature and a greener future for the region.",
      desc: "Al-Kitab Education System School,  Bahawalpur  (Chani Goth).",
      ActualName: "Al-Kitab Education System School,  Bahawalpur",
      color: "#5fb35b",
    },
    {
      id: 39,
      category: ["Own School"],
      img: "/img/bg/breadcrumb_bg_4.jpg",
      img1: "/img/causes/alkitab3.jpg",
      img2: "/img/causes/alkitab4.jpg",
      detail:
        "Al-Kitab provides free education to underprivileged children, ensuring growth.",
      description:
        "Al-Kitab is a school that was established by Helpline NGO with the objective of providing quality education to children from underprivileged backgrounds. The school has a unique fee structure where more than 75 % of students receive support from the NGO and are able to attend the school for free. The remaining 25 % of students pay a minimal fee, which is used to cover basic operational expenses. ",

      desc: "Al-Kitab School of Technology Shaikhupura (Abid Town ).",
      ActualName: "Al-Kitab School of Technology ",
      detail2:
        "At Al-Kitab, we believe that every child deserves access to quality education, regardless of their financial background. Our curriculum is designed to provide a well-rounded education that focuses on academic excellence, personal growth, and character development.",
      detail3:
        "We also provide additional support to students who require it, such as counselling and extra academic assistance, to ensure that they reach their full potential. Al-Kitab is more than just a school; it is a community that is committed to creating a better future for our students and their families. We are proud of the work that we do and are dedicated to continuing to provide support to children in need.",
      color: "#65cabb",
    },
  ],
  adoptedSchools: [
    {
      id: 38,
      category: ["Adopted Schools"],
      img: "/img/causes/banazir1.png",
      img1: "/img/causes/PHOTO-2025-02-19-11-45-31.jpg",
      img2: "/img/causes/banazir2.png",
      img3: "/img/causes/banazir5.png",
      img4: "/img/causes/banazir4.png",
      img5: "/img/causes/banazir3.png",
      img6: "/img/causes/benazir6.png",
      detail:
        "Empowering girls through quality education and comprehensive support services.",
      description: `Established in memory of the late Prime Minister of Pakistan, Benazir Bhutto, the school was founded with the vision of empowering young girls through education in a community where opportunities for them were scarce. Today, it stands as a proud institution educating more than 2,200 underprivileged girls of the area, offering them a chance to break barriers and build better futures. Recently, Helpline adopted the school, taking full responsibility for its operations and development, ensuring that the mission of accessible, quality education for girls continues to grow stronger every day.`,
      pbar: "pbar_1",
      desc: "Benazir Public Girls Higher Secondary School (Nawabshah)",
      ActualName: "Benazir Public Girls Higher Secondary School",
      adopted: "Adopted",
      historyTitle: "From Struggling Institution to Center of Excellence",
      UpgradeTitle: "Helpline's Transformative Investment in Girls' Education",
      FutureTitle: "Building Tomorrow's Female Leaders",
      detail2: `Before Helpline’s intervention, Benazir Public Girls School faced significant challenges that threatened its survival. Inadequate infrastructure, lack of resources, and financial constraints limited its ability to serve the community effectively. Recognizing the transformative power of girls’ education in breaking the cycle of poverty, Helpline stepped in and revitalized the institution. Today, it has become a model school and a pillar of educational excellence in the region.`,
      detail3: `Helpline’s comprehensive adoption has strengthened every aspect of the school’s operations and academic delivery:
   Qualified Female Teachers – providing culturally appropriate role models
   Complete Educational Resources – free textbooks, stationery, and supplies
   Infrastructure Improvements – upgraded classrooms, safe buildings, and modern facilities
   Nutritional Support – meal programs so students can focus on learning
   Safe Transportation – enabling girls from distant areas to attend school securely
   Technology Integration – computer labs and digital learning opportunities
   Scholarship Programs – helping exceptional students pursue higher education
   Community Engagement – collaborating with families to encourage and sustain girls’ education`,
      detail4:
        "With its renewed strength, Benazir Public Girls School now acts as a catalyst for social change. Each girl who studies here is empowered with the knowledge, confidence, and skills to shape a brighter future—not just for herself but for her family and community. Through Helpline’s sustained commitment, the school continues to produce future leaders, professionals, and change-makers who carry forward the legacy of resilience, empowerment, and progress.",
      color: "#f15b43",
    },
    {
      id: 20,
      category: ["Adopted Schools"],
      img: "/img/causes/masari.jpg",
      img1: "/img/causes/misari1.png",
      img2: "/img/causes/masari2.jpg",
      img3: "/img/causes/misari3.png",
      img4: "/img/causes/misari4.png",
      img5: "/img/causes/misari5.png",
      img6: "/img/causes/misari6.png",
      detail:
        "Breathing life back into abandoned dreams through education and hope.",
      description: `Govt GPS. Misri Bheel School – From Closure to Revival  
    What was once a closed and abandoned government school in the remote community of Misri Bheel, Tando Allah Yar, has been transformed into a thriving center of learning through Helpline's dedicated intervention.  
    This remarkable story of educational resurrection demonstrates how strategic adoption and comprehensive renewal can restore hope to communities where children's futures once seemed forgotten.`,
      desc: "Govt GPS. Misri Bheel School (Tando Allah Yar)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#65cabb",
    },
    {
      id: 21,
      category: ["Adopted Schools"],
      img: "/img/causes/nabibakhsh.png",
      img1: "/img/causes/nabibakhsh1.png",
      img2: "/img/causes/nabibakhsh2.png",
      img3: "/img/causes/nabibakhsh3.png",
      img4: "/img/causes/nabibakhsh4.png",
      img5: "/img/causes/nabibakhsh5.png",
      img6: "/img/causes/nabibakhsh6.png",
      detail:
        "Transforming educational challenges into opportunities for rural excellence.",
      description: `Govt GPS. Nabi Baksh Gabool School – A Story of Educational Transformation  
    In the rural landscape of Tando Allah Yar, Govt GPS. Nabi Baksh Gabool School stands as a powerful example of how strategic adoption can transform struggling educational institutions into thriving centers of learning.  
    Through Helpline Welfare Trust's comprehensive intervention, this government primary school has evolved from a resource-starved institution into a beacon of hope for quality education in underserved communities.`,
      desc: "Govt GPS. Nabi Baksh Gabool School (Tando Allah Yar)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",

      color: "#5fb35b",
    },
    {
      id: 19,
      category: ["Adopted Schools"],
      img: "/img/causes/nimro.jpg",
      img1: "/img/causes/nimro.jpg",
      img2: "/img/causes/nimro1.jpg",
      img3: "/img/causes/nimro2.jpg",
      img4: "/img/causes/nimro3.jpg",
      img5: "/img/causes/nimro4.jpg",
      img6: "/img/causes/nimro5.jpg",

      detail:
        "GPS. Nimro Sharif School empowers students with quality education.",
      description:
        "Adoption Narrative: Once a neglected, low-enrollment campus with inadequate infrastructure and learning resources, Govt. Nimro Sharif School has been revitalized by Helpline Welfare Trust. Through comprehensive repairs, provision of teachers and learning materials, WASH facilities, and community re-enrolment efforts, the school now operates as a safe, well-resourced primary campus with regular classes, higher attendance, and improved learning outcomes.",
      pbar: "pbar_1",
      desc: "Sindh Govt Primary School, Mirpurkhas (Nimro Sharif) ",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#5fb35b",
    },

    {
      id: 22,
      category: ["Adopted Schools"],
      img: "/img/causes/laghari.jpg",
      img1: "/img/causes/laghari1.jpg",
      img2: "/img/causes/laghari2.jpg",
      img3: "/img/causes/laghari3.jpg",
      img4: "/img/causes/laghari4.jpg",

      detail:
        "GPS. Sardar Khan Laghari School empowers students with quality education.",
      description:
        "Helpline Welfare Trust has adopted Govt. Sardar Khan Laghari School from the government and comprehensively renewed it for a better future of Pakistan. What was once an under-resourced campus with low attendance and weak learning outcomes now operates as a well-maintained, student-centered school—equipped with repaired classrooms, reliable WASH facilities, qualified teachers, and complete learning materials. Through community outreach and re-enrolment drives, attendance and retention have improved, and students are receiving consistent, quality education in a safe environment.",

      desc: "GPS. Sardar Khan Laghari School (Mirpurkhas)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#65cabb",
    },
    {
      id: 9,
      category: ["Adopted Schools"],
      img: "/img/causes/rorugoth.jpg",
      img1: "/img/causes/rorugoth1.jpg",
      img2: "/img/causes/rorugoth2.jpg",
      img3: "/img/causes/rorugoth3.jpg",
      img4: "/img/causes/rorugoth4.jpg",
      ActualName: "Sindh Govt Primary School",
      detail:
        "Govt. Roru Goth School empowers students with quality education.",
      description:
        "Helpline Welfare Trust has adopted and renewed Govt. Roru Goth School to secure a better future for Pakistan’s children. What was once an under-resourced campus with poor infrastructure and low attendance is now a functioning, well-equipped school—featuring repaired classrooms, reliable WASH facilities, qualified teachers, and complete learning materials. With active community engagement and re-enrolment, students now attend regularly and benefit from consistent, quality education in a safe and supportive environment.",
      progressData: "65",
      desc: "GPS Roru Goth School (Mirpurkhas)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#5fb35b",
    },
    {
      id: 10,
      category: ["Adopted Schools"],
      img: "/img/causes/baglair.jpg",
      img1: "/img/causes/baglair1.jpg",
      img2: "/img/causes/baglair2.jpg",
      img3: "/img/causes/baglair3.jpg",
      img4: "/img/causes/baglair4.jpg",
      ActualName: "Sindh Govt Primary School",
      detail:
        "GPS. Bagliar Mithi School empowers students with quality education.",
      description:
        "Helpline Welfare Trust has adopted and renewed Govt. Bagliar Mithi School to secure a better future for Pakistan’s children. Once closed and forgotten, Govt. Bagliar Mithi School has been adopted and fully renewed by Helpline Welfare Trust. Through infrastructure repairs, provision of qualified teachers, complete learning materials, and restored WASH facilities, the campus has been brought back to life. With active community engagement and re-enrolment, the school now delivers consistent, quality primary education—turning a shuttered building into a thriving, hopeful future for the children of Tharparkar.",
      desc: "The Govt GPS. Bagliar Mithi School (Tharparkar)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#5fb35b",
    },
    {
      id: 11,
      category: ["Adopted Schools"],
      img: "/img/causes/kakrio.jpg",
      img1: "/img/causes/kakrio3.jpg",
      img2: "/img/causes/kakrio4.jpg",
      img3: "/img/causes/kakrio1.jpg",
      img4: "/img/causes/kakrio2.jpg",
      detail:
        "Govt. Kakrario Saman Mian School empowers students with quality education.",
      description:
        "The adoption of Govt. Kakrario Saman Mian School a helpline NGO has been a game-changer for the school, its students, and its teachers. The NGO has taken on the responsibility of supporting the school’s operations by providing financial assistance for the payment of teachers’ salaries, as well as other essential needs such as textbooks, school supplies, and maintenance of facilities. This support has been critical for the school, which serves a predominantly low-income student population. Through this partnership, the helpline NGO has been able to provide a range of resources and programs to support students’ learning and academic achievement. These resources include scholarships, mentorship programs, and academic support services, such as tutoring and study skills workshops. By providing these opportunities to underprivileged students, the NGO is helping to level the playing field and give these students a chance to succeed.",
      desc: "Sindh Govt Primary School, Tharparkar (Kakrario Saman Mian) ",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#5fb35b",
    },
    {
      id: 12,
      category: ["Adopted Schools"],
      img: "/img/causes/misaligoth.jpg",
      img1: "/img/causes/misaligoth1.jpg",
      img2: "/img/causes/misaligoth2.jpg",
      img3: "/img/causes/misaligoth3.jpg",
      img4: "/img/causes/misaligoth4.jpg",
      img5: "/img/causes/misaligoth5.jpg",
      img6: "/img/causes/misaligoth6.jpg",
      detail:
        "GPS. Misali Goth School empowers students with quality education.",
      description:
        "Helpline NGO’s support for the Govt. Misali Goth School is highly commendable, as it recognizes the importance of education in the development of communities. By providing financial assistance to the school, Helpline NGO is helping to ensure that students have access to quality education and a supportive learning environment. In addition to supporting the school itself, Helpline NGO also provides salaries to the employees, which is a significant contribution to the livelihoods of the staff. The provision of salaries to the employees is essential, as it helps to ensure that the school can attract and retain qualified and dedicated teachers and staff. This, in turn, contributes to the quality of education provided to students, and ultimately, to the school’s success. By providing this support, Helpline NGO is playing an essential role in the development of education in the community and is making a positive impact on the lives of both students and employees.",
      desc: "Sindh Govt Primary School, Tharparkar (Misali Goth) ",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#f15b43",
    },
    {
      id: 13,
      category: ["Adopted Schools"],
      img: "/img/causes/katho1.jpg",
      img1: "/img/causes/katho2.jpg",
      img2: "/img/causes/katho3.jpg",
      detail:
        "GPS. Katho Samma School empowers students with quality education.",
      description:
        "The adoption of Govt. Katho Samma School by a helpline NGO has had a transformative impact on the school, its students, and its teachers. The NGO has taken on the responsibility of providing financial assistance for the school’s operations, including paying the salaries of the teachers and providing essential supplies and resources for the students. This support has been critical for the school, which serves a predominantly low-income student population. Furthermore, the support that the NGO provides for the school’s teachers is invaluable. The NGO recognizes the vital role that teachers play in shaping students’ lives and is committed to ensuring that they are compensated fairly for their hard work. This support helps to incentivize high-quality teaching, which is essential for creating a positive and effective learning environment for students.",
      desc: "Sindh Govt Primary School, Tharparkar (Katho Samma) ",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#65cabb",
    },
    // {
    //   id: 34,
    //   category: ["Adopted Schools"],
    //   img: "/img/causes/nimro1.jpg",
    //   img1: "/img/causes/nimro2.jpg",
    //   img2: "/img/causes/nimro3.jpg",
    //   detail:
    //     "GPS Qazi Muhammad Ashraf School empowers students with quality education.",
    //   description:
    //     "The NGO has taken on the responsibility of providing financial support to the school, including paying the salaries of the teachers and providing essential supplies and resources for the students. This support has been crucial for the school, which serves a primarily low-income student population. Overall, the adoption of Govt. Nimro Sharif School by the helpline NGO is an outstanding example of how community-based organizations can work together to improve education outcomes for underprivileged students. By providing resources and support for both students and teachers, the NGO is making a significant impact on the lives of those in the community.",
    //   pbar: "pbar_1",
    //   desc: "Sindh Govt Primary School, Tharparkar (Nimro Sharif) ",
    //   ActualName: "Sindh Govt Primary School",
    //   adopted: "Adopted",
    //   color: "#5fb35b",
    // },
    // {
    //   id: 37,
    //   category: ["Adopted Schools"],
    //   img: "/img/causes/PHOTO-2025-02-19-11-40-10(3).jpg",
    //   img1: "/img/causes/PHOTO-2025-02-19-11-40-10(1).jpg",
    //   img2: "/img/causes/PHOTO-2025-02-19-11-40-10(2).jpg",
    //   img1: "/img/causes/PHOTO-2025-02-19-11-40-10.jpg",
    //   img2: "/img/causes/PHOTO-2025-02-19-11-41-45.jpg",
    //   detail:
    //     "GPS Nazar Hussain Arain School empowers students with quality education.",
    //   description:
    //     "The NGO has taken on the responsibility of providing financial support to the school, including paying the salaries of the teachers and providing essential supplies and resources for the students. This support has been crucial for the school, which serves a primarily low-income student population. Overall, the adoption of Govt. Nimro Sharif School by the helpline NGO is an outstanding example of how community-based organizations can work together to improve education outcomes for underprivileged students. By providing resources and support for both students and teachers, the NGO is making a significant impact on the lives of those in the community.",
    //   pbar: "pbar_1",
    //   desc: "Sindh Govt Primary School, Tharparkar (Nimro Sharif) ",
    //   adopted: "Adopted",
    //   color: "#65cabb",
    // },
    {
      id: 36,
      category: ["Adopted Schools"],
      img: "/img/causes/andumahajir.jpg",
      img1: "/img/causes/andumahajir1.jpg",
      img2: "/img/causes/andumahajir2.jpg",
      img3: "/img/causes/andumahajir3.jpg",
      img4: "/img/causes/andumahajir4.jpg",
      img5: "/img/causes/andumahajir5.jpg",
      img6: "/img/causes/andumahajir6.jpg",
      detail:
        "GPS Ando Muhajir School empowers students with quality education.",
      description:
        "The NGO has extended its support to GPS Ando Muhajir, Tando Allah Yar, taking responsibility for the financial stability of the school by covering teachers’ salaries and ensuring the provision of essential learning materials and classroom resources. This assistance has been a lifeline for the school, which primarily educates children from economically disadvantaged families. The adoption of GPS Ando Muhajir by Helpline demonstrates how committed organizations can uplift struggling public schools and bring about meaningful change in the education sector. By empowering teachers with adequate resources and enabling students to access quality education, the NGO is not only strengthening the school’s foundation but also creating long-lasting positive effects on the wider community.",
      desc: "Sindh Govt Primary School, Tharparkar (Ando Muhajir) ",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#f15b43",
    },
    {
      id: 40,
      category: ["Adopted Schools"],
      img: "/img/causes/nimro1.jpg",
      img1: "/img/causes/nimro2.jpg",
      img2: "/img/causes/nimro3.jpg",
      detail:
        "GPS Ando Muhajir School empowers students with quality education.",
      description:
        "The NGO has taken on the responsibility of providing financial support to the school, including paying the salaries of the teachers and providing essential supplies and resources for the students. This support has been crucial for the school, which serves a primarily low-income student population. Overall, the adoption of Govt. Nimro Sharif School by the helpline NGO is an outstanding example of how community-based organizations can work together to improve education outcomes for underprivileged students. By providing resources and support for both students and teachers, the NGO is making a significant impact on the lives of those in the community.",
      pbar: "pbar_1",
      desc: "Sindh Govt Primary School (Boys), Karachi (Sammu Goth) ",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#f15b43",
    },
    // {
    //   id: 41,
    //   category: ["Adopted Schools"],
    //   img: "/img/causes/nimro1.jpg",
    //   img1: "/img/causes/nimro2.jpg",
    //   img2: "/img/causes/nimro3.jpg",
    //   detail:
    //     "GPS Ando Muhajir School empowers students with quality education.",
    //   description:
    //     "The NGO has taken on the responsibility of providing financial support to the school, including paying the salaries of the teachers and providing essential supplies and resources for the students. This support has been crucial for the school, which serves a primarily low-income student population. Overall, the adoption of Govt. Nimro Sharif School by the helpline NGO is an outstanding example of how community-based organizations can work together to improve education outcomes for underprivileged students. By providing resources and support for both students and teachers, the NGO is making a significant impact on the lives of those in the community.",
    //   pbar: "pbar_1",
    //   desc: "Sindh Govt Primary School (Girls), Karachi (Sammu Goth) ",
    //   ActualName: "Sindh Govt Primary School",
    //   adopted: "Adopted",
    //   color: "#f15b43",
    // },
  ],
  causes: [
    {
      id: 1,
      category: ["House Constructions"],
      img: "/img/causes/houseconstruction1.jpeg",
      ActualName: "House Constructions",

      img1: "/img/causes/construction2.jpeg",
      img2: "/img/causes/constructions1.jpeg",
      detail:
        "Floods hit Pakistan; Abdul Akbar, Helpline provide economical housing solutions.",
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
      desc: "House Constructions For Flood Effectives In Rajanpur",
      color: "#5fb35b",
    },
    {
      id: 2,
      category: ["House Constructions"],
      img: "/img/causes/houseconstruction2.jpeg",
      img1: "/img/causes/houseconstruction3.jpeg",
      img2: "/img/causes/houseconstruction4.jpeg",
      ActualName: "House Constructions",
      detail:
        "Floods hit Pakistan; Matti ul haq, Helpline provide economical housing solutions.",
      description:
        "In response, Matti ul Haq and the Helpline organization have stepped forward to provide shelter to displaced families ahead of the harsh winter season. An economical model house has been carefully designed to ensure safety and comfort for the affected. Detailed blueprints and cost estimates for these model houses are being shared with compassionate individuals who wish to contribute to this humanitarian effort.",

      desc: "House Constructions For Flood Effectives In Rajanpur",
      color: "#f15b43",
    },
    {
      id: 3,
      category: ["House Constructions"],
      img: "/img/causes/house3.jpeg",

      img1: "/img/causes/houseconstruction3.jpeg",
      img2: "/img/causes/houseconstruction4.jpeg",
      ActualName: "House Constructions",
      detail:
        "Floods devastate Pakistan as Abdul Akbar and Helpline step up with affordable housing solutions.",
      description:
        "In response to the devastating floods that have ravaged Pakistan, Chaudhary Amir and the Helpline organization have taken a significant step to address the urgent need for shelter among displaced families. Recognizing the widespread destruction, they have developed an economical housing solution to provide safe and affordable accommodations. This initiative features a specially designed model house that ensures both security and sustainability for those affected. Blueprints and cost estimates for these homes are being shared with donors who wish to contribute to this critical cause. By enabling families to rebuild their lives with dignity and stability, this program serves as a lifeline for countless individuals, fostering hope and resilience in the face of unprecedented challenges.",

      desc: "House Constructions For Flood Effectives In Rajanpur",
      color: "#65cabb",
    },
    {
      id: 4,
      category: ["House Constructions"],
      img: "/img/causes/house4.jpeg",

      img1: "/img/causes/houseconstruction3.jpeg",
      img2: "/img/causes/houseconstruction4.jpeg",
      ActualName: "House Constructions",
      detail:
        "Floods hit Pakistan; Junaid Aftab, Helpline provide economical housing solutions.",
      description:
        "In the wake of catastrophic floods that devastated Pakistan, Junaid Aftab and the Helpline organization have launched a life-changing initiative to support affected families. With countless homes swept away and lives disrupted, they have developed economical housing solutions to provide safe, affordable shelter. This initiative includes a thoughtfully designed model house that balances security, durability, and cost-effectiveness, addressing the urgent need for shelter before the harsh winter arrives.Detailed blueprints and cost estimates for these homes are being shared with kind-hearted donors eager to contribute to rebuilding efforts. By enabling families to regain stability and rebuild their lives with dignity, this program offers hope and resilience to those grappling with the aftermath of this climate disaster.",
      desc: "House Constructions For Flood Effectives In Rajanpur",
      color: "#5fb35b",
    },
    {
      id: 5,
      category: ["Water"],
      img: "/img/water/IMG_20201101_124923.jpg",
      img1: "/img/water/IMG_20201101_134556.jpg",
      img2: "/img/water/IMG_20201101_134630.jpg",
      ActualName: "Free Clean Water Project – Balochistan",
      detail:
        "Helpline Welfare has launched a free-of-cost clean water project in Balochistan, installing water filtration plants, solar tube wells, and hand pumps to ensure access to safe drinking water for poor and underserved communities.",
      description:
        "In the arid lands of Khuzdar, Balochistan, families once struggled with illness and hardship caused by contaminated water, but Helpline Welfare Trust has brought hope through the installation of solar-powered water pumps, providing clean, safe water right in their villages. Each drop now symbolizes life and relief — children stay healthy, mothers no longer walk miles in the scorching heat, and entire communities can finally thrive, moving one step closer to a cleaner, healthier Pakistan.",
      desc: "Free Clean Water Project by Helpline Welfare in Balochistan",
      color: "#65cabb",
    },
    {
      id: 6,
      category: ["Water"],
      img: "/img/water/Filter1.jpg",
      img1: "/img/water/Filter2.jpg",
      img2: "/img/water/Filter3.jpg",
      img3: "/img/water/Filter4.jpg",
      img4: "/img/water/Filter5.jpg",
      img5: "/img/water/Filter6.jpg",
      img6: "/img/water/Filter7.jpg",
      historyDescription: "Every child deserves the gift of clean water—a foundation for health, growth, and a brighter tomorrow. At Al-Kitab School in Abid Town, Helpline Welfare has transformed this dream into reality by installing a water filtration plant, ensuring that each student can quench their thirst with safe, pure water as they pursue their education.",
      ActualName: "Water Filtration Plant Installation in Al-Kitab School (Abid Town )",
      detail:
        "Every child deserves the gift of clean water—a foundation for health, growth, and a brighter tomorrow.",
      description:
        "Imagine a child's joy when they can drink water without fear—water that nurtures their bodies, sharpens their minds, and fuels their dreams. At Al-Kitab School in Abid Town, Helpline Welfare Trust has turned this vision into reality by installing a state-of-the-art RO water filtration plant. This isn’t just infrastructure; it’s a promise—a promise of clean water for a healthy life and a brighter future. Every sip these children take strengthens their health, boosts their immunity, and keeps their learning uninterrupted. The RO plant not only serves the students and staff of Al-Kitab School but also benefits the surrounding community, ensuring that families in the area have access to safe, purified drinking water. With each drop, we are protecting lives, empowering education, and investing in a healthier, more hopeful tomorrow for all.",
      desc: "Clean Water for Healthy Life, Healthy Future - Al-Kitab School (Abid Town)",
      color: "#65cabb",
    },
    {
      id: 7,
      category: ["Water"],
      img: "/img/water/tandufilter1.jpg",
      img1: "/img/water/tandufilter2.jpg",
      img2: "/img/water/tandufilter3.jpg",
      img3: "/img/water/tandufilter4.jpg",
      img4: "/img/water/tandufilter5.jpg",
      historyDescription: "Every child deserves the gift of clean water—a foundation for health, growth, and a brighter tomorrow. At Tandu School in Allahayar City, Helpline Welfare has transformed this dream into reality by installing a water filtration plant, ensuring that each student can quench their thirst with safe, pure water as they pursue their education.",
      ActualName: "Water Filtration Plant Installation in Tandu Allahayar City",
      detail:
        "Every child deserves the gift of clean water—a foundation for health, growth, and a brighter tomorrow.",
      description:
        "Imagine a child’s joy when they can drink water without fear—water that nurtures their body and fuels their dreams. At Tandu School in Allahayar City, Helpline Welfare Trust has made this possible by installing a state-of-the-art RO water filtration plant. This isn’t just a facility; it’s a lifeline. The plant provides free, clean drinking water not only to students and staff but also to families from nearby slum areas, protecting them from waterborne diseases and giving them hope for a healthier, brighter future.",
      desc: "Clean Water for Healthy Life, Healthy Future - Tandu Allahayar City",
      color: "#65cabb",
    },
    {
      id: 8,
      category: ["Water"],
      img: "/img/water/kmcfilter1.jpg",
      img1: "/img/water/kmcfilter2.jpg",
      img2: "/img/water/kmcfilter3.jpg",
      img3: "/img/water/kmcfilter4.jpg",
      img4: "/img/water/kmcfilter5.jpg",
      historyDescription: "In a place where healing begins, clean water becomes a lifeline—a source of purity that supports recovery, strengthens hope, and nurtures wellness. At Karbath Medical Centre (KMC) in Karachi, Helpline Welfare has installed a water filtration plant, ensuring that every patient, visitor, and healthcare worker has access to safe, pure drinking water as they journey toward health and healing.",
      ActualName: "Water Filtration Plant Installation in Karbath Medical Centre (KMC)",
      detail:
        "In a place where healing begins, clean water becomes a lifeline—a source of purity that supports recovery, strengthens hope, and nurtures wellness.",
      description:
        "Picture a patient in recovery, taking that first sip of pure, refreshing water—a moment that brings relief, comfort, and hope on the path to healing. At Karbath Medical Centre (KMC) in Karachi, Helpline Welfare Trust has made this possible by installing a modern RO water filtration plant. This isn’t merely an addition to the facility—it’s a symbol of care and commitment to health. In a place where every drop counts, access to clean water ensures that patients recover safely, visitors stay worry-free, and medical staff remain energized as they serve others. The plant guarantees safe hydration, reduces the risk of infection, and strengthens the foundation of recovery for everyone who walks through KMC’s doors. This initiative goes beyond infrastructure—it reflects compassion, safeguards wellness, and upholds the true spirit of healing.",
      desc: "Clean Water for Healthy Life, Healthy Future - Karbath Medical Centre (KMC)",
      color: "#65cabb",
    },
    {
      id: 9,
      category: ["Education"],
      img: "/img/causes/rorugoth.jpg",
      img1: "/img/causes/rorugoth1.jpg",
      img2: "/img/causes/rorugoth2.jpg",
      img3: "/img/causes/rorugoth3.jpg",
      img4: "/img/causes/rorugoth4.jpg",
      ActualName: "Sindh Govt Primary School",
      detail:
        "Govt. Roru Goth School empowers students with quality education.",
      description:
        "Helpline Welfare Trust has adopted and renewed Govt. Roru Goth School to secure a better future for Pakistan’s children. What was once an under-resourced campus with poor infrastructure and low attendance is now a functioning, well-equipped school—featuring repaired classrooms, reliable WASH facilities, qualified teachers, and complete learning materials. With active community engagement and re-enrolment, students now attend regularly and benefit from consistent, quality education in a safe and supportive environment.",
      progressData: "65",
      desc: "GPS Roru Goth School (Mirpurkhas)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#5fb35b",
    },
    {
      id: 10,
      category: ["Education"],
      img: "/img/causes/baglair.jpg",
      img1: "/img/causes/baglair1.jpg",
      img2: "/img/causes/baglair2.jpg",
      img3: "/img/causes/baglair3.jpg",
      img4: "/img/causes/baglair4.jpg",
      ActualName: "Sindh Govt Primary School",
      detail:
        "GPS. Bagliar Mithi School empowers students with quality education.",
      description:
        "Helpline Welfare Trust has adopted and renewed Govt. Bagliar Mithi School to secure a better future for Pakistan’s children. Once closed and forgotten, Govt. Bagliar Mithi School has been adopted and fully renewed by Helpline Welfare Trust. Through infrastructure repairs, provision of qualified teachers, complete learning materials, and restored WASH facilities, the campus has been brought back to life. With active community engagement and re-enrolment, the school now delivers consistent, quality primary education—turning a shuttered building into a thriving, hopeful future for the children of Tharparkar.",
      desc: "The Govt GPS. Bagliar Mithi School (Tharparkar)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#5fb35b",
    },
    {
      id: 11,
      category: ["Education"],
      img: "/img/causes/kakrio.jpg",
      img1: "/img/causes/kakrio3.jpg",
      img2: "/img/causes/kakrio4.jpg",
      img3: "/img/causes/kakrio1.jpg",
      img4: "/img/causes/kakrio2.jpg",
      ActualName: "Sindh Govt Primary School",
      detail:
        "Govt. Kakrario Saman Mian School empowers students with quality education.",
      description:
        "The adoption of Govt. Kakrario Saman Mian School a helpline NGO has been a game-changer for the school, its students, and its teachers. The NGO has taken on the responsibility of supporting the school’s operations by providing financial assistance for the payment of teachers’ salaries, as well as other essential needs such as textbooks, school supplies, and maintenance of facilities. This support has been critical for the school, which serves a predominantly low-income student population. Through this partnership, the helpline NGO has been able to provide a range of resources and programs to support students’ learning and academic achievement. These resources include scholarships, mentorship programs, and academic support services, such as tutoring and study skills workshops. By providing these opportunities to underprivileged students, the NGO is helping to level the playing field and give these students a chance to succeed.",

      desc: "Govt GPS. Kakrario Saman Mian School (Tharparkar)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#5fb35b",
    },
    {
      id: 12,
      category: ["Education"],
      img: "/img/causes/misaligoth.jpg",
      img1: "/img/causes/misaligoth1.jpg",
      img2: "/img/causes/misaligoth2.jpg",
      img3: "/img/causes/misaligoth3.jpg",
      img4: "/img/causes/misaligoth4.jpg",
      img5: "/img/causes/misaligoth5.jpg",
      img6: "/img/causes/misaligoth6.jpg",
      detail:
        "GPS. Misali Goth School empowers students with quality education.",
      description:
        "Helpline NGO’s support for the Govt. Misali Goth School is highly commendable, as it recognizes the importance of education in the development of communities. By providing financial assistance to the school, Helpline NGO is helping to ensure that students have access to quality education and a supportive learning environment. In addition to supporting the school itself, Helpline NGO also provides salaries to the employees, which is a significant contribution to the livelihoods of the staff. The provision of salaries to the employees is essential, as it helps to ensure that the school can attract and retain qualified and dedicated teachers and staff. This, in turn, contributes to the quality of education provided to students, and ultimately, to the school’s success. By providing this support, Helpline NGO is playing an essential role in the development of education in the community and is making a positive impact on the lives of both students and employees.",
      desc: "The Govt GPS. Misali Goth School",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#f15b43",
    },
    {
      id: 13,
      category: ["Education"],
      img: "/img/causes/katho1.jpg",
      img1: "/img/causes/katho2.jpg",
      img2: "/img/causes/katho3.jpg",
      detail:
        "GPS. Katho Samma School empowers students with quality education.",
      description:
        "The adoption of Govt. Katho Samma School by a helpline NGO has had a transformative impact on the school, its students, and its teachers. The NGO has taken on the responsibility of providing financial assistance for the school’s operations, including paying the salaries of the teachers and providing essential supplies and resources for the students. This support has been critical for the school, which serves a predominantly low-income student population. Furthermore, the support that the NGO provides for the school’s teachers is invaluable. The NGO recognizes the vital role that teachers play in shaping students’ lives and is committed to ensuring that they are compensated fairly for their hard work. This support helps to incentivize high-quality teaching, which is essential for creating a positive and effective learning environment for students.",

      desc: "The Govt GPS. Katho Samma School",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#f15b43",
    },
    // {
    //   id: 34,
    //   category: ["Education"],
    //   img: "/img/causes/nimro1.jpg",
    //   img1: "/img/causes/nimro2.jpg",
    //   img2: "/img/causes/nimro3.jpg",
    //   detail:
    //     "GPS Qazi Muhammad Ashraf School empowers students with quality education.",
    //   description:
    //     "The NGO has taken on the responsibility of providing financial support to the school, including paying the salaries of the teachers and providing essential supplies and resources for the students. This support has been crucial for the school, which serves a primarily low-income student population. Overall, the adoption of Govt. Nimro Sharif School by the helpline NGO is an outstanding example of how community-based organizations can work together to improve education outcomes for underprivileged students. By providing resources and support for both students and teachers, the NGO is making a significant impact on the lives of those in the community.",
    //   pbar: "pbar_1",
    //   desc: "GPS Qazi Muhammad Ashraf (Mirpurkhas)",
    //   ActualName: "Sindh Govt Primary School",
    //   adopted: "Adopted",
    //   color: "#f15b43",
    // },
    {
      id: 35,
      category: ["Education"],
      img: "/img/causes/PHOTO-2025-02-19-11-40-10(3).jpg",
      img1: "/img/causes/PHOTO-2025-02-19-11-40-10.jpg",
      img2: "/img/causes/PHOTO-2025-02-19-11-41-45.jpg",
      detail:
        "GPS Nazar Hussain Arain School empowers students with quality education.",
      description:
        "The NGO has taken on the responsibility of providing financial support to the school, including paying the salaries of the teachers and providing essential supplies and resources for the students. This support has been crucial for the school, which serves a primarily low-income student population. Overall, the adoption of Govt. Nimro Sharif School by the helpline NGO is an outstanding example of how community-based organizations can work together to improve education outcomes for underprivileged students. By providing resources and support for both students and teachers, the NGO is making a significant impact on the lives of those in the community.",
      pbar: "pbar_1",

      desc: "GPS Nazar Hussain Arain (Mirpurkhas)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#f15b43",
    },
    {
      id: 14,
      category: ["Medical"],
      img: "/img/causes/karbathhospital.JPG",
      img1: "/img/causes/karbathhospital.JPG",
      img2: "/img/causes/karbathhospital1.JPG",
      img3: "/img/causes/karbathhospital2.JPG",
      img4: "/img/causes/karbathmedical.jpg",
      img5: "/img/causes/karbathhospital3.JPG",
      img6: "/img/causes/karbathhospital4.JPG",
      img7: "/img/causes/labtest.png",
      img8: "/img/causes/ultrasound.jpg",
      detail:
        "Karbath Medical Centre offers comprehensive healthcare services, ensuring quality medical care for all.",
      description:
        "Karbath Medical Centre was established by Helpline, a nonprofit organization, to provide accessible healthcare services to underserved communities. The medical centre operates with a dedicated team of qualified doctors, nurses, and medical staff who serve patients with compassion and professionalism. What began as a small facility offering basic care has now grown into a fully equipped medical centre providing comprehensive services — including emergency care, general medicine, pediatrics and gynecology. The centre ensures that every patient, regardless of financial condition, receives quality treatment and attention. Every day, hundreds of poor and deserving individuals walk through its doors seeking help, and none of them are Refused. From medical checkups and lab tests to ultrasounds and homeopathic treatments, everything is provided free of cost to underprivileged and deserving patients. The facility upholds high standards of hygiene, empathy, and care, standing as a symbol of hope and humanity for countless families who once had nowhere else to go for healing.",
      // historyTitle: "The Healthcare Excellence Initiative",
      // UpgradeTitle: "Daily Patient Checkups",
      // FutureTitle: "Patient Support In All Public Sectors Hospitals",
      // detail3:
      //   "The Karbath Medical Centre stands as a lifeline for those who arrive with pain, worry, and empty hands but leave with hope and healing. Every day, between 700 and 1200 poor patients from nearby villages come seeking help they cannot afford elsewhere. Many travel long distances, carrying nothing but faith that someone will care for them—and here, they find exactly that. With free medical checkups, the centre ensures that no one is denied treatment because of poverty. The doctors, nurses, and staff serve with compassion and dignity, treating every patient like family. Each smile restored, each tear of relief, tells the story of lives touched by kindness. Supported by Helpline Welfare Trust, Karbath Medical Centre continues to shine as a symbol of humanity—where the poor are not just treated, but respected, healed, and given back the hope they thought they had lost.",
      // detail2:
      //   "The Healthcare Excellence Initiative was launched by Helpline, to enhance medical services and healthcare accessibility in the area of Interest. The project began with the generous support of community members and healthcare professionals who donated medical equipment and supplies. Starting with basic medical consultations, the initiative has expanded into a comprehensive healthcare facility offering emergency care, specialized treatments, and preventive medicine. Managed by a dedicated team of medical professionals, the program not only provides immediate healthcare needs but also educates community members about health awareness and preventive care. Through regular health camps, medical awareness programs, and community engagement, the Healthcare Excellence Initiative continues to inspire a culture of health consciousness and accessible medical care for all residents in the region.",
      // detail4:"Our Medical team has Established links with Social Welfare Department desks in all public Sector Hospitals. Dedicated staff identify deserving Patient Visiting from Various Villages help them in their checkup, lab test and admission, Moreover Deserving Patients also Supporting in buying Medicines, lab tests etc not performed by the public Hospitals.  The Karbath Medical Centre stands as a symbol of hope and healing for the poor and needy who arrive daily in search of care they cannot afford elsewhere. Every day, between 150 to 280 patients receive free ultrasounds, while 100 to 150 patients undergo lab tests, with lowest Possible rates ensuring that no one is denied medical attention due to poverty. Along with these services, free medicines are also provided to those in need, bringing relief to countless families struggling to survive. The doctors, nurses, and staff work tirelessly with compassion and dedication, treating each patient with dignity and respect.",
      ActualName: "Karbath Medical Centre",
      desc: "Karbath Medical Centre Hospital.",
      color: "#65cabb",
    },
    {
      id: 16,
      category: ["Medical"],
      img: "/img/causes/cause12.jpg",
      img1: "/img/causes/cataract1.jpg",
      img2: "/img/causes/cataract2.jpeg",
      img3: "/img/causes/catarect3.JPG",
      img4: "/img/causes/catarect4.JPG",
      img5: "/img/causes/catarect5.JPG",
      img6: "/img/causes/catarect6.JPG",
      detail:
        "Helpline Welfare Trust conducts free cataract surgeries across Pakistan's cities, funded by generous donations to restore vision for poor families.",
      description:
        "Cataract Surgeries Across Pakistan is a humanitarian initiative by Helpline Welfare Trust, funded entirely through generous donations from compassionate individuals and organizations. The program operates surgical camps in major cities across Pakistan, specifically targeting poor and underprivileged families who cannot afford expensive private medical treatments. With the support of these donations, Helpline Welfare Trust organizes specialized cataract surgery camps in urban centers, bringing hope and restored vision to countless families. Each surgery is performed by experienced ophthalmologists using state-of-the-art equipment, ensuring safe and successful outcomes for patients. The program not only provides free cataract surgeries but also covers pre-operative assessments, post-operative care, and follow-up treatments. In 2023, Helpline successfully performed 500 cataract operations worth 7,600,000 rupees, while in 2024, 190 cataract surgeries were conducted valued at 1,197,000 rupees, restoring the gift of sight to hundreds of deserving individuals. Through the unwavering generosity of donors, Helpline Welfare Trust continues to transform lives by restoring vision to poor families across Pakistan, enabling them to regain independence, dignity, and a renewed sense of hope.",
      historyTitle: "The Donor-Funded Vision Restoration Program",
      UpgradeTitle: "Celebrating Successful Cataract Surgeries Funded by Donations",
      detail3:
        "The Successful Cataract Surgeries celebration, funded by generous donations, was a heartwarming occasion that highlighted Helpline Welfare Trust's achievements in restoring vision to poor families across Pakistan's cities. The event began with a ceremonial ribbon-cutting for new ophthalmic equipment purchased through donor contributions, followed by inspiring speeches from recovered patients and their grateful families. Beneficiaries shared emotional stories of regained independence and gratitude, showcasing the profound impact of donor-funded surgeries on improving lives and restoring hope. The medical team demonstrated their expertise through eye health awareness sessions, free eye examinations, and educational workshops on preventive eye care. The surgical camp premises were decorated with banners celebrating successful surgeries and patient testimonials, acknowledging the generous donors who made it all possible. Community members participated in eye screenings and learned about various eye care services available through the donor-funded program. With active involvement from local healthcare professionals, volunteers, grateful patients, and generous donors, the event fostered a sense of community health awareness and commitment to accessible eye care, making the celebration truly meaningful for everyone involved.",
      detail2:
        "The Donor-Funded Vision Restoration Program was launched by Helpline Welfare Trust to enhance eye care services and cataract surgery accessibility for poor families across Pakistan's cities. The project began with the generous support of compassionate donors who contributed funds for ophthalmic equipment, surgical supplies, and medical camp operations. Starting with basic eye examinations and consultations in major cities, the initiative has expanded into a comprehensive eye care program offering free cataract surgeries, specialized treatments, and preventive eye care for underprivileged families. Managed by a dedicated team of ophthalmologists and medical professionals, the program not only provides immediate surgical needs but also educates community members about eye health awareness and preventive care. Through regular surgical camps funded by donations, eye health awareness programs, and community engagement, the Donor-Funded Vision Restoration Program continues to inspire a culture of eye health consciousness and accessible medical care for poor residents across Pakistan's cities.",
      ActualName: "Cataract Surgeries Across Pakistan",
      desc: "Cataract Surgeries Across Pakistan.",
      color: "#f15b43",
    },
    {
      id: 15,
      category: ["Medical"],
      img: "/img/causes/freemedical.jpg",
      img1: "/img/causes/freemedical1.jpg",
      img2: "/img/causes/freemedical2.jpg",
      img3: "/img/causes/freemedical3.jpg",
      img4: "/img/causes/freemedical4.jpg",
      ActualName: "Free Medical Camp Bahawalpur",
      UpgradeTitle: "Celebrating Medical Milestones",
      detail:
        "Free Medical Camp Bahawalpur offers free healthcare, expanding under Helpline since 2025.",
      description:
        "Free Medical Camp Bahawalpur is a comprehensive healthcare initiative launched by Helpline Welfare Trust in 2025, dedicated to providing essential medical services to underserved communities across Pakistan's poorest regions. This mobile healthcare program brings qualified doctors, nurses, and medical equipment directly to rural and urban areas where access to healthcare is limited or non-existent. The camp offers free consultations, diagnostic services, essential medications, emergency care, maternal and child health services, and preventive healthcare education to thousands of beneficiaries. Through partnerships with local healthcare professionals and pharmaceutical companies, Helpline ensures that financial constraints never prevent anyone from receiving quality medical care. The initiative also conducts health awareness sessions, educating communities about disease prevention, hygiene practices, and healthy lifestyle choices. Since its launch, the Free Medical Camp Bahawalpur has become a beacon of hope for countless families, transforming lives and improving health outcomes in Pakistan's most vulnerable communities.",
      detail2:
        "The Free Medical Camp Bahawalpur initiative was launched by Helpline Welfare Trust in 2025 to address the critical healthcare needs of underserved communities in Pakistan's rural and urban poor areas. Recognizing that access to quality healthcare remains a luxury for millions of Pakistanis living below the poverty line, Helpline established this comprehensive medical outreach program. The camp operates on a mobile healthcare model, bringing essential medical services directly to communities that lack proper healthcare infrastructure. Starting with basic consultations and emergency care, the initiative has grown into a full-scale medical intervention program that provides free consultations, diagnostic services, essential medications, and preventive healthcare education to thousands of beneficiaries across Bahawalpur and surrounding regions.",
      detail3:
        "The Free Medical Camp Bahawalpur has become a beacon of hope for countless families who previously had no access to healthcare services. Each camp is staffed by qualified doctors, nurses, and medical technicians who volunteer their time and expertise to serve the community. The program offers comprehensive medical services including general health check-ups, blood pressure monitoring, diabetes screening, maternal and child health services, and emergency medical care. Patients receive free consultations, diagnostic tests, and essential medications, ensuring that financial constraints never become a barrier to receiving quality healthcare. The camp also conducts health awareness sessions, educating community members about preventive care, hygiene practices, and disease management. Through partnerships with local healthcare professionals and pharmaceutical companies, Helpline ensures that every patient receives the best possible care regardless of their economic status.",
      desc: "Free Medical Camp Bahawalpur",
      color: "#5fb35b",
    },
    {
      id: 43,
      category: ["Medical"],
      img: "/img/causes/freemedical.jpg",
      img1: "/img/causes/freemedical1.jpg",
      img2: "/img/causes/freemedical2.jpg",
      img3: "/img/causes/freemedical3.jpg",
      img4: "/img/causes/freemedical4.jpg",
      ActualName: "School Medical Camp (Al-Kitab School)",
      UpgradeTitle: "Celebrating Medical Milestones",
      detail:
        "Free Medical Camp Bahawalpur offers free healthcare, expanding under Helpline since 2025.",
      description:
        "Free Medical Camp Bahawalpur is a comprehensive healthcare initiative launched by Helpline Welfare Trust in 2025, dedicated to providing essential medical services to underserved communities across Pakistan's poorest regions. This mobile healthcare program brings qualified doctors, nurses, and medical equipment directly to rural and urban areas where access to healthcare is limited or non-existent. The camp offers free consultations, diagnostic services, essential medications, emergency care, maternal and child health services, and preventive healthcare education to thousands of beneficiaries. Through partnerships with local healthcare professionals and pharmaceutical companies, Helpline ensures that financial constraints never prevent anyone from receiving quality medical care. The initiative also conducts health awareness sessions, educating communities about disease prevention, hygiene practices, and healthy lifestyle choices. Since its launch, the Free Medical Camp Bahawalpur has become a beacon of hope for countless families, transforming lives and improving health outcomes in Pakistan's most vulnerable communities.",
      detail2:
        "The Free Medical Camp Bahawalpur initiative was launched by Helpline Welfare Trust in 2025 to address the critical healthcare needs of underserved communities in Pakistan's rural and urban poor areas. Recognizing that access to quality healthcare remains a luxury for millions of Pakistanis living below the poverty line, Helpline established this comprehensive medical outreach program. The camp operates on a mobile healthcare model, bringing essential medical services directly to communities that lack proper healthcare infrastructure. Starting with basic consultations and emergency care, the initiative has grown into a full-scale medical intervention program that provides free consultations, diagnostic services, essential medications, and preventive healthcare education to thousands of beneficiaries across Bahawalpur and surrounding regions.",
      detail3:
        "The Free Medical Camp Bahawalpur has become a beacon of hope for countless families who previously had no access to healthcare services. Each camp is staffed by qualified doctors, nurses, and medical technicians who volunteer their time and expertise to serve the community. The program offers comprehensive medical services including general health check-ups, blood pressure monitoring, diabetes screening, maternal and child health services, and emergency medical care. Patients receive free consultations, diagnostic tests, and essential medications, ensuring that financial constraints never become a barrier to receiving quality healthcare. The camp also conducts health awareness sessions, educating community members about preventive care, hygiene practices, and disease management. Through partnerships with local healthcare professionals and pharmaceutical companies, Helpline ensures that every patient receives the best possible care regardless of their economic status.",
      desc: "School Medical Camp (Al-Kitab School)",
      color: "#5fb35b",
    },
 
    {
      id: 17,
      category: ["Medical"],
      img: "/img/causes/mithimedicalcamp1.jpg",
      img1: "/img/causes/mithi1.png",
      img2: "/img/causes/mithi2.jpg",
      img3: "/img/causes/mbldispensary.1jpg.jpg",
      img4: "/img/causes/mbldispensary.jpg",
      link: "https://www.youtube.com/embed/qYl8uuP5rd0",
      detail:
        "Helpline Mobile Unit & Dispensary brings free healthcare and medicines to poor areas across Pakistan, funded by generous donations.",
      description:
        "Helpline Mobile Unit & Dispensary was established by Helpline Welfare Trust to provide accessible healthcare services to poor and underserved areas across Pakistan. The program operates with a dedicated team of qualified doctors, nurses, and medical staff who are committed to serving patients in remote and impoverished communities. Starting with basic medical consultations, the initiative has expanded to offer comprehensive healthcare including free medicines, emergency care, general medicine, and preventive healthcare services. The mobile units are equipped with essential medicines, medical equipment, and maintain the highest standards of patient care and safety. Helpline Mobile Unit & Dispensary continues to bridge the healthcare gap by providing free medical services and medicines to poor families who cannot afford expensive private healthcare, making quality medical care accessible to all residents of Nearly Unaccessible areas of THAR DESERT.",
      // historyTitle: "The Mobile Healthcare Initiative for Poor Areas",
      // UpgradeTitle: "Celebrating Mobile Healthcare Success in Underserved Communities",
      // detail3:
      //   "The Mobile Healthcare Success celebration in underserved communities was a heartwarming occasion that highlighted Helpline Welfare Trust's achievements in providing healthcare to poor areas across Pakistan. The event began with a ceremonial ribbon-cutting for new mobile medical equipment, followed by inspiring speeches from recovered patients and their grateful families from various poor communities. Beneficiaries shared emotional stories of regained health and gratitude, showcasing the profound impact of mobile healthcare services on improving lives and restoring hope in impoverished areas. The medical team demonstrated their expertise through health awareness sessions, free medical check-ups, and educational workshops on preventive healthcare. The mobile dispensary premises were decorated with banners celebrating successful treatments and patient testimonials from poor communities. Community members participated in health screenings and learned about various medical services available through the mobile healthcare program. With active involvement from local healthcare professionals, volunteers, grateful patients from poor areas, and generous donors, the event fostered a sense of community health awareness and commitment to accessible healthcare, making the celebration truly meaningful for everyone involved.",
      // detail2:
      //   "The Mobile Healthcare Initiative for Poor Areas was launched by Helpline Welfare Trust to enhance medical services and healthcare accessibility in underserved communities across Pakistan. The project began with the generous support of compassionate donors who contributed funds for mobile medical units, essential medicines, and medical equipment. Starting with basic medical consultations in poor rural areas, the initiative has expanded into a comprehensive mobile healthcare program offering free medical services, essential medicines, specialized treatments, and preventive healthcare for underprivileged families. Managed by a dedicated team of medical professionals and volunteers, the program not only provides immediate healthcare needs but also educates community members about health awareness and preventive care. Through regular mobile medical camps, health awareness programs, and community engagement in poor areas, the Mobile Healthcare Initiative continues to inspire a culture of health consciousness and accessible medical care for all residents in underserved communities across Pakistan.",
      ActualName: "Helpline Mobile Unit & Dispensary, Mithi (Sindh)",
      desc: "Helpline Mobile Unit & Dispensary , Mithi (Sindh)",
      color: "#f15b43",
    },
    {
      id: 18,
      category: ["Own School"],
      img: "/img/causes/irtiqa.png",
      img1: "/img/causes/irtiqa1.jpg",
      img2: "/img/causes/irtiqa2.png",
      img3: "/img/causes/DSC_0172.JPG",
      img4: "/img/causes/DSC_0290.JPG",
      img5: "/img/causes/irtiqafuture1.JPG",
      img6: "/img/causes/future2.JPG",
      img7: "/img/causes/waterirtiqa.JPG",
      img8: "/img/causes/waterirtiqa2.JPG",

      link: "https://www.youtube.com/embed/3ZCDpJxgIGk",
      link2: "https://www.youtube.com/embed/UuphWKN263I",
      ActualName: "Irtaqa-e-Itfal High School",
      detail:
        "Al-Kitab provides free education to underprivileged children, ensuring growth.",
      description:
        "Irtaqa-e-Itfal School – A Beacon of Hope in Manawan, Lahore Transforming Lives Through Free Education and Community Support Irtaqa-e-Itfal School, located in the heart of Manawan, Lahore, stands as a shining example of compassion, resilience, and empowerment. Dedicated to uplifting the lives of the underprivileged, the school provides free-of-cost quality education to over 1,000 deserving students—most of whom were previously out of school due to financial hardship.",
      desc: "Al-Kitab Education System School Lahore (Manawan).",
      historyTitle: "Holistic Approach of Irtaqa-e-Itfal High Schooll",
      UpgradeTitle: "Securing Futures of Irtaqa-e-Itfal High School",
      FutureTitle: "Clean Water for Irtaqa-e-Itfal High School",
      detail2:
        "Beyond Books: A Holistic Approach to Uplift Communities Education at Irtaqa-e-Itfal goes beyond the classroom. The school ensures that every student receives: Free uniforms, textbooks, and school supplies Regular medical check-ups to monitor and maintain student health Nutritious dry rations for the most deserving families, helping combat food insecurity",
      detail3:
        "Empowering Mothers, Securing Futures Recognizing the crucial role of women in breaking the cycle of poverty, Irtaqa-e-Itfal School also offers vocational training in stitching and embroidery to single mothers of enrolled students. This initiative helps women gain valuable skills to earn a sustainable livelihood and support their families with dignity.",
      detail4:
        "Clean Water for All In response to the pressing issue of waterborne illnesses in the area, the school has installed a Reverse Osmosis (RO) filtration plant, providing clean, safe drinking water to not just the school community but also the local residents. At Irtaqa-e-Itfal School, we believe that every child deserves a chance to learn, grow, and thrive—regardless of their background. With your support, we can continue to transform lives, one child and one family at a time. Join us in building a brighter, more equitable future for the children of Manawan.",
      color: "#65cabb",
    },
    {
      id: 19,
      category: ["Education"],
      img: "/img/causes/nimro.jpg",
      img1: "/img/causes/nimro.jpg",
      img2: "/img/causes/nimro1.jpg",
      img3: "/img/causes/nimro2.jpg",
      img4: "/img/causes/nimro3.jpg",
      img5: "/img/causes/nimro4.jpg",
      img6: "/img/causes/nimro5.jpg",

      detail:
        "GPS. Nimro Sharif School empowers students with quality education.",
      description:
        "Once a neglected, low-enrollment campus with inadequate infrastructure and learning resources, Govt. Nimro Sharif School has been revitalized by Helpline Welfare Trust. Through comprehensive repairs, provision of teachers and learning materials, WASH facilities, and community re-enrolment efforts, the school now operates as a safe, well-resourced primary campus with regular classes, higher attendance, and improved learning outcomes.",
      pbar: "pbar_1",
      desc: "Sindh Govt Primary School, Mirpurkhas (Nimro Sharif) ",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#5fb35b",
    },
    {
      id: 20,
      category: ["Education"],
      img: "/img/causes/masari.jpg",
      img1: "/img/causes/misari1.png",
      img2: "/img/causes/masari2.jpg",
      img3: "/img/causes/misari3.png",
      img4: "/img/causes/misari4.png",
      img5: "/img/causes/misari5.png",
      img6: "/img/causes/misari6.png",
      detail:
        "Breathing life back into abandoned dreams through education and hope.",
      description: `Govt GPS. Misri Bheel School – From Closure to Revival  
    What was once a closed and abandoned government school in the remote community of Misri Bheel, Tando Allah Yar, has been transformed into a thriving center of learning through Helpline's dedicated intervention.  
    This remarkable story of educational resurrection demonstrates how strategic adoption and comprehensive renewal can restore hope to communities where children's futures once seemed forgotten.`,
      desc: "Govt GPS. Misri Bheel School (Tando Allah Yar)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",

      color: "#65cabb",
    },
    {
      id: 21,
      category: ["Education"],
      img: "/img/causes/nabibakhsh.png",
      img1: "/img/causes/nabibakhsh1.png",
      img2: "/img/causes/nabibakhsh2.png",
      img3: "/img/causes/nabibakhsh3.png",
      img4: "/img/causes/nabibakhsh4.png",
      img5: "/img/causes/nabibakhsh5.png",
      img6: "/img/causes/nabibakhsh6.png",
      detail:
        "Transforming educational challenges into opportunities for rural excellence.",
      description: `Govt GPS. Nabi Baksh Gabool School – A Story of Educational Transformation  
    In the rural landscape of Tando Allah Yar, Govt GPS. Nabi Baksh Gabool School stands as a powerful example of how strategic adoption can transform struggling educational institutions into thriving centers of learning.  
    Through Helpline Welfare Trust's comprehensive intervention, this government primary school has evolved from a resource-starved institution into a beacon of hope for quality education in underserved communities.`,
      desc: "Govt GPS. Nabi Baksh Gabool School (Tando Allah Yar)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",

      color: "#5fb35b",
    },
    {
      id: 22,
      category: ["Education"],
      img: "/img/causes/laghari.jpg",
      img1: "/img/causes/laghari1.jpg",
      img2: "/img/causes/laghari2.jpg",
      img3: "/img/causes/laghari3.jpg",
      img4: "/img/causes/laghari4.jpg",

      detail:
        "GPS. Sardar Khan Laghari School empowers students with quality education.",
      description:
        "Helpline Welfare Trust has adopted Govt. Sardar Khan Laghari School from the government and comprehensively renewed it for a better future of Pakistan. What was once an under-resourced campus with low attendance and weak learning outcomes now operates as a well-maintained, student-centered school—equipped with repaired classrooms, reliable WASH facilities, qualified teachers, and complete learning materials. Through community outreach and re-enrolment drives, attendance and retention have improved, and students are receiving consistent, quality education in a safe environment.",

      desc: "GPS. Sardar Khan Laghari School (Mirpurkhas)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#65cabb",
    },
    {
      id: 36,
      category: ["Education"],
      img: "/img/causes/andumahajir.jpg",
      img1: "/img/causes/andumahajir1.jpg",
      img2: "/img/causes/andumahajir2.jpg",
      img3: "/img/causes/andumahajir3.jpg",
      img4: "/img/causes/andumahajir4.jpg",
      img5: "/img/causes/andumahajir5.jpg",
      img6: "/img/causes/andumahajir6.jpg",
      detail:
        "GPS Ando Muhajir School empowers students with quality education.",
      description:
        "The NGO has extended its support to GPS Ando Muhajir, Tando Allah Yar, taking responsibility for the financial stability of the school by covering teachers’ salaries and ensuring the provision of essential learning materials and classroom resources. This assistance has been a lifeline for the school, which primarily educates children from economically disadvantaged families. The adoption of GPS Ando Muhajir by Helpline demonstrates how committed organizations can uplift struggling public schools and bring about meaningful change in the education sector. By empowering teachers with adequate resources and enabling students to access quality education, the NGO is not only strengthening the school’s foundation but also creating long-lasting positive effects on the wider community.",
      pbar: "pbar_1",

      desc: "GPS Ando Muhajir (Tando Allah Yar)",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#f15b43",
    },
    // {
    //   id: 37,
    //   category: ["Education"],
    //   img: "/img/causes/PHOTO-2025-02-19-11-40-10(3).jpg",
    //   img1: "/img/causes/PHOTO-2025-02-19-11-40-10.jpg",
    //   img2: "/img/causes/PHOTO-2025-02-19-11-41-45.jpg",
    //   detail:
    //     "GPS Nazar Hussain Arain School empowers students with quality education.",
    //   description:
    //     "The NGO has taken on the responsibility of providing financial support to the school, including paying the salaries of the teachers and providing essential supplies and resources for the students. This support has been crucial for the school, which serves a primarily low-income student population. Overall, the adoption of Govt. Nimro Sharif School by the helpline NGO is an outstanding example of how community-based organizations can work together to improve education outcomes for underprivileged students. By providing resources and support for both students and teachers, the NGO is making a significant impact on the lives of those in the community.",
    //   pbar: "pbar_1",

    //   desc: "GPS Nazar Hussain Arain (Tando Allah Yar)",
    //   ActualName: "Sindh Govt Primary School",
    //   adopted: "Adopted",
    //   color: "#f15b43",
    // },
    {
      id: 23,
      category: ["Education"],
      img: "/img/bg/breadcrumb_bg_4.jpg",
      img1: "/img/causes/DJI_0010.JPG",
      img2: "/img/causes/DJI_0018.JPG",
      img3: "/img/causes/history.jpg",
      img4: "/img/causes/history.png",
      img5: "/img/causes/upgraded.png",
      img6: "/img/causes/upgraded1.JPG",
      img7: "/img/causes/future.jpg",
      img8: "/img/causes/future1.jpg",
      link: "https://www.youtube.com/embed/uW6QxzriY1A",
      link3: "https://www.youtube.com/embed/6RliogbPdII",
      detail:
        "Al-Kitab School offers free education, fostering growth and community service.",
      description:
        "Al-Kitab Higher Secondary School – Empowering Through Free Education As of today, Al-Kitab Higher Secondary School stands as a remarkable beacon of hope and transformation in Rana Town, Lahore. The school is currently providing completely free-of-cost education to over 1,100 students, including 645 girls and more than 500 boys. This milestone is not just a number—it represents lives changed, futures reshaped, and a community uplifted through the power of education.",
      historyTitle: "History of Al-Kitab Higher Secondary School",
      UpgradeTitle: "Upgradation of Al-Kitab Higher Secondary School",
      FutureTitle: "Future of Al-Kitab Higher Secondary School",
      desc: "Al-Kitab Education System (Rana Town).",
      ActualName: "Al-Kitab Higher Secondary School",
      detail2:
        "The journey of Al-Kitab School began humbly in 2015, on a 10-acre piece of donated land that once housed an abandoned poultry farm. What started with only 15 students and a handful of committed educators has now become a full-fledged educational institution serving hundreds of underprivileged families. The founders envisioned a school that would provide quality education to children who otherwise had no access to learning, and today that vision has become a thriving reality.",
      detail3:
        "In just a decade, the school has achieved extraordinary success. It now boasts a state-of-the-art library, a fully equipped computer lab, and a vocational training center offering courses in stitching and embroidery, particularly empowering young girls with practical skills. The school doesn’t just support students—it supports entire families. Parents of enrolled students receive monthly dry ration packages, easing their financial burdens and encouraging them to prioritize education over child labor. Many of the children who were once forced into hard labor by desperate circumstances are now active participants in co-curricular activities, discovering talents and building confidence that once seemed impossible.",
      detail4:
        "Despite its success, Al-Kitab Higher Secondary School has now reached its maximum capacity. The existing infrastructure can no longer accommodate the growing demand for admissions. With more and more families seeking a better future for their children, the school is in urgent need of a new six-story building to continue expanding its life-changing mission. Without this crucial development, many children will remain out of school, trapped in the cycle of poverty and illiteracy.Al-Kitab Higher Secondary School is a living testament to what can be achieved with dedication, vision, and community support. But the journey is far from over—the next step requires collective effort to build more space, provide more opportunities, and transform even more lives.",
      color: "#f15b43",
    },
    {
      id: 24,
      category: ["Education"],
      img: "/img/causes/alkitabghani1.jpg",
      img1: "/img/causes/1.jpg",
      img2: "/img/causes/2.jpg",
      img3: "/img/causes/chani11.jpg",
      img4: "/img/causes/chani22.jpg",
      img5: "/img/causes/chani5.jpg",
      img6: "/img/causes/chani6.jpg",
      detail:
        "Al-Kitab School offers free education, fostering growth and community service.",
      description:
        "Alkitab Primary School was established in 2021 in a small village of Tehsil Ahmedpur Sharqia by Helpline, a nonprofit organization. The school building was generously donated by Mr. Jam Huzoor bakhsh. Starting with just 15 out-of-school children from nearby villages, the school has grown significantly and now educates 83 students. With a dedicated team of six teachers, Alkitab Primary School provides quality education to underprivileged children, helping bridge the educational gap in the region. The institution remains committed to empowering young minds and fostering community development through learning.",
      historyTitle: "The Green Growth Initiative ",
      UpgradeTitle: "Celebrating the Independence Day",
      detail3:
        "The Independence Day celebration at Al-Kitab Education System School, Bahawalpur (Chani Goth) was a vibrant and patriotic event filled with joy and enthusiasm. The program began with the hoisting of the national flag, followed by the recitation of the national anthem, creating a spirit of unity and pride among students and teachers. Children showcased their talents through speeches, national songs, and tableaus that highlighted the sacrifices of our heroes and the importance of freedom. The school premises were decorated with green and white flags, balloons, and banners, giving a festive look to the occasion. Teachers delivered motivational talks on the value of independence and the role of youth in building a stronger Pakistan. With active participation from parents and community members, the event fostered a sense of belonging, patriotism, and commitment to the nation’s progress, making the day truly memorable for everyone involved.",
      detail2:
        "The Green Growth Initiative was launched in 2021 by Helpline, a nonprofit organization, to promote environmental awareness and sustainability in Tehsil Ahmedpur Sharqia. The project began with the generous support of local community members, who donated land for a small nursery. Starting with just 50 saplings, the initiative has expanded into a vibrant green space with over 1,000 plants and trees. Managed by a dedicated team of volunteers, the program not only enhances the beauty of the surroundings but also educates local residents, especially children, about the importance of environmental conservation. Through regular planting drives and community engagement, the Green Growth Initiative continues to inspire a culture of care for nature and a greener future for the region.",
      ActualName: "Al-Kitab Education System (Chani Goth)",
      desc: "Al Kitab Education System  (Chani Goth).",
      color: "#5fb35b",
    },
    {
      id: 25,
      category: ["Own School"],
      img: "/img/causes/rehmat.jpeg",
      img1: "/img/causes/chrehmat1.png",
      img2: "/img/causes/rehmat2.png",
      img3: "/img/causes/rehmat3.png",
      img4: "/img/causes/rehmat4.png",
      // img5: "/img/causes/alkitab3.jpg",
      // img6: "/img/causes/alkitab4.jpg",
      // img7: "/img/causes/alkitab5.jpg",
      // img8: "/img/causes/alkitab6.jpg",
      // link: "https://www.youtube.com/embed/uW6QxzriY1A",
      // link3: "https://www.youtube.com/embed/6RliogbPdII",
      ActualName: "Ch Rehmat Ali Higher Secondary School for Boys",
      detail:
        "Al-Kitab provides free education to underprivileged children, ensuring growth.",
      description: `Aligarh Educational Complex – A Legacy of Learning and Service
The Aligarh Educational Complex, located in 244 G.B, stands as a beacon of hope and opportunity for over 1,400 students across three thriving institutions. These schools include:
Ch. Rehmat Ali Boys' Higher Secondary School, educating more than 500 boys,
Eman Maryam Girls' Higher Secondary School, empowering over 600 girls, and
Eman Maryam Smart School, nurturing over 300 primary-level children.
What sets this complex apart is its free-of-cost quality education, coupled with complimentary pick-and-drop transportation for every student—ensuring that distance and affordability are never barriers to learning.`,

      desc: "Al-Kitab Education System School, TobaTekSingh (Gojra).",
      historyTitle: "A Visionary Beginning and a New Chapter",
      UpgradeTitle: "Beyond Cost: Pak Helpline's Transformational Role",
      FutureTitle: "Unwavering Commitment for Aligarh Educational Complex",
      detail2:
        "Founded in December 2001 by the late Chaudhry Ali Asphar, a visionary dedicated to uplifting the underserved through education, the Aligarh Educational Complex began with the establishment of the Boys’ Higher Secondary School. With overwhelming community response, a Girls’ Higher Secondary School followed in 2002. A separate, purpose-built campus for girls and a hostel offering free accommodation quickly came into existence, further expanding the founder's dream.Although not originally a Helpline project, the complex became a part of Helpline Lahore's mission in 2013, following Chaudhry Ali Asphar’s passing. Recognizing the impact of this educational legacy, Helpline took over its management and infused it with new life—revamping the buildings, expanding facilities, and preserving the institution’s commitment to educational excellence.",
      detail3: `Helpline Lahore reassured families across the region by continuing and enhancing the founder’s vision. Their investment and dedication brought renewed vitality to the complex.
💼 Key Initiatives and Investments by Helpline:
🚌 New Mazda Buses for safer, efficient student transportation
🏫 Smart School Campus Setup – built with modern classrooms and digital facilities
💸 Smart School Building Construction – costing 0.3 Million PKR
Girls’ School Renovation – completed at a cost of 2.2 Million PKR
🪑 Furniture for Smart School – 0.25 Million PKR invested
💻 Computer Labs with 24 Systems – 0.12 Million PKR dedicated to tech-enhanced learning
🎓 BS Program Initiative – providing pathways for higher education
👨‍🏫 Staff Replacement Drive – ensuring highly qualified, dedicated educators
🧺 Poverty Alleviation Program – supporting over 22 rural villages through education`,
      detail4:
        "Through unwavering commitment, generous investment, and a passion for transforming lives, Helpline Lahore has ensured that the Aligarh Educational Complex not only honors its past but builds a brighter future for thousands of students across the region.",
      color: "#f15b43",
    },
    {
      id: 26,
      category: ["Education"],
      img: "/img/causes/imanmaryam.png",
      img1: "/img/causes/sideangle.png",
      img2: "/img/causes/maryamgirls.png",
      img3: "/img/causes/roote.jpg",
      img4: "/img/causes/rooted1.jpg",
      img7: "/img/causes/womenedu1.jpg",
      img8: "/img/causes/womenedu2.jpg",
      link: "",
      link3: "",
      ActualName:
        "Iman Maryam Girls Higher Secondary School Alighar Education Complex",
      detail: "Free education for brighter futures.",
      description: `Aligarh Educational Complex – A Legacy of Learning and Service  
    The Aligarh Educational Complex, located in 244 G.B, continues to be a source of empowerment for over 1,400 students across three schools. Among them is:
    Iman Maryam Girls’ Higher Secondary School – serving more than 600 girls with access to free, high-quality education and pick-and-drop services.  
    This initiative ensures that no girl is held back due to financial hardship or travel difficulties, allowing them to focus fully on their studies and future.`,
      desc: "Iman Maryam Girls Higher Secondary School Alighar Education Complex (Gojra)",
      historyTitle: "A Vision Rooted in Empowerment",
      UpgradeTitle: "Helpline’s Ongoing Commitment to Girls’ Education",
      FutureTitle: "Building Confident, Educated Women for Tomorrow",
      detail2: `Founded in 2002 in response to overwhelming demand after the boys’ school launch, Iman Maryam Girls’ Higher Secondary School was established to offer equal opportunity education for girls.  
    It was built on a separate, purpose-built campus and even included hostel facilities to accommodate students from distant areas.  
    In 2013, Helpline Lahore adopted the management of the entire complex after the founder’s passing, enhancing operations, modernizing infrastructure, and ensuring uninterrupted educational support for hundreds of girls.`,
      detail3: `Helpline Lahore continues to drive the school’s growth with targeted investments and initiatives.  
    👧 Free Uniforms, Textbooks, and Stationery – removing all cost barriers  
    🏗️ Renovation of Girls' School Campus – 2.2 Million PKR spent to uplift learning conditions  
    💼 Qualified Female Educators – appointed through rigorous staff replacement drive  
    🎯 Emphasis on Holistic Development – academic, leadership, and extracurricular training  
    🚌 Transportation Services – enabling safe travel from remote areas  
    🌾 Rural Outreach – benefiting young girls from 22 surrounding villages`,
      detail4:
        "Through strategic investment and deep compassion, Helpline Lahore ensures the school continues to empower the next generation of confident, educated women—each ready to lead, uplift, and transform her community.",
      color: "#65cabb",
    },

    {
      id: 27,
      category: ["Education"],
      img: "/img/causes/smart2.png",
      img1: "/img/causes/smart.png",
      img2: "/img/causes/eman1.jpeg",

      img5: "/img/causes/foundition1.png",
      img6: "/img/causes/foundition2.png",
      img7: "/img/causes/begin.JPG",
      img8: "/img/causes/begin1.JPG",

      link: "https://www.youtube.com/embed/7sh2krvAEZY",
      link3: "https://www.youtube.com/embed/_hliltW3iEM",
      ActualName: "Emman Maryam Smart School Alighar Education Complex",
      detail: "Free education for brighter futures.",
      description: `Aligarh Educational Complex – A Legacy of Learning and Service  
    Within the same powerful framework of educational empowerment, the Emman Maryam Smart School caters to more than 300 primary-level children.  
    This school represents the foundation of lifelong learning, where underprivileged children receive quality education, loving mentorship, and the confidence to dream bigger.`,
      desc: "Emman Maryam Smart School Alighar Education Complex (Gojra)",
      historyTitle: "Where Young Minds Begin Their Journey",
      UpgradeTitle: "Helpline’s Focus on Foundational Learning",
      FutureTitle: "Smart Kids, Brighter Futures",
      detail2: `Established as the third arm of the Aligarh Educational Complex, the Smart School focuses on early childhood and primary education for children who may otherwise have no access to schools.  
    The vision is simple yet powerful—begin education early, make it fun and effective, and empower children for higher success later in life.  
    When Helpline Lahore took charge in 2013, they prioritized this segment by investing in purpose-built infrastructure and child-friendly learning spaces.`,
      detail3: `Helpline Lahore’s mission for the Smart School is rooted in technology, engagement, and equity.  
    🏫 Brand-New Smart School Campus – fully constructed for a cost of 0.3 Million PKR  
    🧸 Early Learning Tools & Resources – age-appropriate, interactive, and engaging  
    💻 Computer Lab Setup – 24 systems installed to develop digital literacy early  
    🪑 Smart School Furniture – 0.25 Million PKR spent on child-friendly furnishings  
    👩‍🏫 Qualified Primary Teachers – passionate and trained to handle young learners  
    📚 Personalized Learning Paths – ensuring no child is left behind  
    🌍 Strong Community Support – reaching children from surrounding rural villages`,
      detail4:
        "With its tailored focus on primary education, the Emman Maryam Smart School prepares young children to enter the future with curiosity, resilience, and purpose—paving the way for a brighter Pakistan.",
      color: "#5fb35b",
    },

    {
      id: 28,
      category: ["Food"],
      img: "/img/causes/jinah1.jpg",
      detail: "Helpline provided free meals to patients at Jinnah Hospital.",
      ActualName: "Jinnah Hospital, Lahore.",
      description:
        "Jinnah Hospital is one of the largest hospitals in Lahore, servicing over 1 million patients each year. In 2019, Helpline Social Welfare Foundation served free meals for patients at Jinnah Hospital, showing their commitment to assisting those in need. The initiative provided over 1,000 meals to patients and their families, helping to ease the burden of affording food. All the patients and their families greatly appreciated this generous gesture and were very thankful for the assistance. The initiative also raised awareness about the importance of providing aid to those in need, and it has been praised by many for its impact.",

      desc: "Meal Distribution Jinnah Hospital, Lahore.",
      color: "#65cabb",
    },
    {
      id: 29,
      category: ["Food"],
      img: "/img/causes/Jinnah2.jpg",
      ActualName: "Munshi Hospital, Lahore.",
      detail: "Helpline provided free meals to patients at Munshi Hospital.",
      description:
        "Mian Muhammad Munshi Hospital is a government–run hospital in Lahore, Pakistan. It is a charitable hospital providing medical care to people of all economic backgrounds. The Helpline Social Welfare Foundation recently served free meals to patients at Mian Muhammad Munshi Hospital. This initiative was taken to provide nutritious and hygienic meals to those in need and to show the foundation’s commitment to the community. The hospital’s staff was thankful for the generous gesture and appreciated the foundation for their kind-heartedness.",

      desc: "Mian Muhammad Munshi Hospital",
      color: "#65cabb",
    },
    {
      id: 30,
      category: ["Food"],
      img: "/img/causes/general1.jpg",
      ActualName: "General Hospital, Lahore.",
      detail: "Helpline provided free meals to patients at General Hospital.",
      description:
        "Helpline Social Welfare Foundation recently provided free meals to patients at General Hospital in Lahore, Pakistan. This act of kindness was made possible by generous donations from several individuals and organizations, which allowed the foundation to provide meals to patients and their families. In addition to providing meals, the foundation also distributed bedsheets and blankets to patients who needed them. This genuinely heartwarming gesture enabled many people to have a better hospital stay. The foundation’s mission is to provide essential services to people in need, and this service at General Hospital is a testament to their commitment.",

      desc: "Free Meal General Hospital, Lahore.",
      color: "#65cabb",
    },
    {
      id: 31,
      category: ["Food"],
      img: "/img/causes/khawaja.jpg",
      ActualName: "Kot Khawaja Saeed, Lahore.",
      detail: "Helpline provided free meals to patients at Kot Khawaja Saeed.",
      description:
        "Helpline Social Welfare Foundation recently organized a unique initiative in the Government Hospital Kot Khawaja Saeed, providing free meals to patients. This noble cause was a great success, as the Hospital staff, patients and their families appreciated this kind gesture. The meals were prepared and distributed by the volunteers of the Foundation, and they brought smiles to the faces of the patients. It was a great way to show the hospital’s commitment to its patients’ well-being and ensure they have access to nutritious meals. This Helpline Social Welfare Foundation initiative was a great success, and it is hoped that Helpline will take up more such initiatives in the future to help the people of Pakistan.",

      desc: "Govt Hospital Kot Khawaja Saeed",
      color: "#65cabb",
    },
    {
      id: 33,
      category: ["Own School"],
      img: "/img/causes/futureplan1.png",
      img1: "/img/causes/gullowali2.jpg",
      img2: "/img/causes/gullowali3.jpg",
      img3: "/img/causes/underconstruction2.jpg",
      img4: "/img/causes/gullowali111.jpg",
      img7: "/img/causes/futureplan1.png",
      img8: "/img/causes/futureplan2.png",
      detail:
        "Al-Kitab provides free education to underprivileged children, ensuring growth.",
      description:
        "Al-Kitab School Rajanpur (Gullowali) is a project of Helpline Welfare Trust NGO, dedicated to providing quality education to children from underprivileged backgrounds in one of the most underserved areas of the region. The school is being established with the vision of creating an accessible learning environment where every child, regardless of financial circumstances, can receive an excellent education. More than 75% of students will study free of cost with full NGO support, while the remaining will pay a minimal fee to help cover basic operational expenses. Alongside a strong academic curriculum, the school will also focus on personal growth, character development, and creating opportunities for a brighter future.",
      historyTitle: "Under Construction Al-Kitab School Rajanpur (Gullowali)",
      detail2:
        "Currently under construction, Al-Kitab School will fill a critical educational gap in a community where, within a 25 km radius, only a handful of primary schools exist. This makes the project not just important but essential for ensuring that children have access to quality learning. The institution will also prioritize women’s education, offering Islamic studies and Quran learning programs, so that future generations grow up with strong moral, ethical, and spiritual foundations. To bring this vision to life, we urgently need donations for construction, furnishing, and classroom setup. Your support will directly contribute to opening doors of knowledge, hope, and opportunity for the children and families of Rajanpur.",
      FutureTitle: "Future of Al-Kitab School Rajanpur (Gullowali)",
      detail4:
        "Our long-term vision for Al-Kitab School is to expand beyond primary and secondary education, growing step-by-step into a college and eventually a full-fledged university. This will allow students from the community to pursue higher education without leaving their hometown, breaking the cycle of limited opportunities in the region. By integrating both modern academics and Islamic education, we aim to create a balanced and capable generation that can lead with knowledge, values, and faith. Your contributions today will not only help complete the school but will lay the foundation for an educational institution that will transform lives for decades to come.",
      ActualName: "Al-Kitab School Rajanpur (Gullowali)",
      desc: "Al-Kitab Education System School Rajanpur (Gullowali).",
      color: "#5fb35b",
    },
    {
      id: 38,
      category: ["Education"],
      img: "/img/causes/banazir1.png",
      img1: "/img/causes/PHOTO-2025-02-19-11-45-31.jpg",
      img2: "/img/causes/banazir2.png",
      img3: "/img/causes/banazir5.png",
      img4: "/img/causes/banazir4.png",
      img5: "/img/causes/banazir3.png",
      img6: "/img/causes/benazir6.png",
      detail:
        "Empowering girls through quality education and comprehensive support services.",
      description: `Established in memory of the late Prime Minister of Pakistan, Benazir Bhutto, the school was founded with the vision of empowering young girls through education in a community where opportunities for them were scarce. Today, it stands as a proud institution educating more than 2,200 underprivileged girls of the area, offering them a chance to break barriers and build better futures. Recently, Helpline adopted the school, taking full responsibility for its operations and development, ensuring that the mission of accessible, quality education for girls continues to grow stronger every day.`,
      pbar: "pbar_1",
      desc: "Benazir Public Girls Higher Secondary School (Nawabshah)",
      ActualName: "Benazir Public Girls Higher Secondary School",
      adopted: "Adopted",
      historyTitle: "From Struggling Institution to Center of Excellence",
      UpgradeTitle: "Helpline's Transformative Investment in Girls' Education",
      FutureTitle: "Building Tomorrow's Female Leaders",
      detail2: `Before Helpline’s intervention, Benazir Public Girls School faced significant challenges that threatened its survival. Inadequate infrastructure, lack of resources, and financial constraints limited its ability to serve the community effectively. Recognizing the transformative power of girls’ education in breaking the cycle of poverty, Helpline stepped in and revitalized the institution. Today, it has become a model school and a pillar of educational excellence in the region.`,
      detail3: `Helpline’s comprehensive adoption has strengthened every aspect of the school’s operations and academic delivery:
   Qualified Female Teachers – providing culturally appropriate role models
   Complete Educational Resources – free textbooks, stationery, and supplies
   Infrastructure Improvements – upgraded classrooms, safe buildings, and modern facilities
   Nutritional Support – meal programs so students can focus on learning
   Safe Transportation – enabling girls from distant areas to attend school securely
   Technology Integration – computer labs and digital learning opportunities
   Scholarship Programs – helping exceptional students pursue higher education
   Community Engagement – collaborating with families to encourage and sustain girls’ education`,
      detail4:
        "With its renewed strength, Benazir Public Girls School now acts as a catalyst for social change. Each girl who studies here is empowered with the knowledge, confidence, and skills to shape a brighter future—not just for herself but for her family and community. Through Helpline’s sustained commitment, the school continues to produce future leaders, professionals, and change-makers who carry forward the legacy of resilience, empowerment, and progress.",
      color: "#f15b43",
    },
    {
      id: 39,
      category: ["Own School"],
      img: "/img/bg/breadcrumb_bg_4.jpg",
      img1: "/img/causes/alkitab3.jpg",
      img2: "/img/causes/alkitab4.jpg",
      detail:
        "Al-Kitab provides free education to underprivileged children, ensuring growth.",
      description:
        "Al-Kitab is a school that was established by Helpline NGO with the objective of providing quality education to children from underprivileged backgrounds. The school has a unique fee structure where more than 75 % of students receive support from the NGO and are able to attend the school for free. The remaining 25 % of students pay a minimal fee, which is used to cover basic operational expenses. ",

      desc: "Al-Kitab School of Technology Shaikhupura (Abid Town ).",
      ActualName: "Al-Kitab School of Technology ",
      detail2:
        "At Al-Kitab, we believe that every child deserves access to quality education, regardless of their financial background. Our curriculum is designed to provide a well-rounded education that focuses on academic excellence, personal growth, and character development.",
      detail3:
        "We also provide additional support to students who require it, such as counselling and extra academic assistance, to ensure that they reach their full potential. Al-Kitab is more than just a school; it is a community that is committed to creating a better future for our students and their families. We are proud of the work that we do and are dedicated to continuing to provide support to children in need.",
      color: "#65cabb",
    },
    {
      id: 40,
      category: ["Adopted Schools"],
      img: "/img/causes/nimro1.jpg",
      img1: "/img/causes/nimro2.jpg",
      img2: "/img/causes/nimro3.jpg",
      detail:
        "GPS Ando Muhajir School empowers students with quality education.",
      description:
        "The NGO has taken on the responsibility of providing financial support to the school, including paying the salaries of the teachers and providing essential supplies and resources for the students. This support has been crucial for the school, which serves a primarily low-income student population. Overall, the adoption of Govt. Nimro Sharif School by the helpline NGO is an outstanding example of how community-based organizations can work together to improve education outcomes for underprivileged students. By providing resources and support for both students and teachers, the NGO is making a significant impact on the lives of those in the community.",
      pbar: "pbar_1",
      desc: "Sindh Govt Primary School (Boys), Karachi (Sammu Goth) ",
      ActualName: "Sindh Govt Primary School",
      adopted: "Adopted",
      color: "#f15b43",
    },
    // {
    //   id: 41,
    //   category: ["Adopted Schools"],
    //   img: "/img/causes/nimro1.jpg",
    //   img1: "/img/causes/nimro2.jpg",
    //   img2: "/img/causes/nimro3.jpg",
    //   detail:
    //     "GPS Ando Muhajir School empowers students with quality education.",
    //   description:
    //     "The NGO has taken on the responsibility of providing financial support to the school, including paying the salaries of the teachers and providing essential supplies and resources for the students. This support has been crucial for the school, which serves a primarily low-income student population. Overall, the adoption of Govt. Nimro Sharif School by the helpline NGO is an outstanding example of how community-based organizations can work together to improve education outcomes for underprivileged students. By providing resources and support for both students and teachers, the NGO is making a significant impact on the lives of those in the community.",
    //   pbar: "pbar_1",
    //   desc: "Sindh Govt Primary School (Girls), Karachi (Sammu Goth) ",
    //   ActualName: "Sindh Govt Primary School",
    //   adopted: "Adopted",
    //   color: "#f15b43",
    // },
    {
      id: 42,
      category: ["Medical"],
      img: "/img/causes/walkin1.jpg",
      img1: "/img/causes/walkin.jpg",
      img2: "/img/causes/walkin2.png",
      detail:
        "Walkin Patients are provided with free medical treatment.",
      description:
        "Every day, countless deserving patients come to us in search of hope, and we make sure no one leaves without care. From free OPD consultations and life-saving medicines to providing wheelchairs and artificial limbs, our mission is to bring dignity and relief to those who cannot afford treatment. These small acts of compassion often mean the world to someone struggling to walk, work, or live without pain. Our yearly expenditure of ₨ 6,391,296 for walk-in patients reflects not just numbers, but thousands of stories of lives touched and restored. Each rupee spent carries a purpose—to heal, to uplift, and to remind every person who walks through our doors that humanity still cares.",
      pbar: "pbar_1",
      desc: "Walkin Patients Coming for Treatment in Helpline Headoffice",
      ActualName: "Walkin Patients are provided with free medical treatment.",
      adopted: "Adopted",
      color: "#f15b43",
    },
    {
      id: 44,
      category: ["Water"],
      img: "/img/causes/karbathwater.jpg",
      img1: "/img/causes/water1.jpg",
      img2: "/img/causes/water2.jpg",
      ActualName: "Water Supply in KARBATH",
      detail:
        "Helpline ensures clean water in KARBATH: filtration plants, solar wells, hand pumps.",
      description:
        "Provision of clean water to deprived areas is one of the main objectives of Helpline. In this regard, two water filtration plants costing Rs 1.8 Million have already been installed at Karbath and Kahna. A solar tube well has also been installed in a remote area of Khuzdar Baluchistan. Helpline has successfully installed about 1,500 hand pumps in various areas inhabited by underprivileged families.",

      desc: "CLEAN WATER PROJECT IN KARBATH",
      color: "#65cabb",
    },
    {
      id: 45,
      category: ["Water"],
      img: "/img/causes/cause2.jpg",
      img1: "/img/causes/punjabwater2.jpg",
      img2: "/img/causes/punjabwater.jpg",
      ActualName: "Water Supply in PUNJAB",
      detail:
        "Helpline ensures clean water in PUNJAB: filtration plants, solar wells, hand pumps.",
      description:
        "Provision of clean water to deprived areas is a key objective of Helpline. In Punjab, two water filtration plants costing Rs 1.8 Million have been installed to serve communities in need. To address the water needs of rural communities, Helpline has also successfully installed over 1,500 hand pumps in various underprivileged areas across the province. These efforts aim to ensure access to safe drinking water for families in need, improving health and quality of life in the region.",

      desc: "CLEAN WATER PROJECT IN PUNJAB",
      color: "#f15b43",
    },
    {
      id: 46,
      category: ["Water"],
      img: "/img/causes/cause3.jpg",
      img1: "/img/causes/water1.jpg",
      img2: "/img/causes/water2.jpg",
      ActualName: "Water Supply in KPK",
      detail:
        "Helpline ensures clean water in KPK: filtration plants, solar wells, hand pumps.",
      description:
        "In KPK, Helpline has initiated a clean water plant project to provide safe drinking water to underserved communities. This project aims to address the critical need for access to clean and hygienic water, which is essential for maintaining health and well-being. Helpline is committed to ensuring that this project is successful and that clean water is available for all those in need.",
      img1: "/img/causes/cause4.jpg",
      img2: "/img/causes/kpkwater2.jpg",
      detail:
        "Helpline ensures clean water in KPK: filtration plants, solar wells, hand pumps.",
      description:
        "In KPK, Helpline has initiated a clean water plant project to provide safe drinking water to underserved communities. This project aims to address the critical need for access to clean and hygienic water, which is essential for maintaining health and well-being. Helpline is committed to expanding its efforts in the future by implementing larger and more impactful clean water initiatives across the region. These upcoming projects are currently in the planning stages and will soon be launched to benefit countless families, ensuring sustainable access to clean water. Through these efforts, Helpline aims to make a significant difference in improving the quality of life for those living in water-scarce areas of KPK.",

      desc: "CLEAN WATER PROJECT IN KPK",
      color: "#65cabb",
    },
    {
      id: 47,
      category: ["Water"],
      img: "/img/causes/cause4.jpg",

      img1: "/img/causes/blochistanwater.jpg",
      img2: "/img/causes/blochistanwater2.jpg",
      ActualName: "Water Supply in BALOCHISTAN",
      detail:
        "Helpline ensures clean water in BALOCHISTAN: filtration plants, hand pumps.",
      description:
        "Helpline is dedicated to ensuring access to clean water in Balochistan, particularly in underserved areas like Khuzdar. Recognizing the urgent need for safe drinking water, the organization has implemented impactful projects to improve water availability for local communities. These initiatives include the installation of advanced water filtration plants, which provide purified water to hundreds of families daily, reducing the risk of waterborne diseases. In addition, Helpline has successfully installed numerous hand pumps in remote villages, empowering underprivileged families with easy access to clean water near their homes. These projects not only improve health and hygiene but also save time and effort for women and children who often travel long distances for water. Helpline remains committed to expanding these efforts.",

      desc: "CLEAN WATER PROJECT IN BALOCHISTAN",
      color: "#5fb35b",
    },

    {
      id: 48,
      category: ["Water"],
      img: "/img/water/manawanfilter.jpg",
      img1: "/img/water/manawanfilter1.jpg",
      img2: "/img/water/manawanfilter2.jpg",
      img3: "/img/water/manawanfilter3.jpg",
      img4: "/img/water/manawanfilter4.jpg",
      img5: "/img/water/manawanfilter5.jpg",
      img6: "/img/water/manawanfilter6.jpg",
      historyDescription: "Every child deserves the gift of clean water—a foundation for health, growth, and a brighter tomorrow. At Manawan School in Lahore, Helpline Welfare has transformed this dream into reality by installing a water filtration plant, ensuring that each student can quench their thirst with safe, pure water as they pursue their education.",
      ActualName: "Water Supply in MANAWAN",
      detail:
        "Every child deserves the gift of clean water—a foundation for health, growth, and a brighter tomorrow.",
      description:
        "Imagine a child’s relief when they no longer fear the water they drink—water that now strengthens their body and fuels their dreams. In the slum area of Manawan, Lahore, where families once had to buy water just to survive, Helpline Welfare Trust has brought lasting change by installing a state-of-the-art RO water filtration plant. This isn’t just a facility; it’s a lifeline. The plant provides free, clean drinking water not only to Manawan School students and staff but also to nearby slum residents, protecting them from disease and easing their daily struggles. What was once a burden is now a blessing—safe water, good health, and new hope for a better tomorrow.",
      desc: "Clean Water for Healthy Life, Healthy Future - Manawan School, Lahore",
      color: "#5fb35b",
    },
  ],
  homeCauses: [
    {
      id: 1,
      category: ["House Constructions"],
      img: "/img/causes/houseconstruction1.jpeg",
      img1: "/img/causes/construction2.jpeg",
      img2: "/img/causes/constructions1.jpeg",
      detail:
        "Floods hit Pakistan; Abdul Akbar, Helpline provide economical housing solutions.",
      description:
        "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
      desc: "House Constructions For Flood Effectives In Rajanpur",
      color: "#f15b43",
    },
    {
      id: 8,
      category: ["Water"],
      img: "/img/causes/cause4.jpg",
      img1: "/img/causes/blochistanwater.jpg",
      img2: "/img/causes/blochistanwater2.jpg",
      detail:
        "Installation of Filtration Plants and Hand Pumps for the availability of Clean Water",
      description:
        "Helpline is dedicated to ensuring access to clean water in Balochistan, particularly in underserved areas like Khuzdar. Recognizing the urgent need for safe drinking water, the organization has implemented impactful projects to improve water availability for local communities. These initiatives include the installation of advanced water filtration plants, which provide purified water to hundreds of families daily, reducing the risk of waterborne diseases. In addition, Helpline has successfully installed numerous hand pumps in remote villages, empowering underprivileged families with easy access to clean water near their homes. These projects not only improve health and hygiene but also save time and effort for women and children who often travel long distances for water. Helpline remains committed to expanding these efforts.",
      desc: "CLEAN WATER PROJECT IN BALOCHISTAN",
      color: "#5fb35b",
    },
    {
      id: 9,
      category: ["Education"],
      img: "/img/causes/roruschool.jpg",
      img1: "/img/causes/roru1.jpg",
      img2: "/img/causes/roru2.jpg",
      detail:
        "Govt. Roru Goth School empowers students with quality education.",
      description:
        "Govt. Roru Goth School, Alighar Education Complex (Gojra) is an exceptional institution that is supported by Helpline NGO. The school is committed to providing quality education to students who may not have the means to afford their fees. The students at the school are highly motivated and determined, despite facing financial difficulties. They are driven to succeed academically and are dedicated to their studies. The school's commitment to providing education to underprivileged students is highly commendable, and Helpline NGO's support has been essential in making this possible. By providing financial assistance, Helpline NGO is ensuring that these students have access to a supportive learning environment, with qualified and dedicated teachers. The school's academic programs are tailored to meet the unique needs of each student, ensuring that they receive a comprehensive education that prepares them for their future.",
      desc: "GPS Roru Goth School (Mirpurkhas).",
      adopted: "Adopted",
      color: "#f15b43",
    },
  ],

  team: [
    {
      id: 0,
      designation: "Managing Trustee",
      name: "Muhammad Iqbal Khan",
      image: "/img/organization/MUHAMMADIQBALKHAN.jpg",
      description:
        "As Managing Trustee at Helpline NGO, Muhammad Iqbal Khan brings extensive experience in humanitarian work and organizational leadership. His dedication to serving the community has been instrumental in driving our mission forward.",
      email: "info@iy.com.pk",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Faisal Town, Lahore",
      detailedDescription:
        "Muhammad Iqbal Khan has been serving as the Managing Trustee of Helpline NGO, where he oversees the organization's strategic initiatives and day-to-day operations. Under his leadership, the organization has expanded its reach and impact across multiple regions. His vision for community development and social welfare has helped establish numerous successful programs in education, healthcare, and disaster relief.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 1,
      designation: "GM (Admin & HR)",
      name: "Colonel Muhammad Ali (Retd)",
      image: "/img/organization/Ali.jpg",
      description:
        "Colonel Muhammad Ali (Retd) serves as the General Manager of Administration and Human Resources at Helpline NGO. With his military background and extensive management experience, he ensures efficient operations and effective human resource management.",
      email: "muhammad.ali@helpline.org",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Head Office, Lahore",
      detailedDescription:
        "Colonel Muhammad Ali brings a wealth of experience from his distinguished military career to his role as GM (Admin & HR). His expertise in organizational management and leadership has been crucial in streamlining our administrative processes and developing our human resources capabilities. He has implemented several successful initiatives to improve operational efficiency and staff development.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 2,
      designation: "GM (Education)",
      name: "Mr Mudasir Ahmad",
      image: "/img/organization/gmeducation.png",
      description:
        "Mr Mudasir Ahmad leads our education initiatives as the General Manager of Education. His expertise in educational management and curriculum development has been vital in expanding our educational programs.",
      email: "mudasir.ahmad@helpline.org",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Education Department, Lahore",
      detailedDescription:
        "As GM (Education), Mr Mudasir Ahmad has been instrumental in developing and implementing educational programs that have benefited thousands of students. His focus on quality education and innovative teaching methods has helped raise the standards of education in our schools and educational centers.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 3,
      designation: "Senior Manager Accounts",
      name: "Mr Hamid Hassan khan",
      image: "/img/organization/hamid.jpg",
      description:
        "Mr Hamid Hassan Khan serves as the Senior Manager Accounts, overseeing all financial operations and ensuring fiscal transparency for Helpline NGO.",
      email: "hamid.khan@helpline.org",
      workingArea: "Karachi, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Head Office, Lahore",
      detailedDescription:
        "Mr. Hamid Hassan Khan is responsible for managing the financial health of Helpline NGO. His expertise in accounting and financial management ensures that all funds are utilized efficiently and transparently to maximize our impact on the community. He plays a vital role in budgeting, financial reporting, and compliance.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 4,
      designation: "Manager Admin & Support",
      name: "Mr Sarfraz Ahmad Bhullar",
      image: "/img/organization/sarfraz.jpg",
      description:
        "Mr Sarfraz Ahmad Bhullar manages administrative functions and provides essential support to ensure the smooth operation of Helpline NGO.",
      email: "sarfraz.bhullar@helpline.org",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Head Office, Lahore",
      detailedDescription:
        "Mr. Sarfraz Ahmad Bhullar is key to maintaining efficient administrative operations. His role involves managing office logistics, coordinating support services, and ensuring that all departments have the resources they need to function effectively. He is dedicated to creating a supportive and organized work environment.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 5,
      designation: "Manager Media/ Coord ",
      name: "Mr Hafiz Bilal Nurani",
      image: "/img/organization/bilalnurani.jpg",
      description:
        "Mr Hafiz Bilal Nurani oversees media relations and coordination, ensuring effective communication of Helpline NGO's mission and activities.",
      email: "bilal.nurani@helpline.org",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Media Department, Lahore",
      detailedDescription:
        "Mr. Hafiz Bilal Nurani is responsible for managing Helpline NGO's public image and communication strategies. He coordinates media outreach, creates compelling content, and ensures that our message reaches a broad audience, fostering greater awareness and support for our initiatives.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 6,
      designation: "Manager Welfare & Health",
      name: "Mr Atif Hussain",
      image: "/img/organization/ATIF.jpg",
      description:
        "Mr Atif Hussain is the Manager of Welfare & Health, dedicated to developing and implementing programs that improve community well-being and access to healthcare.",
      email: "atif.hussain@helpline.org",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Health Department, Lahore",
      detailedDescription:
        "Mr. Atif Hussain leads our efforts in welfare and health, focusing on initiatives that provide essential health services and promote overall community well-being. He is instrumental in organizing health camps, medical aid programs, and awareness campaigns to address critical health needs.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 7,
      designation: "Software Developer",
      name: "Syed Mudasir Bukhari",
      image: "/img/organization/mudasirdp.JPG",
      description:
        "Syed Mudasir Bukhari is a Software Developer at Helpline NGO, contributing to the development and maintenance of internal systems and digital platforms that support the organization’s operations.",
      email: "smudasir256@gmail.com",
      workingArea: "PIESTACK Dha Phase 5, Lahore, Pakistan",
      nationality: "Pakistani",
      address: "Green Cap Housing Society Lahore, Pakistan",
      detailedDescription:
        "As a Software Developer at Helpline NGO, I’m dedicated to creating reliable and efficient digital solutions that support our mission. I focus on building tools that make our internal processes smoother, our data more secure, and our outreach more effective. Whether it's developing intuitive user interfaces or maintaining robust backend systems, I aim to use technology to make a real impact on the communities we serve.",
      socialLinks: [
        {
          platform: "facebook",
          icon: "fab fa-facebook-f",
          url: "https://www.facebook.com/syed.mudasir.shah.911658/",
        },
        {
          platform: "youtube",
          icon: "fab fa-youtube",
          url: "https://www.youtube.com/@Syedmudasirbukharivlogs",
        },
      ],
    },

    {
      id: 8,
      designation: "Junior Manager Accounts",
      name: "Mr Faisal Mushtaq",
      image: "/img/organization/faisal.jpg",
      description:
        "Mr Faisal Mushtaq assists in managing the accounts and financial records of Helpline NGO, ensuring accuracy and compliance.",
      email: "faisal.mushtaq@helpline.org",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Head Office, Lahore",
      detailedDescription:
        "Mr. Faisal Mushtaq supports the senior accounts team in day-to-day financial operations. His responsibilities include data entry, reconciliation, and preparing financial reports, contributing to the overall financial integrity of the organization.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 9,
      designation: "Manager Media",
      name: "Hafiz Bilal Arshad",
      image: "/img/organization/bilalnurani.jpg",
      description:
        "Hafiz Bilal Arshad is a Manager Media, responsible for crafting and disseminating the organization's message to the public and stakeholders.",
      email: "bilal.arshad@helpline.org",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Media Department, Lahore",
      detailedDescription:
        "Hafiz Bilal Arshad focuses on media engagement and public relations. He develops communication strategies, manages press releases, and coordinates with media outlets to highlight Helpline NGO's impactful work and raise public awareness.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 12,
      designation: "Senior Manager Purchases",
      name: "Mr Mehmood Ali joiya",
      image: "/img/organization/mehmoodjoya.jpg",
      description:
        "Mr Mehmood Ali Joiya is the Senior Manager Purchases, overseeing procurement processes to ensure efficient and cost-effective acquisition of resources for Helpline NGO.",
      email: "mehmood.joiya@helpline.org",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Head Office, Lahore",
      detailedDescription:
        "Mr. Mehmood Ali Joiya leads the purchasing department, responsible for all procurement activities. He ensures that all goods and services are acquired in a timely and efficient manner, adhering to budget constraints and quality standards, which is crucial for the smooth operation of our various programs.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 13,
      designation: "Manager Transport",
      name: "Rashid Nisar",
      image: "/img/organization/rashid.jpg",
      description:
        "Rashid Nisar serves as the Manager Transport, overseeing the logistics and transportation needs of Helpline NGO's operations.",
      email: "rashid.nisar@helpline.org",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Logistics Department, Lahore",
      detailedDescription:
        "Rashid Nisar ensures that all transportation for Helpline NGO's various projects and staff is managed effectively. His responsibilities include fleet management, route planning, and ensuring the timely delivery of aid and resources, which is vital for our field operations.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    // {
    //   id: 15,
    //   designation: "Media Executive",
    //   name: "Usama Mansoor",
    //   image: "/img/organization/usama.jpg",
    //   description:
    //     "Usama Mansoor is a Media Executive, supporting the media team in creating engaging content and managing communication channels for Helpline NGO.",
    //   email: "arj.zahara@helpline.org",
    //   workingArea: "Punjab, Pakistan",
    //   nationality: "Pakistani",
    //   address: "Helpline NGO Media Department, Lahore",
    //   detailedDescription:
    //     "Usama Mansoor contributes to the daily operations of the media department, assisting with content creation, social media management, and public relations activities. Her efforts help amplify Helpline NGO's voice and reach a broader audience.",
    //   socialLinks: [
    //     { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
    //     { platform: "twitter", icon: "fab fa-twitter", url: "#" },
    //     { platform: "youtube", icon: "fab fa-youtube", url: "#" },
    //   ],
    // },
    {
      id: 16,
      designation: "Chairman",
      name: "Muhammad Aslam Khan Kakarh (Engr)",
      image: "/img/organization/MASLAMKHANKAKKAR.jpg",
      description:
        "As Chairman of Helpline NGO, Engineer Muhammad Aslam Khan Kakarh provides strategic leadership and vision to our organization. His engineering background and humanitarian commitment drive our innovative approach to community service.",
      email: "Principal@sheltersasseociates.com",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Head Office, Lahore",
      detailedDescription: `
Dear Friends,  
At Helpline Welfare Trust we believe in a world where every child has the right to education, every woman the opportunity to thrive, and every family access to healthcare. This year, with your support, we’ve taken meaningful strides toward this vision—enrolling underprivileged children in schools, empowering women through vocational training, and providing medical care to marginalized communities.  
Education ignites potential, skills build independence, and healthcare restores dignity. Every life transformed is a testament to the power of collective action. Yet, the journey continues. With your partnership, we can reach more lives, break more barriers, and create lasting change.  
Thank you for standing with us. Together, let’s build a future where no one is left behind.  `,
      socialLinks: [
        {
          platform: "facebook",
          icon: "fab fa-facebook-f",
          url: "https://www.facebook.com/sheltersasseociates",
        },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 17,
      designation: "President",
      name: "Khalil Ahmad Malik",
      image: "/img/organization/KHALILAHMADMALIK.jpg",
      description:
        "Khalil Ahmad Malik serves as the President of Helpline NGO, bringing years of experience in organizational leadership and community development. His strategic vision and dedication have been crucial to our growth and impact.",
      email: "malikpapermart47@gmail.com",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Main Urdu bazaar, Lahore",
      detailedDescription: `Dear Changemakers,  
Every child’s education, every woman’s economic independence, and every family’s healthcare access fuels my passion at Helpline Welfare Trust. This year, we’ve turned challenges into opportunities—through classrooms built, skills mastered, and lives healed.  
Your belief in our mission empowers marginalized communities to thrive with dignity. Together, we’re not just offering aid, but restoring hope and rewriting futures. The journey continues, and your support remains our strongest pillar. `,
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 18,
      designation: "Vice President",
      name: "Ms Lubna Yaqoob Tahir",
      image: "/img/organization/lubna.png",
      description:
        "Ms Lubna Yaqoob Tahir serves as the Vice President of Helpline NGO, bringing valuable expertise in program management and community engagement. Her focus on women's empowerment and education has strengthened our initiatives in these crucial areas.",
      email: "lubnayaqoob60@gmail.com",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Head Office, Lahore",
      detailedDescription: `Dear Friends,  
                           At Helpline Welfare Trust, we believe in empowering lives through education, skills, and healthcare. This year, we’ve supported destitute children’s education, enabled women with vocational training, and provided healthcare to underserved communities. Every skill learned, every child educated, and every life healed strengthens our collective future.  
                            Your support fuels this transformation. Together, we’re not just changing lives—we’re building a more equitable world where dignity and opportunity thrive.  `,
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 19,
      designation: "General Secretary",
      name: "Ikhlaq ur Rehman",
      image: "/img/organization/MIANAKHLAQURREHMAN.jpg",
      description:
        "Ikhlaq ur Rehman serves as the General Secretary, responsible for the overall administration and coordination of Helpline NGO's activities and records.",
      email: "helpline.org.pk@gmail.com",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline Welfare Trust Head Office, Lahore",
      detailedDescription: `With a heart full of gratitude and humility, I extend my deepest thanks to each of you for your unwavering support and generosity. Your kindness has been the driving force behind our Welfare Trust’s mission to uplift the most vulnerable members of society—destitute children, marginalized families, and underserved women—guiding them toward a life of dignity, purpose, and faith. We strongly believe that the system based on the concept of MAWAKHAT-E-MADINA, which guide each memeber of nation to contriubute his/her and ensure basic right to every deserving member of the nation
       is the only WAY FORWAR to again stand tall among the nations of the world. Our Trust is committed to providing free modern and religious education, ensuring that underprivileged children receive not only academic knowledge but also moral and spiritual grounding. We believe that true education shapes character, instilling values of compassion, integrity, and service to humanity. So, we work tirelessly to promote social harmony, bridging divides and uniting people under the universal message of TAWHEED and MAWAKHAT-E-MADINA. Recognizing that sustainable change requires holistic empowerment, we have launched initiatives for skill development, vocational training, and micro-finance support for women and struggling families, enabling them to become self-reliant and respected members of society.  
Your contributions are not just donations—they are investments in a brighter, more equitable future. Together, we are sowing seeds of hope, justice, and unity. Let us continue this sacred mission with renewed dedication.  
May the Almighty bless you abundantly for your kindness.  `,
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    // {
    //   id: 20,
    //   designation: "Finance Secretary",
    //   name: "GP Capt Malik Mumtaz Awan (Retd)",
    //   image: "/img/team/iconimage.png",
    //   description:
    //     "Malik Mumtaz Awan is the Finance Secretary, managing all financial affairs and ensuring accountability and proper utilization of funds for Helpline NGO.",
    //   email: "",
    //   workingArea: "Punjab, Pakistan",
    //   nationality: "Pakistani",
    //   address: "Valencia Town, Lahore",
    //   detailedDescription:
    //     "As Finance Secretary, Malik Mumtaz Awan is central to the financial governance of Helpline NGO. He oversees budgeting, financial reporting, and compliance with financial regulations, ensuring transparency and responsible management of resources to support our humanitarian efforts.",
    //   socialLinks: [
    //     { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
    //     { platform: "twitter", icon: "fab fa-twitter", url: "#" },
    //     { platform: "youtube", icon: "fab fa-youtube", url: "#" },
    //   ],
    // },
    {
      id: 21,
      designation: "Administrator KMC",
      name: "COL Zahoor Hussain (Retd)",
      image: "/img/organization/zahoor.jpg",
      description:
        "Colonel Zahoor Hussain (Retd) serves as the Administrator for KMC (Karachi Metropolitan Corporation) initiatives at Helpline NGO, leveraging his experience for local governance and development projects.",
      email: "zahoor.hussain@helpline.org",
      workingArea: "Punjab, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO KMC Office, Lahore",
      detailedDescription:
        "Colonel Zahoor Hussain (Retd) utilizes his extensive administrative background to manage projects in collaboration with KMC. His role is vital in streamlining urban development and community welfare initiatives within Karachi, ensuring effective execution and positive impact.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 22,
      designation: "Education Advisor",
      name: "Aijaz Hussain Kazi (Former Secretary)",
      image: "/img/organization/ajazqazi.jpg",
      description:
        "Aijaz Hussain Kazi, a former Secretary, acts as an Education Advisor, providing expert guidance for Helpline NGO's educational strategies and programs.",
      email: "aijaz.kazi@helpline.org",
      workingArea: "Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Education Department, Lahore",
      detailedDescription:
        "With his background as a former Secretary, Aijaz Hussain Kazi offers invaluable insights into educational policy and implementation. He advises on curriculum development, teacher training, and strategies to improve educational access and quality across Helpline NGO's initiatives.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 23,
      designation: "Marketing Consultant",
      name: "Brigadier Zaheer Ahmad (Retd)",
      image: "/img/team/iconimage.png",
      description:
        "Brigadier Zaheer Ahmad (Retd) serves as a Marketing Consultant, providing strategic advice on promoting Helpline NGO's mission and fundraising efforts.",
      email: "zaheer.ahmad@helpline.org",
      workingArea: "Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Head Office, Karachi",
      detailedDescription:
        "Brigadier Zaheer Ahmad (Retd) brings his strategic planning expertise to enhance Helpline NGO's marketing and outreach. He advises on public relations campaigns, donor engagement, and effective communication strategies to broaden our support base and increase awareness of our work.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 24,
      designation: "Tech Consultant",
      name: "Colonel Waqar Ahmad (Retd)",
      image: "/img/organization/waqar.jpg",
      description:
        "Colonel Waqar Ahmad (Retd) is our Tech Consultant, offering expert advice on technological solutions to enhance Helpline NGO's operations and digital presence.",
      email: "waqar.ahmad@helpline.org",
      workingArea: "Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Head Office, Karachi",
      detailedDescription:
        "Colonel Waqar Ahmad (Retd) provides strategic guidance on integrating technology into Helpline NGO's work. His expertise covers areas from data management and IT infrastructure to digital communication tools, ensuring that the organization leverages modern technology for greater efficiency and impact.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    // {
    //   id: 25,
    //   designation: "Media Consultant",
    //   name: "Amir Hashim Khakwani",
    //   image: "/img/organization/KHAKWANI.jpg",
    //   description:
    //     "Amir Hashim Khakwani serves as a Media Consultant, advising Helpline NGO on effective media strategies and public communication.",
    //   email: "amir.khakwani@helpline.org",
    //   workingArea: "Pakistan",
    //   nationality: "Pakistani",
    //   address: "Helpline NGO Media Department, Lahore",
    //   detailedDescription:
    //     "Amir Hashim Khakwani's role as Media Consultant involves providing expert advice on media relations, content development, and public outreach. He helps shape the narrative around Helpline NGO's work, ensuring consistent and impactful communication across various media platforms.",
    //   socialLinks: [
    //     { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
    //     { platform: "twitter", icon: "fab fa-twitter", url: "#" },
    //     { platform: "youtube", icon: "fab fa-youtube", url: "#" },
    //   ],
    // },
    {
      id: 26,
      designation: "Regional Head (Sindh)",
      name: "Khushnood Ahmad Khan",
      image: "/img/organization/khushnod.jpg",
      description:
        "Khushnood Ahmad Khan is the Regional Head for Sindh, overseeing Helpline NGO's operations and initiatives within the Sindh province.",
      email: "khushnood.khan@helpline.org",
      workingArea: "Sindh, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Regional Office, Sindh",
      detailedDescription:
        "As Regional Head, Khushnood Ahmad Khan is responsible for the strategic planning and execution of all Helpline NGO programs in Sindh. He works closely with local communities and stakeholders to identify needs and implement effective solutions, ensuring our efforts are responsive to regional contexts.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 27,
      designation: "Regional Head (South)",
      name: "Brigadier Moeen ud Din Ghazalli (Retd)",
      image: "/img/team/iconimage.png",
      description:
        "Brigadier Moeen ud Din Ghazalli (Retd) serves as the Regional Head for the Southern regions, leading and coordinating Helpline NGO's activities in those areas.",
      email: "moeen.ghazalli@helpline.org",
      workingArea: "Southern Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Regional Office, Southern Pakistan",
      detailedDescription:
        "Brigadier Moeen ud Din Ghazalli (Retd) brings his leadership and organizational skills to manage Helpline NGO's operations in the southern regions. He focuses on developing and overseeing projects that address specific humanitarian needs in these diverse communities.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 28,
      designation: "Regional Head (North)",
      name: "Ms Nuzhat Fatima (Former Secretary)",
      image: "/img/team/iconimage.png",
      description:
        "Ms Nuzhat Fatima, a former Secretary, is the Regional Head for the Northern regions, guiding Helpline NGO's initiatives and partnerships in Northern Pakistan.",
      email: "nuzhat.fatima@helpline.org",
      workingArea: "Northern Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Regional Office, Northern Pakistan",
      detailedDescription:
        "Ms. Nuzhat Fatima applies her extensive administrative experience to oversee Helpline NGO's projects in the northern parts of Pakistan. She focuses on strategic development, community engagement, and ensuring the effective delivery of aid and support to communities in these areas.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 29,
      designation: "Director Quran Academy",
      name: "Akhlas Ahmad",
      image: "/img/team/iconimage.png",
      description:
        "Akhlas Ahmad is the Director of Quran Academy, leading educational programs focused on religious studies and Quranic education.",
      email: "akhlas.ahmad@helpline.org",
      workingArea: "Karachi, Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Quran Academy, Karachi",
      detailedDescription:
        "As Director of the Quran Academy, Akhlas Ahmad is dedicated to promoting religious education and moral values. He develops and supervises programs that provide access to quality Quranic studies, contributing to community spiritual development.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 30,
      designation: "Chairperson",
      name: "Ms Lubna Yaqoob Tahir",
      image: "/img/team/iconimage.png",
      description:
        "Ms Lubna Yaqoob Tahir serves as the Chairperson, providing leadership and strategic direction for key organizational committees and initiatives.",
      email: "chairperson@helpline.org",
      workingArea: "Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Head Office, Karachi",
      detailedDescription:
        "Ms. Lubna Yaqoob Tahir, also serving as Vice President, takes on the role of Chairperson for specific internal committees and special projects. Her leadership in this capacity helps drive particular initiatives, often focusing on women's empowerment and educational programs.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 31,
      designation: "Friend/Reformer",
      name: "Muhammad Arif Mehr",
      image: "/img/organization/arifmehar.jpg",
      description:
        "Muhammad Arif Mehr is a Friend/Reformer, contributing to Helpline NGO's mission through his dedication and advocacy for social change.",
      email: "arif.mehr@helpline.org",
      workingArea: "Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Associate, Pakistan",
      detailedDescription:
        "Muhammad Arif Mehr supports Helpline NGO's objectives by promoting its values and advocating for its causes within his network and community. His commitment helps expand our reach and impact, encouraging broader participation in humanitarian efforts.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 32,
      designation: "Friend/Reformer",
      name: "Brig Zahid Hussain Goraya (Retd)",
      image: "/img/team/iconimage.png",
      description:
        "Brigadier Zahid Hussain Goryaya (Retd) is a Friend/Reformer, lending his experience and support to various initiatives of Helpline NGO.",
      email: "zahid.goryaya@helpline.org",
      workingArea: "Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Associate, Pakistan",
      detailedDescription:
        "Brigadier Zahid Hussain Goryaya (Retd) contributes to Helpline NGO through his advisory role and participation in reform-oriented projects. His valuable insights help in streamlining processes and enhancing the effectiveness of our humanitarian programs.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 33,
      designation: "Friend/Reformer",
      name: "Colonel Zubair Ahmad Chughtai (Retd)",
      image: "/img/organization/zubair.jpg",
      description:
        "Colonel Zubair Ahmad Chughtai (Retd) acts as a Friend/Reformer, providing valuable input and support for Helpline NGO's various community development projects.",
      email: "zubair.chughtai@helpline.org",
      workingArea: "Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Associate, Pakistan",
      detailedDescription:
        "Colonel Zubair Ahmad Chughtai (Retd) supports Helpline NGO by bringing his experience to bear on initiatives aimed at community improvement and reform. His dedication helps ensure that our projects are well-planned and effectively executed for maximum benefit.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 34,
      designation: "Friend/Reformer",
      name: "Sqn Ldr Muhammad Naeem Ahmad Khan (Retd)",
      image: "/img/team/iconimage.png",
      description:
        "Squadron Leader Muhammad Naeem Ahmad Khan (Retd) is a Friend/Reformer, contributing his insights and efforts to Helpline NGO's reformative and developmental initiatives.",
      email: "naeem.khan@helpline.org",
      workingArea: "Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Associate, Pakistan",
      detailedDescription:
        "Squadron Leader Muhammad Naeem Ahmad Khan (Retd) is an active supporter of Helpline NGO, participating in efforts to bring positive change and improve community welfare. His contributions are vital in fostering innovation and effectiveness within our programs.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
    {
      id: 35,
      designation: "Friend/Reformer",
      name: "Professor Ahmad Sohaib (Retd)",
      image: "/img/team/iconimage.png",
      description:
        "Professor Ahmad Sohaib (Retd) is a Friend/Reformer, lending his academic and intellectual expertise to guide Helpline NGO's initiatives for social reform and community betterment.",
      email: "ahmad.sohaib@helpline.org",
      workingArea: "Pakistan",
      nationality: "Pakistani",
      address: "Helpline NGO Associate, Pakistan",
      detailedDescription:
        "Professor Ahmad Sohaib (Retd) provides strategic counsel to Helpline NGO, particularly in areas requiring academic rigor and intellectual insight. His guidance helps in developing evidence-based programs and fostering long-term, sustainable reforms in the communities we serve.",
      socialLinks: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "youtube", icon: "fab fa-youtube", url: "#" },
      ],
    },
  ],

  journeyData: [
    {
      title: "'Bridging the Gap Between the Haves and the Have-Nots'",
      title1: '"MAWAKHAT-E-MADINAH"',
      announcement:
        "Helpline Social Welfare Organization is built on the fundamental concept of Mawakhat, which is an Arabic term that refers to the bond of brotherhood and solidarity between individuals or groups of people. Mawakhat embodies the spirit of social responsibility, where people from different backgrounds and communities come together to support one another in times of need. At Helpline Social Welfare Charity Organization, this concept of Mawakhat is the cornerstone of our work, and we strive to build stronger communities by fostering a sense of collective responsibility and empathy. We believe that everyone deserves equal opportunities and access to basic necessities such as food, education, and healthcare, regardless of their background or socioeconomic status. Through our various initiatives and programs, we aim to create a more equitable society where people can live with dignity and respect. Our team of dedicated volunteers works tirelessly to provide assistance and support to those in need, and we are committed to making a positive impact in the lives of the people we serve. Overall, Helpline Social Welfare Charity Organization is grounded in the principles of Mawakhat, and we believe that by working together, we can create a better world for everyone.",
      announcement1:
        "Helpline started its journey with the private construction of a school in Pak Patan, Punjab in 1993 which got completed in the year 2000.The basic purpose of Helpline is Betterment of the academic activities of Government Schools and concentration towards providing basic necessities of life, especially support of poor students. Helpline’s proper registration was done in the year 2000 which included academic improvement of Government schools, wellness of prisoners and supply of free food to patients in Public Hospitals.",
      details:
        "The certification from PCP highlights our adherence to the highest standards in governance, financial management, and program implementation. Being registered with the FBR empowers us to accept donations domestically and internationally, enhancing trust and credibility among donors.",
      conclusion: "Massive Work Over the Years",
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
        {
          id: 24,
          year: "2024",
          detail:
            "In 2024, Helpline distributed ration packages among 18000 deserving families during Ramzan and supported families in need. Our Al-kitab Educational System reached over 6,000 students across Pakistan, with 7 schools in Punjab and 13 adopted government schools in interior Sindh, expanding access toquality education for underprivileged children. 1000 free Cataract operations. Free treatment of 3000 free medical care.",
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
      videoId: "SsDAXkU1BiU",
      title: "YouTube video player 1",
    },
    {
      id: 2,
      videoId: "qIWgzMfnCYk",
      title: "YouTube video player 2",
    },
    {
      id: 3,
      videoId: "SG9EJl9oihQ",
      title: "YouTube video player 3",
    },
    {
      id: 4,
      videoId: "icydKjkJhXs",
      title: "Qurbani - Eid UL Azha Message 2019",
    },
    {
      id: 5,
      videoId: "o2bU86CxKWQ",
      title: "Qubani Program by Pak Helpline",
    },
    {
      id: 6,
      videoId: "e1DF3RJT1xA",
      title: "Distribution of 500 Rations to Deserving Families of Lahore",
    },
    {
      id: 7,
      videoId: "p9N0r1P-RYQ",
      title: "YouTube video player 1",
    },
    {
      id: 8,
      videoId: "5xZLbU1bYGI",
      title: "YouTube video player 2",
    },
    {
      id: 9,
      videoId: "8RAQOETPHhk",
      title: "YouTube video player 3",
    },
    {
      id: 10,
      videoId: "Zed6wEaHiag",
      title: "Qurbani - Eid UL Azha Message 2019",
    },
    {
      id: 11,
      videoId: "qYl8uuP5rd0",
      title: "Qubani Program by Pak Helpline",
    },
    {
      id: 12,
      videoId: "jedMB4nbdjE",
      title: "Distribution of 500 Rations to Deserving Families of Lahore",
    },
    {
      id: 13,
      videoId: "T0AQTnVL4jc",
      title: "Qurbani - Eid UL Azha Message 2019",
    },
    {
      id: 14,
      videoId: "-WjRhXXI75Y",
      title: "Qubani Program by Pak Helpline",
    },
    {
      id: 15,
      videoId: "0FArIwxbYOQ",
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
    title: "Disaster Relief & Rehabilitation",
    headerBg: "img/causes/disasterbg.jpg",
    supportButtonText: "SUPPORT RELIEF",
    videoSrc:
      "https://www.youtube.com/embed/uBu8B3Cf9fg?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fhelpline.org.pk&amp;widgetid=3",
    videoSrc2:
      "https://www.youtube.com/embed/A9OMSHZOiv0?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fhelpline.org.pk&amp;widgetid=1",
    heading: "From Emergency Response to Rebuilding Lives",
    description: `
      When disaster strikes, families can lose safety, shelter, food, health, and stability almost overnight. Helpline Welfare Trust responds to disasters with urgent relief and longer-term rehabilitation so affected families are not left alone after the first wave of help has passed. The work covers immediate response when people are in danger, practical relief while hardship is acute, and rehabilitation support that helps families stand again. Be part of urgent relief and lasting recovery. Support Helpline's disaster response and rehabilitation work for families facing crisis across Pakistan.
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
    title: "Social Welfare & Family Support",
    headerBg: "img/causes/familywelfare.jpeg",
    supportButtonText: "SUPPORT FAMILIES",
    videoSrc:
      "https://www.youtube.com/embed/7p8vBnWjJes?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fhelpline.org.pk&amp;widgetid=3",
    heading: "Standing with Families Through Food Support, Essentials, and Everyday Care",
    description: `
      Many families do not need sympathy alone. They need timely, practical help that gets them through the week, the month, or the season with dignity. A food package, essential household support, or a trusted welfare response can make the difference between stability and crisis for a widow, a daily wage worker, an elderly person, or a family already living under pressure. Support families with dignity. Help Helpline provide food, essentials, and practical welfare support to households facing hardship across Pakistan.
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
      history: [
        {
          year: "2022",
          image: "/img/causes/houseconstruction1.jpeg",
          description:
            "Torrentialall rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
        },
        {
          year: "2023",
          image: "/img/causes/houseconstruction1.jpeg",
          description:
            "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
        },
        {
          year: "2024",
          image: "/img/causes/houseconstruction1.jpeg",
          description:
            "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
        },
        {
          year: "2025",
          image: "/img/causes/houseconstruction1.jpeg",
          description:
            "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
        },
      ],
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
      history: [
        {
          year: "2022",
          image: "/img/causes/houseconstruction1.jpeg",
          description:
            "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
        },
        {
          year: "2023",
          image: "/img/causes/houseconstruction1.jpeg",
          description:
            "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
        },
        {
          year: "2024",
          image: "/img/causes/houseconstruction1.jpeg",
          description:
            "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
        },
        {
          year: "2025",
          image: "/img/causes/houseconstruction1.jpeg",
          description:
            "Torrential rains and flooding have submerged a third of Pakistan and killed more than 1190 people, including 399 children creating an unprecedented climate catastrophe. Houses in the settlements situated near the Indus River have been swept away along with most of the crops. Overall 370 thousand houses were destroyed while 730 thousand more have been partially damaged.The Helpline has decided to provide shelter to the affected families before the forthcoming winters. An economical model house has been designed. The drawing and cost of this model house along with the estimated cost are being offered to kind-hearted people.",
        },
      ],
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
  // swiperData: [
  //   {
  //     image: "img/causes/qurbani1.jpg",
  //     detailHeader: "Al-kitab Educational Complex, Shekhupura (Abid Town )",
  //     year: "Qurbani 2020",
  //     detail:
  //       "At Al Kitab School in Rana Town, we are organizing a qurbani event in collaboration with the Hasene Team and the Helpline Social Media Organization.",
  //   },
  //   {
  //     image: "img/causes/qurbani1.jpg",
  //     detailHeader: "Al-kitab Educational Complex, Shekhupura (Abid Town )",
  //     year: "Qurbani 2020",
  //     detail:
  //       "At Al Kitab School in Rana Town, we are organizing a qurbani event in collaboration with the Hasene Team and the Helpline Social Media Organization.",
  //   },
  //   {
  //     image: "img/causes/qurbani1.jpg",
  //     detailHeader: "Al-kitab Educational Complex, Shekhupura (Abid Town )",
  //     year: "Qurbani 2020",
  //     detail:
  //       "At Al Kitab School in Rana Town, we are organizing a qurbani event in collaboration with the Hasene Team and the Helpline Social Media Organization.",
  //   },
  //   {
  //     image: "img/causes/qurbani2.jpg",
  //     detailHeader: "Qurbani Meat",
  //     year: "Qurbani 2021",

  //     detail:
  //       "The Hasene team and Helpline Social Media Organization are distributing Qurbani meat to needy individuals in Rana Town’s Al Kitab School.",
  //   },
  //   {
  //     image: "img/causes/qurbani3.jpg",
  //     detailHeader: "Community Support",
  //     year: "Qurbani 2022",
  //     detail:
  //       "The event aims to support underprivileged families by providing essential resources and spreading joy during the festive season.",
  //   },
  //   {
  //     image: "img/causes/qurbani4.jpg",
  //     detailHeader: "Helping Hands",
  //     year: "Qurbani 2023",
  //     detail:
  //       "Join us in this noble cause as we collaborate to bring smiles and relief to those in need.",
  //   },
  //   {
  //     image: "img/causes/qurbani4.jpg",
  //     detailHeader: "Helping Hands",
  //     year: "Qurbani 2024",
  //     detail:
  //       "Join us in this noble cause as we collaborate to bring smiles and relief to those in need.",
  //   },
  // ],
  MasjidContent: {
    title: "HELPLINE Masjid School Program",
    supportButtonText: "SUPPORTING APPEAL",
    headerBg: "img/causes/masjidbg.jpg",
    videoSrc: "https://www.youtube.com/embed/6JoodIjZILk",
    heading: "Helpline Masjid School Program",
    description: `
     By supporting Masjid Schools, Helpline is helping to provide a valuable service to communities where students can learn Islamic studies and other subjects such as Arabic and Quranic studies on the basis of Muakhaat-e-Madina. Helpline has adopted 6 Masjid schools as a means of improving educational opportunities for underprivileged children.
    `,
  },
  masjidData: [
    {
      year: "Masjid 2024",
      image: "img/causes/masjid1.png",
      detailHeader: "Andu Mahajir Masjid",
      detail:
        "Andu Mahajir Masjid, backed by Helpline NGO, unites the community with education, healthcare, and social support, fostering harmony and togetherness.",
    },
    {
      year: "Masjid 2024",
      image: "img/causes/masjid2.png",
      detailHeader: "Bilal Masjid Misalli Goth(TJM)",
      detail:
        "Bilal Masjid in Misalli Goth, supported by Helpline NGO, is a center for prayer, Islamic learning, healthcare, and social aid, promoting unity and community well-being.",
    },
    {
      year: "Masjid 2024",
      image: "img/causes/masjid3.png",
      detailHeader: "Jamia Masjid Fatima Bhagliar Thar",
      detail:
        "Jamia Masjid Fatima Bhagliar Thar, supported by Helpline NGO, serves as a community hub in Thar, providing prayers, education, healthcare, and vital social services.",
    },
    {
      year: "Masjid 2024 ",
      image: "img/causes/masjid4.png",
      detailHeader: "Kakrario Madrasa Tharparker",
      detail:
        "Kakrario Madrasa Tharparker, supported by Helpline NGO, is a vital center for Islamic education, providing knowledge, food, clothing, and shelter to students in need.",
    },
    {
      year: "Masjid 2024",
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
    title: "Distribution Program",
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
        "A Lahore IT lab offering practical software, web, and digital skills training.",
      image: "/img/causes/itlab1.png",
    },
    {
      id: 2,
      title: "Brain Scoop in Islamabad",
      description:
        "Islamabad center focused on hands-on coding, design, and digital learning programs.",
      image: "/img/causes/itlab2.png",
    },
    {
      id: 3,
      title: "Brain Scoop in Bahalwapur",
      description:
        "Bahawalpur lab building tech skills through guided projects and modern IT tools.",
      image: "/img/causes/itlab3.png",
    },
    {
      id: 4,
      title: "Brain Scoop in Nawab Shah",
      description:
        "Nawab Shah lab supports youth with practical software and web development training.",
      image: "/img/causes/itlab4.png",
    },
    {
      id: 5,
      title: "Brain Scoop in Tando Allah Yar",
      description:
        "Tando Allah Yar center prepares students for real-world IT careers and freelancing.",
      image: "/img/causes/itlab5.png",
    },
  ],
  HelplineregistrationData: {
    title: "Helpline Registrations",
    headerBg: "img/causes/itlabsbg.png",
    videoSrc: "https://www.youtube.com/embed/txy5egSzmUY",
    heading: "Helpline Registrations",
    description1: `
Helpline Welfare Trust is proud to be officially recognized by multiple esteemed regulatory bodies, underscoring our unwavering commitment to transparency, accountability, and service to humanity. We are certified by the Pakistan Centre for Philanthropy (PCP), a recognition that reflects our adherence to high standards in governance, financial management, and social impact.

    `,
    description2: `Additionally, Helpline is registered with the Federal Board of Revenue (FBR), enabling us to receive both domestic and international donations with full legal standing—building trust with individuals, corporations, and institutions alike. Furthermore, Helpline is formally registered with the Charity Commission under the name Helpline Welfare Trust, reinforcing our legal status as a credible, nonprofit organization. These certifications and registrations collectively empower us to expand our reach, ensure responsible use of donor funds, and continue transforming lives through our social welfare initiatives.`,
    detailHeader: "Helpline IT Labs",
  },
  pdfDocuments: [
    {
      id: 1,
      title: "2013-14",
      pdf: "/img/pdfs/HELPLINE-2014.pdf",
    },
    {
      id: 2,
      title: "2014-15",
      pdf: "/img/pdfs/HELPLINE-2015.pdf",
    },
    {
      id: 3,
      title: "2015-16",
      pdf: "/img/pdfs/HELPLINE-2016.pdf",
    },
    {
      id: 4,
      title: "2016-17",
      pdf: "/img/pdfs/HELPLINE-2017.pdf",
    },
    {
      id: 5,
      title: "2017-18",
      pdf: "/img/pdfs/HELPLINE-2018.pdf",
    },
    {
      id: 6,
      title: "2018-19",
      pdf: "/img/pdfs/HELPLINE-2019.pdf",
    },
    {
      id: 7,
      title: "2019-20",
      pdf: "/img/pdfs/HELPLINE-2020.pdf",
    },
    {
      id: 8,
      title: "2020-21",
      pdf: "/img/pdfs/HELPLINE-2021.pdf",
    },
    {
      id: 9,
      title: "2021-22",
      pdf: "/img/pdfs/HELPLINE-2022.pdf",
    },
    {
      id: 10,
      title: "2022-23",
      pdf: "/img/pdfs/HELPLINE-2023.pdf",
    },
    {
      id: 11,
      title: "2020-24",
      pdf: "/img/pdfs/TaxPayer-Registration-Certificate.pdf",
    },
  ],
  HelplineIslamicData: {
    title: "Islamic Programs",
    headerBg: "img/causes/islam.png",
    videoSrc: "https://www.youtube.com/embed/1KuzgWg2m7o",
    heading: "Islamic Giving That Reaches People with Dignity and Care",
    description: `
       For many donors, giving is not only a financial act. It is an act of faith, responsibility, and gratitude. Helpline Welfare Trust turns acts of worship and charity into organized support for families, students, and communities through Islamic programs rooted in service and compassion. These programs include Ramzan support, Qurbani distribution, Islamic activity, and masjid or maktab-related work. Make your giving count in this world and the next.
    `,
    detailHeader: "Islamic Programs",
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
      image: "/img/news/news1.png",
      category: "Charity Goods",
      title: "Healthy food for everyone in a campaign.",
      author: "Admin",
      date: "24th June 2021",
      link: "https://www.instagram.com/helplinewelfaretrust/",
    },
    {
      id: 2,
      image: "/img/news/news2.png",
      category: "Charity Medicine",
      title: "Desired goods for all in a campaign.",
      author: "Admin",
      date: "24th June 2021",
      link: "https://www.instagram.com/helplinewelfaretrust/",
    },
    {
      id: 3,
      image: "/img/news/news3.png",
      category: "Mobile Clinic",
      title: "Expected clothes for all in a campaign.",
      author: "Admin",
      date: "24th June 2021",
      link: "https://www.instagram.com/helplinewelfaretrust/",
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
  activities: [
    {
      title: "Aqiqah",
      description: `Helpline Social Welfare Foundation Establishment aqiqah pack contains the penance of one (for girl) or two (for boy) Aqiqah creatures and meat appropriated to poor people and vagrants. Rs: 3,672.65/-  likewise is given in sadaqah to poor people, at the market cost of silver, this effectively covers the worth equivalent to the load in silver of your kid’s hair. Aqiqah is performed within 2 days.*. Praise the introduction of your kid and give aqiqah.`,
      videoUrl: "https://www.youtube.com/embed/NhGfnNxH1R4",
      questions: [
        {
          question: "What is Aqiqah?",
          answer:
            "Aqiqah, an Islamic terminology, is defined as an animal that is slaughtered on the occasion of childbirth. For the child, there should be aqiqah, and on behalf of the child make sacrifices and remove the hair. Hadith (Bukhari)",
        },
        {
          question: "When Should Aqiqah be Performed?",
          answer:
            "The preferable method for Aqiqah is that it should be performed on the seventh day if not then on the 14th or 21st and so on. Some scholars have said that this can be carried on till the child has become mature and say Aqiqah can be performed then. However, after this period performing Aqiqah is irrelevant. Some scholars are given the Fatwa that Aqiqah is valid till the day of one’s death. If someone after becoming an adult performs his own Aqiqah, according to some scholars it is not valid but according to some scholars, it’s permissible as it is also understood from Fadhul Bari.",
        },
        {
          question: "What is the Purpose of Aqiqah?",
          answer:
            "The performance of Aqiqah is highly encouraged. It is to be performed by the parents or the guardians of the child. Prophet Muhammad (peace be upon him) and his companions used to perform Aqiqah when they were bestowed with a newborn. There are many benefits in the performance of Aqiqah. One is the announcing the birth of the baby. Being bestowed a child is a great blessing from the Creator. Another purpose is to invite family members, neighbours, and friends to celebrate the blessed occasion. The poor should be included in the celebration by offering them food and meat served on this occasion.",
        },
        {
          question: "Types of Animals to be Slaughtered:",
          answer:
            "The condition of the animals in Aqiqah is the same as the conditions for the animals in Qurbani. The animals to be slaughtered must be a goats, cows or camels. For camels, it must be older than 6 years, for cows the age must be older than 3 years and for goats, it must be older than 2 years. They must be free from any form of handicap such as blind, sick, limp and undernourished. The animals must be slaughtered in the appropriate humane ways.Celebrate the birth of your newborn and share the joy with your needy brothers and sisters through the Alkhidmat Foundation’s Aqiqah Service.",
        },
        {
          question: "The Aqiqah Pack:",
          answer:
            "The Alkhidmat Foundation Aqiqah Pack encompasses all these aspects and includes The sacrifice of one or two Aqiqah animals (depending on sex “boy or a girl”) distributed to the poor and needy, including orphans and the elderly. The value is equal to the weight in silver of your child’s hair distributed to the needy as sadaqah. Rs: 3,672.65/-  Aqiqah performed within 3 days.  is given in sadaqah. At the market price of silver, this easily covers the required value.",
        },
      ],
    },
    {
      title: "Fidya",
      description: `Fidyah is a donation that a person must pay to feed the poor for not making up fasts missed in Ramadan on time. Alkhidmat Foundation Pakistan suggests that $4.93 is paid for each fast missed to feed the poor.`,
      videoUrl: "https://www.youtube.com/embed/NhGfnNxH1R4",
      questions: [
        {
          question: "What is Fidyah?",
          answer:
            "Fidyah is a donation that a person must pay to feed the poor for not making up fasts missed in Ramadan on time. Alkhidmat Foundation Pakistan suggests that $4.93 is paid for each fast missed to feed the poor.If one does not fast some days during Ramadan, it is obligatory to make up these missed fasts before the next Ramadan arrives, regardless of whether these fasts were cut with a valid excuse (e.g. menstruation, travel, sickness, etc.) or without a valid excuse. If one does not make them up before the next Ramadan, one is sinful and must pay a “mudd” (a volumetric measure defined below) of food to someone poor (faqeer) or short of money (miskeen) in addition to making up the missed fasts (I`anatu’l-Talibin, 2.242; Tuhfat ul Muhtaj, 3.445-446). Imam Daraqutni and Imam Bayhaqi (Allah be pleased with them) have related the following hadith from the Prophet (Allah bless him and give him peace): Whoever lives to meet Ramadan, does not fast because of an illness, then regains his health and does not makeup [the missed fasts] until another Ramadan should fast [the Ramadan] that he has reached, then makeup what he owes, and then feed someone short of money [miskeen] for every day [he missed]. Both Imam Daraqutni and Imam Bayhaqi (Allah be pleased with them) said this hadith was weak (da`if), but Imam Ramli has mentioned that it has been narrated with sound (sahih) chains of transmission as a statement of a companion (a mawquf hadith). All this is also strengthened by the fact that six companions gave this fatwa and no one objected to them (Hashiyat al-Sharqawi, 1.413).",
        },
        {
          question: "What is the Fidyah that Must be Paid?",
          answer:
            "One must give one “mudd” of the main staple of one’s area to either someone who is poor (faqeer) or short of money (miskeen) (those who are considered poor or short of money are defined in Reliance, h8.8, h8.11). A “mudd” is the amount one can hold in both hands when cupped together. It is estimated in the Reliance as 0.51 liters (Reliance, i1.33). The type of food one gives varies from place to place. One must pay whatever food is considered the main staple in the area where one lives. This could be wheat, barley, rice or something else (al-Minhaj al-Qawim + al-Hawashi al-Madaniyya, 2.194). One mudd needs to be given for every day of fasting that one delayed making up (al-Minhaj al-Qawim, 2.194).",
        },
        {
          question: "Does the Fidyah Accumulate from Year to Year?",
          answer:
            "Yes, it does. One must pay one mudd per day per year (I`anatu’l-Talibin, 2.242). For example, if a woman missed six fasts during Ramadan because of menstruation, and she did not make them up until after three more Ramadans had passed, she would have to pay 18 mudds (1 mudd per day per year * 6 days * 3 years = 18 mudd’s)",
        },
        {
          question: "Can I Feed All the People on One Day at a Big Feast?",
          answer:
            "Feeding (it`am) a poor person, as Imam Bajuri (Allah have mercy on him) explains in the section on expiating (kaffara) for fast days that one has invalidated, means giving him ownership (tamleek) of the food. It is not sufficient to cook the food and then invite him to one’s house for lunch or dinner (Hashiyat al-Bajuri, 1.319). Rather, the poor person must be given possession of the food (e.g. a bag of wheat) and then he can do what he wants with it (e.g. eat it, sell it, give it away to someone else, give it back to you and ask you to cook it for him, etc.). As such, it would not be sufficient to invite the people to a feast. One would have to give them the actual staple food. It is valid, however, to give everyone the food the same day. It suffices to give multiple mudd’s to one person (so one could calculate everything one owes and give everything to one person). However, it is not acceptable to divide a single mudd between multiple people (Tuhfat al-Muhtaj, 3.446).",
        },
        {
          question: "What Qualifies as an Excuse for not Making up These days?",
          answer:
            "For example, if one never knew that it was obligatory to make up missed fasts before the next Ramadan despite being raised Muslim, does one still have make them up? Just like missed prayers, there is no excuse for not making up the fast days. Obligatory fasts must be made up. They are a debt one owes to Allah, just like missed prayers. There are, however, excuses for not paying the expiatory payment (fidyah). The fuqaha mention that someone who was not aware that it was obligatory to make up missed fasts before the next Ramadan does not have to perform the expiation (fidyah), even if he or she lives among scholars. Non-scholars (awamm) are excused for being ignorant of minor, subtle points such as these even if they live in Muslim lands among scholars. If, however, one knew that it was obligatory to make up the fasts before the next Ramadan, but was not aware that one had to make an expiatory payment (fidyah), one would not be considered excused (Tuhfat al-Muhtaj, 3.445).",
        },
      ],
    },
    {
      title: "Kaffarah",
      description: `Kaffarah for blatantly breaking a quick of Ramadhan is to quick 60 successive days – sixty days, consistently, without missing any in the middle between.Since Kaffarah Saum has a place with the inferior of the Wajib class of Saum (see page 3 ), it is vital for make niyyat for this kind of fasting from the evening, for example prior to Subah Sadiq. If the niyyat isn’t made before Subah Sadiq, the Kaffarah won’t be legitimate.`,
      videoUrl: "https://www.youtube.com/embed/NhGfnNxH1R4",
      questions: [
        {
          question: "What is Kaffarah?",
          answer:
            "The Shariah’s punishment for willfully and blatantly annulling the Saum of Ramadan is called kaffarah. A person who is unable to complete the Kaffarah due to sickness or older age must feed 60 people in need two full meals each day or pay the amount assigned as Sadqah ul Fitr in cash. Our estimate is $4.93 per person every day, or $296 for 60 people. Let’s create a Kaffarah gift here.",
        },
        {
          question: "When Kaffarah Applies?",
          answer: `Kaffarah applies to just the Saum of Ramadhan.Kaffarah comes into force provided that the niyyat for fasting was made around evening time, for example prior to Subah Sadiq. In this way, in the event that niyyat was made during the night to quick the next day, and afterward the quick is broken without a substantial explanation, the Kaffarah punishment happen.Kaffarah for blatantly breaking a quick of Ramadhan is to quick 60 successive days – sixty days, consistently, without missing any in the middle between.
                  Since Kaffarah Saum has a place with the inferior of the Wajib class of Saum (see page 3 ), it is vital for make niyyat for this kind of fasting from the evening, for example prior to Subah Sadiq. If the niyyat isn’t made before Subah Sadiq, the Kaffarah won’t be legitimate.
                  The kaffarah will be delivered invalid if under any condition be it a legitimate explanation even a solitary day is discarded during the 60-day Kaffarah course. Subsequently on the off chance that an individual abstained for 59 days and neglected to quick on the 60th day because of sickness, he should begin the Kaffarah all once more. The main interference which won’t negate the kaffarah is haidh (the month to month menses of ladies).
                  A Kaffarah hindered by the mediation of nifas will be delivered invalid.
                  An individual who can’t release the Kaffarah due to weakness or extremely advanced age should take care of 60 unfortunate people. Each miskeen (poor) ought to be given two full feasts for the afternoon or the sum in real money which is given as Sadqah Fitr. This sum is the cost of roughly 2 kilograms of bread flour. Rather than cash, flour may likewise be given.
                  On the off chance that the grain, food or money of 60 people is given to one man on a solitary day the Kaffarah won’t be released. It will be viewed as a sum/amount given to just a single individual. On the off chance that the whole Kaffarah sum/amount is disseminated on a solitary day to just two people, the Kaffarah won’t be released in this manner. Another 58 people should be given each the Sadqah Fitr sum.
                  The Kaffarah choice of taking care of 60 Masakeen (unfortunate people) might be released on a solitary day by taking care of 60 people or giving money or grain to sixty people.
                  The Kaffarah may likewise be spread over a time of 60 days. Day to day, one miskeen might be taken care of or given the grain/cash until 60 days.
                  Assuming in the wake of having paid the Kaffarah one recuperates from the ailment and can execute the 60-day quick, then fasting for 60 days becomes compulsory. The cash, and so forth recently given to the unfortunate will turn into a nafl noble cause.
                  If any miskeen among the sixty is a little youngster, the Kaffarah won’t be released. Assuming little youngsters were taken care of, an equivalent number of grown-ups should be taken care of in lieu. Nonetheless, in the event that the full Sadqah Fitr sum was given in real money to an unfortunate youngster, the Kaffarah will be satisfied.
                  Where the Kaffarah choice of taking care of or instalment is legitimate, someone else may pay it on the guidance of the person who is obligated for the Kaffarah. Without such guidance, it won’t be legitimate.
                  Where the Kaffarah choice of taking care of or instalment is substantial, an Interference over the span of taking care of or paying won’t discredit the Kaffarah. Consequently, on the off chance that an individual who can’t quick the 60 days, embraces to take care of one miskeen for 60 days, yet doesn’t take care of the miskeen for 60 continuous days, the Kaffarah will be legitimate. However long the miskeen is taken care of for 60 days, the Kaffarah will be substantial regardless of whether the 60 days are spread over a significant stretch.
                  A solitary Ramadhan makes Wajib only one Kaffarah independent of the number of diets blatantly broken during that Ramadhan.
                  Assuming diets were glaringly invalidated in more than one Ramadhan, the quantity of kaffarah will be equivalent to the quantity of Ramadhan. Along these lines, assuming that diets were outrageously broken in three different Ramadhans, three unique Kaffarah will be mandatory.
                  At the point when the Kaffarah is started on the first day of the Islamic month, then fasting for two full Islamic months will get the job done for the Kaffarah regardless of whether the absolute number of days In the two months is 58 days (29 days months).
                  In the event that, nonetheless, the Kaffarah is begun over the span of the month, fasting an entire 60 days will be vital.`,
        },
      ],
    },
    {
      title: "Sadaqah",
      description: ` That which you give in usury for increase through the property of (other) people, will have no increase with Allah: but that which you give for charity, seeking the Countenance of Allah, (will increase); it is those who will get a recompense multiplied.`,
      videoUrl: "https://www.youtube.com/embed/I1_YqCTQoDY",
      questions: [
        {
          question: "Give your Sadaqah to Poor people.",
          answer: `Sadaqah (voluntary charity) is a virtuous deed in Islam. In fact, it is considered as a proof of one’s eeman (faith). The Prophet (S.A.W.S.) sallallaahu ‘alayhi wa sallam said in the following authentic hadeeth: Abu Malik al-Ashari (R.A.) (radhi Allahu anhu) narrated that Allah’s Messenger (S.A.W.S.) Said: “Cleanliness is half of faith. Alhamdulillah (Praise be to Allah) fills the scale. SubhanAllah (Glory be to Allah) and Alhamdulillah (Praise be to Allah) fill up what is between the heavens and the earth. Prayer is a light. Charity is proof (of one’s faith). Endurance is a brightness and the Qur’an is a proof on your behalf or against you. All men go out early in the morning and sell themselves, thereby setting themselves free or destroying themselves.  (Muslim, 432)
                  The more we give sadaqah the more we increase our eeman and thus, expect Allah’s rewards both in this world and in the life hereafter. Giving charity out of our wealth does not decrease our wealth but instead Allah (S.W.T.) increases it:
                  Allah will deprive usury of all blessing, but will give increase for deeds of charity: for He loves not creatures ungrateful and sinner.  (Qur’an, 2: 276)
                  That which you give in usury for increase through the property of (other) people, will have no increase with Allah: but that which you give for charity, seeking the Countenance of Allah, (will increase); it is those who will get a recompense multiplied.  (Qur’an, 30:39)
                  Abu Hurairah (R.A.) reported Allah’s Messenger (S.A.W.S.) as saying:  “Charity does not in any way decrease the wealth and the servant who forgives, Allah adds to his respect; and the one who shows humility, Allah elevates him in the estimation (of the people).  (Muslim Vol. 4, Hadith 6264)
                  Sadaqah is not restricted to giving part of our wealth or material possessions or any special deed of righteousness. Islam considers all good deeds as sadaqah that increase our eeman: Abu Musa narrated that the Prophet (S.A.W.S.) Said:
                   Every Muslim has to give in sadaqah (charity). 
                  The people asked:  O Allah’s Messenger (S.A.W.S.)! If someone has nothing to give, what will he do? 
                  He said:  He should work with his hands and benefit himself and also give in charity (from what he earns). 
                  The people further asked:  If he cannot do even that? 
                  He replied:  Then he should help the needy who appeal for help. 
                  Then the people asked:  If he cannot do that? 
                  He replied:  Then he should perform all that is good and keep away from all that is evil and this will be regarded as charitable deeds. 
                  (Bukhari Vol. 2, Hadith 524)
                  The Messenger of Allah (S.A.W.S.) Said:  To smile in the company of your brother is charity. To command to do good deeds and to prevent others from doing evil is charity. To guide a person in a place where he cannot get astray is charity. To remove troublesome things like thorns and bones from the road is charity. To pour water from your jug into the jug of your brother is charity. To guide a person with defective vision is charity for you.  (Bukhari)
                  Since sadaqah is not limited to giving of money or part of our wealth, every Muslim can therefore earn rewards from Allah. Sadaqah is an easy way to increase our eeman. Every Muslim whether poor or wealthy can give sadaqah at all times. The Prophet (S.A.W.S.) tells us that dhikr (remembrance of Allah) is a form of sadaqah. We read in the following Ahadeeth:

                  Abu Hurairah narrated that: Abu Dharr said to the Messenger of Allah, The wealthy people have all the rewards, they pray as we pray, they fast as we fast, and they have surplus wealth which they give in charity, but we have no wealth which we may give in charity.
                  Allah’s Messenger (S.A.W.S.) Said: Abu Dharr, should I not teach you phrases by which you acquire the rank of those who excel you? No one can acquire your rank except one who acts like you.
                  He said:  Why not, Allah’s Messenger (S.A.W.S.)?
                  He Said: Exalt Allah say: Allahu Akbar (Allah is Most Great) after each prayer thirty-three times, and praise Him say: Alhamdulillah (Praise be to Allah) thirty-three times, and glorify Him say: Subhan Allah (Glory be to Allah) thirty-three times; and end it by saying, La ilâha illallâhu wahdahu la shareeka lahu, lahul mulku wa lahul hamdu yuhyi wa yomeetu wa Huwa ‘ala kulli shai’in Qadeer. (There is no god but Allah alone, He has no partner, to Him belongs the Kingdom, to Him praise is due and He has power over everything.) Your sins will be forgiven, even if they are like the foam of the sea. (Abu Dawud 1499)

                  Abu Dharr narrated that Allah’s Messenger (S.A.W.S.) Said:  In the morning charity is due from every bone in the body of every one of you. Every utterance of Allah’s glorification is an act of charity. Every utterance of praise of Him is an act of charity; every utterance of profession of His Oneness is an act of charity; every utterance of profession of His Greatness is an act of charity; enjoining good is an act of charity; forbidding what is disreputable is an act of charity; and two rak’ahs which one prays in the forenoon will suffice.  (Muslim 1557)

                  For our own success, we should spend time, money and efforts in giving sadaqah for the pleasure of Allah as the rewards of sadaqah is nothing but success, especially in the Hereafter:  “The likeness of those who spend for Allah’s sake is as the likeness of a grain of corn, it grows seven ears every single ear has a hundred grains, and Allah multiplies (increases the reward of) for whom He wills, and Allah is sufficient for His creatures’ needs, All-Knower).  (Qur’an, 2:261)

                  Those who (in charity) spend of their goods by night and by day, in secret and in public have their reward with their Rabb (only God and Sustainer). On them shall be no fear nor shall they grieve.  (Qur’an, 2:274)
                  …that which you give for charity, seeking the Countenance of Allah, (will increase); it is those who will get a recompense multiplied.  (Qur’an, 30:39)
                  Only those who believe in Our Signs, who when they are recited to them fall down in adoration, and celebrate the praises of their Rabb (only God and Sustainer), nor are they (ever) puffed up with pride. They forsake their beds of sleep, the while they call on their Rabb (only God and Sustainer), in Fear and Hope. And they spend (in charity) out of the sustenance which We have bestowed on them. Now no person knows what delights of the eye are kept hidden (in reserve) for them — as a reward for their (good) Deeds. Is then the man who believes no better than the man who is rebellious and wicked? Not equal are they. For those who believe and do righteous deeds are Gardens as hospitable Homes, for their (good) deeds.  (Qur’an, 32:15-19)

                  For Muslim men and women, for believing men and women for devout men and women for true men and women, for men and women who are patient and constant, for men and women who humble themselves, for men and women who give in charity, for men and women who fast, for men and women who guard their chastity, and for men and women who engage much in Allah’s remembrance for them has Allah prepared forgiveness and great reward.  (Qur’an, 33:35)

                  Qais ibn Abu Hazim narrated that…. Allah’s Messenger (S.A.W.S.) Said,  A Muslim is rewarded (in the Hereafter) for whatever he spends except for something that he spends on building.  (Bukhari, Vol. 7, Hadith 576)
                  Mu’aadh bin Jabal (R.A.) related from the Prophet (S.A.W.S.)  Sadaqah extinguishes sin as water extinguishes fire.  (Ahmad, Tirmidhi and Ibn Majah)
                  The Prophet (S.A.W.S.) also Said:  The believer’s shade on the Day of Resurrection will be his Sadaqah.  (Ahmad)

                  To be able to enjoy Allah’s tremendous rewards for every sadaqah that we give, we need to observe the following teachings: Sadaqah must be done sincerely for the pleasure of Allah and not out of riya’ (show off) to gain praise or recognition from others:  O you who believe! Do not render vain your charity by reminders of your generosity or by injury, like him who spends his wealth to be seen of men and he does not believe in Allah nor in the last Day.  (Qur’an, 2: 264)
                  Sa’d ibn Abu Waqqas narrated that Allah’s Messenger (S.A.W.S.) Said:  …whatever you spend (for Allah’s sake) you will be rewarded for it, even for a morsel of food which you may put in the mouth of your wife.  (Bukhari, Vol. 8, Hadith 725; Vol.1, Hadith 53)`,
        },
        {
          question: "Better to conceal what we give as sadaqah:",
          answer: `And whatever you spend in charity or whatever vow you make, be sure Allah knows it all. But the wrongdoers have no helpers. Even if you disclose (acts of) charity, it is well, but if you conceal them and make them reach those (really) in need, that is best for you. It will remove from you some of your (stains of) evil. And Allah is well acquainted with what you do.  (Qur’an, 2:270-271)
                  Prophet Muhammad (S.A.W.S.) Said, “Allah will shade seven people under His shade on the day when there will be no shade except His. They are:
                  A just ruler
                  A youth who grew up in the worship of Allah
                  A man whose heart is attached to the mosque
                  Two men who love each other for Allah’s sake, meeting for that and parting for that.
                  A man who is called by a woman of beauty and position but says, I fear Allah
                  A man who gives in charity and hides it, such that his left-hand does not know what his right hand gives in charity,
                  A man who remembered Allah in private and so his eyes shed tears.
                  (Sahih Al-Bukhari (Eng. translation) vol.2, hadeeth no. 504)`,
        },
        {
          question: "Sadaqah must be from halal (lawful) source:",
          answer: `
                Abu Hurairah (R.A.) narrated that Allah’s Messenger (S.A.W.S.) said If one gives in charity what equals one date-fruit from the honestly earned money and Allah accepts only the honestly earned money Allah takes it in His Right (hand). And then, enlarges its reward for that person (who has given it), as anyone of you brings up his baby horse, so much so that it becomes as big as a mountain.  (Bukhari, Vol.2, Hadith 491)`,
        },
        {
          question: "Begin Charity With Your Dependents:",
          answer: `
                  Hakim ibn Hizam narrated that the Prophet (S.A.W.A.) Said: The upper hand is better than the lower hand, (i.e., he who gives charity is better than him who takes it). One should start giving first to his dependents. And the best object of charity is that which is given by a wealthy person (from the money which is left after his expenses.) And whoever abstains from asking others for some financial help, Allah will give him and save him from asking others, Allah will make him self-sufficient.  (Bukhari, Vol.2, Hadith 508)
                  Abu Umamah (R.A.) narrated that Allah’s Messenger said:  O son of Adam, it is better for you if you spend your surplus (wealth), but if you withhold it, it is evil for you. There is (however) no reproach for you (if you withhold means necessary) for a living. And begin (charity) with your dependents; and the upper hand is better than the lower hand.  (Muslim, 2256)`,
        },
        {
          question: "Not to Delay Giving of Sadaqah",
          answer: `
                Abu Hurairah (R.A.) narrated that a man came to the Prophet (S.A.W.S.) and asked,  O Allah’s Messenger which charity is the most superior in reward? 
                He replied,  The charity which you practice while you are healthy, niggardly and afraid of poverty and wish to become wealthy. Do not delay it to the time of approaching death and then say, ‘Give so much to such and such, and so much to such and such.’ (And it has already belonged to such and such (his heirs).  (Bukhari Vol. 2, Hadith 500)  Do not show lethargy or negligence in giving alms and charity till your last breath.  (Bukhari and Muslim)`,
        },
        {
          question: "Do Not Count the Sadaqah You Give:",
          answer: ` Spend in charity and do not keep count for then Allah will also keep count in giving you provision. (Bukhari and Muslim)`,
        },
        {
          question: "Seek only the desire to see Allah",
          answer: `Do not expect favour or reward from any person for the sadaqah you give: Those who spend their wealth for an increase in self-purification, and have in their minds no favour from anyone for which a reward is expected in return, but only the desire to seek for the Countenance of their Creator Most High; and soon will they attain (complete) satisfaction  (Qur’an, 92:18-21) From the above virtuous teachings, we can conclude that indeed, Islam opens for us many ways of increasing our eeman and good deeds through sadaqah. We can perform easy good deeds like smiling and dhikr (remembrance of Allah), which we can do at any time and get rewards. The rich among us can earn more rewards if we give part of our wealth to the poor members of our relatives, friends, neighbours and society. If we can extend sadaqah, especially to other poor Muslims outside our community or country then we must extend our help. Another virtuous way of giving sadaqah is by supporting individuals and groups who are doing Da’wah (inviting people to Islam or the Truth) for the pleasure of Allah the Almighty. Let us take inspiration from the following Qur’anic ayah:  And he who brings the Truth and he who confirms (and supports) it — such are the men who do right. They shall have all they wish for, with their Rabb (Only God, Cherisher and Sustainer). Such is the reward of those who do good: so that Allah will remit from them (even) the worst in their deeds and give them their reward according to the best of what they have done.  (Qur’an 39:33-35) Let us hasten to give sadaqah for life in this world is short and temporary while the world in the Hereafter is everlasting. We never know when death has been decreed for us. Today we live and we never know how long we will enjoy the pleasure of this world. But one thing is sure: life in this world is nothing compared to everlasting life in the Hereafter. Allah (S.W.T.) tells us:  Nothing is the life of this world but play and amusement, but best is the Home in the Hereafter, for those who are righteous, will you not then understand?  (Qur’an, 6:32)`,
        },
        {
          question:
            "“Seek only the desire to see Allah, which is the supreme success in Paradise. “",
          answer: ` Allah does enlarge, or grant by (strict) measure, the sustenance (which He gives) to whom so He pleases — (the worldly) rejoice in the life of this world. But the life of this world is but little comfort compared to the Hereafter  (Qur’an, 13:26)Let us prepare ourselves for the everlasting world to come. Let us be among those who will earn Allah’s rewards in Jannah (the Garden of Bliss or Paradise) through giving sadaqah in many ways. Let us continue earning Allah’s rewards for our good deeds by giving sadaqah that continues to benefit others. Let us think of giving sadaqah to support Islamic projects like the building of mosques, Islamic schools, Islamic libraries, orphanages and da’wah centres. If Allah has blessed us with wealth, let us not delay building any or all of the said Islamic projects for the sole pleasure of Allah. If we do so, we will certainly attain the rewards of doing good deeds continuously even after we die. Let us be inspired to give sadaqah with the following authentic hadeeth:
                    Abu Hurairah (R.A.) narrated that Allah’s Messenger (S.A.W.S.) said:  Verily what a believer continues to receive (in the form of reward) for his action and his virtues after his death is the knowledge which he acquired and then disseminated; the pious son that he left behind him; or a copy of the Qur’an which he left as a legacy; or the mosques that he had built; or the inn that he had built for the wayfarers; or the canal that he caused to flow, or a sadaqah which he gave out of his property in the state when he was healthy and alive. (These are the acts of goodness the reward of which) reaches him even after his death.  (Tirmidhi, 254; Ibn Majah and Bayhaqi) For those who are wealthy but miser or negligent in giving sadaqah may they take admonitions from the following words of Allah and His Messenger (S.A.W.S.):  So he who gives (in charity) and fears (Allah), and (in all sincerity) testifies to the Best, We will indeed make smooth for him the path to Ease. But he who is a greedy miser and thinks himself self-sufficient, and gives the lie to the Best, — We will indeed make smooth for him the Path of Misery; nor will his wealth profit him when he falls headlong (into the Pit). Verily We take upon Us to guide, and verily unto Us (belong) the End and the Beginning. Therefore do I warn you of a Fire blazing fiercely; none shall burn therein but those most unfortunate ones who give the lie to Truth and turn their backs. But those most devoted to Allah shall be removed far from it.  (Qur’an, 92:4-17)
                    Abu Hurairah (R.A.) narrated that the Prophet (S.A.W.S.) Said,  The example of a miser and the one who gives in charity, is like the example of two men wearing iron cloaks so tightly that their arms are raised forcibly towards their collarbones. So, whenever a charitable person wants to give in charity, his cloak spreads over his body so much so that it wipes out his traces. But whenever the miser wants to give in charity, the rings (of the iron cloak) come closer to each other and press over his body and his hands get connected to his collarbones.  Abu Huraira heard the Prophet (S.A.W.S.) Saying,  The miser then tries to widen it but in vain.  (Bukhari, Vol. 4, Hadith 166; also see Vol. 2, Hadith 523)
                    Abu Hurairah (R.A.) narrated that the Prophet (S.A.W.S.) Said,  Every day two angels come down from Heaven and one of them says, ‘O Allah! Compensate every person who spends in Your cause, and the other (angel) says, ‘O Allah! Destroy every miser.  (Bukhari, Vol. 2, Hadith 522)
                    Abu Dharr (R.A.) narrated that… Allah’s Messenger (S.A.W.S.) Said,  Those who have much wealth (in this world) will be the least rewarded (in the Hereafter) except those who do like this and like this (i.e., spend their money in charity).  (Bukhari, Vol. 8, Hadith 285)
                    Abu Bakr As-Siddiq (R.A.) narrated that Allah’s Messenger (S.A.W.S.) Said,  A crafty one, a miser, and one who keeps reminding people of what he has given, will not enter Paradise.  (Tirmidhi, 1873)
                    May Allah the Most Gracious, the Most Merciful give us opportunities to do many ways of providing sadaqah for His pleasure and reward our best life, especially in the Hereafter. May we spend our lives, time, money and efforts or everything in us to do deeds that Allah accepts as forms of sadaqah solely for His Sake. May our Rabb save us from the Hellfire by protecting us from being misers.
                    Ameen!`,
        },
      ],
    },
  ],
};
export const citiesData = {
  cities: [
    {
      id: 1,
      name: "Head Office Lahore",
      description: "The Heart of Pakistan",
      image: "/img/city/lahore.webp",
      projects: 5,
      stats: {
        students: "1000+",
        volunteers: "50+",
      },
      initiatives: [
        {
          title: "Alkitab Higher Secondary School",
          description:
            "Al-Kitab provides free education to underprivileged children, ensuring growth.",

          projects: [
            {
              name: "School Leading to University",
              description:
                "Al-Kitab is a school that was established by Helpline NGO with the objective of providing quality education to children from underprivileged backgrounds. The school has a unique fee structure where more than 75 % of students receive support from the NGO and are able to attend the school for free. The remaining 25 % of students pay a minimal fee, which is used to cover basic operational expenses. At Al-Kitab, we believe that every child deserves access to quality education, regardless of their financial background. Our curriculum is designed to provide a well-rounded education that focuses on academic excellence, personal growth, and character development. We also provide additional support to students who require it, such as counselling and extra academic assistance, to ensure that they reach their full potential. Al-Kitab is more than just a school; it is a community that is committed to creating a better future for our students and their families. We are proud of the work that we do and are dedicated to continuing to provide support to children in need.",
              status: "Active",
            },
            {
              name: "Digital Learning",
              description: "Implementation of digital learning tools",
              status: "Active",
            },
          ],
        },
        {
          title: "Irtaqa-e-Itfal High Secondary School",
          description:
            "Empowering underprivileged youth through quality education.",

          projects: [
            {
              name: "School in Lahore",
              description:
                "Irtaqa-e-Itfal High School Manawan is a renowned educational institution that has become a benchmark for other schools in the area. The school is committed to providing quality education to students from underprivileged backgrounds and has been successful in producing graduates who have gone on to become successful professionals in various fields. In addition to providing quality education, the school also undertakes community development programs at the grassroots level. These programs focus on education, health, and vocational training sectors with the aim of alleviating poverty, empowering women, and eliminating child labour in the country. By providing job-oriented education, the school aims to equip its students with the skills and knowledge they need to succeed in the workforce. Irtaqa-e-Itfal High School Manawan is a beacon of hope for the community it serves. The school recognizes the challenges faced by underprivileged families and works tirelessly to provide them with the support they need to succeed.",
              status: "Active",
            },
            {
              name: "Health Education",
              description: "Community health awareness programs",
              status: "Active",
            },
          ],
        },
        {
          title: "VOC-Training Center",
          description:
            "Vocational training for underprivileged youth only for Women.",
          projects: [
            {
              name: "VOC Training",
              description:
                "Vocational training for underprivileged young women is a powerful initiative aimed at empowering them with skills, knowledge, and opportunities for self-sufficiency. Many women from disadvantaged backgrounds face systemic barriers such as poverty, lack of education, and limited access to employment. By providing vocational training in fields like tailoring, handicrafts, healthcare, IT, and entrepreneurship, these programs equip them with practical skills that enable financial independence. Beyond technical education, such initiatives often include personal development, leadership training, and financial literacy to ensure holistic empowerment. With a focus on job placement and entrepreneurship support, vocational training not only uplifts individual women but also contributes to breaking the cycle of poverty in their families and communities. By fostering economic participation and self-reliance, these programs help build a more inclusive and equitable society.",
              status: "Active",
            },
            {
              name: "Social Education",
              description: "Community health awareness programs",
              status: "Active",
            },
          ],
        },
        {
          title: "IT Lab (SD-IT)",
          description:
            "Opening doors to career opportunities and economic independence.",
          projects: [
            {
              name: "Computer Labs",
              description:
                "The IT Lab (SD-IT) is a charitable initiative dedicated to providing underprivileged young women with access to quality technology education and digital skills. In today’s fast-paced world, IT proficiency is essential for economic independence, yet many disadvantaged women lack the resources and opportunities to learn. This initiative offers training in areas such as computer literacy, coding, web development, graphic design, and digital marketing, equipping participants with skills that are in high demand. Beyond technical expertise, the program also focuses on career guidance, job placement support, and entrepreneurship training to help women secure employment or start their own businesses. By bridging the digital divide, the IT Lab (SD-IT) not only empowers women with the tools to build sustainable careers but also contributes to a more inclusive, tech-driven future where opportunities are accessible to all, regardless of socio-economic background.",
              status: "Active",
            },
            {
              name: "Skills Training",
              description: "Vocational training for youth",
              status: "Active",
            },
          ],
        },
        {
          title: "Darul-Tarbiyah",
          description:
            "Young women with education, life skills, and ethical guidance for a brighter future.",
          projects: [
            {
              name: "Islamic Education",
              description:
                "Darul-Tarbiyah is a charitable initiative dedicated to the holistic education and personal development of underprivileged young women. It provides a nurturing environment where they receive not only academic and vocational training but also moral and ethical guidance to build a strong foundation for their future. Through programs in education, life skills, and career-oriented training, Darul-Tarbiyah empowers women with the knowledge and confidence needed to become self-reliant and contribute positively to society. By fostering an inclusive and supportive learning atmosphere, it aims to uplift disadvantaged women, helping them break the cycle of poverty and achieve personal and professional success.",
              status: "Active",
            },
            {
              name: "Skills Training",
              description: "Vocational training for youth",
              status: "Active",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Regional Office Karachi",
      description: "The City of Lights",
      image: "/img/city/Karachi.webp",
      projects: 1,
      stats: {
        students: "500+",
        volunteers: "40+",
      },
      initiatives: [
        {
          title: "Government Primary school",
          description:
            "Provides quality education to underprivileged children, shaping their future with knowledge and skills.",
          projects: [
            {
              name: "Government Primary school (GPS)",
              description:
                "Government Primary School Karachi is a vital institution dedicated to providing quality education to children from underprivileged backgrounds. As a cornerstone of community development, the school offers free and accessible education, ensuring that every child, regardless of financial limitations, has the opportunity to learn and grow. With a focus on foundational literacy, numeracy, and essential life skills, the school prepares students for higher education and future opportunities. Beyond academics, it fosters discipline, creativity, and critical thinking, nurturing well-rounded individuals. By investing in young minds, Government Primary School Karachi plays a crucial role in shaping a brighter future for both students and society.",
              status: "Active",
            },
            {
              name: "After-School Program",
              description: "Extra-curricular activities",
              status: "Active",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Regional Office Islamabad",
      description: "The Beautiful Capital",
      image: "/img/city/islamabad.png",
      projects: 8,
      stats: {
        students: "600+",
        volunteers: "35+",
      },
      initiatives: [
        {
          title: "Education",
          description: "Capital region education programs",
          projects: [
            {
              name: "Model School Program",
              description: "Establishing model schools",
              status: "Active",
            },
          ],
        },
        {
          title: "Technology",
          description: "Tech education initiatives",
          projects: [
            {
              name: "Tech Hub",
              description: "Technology training center",
              status: "Active",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Regional Office Hyderabad",
      description: "City of Pearls",
      image: "/img/city/hyderabad.jpeg",
      projects: 2,
      stats: {
        students: "500+",
        volunteers: "25+",
      },
      initiatives: [
        {
          title: "Government Primary school (Tando Allahyar to Mithi)",
          description:
            "Provide free education, empowering underprivileged children for a better future.",
          projects: [
            {
              name: "Community Education",
              description:
                "Government Primary Schools from Tando Allahyar to Mithi serve as crucial educational institutions dedicated to providing free and quality education to underprivileged children in rural Sindh. These schools play a vital role in bridging the education gap, ensuring that children from remote areas have access to fundamental learning in literacy, numeracy, and life skills. Despite limited resources, they foster an environment that encourages curiosity, creativity, and critical thinking, preparing students for future academic and professional opportunities. By empowering young minds with education, these schools contribute to breaking the cycle of poverty and uplifting entire communities, paving the way for a brighter future.",
              status: "Active",
            },
          ],
        },
        {
          title: "IT Lab (SD-IT) Hyderabad",
          description:
            "Poor People with digital skills for career growth and financial independence.",
          projects: [
            {
              name: "IT Education",
              description:
                "IT Lab (SD-IT) Hyderabad is a charitable initiative dedicated to empowering underprivileged young women with essential digital and technology skills. Located in Hyderabad, this lab provides training in computer literacy, coding, web development, graphic design, and digital marketing, equipping participants with the tools needed for career growth and financial independence. Beyond technical education, the program offers career counseling, job placement support, and entrepreneurship training, ensuring long-term success. By bridging the digital divide, IT Lab (SD-IT) Hyderabad creates new opportunities for women, enabling them to contribute to the growing digital economy and build a self-sustaining future.",
              status: "Active",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Regional Office Bahawalpur",
      description: "The City of Nawabs",
      image: "/img/city/bahawalpur.jpg",
      projects: 1,
      stats: {
        students: "200+",
        volunteers: "20+",
      },
      initiatives: [
        {
          title: "IT Lab (SD-IT)",
          description:
            "Empowers underprivileged young women with digital skills, creating opportunities for a brighter future.",
          projects: [
            {
              name: "IT Education",
              description:
                "IT Lab (SD-IT) Bahawalpur is a charitable initiative dedicated to providing underprivileged young women with access to high-quality technology education and digital skills. Located in Bahawalpur, this lab serves as a hub for empowering women through courses in computer literacy, coding, web development, graphic design, and digital marketing. By equipping them with in-demand skills, IT Lab (SD-IT) Bahawalpur opens pathways to employment, entrepreneurship, and financial independence. The initiative also focuses on career guidance, job placement support, and mentorship, ensuring that participants can build sustainable futures. Through this program, the lab aims to bridge the digital divide and create equal opportunities, enabling young women in Bahawalpur to thrive in the modern tech-driven world.",
              status: "Active",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Nawabshah",
      description: "City of Sindh",
      image: "/img/city/nawabshah.jpg",
      projects: 1,
      stats: {
        students: "450+",
        volunteers: "22+",
      },
      initiatives: [
        {
          title: "Benazir Public School for Girls",
          description:
            "Young girls with quality education, fostering confidence and future success.",
          projects: [
            {
              name: "(BPSG) Education Support",
              description:
                "Benazir Public School for Girls is a dedicated institution committed to providing quality education to underprivileged young girls, empowering them with knowledge and skills for a brighter future. Named in honor of the visionary leader Benazir Bhutto, the school focuses on academic excellence, personal development, and leadership training. By offering a safe and nurturing environment, it ensures that girls receive equal opportunities to learn and grow, breaking barriers in education and social progress. With a strong emphasis on literacy, science, and technology, Benazir Public School for Girls aims to shape confident, educated women who can contribute meaningfully to their communities and beyond.",
              status: "Active",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Rajanpur",
      description: "The City of Saraiki",
      image: "/img/city/rajanpur.jpg",
      projects: 1,
      stats: {
        students: "300+",
        volunteers: "15+",
      },
      initiatives: [
        {
          title: "Alkitab University of Emerging Sciences",
          description:
            "Empowers underprivileged youth with quality education and skills for a brighter future.",
          projects: [
            {
              name: "Alkitab Emerging Project",
              description:
                "Alkitab University of Emerging Sciences is a charitable institution committed to providing quality education and skill development for underprivileged youth, especially young women. It focuses on equipping students with knowledge in emerging fields such as IT, business, and science, ensuring they are prepared for modern career opportunities. Alongside academic excellence, the university emphasizes personal growth, ethical values, and leadership skills, fostering well-rounded individuals ready to contribute to society. By making higher education accessible to those in need, Alkitab University of Emerging Sciences empowers students to break barriers, achieve their aspirations, and build a better future for themselves and their communities.",
              status: "Active",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Gojra",
      description: "City of Toba Tek Singh",
      image: "/img/city/gojra.jpg",
      projects: 7,
      stats: {
        students: "350+",
        volunteers: "18+",
      },
      initiatives: [
        {
          title: "Agriculture",
          description: "Agricultural education programs",
          projects: [
            {
              name: "Farmer Education",
              description: "Supporting local farmers",
              status: "Active",
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "Taxila",
      description: "City of Cut Stone",
      image: "/img/city/Taxila.jpg",
      projects: 2,
      stats: {
        students: "400+",
        volunteers: "20+",
      },
      initiatives: [
        {
          title: "VOC-Training Center (Women) Taxila",
          description:
            "Taxila empowers underprivileged women with vocational skills for financial independence and self-sufficiency.",
          projects: [
            {
              name: "Women Vocational Training",
              description:
                "VOC-Training Center (Women) Taxila is a charitable initiative dedicated to equipping underprivileged women with vocational skills, enabling them to achieve financial independence and self-sufficiency. The center offers hands-on training in various fields such as tailoring, embroidery, beauty care, computer literacy, and handicrafts, preparing women for employment and entrepreneurship opportunities. With a focus on skill development, career guidance, and empowerment, the center provides a supportive learning environment where women can gain confidence and economic stability. By fostering self-reliance and professional growth, VOC-Training Center (Women) Taxila plays a crucial role in uplifting women and strengthening their role in society.",
              status: "Active",
            },
          ],
        },
        {
          title: "Child Grooming Center Taxila",
          description:
            "Taxila nurtures young minds with education and life skills, shaping them for a better future.",
          projects: [
            {
              name: "Child Grooming Center",
              description:
                "Child Grooming Center Taxila is a dedicated initiative focused on the holistic development of underprivileged children, providing them with essential education, life skills, and moral guidance. The center nurtures young minds by fostering a positive learning environment where children receive foundational education, character-building lessons, and personal development training. Through structured programs in academics, creativity, and social skills, the center helps shape confident, responsible, and well-rounded individuals. By offering a safe and supportive space, Child Grooming Center Taxila plays a vital role in preparing children for a brighter future, ensuring they grow into capable and ethical members of society.",
              status: "Active",
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: "Abbottabad",
      description: "City of pines",
      image: "/img/city/Abbottabad.jpg",
      projects: 1,
      stats: {
        students: "250+",
        volunteers: "25+",
      },
      initiatives: [
        {
          title: "Children Home-(Orphanage)",
          description:
            "Children Home (Orphanage) provides a safe and nurturing home for orphaned children, empowering them with love, care, and education.",
          projects: [
            {
              name: "Orphanage Center",
              description:
                "Children Home (Orphanage) is a safe haven dedicated to providing care, education, and emotional support to orphaned and vulnerable children. With a nurturing environment, the home ensures that every child receives proper shelter, nutrition, healthcare, and educational opportunities, allowing them to grow into confident and self-reliant individuals. Beyond basic needs, it focuses on character development, vocational training, and emotional well-being to help children build a promising future. Through love, guidance, and a sense of belonging, Children Home (Orphanage) plays a crucial role in shaping young lives, giving them hope and opportunities to thrive in society.",
              status: "Active",
            },
          ],
        },
      ],
    },
  ],
};
