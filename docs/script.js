// Forêts françaises — interactivité vanilla

(function () {
  'use strict';

  const VIMEO_ID = '688296230';

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  // ──────────────────────────────────────────────────────────────────────
  // Mailto Projection (sujet + corps préremplis)
  // ──────────────────────────────────────────────────────────────────────
  const MAILTO_BODY =
    "Bonjour Camille,\n\n" +
    "Nous souhaitons organiser une projection de votre documentaire \"Forêts françaises, en quête d'avenir\".\n\n" +
    "Structure : \n" +
    "Date envisagée : \n" +
    "Lieu : \n" +
    "Nombre de participants estimé : \n" +
    "Présence du réalisateur en débat souhaitée : oui / non\n\n" +
    "Cordialement,\n";

  const MAILTO_URL =
    'mailto:cgeoffray.pro@gmail.com' +
    '?subject=' + encodeURIComponent("Demande de projection — Forêts françaises, en quête d'avenir") +
    '&body=' + encodeURIComponent(MAILTO_BODY);

  const mailtoBtn = $('#projection-mailto');
  if (mailtoBtn) mailtoBtn.href = MAILTO_URL;

  // ──────────────────────────────────────────────────────────────────────
  // Synopsis expand
  // ──────────────────────────────────────────────────────────────────────
  const synopsisBtn = $('#synopsis-toggle');
  const synopsisLong = $('#synopsis-long');
  if (synopsisBtn && synopsisLong) {
    synopsisBtn.addEventListener('click', () => {
      const isOpen = synopsisBtn.classList.toggle('is-open');
      synopsisLong.classList.toggle('is-open', isOpen);
      synopsisBtn.setAttribute('aria-expanded', String(isOpen));
      $('.expand-toggle__label', synopsisBtn).textContent = isOpen ? 'Replier' : 'Lire la suite';
    });
  }

  // ──────────────────────────────────────────────────────────────────────
  // Lightbox bande-annonce
  // ──────────────────────────────────────────────────────────────────────
  const lightbox = $('#lightbox');
  const lightboxPlayer = $('#lightbox-player');
  let lastFocus = null;

  function openLightbox(e) {
    if (e) e.preventDefault();
    lastFocus = document.activeElement;
    lightboxPlayer.innerHTML =
      '<iframe src="https://player.vimeo.com/video/' + VIMEO_ID +
      '?autoplay=1&title=0&byline=0&portrait=0" ' +
      'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen ' +
      'title="Bande-annonce — Forêts françaises, en quête d\'avenir"></iframe>';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const closeBtn = $('.lightbox__close', lightbox);
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxPlayer.innerHTML = '';
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  $$('[data-open-trailer]').forEach((el) =>
    el.addEventListener('click', openLightbox)
  );
  $$('[data-close-trailer]').forEach((el) =>
    el.addEventListener('click', closeLightbox)
  );
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });

  // ──────────────────────────────────────────────────────────────────────
  // Smooth scroll
  // ──────────────────────────────────────────────────────────────────────
  $$('[data-smooth-scroll]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ──────────────────────────────────────────────────────────────────────
  // Float nav scroll-aware
  // ──────────────────────────────────────────────────────────────────────
  const floatNav = $('#float-nav');
  if (floatNav) {
    const onScroll = () => {
      floatNav.classList.toggle('is-visible', window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ──────────────────────────────────────────────────────────────────────
  // Fade-in on scroll
  // ──────────────────────────────────────────────────────────────────────
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '-40px 0px' }
    );
    $$('.fade-in').forEach((el) => obs.observe(el));
  } else {
    $$('.fade-in').forEach((el) => el.classList.add('is-visible'));
  }

  // ──────────────────────────────────────────────────────────────────────
  // Hero — vidéo en fond avec mitigations
  // Conditions pour activer : desktop (>= 900px), pas mobile,
  // pas de prefers-reduced-motion, pas de Save-Data, pas de slow-2g/2g.
  // Sinon : image fixe en fallback (chargée par défaut).
  // ──────────────────────────────────────────────────────────────────────
  function shouldLoadHeroVideo() {
    if (window.innerWidth < 900) return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    const ua = navigator.userAgent || '';
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) return false;
    const conn = navigator.connection;
    if (conn) {
      if (conn.saveData) return false;
      if (conn.effectiveType && /^(slow-2g|2g|3g)$/.test(conn.effectiveType)) return false;
    }
    return true;
  }

  function injectHeroVideo() {
    const wrap = $('#hero-bg-video-wrap');
    if (!wrap) return;
    const iframe = document.createElement('iframe');
    iframe.src =
      'https://player.vimeo.com/video/' + VIMEO_ID +
      '?background=1&autoplay=1&loop=1&muted=1&dnt=1';
    iframe.setAttribute('allow', 'autoplay; fullscreen');
    iframe.setAttribute('title', 'Bande-annonce — fond');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('tabindex', '-1');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.addEventListener('load', () => {
      // Petit délai pour laisser à la vidéo le temps de démarrer avant le fade-in
      setTimeout(() => wrap.classList.add('is-ready'), 600);
    });
    wrap.appendChild(iframe);
  }

  if (shouldLoadHeroVideo()) {
    // Charger la vidéo après l'événement load pour ne pas bloquer le LCP
    if (document.readyState === 'complete') {
      injectHeroVideo();
    } else {
      window.addEventListener('load', injectHeroVideo, { once: true });
    }
  }

  // ──────────────────────────────────────────────────────────────────────
  // Mentions légales — placeholder discret (à remplir plus tard)
  // ──────────────────────────────────────────────────────────────────────
  $$('[data-mentions]').forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      alert(
        "Mentions légales\n\n" +
        "Éditeur : Camille Geoffray\n" +
        "Contact : cgeoffray.pro@gmail.com\n" +
        "Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA\n" +
        "Site conçu par Hugo Lecuyer — hugolecuyer.fr"
      );
    })
  );
})();
