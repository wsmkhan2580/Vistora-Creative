import type { FaqItem, Plan, Service, Video } from '../types'
import { msg } from '../lib/whatsapp'

const mk = (n: string, v: string, b: string) => `Hi Vistora Creative! I’m interested in the ${n} package: ${v} for ${b}. Please share the next steps.`
const monthly = 'Monthly: 50% advance and 50% before final watermark-free delivery.'
const common = ['15–25 seconds per video', 'Branding, captions, and CTA', 'One revision per video']

export const PLANS: Plan[] = [
  { id: 'trial', name: 'Trial Video', price: '₹999', period: 'one-time', cta: 'Get Started — ₹999',
    message: 'Hi Vistora Creative! I’m interested in the ₹999 Trial Video package. Please share the next steps.',
    payment: 'Trial: 100% advance.',
    features: ['One custom promotional video', '15–25 seconds', 'One agreed offer or destination', 'AI-assisted visuals and editing', 'Captions, logo placement, and CTA', 'One revision', 'Target delivery: 3 business days after required assets and approvals'] },
  { id: 'starter', name: 'Starter', price: '₹5,999', period: '/month', cta: 'Choose Starter', message: mk('Starter', '4 videos/month', '₹5,999'), payment: monthly,
    features: ['4 promotional videos per month', ...common] },
  { id: 'growth', name: 'Growth', price: '₹9,999', period: '/month', cta: 'Choose Growth', recommended: true, message: mk('Growth', '8 videos/month', '₹9,999'), payment: monthly,
    features: ['8 promotional videos per month', ...common] },
  { id: 'premium', name: 'Premium', price: '₹14,999', period: '/month', cta: 'Choose Premium', message: mk('Premium', '12 videos/month', '₹14,999'), payment: monthly,
    features: ['12 promotional videos per month', ...common] },
]

export const SERVICES: Service[] = [
  { id: 'travel', title: 'Travel video ads', audience: 'Travel agencies, tour operators and holiday package sellers.', deliverables: ['9:16 destination and tour-package promos', 'Itinerary, dates and price highlights', 'Clear enquiry call to action'], scope: 'The agency verifies offer details, availability and inclusions before publishing.' },
  { id: 'skincare', title: 'Skincare video ads', audience: 'Skincare and beauty brands showcasing products and promotions.', deliverables: ['Branded product showcase videos', 'Routine and launch promotions', 'Captions, logo and CTA'], scope: 'Product benefits and claims must be provided and approved by the brand; no unverified medical claims.' },
  { id: 'kirana', title: 'Kirana shop video ads', audience: 'Local grocery shops promoting everyday essentials and special offers.', deliverables: ['Product and daily-offer highlights', 'Festival and seasonal campaign creatives', 'Store enquiry or visit CTA'], scope: 'The shop confirms stock, offer prices and dates before publishing.' },
  { id: 'realestate', title: 'Real estate video ads', audience: 'Real estate agents, builders and property marketing teams.', deliverables: ['Property showcase and listing promos', 'Location and approved feature highlights', 'Lead enquiry CTA'], scope: 'Property details, images, prices and legal claims must be verified by the client.' },
]


export const VIDEOS: Video[] = [
  {
    id: 'travel',
    title: 'Travel',
    description: 'Tour package promotional video',
    category: 'Travel',
    src: '/videos/travel.mp4'
  },
  {
    id: 'skincare',
    title: 'Skincare',
    description: 'Skincare product promotional video',
    category: 'Skincare',
    src: '/videos/skincare.mp4'
  },
  {
    id: 'kirana',
    title: 'Kirana Shop',
    description: 'Kirana shop promotional video',
    category: 'Kirana Shop',
    src: '/videos/kirana.mp4'
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    description: 'Real estate promotional video',
    category: 'Real Estate',
    src: '/videos/realestate.mp4'
  }
]

export const FAQS: FaqItem[] = [
  { q: 'What is included in a promotional video?', a: 'Each video is a vertical 15–25 second edit with AI-assisted visuals, captions, your logo and an enquiry CTA. Exact content is agreed before work starts.' },
  { q: 'How does the ₹999 trial work?', a: 'You get one custom video for one agreed offer or destination, with one revision. Trial is 100% payment in advance.', message: PLANS[0].message },
  { q: 'How long does delivery take?', a: 'The trial targets delivery within three business days after we receive the required assets and approvals. Monthly timelines are confirmed before work begins.', message: msg.delivery },
  { q: 'What counts as a revision?', a: 'One round of consolidated feedback on the draft. Please send all changes together so they can be applied in one pass.', message: msg.delivery },
  { q: 'What assets should a client provide?', a: 'Your logo, offer details (inclusions, dates, prices), your contact CTA and any photos or clips you want used. Share brand colours if you have them.' },
  { q: 'Can a client request specific branding?', a: 'Yes. Share your logo and brand colours and we will apply them within the agreed scope.' },
  { q: 'Are AI-generated visuals used?', a: 'Yes. Visuals are AI-assisted and may be illustrative. Please verify actual inclusions and details before publishing.' },
  { q: 'Are advertising budgets included?', a: 'No. Ad spend is paid by you directly to the ad platform.' },
  { q: 'Are posting and ad management included?', a: 'No. We deliver finished videos. Posting and ad-account management are not included unless separately agreed.' },
  { q: 'How do monthly packages work?', a: 'Starter, Growth and Premium provide 4, 8 or 12 videos per month. Topics are planned with you by message.', message: PLANS[2].message },
  { q: 'How do payments work?', a: 'Trial: 100% advance. Monthly packages: 50% advance and 50% before final watermark-free delivery.' },
  { q: 'How can someone start a project?', a: 'Message us on WhatsApp. We confirm scope and next steps there. A prefilled draft opens and you press send yourself.', message: PLANS[0].message },
]
