import Seo from '../components/Seo'
import { PageHeader, Section } from '../components/ui'
import { SITE } from '../data/site'

interface Block { h: string; p: string }
function Legal({ path, name, title, desc, blocks }: { path: string; name: string; title: string; desc: string; blocks: Block[] }) {
  const crumbs = [{ name, path }]
  return (
    <>
      <Seo path={path} crumbs={crumbs} title={title} description={desc} />
      <PageHeader crumbs={crumbs} title={name} intro="Draft for business and legal review before publication." />
      <Section>
        <div className="max-w-3xl space-y-6">
          {blocks.map((b) => <div key={b.h}><h2 className="text-xl">{b.h}</h2><p className="mt-2 text-muted">{b.p}</p></div>)}
        </div>
      </Section>
    </>
  )
}

export const Privacy = () => (
  <Legal path="/privacy-policy" name="Privacy Policy" title="Privacy Policy | Vistora Creative" desc="How the Vistora Creative website handles information. Draft pending review."
    blocks={[
      { h: 'Our website', p: 'This website does not collect enquiries through its own forms. It has no contact, lead or newsletter forms.' },
      { h: 'WhatsApp and email', p: `When you choose to message us on WhatsApp or email ${SITE.email}, that interaction is handled by those services under their own policies. We receive the details you choose to send.` },
      { h: 'Third parties', p: 'Fonts may be loaded from Google Fonts, and hosting providers may keep standard server logs. These providers process information under their own policies.' },
      { h: 'Contact', p: `Questions about this policy: ${SITE.email}. Owner to confirm retention and data-request details before publication.` },
    ]} />
)

export const Terms = () => (
  <Legal path="/terms" name="Terms of Service" title="Terms of Service | Vistora Creative" desc="Draft terms covering scope, approvals, payments, revisions and delivery for Vistora Creative projects."
    blocks={[
      { h: 'Project scope', p: 'Scope, deliverables and creative details are confirmed in writing (for example on WhatsApp) before work begins.' },
      { h: 'Approvals and delivery', p: 'Delivery timelines start after payment, required assets and approvals are received. Trial target: three business days.' },
      { h: 'Payments', p: 'Trial: 100% advance. Monthly packages: 50% advance and 50% before final watermark-free delivery.' },
      { h: 'Revisions', p: 'One revision for the trial and one per video on monthly plans. Please send all feedback together.' },
      { h: 'Client materials and AI-assisted visuals', p: 'You confirm you have rights to the logos, images and text you supply. AI-assisted visuals may be illustrative and the client must verify actual inclusions before publishing.' },
      { h: 'Exclusions', p: 'Ad spend, ad-account management, social posting and raw project files are not included unless separately agreed. No leads, sales or results are guaranteed.' },
      { h: 'Intellectual property', p: 'Ownership and usage rights of final videos: to be confirmed by the owner before publication.' },
      { h: 'Cancellation and refunds', p: 'To be confirmed by the owner before publication.' },
    ]} />
)
