import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BrandStrip } from './components/BrandStrip'
import { Applications } from './components/Applications'
import { Differentials } from './components/Differentials'
import { Contact } from './components/Contact'
import { QuoteForm } from './components/QuoteForm'
import { Footer } from './components/Footer'
import hoses from '../assets/mangueiras_bg.jpg'

export type LinkKey = 'home' | 'solutions' | 'contact' | 'quote' | 'products' | 'sobre' | 'instagram' | 'applicationContact' | 'whatsapp' | 'consultantGuilherme' | 'consultantMaicon' | 'consultantDiego'

// Supply real destinations as they are approved. Missing destinations remain disabled.
const whatsappMessage = encodeURIComponent('Olá! Visitei o site da Forza Flex e gostaria de solicitar um orçamento.')
const whatsappDefault = `https://wa.me/51980186359?text=${whatsappMessage}`
const whatsappDiego = `https://wa.me/55997100924?text=${whatsappMessage}`

export const destinations: Partial<Record<LinkKey, string>> = {
  whatsapp: whatsappDefault,
  quote: whatsappDefault,
  products: '#applications-title',
  instagram: 'https://www.instagram.com/forzaflexmangueiras/',
  consultantGuilherme: whatsappDefault,
  consultantMaicon: whatsappDefault,
  consultantDiego: whatsappDiego,
}
export const integrations: { quoteFormEndpoint?: string } = {}

export default function App() {
  return (
    <>
      <div className="intro">
        <div className="intro__image" aria-hidden="true"><img src={hoses} alt="" /></div>
        <div className="intro__gradient" aria-hidden="true" />
        <Header destinations={destinations} />
        <Hero destinations={destinations} />
      </div>
      <main>
        <BrandStrip />
        <Applications destinations={destinations} />
        <Differentials />
        <Contact destinations={destinations} />
        <QuoteForm endpoint={integrations.quoteFormEndpoint} />
        <Footer destinations={destinations} />
      </main>
    </>
  )
}
