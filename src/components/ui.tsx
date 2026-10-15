import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, MessageCircle } from 'lucide-react'
import { waUrl } from '../lib/whatsapp'

type Variant = 'primary' | 'secondary' | 'whatsapp' | 'light'
const base = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-center text-sm font-semibold transition-colors'
const styles: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-[#2a47b3]',
  secondary: 'border border-line bg-white text-ink hover:bg-slate-100',
  whatsapp: 'bg-teal-700 text-white hover:bg-teal-800',
  light: 'bg-white text-navy hover:bg-slate-100',
}

export function WaLink({ message, children, variant = 'whatsapp', className = '' }: { message: string; children: ReactNode; variant?: Variant; className?: string }) {
  return (
    <a href={waUrl(message)} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]} ${className}`}>
      <MessageCircle size={18} aria-hidden="true" />
      <span>{children}</span>
      <span className="sr-only"> (opens WhatsApp in a new tab)</span>
    </a>
  )
}

export function LinkBtn({ to, children, variant = 'secondary', className = '' }: { to: string; children: ReactNode; variant?: Variant; className?: string }) {
  return <Link to={to} className={`${base} ${styles[variant]} ${className}`}>{children}</Link>
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-300">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link to="/" className="underline-offset-2 hover:underline">Home</Link></li>
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1">
            <ChevronRight size={14} aria-hidden="true" />
            {i === items.length - 1 ? <span aria-current="page">{c.name}</span> : <Link to={c.path}>{c.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function PageHeader({ title, intro, crumbs }: { title: string; intro: string; crumbs: { name: string; path: string }[] }) {
  return (
    <header className="on-dark bg-deep py-14 text-white sm:py-20">
      <div className="wrap">
        <Breadcrumbs items={crumbs} />
        <h1 className="max-w-3xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">{intro}</p>
      </div>
    </header>
  )
}

export function Section({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`py-14 sm:py-20 ${className}`}><div className="wrap">{children}</div></section>
}

export function FinalCta({ title = 'Ready to promote your next offer?', message }: { title?: string; message: string }) {
  return (
    <section className="on-dark bg-navy py-14 text-white sm:py-16">
      <div className="wrap text-center">
        <h2>{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-300">Message us on WhatsApp. A prefilled draft opens and you can edit it before you press send.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <WaLink message={message}>Chat on WhatsApp</WaLink>
          <LinkBtn to="/pricing" variant="light">See packages</LinkBtn>
        </div>
      </div>
    </section>
  )
}
