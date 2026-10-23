import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'

type FieldName = 'name' | 'email' | 'message'
type Values = Record<FieldName, string>
type Touched = Record<FieldName, boolean>

const initialValues: Values = { name: '', email: '', message: '' }
const initialTouched: Touched = { name: false, email: false, message: false }

function validate(values: Values) {
  const errors: Partial<Record<FieldName, string>> = {}

  if (!values.name.trim()) errors.name = 'Informe seu nome.'
  if (!values.email.trim()) errors.email = 'Informe seu e-mail.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Informe um e-mail válido.'
  if (!values.message.trim()) errors.message = 'Escreva uma mensagem.'

  return errors
}

export function QuoteForm({ endpoint }: { endpoint?: string }) {
  const [values, setValues] = useState(initialValues)
  const [touched, setTouched] = useState(initialTouched)
  const [attempted, setAttempted] = useState(false)
  const [integrationPending, setIntegrationPending] = useState(false)
  const errors = useMemo(() => validate(values), [values])

  const updateField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as FieldName
    setValues((current) => ({ ...current, [field]: event.target.value }))
    setIntegrationPending(false)
  }

  const blurField = (field: FieldName) => {
    setTouched((current) => ({ ...current, [field]: true }))
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    setAttempted(true)

    if (Object.keys(errors).length > 0 || !endpoint) {
      event.preventDefault()
      if (!endpoint && Object.keys(errors).length === 0) setIntegrationPending(true)
    }
  }

  const fieldError = (field: FieldName) => (attempted || touched[field]) ? errors[field] : undefined

  return (
    <section className="quote" aria-labelledby="quote-title">
      <div className="quote__panel">
        <div className="quote__intro">
          <h2 id="quote-title">Não encontrou o que procura?</h2>
          <p>Preencha os dados e a nossa equipe entrará em contato.</p>
        </div>

        <form className="quote__form" action={endpoint} method={endpoint ? 'post' : undefined} onSubmit={submit} noValidate>
          <FormField label="Nome" name="name" error={fieldError('name')}>
            <input id="quote-name" name="name" type="text" autoComplete="name" placeholder="Seu nome" required value={values.name} onChange={updateField} onBlur={() => blurField('name')} aria-invalid={Boolean(fieldError('name'))} aria-describedby={fieldError('name') ? 'quote-name-error' : undefined} />
          </FormField>

          <FormField label="E-mail" name="email" error={fieldError('email')}>
            <input id="quote-email" name="email" type="email" autoComplete="email" placeholder="seu@email.com" required value={values.email} onChange={updateField} onBlur={() => blurField('email')} aria-invalid={Boolean(fieldError('email'))} aria-describedby={fieldError('email') ? 'quote-email-error' : undefined} />
          </FormField>

          <FormField label="Mensagem" name="message" error={fieldError('message')} multiline>
            <textarea id="quote-message" name="message" placeholder="Escreva sua mensagem aqui" required value={values.message} onChange={updateField} onBlur={() => blurField('message')} aria-invalid={Boolean(fieldError('message'))} aria-describedby={fieldError('message') ? 'quote-message-error' : undefined} />
          </FormField>

          <button className="quote__submit" type="submit">Solicitar Orçamento</button>
          <p className="sr-only" role="status" aria-live="polite">{integrationPending ? 'O envio do formulário ainda não está configurado.' : ''}</p>
        </form>
      </div>
    </section>
  )
}

function FormField({ label, name, error, multiline = false, children }: { label: string; name: FieldName; error?: string; multiline?: boolean; children: React.ReactNode }) {
  return (
    <div className={`quote-field${multiline ? ' quote-field--message' : ''}`}>
      <label htmlFor={`quote-${name}`}>{label}</label>
      {children}
      {error && <span className="quote-field__error" id={`quote-${name}-error`}>{error}</span>}
    </div>
  )
}
