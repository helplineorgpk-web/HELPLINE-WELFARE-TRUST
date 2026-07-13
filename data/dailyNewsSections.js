const TODAY = "2026-07-13";
const YESTERDAY = "2026-07-12";
const TWO_DAYS_AGO = "2026-07-11";

export const DAILY_NEWS_SECTIONS = {
  "taleem-overview": {
    id: "taleem-overview",
    title: "تعلیم و اسکول — روزانہ مجموعی رپورٹ",
    subtitle: "ہیلپ لائن کے 8 اپنے اسکولوں کی آج کی پیش رفت",
    location: "پنجاب و سندھ",
    image: "/img/roznama-dunya/child4.jpeg",
    stats: [
      { label: "اپنے اسکول", value: "8" },
      { label: "کل طلبہ", value: "5,000+" },
      { label: "مفت تعلیم", value: "75٪+" },
    ],
    summary:
      "ہیلپ لائن ویلفیئر ٹرسٹ کے اپنے اسکولوں میں آج بھی ہزاروں بچے مفت تعلیم، یونیفارم، کتابیں اور کردار سازی کے ساتھ پڑھ رہے ہیں۔ ہر اسکول کی روزانہ رپورٹ الگ سیکشن میں دستیاب ہے۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "12:45 PM",
        title: "آج صبح 21 اسکولوں میں بیل بجی — ہزاروں بچے کلاس میں",
        body: "رانا ٹاؤن، مناوان، گوجرہ، بہاولپور اور راجن پور سمیت تمام کیمپس میں آج معمول کے مطابق کلاسیں شروع ہوئیں۔ استادوں کی حاضری مکمل، نئی داخلے کی درخواستیں جاری۔",
        image: "/img/roznama-dunya/child13.jpeg",
      },
      {
        date: TODAY,
        time: "10:00 AM",
        title: "الکتاب رانا ٹاؤن — نئے داخلے کی جانچ جاری",
        body: "سکول کی گنجائش بھرنے کے باوجود محروم خاندانوں کے بچوں کی فہرست بنائی جا رہی ہے۔ چھٹی منزل کی عمارت کے لیے فنڈ ریزنگ مہم جاری ہے۔",
        image: "/img/causes/alkitab2.jpg",
      },
      {
        date: YESTERDAY,
        time: "03:30 PM",
        title: "امام مریم گرلز سکول — ووکیشنل تربیت کا نیا بیچ",
        body: "گوجرہ میں سینگل ماؤں کے لیے سلائی اور کڑھائی کی تربیت کا نیا سیشن شروع — 45 مائیں شامل۔",
        image: "/img/causes/imanmaryam.png",
      },
    ],
    childSections: [
      "school-alkitab-rana",
      "school-irtiqa",
      "school-ch-rehmat",
      "school-iman-maryam",
      "school-emman-smart",
      "school-alkitab-rajanpur",
      "school-alkitab-bahawalpur",
      "school-alkitab-tech",
    ],
  },

  "school-alkitab-rana": {
    id: "school-alkitab-rana",
    title: "الکتاب ہائر سیکنڈری سکول",
    subtitle: "رانا ٹاؤن، سب لاہور — مفت تعلیم کا مرکز",
    location: "رانا ٹاؤن، لاہور",
    image: "/img/causes/alkitab2.jpg",
    stats: [
      { label: "طلبہ", value: "1,100+" },
      { label: "لڑکیاں", value: "645" },
      { label: "لڑکے", value: "500+" },
    ],
    summary:
      "2015 میں صرف 15 طلبہ سے شروع ہونے والا یہ سکول آج 1,100 سے زائد بچوں کو مکمل مفت تعلیم دے رہا ہے۔ چھٹی منزل کی نئی عمارت کی ضرورت ہے تاکہ مزید بچے سکول سے محروم نہ رہیں۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "12:30 PM",
        title: "آج کی حاضری — 98 فیصد",
        body: "تمام جماعتوں میں پڑھائی معمول کے مطابق۔ دسویں جماعت کے طلبہ کی بورڈ تیاری کلاس جاری۔ لائبریری میں نئی کتابیں آئی ہیں۔",
        image: "/img/roznama-dunya/child10.png",
      },
      {
        date: TODAY,
        time: "09:15 AM",
        title: "کردار سازی — صبح کی اجتماعی دعا و درس",
        body: "آج کا موضوع: مواخاتِ مدینہ اور اخوت — طلبہ نے گروپ سرگرمی میں حصہ لیا۔",
        image: "/img/roznama-dunya/child6.jpeg",
      },
      {
        date: YESTERDAY,
        time: "02:00 PM",
        title: "چھٹی منزل عمارت — تعمیراتی سروے مکمل",
        body: "انجینئرنگ ٹیم نے سائٹ کا جائزہ لیا۔ ہدف: 500 مزید نشستیں۔ عطیہ دہندگان سے رابطہ جاری۔",
        image: "/img/causes/alkitab4.jpg",
      },
    ],
  },

  "school-irtiqa": {
    id: "school-irtiqa",
    title: "ارتقاءِ اطفال ہائی سکول",
    subtitle: "مناوان، لاہور",
    location: "مناوان، لاہور",
    image: "/img/causes/irtiqa1.jpg",
    stats: [
      { label: "طلبہ", value: "1,000+" },
      { label: "RO پانی", value: "فعال" },
      { label: "طبی معائنہ", value: "ماہانہ" },
    ],
    summary:
      "مناوان کے محروم بچوں کو مفت تعلیم، یونیفارم، کتابیں، طبی معائنہ اور خشک راشن ملتا ہے۔ ماؤں کو سلائی و کڑھائی کی تربیت بھی دی جاتی ہے۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "11:00 AM",
        title: "RO پلانٹ — آج 300 خاندانوں کو صاف پانی",
        body: "اسکول کا فلٹریشن پلانٹ مقامی آبادی کو بھی مفت صاف پانی فراہم کر رہا ہے۔",
        image: "/img/causes/waterirtiqa.JPG",
      },
      {
        date: TODAY,
        time: "08:30 AM",
        title: "نئے داخلے — 12 بچے آج پہلی بار آئے",
        body: "جو پہلے سکول سے باہر تھے — آج یونیفارم، کتابیں اور بیگ ملے۔",
        image: "/img/roznama-dunya/child1.webp",
      },
      {
        date: YESTERDAY,
        time: "04:00 PM",
        title: "ماؤں کی ووکیشنل کلاس — 30 خواتین حاضر",
        body: "سلائی مشینوں پر عملی تربیت — پہلے آرڈرز ملنے شروع۔",
        image: "/img/causes/irtiqa2.png",
      },
    ],
  },

  "school-ch-rehmat": {
    id: "school-ch-rehmat",
    title: "چیف رحمت علی ہائر سیکنڈری سکول",
    subtitle: "علی گڑھ تعلیمی کمپلیکس — گوجرہ",
    location: "گوجرہ، ٹوبہ ٹیک سنگھ",
    image: "/img/causes/chrehmat1.png",
    stats: [
      { label: "سہولیات", value: "سکول + ہاسٹل" },
      { label: "کمپیوٹر لیب", value: "فعال" },
      { label: "لائبریری", value: "مکمل" },
    ],
    summary:
      "علی گڑھ تعلیمی کمپلیکس میں لڑکوں کا ہائر سیکنڈری سکول — کمپیوٹر لیب، لائبریری اور ہاسٹل سہولت کے ساتھ۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "01:00 PM",
        title: "کمپیوٹر لیب — آئی ٹی کلاس جاری",
        body: "نویں جماعت کے طلبہ ویب ڈیزائن کی بنیادی مہارت سیکھ رہے ہیں۔",
        image: "/img/causes/rehmat2.png",
      },
      {
        date: YESTERDAY,
        time: "10:30 AM",
        title: "لائبریری میں نئی کتابیں — 200 کاپیز",
        body: "سائنس اور ادب کی نئی کتابیں شیلف پر — طلبہ بھرپور دلچسپی لے رہے ہیں۔",
        image: "/img/causes/rehmat3.png",
      },
    ],
  },

  "school-iman-maryam": {
    id: "school-iman-maryam",
    title: "امام مریم گرلز ہائر سیکنڈری سکول",
    subtitle: "علی گڑھ تعلیمی کمپلیکس — گوجرہ",
    location: "گوجرہ، 244 G.B",
    image: "/img/causes/maryamgirls.png",
    stats: [
      { label: "لڑکیاں", value: "600+" },
      { label: "پک اینڈ ڈراپ", value: "فعال" },
      { label: "دیہات", value: "22+" },
    ],
    summary:
      "600 سے زائد لڑکیوں کو مفت تعلیم، یونیفارم، نقل و حمل اور ہاسٹل سہولت — 22 دیہات سے طلبہ آتے ہیں۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "12:00 PM",
        title: "لڑکیوں کی سائنس میلہ تیاری",
        body: "ماڈل اور پوسٹر تیار — اگلے ہفتے سکول میلہ۔",
        image: "/img/causes/womenedu1.jpg",
      },
      {
        date: TODAY,
        time: "07:45 AM",
        title: "بس سروس — 18 گاؤں سے 240 لڑکیاں آئیں",
        body: "محفوظ نقل و حمل — کوئی لڑکی راستے میں محروم نہیں۔",
        image: "/img/causes/sideangle.png",
      },
    ],
  },

  "school-emman-smart": {
    id: "school-emman-smart",
    title: "عمان مریم اسمارٹ سکول",
    subtitle: "پرائمری تعلیم — علی گڑھ کمپلیکس",
    location: "گوجرہ",
    image: "/img/causes/smart.png",
    stats: [
      { label: "بچے", value: "300+" },
      { label: "کمپیوٹر", value: "24 سسٹمز" },
      { label: "سطح", value: "پرائمری" },
    ],
    summary:
      "300 سے زائد پرائمری بچوں کے لیے جدید اسمارٹ کلاس روم، کمپیوٹر لیب اور بچوں کے لیے موزوں فرنیچر۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "11:30 AM",
        title: "ڈیجیٹل خواندگی — پہلی جماعت کمپیوٹر پر",
        body: "الف بے پڑھائی انٹرایکٹو سافٹ ویئر سے — بچے خوشی سے سیکھ رہے ہیں۔",
        image: "/img/causes/eman1.jpeg",
      },
    ],
  },

  "school-alkitab-rajanpur": {
    id: "school-alkitab-rajanpur",
    title: "الکتاب سکول راجن پور",
    subtitle: "گلووالی — زیر تعمیر",
    location: "راجن پور، گلووالی",
    image: "/img/causes/gullowali2.jpg",
    stats: [
      { label: "حیثیت", value: "زیر تعمیر" },
      { label: "مفت تعلیم", value: "75٪+" },
      { label: "دائرہ", value: "25 کلومیٹر" },
    ],
    summary:
      "25 کلومیٹر کے دائرے میں صرف چند پرائمری اسکول — یہ منصوبہ علاقے کی بڑی تعلیمی ضرورت پوری کرے گا۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "03:00 PM",
        title: "تعمیراتی پیش رفت — دوسری منزل کی چھت",
        body: "مasons اور مزدور کام جاری — ہدف: اگلے سیشن میں داخلے شروع۔",
        image: "/img/causes/underconstruction2.jpg",
      },
    ],
  },

  "school-alkitab-bahawalpur": {
    id: "school-alkitab-bahawalpur",
    title: "الکتاب پرائمری سکول",
    subtitle: "چانی گوٹھ، بہاولپور",
    location: "احمد پور شرقیہ، بہاولپور",
    image: "/img/causes/chani11.jpg",
    stats: [
      { label: "طلبہ", value: "83" },
      { label: "اساتذہ", value: "6" },
      { label: "شروع", value: "2021" },
    ],
    summary:
      "2021 میں 15 بچوں سے شروع — آج 83 طلبہ اور 6 اساتذہ۔ گرین گروتھ انیشی ایٹو بھی جاری۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "10:00 AM",
        title: "ماحولیاتی سرگرمی — 50 نئے پودے لگائے",
        body: "طلبہ نے نرسری میں پودے لگائے — گرین گروتھ پروگرام کا حصہ۔",
        image: "/img/causes/chani5.jpg",
      },
    ],
  },

  "school-alkitab-tech": {
    id: "school-alkitab-tech",
    title: "الکتاب سکول آف ٹیکنالوجی",
    subtitle: "شیخوپورہ — ابید ٹاؤن",
    location: "شیخوپورہ",
    image: "/img/causes/alkitab3.jpg",
    stats: [
      { label: "مفت تعلیم", value: "75٪" },
      { label: "تکنیکی تعلیم", value: "فعال" },
      { label: "مشاورت", value: "دستیاب" },
    ],
    summary:
      "تکنیکی اور تعلیمی مہارتوں کا امتزاج — محروم بچوں کو عملی تعلیم اور کیریئر کی راہ۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "02:30 PM",
        title: "ووکیشنل ورکشاپ — الیکٹریشن کی بنیادی تربیت",
        body: "بارہویں جماعت کے طلبہ عملی مشق کر رہے ہیں۔",
        image: "/img/causes/alkitabghani1.jpg",
      },
    ],
  },

  "adopted-overview": {
    id: "adopted-overview",
    title: "اپنائے ہوئے سرکاری اسکول",
    subtitle: "13 بند اسکولوں کو دوبارہ زندہ کیا",
    location: "سندھ و بلوچستان",
    image: "/img/roznama-dunya/child3.jpeg",
    stats: [
      { label: "اپنائے اسکول", value: "13" },
      { label: "بچے", value: "ہزاروں" },
      { label: "سہولیات", value: "بجلی، پانی، مرمت" },
    ],
    summary:
      "حکومت نے بند کر دیے تھے — ہم نے دروازے دوبارہ کھول دیے۔ ٹوٹی چھتیں مرمت، بجلی، پانی، استاد واپس — آج ہزاروں بچے پڑھ رہے ہیں۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "01:30 PM",
        title: "سندھ کے 13 اسکولوں میں آج مکمل حاضری",
        body: "تمام اپنائے ہوئے کیمپس میں کلاسیں، صفائی اور بنیادی سہولیات فعال۔",
        image: "/img/roznama-dunya/child3.jpeg",
      },
      {
        date: TODAY,
        time: "09:00 AM",
        title: "بینظیر پبلک گرلز — 2,200 لڑکیاں کلاس میں",
        body: "نوابشاہ میں سب سے بڑا اپنایا ہوا گرلز سکول — آج خصوصی سائنس کلاس۔",
        image: "/img/causes/banazir1.png",
      },
    ],
    childSections: ["adopted-benazir"],
  },

  "adopted-benazir": {
    id: "adopted-benazir",
    title: "بینظیر پبلک گرلز ہائر سیکنڈری سکول",
    subtitle: "نوابشاہ — 2,200+ لڑکیاں",
    location: "نوابشاہ، سندھ",
    image: "/img/causes/banazir1.png",
    stats: [
      { label: "لڑکیاں", value: "2,200+" },
      { label: "کمپیوٹر لیب", value: "فعال" },
      { label: "اسکالرشپ", value: "جاری" },
    ],
    summary:
      "بینظیر بھٹو کی یاد میں قائم — ہیلپ لائن نے مکمل ذمہ داری لی۔ لڑکیوں کی تعلیم کا سب سے بڑا مرکز۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "11:45 AM",
        title: "کمپیوٹر لیب میں کوڈنگ کلاس",
        body: "گیارہویں جماعت کی لڑکیاں پہلی ویب پیج بنا رہی ہیں۔",
        image: "/img/causes/banazir2.png",
      },
    ],
  },

  health: {
    id: "health",
    title: "صحت و طبی امداد",
    subtitle: "ڈسپنسری، کیمپ اور ٹیلی میڈیسن",
    location: "رانا ٹاؤن، عمر کوٹ، مٹھی",
    image: "/img/causes/karbathhospital.JPG",
    stats: [
      { label: "ڈسپنسری", value: "3+" },
      { label: "مفت علاج", value: "روزانہ" },
      { label: "ٹیلی میڈیسن", value: "فعال" },
    ],
    summary:
      "رانا ٹاؤن، عمر کوٹ اور مٹھی میں مفت دوائیں، ڈاکٹر چیک اپ اور ٹیلی میڈیسن — جو علاج نہیں کر سکتے ان کے لیے۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "12:00 PM",
        title: "رانا ٹاؤن ڈسپنسری — آج 85 مریضوں کا معائنہ",
        body: "مفت دوائیں 62 خاندانوں کو — بخار، ذیابیطس اور زخم کی دیکھ بھال۔",
        image: "/img/campaigns-opt/img_causes_alkitab2.webp",
      },
      {
        date: TODAY,
        time: "10:00 AM",
        title: "ٹیلی میڈیسن — لاہور کے ماہر سے آن لائن مشاورت",
        body: "3 مریضوں کو ماہر ڈاکٹر سے رابطہ — سفر کے بغیر علاج۔",
        image: "/img/causes/karbathhospital.JPG",
      },
      {
        date: YESTERDAY,
        time: "04:00 PM",
        title: "مٹھی موبائل یونٹ — دیہاتی کیمپ",
        body: "40 مریضوں کو مفت چیک اپ اور دوائیں۔",
        image: "/img/causes/karbathhospital.JPG",
      },
    ],
  },

  ration: {
    id: "ration",
    title: "راشن و امداد",
    subtitle: "رمضان و سال بھر کی امداد",
    location: "پاکستان بھر",
    image: "/img/rashan/alkitabrashan.jpg",
    stats: [
      { label: "خاندان", value: "8,000+" },
      { label: "مقامات", value: "6+" },
      { label: "رمضان باکس", value: "فعال" },
    ],
    summary:
      "الکتاب، بہاولپور، گوجرہ، نوشکی، مٹھی تھرپارکر اور ارتقاءِ اطفال میں راشن پروگرام — محروم خاندانوں کو خوراک۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "02:00 PM",
        title: "الکتاب راشن پروگرام — 150 خاندانوں کو پیکٹ",
        body: "آٹا، چاول، دال اور تیل — رانا ٹاؤن کے مستحق گھرانوں میں تقسیم۔",
        image: "/img/rashan/alkitabrashan.jpg",
      },
      {
        date: YESTERDAY,
        time: "11:00 AM",
        title: "ارتقاءِ اطفال — خشک راشن طلبہ کے خاندانوں کو",
        body: "50 خاندانوں کو ماہانہ راشن سپورٹ۔",
        image: "/img/rashan/irtikaschoolrashan.jpg",
      },
    ],
  },

  water: {
    id: "water",
    title: "صاف پانی",
    subtitle: "RO پلانٹس اور واٹر فلٹریشن",
    location: "پنجاب، سندھ، بلوچستان",
    image: "/img/causes/waterirtiqa.JPG",
    stats: [
      { label: "RO پلانٹ", value: "متعدد" },
      { label: "مقامات", value: "5+" },
      { label: "مفت پانی", value: "روزانہ" },
    ],
    summary:
      "ارتقاءِ اطفال، ابید ٹاؤن، ٹنڈو اللہ یار، کرباتھ میڈیکل سینٹر اور بلوچستان میں صاف پانی کے منصوبے۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "08:00 AM",
        title: "مناوان RO پلانٹ — آج 400 گیلن صاف پانی",
        body: "اسکول اور مقامی آبادی — مفت پانی کی سپلائی جاری۔",
        image: "/img/causes/waterirtiqa.JPG",
      },
      {
        date: TWO_DAYS_AGO,
        time: "03:00 PM",
        title: "بلوچستان — نئے پلانٹ کی تنصیب شروع",
        body: "محروم علاقے میں پانی کی شدید کمی — ہیلپ لائن کا نیا منصوبہ۔",
        image: "/img/causes/waterirtiqa2.JPG",
      },
    ],
  },

  vtc: {
    id: "vtc",
    title: "ووکیشنل تربیت مراکز",
    subtitle: "مہارت، روزگار، خودکفالی",
    location: "رانا ٹاؤن و گوجرہ",
    image: "/img/Campaigns/Vocational.jpg",
    stats: [
      { label: "مہارتیں", value: "سلائی، IT" },
      { label: "خواتین", value: "ترجیح" },
      { label: "روزگار", value: "ہدف" },
    ],
    summary:
      "سلائی، کڑھائی، آئی ٹی اور ہنر مندی — نوجوانوں اور خواتین کو خودکفیل بنانے کے لیے۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "01:00 PM",
        title: "سلائی ورکشاپ — 25 خواتین نئے آرڈر لے رہی ہیں",
        body: "پہلے آرڈر مکمل — آمدنی خاندانوں میں آنے لگی۔",
        image: "/img/Campaigns/Vocational.jpg",
      },
    ],
  },

  masjid: {
    id: "masjid",
    title: "مسجد و کردار سازی",
    subtitle: "الکتاب مسجد — تعلیم کے ساتھ اخلاق",
    location: "رانا ٹاؤن",
    image: "/img/mawakhat-pdf/page-4.png",
    stats: [
      { label: "نماز", value: "روزانہ" },
      { label: "درس", value: "ہفتہ وار" },
      { label: "مکتب", value: "بچوں کے لیے" },
    ],
    summary:
      "تعلیم کے ساتھ نماز، اخلاق، اخوت اور معاشرتی ذمہ داری — تاکہ بچہ صرف پڑھا ہوا نہ ہو، اچھا انسان بنے۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "05:30 PM",
        title: "جمعہ کے بعد کردار سازی ورکشاپ",
        body: "موضوع: سچائی اور امانت — طلبہ اور والدین شریک۔",
        image: "/img/mawakhat-pdf/page-5.png",
      },
    ],
  },

  "area-rana-town": {
    id: "area-rana-town",
    title: "رانا ٹاؤن — فیلڈ رپورٹ",
    subtitle: "تعلیم، صحت، راشن اور کمیونٹی",
    location: "سب لاہور",
    image: "/img/roznama-dunya/child13.jpeg",
    stats: [
      { label: "اسکول", value: "الکتاب" },
      { label: "ڈسپنسری", value: "فعال" },
      { label: "خاندان", value: "ہزاروں" },
    ],
    summary:
      "رانا ٹاؤن ہیلپ لائن کا مرکزی عملی علاقہ — سکول، مسجد، ڈسپنسری اور ووکیشنل تربیت ایک ساتھ۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "04:00 PM",
        title: "آج کا مجموعی منظر — تعلیم و صحت ایک ساتھ",
        body: "صبح سکول، دوپہر ڈسپنسری، شام کردار سازی — مکمل فلاحی ماڈل عملی۔",
        image: "/img/roznama-dunya/child13.jpeg",
      },
    ],
  },

  "area-umar-kot": {
    id: "area-umar-kot",
    title: "عمر کوٹ — فیلڈ رپورٹ",
    subtitle: "سندھ — تعلیم و صحت",
    location: "عمر کوٹ، سندھ",
    image: "/img/causes/illasschool1.jpg",
    stats: [
      { label: "سکول", value: "فعال" },
      { label: "صحت", value: "کیمپ" },
      { label: "طلبہ", value: "مستحق" },
    ],
    summary: "عمر کوٹ میں ہیلپ لائن کا سکول اور صحت کی سہولیات — محروم بچوں کی تعلیم۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "11:00 AM",
        title: "عمر کوٹ سکول — آج 95 فیصد حاضری",
        body: "نئے داخلے کی درخواستیں — 8 بچے آج پہلی بار آئے۔",
        image: "/img/causes/illasschool1.jpg",
      },
    ],
  },

  "area-uc23": {
    id: "area-uc23",
    title: "یونین کونسل 23 — گاؤں کی تعلیمی تفصیل",
    subtitle: "دیہاتی اسکولوں کی روزانہ رپورٹ",
    location: "یونین کونسل 23",
    image: "/img/mawakhat-pdf/page-10.png",
    stats: [
      { label: "گاؤں", value: "متعدد" },
      { label: "اسکول", value: "فعال" },
      { label: "بچے", value: "سینکڑوں" },
    ],
    summary:
      "یونین کونسل 23 کے گاؤں میں تعلیمی سرگرمیاں — ہر گاؤں کے بچوں کی روزانہ پیش رفت۔",
    dailyUpdates: [
      {
        date: TODAY,
        time: "10:30 AM",
        title: "گاؤں کی اسکولوں میں حاضری کی رپورٹ",
        body: "فیلڈ ٹیم نے 5 گاؤں کا دورہ — تمام اسکول فعال، 2 نئے داخلے ریکارڈ۔",
        image: "/img/mawakhat-pdf/page-10.png",
      },
    ],
  },
};

