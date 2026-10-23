import { Button } from './Action'
import type { LinkKey } from '../App'

type Props = { destinations: Partial<Record<LinkKey, string>> }

export function Hero({ destinations }: Props) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__copy">
            <h1 id="hero-title">Força que conecta o seu negócio</h1>
            <p>Soluções em mangueiras hidráulicas, industriais e agrícolas para atender às necessidades da sua operação. Temos o produto certo para cada aplicação.</p>
          </div>
          <div className="hero__actions">
            <Button href={destinations.quote} variant="primary">Solicitar orçamento</Button>
            <Button href={destinations.products} variant="outline">Conhecer soluções</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
