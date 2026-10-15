import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '../types'
import { msg } from '../lib/whatsapp'
import { WaLink } from './ui'

export default function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className="p-1">
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-btn-${i}`} onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-12 w-full items-center justify-between gap-4 rounded-xl p-4 text-left text-base font-semibold hover:bg-slate-50">
                {f.q}
                <ChevronDown size={20} aria-hidden="true" className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-4 pb-4 text-muted">
              <p>{f.a}</p>
              {f.message && <WaLink message={f.message} variant="secondary" className="mt-3">Ask on WhatsApp</WaLink>}
              {!f.message && <WaLink message={msg.faq} variant="secondary" className="mt-3">Need clarification? Ask on WhatsApp</WaLink>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
