import { marked } from 'marked'

export interface NewsPost {
  slug: string
  title: string
  /** ISO date, e.g. "2026-11-11" — posts are sorted newest first by this. */
  date: string
  summary: string
  /** Short label shown on the card, e.g. "Team News". */
  category?: string
  /** Path under public/, e.g. "news/squad.webp". Cards fall back to a branded block without one. */
  cover?: string
  /** Rendered from the post's Markdown body at build time. */
  html: string
}

// Every Markdown file in src/content/news/ is a post. The filename (minus
// any leading "YYYY-MM-DD-" date) becomes the URL slug.
const files = import.meta.glob<string>('../content/news/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

/** Splits the `---` header block off a post and reads its `key: value` lines. */
function parsePost(path: string, raw: string): NewsPost {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) throw new Error(`News post ${path} is missing its --- header block`)

  const meta: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const sep = line.indexOf(':')
    if (sep === -1) continue
    const value = line.slice(sep + 1).trim().replace(/^(["'])(.*)\1$/, '$2')
    meta[line.slice(0, sep).trim()] = value
  }

  for (const key of ['title', 'date', 'summary']) {
    if (!meta[key]) throw new Error(`News post ${path} is missing "${key}" in its header`)
  }

  const filename = path.split('/').pop()!.replace(/\.md$/, '')
  return {
    slug: filename.replace(/^\d{4}-\d{2}-\d{2}-/, ''),
    title: meta.title,
    date: meta.date,
    summary: meta.summary,
    category: meta.category || undefined,
    cover: meta.cover || undefined,
    html: marked.parse(match[2], { async: false }),
  }
}

export const NEWS: NewsPost[] = Object.entries(files)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date))

export function findPost(slug: string | undefined): NewsPost | undefined {
  return NEWS.find((post) => post.slug === slug)
}

/** "2026-11-11" -> "11 November 2026". Parsed as UTC so the day never shifts with the viewer's timezone. */
export function formatNewsDate(date: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}
