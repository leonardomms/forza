import consultantArrow from '../../assets/consultant-arrow.svg'
import consultantArrowWhite from '../../assets/consultant-arrow-white.svg'
import diego from '../../assets/diego.png'
import guilherme from '../../assets/guilherme.png'
import maicon from '../../assets/maicon.png'
import type { LinkKey } from '../App'

type Destinations = Partial<Record<LinkKey, string>>

type Consultant = {
  name: string
  image: string
  imageClassName: string
  destination: keyof Destinations
}

const consultants: Consultant[] = [
  { name: 'Guilherme', image: guilherme, imageClassName: 'consultant-card__portrait--guilherme', destination: 'consultantGuilherme' },
  { name: 'Maicon', image: maicon, imageClassName: 'consultant-card__portrait--maicon', destination: 'consultantMaicon' },
  { name: 'Diego', image: diego, imageClassName: 'consultant-card__portrait--diego', destination: 'consultantDiego' },
]

function ConsultantCard({ consultant, href }: { consultant: Consultant; href?: string }) {
  const linkContent = (
    <>
      Entrar em contato
      <span className="consultant-card__arrow" aria-hidden="true">
        <img className="consultant-card__arrow--default" src={consultantArrow} alt="" />
        <img className="consultant-card__arrow--hover" src={consultantArrowWhite} alt="" />
      </span>
    </>
  )

  const cardContent = (
    <>
      <img className={`consultant-card__portrait ${consultant.imageClassName}`} src={consultant.image} alt="" />
      <div className="consultant-card__content">
        <div className="consultant-card__identity">
          <h3>{consultant.name}</h3>
          <p>Consultor de vendas</p>
        </div>

        {href ? (
          <span className="consultant-card__link">{linkContent}</span>
        ) : (
          <button className="consultant-card__link" type="button" aria-disabled="true" aria-label={`Contato de ${consultant.name} ainda não configurado`}>
            {linkContent}
          </button>
        )}
      </div>
    </>
  )

  if (href) {
    return <a className="consultant-card consultant-card--interactive" data-reveal href={href} target="_blank" rel="noopener noreferrer" aria-label={`Entrar em contato com ${consultant.name}`} onClick={(event) => { if (event.detail > 0) event.currentTarget.blur() }}>{cardContent}</a>
  }

  return (
    <article className="consultant-card" data-reveal>
      {cardContent}
    </article>
  )
}

export function Contact({ destinations }: { destinations: Destinations }) {
  return (
    <section className="contact" aria-labelledby="contact-title">
      <header className="contact__intro" data-reveal>
        <div className="contact__heading">
          <p className="contact__eyebrow">Contato</p>
          <h2 id="contact-title">Seu negócio precisa de força. A gente conecta você à solução.</h2>
        </div>
        <p className="contact__description">Precisa de mangueiras ou conexões? Entre em contato com nossa equipe e solicite um orçamento para sua necessidade.</p>
      </header>

      <div className="contact__cards">
        {consultants.map((consultant) => (
          <ConsultantCard key={consultant.name} consultant={consultant} href={destinations[consultant.destination]} />
        ))}
      </div>
    </section>
  )
}
