import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Mail, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { NAV, SITE } from '../data/site'
import { msg, waUrl } from '../lib/whatsapp'

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex min-w-0 items-center gap-2 font-heading text-[15px] sm:text-lg font-extrabold leading-tight ${light ? 'text-white' : 'text-navy'}`}>
      <img src="/favicon.svg" alt="" width="34" height="34" className="shrink-0" />
      <span className="min-w-0">{SITE.name}</span>
    </span>
  )
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  const link = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-4 py-3 lg:px-3 lg:py-2 text-base lg:text-sm font-medium ${isActive ? 'bg-slate-100 text-brand' : 'text-ink hover:bg-slate-100'}`

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:p-3">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="wrap flex h-[4.5rem] items-center justify-between gap-3">
          <Link to="/" aria-label={`${SITE.name} home`}><Logo /></Link>
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'} className={link}>{n.label}</NavLink>)}
          </nav>
          <div className="flex shrink-0 items-center">
            <button type="button" className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy shadow-sm transition-colors duration-150 hover:border-slate-300 hover:bg-slate-100 active:bg-slate-200 lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white shadow-lg lg:hidden">
            <div className="wrap flex max-h-[min(75vh,35rem)] flex-col gap-1 overflow-y-auto py-4">
              {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'} className={link}>{n.label}</NavLink>)}
            </div>
          </nav>
        )}
      </header>
      <main id="main"><Outlet /></main>
      <footer className="on-dark bg-deep text-slate-300">
        <div className="wrap grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-3 font-heading font-bold text-white">{SITE.tagline}</p>
            <p className="mt-2 max-w-sm text-sm">AI-assisted promotional videos for travel agencies and businesses.</p>
          </div>
          <nav aria-label="Footer">
            <h2 className="text-base text-white">Explore</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV.map((n) => <li key={n.to}><Link className="hover:text-white" to={n.to}>{n.label}</Link></li>)}
              <li><Link className="hover:text-white" to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="hover:text-white" to="/terms">Terms of Service</Link></li>
            </ul>
          </nav>
          <div>
            <h2 className="text-base text-white">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="inline-flex items-center gap-2 hover:text-white" href={waUrl(msg.general)} target="_blank" rel="noopener noreferrer"><Phone size={16} aria-hidden="true" />WhatsApp {SITE.phone}</a></li>
              <li><a className="inline-flex items-center gap-2 break-all hover:text-white" href={`mailto:${SITE.email}`}><Mail size={16} aria-hidden="true" />{SITE.email}</a></li>
            </ul>
          </div>
        </div>
        <p className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </footer>
      <a href={waUrl(msg.floating)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp (opens in a new tab)" className="fixed bottom-4 right-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-teal-700 text-white shadow-lg hover:bg-teal-800">
        <MessageCircle aria-hidden="true" />
      </a>
    </>
  )
}
