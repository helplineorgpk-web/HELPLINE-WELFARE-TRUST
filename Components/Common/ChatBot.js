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
  headOfficeTeam: [
    "Head Office Team:\n\n👔 Managing Trustee:\nMuhammad Iqbal Khan\n- Oversees all operations and strategic initiatives\n- Part of team since 2003\n- FCA (Fellow Chartered Accountant)\n\n🏢 GM (Admin & HR):\nColonel Muhammad Ali (Retd)\n- Manages administration and human resources\n- Ensures efficient organizational operations\n\n📚 GM (Education):\nMr Mudasir Ahmad\n- Leads all education initiatives and programs\n- Manages educational institutions and curriculum\n\n🏛️ Administrator KMC:\nCOL Zahoor Hussain (Retd)\n- Administers KMC (Khushnood Model Campus) operations\n- Ensures smooth functioning of campus activities\n\n💰 Senior Manager Accounts:\nMr Hamid Hassan Khan\n- Oversees all financial operations and accounting\n- Ensures fiscal transparency and compliance\n\n👥 Manager Admin & Support:\nMr Sarfraz Ahmad Bhullar\n- Manages administrative support services\n- Coordinates office operations and logistics\n\n🏥 Manager Welfare & Health:\nMr Atif Hussain\n- Develops and implements welfare and health programs\n- Organizes health camps and medical aid programs\n\n💼 Junior Manager Accounts:\nMr Faisal Mushtaq\n- Assists in financial operations and accounting\n- Supports senior accounts management\n\n🛒 Senior Manager Purchases:\nMr Mehmood Ali Joiya\n- Manages procurement and purchasing operations\n- Ensures quality and cost-effective acquisitions\n\n🚚 Manager Transport:\nRashid Nisar\n- Manages transportation and logistics\n- Coordinates vehicle operations and maintenance\n\n💻 Software Developer:\nSyed Mudasir Bukhari\n- Develops and maintains software systems\n- Manages IT infrastructure and digital solutions\n\n📺 Manager Media:\nHafiz Bilal Arshad\n- Manages media relations and communications\n- Crafts and disseminates organization's message",
  ],
  educationWing: [
    "Education Wing Team:\n\n🎓 Education Advisor:\nAijaz Hussain Kazi (Former Secretary)\n- Provides strategic guidance on education policies\n- Former Secretary with extensive experience\n- Advises on curriculum and educational initiatives\n\n📊 Marketing Consultant:\nBrigadier Zaheer Ahmad (Retd)\n- Provides marketing and outreach expertise\n- Retired Brigadier with strategic marketing experience\n- Supports education wing's visibility and growth\n\n💻 Tech Consultant:\nColonel Waqar Ahmad (Retd)\n- Provides technology and IT consulting\n- Retired Colonel with technical expertise\n- Supports digital transformation in education",
  ],
  regionalHeads: [
    "Regional Heads:\n\n🌍 Regional Head (Sindh):\nKhushnood Ahmad Khan\n- Manages operations in Sindh province\n- Coordinates programs and initiatives in the region\n- Ensures effective service delivery across Sindh\n\n🌍 Regional Head (South):\nBrigadier Moeen ud Din Ghazalli (Retd)\n- Manages operations in Southern regions\n- Retired Brigadier with leadership experience\n- Coordinates regional programs and activities\n\n🌍 Regional Head (North):\nMs Nuzhat Fatima (Former Secretary)\n- Manages operations in Northern regions\n- Former Secretary with administrative expertise\n- Coordinates regional initiatives and programs",
  ],
  friendsReformers: [
    "Friends/Reformers:\n\n🤝 Muhammad Arif Mehr\n- Friend/Reformer of Helpline Welfare Trust\n- Active supporter and community advocate\n- Contributes to organizational mission and vision\n\n🤝 Brig Zahid Hussain Goryaya (Retd)\n- Friend/Reformer of Helpline Welfare Trust\n- Retired Brigadier with military background\n- Supports organizational initiatives and programs\n\n🤝 Colonel Zubair Ahmad Chughtai (Retd)\n- Friend/Reformer of Helpline Welfare Trust\n- Retired Colonel with leadership experience\n- Active in community service and support\n\n🤝 Sqn Ldr Muhammad Naeem Ahmad Khan (Retd)\n- Friend/Reformer of Helpline Welfare Trust\n- Retired Squadron Leader with aviation background\n- Supports organizational mission and activities\n\n🤝 Professor Ahmad Sohaib (Retd)\n- Friend/Reformer of Helpline Welfare Trust\n- Retired Professor with academic expertise\n- Contributes to educational and community initiatives",
  ],
  // Individual person entries for detailed queries
  muhammadAslamKhan: [
    "Muhammad Aslam Khan Kakarh (Engr) - Chairman:\n\nMuhammad Aslam Khan Kakarh is the Chairman of Helpline Welfare Trust. He holds an engineering degree and brings strategic leadership and vision to the organization. As Chairman, he provides overall guidance and direction, ensuring the organization stays true to its mission of serving humanity. His engineering background combined with humanitarian commitment makes him a strong leader for the organization.\n\nRole: Chairman\nEmail: Principal@sheltersasseociates.com\n\nHe oversees the strategic direction of Helpline and ensures that all initiatives align with the organization's core values and objectives.",
  ],
  khalilAhmadMalik: [
    "Khalil Ahmad Malik - President:\n\nKhalil Ahmad Malik serves as the President of Helpline Welfare Trust. He provides organizational leadership and focuses on community development initiatives. With a strategic vision for growth and impact, he works to expand Helpline's reach and effectiveness across Pakistan. His leadership helps drive the organization's mission forward.\n\nRole: President\nEmail: malikpapermart47@gmail.com\n\nHe plays a crucial role in organizational leadership and community development, ensuring Helpline continues to make a positive impact on the lives of those in need.",
  ],
  lubnaYaqoobTahir: [
    "Ms Lubna Yaqoob Tahir - Vice President:\n\nMs Lubna Yaqoob Tahir is the Vice President of Helpline Welfare Trust. She focuses on program management and community engagement, with a special emphasis on women's empowerment and education. Her leadership helps ensure that Helpline's programs are inclusive and address the needs of all community members, particularly women and children.\n\nRole: Vice President\nEmail: lubnayaqoob60@gmail.com\n\nShe brings valuable perspective to the leadership team, ensuring that women's voices and needs are represented in all organizational decisions and programs.",
  ],
  muhammadIqbalKhan: [
    "Muhammad Iqbal Khan - Managing Trustee:\n\nMuhammad Iqbal Khan (FCA) is the Managing Trustee of Helpline Welfare Trust. He has been part of the team since 2003 and holds the qualification of FCA (Fellow Chartered Accountant). He oversees strategic initiatives and day-to-day operations, ensuring the organization runs efficiently and effectively. He believes that Allah Almighty has assigned to every person, particularly Muslims, the duty of serving fellow human beings.\n\nRole: Managing Trustee\nEmail: info@iy.com.pk\nPart of team since: 2003\nQualification: FCA (Fellow Chartered Accountant)\n\nHe has seen Helpline grow and reach people all over Pakistan, and his leadership has been instrumental in the organization's success and expansion.",
  ],
  ikhlaqUrRehman: [
    "Ikhlaq ur Rehman (Mian Akhalq Ur Rehman) - General Secretary:\n\nIkhlaq ur Rehman, also known as Mian Akhalq Ur Rehman, is the Founder and General Secretary of Helpline Welfare Trust. He is also the General Secretary of Mawakhat-e-Madina. As the founder, he established Helpline with the vision of creating an organization that embodies the true spirit of brotherhood and community service. He is responsible for overall administration and coordination, as well as organizational records and activities.\n\nRole: General Secretary & Founder\nEmail: helpline.org.pk@gmail.com\n\nHe established Helpline to extend beyond mere charitable work and create lasting bonds within the community that reflect the principles of mutual support and compassion.",
  ],
  colonelMuhammadAli: [
    "Colonel Muhammad Ali (Retd) - GM (Admin & HR):\n\nColonel Muhammad Ali (Retd) serves as the General Manager of Administration and Human Resources at Helpline Welfare Trust. As a retired Colonel, he brings military discipline and organizational expertise to the role. He ensures efficient operations and effective human resource management across the organization.\n\nRole: GM (Admin & HR)\nStatus: Retired Colonel\n\nHe manages all administrative functions and human resources, ensuring that the organization operates smoothly and that staff are well-supported and motivated.",
  ],
  mudasirAhmad: [
    "Mr Mudasir Ahmad - GM (Education):\n\nMr Mudasir Ahmad is the General Manager of Education at Helpline Welfare Trust. He leads all education initiatives and curriculum development across the organization's educational institutions. Under his leadership, Helpline manages 6 own schools and 15 adopted government schools, benefiting thousands of students.\n\nRole: GM (Education)\n\nHe oversees the education wing's operations, ensuring quality education delivery and continuous improvement in educational programs and services.",
  ],
  colZahoorHussain: [
    "COL Zahoor Hussain (Retd) - Administrator KMC:\n\nCOL Zahoor Hussain (Retd) serves as the Administrator of KMC (Khushnood Model Campus) at Helpline Welfare Trust. As a retired Colonel, he brings leadership and administrative expertise to manage the campus operations effectively. He ensures smooth functioning of all campus activities and programs.\n\nRole: Administrator KMC\nStatus: Retired Colonel\n\nHe manages the KMC campus, ensuring that all activities run smoothly and that students and staff have the resources they need.",
  ],
  hamidHassanKhan: [
    "Mr Hamid Hassan Khan - Senior Manager Accounts:\n\nMr Hamid Hassan Khan is the Senior Manager of Accounts at Helpline Welfare Trust. He oversees all financial operations and ensures fiscal transparency and compliance. His role is crucial in maintaining the organization's financial integrity and ensuring that all funds are properly managed and accounted for.\n\nRole: Senior Manager Accounts\n\nHe manages all accounting functions, financial reporting, and ensures compliance with financial regulations and standards.",
  ],
  sarfrazAhmadBhullar: [
    "Mr Sarfraz Ahmad Bhullar - Manager Admin & Support:\n\nMr Sarfraz Ahmad Bhullar serves as the Manager of Admin & Support at Helpline Welfare Trust. He manages administrative support services and coordinates office operations and logistics. His role ensures that all departments have the administrative support they need to function effectively.\n\nRole: Manager Admin & Support\n\nHe coordinates office operations, manages administrative tasks, and ensures smooth day-to-day functioning of the head office.",
  ],
  atifHussain: [
    "Mr Atif Hussain - Manager Welfare & Health:\n\nMr Atif Hussain is the Manager of Welfare & Health at Helpline Welfare Trust. He develops and implements welfare and health programs across the organization. He organizes health camps, medical aid programs, and ensures that communities receive the healthcare support they need.\n\nRole: Manager Welfare & Health\n\nHe coordinates health initiatives including hospitals, clinics, mobile medical camps, and welfare programs that benefit thousands of beneficiaries.",
  ],
  faisalMushtaq: [
    "Mr Faisal Mushtaq - Junior Manager Accounts:\n\nMr Faisal Mushtaq serves as the Junior Manager of Accounts at Helpline Welfare Trust. He assists in financial operations and accounting, supporting the senior accounts management team. His role is essential in maintaining accurate financial records and supporting the organization's financial operations.\n\nRole: Junior Manager Accounts\n\nHe supports the accounts department in managing financial transactions, record-keeping, and financial reporting.",
  ],
  mehmoodAliJoiya: [
    "Mr Mehmood Ali Joiya - Senior Manager Purchases:\n\nMr Mehmood Ali Joiya is the Senior Manager of Purchases at Helpline Welfare Trust. He manages procurement and purchasing operations across the organization. He ensures quality and cost-effective acquisitions, supporting all departments with the resources they need.\n\nRole: Senior Manager Purchases\n\nHe oversees all procurement activities, vendor management, and ensures that purchases are made efficiently and cost-effectively.",
  ],
  rashidNisar: [
    "Rashid Nisar - Manager Transport:\n\nRashid Nisar serves as the Manager of Transport at Helpline Welfare Trust. He manages transportation and logistics operations, coordinating vehicle operations and maintenance. His role ensures that the organization's transportation needs are met efficiently.\n\nRole: Manager Transport\n\nHe coordinates all transportation activities, manages the vehicle fleet, and ensures safe and efficient transport services for organizational operations.",
  ],
  syedMudasirBukhari: [
    "Syed Mudasir Bukhari - Software Developer:\n\nSyed Mudasir Bukhari is the Software Developer at Helpline Welfare Trust. He develops and maintains software systems, managing IT infrastructure and digital solutions for the organization. His technical expertise supports the organization's digital transformation and operational efficiency.\n\nRole: Software Developer\n\nHe develops and maintains software applications, manages IT systems, and supports the organization's digital initiatives and online presence.",
  ],
  hafizBilalArshad: [
    "Hafiz Bilal Arshad - Manager Media:\n\nHafiz Bilal Arshad serves as the Manager of Media at Helpline Welfare Trust. He manages media relations and communications, crafting and disseminating the organization's message to the public. His role is crucial in maintaining the organization's public image and communicating its mission and impact.\n\nRole: Manager Media\n\nHe handles media relations, content creation, social media management, and ensures effective communication of Helpline's activities and achievements.",
  ],
  aijazHussainKazi: [
    "Aijaz Hussain Kazi (Former Secretary) - Education Advisor:\n\nAijaz Hussain Kazi, a Former Secretary, serves as the Education Advisor at Helpline Welfare Trust. He provides strategic guidance on education policies and advises on curriculum and educational initiatives. His extensive experience in public service brings valuable insights to the education wing.\n\nRole: Education Advisor\nBackground: Former Secretary\n\nHe advises on educational policies, curriculum development, and strategic planning for the education programs, ensuring quality and effectiveness.",
  ],
  brigZaheerAhmad: [
    "Brigadier Zaheer Ahmad (Retd) - Marketing Consultant:\n\nBrigadier Zaheer Ahmad (Retd) serves as the Marketing Consultant for the Education Wing at Helpline Welfare Trust. As a retired Brigadier, he brings strategic marketing and outreach expertise. He supports the education wing's visibility and growth through effective marketing strategies.\n\nRole: Marketing Consultant\nStatus: Retired Brigadier\n\nHe provides marketing expertise and strategic guidance to enhance the education wing's outreach and impact in the community.",
  ],
  colWaqarAhmad: [
    "Colonel Waqar Ahmad (Retd) - Tech Consultant:\n\nColonel Waqar Ahmad (Retd) serves as the Tech Consultant for the Education Wing at Helpline Welfare Trust. As a retired Colonel, he brings technical expertise and IT consulting. He supports digital transformation in education and helps integrate technology into educational programs.\n\nRole: Tech Consultant\nStatus: Retired Colonel\n\nHe provides technology consulting and supports the integration of digital solutions in education programs and operations.",
  ],
  khushnoodAhmadKhan: [
    "Khushnood Ahmad Khan - Regional Head (Sindh):\n\nKhushnood Ahmad Khan serves as the Regional Head for Sindh province at Helpline Welfare Trust. He manages all operations in Sindh, coordinating programs and initiatives in the region. He ensures effective service delivery across Sindh, including education, health, and welfare programs.\n\nRole: Regional Head (Sindh)\n\nHe coordinates all Helpline activities in Sindh province, ensuring that communities receive the support and services they need.",
  ],
  brigMoeenUdDin: [
    "Brigadier Moeen ud Din Ghazalli (Retd) - Regional Head (South):\n\nBrigadier Moeen ud Din Ghazalli (Retd) serves as the Regional Head for Southern regions at Helpline Welfare Trust. As a retired Brigadier, he brings leadership experience and strategic vision. He manages operations in Southern regions and coordinates regional programs and activities.\n\nRole: Regional Head (South)\nStatus: Retired Brigadier\n\nHe leads regional operations in the South, ensuring effective program delivery and community support across the region.",
  ],
  nuzhatFatima: [
    "Ms Nuzhat Fatima (Former Secretary) - Regional Head (North):\n\nMs Nuzhat Fatima, a Former Secretary, serves as the Regional Head for Northern regions at Helpline Welfare Trust. With her administrative expertise from public service, she manages operations in Northern regions and coordinates regional initiatives and programs effectively.\n\nRole: Regional Head (North)\nBackground: Former Secretary\n\nShe coordinates all Helpline activities in Northern regions, ensuring efficient program delivery and community support.",
  ],
  muhammadArifMehr: [
    "Muhammad Arif Mehr - Friend/Reformer:\n\nMuhammad Arif Mehr is a Friend/Reformer of Helpline Welfare Trust. As an active supporter and community advocate, he contributes to the organizational mission and vision. Friends/Reformers play a crucial role in supporting Helpline's initiatives and spreading awareness about the organization's work.\n\nRole: Friend/Reformer\n\nHe actively supports Helpline's mission and contributes to community development and social welfare initiatives.",
  ],
  brigZahidHussain: [
    "Brig Zahid Hussain Goryaya (Retd) - Friend/Reformer:\n\nBrig Zahid Hussain Goryaya (Retd) is a Friend/Reformer of Helpline Welfare Trust. As a retired Brigadier with a military background, he brings leadership experience and supports organizational initiatives and programs. Friends/Reformers are valued supporters who contribute to Helpline's mission.\n\nRole: Friend/Reformer\nStatus: Retired Brigadier\n\nHe supports Helpline's initiatives and contributes his expertise to help the organization achieve its goals.",
  ],
  colZubairAhmad: [
    "Colonel Zubair Ahmad Chughtai (Retd) - Friend/Reformer:\n\nColonel Zubair Ahmad Chughtai (Retd) is a Friend/Reformer of Helpline Welfare Trust. As a retired Colonel with leadership experience, he is active in community service and support. Friends/Reformers play an important role in supporting Helpline's mission and programs.\n\nRole: Friend/Reformer\nStatus: Retired Colonel\n\nHe actively supports community service initiatives and contributes to Helpline's mission of serving humanity.",
  ],
  sqnLdrMuhammadNaeem: [
    "Sqn Ldr Muhammad Naeem Ahmad Khan (Retd) - Friend/Reformer:\n\nSqn Ldr Muhammad Naeem Ahmad Khan (Retd) is a Friend/Reformer of Helpline Welfare Trust. As a retired Squadron Leader with an aviation background, he supports the organizational mission and activities. Friends/Reformers are dedicated supporters who help advance Helpline's work.\n\nRole: Friend/Reformer\nStatus: Retired Squadron Leader\n\nHe supports Helpline's mission and contributes his expertise and experience to help the organization serve communities effectively.",
  ],
  profAhmadSohaib: [
    "Professor Ahmad Sohaib (Retd) - Friend/Reformer:\n\nProfessor Ahmad Sohaib (Retd) is a Friend/Reformer of Helpline Welfare Trust. As a retired Professor with academic expertise, he contributes to educational and community initiatives. Friends/Reformers provide valuable support and guidance to help Helpline achieve its mission.\n\nRole: Friend/Reformer\nStatus: Retired Professor\n\nHe contributes his academic expertise to support educational initiatives and community development programs.",
  ],
  default: [
    "I'm sorry, I don't have specific information about that. Could you please rephrase your question? I can help you with information about:\n\n• Our mission, vision, and objectives\n• Contact details and addresses\n• Education programs (schools, orphanage, Quran education)\n• Health services (hospitals, clinics, water programs)\n• Vocational training and digital skills\n• Welfare programs (rashan, distribution, disaster relief)\n• Mawakhat-e-Madina initiatives\n• Donation methods\n• Registration and legal information\n• Statistics and impact\n• Volunteer opportunities\n• Organizational structure and leadership\n• Board of Trustees (Chairman, President, Vice President, Managing Trustee, General Secretary)\n• Head Office Team (GMs, Managers, Staff)\n• Education Wing (Advisors and Consultants)\n• Regional Heads (Sindh, South, North)\n• Friends/Reformers\n• Individual team members by name\n• Management team\n• Founder information\n• CEO/Managing Trustee message\n\nPlease ask me about any of these topics!",
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

  // Head Office Team patterns
  if (
    message.match(
      /\b(head office team|head office|office team|management team|staff|employees)\b/
    )
  ) {
    return knowledgeBase.headOfficeTeam[0];
  }

  // Education Wing patterns
  if (
    message.match(
      /\b(education wing|education team|education advisor|marketing consultant|tech consultant)\b/
    )
  ) {
    return knowledgeBase.educationWing[0];
  }

  // Regional Heads patterns
  if (
    message.match(
      /\b(regional head|regional heads|regional|sindh|south|north|regional office)\b/
    )
  ) {
    return knowledgeBase.regionalHeads[0];
  }

  // Friends/Reformers patterns
  if (
    message.match(
      /\b(friends|reformers|friend reformer|friend\/reformer)\b/
    )
  ) {
    return knowledgeBase.friendsReformers[0];
  }

  // Individual person name patterns
  if (
    message.match(
      /\b(muhammad aslam khan|aslam khan kakarh|engr aslam|chairman aslam)\b/
    )
  ) {
    return knowledgeBase.muhammadAslamKhan[0];
  }

  if (
    message.match(
      /\b(khalil ahmad malik|khalil malik|president khalil)\b/
    )
  ) {
    return knowledgeBase.khalilAhmadMalik[0];
  }

  if (
    message.match(
      /\b(lubna yaqoob|ms lubna|lubna tahir|vice president lubna)\b/
    )
  ) {
    return knowledgeBase.lubnaYaqoobTahir[0];
  }

  if (
    message.match(
      /\b(muhammad iqbal khan|iqbal khan|managing trustee iqbal|iqbal khan fca)\b/
    )
  ) {
    return knowledgeBase.muhammadIqbalKhan[0];
  }

  if (
    message.match(
      /\b(ikhlaq ur rehman|mian akhalq|akhalq ur rehman|general secretary ikhlaq|founder)\b/
    )
  ) {
    return knowledgeBase.ikhlaqUrRehman[0];
  }

  if (
    message.match(
      /\b(colonel muhammad ali|muhammad ali|col muhammad ali|gm admin|admin hr)\b/
    )
  ) {
    return knowledgeBase.colonelMuhammadAli[0];
  }

  if (
    message.match(
      /\b(mudasir ahmad|gm education|education mudasir)\b/
    )
  ) {
    return knowledgeBase.mudasirAhmad[0];
  }

  if (
    message.match(
      /\b(zahoor hussain|col zahoor|administrator kmc|kmc administrator)\b/
    )
  ) {
    return knowledgeBase.colZahoorHussain[0];
  }

  if (
    message.match(
      /\b(hamid hassan khan|hamid khan|senior manager accounts|accounts manager)\b/
    )
  ) {
    return knowledgeBase.hamidHassanKhan[0];
  }

  if (
    message.match(
      /\b(sarfraz ahmad bhullar|sarfraz bhullar|manager admin|admin support)\b/
    )
  ) {
    return knowledgeBase.sarfrazAhmadBhullar[0];
  }

  if (
    message.match(
      /\b(atif hussain|manager welfare|manager health|welfare health)\b/
    )
  ) {
    return knowledgeBase.atifHussain[0];
  }

  if (
    message.match(
      /\b(faisal mushtaq|junior manager accounts|accounts faisal)\b/
    )
  ) {
    return knowledgeBase.faisalMushtaq[0];
  }

  if (
    message.match(
      /\b(mehmood ali joiya|mehmood joiya|senior manager purchases|purchases manager)\b/
    )
  ) {
    return knowledgeBase.mehmoodAliJoiya[0];
  }

  if (
    message.match(
      /\b(rashid nisar|manager transport|transport manager)\b/
    )
  ) {
    return knowledgeBase.rashidNisar[0];
  }

  if (
    message.match(
      /\b(syed mudasir bukhari|mudasir bukhari|software developer|developer)\b/
    )
  ) {
    return knowledgeBase.syedMudasirBukhari[0];
  }

  if (
    message.match(
      /\b(hafiz bilal arshad|bilal arshad|manager media|media manager bilal)\b/
    )
  ) {
    return knowledgeBase.hafizBilalArshad[0];
  }

  if (
    message.match(
      /\b(aijaz hussain kazi|aijaz kazi|education advisor|former secretary aijaz)\b/
    )
  ) {
    return knowledgeBase.aijazHussainKazi[0];
  }

  if (
    message.match(
      /\b(brigadier zaheer ahmad|zaheer ahmad|brig zaheer|marketing consultant zaheer)\b/
    )
  ) {
    return knowledgeBase.brigZaheerAhmad[0];
  }

  if (
    message.match(
      /\b(colonel waqar ahmad|waqar ahmad|col waqar|tech consultant waqar)\b/
    )
  ) {
    return knowledgeBase.colWaqarAhmad[0];
  }

  if (
    message.match(
      /\b(khushnood ahmad khan|khushnood khan|regional head sindh|sindh head)\b/
    )
  ) {
    return knowledgeBase.khushnoodAhmadKhan[0];
  }

  if (
    message.match(
      /\b(brigadier moeen ud din|moeen ud din|brig moeen|regional head south|south head)\b/
    )
  ) {
    return knowledgeBase.brigMoeenUdDin[0];
  }

  if (
    message.match(
      /\b(nuzhat fatima|ms nuzhat|regional head north|north head|former secretary nuzhat)\b/
    )
  ) {
    return knowledgeBase.nuzhatFatima[0];
  }

  if (
    message.match(
      /\b(muhammad arif mehr|arif mehr|friend reformer arif)\b/
    )
  ) {
    return knowledgeBase.muhammadArifMehr[0];
  }

  if (
    message.match(
      /\b(brig zahid hussain|zahid hussain goryaya|brig zahid|friend reformer zahid)\b/
    )
  ) {
    return knowledgeBase.brigZahidHussain[0];
  }

  if (
    message.match(
      /\b(colonel zubair ahmad|zubair ahmad chughtai|col zubair|friend reformer zubair)\b/
    )
  ) {
    return knowledgeBase.colZubairAhmad[0];
  }

  if (
    message.match(
      /\b(sqn ldr muhammad naeem|muhammad naeem ahmad khan|squadron leader naeem|friend reformer naeem)\b/
    )
  ) {
    return knowledgeBase.sqnLdrMuhammadNaeem[0];
  }

  if (
    message.match(
      /\b(professor ahmad sohaib|ahmad sohaib|prof sohaib|friend reformer sohaib)\b/
    )
  ) {
    return knowledgeBase.profAhmadSohaib[0];
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

