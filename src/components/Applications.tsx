import agriculture from '../../assets/agricultura.png'
import industry from '../../assets/industria.png'
import hydraulicSystems from '../../assets/sistemas.png'
import contactArrow from '../../assets/application-contact-arrow.svg'
import whatsappIcon from '../../assets/whatsapp.svg'
import type { LinkKey } from '../App'
import { Button } from './Action'

type Props = { destinations: Partial<Record<LinkKey, string>> }

function ContactCard({ href }: { href?: string }) {
  const content = (
    <>
      <span className="application-card__copy">
        <strong>Entre em contato</strong>
        <span>Temos a solução na medida para o seu negócio.</span>
      </span>
      <span className="application-card__icon" aria-hidden="true">
        <img src={contactArrow} alt="" />
      </span>
    </>
  )

  if (href) {
    return <a className="application-card application-card--contact" href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  }

  return <button className="application-card application-card--contact" type="button">{content}</button>
}

export function Applications({ destinations }: Props) {
  return (
    <section className="applications" aria-labelledby="applications-title">
      <div className="applications__content">
        <div className="applications__cards">
          <article className="application-card application-card--agriculture" data-reveal>
            <img className="application-card__image application-card__image--agriculture" src={agriculture} alt="" />
            <h3>Agricultura</h3>
            <p>Mangueiras para pulverização e atividades agrícolas.</p>
          </article>

          <article className="application-card application-card--industry" data-reveal>
            <div className="application-card__image--industry">
              <div className="application-card__image--industry-inner">
                <img src={industry} alt="" />
              </div>
            </div>
            <h3>Indústria</h3>
            <p>Soluções para condução de fluidos e processos industriais.</p>
          </article>

          <article className="application-card application-card--hydraulic" data-reveal>
            <img className="application-card__image application-card__image--hydraulic" src={hydraulicSystems} alt="" />
            <h3>Sistemas hidráulicos</h3>
            <p>Mangueiras e conexões para equipamentos hidráulicos.</p>
          </article>

          <ContactCard href={destinations.applicationContact} />
        </div>

        <div className="applications__intro" data-reveal>
          <p className="applications__eyebrow">SOLUÇÕES</p>
          <h2 id="applications-title">Soluções que acompanham a força do seu trabalho.</h2>
          <p className="applications__description">Cada operação possui necessidades específicas. Por isso, oferecemos soluções para diferentes aplicações e segmentos.</p>
        </div>
      </div>

      <div className="applications__whatsapp">
        <Button href={destinations.whatsapp} variant="whatsapp" ariaLabel="Fazer orçamento pelo WhatsApp">
          Fazer orçamento
          <img src={whatsappIcon} alt="" aria-hidden="true" />
        </Button>
      </div>
    </section>
  )
}
