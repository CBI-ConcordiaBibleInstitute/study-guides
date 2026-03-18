from __future__ import annotations

import argparse
from pathlib import Path
from typing import Dict

from guide_library_data import CATEGORY_LABELS, FEATURED_GUIDE_SLUGS, GUIDE_LIBRARY

ROOT = Path(__file__).resolve().parent
GUIDES_DIR = ROOT / 'guides'


def categories(entry: dict) -> str:
    bits = [entry['category']]
    if entry['extra']:
        bits.append(entry['extra'])
    return ' '.join(bits)


def tags(entry: dict) -> str:
    labels = [CATEGORY_LABELS[entry['category']]]
    if entry['extra']:
        labels.extend(CATEGORY_LABELS[x] for x in entry['extra'].split() if x in CATEGORY_LABELS)
    return ''.join(f'<li>{label}</li>' for label in labels)


def episode_payload(entry: dict) -> list[dict[str, str]]:
    book = entry['book']
    theme1, theme2, theme3 = entry['themes']
    path1, path2, path3 = entry['path']
    return [
        {
            'number': '01',
            'title': f'{book} Episode 1: Book Overview',
            'summary': theme1,
            'study': f'Guided reading notes and discussion prompts focused on {path1[:-1].lower()}.',
            'audio': f'Audio podcast outline introducing the major story movement and key background for {book}.',
            'video': f'YouTube teaching video notes highlighting the opening movements and big-picture structure of {book}.',
        },
        {
            'number': '02',
            'title': f'{book} Episode 2: Key Themes',
            'summary': theme2,
            'study': f'Theme tracing worksheet for students and groups built around {path2[:-1].lower()}.',
            'audio': f'Podcast audio segment ideas unpacking the main theological focus and teaching moments in {book}.',
            'video': f'YouTube lesson talking points for a visual walkthrough of central themes in {book}.',
        },
        {
            'number': '03',
            'title': f'{book} Episode 3: Teaching and Application',
            'summary': theme3,
            'study': f'Leader study guide with reflection questions and takeaways connected to {path3[:-1].lower()}.',
            'audio': f'Application-focused podcast audio notes that translate the message of {book} into group conversation.',
            'video': f'YouTube video segment plan for recap, application, and next-step teaching from {book}.',
        },
    ]


def render_shared_header() -> str:
    return '''    <header class="site-header" id="top">
      <div class="container nav-wrap">
        <a class="logo header-brand" href="index.html" aria-label="Bible Study Guide Library home">
          <img src="images/concordia-logo.svg" alt="Concordia Bible Institute logo" class="header-logo" />
          <span class="brand-text">CBI-StudyGuideLibrary</span>
        </a>
        <nav aria-label="Primary">
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="all-guides.html">Study Guides</a></li>
            <li><a href="index.html#about">About</a></li>
            <li><a href="index.html#resources">Resources</a></li>
          </ul>
        </nav>
      </div>
    </header>'''


def render_shared_footer() -> str:
    return '''    <footer class="site-footer">
      <div class="container footer-content">
        <div>
          <h3>Concordia Bible Institute</h3>
          <p>Training disciples through faithful biblical teaching and practical ministry formation.</p>
        </div>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="all-guides.html">Study Guides</a></li>
          <li><a href="index.html#about">About</a></li>
          <li><a href="index.html#resources">Resources</a></li>
        </ul>
        <ul class="social-links" aria-label="Social media links">
          <li><a href="#" aria-label="Instagram">◐</a></li>
          <li><a href="#" aria-label="YouTube">▶</a></li>
          <li><a href="#" aria-label="X">✕</a></li>
        </ul>
      </div>
      <p class="copyright">© <span id="year"></span> Concordia Bible Institute. All rights reserved.</p>
    </footer>'''


def render_card(entry: dict, prefix: str = '', preview: bool = False) -> str:
    preview_class = ' preview-card' if preview else ''
    data_attrs = '' if preview else f' data-title="{entry["book"]} Study Guide" data-category="{categories(entry)}"'
    return f'''          <article class="guide-card fade-up{preview_class}"{data_attrs}>
            <a href="{prefix}guides/{entry['slug']}.html">
              <img src="{prefix}images/{entry['slug']}.svg" alt="Illustration for {entry['book']} study guide" loading="lazy" />
              <div class="card-body">
                <h3>{entry['book']} Study Guide</h3>
                <p>{entry['desc']}</p>
              </div>
            </a>
          </article>'''


