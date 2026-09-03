/* ============================================================
   Diamond Perfume — App Logic (i18n · Cart · WhatsApp checkout)
   ============================================================ */

/* ---------------- Translations ---------------- */
const I18N = {
  ar: {
    announce: "توصيل لكل لبنان — الدفع عند الاستلام",
    brandSub: "PERFUME · BEIRUT",
    navHome: "الرئيسية", navProducts: "العطور", navServices: "خدماتنا", navAbout: "من نحن",
    navDelivery: "التوصيل", navContact: "تواصل معنا",
    waOrder: "اطلب عبر واتساب",

    heroKicker: "بيع · تعبئة · صناعة عطور — فردان، بيروت",
    heroTitle: "عطرُك هو توقيعك… اجعلُه ماسيًّا",
    heroSub: "تشكيلة مختارة بعناية من أفخر العطور الأصلية للرجال والنساء — توصيل سريع إلى كل المناطق اللبنانية ودفع مريح عند الاستلام.",
    heroCtaShop: "تسوّق العطور",
    statPerfumes: "+40", statPerfumesL: "عطر أصلي",
    statClients: "+1000", statClientsL: "عميل سعيد",
    statTime: "24-48", statTimeL: "ساعة للتوصيل",
    statOriginal: "100%", statOriginalL: "أصلي مضمون",

    feat1: "توصيل لكل لبنان", feat1s: "إلى باب منزلك في كل المناطق اللبنانية — سريع ومضمون",
    feat2: "الدفع عند الاستلام", feat2s: "افحص طلبك أولًا، وادفع نقدًا عند وصوله",
    feat3: "أصلي 100%", feat3s: "عطور أصلية مضمونة من موردين معتمدين",
    feat4: "خدمة شخصية", feat4s: "نساعدك لاختيار عطرك المثالي عبر واتساب",

    servTag: "خدماتنا", servTitle: "أكثر من مجرد متجر عطور",
    servSub: "بيع · تعبئة · صناعة — كل ما يتعلق بالعطور تحت سقف واحد في فردان",
    serv1: "بيع عطور أصلية", serv1s: "تشكيلة رجالية ونسائية وللجنسين من أشهر البيوت العالمية وبأسعار منافسة",
    serv2: "تعبئة عطور", serv2s: "نعبّئ عطورك المفضلة بزيوت عطرية فاخرة عالية الثبات — أثناء انتظارك في المتجر",
    serv3: "صناعة عطور خاصة", serv3s: "اختر مزيجك المميز ونصنع لك عطرك الخاص بعبوة فاخرة — هدية لا تُنسى",
    serv4: "مباخر وبخور وعود", serv4s: "مباخر فاخرة، بخور عود ودهن عود — كل ما يكمل تجربة العطر",
    servCta: "اطلب عطرك الخاص الآن",

    prodTag: "تشكيلتنا", prodTitle: "عطورٌ تروي حكايتك",
    prodSub: "اختر عطرك المفضل وأضفه إلى السلة — ويصلك إلى باب بيتك في كل لبنان",
    fAll: "الكل", fMen: "رجالي", fWomen: "نسائي", fUnisex: "للجنسين", fAcc: "مباخر وبخور",
    catMen: "رجالي", catWomen: "نسائي", catUnisex: "للجنسين", catAcc: "مباخر وبخور",
    badgeBestseller: "الأكثر مبيعًا", badgeNew: "جديد", badgeSale: "خصم",
    addToCart: "أضف إلى السلة",
    waQuick: "اطلب هذا العطر مباشرة عبر واتساب",

    aboutTag: "من نحن", aboutTitle: "حيث تبدأ رحلة عطرك",
    aboutP1: "في قلب فردان، أحد أرقى أحياء بيروت، وُلد شغفنا بالعطور. «Diamond Perfume» بيت عطور متكامل: نبيع أفخر العطور الأصلية العالمية، نعبّئ عطورك المفضلة بزيوت فاخرة وأنت تنتظر، ونصنع لك عطرًا خاصًا بتركيبة تصممها بنفسك — إضافة إلى مباخر وبخور وأجود أنواع العود.",
    aboutP2: "نؤمن أن العطر ذاكرة وثقة وأول انطباع لا يُنسى؛ لذلك نمنحك خدمة شخصية تساعدك في اختيار عطرك المثالي، ونوصله إلى بابك أينما كنت في لبنان.",
    aboutLi1: "انتقاء فاخر من عطور أصلية مضمونة",
    aboutLi2: "تعبئة عطورك المفضلة أثناء الانتظار",
    aboutLi3: "صناعة عطر خاص بتركيبتك المفضلة",
    aboutLi4: "مباخر وبخور وعود بجودة فاخرة",
    aboutCta: "زورونا في المتجر",
    aboutBadgeT: "فردان – بيروت", aboutBadgeS: "قلب العطور اللبنانية",

    galTag: "داخل المتجر", galTitle: "جولة داخل متجرنا",
    galSub: "زورونا في فردان وعِش تجربة العطر عن قرب",

    delTag: "التوصيل والطلب", delTitle: "اطلب بسهولة… واستلم بسرعة",
    step1: "اختر عطورك", step1s: "تصفح التشكيلة وأضف ما يعجبك إلى السلة",
    step2: "أرسل طلبك", step2s: "أكمل الطلب من السلة ليصلك مباشرة على واتساب",
    step3: "استلم وادفع", step3s: "خلال 24–48 ساعة على باب بيتك، والدفع عند الاستلام",
    delNote: "رسوم التوصيل تُحدد حسب منطقتك عند تأكيد طلبك عبر واتساب · الدفع نقدًا عند الاستلام (USD أو LBP)",

    testTag: "آراء عملائنا", testTitle: "ثقةٌ تفوح مثل العطر",
    test1: "«أفضل تجربة شراء عطور في بيروت! طلبت عبر الموقع ووصلني بأقل من 24 ساعة، والعطر أصلي 100%. شكرًا Diamond!»",
    test2: "«ساعدوني أختار هدية لزوجتي عبر واتساب بكل ذوق. التغليف فخم والتوصيل سريع حتى صيدا. أنصح فيهم وبقوة.»",
    test3: "«أسعارهم منافسة جدًا مقارنة بالمحلات الأخرى، والتوصيل وصل جونية بيوم واحد. صار عندهم زبون دائم.»",

    contactTag: "تواصل معنا", contactTitle: "زورونا… أو اطلب عن بُعد",
    followUs: "تابعنا على",
    contactSub: "يسعدنا استقبالك في متجرنا بفردان، أو خِدمك عن بُعد — فريقنا جاهز للإجابة على كل استفساراتك ومساعدتك في اختيار عطرك.",
    callNow: "اتصل بنا الآن",
    cAddress: "العنوان", cAddressV: "فردان، بيروت – لبنان",
    cPhone: "الهاتف / واتساب",
    cHours: "أوقات الدوام", cHoursV: "يوميًا: 10:00 صباحًا – 10:00 مساءً",
    cPay: "الدفع", cPayV: "نقدًا عند الاستلام — USD أو LBP",
    cMap: "موقعنا على الخريطة",

    fLinks: "روابط سريعة", fContact: "تواصل",
    rights: "جميع الحقوق محفوظة", footerTip: "صُنع بحب في بيروت 💛",
    footerAbout: "عطور فاخرة أصلية من قلب فردان، بيروت — توصيل لكل لبنان ودفع عند الاستلام.",

    cartTitle: "سلة التسوق",
    cartEmpty: "سلتك فارغة… سجّل عطرك المفضل 🌟",
    startShopping: "ابدأ التسوق",
    subtotal: "المجموع الفرعي", deliveryFee: "رسوم التوصيل",
    deliveryTbd: "تُحدد عبر واتساب", orderTotal: "مجموع المنتجات",
    checkout: "إتمام الطلب عبر واتساب",
    callOrder: "أو اتصل بنا لإتمام الطلب",
    deliveryNoteCart: "🚚 رسوم التوصيل تُحدد حسب منطقتك عند تأكيد طلبك عبر واتساب",

    formIntro: "أدخل معلوماتك ليصلك طلبك إلى باب بيتك 👇",
    fName: "الاسم الكامل *", fNamePh: "اكتب اسمك الكامل",
    fPhone: "رقم الهاتف *", fPhonePh: "70 / 71 — XXX XXX",
    fArea: "المدينة / المنطقة *", fAreaPh: "اختر منطقتك…",
    fAddress: "العنوان بالتفصيل *", fAddrPh: "الشارع، البناية، الطابق",
    fNotes: "ملاحظات (اختياري)", fNotesPh: "وقت التوصيل المفضل مثلاً…",
    sendOrder: "إرسال الطلب عبر واتساب", backToCart: "الرجوع إلى السلة",
    errRequired: "يرجى تعبئة الحقول الإلزامية أولًا 🙏",

    successT: "تم تجهيز طلبك!", 
    successP: "فتحنا لك واتساب مع تفاصيل طلبك — أرسل الرسالة وسيتواصل معك فريقنا فورًا للتأكيد.",
    reopenWa: "إعادة فتح واتساب", continueShopping: "مواصلة التسوق",

    addedToast: "أُضيف إلى السلة ✓",
    langBtn: "EN",
    orderMsg: "مرحباً Diamond Perfume 👋\nأرغب بالاستفسار عن العطور والطلب.",
    customMsg: "مرحباً Diamond Perfume 👋\nأرغب بصناعة عطر خاص بتركيبتي المفضلة.",
  },

  en: {
    announce: "Delivery all over Lebanon — Cash on delivery",
    brandSub: "PERFUME · BEIRUT",
    navHome: "Home", navProducts: "Perfumes", navServices: "Services", navAbout: "About",
    navDelivery: "Delivery", navContact: "Contact",
    waOrder: "Order on WhatsApp",

    heroKicker: "Sell · Refill · Create — Verdun, Beirut",
    heroTitle: "Your Scent Is Your Signature… Make It Diamond",
    heroSub: "A carefully curated collection of the finest authentic perfumes for men and women — fast delivery across Lebanon and easy cash-on-delivery payment.",
    heroCtaShop: "Shop Perfumes",
    statPerfumes: "40+", statPerfumesL: "Authentic scents",
    statClients: "1000+", statClientsL: "Happy clients",
    statTime: "24-48", statTimeL: "Hours delivery",
    statOriginal: "100%", statOriginalL: "Authentic guaranteed",

    feat1: "Delivery All Over Lebanon", feat1s: "To your doorstep everywhere across Lebanon — fast and guaranteed",
    feat2: "Cash On Delivery", feat2s: "Inspect your order first, pay cash on arrival",
    feat3: "100% Authentic", feat3s: "Guaranteed original perfumes from trusted suppliers",
    feat4: "Personal Service", feat4s: "We help you find your perfect scent on WhatsApp",

    servTag: "Our Services", servTitle: "More Than Just a Perfume Store",
    servSub: "Sell · Refill · Create — everything perfume under one roof in Verdun",
    serv1: "Authentic Perfumes", serv1s: "Men's, women's and unisex collections from the world's most renowned houses at competitive prices",
    serv2: "Perfume Refill", serv2s: "We refill your favorite perfume with premium long-lasting fragrance oils — while you wait",
    serv3: "Custom Perfume Making", serv3s: "Choose your signature blend and we craft your own perfume in a luxurious bottle — an unforgettable gift",
    serv4: "Burners, Bakhoor & Oud", serv4s: "Luxury mabakher, oud bakhoor and pure oud oil — everything to complete your fragrance ritual",
    servCta: "Order Your Custom Perfume",

    prodTag: "Our Collection", prodTitle: "Perfumes That Tell Your Story",
    prodSub: "Pick your favorite scent, add it to the cart — and it arrives at your door anywhere in Lebanon",
    fAll: "All", fMen: "Men", fWomen: "Women", fUnisex: "Unisex", fAcc: "Burners & Bakhoor",
    catMen: "Men", catWomen: "Women", catUnisex: "Unisex", catAcc: "Burners & Bakhoor",
    badgeBestseller: "Bestseller", badgeNew: "New", badgeSale: "Sale",
    addToCart: "Add to Cart",
    waQuick: "Order this perfume directly on WhatsApp",

    aboutTag: "About Us", aboutTitle: "Where Your Fragrance Journey Begins",
    aboutP1: "In the heart of Verdun — one of Beirut's most elegant districts — our passion for perfumes was born. Diamond Perfume is a complete fragrance house: we sell the finest authentic international perfumes, refill your favorite scents with premium oils while you wait, and craft your own custom fragrance with a blend you design — plus bakhoor burners, bakhoor and the finest oud.",
    aboutP2: "We believe a fragrance is memory, confidence and an unforgettable first impression. That's why we offer personal guidance to help you choose your perfect scent — and deliver it to your doorstep anywhere in Lebanon.",
    aboutLi1: "Luxury curation of guaranteed authentic perfumes",
    aboutLi2: "Refill your favorite perfumes with premium long-lasting oils",
    aboutLi3: "Custom fragrance creation with your personal blend",
    aboutLi4: "Luxury bakhoor burners, bakhoor & pure oud",
    aboutCta: "Visit Our Store",
    aboutBadgeT: "Verdun – Beirut", aboutBadgeS: "Heart of Lebanese perfumery",

    galTag: "Inside The Store", galTitle: "A Tour Inside Our Boutique",
    galSub: "Visit us in Verdun and experience the world of fragrance up close",

    delTag: "Delivery & Ordering", delTitle: "Order Easily… Receive Quickly",
    step1: "Choose Your Scent", step1s: "Browse the collection and add favorites to your cart",
    step2: "Send Your Order", step2s: "Complete checkout and it reaches us instantly on WhatsApp",
    step3: "Receive & Pay", step3s: "Within 24–48 hours at your door — pay cash on delivery",
    delNote: "The delivery fee for your area is set when we confirm your order on WhatsApp · Cash on delivery (USD or LBP)",

    testTag: "Testimonials", testTitle: "Trust That Smells Like Perfume",
    test1: "“The best perfume shopping experience in Beirut! I ordered from the website and it arrived in under 24 hours — 100% authentic. Thank you Diamond!”",
    test2: "“They helped me pick a gift for my wife on WhatsApp with great taste. Luxurious packaging and fast delivery all the way to Sidon. Highly recommended.”",
    test3: "“Their prices are very competitive compared to other shops, and delivery reached Jounieh in one day. I'm a regular customer now.”",

    contactTag: "Contact Us", contactTitle: "Visit Us… Or Order From Anywhere",
    followUs: "Follow us",
    contactSub: "We'd love to welcome you at our Verdun boutique — or serve you remotely. Our team is ready to answer all your questions and help you find your scent.",
    callNow: "Call Us Now",
    cAddress: "Address", cAddressV: "Verdun, Beirut – Lebanon",
    cPhone: "Phone / WhatsApp",
    cHours: "Opening Hours", cHoursV: "Daily: 10:00 AM – 10:00 PM",
    cPay: "Payment", cPayV: "Cash on delivery — USD or LBP",
    cMap: "Find Us on Google Maps",

    fLinks: "Quick Links", fContact: "Contact",
    rights: "All rights reserved", footerTip: "Made with love in Beirut 💛",
    footerAbout: "Authentic luxury perfumes from the heart of Verdun, Beirut — delivery across Lebanon with cash on delivery.",

    cartTitle: "Your Cart",
    cartEmpty: "Your cart is empty… add your signature scent 🌟",
    startShopping: "Start Shopping",
    subtotal: "Subtotal", deliveryFee: "Delivery Fee",
    deliveryTbd: "Set via WhatsApp", orderTotal: "Products Total",
    checkout: "Checkout via WhatsApp",
    callOrder: "Or call us to place your order",
    deliveryNoteCart: "🚚 The delivery fee for your area is set when we confirm your order on WhatsApp",

    formIntro: "Enter your details so your order arrives at your doorstep 👇",
    fName: "Full Name *", fNamePh: "Your full name",
    fPhone: "Phone Number *", fPhonePh: "XX XXX XXX — 03 / 70 / 71",
    fArea: "City / Area *", fAreaPh: "Choose your area…",
    fAddress: "Detailed Address *", fAddrPh: "Street, building, floor",
    fNotes: "Notes (optional)", fNotesPh: "Preferred delivery time, for example…",
    sendOrder: "Send Order via WhatsApp", backToCart: "Back to Cart",
    errRequired: "Please fill in the required fields first 🙏",

    successT: "Your Order Is Ready!",
    successP: "We opened WhatsApp with your order details — just hit send and our team will confirm right away.",
    reopenWa: "Reopen WhatsApp", continueShopping: "Continue Shopping",

    addedToast: "Added to cart ✓",
    langBtn: "عربي",
    orderMsg: "Hello Diamond Perfume 👋\nI'd like to ask about your perfumes and place an order.",
    customMsg: "Hello Diamond Perfume 👋\nI'd like to create my own custom fragrance.",
  }
};

