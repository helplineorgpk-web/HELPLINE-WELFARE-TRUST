export const DAILY_NEWS_NAV_ITEMS = [
  {
    id: "aaj-ka-akhbar",
    label: "آج کا اخبار",
    defaultTab: "aaj-ka-akhbar",
    hasDropdown: true,
    dropdown: [
      { label: "مواخات مدینہ ایڈیشن", tab: "aaj-ka-akhbar" },
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
      { label: "ارتقاءِ اطفال — مناوان", tab: "school-irtiqa" },
      { label: "چیف رحمت علی — گوجرہ", tab: "school-ch-rehmat" },
      { label: "امام مریم گرلز سکول", tab: "school-iman-maryam" },
      { label: "عمان مریم اسمارٹ سکول", tab: "school-emman-smart" },
      { label: "الکتاب راجن پور", tab: "school-alkitab-rajanpur" },
      { label: "الکتاب بہاولپور", tab: "school-alkitab-bahawalpur" },
      { label: "الکتاب ٹیکنالوجی", tab: "school-alkitab-tech" },
    ],
  },
  {
    id: "adopted",
    label: "اپنائے ہوئے اسکول",
    defaultTab: "adopted-overview",
    hasDropdown: true,
    dropdown: [
      { label: "13 سرکاری اسکول — مجموعی رپورٹ", tab: "adopted-overview" },
      { label: "بینظیر پبلک گرلز — نوابشاہ", tab: "adopted-benazir" },
    ],
  },
  { id: "health", label: "صحت و طبی امداد", hasDropdown: false },
  { id: "ration", label: "راشن و امداد", hasDropdown: false },
  { id: "water", label: "صاف پانی", hasDropdown: false },
  { id: "vtc", label: "ووکیشنل تربیت", hasDropdown: false },
  { id: "masjid", label: "مسجد و کردار سازی", hasDropdown: false },
  {
    id: "aap-ka-shehar",
    label: "آپ کا شہر",
    defaultTab: "area-rana-town",
    hasDropdown: true,
    dropdown: [
      { label: "رانا ٹاؤن، لاہور", tab: "area-rana-town" },
      { label: "عمر کوٹ", tab: "area-umar-kot" },
      { label: "یونین کونسل 23", tab: "area-uc23" },
    ],
  },
  {
    id: "mazeed",
    label: "مزید",
    hasDropdown: true,
    dropdown: [
      { label: "عطیہ کریں", href: "/donation" },
      { label: "رضاکار بنیں", href: "/volunteer" },
      { label: "ہمارے بارے میں", href: "/about" },
      { label: "تعلیم پروگرام", href: "/edu" },
    ],
  },
];

export const DAILY_NEWS_PAGE_TABS = new Set([
  "aaj-ka-akhbar",
  "taza-tareen",
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
