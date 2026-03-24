const pageLoader = document.getElementById('pageLoader');
const siteContent = document.getElementById('siteContent');
const guideGrid = document.getElementById('guideGrid');
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const searchInput = document.getElementById('guideSearch');
const header = document.querySelector('.site-header');
const progressBar = document.getElementById('scrollProgress');
const heroShape = document.querySelector('.hero-bg-shape');
const yearNode = document.getElementById('year');
const moreGuidesButton = document.getElementById('moreGuidesButton');
const guideSummaryHeading = document.getElementById('guideSummaryHeading');
const guideSummaryText = document.getElementById('guideSummaryText');
const guideCountValue = document.getElementById('guideCountValue');

const FEATURED_LIMIT = 6;

const guideDefinitions = [
  { slug: 'genesis', title: 'Genesis Study Guide', description: 'Beginnings, covenant promises, and the God who forms a people.', image: 'images/genesis.svg', href: 'guides/genesis.html', categories: ['old-testament'] },
  { slug: 'exodus', title: 'Exodus Study Guide', description: 'Deliverance, covenant, and God\'s presence with a redeemed people.', image: 'images/exodus.svg', href: 'guides/exodus.html', categories: ['old-testament'] },
  { slug: 'leviticus', title: 'Leviticus Study Guide', description: 'Holiness, worship, and learning to live as God\'s distinct people.', image: 'images/leviticus.svg', href: 'guides/leviticus.html', categories: ['old-testament'] },
  { slug: 'numbers', title: 'Numbers Study Guide', description: 'Wilderness testing, faithful leadership, and God\'s steady guidance.', image: 'images/numbers.svg', href: 'guides/numbers.html', categories: ['old-testament'] },
  { slug: 'psalms', title: 'Psalms Study Guide', description: 'Prayers, poetry, and worship that shape a life with God.', image: 'images/psalms.svg', href: 'guides/psalms.html', categories: ['old-testament', 'wisdom-books'] },
  { slug: 'ecclesiastes', title: 'Ecclesiastes Study Guide', description: 'Wisdom for life\'s mysteries, limits, and lasting meaning in God.', image: 'images/ecclesiastes.svg', href: 'guides/ecclesiastes.html', categories: ['old-testament', 'wisdom-books'] },
  { slug: 'song-of-songs', title: 'Song of Songs Study Guide', description: 'Love, delight, and the beauty of covenant affection.', image: 'images/song-of-songs.svg', href: 'guides/song-of-songs.html', categories: ['old-testament', 'wisdom-books'] },
  { slug: 'hosea', title: 'Hosea Study Guide', description: 'Covenant love, unfaithfulness, and God\'s relentless compassion.', image: 'images/hosea.svg', href: 'guides/hosea.html', categories: ['old-testament', 'Test1'] },
  { slug: 'joel', title: 'Joel Study Guide', description: 'Repentance, the day of the Lord, and the promise of God\'s Spirit.', image: 'images/joel.svg', href: 'guides/joel.html', categories: ['old-testament', 'Test1'] },
  { slug: 'amos', title: 'Amos Study Guide', description: 'Justice, worship, and the prophetic call to righteousness.', image: 'images/amos.svg', href: 'guides/amos.html', categories: ['old-testament', 'Test1'] },
  { slug: 'obadiah', title: 'Obadiah Study Guide', description: 'Pride, justice, and the Lord\'s rule over every nation.', image: 'images/obadiah.svg', href: 'guides/obadiah.html', categories: ['old-testament', 'Test1'] },
  { slug: 'jonah', title: 'Jonah Study Guide', description: 'Understanding God\'s mercy and Jonah\'s struggle with grace.', image: 'images/jonah.svg', href: 'guides/jonah.html', categories: ['old-testament', 'Test1'] },
  { slug: 'micah', title: 'Micah Study Guide', description: 'Justice, mercy, and hope for God\'s shepherd-king.', image: 'images/micah.svg', href: 'guides/micah.html', categories: ['old-testament', 'Test1'] },
  { slug: 'nahum', title: 'Nahum Study Guide', description: 'Judgment against violence and the comfort of God\'s justice.', image: 'images/nahum.svg', href: 'guides/nahum.html', categories: ['old-testament', 'Test1'] },
  { slug: 'habakkuk', title: 'Habakkuk Study Guide', description: 'Honest questions, steadfast faith, and rejoicing in God.', image: 'images/habakkuk.svg', href: 'guides/habakkuk.html', categories: ['old-testament', 'Test1'] },
  { slug: 'zephaniah', title: 'Zephaniah Study Guide', description: 'The day of the Lord, purification, and songs of restoration.', image: 'images/zephaniah.svg', href: 'guides/zephaniah.html', categories: ['old-testament', 'Test1'] },
  { slug: 'haggai', title: 'Haggai Study Guide', description: 'Renewed priorities, courageous rebuilding, and future glory.', image: 'images/haggai.svg', href: 'guides/haggai.html', categories: ['old-testament', 'Test1'] },
  { slug: 'zechariah', title: 'Zechariah Study Guide', description: 'Visions, repentance, and hope in God\'s coming king.', image: 'images/zechariah.svg', href: 'guides/zechariah.html', categories: ['old-testament', 'Test1'] },
  { slug: 'malachi', title: 'Malachi Study Guide', description: 'Covenant faithfulness, wholehearted worship, and promised renewal.', image: 'images/malachi.svg', href: 'guides/malachi.html', categories: ['old-testament', 'Test1'] },
  { slug: 'romans', title: 'Romans Study Guide', description: 'Grace, faith, and the gospel that transforms communities.', image: 'images/romans.svg', href: 'guides/romans.html', categories: ['new-testament'] },
  { slug: 'revelation', title: 'Revelation Study Guide', description: 'Hope, endurance, and the victory of the Lamb over evil.', image: 'images/revelation.svg', href: 'guides/revelation.html', categories: ['new-testament'] },
  { slug: 'proverbs', title: 'Proverbs Study Guide', description: 'Ancient wisdom for discernment, character, and daily choices.', image: 'images/proverbs.svg', href: 'guides/proverbs.html', categories: ['old-testament', 'wisdom-books'] },
  { slug: 'top40texts', title: 'Top-40 Texts Study Guide', description: 'Hope, justice, and the vision of God\'s coming kingdom.', image: 'images/toptexts.svg', href: 'guides/toptexts.html', categories: ['old-testament', 'Test1'] },
  { slug: 'matthew', title: 'Matthew Study Guide', description: 'Following Jesus as King in the fulfillment story of Israel.', image: 'images/matthew.svg', href: 'guides/matthew.html', categories: ['new-testament', 'gospels'] },
  { slug: 'mark', title: 'Mark Study Guide', description: 'A fast-paced journey through Jesus\' mission and sacrifice.', image: 'images/mark.svg', href: 'guides/mark.html', categories: ['new-testament', 'gospels'] },
  { slug: 'john', title: 'John Study Guide', description: 'Encountering Jesus through signs, belief, and new life.', image: 'images/john.svg', href: 'guides/john.html', categories: ['new-testament', 'gospels'] }
];

