// =========================================
// Navegação lateral — destaca o dot ativo
// =========================================
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.nav-dot');

function updateNav() {
  let current = 0;
  slides.forEach((slide, i) => {
    const rect = slide.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2) current = i;
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });
}

window.addEventListener('scroll', updateNav);
updateNav();

// =========================================
// Animações de entrada por scroll
// =========================================
const fadeEls = document.querySelectorAll(
  '.project-card, .timeline-item, .big-text, .tag-list, .hero-name, .hero-role'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      // Pequeno delay escalonado para elementos irmãos
      const siblings = [...entry.target.parentElement.children];
      const delay = siblings.indexOf(entry.target) * 80;
      setTimeout(() => entry.target.classList.add('visible'), delay);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));
