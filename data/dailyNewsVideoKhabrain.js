/** Video news (ویدیو خبریں) for روزنامہ ہیلپ لائن */

export const VIDEO_CATEGORIES = [
  { id: "all", label: "تمام" },
  { id: "sindh", label: "سندھ و بھیل" },
  { id: "education", label: "تعلیم" },
  { id: "qurbani", label: "قربانی" },
  { id: "ration", label: "راشن و امداد" },
  { id: "interview", label: "انٹرویو" },
  { id: "general", label: "عمومی" },
];

/** Featured emotional story — shown at top */
export const VIDEO_KHABRAIN_FEATURED = {
  id: "sindh-mithi-bheel",
  videoId: "Iu2j3kpBCtQ",
  startSeconds: 53,
  title: "سندھ کی سرزمین پر محبت کی داستان",
  subtitle:
    "میاں اخلاق الرحمن کا ہندو بہائیوں اور بھیل برادری کے ساتھ رشتہ — مٹھی سے تھرپارکار تک",
  location: "سندھ — مٹھی، تھرپارکار، تندو اللہ یار",
  category: "sindh",
  thumbnail: "/img/causes/bheel1.jpg",
  gallery: [
    "/img/causes/bheel2.jpg",
    "/img/causes/bheel3.jpg",
    "/img/causes/mithi1.png",
    "/img/causes/tandusindh1.jpg",
  ],
  lead:
    "جب ماتھا ٹٹا تو سرحدیں مٹ گئیں — سندھ کی مٹی نے ایک ایسا رشتہ دیکھا جس میں مذہب کی دیوار نہیں، انسانیت کا پل تھا۔",
  paragraphs: [
    "سندھ کی سرزمین کبھی صرف ریت اور ریگستاں نہیں رہی — یہاں دل بھی آباد ہیں، یہاں ہر گھر کی کہانی میں رواداری کی لکیر ہے۔ مٹھی سے لے کر تھرپارکار کے دور دراز گاؤں، جہاں بھیل برادری صدیوں سے اپنی ثقافت، زبان اور امن کے ساتھ زندگی گزارتی ہے، وہاں آج بھی ایک نام معصوم بچوں کی آنکھوں میں امید بن کر جاگتا ہے: میاں اخلاق الرحمن۔",
    "کچھ لوگ سرحدیں کھینچتے ہیں، کچھ لوگ ان سرحدوں کو مٹا دیتے ہیں۔ میاں اخلاق الرحمن وہ انسان ہیں جنہوں نے سندھ کے ہندو بہائیوں کے ساتھ اپنے رشتے کو نہ صرف ایک سماجی ذمہ داری سمجھا — بلکہ اپنے ایمان کا حصہ۔ ان کے قدم جب مسری بھیل، تندو اللہ یار یا تھرپارکار کے بنجر اسکولوں میں پڑے تو بند دروازے کھل گئے، خاموش کلاس رومز میں پھر سے بچوں کی ہنسی گونجنے لگی۔",
    "بھیل برادری — جو اکثر نقشے پر نظر انداز رہی — نے دیکھا کہ کوئی ان کے مذہب کیے بغیر، صرف انسان ہو کر آیا۔ مسری بھیل میں وہ سرکاری اسکول جو سالوں سے بند پڑا تھا، ہیلپ لائن کی محنت سے پھر سے زندہ ہوا۔",
    "مٹھی میں موبائل ڈسپنسری، دور دراز علاقوں میں صحت کی فکر، راشن کی تھیلیاں، پانی کی لائنیں — یہ سب کچھ ایک ہی پیغام دے رہا ہے: تم ہمارے بھائی ہو، تمہاری تکلیف ہماری تکلیف ہے۔",
    "یہ ویڈیو صرف ایک رہنما کی کہانی نہیں — یہ پاکستان کی اس روح کی گواہی ہے جو سندھ کی مٹی میں پختہ ہے: مذہب مختلف ہو سکتے ہیں، مگر انسانیت ایک ہے۔",
  ],
  quote:
    "جب آپ کسی کے گھر کا دروازہ کھٹکھٹاتے ہیں تو پہلے انسان بن کر جائیں — مذہب، رنگ، زبان بعد میں آتے ہیں۔",
  quoteAttribution: "میاں اخلاق الرحمن",
  tags: ["سندھ", "مٹھی", "بھیل", "مواخاتِ مدینہ", "بین المذاہب ہم آہنگی"],
};

