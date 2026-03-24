const guides = [
  { slug: 'genesis', title: 'Genesis Study Guide', description: 'Beginnings, covenant promise, and God’s plan of redemption.', image: 'images/genesis.svg', href: 'guides/genesis.html', category: 'Old Testament' },
  { slug: 'exodus', title: 'Exodus Study Guide', description: 'Deliverance, covenant, and worship with God’s people.', image: 'images/exodus.svg', href: 'guides/exodus.html', category: 'Old Testament' },
  { slug: 'leviticus', title: 'Leviticus Study Guide', description: 'Holiness, sacrifice, and life set apart before God.', image: 'images/leviticus.svg', href: 'guides/leviticus.html', category: 'Old Testament' },
  { slug: 'numbers', title: 'Numbers Study Guide', description: 'Wilderness lessons, leadership, and God’s faithfulness.', image: 'images/numbers.svg', href: 'guides/numbers.html', category: 'Old Testament' },
  { slug: 'psalms', title: 'Psalms Study Guide', description: 'Poetry and prayer for worship, lament, and trust.', image: 'images/psalms.svg', href: 'guides/psalms.html', category: 'Old Testament' },
  { slug: 'proverbs', title: 'Proverbs Study Guide', description: 'Practical wisdom for godly decisions and character.', image: 'images/proverbs.svg', href: 'guides/proverbs.html', category: 'Old Testament' },
  { slug: 'ecclesiastes', title: 'Ecclesiastes Study Guide', description: 'Finding meaning and reverence amid life’s mystery.', image: 'images/ecclesiastes.svg', href: 'guides/ecclesiastes.html', category: 'Old Testament' },
  { slug: 'song-of-songs', title: 'Song of Songs Study Guide', description: 'Love, beauty, and covenant delight.', image: 'images/song-of-songs.svg', href: 'guides/song-of-songs.html', category: 'Old Testament' },
  { slug: 'hosea', title: 'Hosea Study Guide', description: 'God’s faithful love toward an unfaithful people.', image: 'images/hosea.svg', href: 'guides/hosea.html', category: 'Old Testament' },
  { slug: 'joel', title: 'Joel Study Guide', description: 'Repentance, restoration, and the Spirit’s promise.', image: 'images/joel.svg', href: 'guides/joel.html', category: 'Old Testament' },
  { slug: 'amos', title: 'Amos Study Guide', description: 'Justice, righteousness, and true worship.', image: 'images/amos.svg', href: 'guides/amos.html', category: 'Old Testament' },
  { slug: 'obadiah', title: 'Obadiah Study Guide', description: 'The Lord’s justice over proud nations.', image: 'images/obadiah.svg', href: 'guides/obadiah.html', category: 'Old Testament' },
  { slug: 'jonah', title: 'Jonah Study Guide', description: 'Mercy, mission, and the heart of God for nations.', image: 'images/jonah.svg', href: 'guides/jonah.html', category: 'Old Testament' },
  { slug: 'micah', title: 'Micah Study Guide', description: 'Act justly, love mercy, walk humbly with God.', image: 'images/micah.svg', href: 'guides/micah.html', category: 'Old Testament' },
  { slug: 'nahum', title: 'Nahum Study Guide', description: 'The comfort of God’s justice and power.', image: 'images/nahum.svg', href: 'guides/nahum.html', category: 'Old Testament' },
  { slug: 'habakkuk', title: 'Habakkuk Study Guide', description: 'Faith and joy in the middle of hard questions.', image: 'images/habakkuk.svg', href: 'guides/habakkuk.html', category: 'Old Testament' },
  { slug: 'zephaniah', title: 'Zephaniah Study Guide', description: 'Judgment, renewal, and songs of salvation.', image: 'images/zephaniah.svg', href: 'guides/zephaniah.html', category: 'Old Testament' },
  { slug: 'haggai', title: 'Haggai Study Guide', description: 'Refocus your priorities and rebuild with courage.', image: 'images/haggai.svg', href: 'guides/haggai.html', category: 'Old Testament' },
  { slug: 'zechariah', title: 'Zechariah Study Guide', description: 'Visions of hope and the coming king.', image: 'images/zechariah.svg', href: 'guides/zechariah.html', category: 'Old Testament' },
  { slug: 'malachi', title: 'Malachi Study Guide', description: 'Covenant faithfulness and hearts turned to God.', image: 'images/malachi.svg', href: 'guides/malachi.html', category: 'Old Testament' },
  { slug: 'matthew', title: 'Matthew Study Guide', description: 'Jesus the King and fulfillment of Scripture.', image: 'images/matthew.svg', href: 'guides/matthew.html', category: 'New Testament' },
  { slug: 'mark', title: 'Mark Study Guide', description: 'Fast-paced gospel witness to Christ’s mission.', image: 'images/mark.svg', href: 'guides/mark.html', category: 'New Testament' },
  { slug: 'john', title: 'John Study Guide', description: 'Signs, belief, and life in Christ.', image: 'images/john.svg', href: 'guides/john.html', category: 'New Testament' },
  { slug: 'romans', title: 'Romans Study Guide', description: 'The gospel, grace, and transformed community.', image: 'images/romans.svg', href: 'guides/romans.html', category: 'New Testament' },
  { slug: 'revelation', title: 'Revelation Study Guide', description: 'Hope, endurance, and victory of the Lamb.', image: 'images/revelation.svg', href: 'guides/revelation.html', category: 'New Testament' },
  { slug: 'toptexts', title: 'Top-40 Texts Study Guide', description: 'Essential passages for biblical confidence.', image: 'images/toptexts.svg', href: 'guides/toptexts.html', category: 'Old Testament' }
];

