import { Check } from 'lucide-react'
import { PLANS } from '../data/content'
import { WaLink } from './ui'

export default function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {PLANS.map((p) => (
        <article key={p.id} className={`relative flex flex-col rounded-2xl bg-white p-6 ${p.recommended ? 'border-2 border-brand shadow-xl' : 'border border-line shadow-sm'}`}>
          {p.recommended && <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">Recommended</span>}
          <h3 className="text-xl font-bold">{p.name}</h3>
          <p className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">{p.price}<span className="text-base font-medium text-muted"> {p.period}</span></p>
          <ul className="mt-6 flex-1 space-y-3 text-[15px] leading-relaxed">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" /><span>{f}</span></li>
            ))}
          </ul>
          <p className="mt-5 border-t border-line pt-4 text-xs text-muted">{p.payment}</p>
          <WaLink message={p.message} variant={p.recommended ? 'primary' : 'whatsapp'} className="mt-4 w-full">{p.cta}</WaLink>
        </article>
      ))}
    </div>
  )
}
