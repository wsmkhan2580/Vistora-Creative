import Seo from '../components/Seo'
import FaqList from '../components/FaqList'
import { FinalCta, PageHeader, Section } from '../components/ui'
import { FAQS } from '../data/content'
import { msg } from '../lib/whatsapp'

const crumbs = [{ name: 'FAQ', path: '/faq' }]
const ld = [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }]

export default function Faq() {
  return (
    <>
      <Seo path="/faq" crumbs={crumbs} jsonLd={ld} title="FAQ | Vistora Creative"
        description="Answers about the ₹999 trial video, delivery, revisions, payments, assets and what is and is not included." />
      <PageHeader crumbs={crumbs} title="Frequently asked questions" intro="Straight answers about scope, delivery, revisions and payments." />
      <Section><div className="max-w-3xl"><FaqList items={FAQS} /></div></Section>
      <FinalCta message={msg.faq} title="Still have a question?" />
    </>
  )
}
