import { useLangT } from '../i18n/useLangT'
import Seo from '../components/Seo'
import NewsCard from '../components/NewsCard'
import { NEWS } from '../data/news'
import './News.css'

function News() {
  const { t, lang } = useLangT()

  return (
    <section className="page page-news">
      <Seo title={t('seo.news.title')} description={t('seo.news.description')} lang={lang} />
      <h1>{t('news.heading')}</h1>
      <p className="news-intro">{t('news.intro')}</p>

      {NEWS.length === 0 ? (
        <p className="news-empty">{t('news.empty')}</p>
      ) : (
        <div className="news-grid news-list">
          {NEWS.map((post) => (
            <NewsCard key={post.slug} post={post} lang={lang} readMoreLabel={t('news.readMore')} />
          ))}
        </div>
      )}
    </section>
  )
}

export default News
