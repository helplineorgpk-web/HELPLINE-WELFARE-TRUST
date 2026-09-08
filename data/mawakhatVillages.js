const RANA_CLUSTER = {
  label: "Rana Town, Darhi Gul Qadeem & Dargahi Gul Jadeed",
  labelUrdu: "رانا ٹاؤن + دراھی گل قدیم + درگاہی گل جدید",
};

const BASHIR_CLUSTER = {
  label: "Bashir Town & Khurram Town",
  labelUrdu: "بشیر ٹاؤن + خرم ٹاؤن",
};

const TAYYABA_CLUSTER = {
  label: "Tayyaba Town & Sanam Abad",
  labelUrdu: "طیبہ ٹاؤن + صنم آباد",
};

const RANA_SCHOOLS = {
  cluster: RANA_CLUSTER,
  government: [
    { name: "Govt. Bashir Model Primary School", nameUrdu: "گورنمنٹ بشیر ماڈل پرائمری سکول", students: 200 },
    { name: "Govt. Primary School Rana Town", nameUrdu: "گورنمنٹ پرائمری سکول رانا ٹاؤن", students: 250 },
    { name: "Govt. Girls High School Rana Town Chak No. 3", nameUrdu: "گورنمنٹ گرلز ہائی سکول رانا ٹاؤن چک نمبر 3", students: 400 },
    { name: "Govt. Elementary School Dargahi Gul Qadeem", nameUrdu: "گورنمنٹ ایلیمنٹری سکول درگاہی گل قدیم", students: 300 },
    { name: "Govt. Boys Primary School Dargahi Gul Qadeem", nameUrdu: "گورنمنٹ بوائز پرائمری سکول درگاہی گل قدیم", students: 450 },
  ],
  private: [
    { name: "Pakistan Model High School", nameUrdu: "پاکستان ماڈل ہائی سکول", students: 700 },
    { name: "Oxford Grammar High School", nameUrdu: "آکسفرڈ گرامر ہائی سکول", students: 900 },
    { name: "Al-Salam High School", nameUrdu: "السلام ہائی سکول", students: 150 },
    { name: "The Vision High School", nameUrdu: "دی ویژن ہائی سکول", students: 300 },
    { name: "Nusrat Model High School", nameUrdu: "نصرت ماڈل ہائی سکول", students: 150 },
    { name: "Al-Hadi Institute", nameUrdu: "الہادی انسٹیٹیوٹ", students: 130 },
    { name: "The Noble School", nameUrdu: "دی نوبل سکول", students: 75 },
    { name: "Sadiq Free High School", nameUrdu: "صادق فری ہائی سکول", students: 300 },
    { name: "The Great High School", nameUrdu: "دی گریٹ ہائی سکول", students: 400 },
  ],
  outOfSchool: 300,
};

const BASHIR_SCHOOLS = {
  cluster: BASHIR_CLUSTER,
  government: [],
  private: [
    { name: "Hassan English Grammar School", nameUrdu: "حسن انگلش گرامر سکول", students: 45 },
    { name: "Mehran School", nameUrdu: "مہران سکول", students: 35 },
  ],
  outOfSchool: 35,
};

const TAYYABA_SCHOOLS = {
  cluster: TAYYABA_CLUSTER,
  government: [],
  private: [
    { name: "Lasani School System", nameUrdu: "لاثانی سکول سسٹم", students: 25 },
    { name: "Al-Falah School", nameUrdu: "الفلاح سکول", students: 40 },
    { name: "Al-Ilm School and Academy", nameUrdu: "العلم سکول اینڈ اکیڈمی", students: 90 },
  ],
  outOfSchool: 20,
};

export const mawakhatAreaOverview = {
  title: "Union Council 23 — Al-Kitab Schools catchment",
  titleUrdu: "یونین کونسل 23 — الکتاب سکولز کے گاؤں",
  populationRange: "98,000 – 110,000",
  households: "15,000 – 18,000",
  familySize: "6 – 7",
  literacyRate: "62%",
  outOfSchoolRate: "20%",
  girlsDropout: "22%",
  madrassaStudents: "14%",
  collegeStudents: "8%",
  zakatFamilies: "4,500+",
  rationHouseholds: "3,800+",
  extremelyDeserving: "2,500+",
  widowHomes: "900+",
  orphanFamilies: "700+",
  indebtedFamilies: "1,500+",
  labourClass: "8,000+",
};

