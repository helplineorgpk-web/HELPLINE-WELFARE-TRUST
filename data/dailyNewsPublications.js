/** Helpline booklet publications shown under آج کا اخبار */

/** All books available on کتابچہ — click opens full-width PDF viewer */
export const KITABCHA_BOOKS = [
  {
    id: "main-booklet",
    title: "مین بُک لیٹ",
    titleEn: "Main Booklet",
    year: "2026",
    description: "ہیلپ لائن کا مرکزی کتابچہ — مواخاتِ مدینہ اور فلاحی مشن",
    pdf: "/img/MainBooklet.pdf",
    cover: "/img/mawakhat-pdf/page-1.png",
  },
  {
    id: "mawakhat-4pager",
    title: "مواخاتِ مدینہ",
    titleEn: "Mawakhat-e-Madina",
    year: "4 Pager",
    description: "مواخاتِ مدینہ چار صفحاتی ایڈیشن",
    pdf: "/img/Mawakhat-e-Madina4Pager.pdf",
    cover: "/img/mawakhat-pdf/page-2.png",
  },
];

export const KITABCHA_PUBLICATION = {
  id: "kitabcha",
  title: "کتابچہ",
  englishTitle: "Kitabcha",
  subtitle: "ہیلپ لائن کی تمام کتابیں اور سالانہ رپورٹس",
  description:
    "کوئی بھی کتاب منتخب کریں — مکمل PDF فل سکرین میں کھلے گی۔",
  badge: "کتابچہ",
  books: KITABCHA_BOOKS,
  pages: [],
};

export const UJALA_PUBLICATION = {
  id: "ujala",
  title: "اجالہ",
  englishTitle: "Ujala",
  subtitle: "تعلیم، امید اور روشن مستقبل کی کہانیاں",
  description:
    "اجالہ — ہیلپ لائن کا تعلیمی و فلاحی مجلہ، جہاں بچوں، اسکولوں اور کمیونٹی کی روشنی کی کہانیاں جمع ہیں۔",
  badge: "اجالہ",
  downloadHref: "/img/RoznamaDunya.pdf",
  downloadLabel: "اجالہ PDF ڈاؤن لوڈ",
  pages: [
    {
      src: "/img/roznama-dunya/roznama-edu-1.png",
      alt: "اجالہ — تعلیمی صفحہ 1",
      caption: "تعلیم کی روشنی — صفحہ اول",
    },
    {
      src: "/img/roznama-dunya/roznama-edu-2.png",
      alt: "اجالہ — تعلیمی صفحہ 2",
      caption: "تعلیمی بحران اور حل",
    },
    {
      src: "/img/roznama-dunya/roznama-edu-3.png",
      alt: "اجالہ — تعلیمی صفحہ 3",
      caption: "عملی حل — ہیلپ لائن",
    },
    {
      src: "/img/causes/DJI_0010.JPG",
      alt: "الکتاب سکول کیمپس",
      caption: "الکتاب سکول — رانا ٹاؤن",
    },
    {
      src: "/img/roznama-dunya/child10.png",
      alt: "طلبہ کی امید",
      caption: "ہمارے بچے — ہماری امید",
    },
    {
      src: "/img/causes/imanmaryam.png",
      alt: "ایمان مریم گرلز سکول",
      caption: "لڑکیوں کی تعلیم — ایمان مریم",
    },
  ],
};

export function getPublication(id) {
  if (id === "kitabcha") return KITABCHA_PUBLICATION;
  if (id === "ujala") return UJALA_PUBLICATION;
  return null;
}

export function getKitabchaBook(bookId) {
  return KITABCHA_BOOKS.find((b) => b.id === bookId) || null;
}
