const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.classList.toggle('open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Zamknij menu' : 'Otwórz menu');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Otwórz menu');
    });
  });
}

const revealedItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealedItems.forEach((item) => {
    item.style.opacity = '0';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'rise .65s both';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealedItems.forEach((item) => observer.observe(item));
}
