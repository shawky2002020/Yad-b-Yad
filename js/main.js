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
})();

document.write('<script src="js/figma-runtime.js"></' + 'script>');
document.write('<script src="js/main-legacy.js"></' + 'script>');
