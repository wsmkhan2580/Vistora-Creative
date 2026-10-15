import Seo from '../components/Seo'
import { FinalCta, PageHeader, Section } from '../components/ui'
import { msg } from '../lib/whatsapp'

const crumbs = [{ name: 'About', path: '/about' }]
const pts = [
  ['Clear storytelling', 'Every video leads with one offer and one next step for the viewer.'],
  ['Professional promotional creatives', 'Branded captions, logo placement and an enquiry CTA on every video.'],
  ['Thoughtful editing', 'Short, vertical edits paced for social feeds and WhatsApp sharing.'],
  ['AI-assisted production', 'AI helps produce visuals quickly. Details are agreed with you and verified before publishing.'],
]

export default function About() {
  return (
    <>
      <Seo path="/about" crumbs={crumbs} title="About Vistora Creative | AI-Assisted Video Ads"
        description="Vistora Creative makes AI-assisted promotional videos that help businesses communicate their offers clearly." />
      <PageHeader crumbs={crumbs} title="Helping businesses communicate their offers" intro="Vistora Creative makes short promotional videos for travel agencies and other businesses. Stories That Sell." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {pts.map(([t, d]) => <div key={t} className="rounded-2xl border border-line bg-white p-6"><h2 className="text-xl">{t}</h2><p className="mt-2 text-muted">{d}</p></div>)}
        </div>
        <p className="mt-6 max-w-2xl text-muted">We focus on clear communication and honest scope. We do not guarantee leads, sales or virality, and results depend on many factors outside a video.</p>
      </Section>
      <FinalCta message={msg.general} title="Talk to us about your next video" />
    </>
  )
}