const studyGuides = guideDefinitions.map((guide) => ({
  ...guide,
  searchIndex: [guide.title, guide.description, ...guide.categories].join(' ').toLowerCase(),
  episodeCount: guide.slug === 'genesis' ? 4 : 3,
  level: guide.categories.includes('new-testament') ? 'Intermediate' : 'Foundational',
  duration: guide.slug === 'genesis' || guide.slug === 'romans' ? '6-Week Path' : '4-Week Path'
}));

let activeCategory = 'all';
let isExpanded = false;

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

const normalize = (value) => value.toLowerCase().trim();

function observeFadeUps() {
  document.querySelectorAll('.fade-up').forEach((el) => {
    if (!el.classList.contains('in-view')) {
      animateObserver.observe(el);
    }
  });
}

function createCategoryBadges(categories) {
  return categories
    .map((category) => `<li>${category.replace(/-/g, ' ')}</li>`)
    .join('');
}

function createGuideMarkup(guide) {
  return `
    <article class="guide-card fade-up" data-title="${guide.title}" data-category="${guide.categories.join(' ')}">
      <a class="guide-card__button" href="${guide.href}" aria-label="Open full guide page for ${guide.title}">
        <img src="${guide.image}" alt="Illustration for ${guide.title}" loading="lazy" />
        <div class="card-body">
          <div class="card-heading-row">
            <h3>${guide.title}</h3>
            <span class="episode-count">${guide.episodeCount} Sections</span>
          </div>
          <p>${guide.description}</p>
          <div class="card-meta">
            <span>${guide.level}</span>
            <span>${guide.duration}</span>
          </div>
          <ul class="card-tags">${createCategoryBadges(guide.categories)}</ul>
          <span class="guide-card__link">Open full guide page</span>
        </div>
      </a>
    </article>
  `;
}

