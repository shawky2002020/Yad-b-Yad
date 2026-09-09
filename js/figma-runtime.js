document.addEventListener('DOMContentLoaded', function () {
  if (document.body.dataset.figmaPage !== 'index') return;

  const form = document.querySelector('.fast-pay .donation-form');
  if (!form || form.dataset.figmaReimplemented === 'true') return;

  form.dataset.figmaReimplemented = 'true';
  form.innerHTML = `
    <form class="figma-quick-donation" novalidate>
      <h2 class="figma-quick-title">التبرع السريع</h2>

      <div class="figma-quick-row">
        <label class="figma-pill-field">
          <span class="figma-field-label">الاسم الاول (اختياري)</span>
          <input type="text" name="firstName" autocomplete="given-name" placeholder="منير" />
        </label>
        <label class="figma-pill-field">
          <span class="figma-field-label">الاسم الاخير (اختياري)</span>
          <input type="text" name="lastName" autocomplete="family-name" placeholder="فرج الله" />
        </label>
      </div>

      <div class="figma-quick-row">
        <label class="figma-pill-field">
          <span class="figma-field-label">رقم الجوال (اختياري)</span>
          <input type="tel" name="phone" inputmode="tel" autocomplete="tel" placeholder="+966 56 919 2308" />
        </label>
        <label class="figma-pill-field">
          <span class="figma-field-label">البريد الالكتروني (اختياري)</span>
          <input type="email" name="email" autocomplete="email" placeholder="munerfarajalla@gmail.com" />
        </label>
      </div>

      <div class="figma-quick-row">
        <label class="figma-pill-field figma-select-field">
          <span class="figma-field-label">قيمة التبرع بالريال</span>
          <input type="number" name="amount" inputmode="decimal" min="1" step="0.01" placeholder="1’500.95" />
          <span class="figma-field-suffix">ر.س</span>
        </label>
        <label class="figma-pill-field figma-select-field">
          <span class="figma-field-label">اختر فئة التبرع (اختياري)</span>
          <select name="category" aria-label="اختر فئة التبرع">
            <option>زكاة الماء</option>
            <option>الإطعام</option>
            <option>السكن</option>
            <option>الكسوة</option>
          </select>
          <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
        </label>
      </div>

      <label class="figma-pill-field figma-country-field">
        <span class="figma-field-label">البلد (اختياري)</span>
        <select name="country" aria-label="البلد">
          <option>المملكة العربية السعودية</option>
          <option>مصر</option>
          <option>الإمارات العربية المتحدة</option>
          <option>الكويت</option>
          <option>البحرين</option>
        </select>
        <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
      </label>

      <h3 class="figma-payment-heading">اختر طريقة الدفع</h3>
      <div class="figma-payment-grid" role="radiogroup" aria-label="طريقة الدفع">
        <button type="button" class="figma-pay-method apple selected" data-payment="apple" aria-pressed="true">
          <span>ابل باي</span><i class="fa-brands fa-apple" aria-hidden="true"></i>
        </button>
        <button type="button" class="figma-pay-method google" data-payment="google" aria-pressed="false">
          <span>قوقل باي</span><i class="fa-brands fa-google" aria-hidden="true"></i>
        </button>
        <button type="button" class="figma-pay-method visa" data-payment="visa" aria-pressed="false">
          <span>فيزا</span><strong>VISA</strong>
        </button>
        <button type="button" class="figma-pay-method mastercard" data-payment="mastercard" aria-pressed="false">
          <span>ماستركارد</span><i class="fa-regular fa-credit-card" aria-hidden="true"></i>
        </button>
      </div>

      <button type="submit" class="figma-quick-submit">حفظ التعديلات</button>
    </form>
  `;

  const methods = form.querySelectorAll('.figma-pay-method');
  methods.forEach(function (method) {
    method.addEventListener('click', function () {
      methods.forEach(function (item) {
        const active = item === method;
        item.classList.toggle('selected', active);
        item.setAttribute('aria-pressed', String(active));
      });
    });
  });

  const quickForm = form.querySelector('.figma-quick-donation');
  quickForm.addEventListener('submit', function (event) {
    event.preventDefault();
  });
});