const valueProps = [
  { id: '01', title: 'Premium Experience', body: 'Motion-rich sections, smooth interactions, and a polished visual hierarchy inspired by modern fintech landing pages.' },
  { id: '02', title: 'Faster Discovery', body: 'Visitors can instantly search and filter your complete guide catalog from one high-impact section.' },
  { id: '03', title: 'Mobile First', body: 'Every panel, card, and CTA is responsive so the same visual quality carries across devices.' },
  { id: '04', title: 'Brand Accurate', body: 'Color palette tuned to deep burgundy/maroon, gold accents, and dark navy backgrounds.' }
];

const marqueeItems = ['Genesis', 'Exodus', 'Psalms', 'Proverbs', 'Matthew', 'John', 'Romans', 'Revelation'];

function useScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
}

function App() {
  const [query, setQuery] = React.useState('');
  const [filter, setFilter] = React.useState('All');
  const progress = useScrollProgress();

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    return guides.filter((guide) => {
      const matchesFilter = filter === 'All' || guide.category === filter;
      const text = `${guide.title} ${guide.description} ${guide.category}`.toLowerCase();
      return matchesFilter && (!q || text.includes(q));
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070c1e] text-slate-100">
      <div className="fixed left-0 top-0 z-[9999] h-1.5 bg-gradient-to-r from-[#6f1027] via-[#b88a44] to-[#0f2747]" style={{ width: `${progress}%` }} />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#6f1027]/55 blur-3xl animate-pulse-soft" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-[#0f2747]/50 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#b88a44]/20 blur-3xl animate-pulse-soft" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#b88a44]/20 bg-[#070c1e]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-[min(1200px,94%)] items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <img src="images/concordia-logo.svg" alt="Concordia Bible Institute logo" className="h-12 w-12 rounded-full ring-2 ring-[#b88a44]/70" />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#d5b57c]">Concordia Bible Institute</p>
              <p className="text-sm font-bold sm:text-base">Study Guide Library</p>
            </div>
          </a>
          <div className="hidden gap-2 sm:flex">
            <a href="#guides" className="rounded-full border border-[#b88a44]/60 bg-[#6f1027]/35 px-4 py-2 text-sm font-semibold text-[#fde9c4] transition hover:-translate-y-0.5 hover:bg-[#6f1027]/65">Guides</a>
            <a href="https://www.youtube.com/@concordiabible" target="_blank" rel="noreferrer" className="rounded-full border border-[#365277] bg-[#0f2747]/50 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-[#b88a44]">Podcasts</a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-[min(1200px,94%)] gap-10 py-20 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="inline-flex rounded-full border border-[#b88a44]/55 bg-[#b88a44]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#f2d7a2]">High-end motion style</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">A premium scrolling experience with your brand colors.</h1>
            <p className="max-w-xl text-lg text-slate-300">Inspired by the reference style, this redesign uses layered gradients, modern cards, sticky navigation, progress tracking, and rich section rhythm—while staying true to your maroon, gold, and navy identity.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#guides" className="rounded-full bg-gradient-to-r from-[#6f1027] via-[#8a1d35] to-[#b88a44] px-6 py-3 font-bold text-white shadow-glow transition hover:-translate-y-1">Open Study Guides</a>
              <a href="#features" className="rounded-full border border-[#d4b072]/70 bg-[#0f2747]/60 px-6 py-3 font-semibold text-[#fce7c1] transition hover:border-[#f3d39a]">View Features</a>
            </div>
          </div>

          <div className="animate-fade-up rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['26+', 'Guides available'],
                ['Live', 'Search + filters'],
                ['Smooth', 'Scroll interactions'],
                ['Branded', 'Maroon • Gold • Navy']
              ].map(([value, label]) => (
                <article key={label} className="rounded-2xl border border-white/10 bg-[#0f2747]/40 p-5 transition hover:-translate-y-1 hover:border-[#b88a44]/80">
                  <p className="text-3xl font-black text-[#f2d7a2]">{value}</p>
                  <p className="text-sm text-slate-300">{label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#081227]/70 py-6">
          <div className="mx-auto w-[min(1200px,94%)] overflow-hidden">
            <div className="flex min-w-max animate-marquee gap-3">
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <span key={`${item}-${idx}`} className="rounded-full border border-[#b88a44]/45 bg-[#6f1027]/35 px-4 py-2 text-sm font-semibold text-[#f8e2b8]">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-[min(1200px,94%)] py-16">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d7b678]">Why this layout style works</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Modern section pacing + conversion focused flow</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {valueProps.map((item) => (
              <article key={item.id} className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0f2747]/60 to-[#071023]/85 p-6 transition hover:-translate-y-1 hover:border-[#b88a44]/80">
                <p className="text-xs font-semibold text-[#d9bb84]">{item.id}</p>
                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="guides" className="mx-auto w-[min(1200px,94%)] pb-20">
          <div className="mb-8 rounded-[2rem] border border-white/10 bg-[#0a1730]/70 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Explore Study Guides</h2>
            <p className="mt-2 text-slate-300">Interactive search and testament filters, with rich cards and smooth hover transitions.</p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title or topic..."
                className="w-full rounded-2xl border border-white/20 bg-[#060d1f] px-4 py-3 text-slate-100 outline-none ring-[#d4b072]/40 placeholder:text-slate-400 focus:ring"
              />
              <div className="flex gap-2">
                {['All', 'Old Testament', 'New Testament'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                      filter === option
                        ? 'border-[#d9bb84] bg-[#6f1027]/55 text-[#fae5bf]'
                        : 'border-white/20 bg-[#0f2747]/45 text-slate-300 hover:border-[#d9bb84]/80 hover:text-[#f4deb6]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">Showing {filtered.length} guide{filtered.length === 1 ? '' : 's'}.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((guide, index) => (
              <article
                key={guide.slug}
                className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#0c1f3a]/80 via-[#111b36]/80 to-[#320b18]/70 p-5 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-[#d9bb84]/70"
                style={{ animationDelay: `${Math.min(index * 40, 380)}ms` }}
              >
                <img src={guide.image} alt={`${guide.title} artwork`} className="h-32 w-full rounded-2xl bg-[#050b1a] object-contain p-3" loading="lazy" />
                <div className="mt-4 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold leading-tight">{guide.title}</h3>
                  <span className="whitespace-nowrap rounded-full border border-[#d9bb84]/50 bg-[#b88a44]/10 px-2.5 py-1 text-xs font-semibold text-[#f0d8aa]">{guide.category}</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{guide.description}</p>
                <a href={guide.href} className="mt-4 inline-flex items-center rounded-xl border border-[#d9bb84]/35 bg-[#6f1027]/35 px-4 py-2 text-sm font-semibold text-[#fde9c4] transition group-hover:border-[#f7deb0] group-hover:bg-[#6f1027]/60">Open Guide →</a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
