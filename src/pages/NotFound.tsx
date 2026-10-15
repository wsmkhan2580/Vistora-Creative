import Seo from '../components/Seo'
import { LinkBtn } from '../components/ui'

export default function NotFound() {
  return (
    <section className="wrap py-24 text-center">
      <Seo path="/404" noindex title="Page not found | Vistora Creative" description="This page could not be found." />
      <p className="font-heading text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-4">We couldn’t find that page</h1>
      <p className="mt-3 text-muted">The link may be old or mistyped.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkBtn to="/" variant="primary">Back to home</LinkBtn>
        <LinkBtn to="/portfolio">Portfolio</LinkBtn>
        <LinkBtn to="/pricing">Pricing</LinkBtn>
      </div>
    </section>
  )
}
