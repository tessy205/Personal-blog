// Select toggle button and nav links
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Add click event to toggle visibility
toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
