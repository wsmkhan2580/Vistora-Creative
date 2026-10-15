import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Film, ListChecks, MessageSquare, Send, Sparkles, Target } from 'lucide-react'
import Seo from '../components/Seo'
import { FinalCta, LinkBtn, Section } from '../components/ui'
import PricingCards from '../components/PricingCards'
import FaqList from '../components/FaqList'
import { FAQS, SERVICES, VIDEOS } from '../data/content'
import { AI_NOTE, SITE } from '../data/site'
import { msg } from '../lib/whatsapp'

const why = [
  { icon: Target, t: 'Built around your offer', d: 'Inclusions, dates, prices and a clear enquiry CTA on every video.' },
  { icon: Sparkles, t: 'AI-assisted, human-edited', d: 'Faster visuals, with thoughtful editing and captions.' },
  { icon: ListChecks, t: 'Clear pricing and scope', d: 'Defined deliverables and payment terms before work begins.' },
]
const steps = [
  { icon: MessageSquare, t: 'Message us on WhatsApp', d: 'Tell us your offer, destination or product.' },
  { icon: Film, t: 'Share assets and approve', d: 'Send your logo and details, then confirm the concept.' },
  { icon: Send, t: 'Review and receive', d: 'Review the draft, send one revision, get your final video.' },
]
const ld = [
  { '@context': 'https://schema.org', '@type': 'Organization', name: SITE.name, url: SITE.url, logo: `${SITE.url}/icon-512.png`, email: SITE.email, telephone: SITE.phone },
  { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: SITE.url },
]

const heroVideos = [
  { name: 'Travel', src: '/videos/travel.mp4' },
  { name: 'Skincare', src: '/videos/skincare.mp4' },
  { name: 'Kirana Shop', src: '/videos/kirana.mp4' },
  { name: 'Real Estate', src: '/videos/realestate.mp4' },
]
const CLIP_SECONDS = 5

