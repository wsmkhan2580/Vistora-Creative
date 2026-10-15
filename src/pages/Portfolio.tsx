import { useState } from 'react'
import Seo from '../components/Seo'
import { FinalCta, PageHeader, Section, WaLink } from '../components/ui'
import { VideoCard, VideoModal } from '../components/Portfolio'
import { VIDEOS } from '../data/content'
import { AI_NOTE } from '../data/site'
import { msg } from '../lib/whatsapp'
import type { Category, Video } from '../types'

const cats: ('All' | Category)[] = ['All', 'Travel', 'Skincare', 'Kirana Shop', 'Real Estate']
const crumbs = [{ name: 'Portfolio', path: '/portfolio' }]

export default function Portfolio() {
  const [cat, setCat] = useState<'All' | Category>('All')
  const [active, setActive] = useState<Video | null>(null)
  const list = VIDEOS.filter((v) => cat === 'All' || v.category === cat)
  return (
    <>
      <Seo path="/portfolio" crumbs={crumbs} title="Video Portfolio | Vistora Creative"
        description="Browse sample promotional videos for travel, skincare, kirana shops and real estate businesses from Vistora Creative." />
      <PageHeader crumbs={crumbs} title="Sample promotional videos" intro="Our four sample videos for Travel, Skincare, Kirana Shop and Real Estate. These are demos, not client projects." />
      <Section>
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2.5">
          {cats.map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
              className={`min-h-11 rounded-full border px-4 text-sm font-semibold ${cat === c ? 'border-brand bg-brand text-white' : 'border-line bg-white hover:bg-slate-100'}`}>{c}</button>
          ))}
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {list.map((v) => <li key={v.id}><VideoCard video={v} onOpen={setActive} /></li>)}
        </ul>
        {cat !== 'All' && <WaLink message={msg.portfolio(cat)} className="mt-8">Enquire about {cat} videos</WaLink>}
        <p className="mt-6 text-sm text-muted">{AI_NOTE}</p>
      </Section>
      <VideoModal video={active} onClose={() => setActive(null)} />
      <FinalCta message={msg.general} title="Want a video like these for your business?" />
    </>
  )
}
