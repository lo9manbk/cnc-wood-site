/*
  CNC Wood Studio
  غيّر الإعدادات التالية حسب مشروعك.
*/
const SITE_CONFIG = {
  // اكتب رقم واتساب بصيغة دولية بدون +. مثال الجزائر: 213555000000
  whatsappNumber: "213669432143",
  currency: "دج",
  basePricePerSquareMeter: 12500
};

const modelTemplates = {
  doors: `<svg viewBox="0 0 420 260" aria-hidden="true"><defs><linearGradient id="g1" x1="0" x2="1"><stop stop-color="#5b2d12"/><stop offset=".52" stop-color="#c4813d"/><stop offset="1" stop-color="#3a1a0a"/></linearGradient></defs><rect x="84" y="20" width="252" height="220" rx="18" fill="url(#g1)"/><rect x="110" y="46" width="200" height="168" rx="90" fill="none" stroke="#2a1208" stroke-width="10" opacity=".65"/><path d="M210 58c38 52 38 95 0 144M142 130c52-38 84-38 136 0M158 78c76 22 112 58 126 132" fill="none" stroke="#2a1208" stroke-width="8" stroke-linecap="round" opacity=".6"/><circle cx="286" cy="134" r="8" fill="#211008"/></svg>`,
  panels: `<svg viewBox="0 0 420 260" aria-hidden="true"><defs><linearGradient id="g2" x1="0" x2="1"><stop stop-color="#7a3f18"/><stop offset=".5" stop-color="#df9a50"/><stop offset="1" stop-color="#4b230e"/></linearGradient></defs><rect x="44" y="38" width="332" height="184" rx="24" fill="url(#g2)"/><rect x="72" y="66" width="276" height="128" rx="18" fill="none" stroke="#2a1208" stroke-width="9" opacity=".55"/><g fill="none" stroke="#2a1208" stroke-width="7" stroke-linecap="round" opacity=".62"><path d="M112 130h196"/><path d="M210 74v112"/><path d="M132 86c34 50 122 50 156 0"/><path d="M132 174c34-50 122-50 156 0"/></g></svg>`,
  arabesque: `<svg viewBox="0 0 420 260" aria-hidden="true"><defs><linearGradient id="g3" x1="0" x2="1"><stop stop-color="#683414"/><stop offset=".5" stop-color="#d8964a"/><stop offset="1" stop-color="#371707"/></linearGradient></defs><rect x="58" y="30" width="304" height="200" rx="32" fill="url(#g3)"/><g fill="none" stroke="#291106" stroke-width="8" stroke-linecap="round" opacity=".64"><path d="M210 54c58 54 58 98 0 152c-58-54-58-98 0-152Z"/><path d="M128 130c54-58 110-58 164 0c-54 58-110 58-164 0Z"/><path d="M98 78c78 10 134 66 144 144"/><path d="M322 78c-78 10-134 66-144 144"/></g><circle cx="210" cy="130" r="18" fill="#2b1207" opacity=".75"/></svg>`,
  furniture: `<svg viewBox="0 0 420 260" aria-hidden="true"><defs><linearGradient id="g4" x1="0" x2="1"><stop stop-color="#5d2d12"/><stop offset=".52" stop-color="#d28b45"/><stop offset="1" stop-color="#3b1a09"/></linearGradient></defs><rect x="58" y="56" width="304" height="148" rx="18" fill="url(#g4)"/><rect x="88" y="82" width="108" height="96" rx="14" fill="none" stroke="#2a1208" stroke-width="8" opacity=".58"/><rect x="224" y="82" width="108" height="96" rx="14" fill="none" stroke="#2a1208" stroke-width="8" opacity=".58"/><path d="M116 130c22-28 48-28 70 0M252 130c22-28 48-28 70 0" fill="none" stroke="#2a1208" stroke-width="7" stroke-linecap="round" opacity=".62"/><rect x="82" y="204" width="256" height="18" rx="9" fill="#2a1208" opacity=".6"/></svg>`,
  signs: `<svg viewBox="0 0 420 260" aria-hidden="true"><defs><linearGradient id="g5" x1="0" x2="1"><stop stop-color="#6a3514"/><stop offset=".55" stop-color="#e0a05a"/><stop offset="1" stop-color="#45200d"/></linearGradient></defs><path d="M72 70h276c18 0 32 14 32 32v56c0 18-14 32-32 32H72c-18 0-32-14-32-32v-56c0-18 14-32 32-32Z" fill="url(#g5)"/><path d="M94 132h232" stroke="#2a1208" stroke-width="10" stroke-linecap="round" opacity=".6"/><path d="M138 104h144M152 160h116" stroke="#2a1208" stroke-width="7" stroke-linecap="round" opacity=".52"/><circle cx="76" cy="130" r="11" fill="#2a1208" opacity=".64"/><circle cx="344" cy="130" r="11" fill="#2a1208" opacity=".64"/></svg>`
};

