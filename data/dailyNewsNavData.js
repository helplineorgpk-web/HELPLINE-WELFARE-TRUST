export const DAILY_NEWS_NAV_ITEMS = [
  {
    id: "aaj-ka-akhbar",
    label: "آج کا اخبار",
    defaultTab: "aaj-ka-akhbar",
    hasDropdown: true,
    dropdown: [
      { label: "مواخات مدینہ ایڈیشن", tab: "aaj-ka-akhbar" },
      { label: "کتابچہ", tab: "kitabcha" },
      { label: "اجالہ", tab: "ujala" },
      { label: "ویدیو خبریں", tab: "video-khabrain" },
      {
        label: "مکمل PDF ڈاؤن لوڈ",
        href: "/img/Mawakhat-e-Madina4Pager.pdf",
        external: true,
      },
    ],
  },
  { id: "taza-tareen", label: "تازہ ترین", hasDropdown: false },
  {
    id: "taleem",
    label: "تعلیم و اسکول",
    defaultTab: "taleem-overview",
    hasDropdown: true,
    dropdown: [
      { label: "تمام اسکولوں کی روزانہ رپورٹ", tab: "taleem-overview" },
      { label: "الکتاب ہائر سیکنڈری — رانا ٹاؤن", tab: "school-alkitab-rana" },
      { label: "الکتاب سیکنڈری — عمر کوٹ مریدکے", tab: "school-alkitab-umarkot-muridke" },
      { label: "جشنِ آزادی — ملی نغمے 2026", tab: "alkitab-milli-naghme-2026" },
      { label: "نظریۂ پاکستان — تقریری مقابلہ", tab: "nazriya-takreeri-muqabla-2026" },
      { label: "نظریۂ پاکستان — مصوری کا مقابلہ", tab: "nazriya-masawari-muqabla-2026" },
      { label: "ملی نغمہ مقابلہ — نظریۂ پاکستان ٹرسٹ", tab: "nazriya-milli-naghma-muqabla-2026" },
      { label: "جشنِ آزادی — الکتاب سکول حاصل لاڑ، چنی گوٹھ", tab: "chani-goth-14-august-2026" },
      { label: "جشنِ آزادی — عمر کوٹ اسکول", tab: "umarkot-14-august-2026" },
      { label: "میٹرک نتیجہ 2026 — عابد ٹاؤن", tab: "alkitab-matric-result-2026" },
      { label: "میٹرک نتیجہ 2026 — مناوان", tab: "irtiqa-matric-result-2026" },
      { label: "ارتقاءِ اطفال — مناوان", tab: "school-irtiqa" },
      { label: "چیف رحمت علی — گوجرہ", tab: "school-ch-rehmat" },
      { label: "ایمان مریم گرلز سکول", tab: "school-iman-maryam" },
      { label: "ایمان مریم اسمارٹ سکول", tab: "school-emman-smart" },
      { label: "الکتاب راجن پور", tab: "school-alkitab-rajanpur" },
      { label: "الکتاب بہاولپور", tab: "school-alkitab-bahawalpur" },
      { label: "الکتاب ٹیکنالوجی", tab: "school-alkitab-tech" },
      { label: "حکومتی تعلیمی اسکیمز", tab: "gov-education-schemes" },
    ],
  },
  {
    id: "gov-education-schemes",
    label: "حکومتی تعلیمی اسکیمز",
    hasDropdown: false,
  },
  {
    id: "adopted",
    label: "اپنائے ہوئے اسکول",
    defaultTab: "adopted-overview",
    hasDropdown: true,
    dropdown: [
      { label: "13 سرکاری اسکول — مجموعی رپورٹ", tab: "adopted-overview" },
      { label: "گرمیوں کی چھٹیاں — نمرو شریف", tab: "gbps-nimro-summer-opening" },
      { label: "بینظیر پبلک گرلز — نوابشاہ", tab: "adopted-benazir" },
    ],
  },
  { id: "health", label: "صحت و طبی امداد", hasDropdown: false },
  {
    id: "rana-town-flood",
    label: "سیلاب — رانا ٹاؤن",
    defaultTab: "rana-town-flood",
    hasDropdown: true,
    dropdown: [
      { label: "سیلاب اپیل — مجموعی", tab: "rana-town-flood" },
      { label: "پانی کے اندر گھر", tab: "rana-town-flood-homes" },
      { label: "الکتاب سکول — کھانے کی تقسیم", tab: "alkitab-school-flood-food" },
      { label: "مثالی گوٹھ — سکول کی چھت", tab: "misali-goth-school-roof" },
    ],
  },
  { id: "ration", label: "راشن و امداد", hasDropdown: false },
  { id: "water", label: "صاف پانی", hasDropdown: false },
  { id: "vtc", label: "ووکیشنل تربیت", hasDropdown: false },
  { id: "masjid", label: "مسجد و کردار سازی", hasDropdown: false },
  { id: "hindu-muslim", label: "ہندو مسلم بھائی چارہ", hasDropdown: false },
  { id: "kitabcha", label: "کتابچہ", hasDropdown: false, isPubBtn: true },
  { id: "ujala", label: "اجالہ", hasDropdown: false, isPubBtn: true },
  { id: "video-khabrain", label: "ویدیو خبریں", hasDropdown: false, isPubBtn: true },
];

export const DAILY_NEWS_PAGE_TABS = new Set([
  "aaj-ka-akhbar",
  "taza-tareen",
  "kitabcha",
  "ujala",
  "video-khabrain",
  ...DAILY_NEWS_NAV_ITEMS.filter((i) => !i.hasDropdown).map((i) => i.id),
  ...DAILY_NEWS_NAV_ITEMS.flatMap((i) =>
    (i.dropdown || []).map((d) => d.tab).filter(Boolean)
  ),
]);

export function isValidDailyNewsTab(tab) {
  return DAILY_NEWS_PAGE_TABS.has(tab);
}

export function getDefaultTabForNavItem(item) {
  if (item.defaultTab && isValidDailyNewsTab(item.defaultTab)) return item.defaultTab;
  if (isValidDailyNewsTab(item.id)) return item.id;
  const firstTab = item.dropdown?.find((d) => d.tab)?.tab;
  return firstTab && isValidDailyNewsTab(firstTab) ? firstTab : null;
}
