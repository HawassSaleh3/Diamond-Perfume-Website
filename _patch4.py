# -*- coding: utf-8 -*-
# Diamond Perfume — phone alignment + store hours + WhatsApp order message
import io

def patch(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for i, (old, new) in enumerate(pairs):
        n = s.count(old)
        assert n == 1, "[%s] pattern #%d found %dx: %r" % (path, i, n, old[:70])
        s = s.replace(old, new)
    io.open(path, "w", encoding="utf-8").write(s)
    print("OK %s: %d replacements" % (path, len(pairs)))

# ============================================================
# 1) css — keep phone LTR (correct digit order) but aligned
#    with the rest of the RTL text
# ============================================================
patch("css/style.css", [
    (r'''/* ---------- WhatsApp FAB ---------- */''',
     r'''/* Phone numbers stay LTR but align with RTL text */
html[dir="rtl"] .footer-contact a[dir="ltr"]{ align-self:flex-end; text-align:right; }
html[dir="rtl"] .ccard p[dir="ltr"]{ text-align:right; }

/* ---------- WhatsApp FAB ---------- */'''),
])

# ============================================================
# 2) index.html — hours defaults + schema
# ============================================================
patch("index.html", [
    (r'''    "openingHours": "Mo-Su 10:00-22:00",''',
     r'''    "openingHours": "Mo-Su 08:00-20:00",'''),
    (r'''          <h3 data-i18n="cHours">أوقات الدوام</h3>
          <p data-i18n="cHoursV">يوميًا: 10:00 صباحًا – 10:00 مساءً</p>''',
     r'''          <h3 data-i18n="cHours">أوقات الدوام</h3>
          <p data-i18n="cHoursV">يوميًا: من 8–9 صباحًا حتى 8 مساءً</p>'''),
    (r'''        <span data-i18n="cAddressV">فردان، بيروت – لبنان</span>
        <span data-i18n="cHoursV">يوميًا: 10:00 صباحًا – 10:00 مساءً</span>''',
     r'''        <span data-i18n="cAddressV">فردان، بيروت – لبنان</span>
        <span data-i18n="cHoursV">يوميًا: من 8–9 صباحًا حتى 8 مساءً</span>'''),
])

# ============================================================
# 3) products.js — STORE hours
# ============================================================
patch("js/products.js", [
    (r'''  hours_ar: "يوميًا: 10:00 صباحًا – 10:00 مساءً",
  hours_en: "Daily: 10:00 AM – 10:00 PM",''',
     r'''  hours_ar: "يوميًا: من 8–9 صباحًا حتى 8 مساءً",
  hours_en: "Daily: 8–9 AM until 8 PM",'''),
])

# ============================================================
# 4) app.js — hours translations + new WhatsApp order message
# ============================================================
patch("js/app.js", [
    (r'''    cHours: "أوقات الدوام", cHoursV: "يوميًا: 10:00 صباحًا – 10:00 مساءً",''',
     r'''    cHours: "أوقات الدوام", cHoursV: "يوميًا: من 8–9 صباحًا حتى 8 مساءً",'''),
    (r'''    cHours: "Opening Hours", cHoursV: "Daily: 10:00 AM – 10:00 PM",''',
     r'''    cHours: "Opening Hours", cHoursV: "Daily: 8–9 AM until 8 PM",'''),
    (r'''  const sub = cartSubtotal();
  const lines = cartEntries().map(({ p, qty }) => {
    const n = lang === "ar" ? p.name_ar : p.name_en;
    return `• ${qty} × ${n} (${p.size}) — ${fmt(p.price * qty)}`;
  });

  lastOrderMessage =
    `${lang === "ar" ? "🛍 *طلب جديد من موقع* Diamond Perfume" : "🛍 *New order from the* Diamond Perfume *website*"}\n` +
    `━━━━━━━━━━━━━━\n${lang === "ar" ? "*الطلبية:*" : "*Order:*"}\n${lines.join("\n")}\n` +
    `━━━━━━━━━━━━━━\n` +
    `${lang === "ar" ? "المجموع الفرعي" : "Subtotal"}: ${fmt(sub)}\n` +
    `💰 ${lang === "ar" ? "مجموع المنتجات" : "Products total"}: ${fmt(sub)}\n` +
    `🚚 ${lang === "ar" ? "رسوم التوصيل: تُحدد عند التأكيد عبر واتساب" : "Delivery fee: set upon confirmation on WhatsApp"}\n` +
    `━━━━━━━━━━━━━━\n` +
    `👤 ${lang === "ar" ? "الاسم" : "Name"}: ${name}\n` +
    `📞 ${lang === "ar" ? "الهاتف" : "Phone"}: ${phone}\n` +
    `📍 ${lang === "ar" ? "المنطقة" : "Area"}: ${area}\n` +
    `🏠 ${lang === "ar" ? "العنوان" : "Address"}: ${address}\n` +
    (notes ? `📝 ${lang === "ar" ? "ملاحظات" : "Notes"}: ${notes}\n` : "") +
    `💵 ${lang === "ar" ? "الدفع عند الاستلام" : "Cash on delivery"}`;''',
     r'''  const sub = cartSubtotal();
  const S = lang === "ar" ? {
    head: "💎 *طلب جديد — Diamond Perfume*",
    items: "📦 *تفاصيل الطلب:*",
    total: "💰 *مجموع المنتجات:*",
    deliv: "🚚 *التوصيل:* يُتفق على الرسوم عند تأكيد الطلب",
    pay: "💵 *الدفع:* نقدًا عند الاستلام",
    name: "👤 *الاسم:*",
    phone: "📞 *الهاتف:*",
    area: "📍 *المنطقة:*",
    addr: "🏠 *العنوان:*",
    notes: "📝 *ملاحظات:*",
    time: "🕒 *وقت الطلب:*",
    thanks: "✨ شكرًا لثقتكم — Diamond Perfume، فردان – بيروت"
  } : {
    head: "💎 *New Order — Diamond Perfume*",
    items: "📦 *Order Details:*",
    total: "💰 *Products Total:*",
    deliv: "🚚 *Delivery:* fee agreed upon order confirmation",
    pay: "💵 *Payment:* Cash on delivery",
    name: "👤 *Name:*",
    phone: "📞 *Phone:*",
    area: "📍 *Area:*",
    addr: "🏠 *Address:*",
    notes: "📝 *Notes:*",
    time: "🕒 *Order time:*",
    thanks: "✨ Thank you for your trust — Diamond Perfume, Verdun – Beirut"
  };

  const lines = cartEntries().map(({ p, qty }, i) => {
    const n = lang === "ar" ? p.name_ar : p.name_en;
    return `${i + 1}) ${n} (${p.size})\n      ${qty} × ${fmt(p.price)} = ${fmt(p.price * qty)}`;
  });

  const div = "━━━━━━━━━━━━━━━━━━";
  const nowTxt = new Date().toLocaleString(lang === "ar" ? "ar-LB" : "en-GB", { dateStyle: "short", timeStyle: "short" });

  lastOrderMessage =
    `${S.head}\n${div}\n${S.items}\n${lines.join("\n")}\n${div}\n` +
    `${S.total} ${fmt(sub)}\n${S.deliv}\n${S.pay}\n${div}\n` +
    `${S.name} ${name}\n${S.phone} ${phone}\n${S.area} ${area}\n${S.addr} ${address}\n` +
    (notes ? `${S.notes} ${notes}\n` : "") +
    `${S.time} ${nowTxt}\n${div}\n${S.thanks}`;'''),
])
print("ALL DONE")