const models = [
  { title: "باب أندلسي فاخر", category: "doors", categoryName: "أبواب", description: "زخارف هندسية عميقة مناسبة لأبواب الفلل والمداخل الفخمة.", tags: ["STL", "عمق 3D", "قابل للتعديل"] },
  { title: "لوحة جدارية موجة خشبية", category: "panels", categoryName: "لوحات", description: "تدرجات ناعمة لنحت ديكور داخلي بصري يصلح للخلفيات والجدران.", tags: ["Relief", "ديكور", "MDF"] },
  { title: "زخرفة أرابيسك دائرية", category: "arabesque", categoryName: "أرابيسك", description: "نمط عربي متناظر يصلح للأسقف، الفواصل، والواجهات الخشبية.", tags: ["DXF", "Pattern", "متناظر"] },
  { title: "واجهة خزانة كلاسيكية", category: "furniture", categoryName: "أثاث", description: "واجهة أثاث بنقش خفيف مع إطار محفور لتصنيع راقٍ وسريع.", tags: ["أثاث", "CAM", "سريع"] },
  { title: "لافتة محل محفورة", category: "signs", categoryName: "لافتات", description: "تصميم اسم وشعار بنحت بارز مع قابلية إضافة إضاءة خلفية.", tags: ["Logo", "اسم مخصص", "خشب"] },
  { title: "باب ملكي ثلاثي الأبعاد", category: "doors", categoryName: "أبواب", description: "تفاصيل نباتية كلاسيكية بعمق عالي للمشاريع الراقية والفنادق.", tags: ["3D", "فاخر", "تخصيص"] },
  { title: "لوحة آية أو حكمة", category: "panels", categoryName: "لوحات", description: "إطار زخرفي مع مساحة خط عربي أو شعار حسب طلب العميل.", tags: ["خط عربي", "هدية", "STL/DXF"] },
  { title: "فاصل مشربية حديث", category: "arabesque", categoryName: "أرابيسك", description: "نمط متكرر قابل للقص في الخشب أو MDF للفواصل الديكورية.", tags: ["قص", "مشربية", "Modular"] },
  { title: "تفاصيل كرسي وطاولة", category: "furniture", categoryName: "أثاث", description: "نقوش صغيرة مخصصة للأرجل والحواف والمساند الخشبية.", tags: ["تفاصيل", "أثاث", "ناعم"] }
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const modelsGrid = $("#modelsGrid");
const orderDialog = $("#orderDialog");
const modelOrder = $("#modelOrder");
const machineOrder = $("#machineOrder");
const orderSummary = $("#orderSummary");
const summaryText = $("#summaryText");
const whatsappLink = $("#whatsappLink");

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 260);
  }, 2600);
}

function renderModels(filter = "all") {
  const filtered = filter === "all" ? models : models.filter(model => model.category === filter);
  modelsGrid.innerHTML = filtered.map((model, index) => `
    <article class="model-card" style="transition-delay:${Math.min(index * 40, 220)}ms">
      <div class="model-thumb">${modelTemplates[model.category]}</div>
      <div class="model-body">
        <span class="model-kicker">${model.categoryName}</span>
        <h3>${model.title}</h3>
        <p>${model.description}</p>
        <div class="model-meta">${model.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        <button class="btn btn-primary" data-open-order="model" data-model="${model.title}">اطلب هذا الموديل</button>
      </div>
    </article>
  `).join("");
}

