(function () {
  const page = 'login';
  document.documentElement.dataset.figmaPage = page;
  if (document.body) document.body.dataset.figmaPage = page;
  if (!document.querySelector('link[data-figma-fidelity]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/figma-fidelity.css?v=20260909';
    link.dataset.figmaFidelity = 'true';
    document.head.appendChild(link);
  }
})();

document.write('<script src="js/login-legacy.js"></' + 'script>');
