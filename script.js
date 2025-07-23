/* Mobile nav toggle */
const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('navbar');
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

/* Simple form handler (replace with Netlify / Formspree etc.) */
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = 'Thanks! I will get back to you soon.';
    this.reset();
});