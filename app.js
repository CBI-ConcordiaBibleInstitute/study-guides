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

function App() {
  const [query, setQuery] = React.useState('');
  const [filter, setFilter] = React.useState('All');

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    return guides.filter((guide) => {
      const matchesFilter = filter === 'All' || guide.category === filter;
      const text = `${guide.title} ${guide.description} ${guide.category}`.toLowerCase();
      return matchesFilter && (!q || text.includes(q));
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse-soft" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl animate-pulse-soft" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex w-[min(1200px,94%)] items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <img src="images/concordia-logo.svg" alt="Concordia Bible Institute logo" className="h-12 w-12 rounded-full ring-2 ring-fuchsia-300/60" />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-200">React + Tailwind</p>
              <p className="text-sm font-bold sm:text-base">CBI Study Guide Library</p>
            </div>
          </a>
          <a href="#guides" className="rounded-full border border-fuchsia-300/60 bg-fuchsia-600/30 px-4 py-2 text-sm font-semibold text-fuchsia-50 transition hover:-translate-y-0.5 hover:bg-fuchsia-500/60">Explore Guides</a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-[min(1200px,94%)] gap-8 py-20 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up space-y-6">
            <p className="inline-block rounded-full border border-cyan-300/50 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">Modern + Trending UI</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Your website is now React-based with a modern animated look.</h1>
            <p className="max-w-xl text-lg text-slate-300">I redesigned the experience with a cinematic gradient background, glassmorphism cards, smooth hover motion, and live search + filter powered by React.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#guides" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-6 py-3 font-bold text-white shadow-glow transition hover:-translate-y-1">Browse Study Guides</a>
              <a href="https://www.youtube.com/@concordiabible" target="_blank" rel="noreferrer" className="rounded-full border border-slate-500 bg-slate-900/70 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200">Watch Podcasts</a>
            </div>
          </div>
          <div className="animate-fade-up rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['26+', 'Main guides'],
                ['Live', 'Search + filter'],
                ['100%', 'Responsive layout'],
                ['New', 'Tailwind motion']
              ].map(([value, label]) => (
                <article key={label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-fuchsia-300/70">
                  <p className="text-3xl font-black text-fuchsia-300">{value}</p>
                  <p className="text-sm text-slate-300">{label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="guides" className="mx-auto w-[min(1200px,94%)] pb-16">
          <div className="mb-8 rounded-3xl border border-white/10 bg-slate-900/65 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Study Guides</h2>
            <p className="mt-2 text-slate-300">Search instantly, filter by testament, and open each full study guide page.</p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title or topic..."
                className="w-full rounded-2xl border border-white/15 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-fuchsia-300/40 placeholder:text-slate-400 focus:ring"
              />
              <div className="flex gap-2">
                {['All', 'Old Testament', 'New Testament'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                      filter === option
                        ? 'border-fuchsia-300 bg-fuchsia-500/30 text-fuchsia-100'
                        : 'border-white/15 bg-slate-800/60 text-slate-300 hover:border-cyan-300/60 hover:text-cyan-200'
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
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-800/70 p-5 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-300/60"
                style={{ animationDelay: `${Math.min(index * 40, 380)}ms` }}
              >
                <img src={guide.image} alt={`${guide.title} artwork`} className="h-32 w-full rounded-2xl bg-slate-950/60 object-contain p-3" loading="lazy" />
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold leading-tight">{guide.title}</h3>
                  <span className="rounded-full border border-cyan-300/50 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-200">{guide.category}</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{guide.description}</p>
                <a
                  href={guide.href}
                  className="mt-4 inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-fuchsia-500/40"
                >
                  Open Guide →
                </a>
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
