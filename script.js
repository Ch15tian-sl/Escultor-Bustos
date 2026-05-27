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

/* ---- Video del artesano: un solo toque en móvil ---- */
(function initVideo() {
  const video   = document.getElementById('artesanoVideo');
  const overlay = document.getElementById('artesanoOverlay');
  if (!video || !overlay) return;

  function playVideo() {
    // Asegura que el video esté en estado reproducible y lanza play()
    video.muted = true;          // obligatorio en iOS/Android sin interacción previa
    const promise = video.play();
    if (promise !== undefined) {
      promise
        .then(() => { overlay.classList.add('hidden'); })
        .catch(() => {
          // Si el navegador bloquea autoplay, el overlay sigue visible
          overlay.classList.remove('hidden');
        });
    } else {
      overlay.classList.add('hidden');
    }
  }

  // Un único listener — touchend evita el doble-evento en móvil
  overlay.addEventListener('touchend', function(e) {
    e.preventDefault();
    playVideo();
  });

  overlay.addEventListener('click', function(e) {
    e.preventDefault();
    playVideo();
  });

  // Al pausar (nativo), vuelve a mostrar el overlay
  video.addEventListener('pause', function() {
    if (!video.ended) overlay.classList.remove('hidden');
  });
})();
