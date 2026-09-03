/* ============================================================
   Diamond Perfume — Products & Store Settings
   أضف عطرًا جديدًا بسهولة: انسخ كتلة واحدة وعدّل بياناتها
   ============================================================ */

const STORE = {
  name: "Diamond Perfume",
  phoneDisplay: "+961 71 167 878",
  phoneIntl: "+96171167878",
  whatsapp: "96171167878", // wa.me format (no + sign)
  address_ar: "فردان، بيروت – لبنان",
  address_en: "Verdun, Beirut – Lebanon",
  hours_ar: "يوميًا: 10:00 صباحًا – 10:00 مساءً",
  hours_en: "Daily: 10:00 AM – 10:00 PM",
  currency: "$",
};

/*
  cat: "men" | "women" | "unisex"
  badge: "bestseller" | "new" | "sale" | null
  oldPrice: للخصم فقط
*/
const PRODUCTS = [
  {
    id: "sovereign",
    img: "images/products/sauvage.jpg",
    cat: "men",
    price: 55,
    oldPrice: null,
    badge: "bestseller",
    name_ar: "سوفيرين — Sovereign",
    name_en: "Sovereign Pour Homme",
    size: "100ml",
    desc_ar: "عطر رجالي منعش وجريء بنفحات البرغموت والفلفل السيشواني وقاعدة من الأخشاب العنبرية. مثالي للنهار والمساء، ثبات يدوم طويلًا.",
    desc_en: "A bold, fresh masculine scent — Calabrian bergamot and Sichuan pepper over warm amber woods. Perfect day-to-night performance with long-lasting sillage.",
    notes_ar: "المقدمة: برغموت • القلب: لافندر وفلفل • القاعدة: أخشاب عنبرية",
    notes_en: "Top: Bergamot • Heart: Lavender & Pepper • Base: Amber woods"
  },
  {
    id: "bleu-royal",
    img: "images/products/bleu.jpg",
    cat: "men",
    price: 58,
    oldPrice: null,
    badge: "bestseller",
    name_ar: "بلو رويال — Azur Royal",
    name_en: "Bleu Royal",
    size: "100ml",
    desc_ar: "أناقة كلاسيكية بروح عصرية: حمضيات منعشة، نعناع وفاترينيا على قاعدة خشبية عميقة. العطر الرسمي للرجل الأنيق في كل مناسباته.",
    desc_en: "Timeless elegance with a modern soul: sparkling citrus, mint and vetiver over a deep woody base. The signature scent of the sophisticated man.",
    notes_ar: "المقدمة: جريب فروت ونعناع • القلب: زنجبيل وجوزة الطيب • القاعدة: خشب الصندل",
    notes_en: "Top: Grapefruit & Mint • Heart: Ginger & Nutmeg • Base: Sandalwood"
  },
  {
    id: "eros-gold",
    img: "images/products/eros.jpg",
    cat: "men",
    price: 50,
    oldPrice: 60,
    badge: "sale",
    name_ar: "إيروس غولد — Eros Gold",
    name_en: "Eros Gold",
    size: "100ml",
    desc_ar: "عطر مغري وقوي بنفحات النعناع الأخضر والتفاح الأخضر وقاعدة من الفانيليا والتونكا. حاضر لا يُنسى في كل مناسباتك الليلية.",
    desc_en: "Magnetic and powerful — green mint and crisp apple melting into vanilla and tonka bean. An unforgettable presence on every night out.",
    notes_ar: "المقدمة: نعناع وتفاح أخضر • القلب: خزامى • القاعدة: فانيليا وتونكا",
    notes_en: "Top: Mint & Green Apple • Heart: Lavender • Base: Vanilla & Tonka"
  },
  {
    id: "noir-intense",
    img: "images/products/adg.jpg",
    cat: "men",
    price: 52,
    oldPrice: null,
    badge: null,
    name_ar: "نوار إنتانس — Noir Intense",
    name_en: "Noir Intense",
    size: "100ml",
    desc_ar: "فخامة داكنة وهادئة: بحر متوسطي منعش فوق قاعدة معدنية دافئة. رفيقك اليومي للعمل والمناسبات، بثبات ممتاز.",
    desc_en: "Dark, quiet luxury: a Mediterranean breeze over a warm mineral base. Your refined daily companion with excellent longevity.",
    notes_ar: "المقدمة: بحري وبرغموت • القلب: إكليل الجبل • القاعدة: خشب الأرز",
    notes_en: "Top: Marine & Bergamot • Heart: Rosemary • Base: Cedarwood"
  },
  {
    id: "la-vie",
    img: "images/products/lavie.jpg",
    cat: "women",
    price: 54,
    oldPrice: null,
    badge: "bestseller",
    name_ar: "لا في بيل — La Vie Belle",
    name_en: "La Vie Belle",
    size: "100ml",
    desc_ar: "أنثوي وراقٍ كابتسامة: عباير من الباتشولي والعرقسوس حول زهرة السوسن الفاخرة. عطر الحياة الجميلة بكل تفاصيلها.",
    desc_en: "Feminine and graceful like a smile: patchouli and licorice swirls around a luxurious iris bloom. The scent of the beautiful life.",
    notes_ar: "المقدمة: أسود الكشمش • القلب: سوسن وياسمين • القاعدة: باتشولي وعرقسوس",
    notes_en: "Top: Blackcurrant • Heart: Iris & Jasmine • Base: Patchouli & Licorice"
  },
  {
    id: "diva-blue",
    img: "images/products/goodgirl.jpg",
    cat: "women",
    price: 56,
    oldPrice: null,
    badge: "new",
    name_ar: "ديفا بلو — Diva Blue",
    name_en: "Diva Blue",
    size: "80ml",
    desc_ar: "عطر النجم الواثقة: توباكو فاخر مع فانيليا مخملية وقرفة دافئة. جرأة في زجاجة بكعب ذهبي يخطف الأنظار.",
    desc_en: "The scent of a confident star: luxe tuberose with velvety vanilla and warm cinnamon. Boldness in a golden-heel bottle.",
    notes_ar: "المقدمة: قرفة وبُن • القلب: توباكو وياسمين • القاعدة: فانيليا وعنبر",
    notes_en: "Top: Cinnamon & Coffee • Heart: Tuberose & Jasmine • Base: Vanilla & Amber"
  },
  {
    id: "libre-gold",
    img: "images/products/libre.jpg",
    cat: "women",
    price: 57,
    oldPrice: null,
    badge: null,
    name_ar: "ليبر غولد — Libre Gold",
    name_en: "Libre Gold",
    size: "90ml",
    desc_ar: "عطر الحرية بأنوثته: لافندر ناعم يلتقي برحيق البرتقال المر والفانيليا. لعروس أنيقة تحرر ذوقها في كل تفصيلة.",
    desc_en: "Freedom, femininely: soft lavender meets bitter orange nectar and vanilla. For the woman who wears her freedom proudly.",
    notes_ar: "المقدمة: ماندرين وكمثرى • القلب: لافندر وبرتقال مر • القاعدة: فانيليا ومسك",
    notes_en: "Top: Mandarin & Pear • Heart: Lavender & Bitter Orange • Base: Vanilla & Musk"
  },
  {
    id: "jadore-dor",
    img: "images/products/jadore.jpg",
    cat: "women",
    price: 59,
    oldPrice: 69,
    badge: "sale",
    name_ar: "جادور دور — J'adore d'Or",
    name_en: "J'adore d'Or",
    size: "100ml",
    desc_ar: "ذهب سائل بين يديك: باقة فاخرة من الزنبق والياسمين والورد الدمشقي بلمسة عنبرية دافئة. كلاسيكية لا تخرج عن الموضة أبدًا.",
    desc_en: "Liquid gold in your hands: a lush bouquet of lily, jasmine and Damask rose over warm amber. A classic that never fades.",
    notes_ar: "المقدمة: كمثرى وماغنوليا • القلب: زنبق وياسمين وورد • القاعدة: عنبر ومسك أبيض",
    notes_en: "Top: Pear & Magnolia • Heart: Lily, Jasmine & Rose • Base: Amber & White Musk"
  }
];

