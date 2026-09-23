import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Partners from './pages/Partners'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import type { SupportedLanguage } from './i18n/config'
import { localizedPath, stripLangPrefix } from './i18n/routing'

/** Bare "/" (and legacy unprefixed page links) always default to English. */
function LanguageRedirect({ path }: { path: string }) {
  return <Navigate to={localizedPath('en', path)} replace />
}

/** English is the only language the site exposes now — any /de link
 *  (old bookmarks, indexed search results) redirects to its /en equivalent
 *  rather than serving German. */
function GermanRedirect() {
  const { pathname } = useLocation()
  return <Navigate to={localizedPath('en', stripLangPrefix(pathname))} replace />
}

function languageRoutes(lang: SupportedLanguage) {
  return (
    <Route path={`/${lang}`} element={<RootLayout lang={lang} />}>
      <Route index element={<Home />} />
      <Route path="partners" element={<Partners />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LanguageRedirect path="/" />} />
      <Route path="/partners" element={<LanguageRedirect path="/partners" />} />
      <Route path="/contacts" element={<LanguageRedirect path="/contacts" />} />

      {languageRoutes('en')}
      <Route path="/de" element={<GermanRedirect />} />
      <Route path="/de/*" element={<GermanRedirect />} />

      <Route element={<RootLayout lang="en" />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
