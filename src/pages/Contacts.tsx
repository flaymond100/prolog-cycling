import { useLangT } from '../i18n/useLangT'
import Seo from '../components/Seo'

function Contacts() {
  const { t, lang } = useLangT()

  return (
    <section className="page page-contacts">
      <Seo title={t('seo.contacts.title')} description={t('seo.contacts.description')} lang={lang} />
      <h1>{t('contacts.heading')}</h1>
      <p>{t('contacts.intro')}</p>
      <ul className="contact-list">
        <li>
          {t('contacts.email')}: info@prolog-cycling.com
        </li>
        <li>
          {t('contacts.phone')}: +00 000 000 000
        </li>
        <li>
          {t('contacts.address')}: {t('contacts.addressTbd')}
        </li>
      </ul>
    </section>
  )
}

export default Contacts
