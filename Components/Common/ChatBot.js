import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from "react-icons/fa";

// Knowledge base about Helpline Welfare Trust
const knowledgeBase = {
  greeting: [
    "Hello! I'm here to help you learn about Helpline Welfare Trust. How can I assist you today?",
    "Hi! Welcome to Helpline Welfare Trust. What would you like to know?",
    "Greetings! I'm the Helpline Welfare Trust assistant. Ask me anything about our organization!",
  ],
  about: [
    "Helpline is a social welfare organization working since 2000 for the poor, deserving and underprivileged people of Pakistan. The organization is registered under the Voluntary Social Welfare Agencies (Registration and Control) Ordinance, 1961 of the Government of the Punjab since 2000 and is also registered with Punjab Charity Commission (PB-8758670743461099). Helpline started its journey with the private construction of a school in Pak Patan, Punjab in 1993 which got completed in the year 2000. The basic purpose of Helpline is Betterment of the academic activities of Government Schools and concentration towards providing basic necessities of life, especially support of poor students.",
    "Helpline Welfare Trust has been serving communities across Pakistan for over 30 years, focusing on education, healthcare, and social welfare programs. We work on the fundamental concept of Mawakhat-e-Madina, which refers to the bond of brotherhood and solidarity between individuals, fostering a sense of collective responsibility and empathy.",
  ],
  mission: [
    "Our mission is to alleviate poverty by empowering socially and economically marginalized segments of society through interest-free microfinance and education. We believe that everyone deserves equal opportunities and access to basic necessities such as food, education, and healthcare, regardless of their background or socioeconomic status.",
  ],
  vision: [
    "Our vision is a poverty-free society built on the principles of compassion and equity. We strive to build stronger communities by fostering a sense of collective responsibility and empathy, creating a more equitable society where people can live with dignity and respect.",
  ],
  objective: [
    "Our objective is to develop and sustain a social system based on mutual support where each individual lives a life full of respect and dignity. Through our various initiatives and programs, we aim to create a better world for everyone by working together.",
  ],
  contact: [
    "Contact Information:\n\n📍 Head Office:\nHouse# 705, Sector A-1, Govt Employees Co-op Housing Society (GECHS), PECO Road, Township, Lahore, Pakistan\n\n📍 Education Wing:\nHouse# 315, Sector C, Faisal Town, Lahore, Pakistan\n\n📞 Head Office Phone:\n+92-42-3515 7374\n+92-42-35110164\n\n📞 Education Wing Phone:\n042-35195200\n\n📱 Mobile/WhatsApp:\n0321 4388352\n923215447883\n\n📧 Email:\ninfo@helpline.org.pk\n\nYou can also visit our contact page for more information or to send us a message.",
  ],
  address: [
    "Our Head Office is located at:\nHouse# 705, Sector A-1, Govt Employees Co-op Housing Society (GECHS), PECO Road, Township, Lahore, Pakistan\n\nOur Education Wing is located at:\nHouse# 315, Sector C, Faisal Town, Lahore, Pakistan",
  ],
  phone: [
    "Phone Numbers:\n\nHead Office:\n+92-42-3515 7374\n+92-42-35110164\n\nEducation Wing:\n042-35195200\n\nMobile/WhatsApp:\n0321 4388352\n923215447883",
  ],
  email: [
    "Email Address:\ninfo@helpline.org.pk\n\nYou can send us your queries, suggestions, or feedback at this email address.",
  ],
  education: [
    "Helpline runs a system of 15 government schools along with 6 own schools across the country benefiting about 6000 students. We provide free education, daily lunch, free bags and free shoes to children. We also have Technical Education Centers where women can learn sewing and embroidery for free. The total annual cost of this educational project is Rs 54,697,938/-.",
    "Al-Kitab Higher Secondary School in Rana Town, Lahore provides completely free education to over 1,100 students, including 645 girls and more than 500 boys. The school was established in 2015 on a 10-acre piece of donated land and has grown from 15 students to over 1,100 students.",
  ],
  ownSchools: [
    "Our Own Schools:\n\n1. Al-Kitab Higher Secondary School (Rana Town, Lahore) - Over 1,100 students\n2. Irtaqa-e-Itfal High School (Manawan, Lahore) - Over 1,000 students\n3. Al-Kitab School Rajanpur (Gullowali) - Under construction\n4. Ch Rehmat Ali Higher Secondary School for Boys (Gojra)\n5. Iman Maryam Girls Higher Secondary School (Gojra) - Over 600 girls\n6. Emman Maryam Smart School (Gojra) - Over 300 primary students\n7. Al-Kitab Education System School (Bahawalpur - Chani Goth) - 83 students\n8. Al-Kitab School of Technology (Shaikhupura - Abid Town)\n\nAll these schools provide free or heavily subsidized education to underprivileged children.",
  ],
  adoptedSchools: [
    "Our Adopted Schools:\n\n1. Benazir Public Girls Higher Secondary School (Nawabshah) - Over 2,200 girls\n2. Govt GPS. Misri Bheel School (Tando Allah Yar)\n3. Govt GPS. Nabi Baksh Gabool School (Tando Allah Yar)\n4. Govt. Nimro Sharif School\n\nWe have adopted and revitalized 15 government schools across Pakistan, providing resources, teachers, and infrastructure improvements to ensure quality education for all students.",
  ],
  orphanage: [
    "Helpline's orphanage in Abbottabad, namely Al-Kitab Wafaq Children Home, houses 25 orphans, offering them state-of-the-art facilities, nutritious food, and access to private schooling. We provide a safe, nurturing environment where every child grows with love and care. The orphanage ensures that children receive quality education, healthcare, and emotional support to help them build a bright future.",
  ],
  quranEducation: [
    "Helpline provides Quran education through various programs including Taleem-e-Quran initiatives. We have established Masjid & Maktab schools where children learn both regular syllabus and Islamic education, focusing on Tarbiyat (character building) as per Seerat-e-Nabvi (SAW). The Masjid serves as a community hub addressing social issues while providing religious education.",
  ],
  health: [
    "Helpline has established a nationwide network including hospitals, clinics, dispensaries, diagnostic centres, blood banks, mobile medical camps and ambulances. We have 2 hospitals, 1 mobile dispensary, 3 free meal services, 1 ambulance, and 2 rehabilitation hospitals. Our health services have benefited over 939,129 beneficiaries. We have implemented successful initiatives in remote and underdeveloped regions like Tharparkar in Sindh and Quetta in Balochistan.",
  ],
  water: [
    "Our Clean Water Program installs Reverse Osmosis (RO) filtration plants in schools and communities to provide clean, safe drinking water. This initiative addresses waterborne illnesses, particularly in underserved areas. We have installed RO plants in schools like Irtaqa-e-Itfal High School, providing clean water to both students and local residents.",
  ],
  familyWelfare: [
    "Our Family Welfare program provides medicine services and healthcare support to families in need. We operate medical camps, provide free medicines, and offer healthcare services to underprivileged families across Pakistan. This program is part of our comprehensive health services network.",
  ],
  vocationalTraining: [
    "Helpline operates six vocational training centers where women, particularly mothers of our students, learn stitching and embroidery, enabling them to earn a livelihood. To further support these families, Helpline distributes poultry buckets containing five chickens, livestock such as goats and heifers, and stitching machines to graduates of our training programs. We plan to add another Vocational Training Center with 10 special courses designed for students of Al-Kitab School.",
  ],
  digitalSkills: [
    "Helpline offers Digital Skills training through DigiSkills program, which is Pakistan's first online training program to empower youth with in-demand skills for the freelance market. Courses are offered in a mix of Urdu-English for accessibility. The program is completely free and includes courses like Freelancing, E-Commerce Management, Creative Writing, Graphic Design, WordPress, Digital Marketing, Video Editing, and more.",
  ],
  rashan: [
    "Our Rashan (Ration) Program provides essential food supplies to destitute families, especially during Ramadan. We have planned to benefit 8000 destitute families all over Pakistan. The program distributes ration boxes containing essential food items to families in need across various locations including Lahore, Bahawalpur, Gojra, Noshki, Tharparkar, and other areas.",
  ],
  distribution: [
    "Helpline conducts regular distribution programs providing essential items including food, clothing, educational materials, and other necessities to underprivileged families. Our distribution programs reach communities across Pakistan, ensuring that those in need receive timely support.",
  ],
  disasterRelief: [
    "Our Disaster Relief program provides immediate assistance during natural disasters and emergencies. We offer rehabilitation services, emergency supplies, medical aid, and long-term support to affected communities. We have 2 rehabilitation hospitals that help in disaster recovery and community rebuilding efforts.",
  ],
  qurbani: [
    "Helpline organizes Qurbani (sacrificial animal) programs during Eid-ul-Adha, distributing meat to underprivileged families. This program ensures that those in need can celebrate the occasion with dignity and receive nutritious food.",
  ],
  mawakhat: [
    "Mawakhat-e-Madina is the fundamental concept of Helpline, referring to the bond of brotherhood and solidarity between individuals. It embodies the spirit of social responsibility where people from different backgrounds come together to support one another. This concept includes:\n\n• Dar ul Tarbiyah - Quality education and character building for youth\n• Dar ul Ehsan - Center for spiritual guidance and community welfare\n• Sahoolat Center - Essential support and resources for those in need\n\nThese centers work together to create a more equitable society based on mutual support and compassion.",
  ],
  darulTarbiyah: [
    "Dar ul Tarbiyah is dedicated to providing quality education and character building for the youth. It focuses on holistic development, combining academic excellence with moral and ethical values, preparing young people to become responsible citizens and leaders.",
  ],
  darulEhsan: [
    "Dar ul Ehsan serves as a center for spiritual guidance and community welfare. It represents our commitment to serving humanity through various welfare initiatives, creating a positive impact in the lives of those who need it most, fostering hope and dignity through our programs.",
  ],
  sahoolatCenter: [
    "Sahoolat Center provides essential support and resources to those in need within our community. It offers various services and assistance programs to help individuals and families overcome challenges and improve their quality of life.",
  ],
  masjidMaktab: [
    "Al-Kitab Masjid & Maktab School is established in the masjid basement at Al Kitab School, Rana Town. The concept revives the role of masjid on lines of Masjid-e-Nabvi (SAW), serving as a community hub. The school teaches regular syllabus and focuses on TARBIAT (character building) as per Seerat-e-Nabvi (SAW). Children from 4-5 years of age develop association with masjid, and the masjid serves as a community hub for addressing social and other issues.",
  ],
  donation: [
    "You can donate through multiple methods:\n\n1) Bank Transfer:\n   • UBL to UBL: 063501118170\n   • IBAN: PK69UNIL0112063501118170\n   • Other Bank to UBL: 063563501118170\n   • Bank: UBL C Block Model Town, Lahore\n\n2) Jazz Cash/EasyPaisa: 063563501118170\n\n3) Cash Pickup: Call 0321 4388352\n\n4) Online: Visit our donation page at /donation\n\nContributions to Helpline (NTN 3133443) are exempted from Tax by the FBR under Section 2(36) of the Income Tax Ordinance, 2001.",
  ],
  bank: [
    "Bank Transfer Details:\n\n• UBL to UBL Account: 063501118170\n• IBAN: PK69UNIL0112063501118170\n• Other Bank to UBL Account: 063563501118170\n• Bank Name: UBL C Block Model Town, Lahore\n\nYou can transfer funds directly to our bank account. All contributions are tax-exempt (NTN 3133443).",
  ],
  jazzcash: [
    "You can donate via Jazz Cash or EasyPaisa using the following number:\n063563501118170\n\nSimply send your donation amount to this number through Jazz Cash or EasyPaisa mobile wallet.",
  ],
  registration: [
    "Helpline is registered under the Voluntary Social Welfare Agencies (Registration and Control) Ordinance, 1961 (XLVI of 1961) of the Government of the Punjab since 2000. We are also registered with Punjab Charity Commission (PB-8758670743461099) and authorized to receive donations from abroad through MOUs with Economic Affair Division (EAD) in Islamabad. Our NTN is 3133443, and contributions are tax-exempt under Section 2(36) of the Income Tax Ordinance, 2001.",
  ],
  programs: [
    "Our comprehensive programs include:\n\n📚 Education:\n• 6 Own Schools (Al-Kitab, Irtaqa-e-Itfal, etc.)\n• 15 Adopted Government Schools\n• Orphanage Home in Abbottabad\n• Quran Education & Masjid Maktab\n• Digital Skills Training\n\n🏥 Health:\n• 2 Hospitals\n• 1 Mobile Dispensary\n• 3 Free Meal Services\n• 1 Ambulance\n• 2 Rehabilitation Hospitals\n• Clean Water Programs\n• Family Welfare & Medicine Services\n\n💼 Vocational Training:\n• 6 Vocational Training Centers\n• Stitching & Embroidery Training\n• Livelihood Support Programs\n\n🤝 Welfare:\n• Rashan (Ration) Program\n• Distribution Programs\n• Disaster Relief\n• Qurbani Program\n• Community Centers\n\n🏛️ Mawakhat-e-Madina:\n• Dar ul Tarbiyah\n• Dar ul Ehsan\n• Sahoolat Center",
  ],
  stats: [
    "Helpline Impact Statistics:\n\n• 30+ Years of Service\n• 50,000+ Families Supported\n• 20+ Educational Institutions\n• 100,000+ Lives Impacted\n• 939,129 Health Beneficiaries\n• 10,480 Volunteers\n• 98 Reformers\n• 7 Offices across Pakistan\n• 256,202 Beneficiaries (All Over Pakistan)\n• 587 Donors\n• 1,256 Supporters\n• 6,000+ Students in Education Programs\n• 2 Hospitals\n• 2 Rehabilitation Hospitals\n• 1 Mobile Dispensary\n• 1 Ambulance\n• 3 Free Meal Services",
  ],
  volunteer: [
    "We have 10,480 dedicated volunteers who work tirelessly to provide assistance and support to those in need. Volunteers are the backbone of our organization, dedicating their time, talent, and resources towards our vision. You can join as a volunteer by visiting our volunteer page or contacting us directly. We also have 98 Reformers who play a crucial role in our community development initiatives.",
  ],
  offices: [
    "Helpline has 7 offices across Pakistan, ensuring we can serve communities nationwide. Our main offices are located in Lahore (Head Office and Education Wing), and we have regional offices in various cities to better serve local communities.",
  ],
  history: [
    "Helpline started its journey with the private construction of a school in Pak Patan, Punjab in 1993 which got completed in the year 2000. The organization was properly registered in 2000, which included academic improvement of Government schools, wellness of prisoners and supply of free food to patients in Public Hospitals. Since then, we have grown to serve communities across Pakistan with comprehensive education, health, and welfare programs.",
  ],
  principles: [
    "Our Core Principles:\n\n1. Interest-free microfinance - We provide loans with zero interest based on the belief that poverty cannot be eradicated by charging interest.\n\n2. Religious Places - We operate in places of worship including mosques, churches, and temples to ensure transparency and accountability.\n\n3. Volunteerism - We rely upon the passion, dedication, and zeal of our volunteer team.\n\n4. Policy of Non-Discrimination - We believe in an inclusive society without any discrimination based on caste, color, creed, gender, politics, or faith.\n\n5. Cycle of Reciprocity - We strive to empower beneficiaries with the hope of inspiring a cycle of generosity.",
  ],
  leadership: [
    "Board of Trustees & Leadership:\n\n👔 Chairman:\nMuhammad Aslam Khan Kakarh (Engr)\n- Provides strategic leadership and vision\n- Engineering background with humanitarian commitment\n\n👔 President:\nKhalil Ahmad Malik\n- Organizational leadership and community development\n- Strategic vision for growth and impact\n\n👔 Vice President:\nMs Lubna Yaqoob Tahir\n- Program management and community engagement\n- Focus on women's empowerment and education\n\n👔 Managing Trustee:\nMuhammad Iqbal Khan (FCA)\n- Oversees strategic initiatives and day-to-day operations\n- Part of team since 2003\n- FCA (Fellow Chartered Accountant)\n\n👔 General Secretary:\nIkhlaq ur Rehman (Mian Akhalq Ur Rehman)\n- Overall administration and coordination\n- Founder and General Secretary of Mawakhat-e-Madina\n- Responsible for organizational records and activities",
  ],
  founder: [
    "Founder Information:\n\nMian Akhalq Ur Rehman is the Founder and General Secretary of Helpline Welfare Trust. He is also the General Secretary of Mawakhat-e-Madina. As the founder, he established Helpline with the vision of creating an organization that embodies the true spirit of brotherhood and community service, extending beyond mere charitable work to create lasting bonds within the community that reflect the principles of mutual support and compassion.",
  ],
  management: [
    "Management Team:\n\n🏢 General Managers:\n• GM (Admin & HR): Colonel Muhammad Ali (Retd)\n• GM (Education): Mr Mudasir Ahmad\n• Administrator KMC: COL Zahoor Hussain (Retd)\n\n📊 Senior Management:\n• Senior Manager Accounts: Mr Hamid Hassan Khan\n• Senior Manager Purchases: Mr Mehmood Ali Joiya\n\n👥 Department Managers:\n• Manager Admin & Support: Mr Sarfraz Ahmad Bhullar\n• Manager Welfare & Health: Mr Atif Hussain\n• Manager Transport: Rashid Nisar\n• Manager Media/Coord: Mr Hafiz Bilal Nurani\n• Manager Media: Hafiz Bilal Arshad\n• Junior Manager Accounts: Mr Faisal Mushtaq\n\n💻 Technical Team:\n• Software Developer: Syed Mudasir Bukhari\n\n🎓 Advisory:\n• Education Advisor: Aijaz Hussain Kazi (Former Secretary)",
  ],
  organizationalStructure: [
    "Organizational Structure:\n\n📋 Board of Trustees:\n• Chairman\n• President\n• Vice President\n• Managing Trustee\n• General Secretary\n\n🏢 Head Office Team:\n• Executive Management (Managing Trustee, GMs, Administrator)\n• Administrative Support (Managers for Admin, Accounts, Purchases, Transport)\n• Media Team (Media Managers and Software Developer)\n• Health & Welfare Department\n\n🎓 Education Wing:\n• GM (Education) and Education Team\n• Education Advisor\n\n🌍 Regional Offices:\n• 7 Offices across Pakistan\n• Regional Heads managing local operations\n\n👥 Volunteers & Support:\n• 10,480 Volunteers\n• 98 Reformers\n• Community supporters and partners",
  ],
  ceoMessage: [
    "CEO/Managing Trustee Message:\n\nMuhammad Iqbal Khan (FCA), Managing Trustee, believes that Allah Almighty has assigned to every person, particularly Muslims, the duty of serving fellow human beings. As part of the team since 2003, he has seen Helpline grow and reach people all over Pakistan. Key lessons learned include understanding the purpose of mankind, the meaning of Fikr-e-Falah-e-Insaniyat, the role of a believer in society, and how we can serve each other.\n\nAt Helpline, we care for all people from all communities and religions - deserving students, orphans, widows, patients, and destitute individuals. We believe in a society where we help each other to have a dignified and respectable life for every person.",
  ],
  boardOfTrustees: [
    "Board of Trustees:\n\n1. Chairman: Muhammad Aslam Khan Kakarh (Engr)\n   - Strategic leadership and vision\n   - Email: Principal@sheltersasseociates.com\n\n2. President: Khalil Ahmad Malik\n   - Organizational leadership\n   - Email: malikpapermart47@gmail.com\n\n3. Vice President: Ms Lubna Yaqoob Tahir\n   - Women's empowerment focus\n   - Email: lubnayaqoob60@gmail.com\n\n4. Managing Trustee: Muhammad Iqbal Khan (FCA)\n   - Day-to-day operations\n   - Email: info@iy.com.pk\n   - Part of team since 2003\n\n5. General Secretary: Ikhlaq ur Rehman (Mian Akhalq Ur Rehman)\n   - Founder and General Secretary\n   - Email: helpline.org.pk@gmail.com\n   - Coordinates all activities and records",
  ],
  ceo: [
    "CEO/Managing Trustee:\n\nMuhammad Iqbal Khan (FCA)\n- Managing Trustee and CEO\n- Email: info@iy.com.pk\n- Part of team since 2003\n- FCA (Fellow Chartered Accountant)\n- Oversees strategic initiatives and day-to-day operations",
  ],
  chairman: [
    "Chairman:\n\nMuhammad Aslam Khan Kakarh (Engr)\n- Chairman of Helpline Welfare Trust\n- Email: Principal@sheltersasseociates.com\n- Provides strategic leadership and vision\n- Engineering background with humanitarian commitment",
  ],
  president: [
    "President:\n\nKhalil Ahmad Malik\n- President of Helpline Welfare Trust\n- Email: malikpapermart47@gmail.com\n- Organizational leadership and community development\n- Strategic vision for growth and impact",
  ],
  vicePresident: [
    "Vice President:\n\nMs Lubna Yaqoob Tahir\n- Vice President of Helpline Welfare Trust\n- Email: lubnayaqoob60@gmail.com\n- Program management and community engagement\n- Focus on women's empowerment and education",
  ],
  generalSecretary: [
    "General Secretary:\n\nIkhlaq ur Rehman (Mian Akhalq Ur Rehman)\n- General Secretary of Helpline Welfare Trust\n- Email: helpline.org.pk@gmail.com\n- Founder and General Secretary of Mawakhat-e-Madina\n- Overall administration and coordination\n- Responsible for organizational records and activities",
  ],
  managingTrustee: [
    "Managing Trustee:\n\nMuhammad Iqbal Khan (FCA)\n- Managing Trustee of Helpline Welfare Trust\n- Email: info@iy.com.pk\n- Part of team since 2003\n- FCA (Fellow Chartered Accountant)\n- Oversees strategic initiatives and day-to-day operations",
  ],
  generalManagers: [
    "General Managers:\n\n1. GM (Admin & HR): Colonel Muhammad Ali (Retd)\n   - Email: muhammad.ali@helpline.org\n   - Manages administration and human resources\n\n2. GM (Education): Mr Mudasir Ahmad\n   - Email: mudasir.ahmad@helpline.org\n   - Leads education initiatives\n\n3. Administrator KMC: COL Zahoor Hussain (Retd)\n   - Email: zahoor.hussain@helpline.org\n   - Manages KMC initiatives",
  ],
  gmAdmin: [
    "GM (Admin & HR):\n\nColonel Muhammad Ali (Retd)\n- Email: muhammad.ali@helpline.org\n- General Manager of Administration and Human Resources\n- Ensures efficient operations and effective human resource management",
  ],
  gmEducation: [
    "GM (Education):\n\nMr Mudasir Ahmad\n- Email: mudasir.ahmad@helpline.org\n- General Manager of Education\n- Leads education initiatives and curriculum development",
  ],
  managerAccounts: [
    "Senior Manager Accounts:\n\nMr Hamid Hassan Khan\n- Email: hamid.khan@helpline.org\n- Oversees all financial operations\n- Ensures fiscal transparency",
  ],
  managerWelfare: [
    "Manager Welfare & Health:\n\nMr Atif Hussain\n- Email: atif.hussain@helpline.org\n- Develops and implements welfare and health programs\n- Organizes health camps and medical aid programs",
  ],
  managerMedia: [
    "Manager Media:\n\n1. Manager Media/Coord: Mr Hafiz Bilal Nurani\n   - Email: bilal.nurani@helpline.org\n   - Oversees media relations and coordination\n\n2. Manager Media: Hafiz Bilal Arshad\n   - Email: bilal.arshad@helpline.org\n   - Crafts and disseminates organization's message",
  ],
  default: [
    "I'm sorry, I don't have specific information about that. Could you please rephrase your question? I can help you with information about:\n\n• Our mission, vision, and objectives\n• Contact details and addresses\n• Education programs (schools, orphanage, Quran education)\n• Health services (hospitals, clinics, water programs)\n• Vocational training and digital skills\n• Welfare programs (rashan, distribution, disaster relief)\n• Mawakhat-e-Madina initiatives\n• Donation methods\n• Registration and legal information\n• Statistics and impact\n• Volunteer opportunities\n• Organizational structure and leadership\n• Board of Trustees\n• Management team\n• Founder information\n• CEO/Managing Trustee message\n\nPlease ask me about any of these topics!",
  ],
};

