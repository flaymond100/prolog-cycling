import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import i18n, { SUPPORTED_LANGUAGES, type SupportedLanguage } from '../i18n/config'
import { localizedPath, stripLangPrefix } from '../i18n/routing'
import './LanguageSwitcher.css'

const LABELS: Record<SupportedLanguage, string> = {
  en: 'EN',
  de: 'DE',
}

// Each language's own name, in its own language (endonym) — shown the same
// way regardless of the currently active UI language, so a reader can find
// their language even if they can't read the one currently displayed.
const NAMES: Record<SupportedLanguage, string> = {
  en: 'English',
  de: 'Deutsch',
}

interface LanguageSwitcherProps {
  lang: SupportedLanguage
}

function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const t = i18n.getFixedT(lang)
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  function selectLanguage(target: SupportedLanguage) {
    setOpen(false)
    if (target === lang) return
    const rest = stripLangPrefix(location.pathname)
    navigate(`${localizedPath(target, rest)}${location.search}${location.hash}`)
  }

  return (
    <div className="lang-switcher icon-box" ref={rootRef}>
      <button
        type="button"
        className="lang-switcher-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('languageSwitcher.label')}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {LABELS[lang]}
        <span className={`lang-switcher-caret${open ? ' is-open' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <ul className="lang-switcher-list" role="listbox" aria-label={t('languageSwitcher.label')}>
          {SUPPORTED_LANGUAGES.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === lang}
                className={code === lang ? 'is-active' : ''}
                onClick={() => selectLanguage(code)}
              >
                {NAMES[code]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
