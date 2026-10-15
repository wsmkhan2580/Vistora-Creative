export type Category = 'Travel' | 'Skincare' | 'Kirana Shop' | 'Real Estate'
export interface Plan { id: string; name: string; price: string; period?: string; features: string[]; cta: string; message: string; payment: string; recommended?: boolean }
export interface Service { id: string; title: string; audience: string; deliverables: string[]; scope: string }
export interface Video { id: string; title: string; description: string; category: Category; src?: string; poster?: string }
export interface FaqItem { q: string; a: string; message?: string }