/* مناطق التوصيل — Delivery areas */
const AREAS = [
  ["بيروت – فردان", "Beirut – Verdun"],
  ["بيروت – الحمرا", "Beirut – Hamra"],
  ["بيروت – الأشرفية", "Beirut – Achrafieh"],
  ["بيروت – وسط المدينة", "Beirut – Downtown"],
  ["بيروت – المنطار والرمل البيضا", "Beirut – Manara / Ramlet el-Bayda"],
  ["الضاحية الجنوبية", "Dahieh (Southern Suburb)"],
  ["الجنينة – أم صادي", "Jnah – Ouzai"],
  ["الخلدة – كفرشيما", "Khalde – Kfarshima"],
  ["الدامور – الشوف", "Damour – Chouf"],
  ["صيدا وضواحيها", "Sidon & suburbs"],
  ["صور", "Tyre"],
  ["النبطية", "Nabatieh"],
  ["جونية – كسروان", "Jounieh – Keserwan"],
  ["جبيل", "Jbeil"],
  ["بترون – الكورة", "Batroun – Koura"],
  ["طرابلس وزغرتا", "Tripoli – Zgharta"],
  ["عاليه – بحمودون", "Aley – Bhamdoun"],
  ["المتن – صن الفيل – الدبية", "Metn – Sin el-Fil / Dbayeh"],
  ["زحلة – البقاع", "Zahle – Bekaa"],
  ["بعلبك – الهرمل", "Baalbek – Hermel"],
  ["بشري – الشمال", "Bsharri – North"],
  ["عكار", "Akkar"],
  ["منطقة أخرى", "Other area"]
];
