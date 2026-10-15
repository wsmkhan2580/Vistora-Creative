import Seo from '../components/Seo'
import PricingCards from '../components/PricingCards'
import { FinalCta, PageHeader, Section, WaLink } from '../components/ui'
import { EXCLUSIONS } from '../data/site'
import { msg } from '../lib/whatsapp'

const crumbs = [{ name: 'Pricing', path: '/pricing' }]

export default function Pricing() {
  return (
    <>
      <Seo path="/pricing" crumbs={crumbs} title="Pricing: ₹999 Trial and Monthly Plans | Vistora Creative"
        description="Start with a ₹999 trial video or choose a monthly plan of 4, 8 or 12 promotional videos. Clear deliverables and payment terms." />
      <PageHeader crumbs={crumbs} title="Clear pricing, defined deliverables" intro="Start with one trial video, or choose a monthly plan. Choosing a package opens WhatsApp with a prefilled message." />
      <Section>
        <PricingCards />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6"><h2 className="text-xl">Payment terms</h2><ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted"><li>Trial: 100% advance.</li><li>Monthly packages: 50% advance and 50% before final watermark-free delivery.</li></ul></div>
          <div className="rounded-2xl border border-line bg-white p-6"><h2 className="text-xl">Not included</h2><p className="mt-3 text-sm text-muted">{EXCLUSIONS}</p></div>
        </div>
        <p className="mt-6 text-sm text-muted">Not sure which package fits? <WaLink message={msg.general} variant="secondary" className="ml-2">Ask on WhatsApp</WaLink></p>
      </Section>
      <FinalCta message={msg.general} />
    </>
  )
}
