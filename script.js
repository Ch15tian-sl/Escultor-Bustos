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

/* ---- Botón de play del artesano ---- */
const playBtn = document.querySelector('.artesano__play');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    // Reemplaza la URL con la de tu video real:
    // window.open('https://youtube.com/watch?v=TU_VIDEO_ID', '_blank');
    alert('Próximamente: video de Carlos Bustos en su taller.');
  });
}
