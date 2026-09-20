import { Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Partners from './pages/Partners'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import { getStoredLanguage, type SupportedLanguage } from './i18n/config'
import { localizedPath } from './i18n/routing'

/** Bare "/" (and legacy unprefixed page links) pick up the remembered
 *  language preference, defaulting to English — an explicit /en or /de
 *  link always wins over this. */
function LanguageRedirect({ path }: { path: string }) {
  return <Navigate to={localizedPath(getStoredLanguage(), path)} replace />
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
      {languageRoutes('de')}

      <Route element={<RootLayout lang="en" />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
