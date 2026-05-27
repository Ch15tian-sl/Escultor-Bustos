/* ===========================
   CARLOS BUSTOS — ARTESANO
   script.js
   =========================== */

/* ---- Animaciones de entrada al hacer scroll ---- */
(function initFadeIn() {
  const selectors = [
    '.hero__text',
    '.hero__image',
    '.obras__header',
    '.obras__carousel-bs',
    '.artesano__media',
    '.artesano__content',
  ];

  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.classList.add('fade-in');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
})();

/* ---- Video del artesano ---- */
const artesanoVideo = document.querySelector('.artesano__video');
if (artesanoVideo) {
  artesanoVideo.addEventListener('click', () => {
    if (artesanoVideo.paused) {
      artesanoVideo.play();
    } else {
      artesanoVideo.pause();
    }
  });
}
