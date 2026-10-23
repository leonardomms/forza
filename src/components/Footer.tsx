import type { LinkKey } from '../App'
import logo from '../../assets/Type=White.svg'

type FooterProps = {
  destinations: Partial<Record<LinkKey, string>>
}

type FooterLinkProps = {
  href?: string
  children: React.ReactNode
  className?: string
}

function FooterLink({ href, children, className = '' }: FooterLinkProps) {
  const classes = `site-footer__link ${className}`

  if (href) {
    const isExternal = /^https?:\/\//.test(href)
    return <a className={classes} href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}>{children}</a>
  }

  return <button className={classes} type="button" aria-disabled="true">{children}</button>
}

export function Footer({ destinations }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <img src={logo} alt="Forza Flex" />
          <p>Força que conecta o seu negócio.</p>
        </div>

        <nav className="site-footer__group" aria-label="Navegação do rodapé">
          <p className="site-footer__label">NAVEGAÇÃO</p>
          <FooterLink href="#top">Início</FooterLink>
          <FooterLink href={destinations.solutions ?? '#applications-title'}>Soluções</FooterLink>
          <FooterLink href={destinations.sobre}>Sobre</FooterLink>
        </nav>

        <div className="site-footer__group" aria-label="Contato">
          <p className="site-footer__label">CONTATO</p>
          <FooterLink href={destinations.whatsapp}>WhatsApp</FooterLink>
          <FooterLink href={destinations.instagram} className="site-footer__contact-link">Instagram</FooterLink>
        </div>

      </div>

      <p className="site-footer__copyright">© 2026 Forza Flex. Todos os direitos reservados.</p>
    </footer>
  )
}