function openOrder(type = "model", data = {}) {
  orderSummary.classList.add("hidden");
  const isMachine = type === "machine";
  modelOrder.classList.toggle("hidden", isMachine);
  machineOrder.classList.toggle("hidden", !isMachine);
  $("#dialogEyebrow").textContent = isMachine ? "طلب ماكينة CNC" : "طلب موديل CNC";
  $("#dialogTitle").textContent = isMachine ? "حدد مواصفات الماكينة المطلوبة" : "أرسل تفاصيل الموديل المطلوب";
  if (data.model) $("#selectedModel").value = data.model;
  if (data.package) $("#machinePackage").value = data.package;
  if (typeof orderDialog.showModal === "function") orderDialog.showModal();
}

function formValues(container) {
  return Object.fromEntries(new FormData(container.closest(".dialog-shell")).entries());
}

function buildOrderMessage(type, values) {
  if (type === "model") {
    return `طلب موديل CNC خشب

الاسم: ${values.modelName || "-"}
الهاتف: ${values.modelPhone || "-"}
الموديل: ${values.selectedModel || "موديل خاص"}
المقاس: ${values.modelSize || "-"}
صيغة الملف: ${values.fileFormat || "-"}
التفاصيل: ${values.modelDetails || "-"}

أريد معرفة السعر ومدة الإنجاز.`;
  }
  return `طلب ماكينة CNC كاملة

الاسم: ${values.machineName || "-"}
الهاتف: ${values.machinePhone || "-"}
الباقة/المقاس: ${values.machinePackage || "-"}
مواد العمل: ${values.material || "-"}
الميزانية: ${values.budget || "-"}
المواصفات المطلوبة: ${values.machineDetails || "-"}

أريد عرض سعر ومواصفات كاملة.`;
}

function showOrderSummary(message) {
  summaryText.textContent = message;
  const encoded = encodeURIComponent(message);
  whatsappLink.href = SITE_CONFIG.whatsappNumber
    ? `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`
    : `https://wa.me/?text=${encoded}`;
  orderSummary.classList.remove("hidden");
  orderSummary.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function copyText(text) {
  navigator.clipboard?.writeText(text).then(
    () => showToast("تم نسخ الرسالة بنجاح"),
    () => showToast("انسخ النص يدويًا من الملخص")
  );
}

function makePrompt(data) {
  const size = data.get("size") || "مقاس يحدده العميل";
  const details = data.get("details") || "بدون تفاصيل إضافية";
  return `صمّم موديل CNC لنحت الخشب عالي الجودة.

نوع القطعة: ${data.get("pieceType")}
الطابع الفني: ${data.get("styleType")}
المقاس: ${size}
التفاصيل الخاصة: ${details}

المطلوب:
- تصميم مناسب للنحت على الخشب أو MDF.
- تفاصيل واضحة لا تسبب تكسرًا أثناء التفريز.
- عمق نقش متدرج يعطي إحساسًا ثلاثي الأبعاد.
- حواف نظيفة ومناطق قابلة للصنفرة والتشطيب.
- إخراج يصلح للتحويل إلى STL أو DXF ثم CAM Toolpaths.
- اقتراح بنط CNC مناسبة Roughing و Finishing.

اكتب وصفًا فنيًا دقيقًا، واقترح تحسينات على الشكل قبل التنفيذ.`;
}

function estimatePrice(values) {
  const width = Math.max(Number(values.get("width")) || 0, 10);
  const height = Math.max(Number(values.get("height")) || 0, 10);
  const complexity = Number(values.get("complexity")) || 1;
  const finish = Number(values.get("finish")) || 1;
  const areaM2 = (width * height) / 10000;
  const setup = 2800;
  const price = Math.round((SITE_CONFIG.basePricePerSquareMeter * areaM2 * complexity * finish + setup) / 100) * 100;
  const low = Math.max(Math.round(price * .85 / 100) * 100, 1000);
  const high = Math.round(price * 1.18 / 100) * 100;
  return { low, high, areaM2 };
}

function initNavigation() {
  const header = $(".site-header");
  const toggle = $(".nav-toggle");
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  $$(".main-nav a").forEach(link => link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  }));

  const sections = ["models", "idea", "ai-studio", "machines", "contact"].map(id => document.getElementById(id));
  const links = $$(".main-nav a");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -48% 0px" });
  sections.forEach(section => observer.observe(section));
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  $$(".reveal").forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = $$('[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      let start = 0;
      const duration = 1100;
      const started = performance.now();
      const step = now => {
        const progress = Math.min((now - started) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(start + (target - start) * eased).toLocaleString("ar-DZ");
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: .55 });
  counters.forEach(counter => observer.observe(counter));
}