function getFilteredGuides() {
  const searchTerm = normalize(searchInput?.value || '');

  return studyGuides.filter((guide) => {
    const matchesCategory = activeCategory === 'all' || guide.categories.includes(activeCategory);
    const matchesSearch = !searchTerm || guide.searchIndex.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
}

function renderGuides() {
  if (!guideGrid) {
    return;
  }

  const filteredGuides = getFilteredGuides();
  const shouldShowAll = isExpanded || normalize(searchInput?.value || '').length > 0 || activeCategory !== 'all';
  const visibleGuides = shouldShowAll ? filteredGuides : filteredGuides.slice(0, FEATURED_LIMIT);

  guideGrid.innerHTML = visibleGuides.length
    ? visibleGuides.map(createGuideMarkup).join('')
    : '<p class="empty-state fade-up">No study guides match that search yet. Try a different title or filter.</p>';

  if (guideSummaryHeading && guideSummaryText) {
    if (!filteredGuides.length) {
      guideSummaryHeading.textContent = 'No study guides found';
      guideSummaryText.textContent = 'Try clearing the search or switching back to All categories.';
    } else if (shouldShowAll) {
      guideSummaryHeading.textContent = `Showing ${filteredGuides.length} study guides`;
      guideSummaryText.textContent = 'Each card now opens directly to its own full guide page.';
    } else {
      guideSummaryHeading.textContent = `Showing ${visibleGuides.length} featured study guides`;
      guideSummaryText.textContent = `Use More to reveal ${filteredGuides.length - visibleGuides.length} additional study guides, then open any full guide page directly.`;
    }
  }

  if (moreGuidesButton) {
    const hasMore = filteredGuides.length > FEATURED_LIMIT && !shouldShowAll;
    moreGuidesButton.hidden = !filteredGuides.length || (filteredGuides.length <= FEATURED_LIMIT && !isExpanded);
    moreGuidesButton.textContent = shouldShowAll && isExpanded ? 'Show Fewer Guides' : `More Study Guides (${Math.max(filteredGuides.length - FEATURED_LIMIT, 0)})`;
    moreGuidesButton.setAttribute('aria-expanded', String(isExpanded));
    moreGuidesButton.classList.toggle('is-hidden', !hasMore && !isExpanded && activeCategory === 'all' && !normalize(searchInput?.value || '').length);
  }

  observeFadeUps();
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderGuides();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', renderGuides);
}

if (moreGuidesButton) {
  moreGuidesButton.addEventListener('click', () => {
    isExpanded = !isExpanded;
    renderGuides();
  });
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

document.querySelectorAll('[data-video-trigger]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const targetId = trigger.getAttribute('data-video-trigger');
    const button = targetId ? document.getElementById(targetId) : null;
    if (button && button.matches('[data-youtube-embed]')) {
      window.setTimeout(() => button.click(), 150);
    }
  });
});

document.querySelectorAll('[data-youtube-embed]').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.loaded === 'true') {
      return;
    }

    const src = button.getAttribute('data-youtube-embed');
    if (!src) {
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.className = 'embedded-video-frame';
    iframe.src = `${src}&autoplay=1&rel=0`;
    iframe.title = 'Concordia Bible Institute YouTube player';
    iframe.loading = 'lazy';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;

    button.replaceWith(iframe);
    button.dataset.loaded = 'true';
  });
});

observeFadeUps();
renderGuides();

if (guideCountValue) {
  guideCountValue.textContent = String(studyGuides.length);
}
