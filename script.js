document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const joinCommunityBtn = document.querySelector('.btn-join-community');

    // Toggle the navigation menu when the hamburger is clicked
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Re-show the Join Community button inside the menu on mobile
        joinCommunityBtn.classList.toggle('active-mobile-btn'); 
    });

    // Close the navigation menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                joinCommunityBtn.classList.remove('active-mobile-btn');
            }
        });
    });
});