function initTilt() {
  const cards = $$(".tilt-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - .5;
      const y = (e.clientY - rect.top) / rect.height - .5;
      card.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 7}deg) translateY(-2px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function initCursorGlow() {
  const glow = $(".cursor-glow");
  if (!glow || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.addEventListener("pointermove", e => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

function initEvents() {
  renderModels();

  $$(".filter").forEach(button => {
    button.addEventListener("click", () => {
      $$(".filter").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderModels(button.dataset.filter);
    });
  });

  document.addEventListener("click", event => {
    const opener = event.target.closest("[data-open-order]");
    if (!opener) return;
    openOrder(opener.dataset.openOrder, {
      model: opener.dataset.model,
      package: opener.dataset.package
    });
  });

  $$("[data-order-submit]").forEach(button => {
    button.addEventListener("click", () => {
      const type = button.dataset.orderSubmit;
      const values = formValues(button);
      showOrderSummary(buildOrderMessage(type, values));
    });
  });

  $("#copySummary").addEventListener("click", () => copyText(summaryText.textContent));

  $("#promptForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const prompt = makePrompt(data);
    $("#promptOutput").innerHTML = `
      <h3>برومبت جاهز</h3>
      <div class="prompt-box">${escapeHTML(prompt)}</div>
      <div class="prompt-actions">
        <button class="btn btn-primary" type="button" id="copyPrompt">نسخ البرومبت</button>
        <button class="btn btn-ghost" type="button" id="promptToOrder">حوّله إلى طلب موديل</button>
      </div>
    `;
    $("#copyPrompt").addEventListener("click", () => copyText(prompt));
    $("#promptToOrder").addEventListener("click", () => {
      openOrder("model", { model: data.get("pieceType") });
      const details = $("textarea[name='modelDetails']", orderDialog);
      const size = $("input[name='modelSize']", orderDialog);
      details.value = prompt;
      size.value = data.get("size") || "";
    });
    showToast("تم إنشاء البرومبت");
  });

  $("#estimateForm").addEventListener("submit", event => {
    event.preventDefault();
    const result = estimatePrice(new FormData(event.currentTarget));
    $("#estimateResult").innerHTML = `تقدير مبدئي: من ${result.low.toLocaleString("ar-DZ")} إلى ${result.high.toLocaleString("ar-DZ")} ${SITE_CONFIG.currency}<br><small>المساحة التقريبية: ${result.areaM2.toFixed(2)} م² — السعر النهائي بعد مراجعة الملف والخشب.</small>`;
  });

  $("#contactForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const message = `طلب عام من الموقع\n\nالاسم: ${data.name}\nالهاتف: ${data.phone}\nنوع الطلب: ${data.requestType}\nالرسالة: ${data.message || "-"}`;
    openOrder("model");
    modelOrder.classList.add("hidden");
    machineOrder.classList.add("hidden");
    $("#dialogEyebrow").textContent = "طلب عام";
    $("#dialogTitle").textContent = "ملخص الطلب العام";
    showOrderSummary(message);
  });

  orderDialog.addEventListener("click", event => {
    const rect = orderDialog.getBoundingClientRect();
    const inDialog = rect.top <= event.clientY && event.clientY <= rect.bottom && rect.left <= event.clientX && event.clientX <= rect.right;
    if (!inDialog) orderDialog.close();
  });

  $("#year").textContent = new Date().getFullYear();
}

initNavigation();
initReveal();
initCounters();
initTilt();
initCursorGlow();
initEvents();