/** All videos — same library as /videos page + key Helpline stories */
export const VIDEO_KHABRAIN_GRID = [
  {
    id: "sindh-bheel-relation",
    videoId: "Iu2j3kpBCtQ",
    startSeconds: 53,
    title: "سندھ میں بھیل برادری سے محبت کا رشتہ",
    category: "sindh",
    thumbnail: "/img/causes/bheel1.jpg",
  },
  {
    id: "akhlaq-interview",
    videoId: "1d4tp4am58A",
    title: "میاں اخلاق الرحمن — خدی انٹرویو",
    category: "interview",
    thumbnail: "/img/roznama-dunya/mian-akhlaq-about-bw.jpg",
  },
  {
    id: "free-education-thousands",
    videoId: "Sb8MdjQeRY8",
    title: "ہزاروں بچوں کی مفت تعلیم — ہیلپ لائن",
    category: "education",
    thumbnail: "/img/causes/alkitabghani1.jpg",
  },
  {
    id: "helpline-story-1",
    videoId: "SsDAXkU1BiU",
    title: "ہیلپ لائن — خدمت کی داستان",
    category: "general",
  },
  {
    id: "helpline-edu-1",
    videoId: "qIWgzMfnCYk",
    title: "ہیلپ لائن تعلیمی منصوبے",
    category: "education",
  },
  {
    id: "helpline-activities-1",
    videoId: "SG9EJl9oihQ",
    title: "ہیلپ لائن فلاحی سرگرمیاں",
    category: "general",
  },
  {
    id: "qurbani-2019-1",
    videoId: "icydKjkJhXs",
    title: "قربانی — عید الاضحیٰ پیغام ۲۰۱۹",
    category: "qurbani",
  },
  {
    id: "qurbani-program-1",
    videoId: "o2bU86CxKWQ",
    title: "قربانی پروگرام — ہیلپ لائن",
    category: "qurbani",
  },
  {
    id: "ration-lahore-1",
    videoId: "e1DF3RJT1xA",
    title: "۵۰۰ راشن پیکٹ کی تقسیم — لاہور",
    category: "ration",
  },
  {
    id: "field-activity-1",
    videoId: "p9N0r1P-RYQ",
    title: "میدانی سرگرمی — ہیلپ لائن",
    category: "general",
  },
  {
    id: "field-activity-2",
    videoId: "5xZLbU1bYGI",
    title: "فلاحی منصوبوں کی جھلکیاں",
    category: "general",
  },
  {
    id: "field-activity-3",
    videoId: "8RAQOETPHhk",
    title: "کمیونٹی میں ہیلپ لائن کی موجودگی",
    category: "general",
  },
  {
    id: "qurbani-2019-2",
    videoId: "Zed6wEaHiag",
    title: "عید الاضحیٰ — قربانی کا پیغام",
    category: "qurbani",
  },
  {
    id: "qurbani-program-2",
    videoId: "qYl8uuP5rd0",
    title: "قربانی پروگرام — پاک ہیلپ لائن",
    category: "qurbani",
  },
  {
    id: "ration-distribution-2",
    videoId: "jedMB4nbdjE",
    title: "راشن تقسیم — مستحق خاندانوں میں",
    category: "ration",
  },
  {
    id: "qurbani-2019-3",
    videoId: "T0AQTnVL4jc",
    title: "قربانی — عید الاضحیٰ ۲۰۱۹",
    category: "qurbani",
  },
  {
    id: "qurbani-program-3",
    videoId: "-WjRhXXI75Y",
    title: "قربانی پروگرام کی خصوصی رپورٹ",
    category: "qurbani",
  },
  {
    id: "ration-distribution-3",
    videoId: "0FArIwxbYOQ",
    title: "۵۰۰ خاندانوں میں راشن تقسیم",
    category: "ration",
  },
];

export function getYoutubeThumbnail(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function getYoutubeEmbedUrl(videoId, startSeconds = 0) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (startSeconds > 0) params.set("start", String(startSeconds));
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

export function getYoutubeWatchUrl(videoId, startSeconds = 0) {
  const base = `https://www.youtube.com/watch?v=${videoId}`;
  return startSeconds > 0 ? `${base}&t=${startSeconds}s` : base;
}

export function getVideosByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return VIDEO_KHABRAIN_GRID;
  return VIDEO_KHABRAIN_GRID.filter((v) => v.category === categoryId);
}
