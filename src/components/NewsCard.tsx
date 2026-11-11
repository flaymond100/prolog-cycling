import { Link } from 'react-router-dom'
import type { SupportedLanguage } from '../i18n/config'
import { localizedPath } from '../i18n/routing'
import { formatNewsDate, type NewsPost } from '../data/news'
import './NewsCard.css'

interface NewsCardProps {
  post: NewsPost
  lang: SupportedLanguage
  readMoreLabel: string
}

/** One post as a card — shared by Home's "Latest News" teaser and the /news list. */
function NewsCard({ post, lang, readMoreLabel }: NewsCardProps) {
  return (
    <Link to={localizedPath(lang, `/news/${post.slug}`)} className="news-card">
      <div className="news-card-media">
        {post.cover ? (
          <img src={`${import.meta.env.BASE_URL}${post.cover}`} alt="" loading="lazy" />
        ) : (
          // No photo yet — a branded block keeps the grid even.
          <span className="news-card-placeholder" aria-hidden="true">
            {post.category ?? 'Prolog'}
          </span>
        )}
      </div>
      <div className="news-card-body">
        <div className="news-card-meta">
          <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
          {post.category && <span className="news-card-category">{post.category}</span>}
        </div>
        <h3 className="news-card-title">{post.title}</h3>
        <p className="news-card-summary">{post.summary}</p>
        <span className="news-card-more">
          {readMoreLabel} <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  )
}

export default NewsCard
