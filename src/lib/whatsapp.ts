import { SITE } from '../data/site'

/** Single source of truth for every WhatsApp link in the app. */
export const waUrl = (message: string): string =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`

export const msg = {
  general: 'Hi Vistora Creative! I would like to know more about your promotional video services.',
  floating: 'Hi Vistora Creative! I found your website and have a question about your video services.',
  delivery: 'Hi Vistora Creative! I have a question about revisions and delivery for a promotional video.',
  faq: 'Hi Vistora Creative! I have a question that I could not find answered on your FAQ page.',
  service: (s: string) => `Hi Vistora Creative! I'm interested in your ${s} service. Please share the next steps.`,
  portfolio: (c: string) => `Hi Vistora Creative! I watched your ${c} sample videos and would like to discuss a video for my business.`,
}
