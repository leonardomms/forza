import type { MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'plain' | 'primary' | 'outline' | 'whatsapp'
  ariaLabel?: string
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
}

export function Button({ children, href, variant = 'plain', ariaLabel, disabled = false, onClick }: ButtonProps) {
  const className = `button button--${variant}`
  if (href) {
    const isExternal = /^https?:\/\//.test(href)
    return <a className={className} href={href} aria-label={ariaLabel} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} onClick={onClick}>{children}</a>
  }

  return (
    <button className={className} type="button" disabled={disabled} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  )
}
