import { useLangT } from '../i18n/useLangT'
import Seo from '../components/Seo'
import ContactForm from '../components/ContactForm'

function Contacts() {
  const { t, lang } = useLangT()

  return (
    <section className="page page-contacts">
      <Seo title={t('seo.contacts.title')} description={t('seo.contacts.description')} lang={lang} />
      <h1>{t('contacts.heading')}</h1>
      <p>{t('contacts.intro')}</p>
      <ul className="contact-list">
        <li>
          {t('contacts.email')}: <a href="mailto:info@prolog-cycling.com">info@prolog-cycling.com</a>
        </li>
        {/* <li>
          {t('contacts.phone')}: +00 000 000 000
        </li> */}
        <li>
          {t('contacts.address')}: {t('contacts.addressTbd')}
        </li>
      </ul>

      <h2 className="contact-form-heading">{t('contacts.form.heading')}</h2>
      <ContactForm />
    </section>
  )
}

export default Contacts
