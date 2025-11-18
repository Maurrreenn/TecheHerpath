// app.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!hamburger || !sidebar || !mobileMenu) return;

  // Toggle menu based on screen size
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // ← crucial: stop click from bubbling to document

    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      sidebar.classList.toggle('open');
      mobileMenu.classList.remove('open');
    } else {
      mobileMenu.classList.toggle('open');
      sidebar.classList.remove('open');
    }

    // Update hamburger icon state
    const menuIsOpen = sidebar.classList.contains('open') || mobileMenu.classList.contains('open');
    hamburger.classList.toggle('open', menuIsOpen);
  });

  // Close menus when clicking outside
  document.addEventListener('click', (e) => {
    // Only close if the click is outside the hamburger, sidebar, or mobile menu
    if (!hamburger.contains(e.target) && 
        !sidebar.contains(e.target) && 
        !mobileMenu.contains(e.target)) {
      sidebar.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });

  // Prevent clicks inside sidebar/mobile menu from closing it
  sidebar.addEventListener('click', e => e.stopPropagation());
  mobileMenu.addEventListener('click', e => e.stopPropagation());

  // Optional: close menu on window resize (prevents weird states)
  window.addEventListener('resize', () => {
    sidebar.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});
