# CNC Wood Studio

موقع عربي جاهز لعرض موديلات CNC لنحت الخشب واستقبال طلبات:

- موديلات CNC جاهزة أو مخصصة.
- ملفات STL / DXF / G-Code.
- ماكينة CNC كاملة حسب الباقة والمواصفات.
- مساعد AI Studio داخل المتصفح لصياغة وصف/برومبت احترافي.
- حاسبة سعر تقديرية.
- تصميم Responsive يدعم الهاتف والكمبيوتر.

## طريقة التشغيل

افتح ملف `index.html` مباشرة في المتصفح.

## تعديل رقم واتساب

افتح ملف `script.js` وعدّل:

```js
const SITE_CONFIG = {
  whatsappNumber: "213555000000",
  currency: "دج",
  basePricePerSquareMeter: 12500
};
```

اكتب رقمك بصيغة دولية بدون علامة `+`.

## تعديل الأسعار

غيّر `basePricePerSquareMeter` داخل `script.js` حسب تسعيرك.

## إضافة موديلات جديدة

في ملف `script.js`، أضف عنصرًا جديدًا داخل مصفوفة `models`:

```js
{ title: "اسم الموديل", category: "doors", categoryName: "أبواب", description: "الوصف", tags: ["STL", "3D"] }
```

التصنيفات المتاحة: `doors`, `panels`, `arabesque`, `furniture`, `signs`.

## ربط AI حقيقي

الموقع الحالي لا يضع مفتاح OpenAI داخل المتصفح حفاظًا على الأمان. لربط AI حقيقي:

1. أنشئ Backend صغير Node.js أو Python.
2. خزّن مفتاح API في متغيرات البيئة.
3. اجعل `AI Studio` يرسل البيانات للـ Backend.
4. الـ Backend يستدعي نموذج AI ثم يرجع النتيجة للموقع.

## النشر

يمكن رفع الملفات كما هي على:

- Netlify
- Vercel
- GitHub Pages
- Hostinger / cPanel

ارفع الملفات الثلاثة الأساسية: `index.html`, `styles.css`, `script.js`.
