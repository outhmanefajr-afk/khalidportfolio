// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple contact form alert
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Merci pour votre message ! Nous vous contacterons bientôt.');
  this.reset();
});
