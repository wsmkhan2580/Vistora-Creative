import { Helmet } from 'react-helmet-async'
import { SITE } from '../data/site'

interface Crumb { name: string; path: string }
interface Props { title: string; description: string; path: string; noindex?: boolean; crumbs?: Crumb[]; jsonLd?: object[] }

export default function Seo({ title, description, path, noindex, crumbs, jsonLd = [] }: Props) {
  const url = SITE.url + path
  const image = `${SITE.url}/og-image.png`
  const ld = [...jsonLd]
  if (crumbs) ld.push({
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE.url + c.path })),
  })
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      {!noindex && <link rel="canonical" href={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {ld.map((o, i) => <script key={i} type="application/ld+json">{JSON.stringify(o)}</script>)}
    </Helmet>
  )
}