function HeroShowreel() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState<number[]>([])
  const [hasPlayableVideo, setHasPlayableVideo] = useState(true)

  const nextVideo = () => {
    const next = heroVideos.findIndex((_, offset) => {
      const candidate = (index + offset + 1) % heroVideos.length
      return offset < heroVideos.length && !failed.includes(candidate)
    })
    if (next === -1) {
      setHasPlayableVideo(false)
      return
    }
    // Convert the index of the first eligible offset into a video index.
    setIndex((index + next + 1) % heroVideos.length)
  }

  useEffect(() => {
    const player = videoRef.current
    if (!player || !hasPlayableVideo) return
    player.muted = true
    const tryPlay = () => {
      void player.play().catch(() => {
        // Browsers sometimes defer autoplay; native controls remain available.
      })
    }
    tryPlay()
  }, [index, hasPlayableVideo])

  const handleError = () => {
    const nextFailed = Array.from(new Set([...failed, index]))
    setFailed(nextFailed)
    if (nextFailed.length === heroVideos.length) {
      setHasPlayableVideo(false)
      return
    }
    const nextIndex = heroVideos.findIndex((_, i) =>
      i > index && !nextFailed.includes(i)
    )
    if (nextIndex !== -1) {
      setIndex(nextIndex)
      return
    }
    setIndex(heroVideos.findIndex((_, i) => !nextFailed.includes(i)))
  }

  return (
    <figure className="mx-auto w-full max-w-[16rem]">
      <div className="rounded-[2rem] border-4 border-slate-600 bg-slate-900 p-2 shadow-2xl">
        <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-black">
          {hasPlayableVideo ? (
            <video
              key={heroVideos[index].src}
              ref={videoRef}
              src={heroVideos[index].src}
              autoPlay
              muted
              playsInline
              controls
              preload="auto"
              onLoadedData={(event) => {
                event.currentTarget.muted = true
                void event.currentTarget.play().catch(() => {})
              }}
              onTimeUpdate={(event) => {
                if (event.currentTarget.currentTime >= CLIP_SECONDS) nextVideo()
              }}
              onEnded={nextVideo}
              onError={handleError}
              aria-label={`${heroVideos[index].name} sample video`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-sky-600 via-teal-600 to-indigo-800 p-6 text-center text-sm text-white">
              Video previews will appear here once the video files are uploaded.
            </div>
          )}
          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
            {hasPlayableVideo ? `${heroVideos[index].name} Preview` : 'Sample Preview'}
          </span>
          <div className="pointer-events-none absolute inset-x-3 bottom-14 flex gap-1.5">
            {heroVideos.map((item, i) => (
              <span key={item.name} className={`h-1 flex-1 rounded-full ${i === index && hasPlayableVideo ? 'bg-white' : 'bg-white/35'}`} />
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-slate-400">
        Automatically playing promotional video samples.
      </figcaption>
    </figure>
  )
}

export default function Home() {
  return (
    <>
      <Seo path="/" jsonLd={ld} title="Vistora Creative | Promotional Video Ads for Businesses"
        description="Create engaging promotional videos for travel agencies and businesses with Vistora Creative. Explore video services and packages starting at ₹999." />
      <section className="on-dark overflow-hidden bg-deep text-white">
        <div className="wrap grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <h1>Turn Your Business Offers Into Videos People Want to Watch.</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">Professional, AI-assisted promotional videos designed to help businesses present their offers with clarity and creativity.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkBtn to="/pricing" variant="primary">Explore Packages</LinkBtn>
              <LinkBtn to="/portfolio" variant="light">Watch Our Work</LinkBtn>
            </div>
            <p className="mt-5 text-sm text-slate-400">Clear pricing. Defined deliverables. Trial starts at ₹999.</p>
          </div>
          <HeroShowreel />
        </div>
      </section>

      <Section>
        <h2>Videos for the offers you promote</h2>
        <p className="mt-3 max-w-2xl text-muted">Four focused categories: Travel, Skincare, Kirana Shop and Real Estate.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <li key={s.id} className="rounded-2xl border border-line bg-white p-5"><h3 className="text-lg font-bold">{s.title}</h3><p className="mt-2 text-sm text-muted">{s.audience}</p></li>
          ))}
        </ul>
        <Link to="/services" className="mt-6 inline-flex items-center gap-1 font-semibold text-brand hover:underline">All services <ArrowRight size={16} aria-hidden="true" /></Link>
      </Section>

      <Section className="bg-white">
        <h2>Featured sample videos</h2>
        <p className="mt-3 text-muted">Explore our promotional video samples across four business categories.</p>
        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {VIDEOS.map((v) => (
            <li key={v.id}><Link to="/portfolio" className="block h-full rounded-2xl border border-line bg-bg p-5 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"><span className="text-sm font-bold text-teal-700">{v.category}</span><span className="mt-1 block font-bold">{v.title}</span></Link></li>
          ))}
        </ul>
        <LinkBtn to="/portfolio" variant="primary" className="mt-6">View portfolio</LinkBtn>
      </Section>

      <Section>
        <h2>Why Vistora Creative</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {why.map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-2xl border border-line bg-white p-6 shadow-sm"><I className="text-brand" aria-hidden="true" /><h3 className="mt-3 text-lg font-bold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">{AI_NOTE} We do not promise leads, sales or virality.</p>
      </Section>

      <Section className="bg-white">
        <h2>How it works</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map(({ icon: I, t, d }, i) => (
            <li key={t} className="rounded-2xl bg-bg p-6"><I className="text-teal" aria-hidden="true" /><h3 className="mt-3 text-lg font-bold">{i + 1}. {t}</h3><p className="mt-2 text-sm text-muted">{d}</p></li>
          ))}
        </ol>
      </Section>

      <Section>
        <h2>Pricing</h2>
        <p className="mt-3 mb-8 text-muted">Start with a ₹999 trial video, or pick a monthly plan.</p>
        <PricingCards />
        <LinkBtn to="/pricing" className="mt-6">Full pricing details</LinkBtn>
      </Section>

      <Section className="bg-white">
        <h2 className="mb-6">Common questions</h2>
        <FaqList items={FAQS.slice(0, 4)} />
        <LinkBtn to="/faq" className="mt-6">More FAQs</LinkBtn>
      </Section>
      <FinalCta message={msg.general} />
    </>
  )
}
