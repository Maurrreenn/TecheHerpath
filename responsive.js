// app.js
// TechHerPath | Find Your Mentor
// @amechi54322 — Nigeria, 10:39 PM WAT, Nov 15, 2025

document.addEventListener("DOMContentLoaded", () => {
  console.log("app.js loaded — DOM ready");

  // DOM ELEMENTS
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const mobileMenu = document.getElementById('mobileMenu');
  
          // ——— HAMBURGER MENU (Mobile) ———
  if (hamburger && sidebar && mobileMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop) {
        sidebar.classList.toggle('open');
        mobileMenu.classList.
          remove('open');
      } else {
        mobileMenu.classList.toggle('open');
        sidebar.classList.remove('open');
      }
      hamburger.classList.toggle('open', sidebar.classList.contains('open') || mobileMenu.classList.contains('open'));
    });

    document.addEventListener('click', () => {
      sidebar.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });

    sidebar.addEventListener('click', e => e.stopPropagation());
    mobileMenu.addEventListener('click', e => e.stopPropagation());
  }
