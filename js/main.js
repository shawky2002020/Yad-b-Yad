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

  // Legacy pages contain a few Swiper containers without the required
  // .swiper-wrapper child. Swiper throws while measuring those containers,
  // which previously surfaced as a page-level getComputedStyle exception.
  // Keep valid carousels untouched and gracefully skip only malformed ones.
  if (typeof window.Swiper === 'function' && !window.Swiper.__yadByYadGuarded) {
    const NativeSwiper = window.Swiper;
    function SafeSwiper(target, options) {
      const element = typeof target === 'string' ? document.querySelector(target) : target;
      const hasWrapper = element && typeof element.querySelector === 'function' && element.querySelector('.swiper-wrapper');

      if (!element || !hasWrapper) {
        return {
          el: element || null,
          destroyed: false,
          update: function () {},
          destroy: function () { this.destroyed = true; }
        };
      }

      return new NativeSwiper(target, options);
    }

    Object.setPrototypeOf(SafeSwiper, NativeSwiper);
    SafeSwiper.prototype = NativeSwiper.prototype;
    SafeSwiper.__yadByYadGuarded = true;
    window.Swiper = SafeSwiper;
  }
})();

document.write('<script src="js/figma-runtime.js"></' + 'script>');
document.write('<script src="js/main-legacy.js"></' + 'script>');