def render_index(entries: list[dict]) -> str:
    featured = [entry for entry in entries if entry['slug'] in FEATURED_GUIDE_SLUGS]
    cards = '\n'.join(render_card(entry, preview=True) for entry in featured)
    header = render_shared_header()
    footer = render_shared_footer()
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Discover featured Bible study guides with episode-based teaching resources from Concordia Bible Institute." />
  <title>Bible Study Guide Library</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="is-loading home-page">
  <div class="page-loader" id="pageLoader" role="status" aria-live="polite" aria-label="Loading website">
    <div class="loader-mark" aria-hidden="true">
      <span class="loader-ring loader-ring--outer"></span>
      <span class="loader-ring loader-ring--inner"></span>
      <span class="loader-core"></span>
    </div>
    <p class="loader-text">Loading Concordia Study Library...</p>
  </div>

  <div id="siteContent" aria-hidden="true">
    <div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>
{header}

    <main>
      <section class="hero" id="hero">
        <div class="hero-bg-shape" aria-hidden="true"></div>
        <div class="container hero-content fade-up">
          <p class="eyebrow">Concordia Bible Institute</p>
          <h1>Concordia Bible Institute STUDY GUIDES</h1>
          <p class="subtitle">Browse featured study guides, then move into dedicated episode resources with study notes, podcast audio plans, and YouTube teaching outlines.</p>
          <div class="hero-actions">
            <a class="cta-button" href="all-guides.html">Explore All Study Guides</a>
            <a class="secondary-button" href="#featured-guides">See Featured Guides</a>
          </div>
        </div>
        <a class="scroll-indicator" href="#featured-guides" aria-label="Scroll to featured study guides">
          <span></span>
        </a>
      </section>

      <section class="library section" id="featured-guides">
        <div class="container">
          <div class="section-heading fade-up">
            <p class="eyebrow">Featured</p>
            <h2>Start with a few featured study guides</h2>
            <p>The homepage now highlights a small set of guides first. Use the More button to open the full library and browse every guide and episode collection.</p>
          </div>

          <div class="guide-grid preview-grid">
{cards}
          </div>

          <div class="library-actions fade-up">
            <a class="cta-button" href="all-guides.html">More Study Guides</a>
            <p class="library-note">Open the full study-guide page to search every book, filter categories, and jump into episode-based resources.</p>
          </div>
        </div>
      </section>

      <section class="section pathway-section">
        <div class="container fade-up">
          <div class="section-heading section-heading--narrow">
            <p class="eyebrow">How it Works</p>
            <h2>Each study guide now leads into episodes and media resources</h2>
            <p>Inside every guide page you will find episode groupings with a study-guide track, a podcast audio track, and a separate YouTube video track.</p>
          </div>
          <div class="pathway-grid">
            <article class="pathway-card">
              <h3>1. Study Guide</h3>
              <p>Open a book page to see the overview, key themes, and suggested study path.</p>
            </article>
            <article class="pathway-card">
              <h3>2. Episodes</h3>
              <p>Each book page now includes multiple episodes for step-by-step teaching and discussion.</p>
            </article>
            <article class="pathway-card">
              <h3>3. Audio + YouTube</h3>
              <p>Every episode separates study materials from podcast audio and YouTube video teaching tracks.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section about" id="about">
        <div class="container fade-up">
          <h2>About Concordia Bible Institute</h2>
          <p>Concordia Bible Institute equips believers, small groups, and ministry leaders with biblically grounded teaching, practical discipleship tools, and accessible learning pathways to deepen faith and strengthen biblical literacy.</p>
        </div>
      </section>

      <section class="section resources" id="resources">
        <div class="container fade-up">
          <h2>Concordia Resources</h2>
          <p>Access Concordia Bible Institute study tools, teaching resources, and guided materials designed to support churches, families, and personal study journeys.</p>
        </div>
      </section>
    </main>