/* ---------------- State ---------------- */
let lang = localStorage.getItem("dp_lang") || "ar";
let cart = JSON.parse(localStorage.getItem("dp_cart") || "{}");
let currentFilter = "all";
let lastOrderMessage = "";
let qmProduct = null, qmQtyVal = 1;

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.ar[k] || k;
const fmt = (n) => STORE.currency + (Number.isInteger(n) ? n : n.toFixed(2));

/* ---------------- i18n apply ---------------- */
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((el) => {
    const v = I18N[lang][el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  $$("[data-i18n-ph]").forEach((el) => {
    const v = I18N[lang][el.dataset.i18nPh];
    if (v !== undefined) el.placeholder = v;
  });
  $("#langBtn").textContent = t("langBtn");
  document.title = lang === "ar"
    ? "Diamond Perfume | بيع وتعبئة وصناعة عطور – فردان، بيروت | توصيل لكل لبنان"
    : "Diamond Perfume | Sell, Refill & Create Perfumes – Verdun, Beirut | Delivery Across Lebanon";

  buildAreaOptions();
  renderProducts();
  renderCart();
  updateWaLinks();
}

function switchLang() {
  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem("dp_lang", lang);
  applyLang();
}

/* ---------------- WhatsApp links ---------------- */
function waUrl(msg) {
  return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`;
}
function generalOrderMsg() {
  return t("orderMsg");
}
function updateWaLinks() {
  const url = waUrl(generalOrderMsg());
  $$(".js-wa-order").forEach((a) => (a.href = url));
  const customUrl = waUrl(t("customMsg"));
  $$(".js-wa-custom").forEach((a) => (a.href = customUrl));
  $("#waFab").href = url;
  $("#mobileWaBtn").href = url;
}

/* ---------------- Products ---------------- */
function badgeInfo(p) {
  if (p.badge === "bestseller") return ["badge-bestseller", t("badgeBestseller")];
  if (p.badge === "new") return ["badge-new", t("badgeNew")];
  if (p.badge === "sale") return ["badge-sale", t("badgeSale")];
  return null;
}

function renderProducts() {
  const grid = $("#productsGrid");
  grid.innerHTML = "";
  const list = PRODUCTS.filter((p) => currentFilter === "all" || p.cat === currentFilter);

  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    const b = badgeInfo(p);
    const catLabel = t("cat" + p.cat.charAt(0).toUpperCase() + p.cat.slice(1));

    card.innerHTML = `
      <div class="card-media">
        ${b ? `<span class="card-badge ${b[0]}">${b[1]}</span>` : ""}
        <div class="card-quick">
          <button type="button" data-view="${p.id}" aria-label="Quick view"><svg class="ic"><use href="#i-eye"/></svg></button>
          <button type="button" data-wa="${p.id}" aria-label="WhatsApp order"><svg class="ic"><use href="#i-whatsapp"/></svg></button>
        </div>
        <img src="${p.img}" alt="${lang === "ar" ? p.name_ar : p.name_en}" loading="lazy">
      </div>
      <div class="card-body">
        <span class="card-cat">${catLabel} · ${p.size}</span>
        <h3 class="card-name">${lang === "ar" ? p.name_ar : p.name_en}</h3>
        <div class="card-meta">
          <span class="card-price">
            <strong>${fmt(p.price)}</strong>
            ${p.oldPrice ? `<s>${fmt(p.oldPrice)}</s>` : ""}
          </span>
          <span class="card-size">${p.size}</span>
        </div>
        <button type="button" class="card-add" data-add="${p.id}">
          <svg class="ic"><use href="#i-cart"/></svg>
          <span>${t("addToCart")}</span>
        </button>
      </div>`;

    grid.appendChild(card);
  });

  $$("[data-add]", grid).forEach((btn) =>
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.add, 1);
      toast(t("addedToast"));
    })
  );
  $$("[data-view]", grid).forEach((btn) =>
    btn.addEventListener("click", () => openQuickView(btn.dataset.view))
  );
  $$("[data-wa]", grid).forEach((btn) =>
    btn.addEventListener("click", () => {
      const p = PRODUCTS.find((x) => x.id === btn.dataset.wa);
      const name = lang === "ar" ? p.name_ar : p.name_en;
      window.open(waUrl(`${generalOrderMsg()}\n— ${name} (${fmt(p.price)})`), "_blank");
    })
  );
}

/* Filters */
function bindFilters() {
  $$(".filter-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderProducts();
    })
  );
}

/* ---------------- Quick view modal ---------------- */
function openQuickView(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  qmProduct = p;
  qmQtyVal = 1;
  $("#qmQty").textContent = "1";
  $("#qmImg").src = p.img;
  $("#qmImg").alt = lang === "ar" ? p.name_ar : p.name_en;
  $("#qmName").textContent = lang === "ar" ? p.name_ar : p.name_en;
  $("#qmNotes").textContent = lang === "ar" ? p.notes_ar : p.notes_en;
  $("#qmDesc").textContent = lang === "ar" ? p.desc_ar : p.desc_en;
  $("#qmSize").textContent = p.size;

  const priceEl = $("#qmPrice");
  priceEl.innerHTML = p.oldPrice
    ? `<s>${fmt(p.oldPrice)}</s><b>${fmt(p.price)}</b>`
    : `<b>${fmt(p.price)}</b>`;

  const b = badgeInfo(p);
  const badgeEl = $("#qmBadge");
  if (b) { badgeEl.className = "qm-badge card-badge " + b[0]; badgeEl.textContent = b[1]; }
  else { badgeEl.className = "qm-badge"; badgeEl.textContent = ""; }

  $("#qmWa").href = waUrl(
    `${generalOrderMsg()}\n— ${lang === "ar" ? p.name_ar : p.name_en} (${fmt(p.price)})`
  );

  $("#modalBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeQuickView() {
  $("#modalBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}
function bindModal() {
  $("#modalClose").addEventListener("click", closeQuickView);
  $("#modalBackdrop").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeQuickView();
  });
  $("#qmPlus").addEventListener("click", () => { qmQtyVal++; $("#qmQty").textContent = qmQtyVal; });
  $("#qmMinus").addEventListener("click", () => {
    if (qmQtyVal > 1) { qmQtyVal--; $("#qmQty").textContent = qmQtyVal; }
  });
  $("#qmAdd").addEventListener("click", () => {
    if (qmProduct) {
      addToCart(qmProduct.id, qmQtyVal);
      toast(t("addedToast"));
      closeQuickView();
      openDrawer();
    }
  });
}

/* ---------------- Cart ---------------- */
function cartEntries() {
  return Object.entries(cart)
    .map(([id, qty]) => ({ p: PRODUCTS.find((x) => x.id === id), qty }))
    .filter((e) => e.p && e.qty > 0);
}
function cartCount() { return cartEntries().reduce((s, e) => s + e.qty, 0); }
function cartSubtotal() { return cartEntries().reduce((s, e) => s + e.p.price * e.qty, 0); }
function saveCart() {
  localStorage.setItem("dp_cart", JSON.stringify(cart));
  $("#cartCount").textContent = cartCount();
}

function addToCart(id, qty = 1) {
  cart[id] = (cart[id] || 0) + qty;
  saveCart();
  renderCart();
}
function setQty(id, qty) {
  if (qty <= 0) delete cart[id];
  else cart[id] = qty;
  saveCart();
  renderCart();
}

function renderCart() {
  $("#cartCount").textContent = cartCount();

  const body = $("#cartItems");
  const foot = $("#cartFoot");
  const entries = cartEntries();

  if (entries.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <svg class="ic"><use href="#i-cart"/></svg>
        <p>${t("cartEmpty")}</p>
        <button class="btn btn-gold" id="emptyShopBtn" type="button">${t("startShopping")}</button>
      </div>`;
    foot.style.display = "none";
    const b = $("#emptyShopBtn");
    if (b) b.addEventListener("click", () => { closeDrawer(); scrollToProducts(); });
    $("#formTotal").textContent = fmt(0);
    return;
  }

  foot.style.display = "grid";
  body.innerHTML = entries.map(({ p, qty }) => `
    <div class="cart-item">
      <img src="${p.img}" alt="${lang === "ar" ? p.name_ar : p.name_en}">
      <div class="ci-info">
        <span class="ci-name">${lang === "ar" ? p.name_ar : p.name_en}</span>
        <span class="ci-price">${fmt(p.price)} × ${qty}</span>
        <div class="ci-qty">
          <button type="button" data-minus="${p.id}" aria-label="-"><svg class="ic"><use href="#i-minus"/></svg></button>
          <span>${qty}</span>
          <button type="button" data-plus="${p.id}" aria-label="+"><svg class="ic"><use href="#i-plus"/></svg></button>
        </div>
      </div>
      <div class="ci-side">
        <button type="button" class="ci-remove" data-remove="${p.id}" aria-label="Remove"><svg class="ic"><use href="#i-trash"/></svg></button>
        <span class="ci-total">${fmt(p.price * qty)}</span>
      </div>
    </div>`).join("");

  const sub = cartSubtotal();
  $("#sumSubtotal").textContent = fmt(sub);
  $("#sumDelivery").textContent = t("deliveryTbd");
  $("#formTotal").textContent = fmt(sub);

  $("#freeNote").textContent = t("deliveryNoteCart");

  $$("[data-plus]", body).forEach((b) => b.addEventListener("click", () => setQty(b.dataset.plus, cart[b.dataset.plus] + 1)));
  $$("[data-minus]", body).forEach((b) => b.addEventListener("click", () => setQty(b.dataset.minus, cart[b.dataset.minus] - 1)));
  $$("[data-remove]", body).forEach((b) => b.addEventListener("click", () => setQty(b.dataset.remove, 0)));
}

/* ---------------- Drawer ---------------- */
function openDrawer() {
  showDrawerView("items");
  renderCart();
  $("#cartDrawer").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  $("#drawerBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  $("#cartDrawer").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  $("#drawerBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}
function showDrawerView(v) {
  $("#cartItemsView").hidden = v !== "items";
  $("#checkoutView").hidden = v !== "checkout";
  $("#successView").hidden = v !== "success";
}
function scrollToProducts() {
  $("#products").scrollIntoView({ behavior: "smooth" });
}

function bindDrawer() {
  $("#cartBtn").addEventListener("click", openDrawer);
  $("#drawerClose").addEventListener("click", closeDrawer);
  $("#drawerBackdrop").addEventListener("click", closeDrawer);

  $("#checkoutBtn").addEventListener("click", () => {
    if (cartCount() === 0) return;
    showDrawerView("checkout");
  });
  $("#backToCartBtn").addEventListener("click", () => showDrawerView("items"));

  $("#callOrderBtn").addEventListener("click", () => {
    window.location.href = `tel:${STORE.phoneIntl}`;
  });

  $("#continueBtn").addEventListener("click", () => {
    closeDrawer();
    scrollToProducts();
  });
  $("#reopenWaBtn").addEventListener("click", () => {
    if (lastOrderMessage) window.open(waUrl(lastOrderMessage), "_blank");
  });

  $("#sendOrderBtn").addEventListener("click", submitOrder);
}

/* ---------------- Checkout ---------------- */
function submitOrder() {
  const name = $("#fName").value.trim();
  const phone = $("#fPhone").value.trim();
  const area = $("#fArea").value;
  const address = $("#fAddress").value.trim();
  const notes = $("#fNotes").value.trim();

  let ok = true;
  [["#fName", name], ["#fPhone", phone], ["#fArea", area], ["#fAddress", address]].forEach(([sel, val]) => {
    const el = $(sel);
    if (!val) { el.classList.add("err"); ok = false; }
    else el.classList.remove("err");
  });
  if (!ok) { toast(t("errRequired")); return; }

  const sub = cartSubtotal();
  const lines = cartEntries().map(({ p, qty }) => {
    const n = lang === "ar" ? p.name_ar : p.name_en;
    return `• ${qty} × ${n} (${p.size}) — ${fmt(p.price * qty)}`;
  });

  lastOrderMessage =
    `${lang === "ar" ? "🛍 *طلب جديد من موقع* Diamond Perfume" : "🛍 *New order from the* Diamond Perfume *website*"}\n` +
    `━━━━━━━━━━━━━━\n${lang === "ar" ? "*الطلبية:*" : "*Order:*"}\n${lines.join("\n")}\n` +
    `━━━━━━━━━━━━━━\n` +
    `💰 ${lang === "ar" ? "مجموع المنتجات" : "Products total"}: ${fmt(sub)}\n` +
    `🚚 ${lang === "ar" ? "رسوم التوصيل: تُحدد عند التأكيد عبر واتساب" : "Delivery fee: set upon confirmation on WhatsApp"}\n` +
    `━━━━━━━━━━━━━━\n` +
    `👤 ${lang === "ar" ? "الاسم" : "Name"}: ${name}\n` +
    `📞 ${lang === "ar" ? "الهاتف" : "Phone"}: ${phone}\n` +
    `📍 ${lang === "ar" ? "المنطقة" : "Area"}: ${area}\n` +
    `🏠 ${lang === "ar" ? "العنوان" : "Address"}: ${address}\n` +
    (notes ? `📝 ${lang === "ar" ? "ملاحظات" : "Notes"}: ${notes}\n` : "") +
    `💵 ${lang === "ar" ? "الدفع عند الاستلام" : "Cash on delivery"}`;

  window.open(waUrl(lastOrderMessage), "_blank");

  // reset cart + form, show success
  cart = {};
  saveCart();
  renderCart();
  $("#checkoutForm").reset();
  showDrawerView("success");
}

/* ---------------- Areas ---------------- */
function buildAreaOptions() {
  const sel = $("#fArea");
  const current = sel.value;
  sel.innerHTML = `<option value="">${t("fAreaPh")}</option>` +
    AREAS.map(([ar, en]) => `<option value="${lang === "ar" ? ar : en}">${lang === "ar" ? ar : en}</option>`).join("");
  if (current) sel.value = current;
}

/* ---------------- Toast ---------------- */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ---------------- Header / nav ---------------- */
function bindNav() {
  const header = $("#header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const burger = $("#burger");
  const mobileNav = $("#mobileNav");
  burger.addEventListener("click", () => mobileNav.classList.toggle("open"));
  $$("a", mobileNav).forEach((a) => a.addEventListener("click", () => mobileNav.classList.remove("open")));
}

/* ---------------- Reveal on scroll ---------------- */
function bindReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => io.observe(el));
}

/* ---------------- Gallery lightbox ---------------- */
function bindGallery() {
  const lb = $("#lightbox");
  if (!lb) return;
  const lbImg = $("#lbImg");
  $$(".g-item img").forEach((img) =>
    img.addEventListener("click", () => {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    })
  );
  lb.addEventListener("click", () => {
    lb.classList.remove("open");
    lbImg.src = "";
    document.body.style.overflow = "";
  });
}

/* ---------------- Init ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  $("#langBtn").addEventListener("click", switchLang);
  bindNav();
  bindFilters();
  bindGallery();
  bindModal();
  bindDrawer();
  applyLang();
  bindReveal();

  // close things on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
      closeQuickView();
      $("#lightbox").classList.remove("open");
      document.body.style.overflow = "";
    }
  });

  // preloader
  const pre = $("#preloader");
  window.addEventListener("load", () => setTimeout(() => pre.classList.add("done"), 350));
  setTimeout(() => pre.classList.add("done"), 2500); // safety
});
