import { Link } from 'react-router-dom'
import { useLangT } from '../i18n/useLangT'
import { localizedPath } from '../i18n/routing'
import Seo from '../components/Seo'

function NotFound() {
  const { t, lang } = useLangT()

  return (
    <section className="page page-not-found">
      <Seo title={t('seo.notFound.title')} description={t('seo.notFound.description')} lang={lang} noindex />
      <h1>{t('notFound.heading')}</h1>
      <p>{t('notFound.text')}</p>
      <Link to={localizedPath(lang, '/')}>{t('notFound.backHome')}</Link>
    </section>
  )
}

export default NotFound
