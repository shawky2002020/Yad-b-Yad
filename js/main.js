(function () {
  const fileName = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const page = fileName.replace(/\.html?$/, '');
  document.documentElement.dataset.figmaPage = page;

  if (document.body) {
    document.body.dataset.figmaPage = page;
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.dataset.figmaPage = page;
    }, { once: true });
  }

  if (!document.querySelector('link[data-figma-fidelity]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/figma-fidelity.css?v=20260909';
    link.dataset.figmaFidelity = 'true';
    document.head.appendChild(link);
  }

  // Legacy carousel markup is not consistent across every page. Keep valid
  // Swipers working, sanitize missing controls, and isolate any malformed
  // instance so one optional carousel cannot break the rest of the document.
  if (typeof window.Swiper === 'function' && !window.Swiper.__yadByYadGuarded) {
    const NativeSwiper = window.Swiper;

    function selectorExists(value) {
      if (!value) return false;
      if (typeof value !== 'string') return true;
      return Boolean(document.querySelector(value));
    }

    function noOpSwiper(element) {
      return {
        el: element || null,
        destroyed: false,
        update: function () {},
        destroy: function () { this.destroyed = true; }
      };
    }

    function SafeSwiper(target, options) {
      const element = typeof target === 'string' ? document.querySelector(target) : target;
      const hasWrapper = element && typeof element.querySelector === 'function' && element.querySelector('.swiper-wrapper');

      if (!element || !hasWrapper) return noOpSwiper(element);

      const safeOptions = options ? { ...options } : {};

      if (safeOptions.navigation) {
        const nextExists = selectorExists(safeOptions.navigation.nextEl);
        const prevExists = selectorExists(safeOptions.navigation.prevEl);
        if (!nextExists || !prevExists) delete safeOptions.navigation;
      }

      if (safeOptions.pagination && !selectorExists(safeOptions.pagination.el)) {
        delete safeOptions.pagination;
      }

      try {
        return new NativeSwiper(target, safeOptions);
      } catch (error) {
        console.warn('Skipped malformed legacy carousel:', target, error && error.message ? error.message : error);
        return noOpSwiper(element);
      }
    }

    Object.setPrototypeOf(SafeSwiper, NativeSwiper);
    SafeSwiper.prototype = NativeSwiper.prototype;
    SafeSwiper.__yadByYadGuarded = true;
    window.Swiper = SafeSwiper;
  }
})();

document.write('<script src="js/figma-runtime.js"></' + 'script>');
document.write('<script src="js/main-legacy.js"></' + 'script>');
