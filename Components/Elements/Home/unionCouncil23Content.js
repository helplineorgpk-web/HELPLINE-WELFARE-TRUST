// Content for the Union Council 23 detail page, from the "یونین کونسل 23 کے گاؤں" hero slide.
// A school with `students: null` has no student count in the source.

export const UC23_TITLE = "مواخاتِ مدینہ کے نظام کی عملی تعمیر و تدبیر";

export const UC23_SUBTITLE = "یونین کونسل 23 کے گاؤں";

export const UC23_LOCATION = "عابد ٹاؤن، آدھیاں روڈ، تحصیل فیروز والا، ضلع شیخوپورہ، لاہور";

export const UC23_INTRO =
  "مواخاتِ مدینہ کے نظام کی عملی تعمیر و تدبیر کے سلسلے میں یونین کونسل 23 کے گاؤں کا تعلیمی جائزہ لیا گیا۔ ذیل میں ہر گاؤں کے سرکاری اور پرائیویٹ سکولوں، ان میں زیرِ تعلیم طلبہ کی تعداد، اور سکول نہ جانے والے بچوں کی تعداد کی تفصیل دی گئی ہے۔";

export const UC23_VILLAGES = [
  {
    id: "abid-town",
    name: "عابد ٹاؤن",
    government: [],
    private: [
      { name: "نوید سحر سکول", students: 30 },
      { name: "دی گریس ہائی", students: 150 },
      { name: "ایپکس انگلش گرامر سکول", students: 400 },
      { name: "الکتاب گرلز ہائر سیکنڈری سکول", students: 1100 },
    ],
    outOfSchool: 40,
  },
  {
    id: "kot-mool-chand",
    name: "کوٹ مول چند",
    government: [{ name: "گورنمنٹ پرائمری سکول", students: 85 }],
    private: [],
    outOfSchool: 10,
  },
  {
    id: "sher-bangali-labour-colony",
    name: "شیر بنگالی لیبر کالونی",
    government: [{ name: "ورکر ویلفیئر پرائمری سکول", students: 250 }],
    private: [],
    outOfSchool: 20,
  },
  {
    id: "taiba-town-sanam-abad",
    name: "طیبہ ٹاؤن + صنم آباد",
    government: [],
    private: [
      { name: "لاثانی سکول سسٹم", students: 25 },
      { name: "الف نون سکول", students: 40 },
      { name: "العظیم سکول اینڈ اکیڈمی", students: 90 },
    ],
    outOfSchool: 20,
  },
  {
    id: "chak-39",
    name: "چک نمبر 39",
    government: [{ name: "گورنمنٹ پرائمری سکول", students: 250 }],
    private: [{ name: "دی نوبل سکول", students: 300 }],
    outOfSchool: 15,
  },
  {
    id: "kaler",
    name: "کالر",
    government: [{ name: "گورنمنٹ پرائمری سکول", students: null }],
    private: [],
    outOfSchool: null,
  },
  {
    id: "rana-town-dargahi-gill",
    name: "رانا ٹاؤن + درگاہی گل قدیم + درگاہی گل جدید",
    government: [
      { name: "گورنمنٹ بشیر ماڈل پرائمری سکول", students: 200 },
      { name: "گورنمنٹ پرائمری سکول، رانا ٹاؤن", students: 250 },
      { name: "گورنمنٹ گرلز ہائی سکول، رانا ٹاؤن سکیم نمبر 3", students: 400 },
      { name: "گورنمنٹ ایلیمنٹری سکول، درگاہی گل قدیم", students: 300 },
      { name: "گورنمنٹ بوائز پرائمری سکول، درگاہی گل قدیم", students: 450 },
    ],
    private: [
      { name: "پاکستان ماڈل ہائی سکول", students: 700 },
      { name: "آکسفورڈ گرامر ہائی سکول", students: 900 },
      { name: "السلام ہائی سکول", students: 150 },
      { name: "دی نیشن ہائی سکول", students: 300 },
      { name: "نصرت ماڈل ہائی سکول", students: 150 },
      { name: "الہادی انسٹیٹیوٹ", students: 130 },
      { name: "دی نوبل سکول", students: 75 },
      { name: "صادق فری ہائی سکول", students: 300 },
      { name: "دی گریٹ ہائی سکول", students: 400 },
    ],
    outOfSchool: 300,
  },
  {
    id: "chak-40",
    name: "چک نمبر 40",
    government: [{ name: "گورنمنٹ سکول پرائمری 40 چک", students: 70 }],
    private: [],
    outOfSchool: 25,
  },
  {
    id: "bashir-town-khurram-town",
    name: "بشیر ٹاؤن + خرم ٹاؤن",
    government: [],
    private: [
      { name: "حسن انگلش گرامر سکول", students: 45 },
      { name: "محمدن سکول", students: 35 },
    ],
    outOfSchool: 35,
  },
];