export const mawakhatVillages = [
  {
    id: "abid-town",
    name: "Abid Town",
    nameUrdu: "عابد ٹاؤن",
    population: 10000,
    government: [],
    private: [
      { name: "Naveed Sehar School", nameUrdu: "نوید سحر سکول", students: 30 },
      { name: "The Grace Bible School", nameUrdu: "دی گریس بائبل سکول", students: 150 },
      { name: "Angels English Grammar School", nameUrdu: "اینجلز انگلش گرامر سکول", students: 400 },
      { name: "Al-Kitab Girls Higher Secondary School", nameUrdu: "الکتاب گرلز ہائیر سیکنڈری سکول", students: 1100 },
    ],
    outOfSchool: 40,
  },
  {
    id: "chak-39",
    name: "Chak 39",
    nameUrdu: "چک 39",
    population: 5500,
    government: [
      { name: "Govt. Primary School", nameUrdu: "گورنمنٹ پرائمری سکول", students: 250 },
    ],
    private: [
      { name: "The Noble School", nameUrdu: "دی نوبل سکول", students: 300 },
    ],
    outOfSchool: 15,
  },
  {
    id: "chak-40",
    name: "Chak 40",
    nameUrdu: "چک 40",
    population: null,
    government: [
      { name: "Govt. School Primary 40 Chak", nameUrdu: "گورنمنٹ سکول پرائمری 40 چک", students: 70 },
    ],
    private: [],
    outOfSchool: 25,
  },
  {
    id: "chak-41",
    name: "Chak 41",
    nameUrdu: "چک 41",
    population: 6500,
    government: [],
    private: [],
    outOfSchool: null,
  },
  {
    id: "chak-42",
    name: "Chak 42",
    nameUrdu: "چک 42",
    population: 6000,
    government: [],
    private: [],
    outOfSchool: null,
  },
  {
    id: "chak-43",
    name: "Chak 43",
    nameUrdu: "چک 43",
    population: 4500,
    government: [],
    private: [],
    outOfSchool: null,
  },
  {
    id: "muhammad-nagar",
    name: "Muhammad Nagar",
    nameUrdu: "محمد نگر",
    population: 7500,
    government: [],
    private: [],
    outOfSchool: null,
  },
  {
    id: "abbas-nagar",
    name: "Abbas Nagar",
    nameUrdu: "عباس نگر",
    population: 6000,
    government: [],
    private: [],
    outOfSchool: null,
  },
  {
    id: "kot-mool-chand",
    name: "Kot Mool Chand",
    nameUrdu: "کوٹ مول چند",
    population: 5000,
    government: [
      { name: "Govt. Primary School", nameUrdu: "گورنمنٹ پرائمری سکول", students: 85 },
    ],
    private: [],
    outOfSchool: 10,
  },
  {
    id: "kallar",
    name: "Kallar",
    nameUrdu: "کلر",
    population: 4000,
    government: [
      { name: "Govt. Primary School", nameUrdu: "گورنمنٹ پرائمری سکول", students: null },
    ],
    private: [],
    outOfSchool: null,
  },
  {
    id: "rana-town",
    name: "Rana Town",
    nameUrdu: "رانا ٹاؤن",
    population: 8500,
    ...RANA_SCHOOLS,
  },
  {
    id: "darhi-gul-qadeem",
    name: "Darhi Gul Qadeem",
    nameUrdu: "دارھی گل قدیم",
    population: 3500,
    ...RANA_SCHOOLS,
  },
  {
    id: "dargahi-gul-qadeem",
    name: "Dargahi Gul Qadeem",
    nameUrdu: "درگاہی گل قدیم",
    population: 3000,
    ...RANA_SCHOOLS,
  },
  {
    id: "bashir-town",
    name: "Bashir Town",
    nameUrdu: "بشیر ٹاؤن",
    population: 5500,
    ...BASHIR_SCHOOLS,
  },
  {
    id: "khurram-town",
    name: "Khurram Town",
    nameUrdu: "خرم ٹاؤن",
    population: 4500,
    ...BASHIR_SCHOOLS,
  },
  {
    id: "tayyaba-town",
    name: "Tayyaba Town",
    nameUrdu: "طیبہ ٹاؤن",
    population: 6500,
    ...TAYYABA_SCHOOLS,
  },
  {
    id: "sher-bengali",
    name: "Sher Bengali Labor Colony",
    nameUrdu: "شیر بنگالی لیبر کالونی",
    population: 7000,
    government: [
      { name: "Worker Welfare Primary School", nameUrdu: "ورکر ویلفیئر پرائمری سکول", students: 250 },
    ],
    private: [],
    outOfSchool: 20,
  },
];