export function getSection(id) {
  return DAILY_NEWS_SECTIONS[id] || null;
}

export function getAllDailyUpdates() {
  const updates = [];
  Object.values(DAILY_NEWS_SECTIONS).forEach((section) => {
    section.dailyUpdates?.forEach((update) => {
      updates.push({
        ...update,
        sectionId: section.id,
        sectionTitle: section.title,
      });
    });
  });
  return updates.sort((a, b) => {
    const da = new Date(`${a.date} ${a.time}`);
    const db = new Date(`${b.date} ${b.time}`);
    return db - da;
  });
}

export function getTickerHeadlines() {
  return getAllDailyUpdates().map(
    (u) => `${u.sectionTitle}: ${u.title}`
  );
}

export function getTickerItems() {
  return getAllDailyUpdates().map((u) => ({
    sectionId: u.sectionId,
    headline: `${u.sectionTitle}: ${u.title}`,
  }));
}

export function searchDailyNews(query) {
  const q = query.trim();
  if (!q) return [];

  const results = [];
  const seen = new Set();

  Object.values(DAILY_NEWS_SECTIONS).forEach((section) => {
    const sectionHaystack = [section.title, section.subtitle, section.summary, section.location]
      .filter(Boolean)
      .join(" ");

    if (sectionHaystack.includes(q) && !seen.has(section.id)) {
      seen.add(section.id);
      results.push({ type: "section", id: section.id, label: section.title });
    }

    section.dailyUpdates?.forEach((update) => {
      const updateHaystack = `${update.title} ${update.body}`;
      if (updateHaystack.includes(q) && !seen.has(`${section.id}-${update.title}`)) {
        seen.add(`${section.id}-${update.title}`);
        results.push({
          type: "update",
          id: section.id,
          label: update.title,
          sectionTitle: section.title,
        });
      }
    });
  });

  return results;
}

export function getSectionLabel(id) {
  const section = getSection(id);
  if (section) return section.title;
  const navMatch = {
    "aaj-ka-akhbar": "آج کا اخبار",
    "taza-tareen": "تازہ ترین",
    taleem: "تعلیم و اسکول",
    adopted: "اپنائے ہوئے اسکول",
    health: "صحت و طبی امداد",
    ration: "راشن و امداد",
    water: "صاف پانی",
    vtc: "ووکیشنل تربیت",
    masjid: "مسجد و کردار سازی",
    "aap-ka-shehar": "آپ کا شہر",
    mazeed: "مزید",
  };
  return navMatch[id] || id;
}
