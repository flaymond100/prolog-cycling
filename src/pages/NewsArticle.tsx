import type { MouseEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useLangT } from '../i18n/useLangT'
import { localizedPath } from '../i18n/routing'
import Seo from '../components/Seo'
import NotFound from './NotFound'
import { findPost, formatNewsDate } from '../data/news'
import './News.css'

function NewsArticle() {
  const { t, lang } = useLangT()
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = findPost(slug)

  if (!post) return <NotFound />

  // Links written in Markdown render as plain <a> tags — route the
  // site-internal ones ("/en/contacts") through the router so they don't
  // trigger a full page reload.
  const handleProseClick = (event: MouseEvent<HTMLDivElement>) => {
    const link = (event.target as HTMLElement).closest('a')
    const href = link?.getAttribute('href')
    if (!href?.startsWith('/') || event.metaKey || event.ctrlKey || event.shiftKey) return
    event.preventDefault()
    navigate(href)
  }

  return (
    <article className="page page-news-article">
      <Seo title={post.title} description={post.summary} lang={lang} />
      <Link to={localizedPath(lang, '/news')} className="news-back">
        <span aria-hidden="true">&larr;</span> {t('news.backToNews')}
      </Link>

      <div className="news-article-meta">
        <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
        {post.category && <span className="news-article-category">{post.category}</span>}
      </div>
      <h1 className="news-article-title">{post.title}</h1>
      <p className="news-article-summary">{post.summary}</p>

      {post.cover && (
        <img className="news-article-cover" src={`${import.meta.env.BASE_URL}${post.cover}`} alt="" />
      )}

      {/* Rendered from our own Markdown files in src/content/news/ at build
          time — never from user input, so injecting the HTML is safe. */}
      <div className="news-prose" onClick={handleProseClick} dangerouslySetInnerHTML={{ __html: post.html }} />

      <Link to={localizedPath(lang, '/news')} className="news-back">
        <span aria-hidden="true">&larr;</span> {t('news.allNews')}
      </Link>
    </article>
  )
}

export default NewsArticle
