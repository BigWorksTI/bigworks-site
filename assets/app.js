// BigWorks - comportamento do site. Sem framework, sem build.
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Nav ganha borda depois que a pagina rola.
  var nav = document.querySelector('.nav');
  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Revelar secoes conforme entram na tela.
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Filtro de produtos por categoria.
  var grid = document.querySelector('[data-grid]');
  var empty = document.querySelector('[data-empty]');
  var filterBtns = document.querySelectorAll('[data-filter]');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.getAttribute('data-filter');
      filterBtns.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
      var visible = 0;
      grid.querySelectorAll('[data-cat]').forEach(function (card) {
        var own = card.getAttribute('data-cat');
        var show = cat === 'all' || own === cat || own === 'all';
        card.classList.toggle('is-hidden', !show);
        if (show) {
          visible++;
          card.classList.add('in');
        }
      });
      empty.hidden = visible > 0;
    });
  });

  // Relogio do painel de status.
  var clock = document.querySelector('[data-clock]');
  function tick() {
    var d = new Date();
    clock.textContent = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }
  tick();
  setInterval(tick, 30000);

  // Log de deploy digitado linha a linha.
  var log = document.querySelector('[data-log]');
  if (log && !reduceMotion) {
    var caret = log.querySelector('.caret');
    var lines = log.textContent.replace(/\s+$/, '').split('\n');
    log.textContent = '';
    log.appendChild(caret);
    var li = 0;
    function typeLine() {
      if (li >= lines.length) { return; }
      var text = lines[li] + '\n';
      var ci = 0;
      var node = document.createTextNode('');
      log.insertBefore(node, caret);
      var iv = setInterval(function () {
        node.textContent += text.charAt(ci++);
        if (ci >= text.length) {
          clearInterval(iv);
          li++;
          setTimeout(typeLine, 260);
        }
      }, 22);
    }
    setTimeout(typeLine, 600);
  }

  // Ano do rodape.
  var year = document.querySelector('[data-year]');
  if (year) { year.textContent = String(new Date().getFullYear()); }
})();