// Function to find the best matching response
function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();

  // Greeting patterns
  if (
    message.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)
  ) {
    return knowledgeBase.greeting[
      Math.floor(Math.random() * knowledgeBase.greeting.length)
    ];
  }

  // About patterns
  if (
    message.match(
      /\b(about|what is|who is|tell me about|information|intro|introduction|organization)\b/
    )
  ) {
    return knowledgeBase.about[
      Math.floor(Math.random() * knowledgeBase.about.length)
    ];
  }

  // Mission patterns
  if (message.match(/\b(mission|what is your mission|your mission)\b/)) {
    return knowledgeBase.mission[0];
  }

  // Vision patterns
  if (message.match(/\b(vision|what is your vision|your vision)\b/)) {
    return knowledgeBase.vision[0];
  }

  // Objective patterns
  if (
    message.match(
      /\b(objective|objectives|goal|goals|what is your objective|your objective)\b/
    )
  ) {
    return knowledgeBase.objective[0];
  }

  // Contact patterns (must come before phone/email/address)
  if (
    message.match(
      /\b(contact|reach|get in touch|how to contact|where are you)\b/
    )
  ) {
    return knowledgeBase.contact[0];
  }

  // Address patterns
  if (
    message.match(
      /\b(address|location|where|office|head office|headquarters|located)\b/
    )
  ) {
    return knowledgeBase.address[0];
  }

  // Phone patterns
  if (
    message.match(
      /\b(phone|telephone|call|mobile|whatsapp|number|phone number)\b/
    )
  ) {
    return knowledgeBase.phone[0];
  }

  // Email patterns
  if (message.match(/\b(email|e-mail|mail|send email|email address)\b/)) {
    return knowledgeBase.email[0];
  }

  // Education patterns
  if (
    message.match(
      /\b(education|school|schools|student|students|learn|learning|educational)\b/
    )
  ) {
    return knowledgeBase.education[
      Math.floor(Math.random() * knowledgeBase.education.length)
    ];
  }

  // Own Schools patterns
  if (
    message.match(
      /\b(own school|own schools|alkitab|al-kitab|irtaqa|irtiqa|rehmat ali|iman maryam|emman maryam)\b/
    )
  ) {
    return knowledgeBase.ownSchools[0];
  }

  // Adopted Schools patterns
  if (
    message.match(
      /\b(adopted school|adopted schools|government school|benazir|misri|nabi baksh|nimro)\b/
    )
  ) {
    return knowledgeBase.adoptedSchools[0];
  }

  // Orphanage patterns
  if (
    message.match(
      /\b(orphanage|orphan|orphans|children home|wafaq|abbottabad)\b/
    )
  ) {
    return knowledgeBase.orphanage[0];
  }

  // Quran Education patterns
  if (
    message.match(
      /\b(quran|quran education|taleem|taleem-e-quran|islamic education|religious education)\b/
    )
  ) {
    return knowledgeBase.quranEducation[0];
  }

  // Masjid Maktab patterns
  if (
    message.match(
      /\b(masjid|maktab|mosque|masjid maktab|masjid school)\b/
    )
  ) {
    return knowledgeBase.masjidMaktab[0];
  }

  // Health patterns
  if (
    message.match(
      /\b(health|hospital|hospitals|clinic|medical|healthcare|ambulance|treatment|medicine)\b/
    )
  ) {
    return knowledgeBase.health[0];
  }

  // Water patterns
  if (
    message.match(
      /\b(water|clean water|drinking water|ro|reverse osmosis|water plant|water program)\b/
    )
  ) {
    return knowledgeBase.water[0];
  }

  // Family Welfare patterns
  if (
    message.match(
      /\b(family welfare|medicine service|medicine|free medicine|medical service)\b/
    )
  ) {
    return knowledgeBase.familyWelfare[0];
  }

  // Vocational Training patterns
  if (
    message.match(
      /\b(vocational|training|vocational training|stitching|embroidery|sewing|livelihood|skill)\b/
    )
  ) {
    return knowledgeBase.vocationalTraining[0];
  }

  // Digital Skills patterns
  if (
    message.match(
      /\b(digital|digiskills|digi skills|freelancing|online training|it lab|computer|technology)\b/
    )
  ) {
    return knowledgeBase.digitalSkills[0];
  }

  // Rashan patterns
  if (
    message.match(
      /\b(rashan|ration|food|food program|ramadan|ramzan|food distribution)\b/
    )
  ) {
    return knowledgeBase.rashan[0];
  }

  // Distribution patterns
  if (
    message.match(
      /\b(distribution|distribute|distributing|food distribution|clothing|supplies)\b/
    )
  ) {
    return knowledgeBase.distribution[0];
  }

  // Disaster Relief patterns
  if (
    message.match(
      /\b(disaster|relief|emergency|rehabilitation|flood|earthquake|natural disaster)\b/
    )
  ) {
    return knowledgeBase.disasterRelief[0];
  }

  // Qurbani patterns
  if (
    message.match(
      /\b(qurbani|sacrifice|eid|eid-ul-adha|meat|sacrificial)\b/
    )
  ) {
    return knowledgeBase.qurbani[0];
  }

  // Mawakhat patterns
  if (
    message.match(
      /\b(mawakhat|mawakhat-e-madina|mawakhat e madina|brotherhood|madina)\b/
    )
  ) {
    return knowledgeBase.mawakhat[0];
  }

  // Dar ul Tarbiyah patterns
  if (
    message.match(
      /\b(dar ul tarbiyah|darul tarbiyah|darultarbiyah|tarbiyah)\b/
    )
  ) {
    return knowledgeBase.darulTarbiyah[0];
  }

  // Dar ul Ehsan patterns
  if (
    message.match(
      /\b(dar ul ehsan|darul ehsan|darulehsan|ehsan)\b/
    )
  ) {
    return knowledgeBase.darulEhsan[0];
  }

  // Sahoolat Center patterns
  if (
    message.match(
      /\b(sahoolat|sahoolat center|sahol center)\b/
    )
  ) {
    return knowledgeBase.sahoolatCenter[0];
  }

  // Donation patterns
  if (
    message.match(
      /\b(donate|donation|contribute|contribution|give|support|help financially|how to donate|donation methods)\b/
    )
  ) {
    return knowledgeBase.donation[0];
  }

  // Bank transfer patterns
  if (
    message.match(
      /\b(bank|account|iban|transfer|bank transfer|bank account|account number|bank details|ubl)\b/
    )
  ) {
    return knowledgeBase.bank[0];
  }

  // Jazz Cash patterns
  if (
    message.match(
      /\b(jazz cash|easypaisa|easy paisa|mobile wallet|wallet)\b/
    )
  ) {
    return knowledgeBase.jazzcash[0];
  }

  // Registration patterns
  if (
    message.match(
      /\b(register|registration|registered|legal|ntn|certificate|certified|authorized|fbr|tax exempt)\b/
    )
  ) {
    return knowledgeBase.registration[0];
  }

  // Programs patterns
  if (
    message.match(
      /\b(program|programs|initiative|initiatives|services|what do you do|activities|projects)\b/
    )
  ) {
    return knowledgeBase.programs[0];
  }

  // Stats patterns
  if (
    message.match(
      /\b(stat|stats|statistics|numbers|how many|beneficiaries|volunteers|impact|achievement)\b/
    )
  ) {
    return knowledgeBase.stats[0];
  }

  // Volunteer patterns
  if (
    message.match(
      /\b(volunteer|volunteers|volunteering|join|become volunteer|help|reformer)\b/
    )
  ) {
    return knowledgeBase.volunteer[0];
  }

  // Offices patterns
  if (
    message.match(
      /\b(offices|office|branches|locations|where are you located)\b/
    )
  ) {
    return knowledgeBase.offices[0];
  }

  // History patterns
  if (
    message.match(
      /\b(history|started|beginning|founded|established|journey|since when)\b/
    )
  ) {
    return knowledgeBase.history[0];
  }

  // Principles patterns
  if (
    message.match(
      /\b(principles|principle|values|core values|belief|philosophy|approach)\b/
    )
  ) {
    return knowledgeBase.principles[0];
  }

  // Specific designation patterns (check these first for exact matches)
  
  // CEO patterns
  if (message.match(/\b(ceo|chief executive officer)\b/)) {
    return knowledgeBase.ceo[0];
  }

  // Chairman patterns
  if (message.match(/\b(chairman|chair)\b/)) {
    return knowledgeBase.chairman[0];
  }

  // President patterns
  if (message.match(/\b(president)\b/)) {
    return knowledgeBase.president[0];
  }

  // Vice President patterns
  if (message.match(/\b(vice president|vice-president)\b/)) {
    return knowledgeBase.vicePresident[0];
  }

  // General Secretary patterns
  if (message.match(/\b(general secretary|secretary)\b/)) {
    return knowledgeBase.generalSecretary[0];
  }

  // Managing Trustee patterns
  if (message.match(/\b(managing trustee)\b/)) {
    return knowledgeBase.managingTrustee[0];
  }

  // General Managers patterns
  if (message.match(/\b(general manager|general managers|gm)\b/)) {
    return knowledgeBase.generalManagers[0];
  }

  // GM Admin patterns
  if (message.match(/\b(gm admin|gm \(admin|admin & hr|admin and hr)\b/)) {
    return knowledgeBase.gmAdmin[0];
  }

  // GM Education patterns
  if (message.match(/\b(gm education|gm \(education)\b/)) {
    return knowledgeBase.gmEducation[0];
  }

  // Manager Accounts patterns
  if (message.match(/\b(manager accounts|accounts manager|senior manager accounts)\b/)) {
    return knowledgeBase.managerAccounts[0];
  }

  // Manager Welfare patterns
  if (message.match(/\b(manager welfare|welfare manager|manager health|health manager|manager welfare & health)\b/)) {
    return knowledgeBase.managerWelfare[0];
  }

  // Manager Media patterns
  if (message.match(/\b(manager media|media manager)\b/)) {
    return knowledgeBase.managerMedia[0];
  }

  // Founder patterns
  if (
    message.match(
      /\b(founder|founders|who founded|established by|created by|mian akhalq|ikhlaq)\b/
    )
  ) {
    return knowledgeBase.founder[0];
  }

  // Leadership patterns (general)
  if (
    message.match(
      /\b(leadership|leader|leaders|executive|board)\b/
    )
  ) {
    return knowledgeBase.leadership[0];
  }

  // Management patterns
  if (
    message.match(
      /\b(management|manager|managers|gm|general manager|team|staff|employees|personnel)\b/
    )
  ) {
    return knowledgeBase.management[0];
  }

  // Organizational Structure patterns
  if (
    message.match(
      /\b(organizational structure|structure|organization structure|hierarchy|departments|how organized|team structure)\b/
    )
  ) {
    return knowledgeBase.organizationalStructure[0];
  }

  // CEO Message patterns (check after CEO designation)
  if (
    message.match(
      /\b(ceo message|managing trustee message|iqbal khan message|message from ceo|message from managing trustee|director message)\b/
    )
  ) {
    return knowledgeBase.ceoMessage[0];
  }

  // Board of Trustees patterns
  if (
    message.match(
      /\b(board|board of trustees|trustees|trustee|executive committee|committee)\b/
    )
  ) {
    return knowledgeBase.boardOfTrustees[0];
  }

  // Default response
  return knowledgeBase.default[0];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm the Helpline Welfare Trust assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Simulate bot thinking delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "60px",
            height: "60px",
            backgroundColor: "#4A90E2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            zIndex: 9998,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
          }}
          aria-label="Open chat with Helpline Welfare Trust bot"
        >
          <FaRobot
            style={{
              color: "#ffffff",
              fontSize: "28px",
            }}
          />
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "380px",
            height: "500px",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              backgroundColor: "#4A90E2",
              color: "#ffffff",
              padding: "15px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "20px 20px 0 0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaRobot style={{ fontSize: "20px" }} />
              <div>
                <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
                  Helpline Welfare Trust
                </h3>
                <p style={{ margin: 0, fontSize: "12px", opacity: 0.9 }}>
                  Ask me anything!
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                fontSize: "20px",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages Container */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "20px",
              backgroundColor: "#f5f5f5",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  justifyContent:
                    message.sender === "user" ? "flex-end" : "flex-start",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                {message.sender === "bot" && (
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#4A90E2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaRobot style={{ color: "#ffffff", fontSize: "16px" }} />
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "75%",
                    padding: "12px 16px",
                    borderRadius:
                      message.sender === "user"
                        ? "18px 18px 4px 18px"
                        : "18px 18px 18px 4px",
                    backgroundColor:
                      message.sender === "user" ? "#4A90E2" : "#ffffff",
                    color: message.sender === "user" ? "#ffffff" : "#333333",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {message.text}
                </div>
                {message.sender === "user" && (
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaUser style={{ color: "#666666", fontSize: "16px" }} />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            style={{
              padding: "15px",
              backgroundColor: "#ffffff",
              borderTop: "1px solid #e0e0e0",
              display: "flex",
              gap: "10px",
            }}
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "12px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "25px",
                fontSize: "14px",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#4A90E2";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
              }}
            />
            <button
              type="submit"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#4A90E2",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#357ABD";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#4A90E2";
              }}
              aria-label="Send message"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="width: 380px"] {
            width: calc(100vw - 40px) !important;
            right: 20px !important;
            left: 20px !important;
            height: calc(100vh - 40px) !important;
            max-height: 500px !important;
          }
        }
      `}</style>
    </>
  );
}

