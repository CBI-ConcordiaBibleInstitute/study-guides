
const pageLoader = document.getElementById('pageLoader');
const siteContent = document.getElementById('siteContent');
const guideGrid = document.getElementById('guideGrid');
const cards = [...document.querySelectorAll('.guide-card')];
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const searchInput = document.getElementById('guideSearch');
const header = document.querySelector('.site-header');
const progressBar = document.getElementById('scrollProgress');
const heroShape = document.querySelector('.hero-bg-shape');
const yearNode = document.getElementById('year');

window.addEventListener('DOMContentLoaded', () => {
  if (pageLoader && siteContent) {
    window.setTimeout(() => {
      document.body.classList.remove('is-loading');
      document.body.classList.add('is-ready');
      pageLoader.setAttribute('aria-hidden', 'true');
      siteContent.removeAttribute('aria-hidden');
    }, 1500);
  } else {
    document.body.classList.add('is-ready');
  }
});

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
let activeCategory = 'all';

function applyFilters() {
  if (!guideGrid || !searchInput) {
    return;
  }

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

if (searchInput) {
  searchInput.addEventListener('input', applyFilters);
}

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }

  if (header) {
    header.classList.toggle('scrolled', scrollTop > 12);
  }

  if (heroShape) {
    heroShape.style.setProperty('--hero-shift', `${Math.min(scrollTop * 0.18, 60)}px`);
  }
});

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

applyFilters();
