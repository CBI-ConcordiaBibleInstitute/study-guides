const pageLoader = document.getElementById('pageLoader');
const siteContent = document.getElementById('siteContent');

window.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(() => {
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-ready');

    if (pageLoader) {
      pageLoader.setAttribute('aria-hidden', 'true');
    }

    if (siteContent) {
      siteContent.removeAttribute('aria-hidden');
    }
  }, 2000);
});

const guideGrid = document.getElementById('guideGrid');
const cards = [...document.querySelectorAll('.guide-card')];
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const searchInput = document.getElementById('guideSearch');
const header = document.querySelector('.site-header');
const progressBar = document.getElementById('scrollProgress');
const heroShape = document.querySelector('.hero-bg-shape');

let activeCategory = 'all';

const animateObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach((el) => animateObserver.observe(el));

const normalize = (value) => value.toLowerCase().trim();

function applyFilters() {
  const searchTerm = normalize(searchInput.value);

  cards.forEach((card) => {
    const title = normalize(card.dataset.title || '');
    const categories = normalize(card.dataset.category || '').split(' ');

    const matchesCategory = activeCategory === 'all' || categories.includes(activeCategory);
    const matchesSearch = title.includes(searchTerm);

    card.classList.toggle('is-hidden', !(matchesCategory && matchesSearch));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    applyFilters();
  });
});

searchInput.addEventListener('input', applyFilters);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;

  header.classList.toggle('scrolled', scrollTop > 12);

  if (heroShape) {
    heroShape.style.setProperty('--hero-shift', `${Math.min(scrollTop * 0.18, 60)}px`);
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

applyFilters();
