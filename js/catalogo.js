// catalogo.js — filtro real por estado de existencia
(function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.game-card');
  var emptyState = document.getElementById('emptyState');

  function applyFilter(filter) {
    var visibleCount = 0;
    cards.forEach(function (card) {
      var match = filter === 'todos' || card.getAttribute('data-estado') === filter;
      card.classList.toggle('hidden', !match);
      if (match) visibleCount++;
    });
    emptyState.hidden = visibleCount !== 0;
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      applyFilter(btn.getAttribute('data-filter'));
    });
  });
})();
