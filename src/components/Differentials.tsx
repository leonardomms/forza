import commitmentIcon from '../../assets/differential-commitment.svg'
import qualityIcon from '../../assets/differential-quality.svg'
import supportIcon from '../../assets/differential-support.svg'
import backgroundImage from '../../assets/diferenciais.jpg'

const differentials = [
  {
    icon: qualityIcon,
    title: <>Qualidade e<br />confiabilidade</>,
    description: <>Produtos das principais<br />marcas do mercado</>,
  },
  {
    icon: supportIcon,
    title: <>Atendimento<br />especializado</>,
    description: <>Indicação de produtos<br />ideais para cada aplicação</>,
  },
  {
    icon: commitmentIcon,
    iconClassName: 'differentials__icon--commitment',
    title: <>Compromisso<br />com o seu negócio</>,
    description: <>Agilidade no atendimento<br />e foco em resultados</>,
  },
]

export function Differentials() {
  return (
    <section className="differentials" aria-labelledby="differentials-title">
      <div className="differentials__panel">
        <img className="differentials__background" src={backgroundImage} alt="" aria-hidden="true" />
        <div className="differentials__overlay" aria-hidden="true" />

        <div className="differentials__content">
          <header className="differentials__intro" data-reveal>
            <p className="differentials__eyebrow">Diferenciais</p>
            <h2 id="differentials-title">Por que escolher a Forza Flex?</h2>
          </header>

          <ul className="differentials__list">
            {differentials.map(({ icon, iconClassName, title, description }) => (
              <li className="differentials__item" key={icon} data-reveal>
                <span className="differentials__icon" aria-hidden="true">
                  <img className={iconClassName} src={icon} alt="" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