{footer}
  </div>

  <script src="script.js"></script>
</body>
</html>
'''


def render_all_guides(entries: list[dict]) -> str:
    cards = '\n'.join(render_card(entry) for entry in entries)
    header = render_shared_header()
    footer = render_shared_footer()
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Browse the complete Bible study guide and episode library from Concordia Bible Institute." />
  <title>All Study Guides</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="guide-page library-page">
  <div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>
{header}

  <main class="guide-main">
    <div class="container">
      <section class="section-heading fade-up section-heading--library-hero">
        <p class="eyebrow">Full Library</p>
        <h1>All Study Guides and Episode Libraries</h1>
        <p>Search the full Concordia collection below, then open any guide to explore its episode-based study guide, podcast audio, and YouTube teaching resources.</p>
      </section>

      <section class="controls fade-up controls--page">
        <label class="search-wrap" for="guideSearch">
          <span class="sr-only">Search guides</span>
          <input id="guideSearch" type="search" placeholder="Search by guide title..." autocomplete="off" />
        </label>

        <div class="category-filters" role="group" aria-label="Guide category filters">
          <button class="filter-btn active" data-category="all">All</button>
          <button class="filter-btn" data-category="old-testament">Old Testament</button>
          <button class="filter-btn" data-category="new-testament">New Testament</button>
          <button class="filter-btn" data-category="wisdom-books">Wisdom Books</button>
          <button class="filter-btn" data-category="gospels">Gospels</button>
          <button class="filter-btn" data-category="prophets">Prophets</button>
        </div>
      </section>

      <section class="guide-grid" id="guideGrid">
{cards}
      </section>
    </div>
  </main>

{footer}

  <script src="script.js"></script>
</body>
</html>
'''


def render_guide(entry: dict) -> str:
    episodes = episode_payload(entry)
    episode_cards = '\n'.join(
        f'''        <article class="episode-card fade-up">
          <p class="episode-number">Episode {episode['number']}</p>
          <h3>{episode['title']}</h3>
          <p>{episode['summary']}</p>
          <ul class="episode-resource-tags">
            <li>Study Guide</li>
            <li>Podcast Audio</li>
            <li>YouTube Video</li>
          </ul>
        </article>'''
        for episode in episodes
    )
    episode_details = '\n'.join(
        f'''        <article class="guide-section-card resource-panel fade-up">
          <h3>{episode['title']}</h3>
          <div class="resource-grid">
            <section class="resource-item">
              <p class="resource-label">Study Guide</p>
              <p>{episode['study']}</p>
            </section>
            <section class="resource-item">
              <p class="resource-label">Podcast Audio</p>
              <p>{episode['audio']}</p>
            </section>
            <section class="resource-item">
              <p class="resource-label">YouTube Video</p>
              <p>{episode['video']}</p>
            </section>
          </div>
        </article>'''
        for episode in episodes
    )
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="{entry['book']} study guide and episode library from Concordia Bible Institute." />
  <title>{entry['book']} Study Guide</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../styles.css" />
