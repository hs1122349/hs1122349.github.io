// Hedi Souki Portfolio - shared site behavior
// Footer year, collapsible "See more" sections, testimonial carousel.

document.addEventListener('DOMContentLoaded', function () {
  var hsYearEl = document.getElementById('hs-year');
  if (hsYearEl) { hsYearEl.textContent = new Date().getFullYear(); }

  document.querySelectorAll('[data-see-more]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wrap = btn.closest('.hs-collapsible');
      var isOpen = wrap.classList.toggle('is-open');
      btn.textContent = isOpen ? 'See less' : 'See more';
      if (!isOpen) {
        wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var track = carousel.querySelector('[data-carousel-slides]');
    var slides = carousel.querySelectorAll('.hs-carousel-slide');
    var dots = carousel.querySelectorAll('[data-carousel-dot]');
    var current = 0;

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === current); });
    }

    var prevBtn = carousel.querySelector('[data-carousel-prev]');
    var nextBtn = carousel.querySelector('[data-carousel-next]');
    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });
    dots.forEach(function (dot, i) { dot.addEventListener('click', function () { goTo(i); }); });

    var startX = null;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 40) { goTo(diff > 0 ? current - 1 : current + 1); }
      startX = null;
    });
  });
});
