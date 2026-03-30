import { Link, Route, Routes } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { guides } from './data/guides'

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-700/90 backdrop-blur">
      <div className="mx-auto flex w-[min(1200px,94%)] items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 text-white">
          <img src="/images/concordia-logo.svg" alt="CBI" className="h-11 w-11 rounded-full" />
          <span className="font-bold">CBI Study Guides</span>
        </Link>
        <nav>
          <Link to="/guides" className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white">Study Guides</Link>
        </nav>
      </div>
    </header>
  )
}

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden py-24">
        <div className="hero-bg absolute inset-0" />
        <div className="relative mx-auto w-[min(1200px,94%)] text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-brand-50/70">Concordia Bible Institute</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">Modern Bible Study Experience</h1>
          <p className="mx-auto mt-5 max-w-3xl text-brand-50/80">Built with React + Tailwind for a modern, responsive, and scalable web experience.</p>
          <div className="mt-8 flex justify-center">
            <Link to="/guides" className="animate-float rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-glow">Explore Study Guides</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1200px,94%)] gap-4 py-14 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-5xl font-bold text-white">40+</p>
          <p className="mt-2 text-brand-50/70">Bible Podcasts</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-5xl font-bold text-white">300+</p>
          <p className="mt-2 text-brand-50/70">Episodes</p>
        </div>
      </section>
    </main>
  )
}

function GuidesPage() {
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('all')

  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim()
    return guides.filter((g) => {
      const inCat = category === 'all' || g.categories.includes(category)
      const inSearch = !query || `${g.title} ${g.description}`.toLowerCase().includes(query)
      return inCat && inSearch
    })
  }, [q, category])

  return (
    <main className="mx-auto w-[min(1200px,94%)] py-12">
      <h2 className="text-4xl font-bold text-white">All Study Guides</h2>
      <p className="mt-2 text-brand-50/70">Search and filter the complete library.</p>

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search guides..." className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-white outline-none" />
        <div className="mt-3 flex flex-wrap gap-2">
          {['all', 'old-testament', 'new-testament'].map((c) => (
            <button key={c} onClick={() => setCategory(c)} className={`rounded-full border px-4 py-2 text-sm ${category === c ? 'border-brand-500 bg-brand-500/30 text-white' : 'border-white/20 text-brand-50/70'}`}>
              {c.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((guide) => (
          <a href={guide.href} key={guide.slug} className="group rounded-3xl border border-white/10 bg-[#0f1522] p-4 transition duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-glow">
            <img src={guide.image} alt={guide.title} className="h-44 w-full rounded-2xl object-cover transition duration-300 group-hover:scale-[1.03]" />
            <h3 className="mt-4 text-lg font-semibold text-white">{guide.title}</h3>
            <p className="mt-2 text-sm text-brand-50/70">{guide.description}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-brand-50">Open guide →</span>
          </a>
        ))}
      </div>
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<GuidesPage />} />
      </Routes>
    </div>
  )
}