</head>
<body class="guide-page">
  <div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>

  <header class="site-header" id="top">
    <div class="container nav-wrap">
      <a class="logo header-brand" href="../index.html" aria-label="Bible Study Guide Library home">
        <img src="../images/concordia-logo.svg" alt="Concordia Bible Institute logo" class="header-logo" />
        <span class="brand-text">CBI-StudyGuideLibrary</span>
      </a>
      <nav aria-label="Primary">
        <ul class="nav-links">
          <li><a href="../index.html">Home</a></li>
          <li><a href="../all-guides.html">Study Guides</a></li>
          <li><a href="../index.html#about">About</a></li>
          <li><a href="../index.html#resources">Resources</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="guide-main">
    <div class="container">
      <section class="guide-hero fade-up">
        <div class="guide-hero-card">
          <img src="../images/{entry['slug']}.svg" alt="Artwork for the {entry['book']} study guide" />
        </div>
        <article class="guide-hero-card guide-hero-copy">
          <p class="eyebrow">Concordia Bible Institute</p>
          <h1>{entry['book']} Study Guide</h1>
          <p>{entry['desc']}</p>
          <ul class="guide-tag-list">{tags(entry)}</ul>
          <div class="guide-actions">
            <a class="cta-button" href="../all-guides.html">Browse All Guides</a>
            <a class="secondary-button" href="#episodes">View Episodes</a>
          </div>
        </article>
      </section>

      <section class="guide-content-grid">
        <article class="guide-section-card fade-up">
          <h2>Overview</h2>
          <p>{entry['book']} invites readers to slow down, notice the movement of the text, and respond to God's character with trust, obedience, and worship. This page is designed as a launching point for personal study, group discussion, podcast planning, and video teaching.</p>
        </article>

        <article class="guide-section-card fade-up" id="study-focus">
          <h2>Key Themes</h2>
          <ol class="guide-list">{''.join(f'<li>{theme}</li>' for theme in entry['themes'])}</ol>
        </article>

        <article class="guide-section-card guide-section-card--wide fade-up">
          <h2>Suggested Study Path</h2>
          <ol class="guide-list">{''.join(f'<li>{step}</li>' for step in entry['path'])}</ol>
        </article>
      </section>

      <section class="episode-section" id="episodes">
        <div class="section-heading fade-up section-heading--narrow">
          <p class="eyebrow">Episodes</p>
          <h2>{entry['book']} episode study guide library</h2>
          <p>Each episode separates the study guide, podcast audio preparation, and YouTube video teaching flow so you can organize content clearly.</p>
        </div>
        <div class="episode-grid">
{episode_cards}
        </div>
      </section>

      <section class="resource-section">
        <div class="section-heading fade-up section-heading--narrow">
          <p class="eyebrow">Episode Resources</p>
          <h2>Study guide, podcast audio, and YouTube video tracks</h2>
        </div>
        <div class="resource-panel-list">
{episode_details}
        </div>
      </section>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container footer-content">
      <div>
        <h3>Concordia Bible Institute</h3>
        <p>Training disciples through faithful biblical teaching and practical ministry formation.</p>
      </div>
      <ul class="footer-links">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../all-guides.html">Study Guides</a></li>
        <li><a href="../index.html#about">About</a></li>
        <li><a href="../index.html#resources">Resources</a></li>
      </ul>
      <ul class="social-links" aria-label="Social media links">
        <li><a href="#" aria-label="Instagram">◐</a></li>
        <li><a href="#" aria-label="YouTube">▶</a></li>
        <li><a href="#" aria-label="X">✕</a></li>
      </ul>
    </div>
    <p class="copyright">© <span id="year"></span> Concordia Bible Institute. All rights reserved.</p>
  </footer>

  <script src="../script.js"></script>
</body>
</html>
'''


def expected_outputs() -> Dict[Path, str]:
    outputs: Dict[Path, str] = {
        ROOT / 'index.html': render_index(GUIDE_LIBRARY),
        ROOT / 'all-guides.html': render_all_guides(GUIDE_LIBRARY),
    }
    for entry in GUIDE_LIBRARY:
        outputs[GUIDES_DIR / f"{entry['slug']}.html"] = render_guide(entry)
    return outputs


def run_check(outputs: Dict[Path, str]) -> int:
    mismatches = []
    for path, expected in outputs.items():
        actual = path.read_text()
        if actual != expected:
            mismatches.append(path.relative_to(ROOT))
    if mismatches:
        print('Generated output is out of date for:')
        for path in mismatches:
            print(f' - {path}')
        return 1
    print(f'Generated guide library matches {len(outputs)} tracked HTML files.')
    return 0


def run_write(outputs: Dict[Path, str]) -> int:
    for path, content in outputs.items():
        path.write_text(content)
    print(f'Wrote {len(outputs)} HTML files from guide_library_data.py.')
    return 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description='Generate or verify the guide library HTML files.')
    parser.add_argument('--check', action='store_true', help='Check whether generated HTML matches the tracked files.')
    parser.add_argument('--write', action='store_true', help='Write generated HTML to disk.')
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    outputs = expected_outputs()
    if args.write:
        return run_write(outputs)
    return run_check(outputs)


if __name__ == '__main__':
    raise SystemExit(main())
