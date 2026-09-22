import { useState, type SubmitEvent } from 'react'
import { useLangT } from '../i18n/useLangT'
import './ContactForm.css'

const FORM_ENDPOINT = 'https://formspree.io/f/xoevdnpb'

// Anything submitted faster than this was almost certainly filled in by a
// bot, not typed by a person — used alongside the honeypot below.
const MIN_SUBMIT_MS = 3000

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'invalid'

function randomCaptcha() {
  return { a: 1 + Math.floor(Math.random() * 8), b: 1 + Math.floor(Math.random() * 8) }
}

function ContactForm({ className }: { className?: string }) {
  const { t } = useLangT()
  const [status, setStatus] = useState<Status>('idle')
  const [captcha, setCaptcha] = useState(randomCaptcha)
  const [mountedAt] = useState(() => Date.now())

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    if (Number(data.get('captchaAnswer')) !== captcha.a + captcha.b) {
      setCaptcha(randomCaptcha())
      setStatus('invalid')
      return
    }

    // Honeypot filled in, or submitted implausibly fast — quietly pretend it
    // worked instead of sending it on, so bots don't learn to adapt.
    if (data.get('_gotcha') || Date.now() - mountedAt < MIN_SUBMIT_MS) {
      setStatus('success')
      form.reset()
      return
    }

    setStatus('submitting')
    data.set('_subject', `Prolog Cycling contact form: ${data.get('subject')}`)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className={`contact-form-status contact-form-status--success ${className ?? ''}`} role="status">
        {t('contacts.form.success')}
      </p>
    )
  }

  return (
    <form className={`contact-form ${className ?? ''}`} onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <div className="contact-form-field">
          <label htmlFor="firstName">{t('contacts.form.firstName')}</label>
          <input id="firstName" name="firstName" type="text" autoComplete="given-name" required />
        </div>
        <div className="contact-form-field">
          <label htmlFor="lastName">{t('contacts.form.lastName')}</label>
          <input id="lastName" name="lastName" type="text" autoComplete="family-name" required />
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-field">
          <label htmlFor="email">{t('contacts.form.email')}</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="contact-form-field">
          <label htmlFor="phone">{t('contacts.form.phone')}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="contact-form-field">
        <label htmlFor="subject">{t('contacts.form.subject')}</label>
        <input id="subject" name="subject" type="text" required />
      </div>

      <div className="contact-form-field">
        <label htmlFor="message">{t('contacts.form.message')}</label>
        <textarea id="message" name="message" rows={6} required />
      </div>

      <div className="contact-form-field">
        <label htmlFor="captchaAnswer">{t('contacts.form.captchaLabel', { a: captcha.a, b: captcha.b })}</label>
        <input id="captchaAnswer" name="captchaAnswer" type="text" inputMode="numeric" autoComplete="off" required />
      </div>

      {/* Honeypot — hidden from real visitors, Formspree drops submissions where a bot fills this in. */}
      <input
        type="text"
        name="_gotcha"
        className="contact-form-honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {status === 'error' && (
        <p className="contact-form-status contact-form-status--error" role="alert">
          {t('contacts.form.error')}
        </p>
      )}

      {status === 'invalid' && (
        <p className="contact-form-status contact-form-status--error" role="alert">
          {t('contacts.form.captchaError')}
        </p>
      )}

      <button type="submit" className="contact-form-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? t('contacts.form.submitting') : t('contacts.form.submit')}
      </button>
    </form>
  )
}

export default ContactForm
