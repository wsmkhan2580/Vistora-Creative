import { Check } from 'lucide-react'
import Seo from '../components/Seo'
import { FinalCta, PageHeader, Section, WaLink } from '../components/ui'
import { SERVICES } from '../data/content'
import { AI_NOTE, EXCLUSIONS, SITE } from '../data/site'
import { msg } from '../lib/whatsapp'

const crumbs = [{ name: 'Services', path: '/services' }]
const ld = SERVICES.map((s) => ({ '@context': 'https://schema.org', '@type': 'Service', name: s.title, description: s.audience, provider: { '@type': 'Organization', name: SITE.name, url: SITE.url } }))

export default function Services() {
  return (
    <>
      <Seo path="/services" crumbs={crumbs} jsonLd={ld} title="Video Ad Services for Travel and Retail | Vistora Creative"
        description="AI-assisted promotional videos for travel, skincare, kirana shops and real estate. See audiences, deliverables and scope." />
      <PageHeader crumbs={crumbs} title="Promotional video services" intro="Vertical, social-ready videos for travel agencies, skincare brands, kirana shops and real estate businesses." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.id} id={s.id} className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <div>
                <h2 className="text-2xl">{s.title}</h2>
                <p className="mt-2 text-muted"><strong className="text-ink">Who it is for:</strong> {s.audience}</p>
                <ul className="mt-3 space-y-1.5 text-sm">{s.deliverables.map((d) => <li key={d} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />{d}</li>)}</ul>
                <p className="mt-3 text-sm text-muted"><strong className="text-ink">Scope:</strong> {s.scope}</p>
              </div>
              <div className="self-end"><WaLink message={msg.service(s.title)}>Enquire on WhatsApp</WaLink></div>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-xl bg-white p-4 text-sm text-muted">{AI_NOTE} {EXCLUSIONS}</p>
      </Section>
      <FinalCta message={msg.general} />
    </>
  )
}
