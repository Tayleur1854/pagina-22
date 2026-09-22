// nav.js — comportamiento compartido del menú móvil
(function () {
  var btn = document.getElementById('menuBtn');
  var tabs = document.getElementById('tabs');
  if (!btn || !tabs) return;

  btn.addEventListener('click', function () {
    var open = tabs.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
