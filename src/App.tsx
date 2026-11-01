import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Hobbies from './components/Hobbies'
import Projects from './components/Projects'
import Recommendations from './components/Recommendations'
import Skills from './components/Skills.tsx'
import { type Language } from './i18n'
import { translations } from "./translations.ts"
import './App.css'

function App() {
  const [language, setLanguage] = useState<Language>('fr')
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy.pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', copy.pageTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', copy.description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', copy.pageTitle)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', copy.description)
  }, [copy.description, copy.pageTitle, language])

  return (
    <div className="site-shell" id="accueil">
      <a className="skip-link" href="#contenu-principal">{copy.skipToContent}</a>
      <Header copy={copy} language={language} onLanguageChange={setLanguage} />
      <main id="contenu-principal" tabIndex={-1}>
        <Hero copy={copy} />
        <About copy={copy} />
        <Education copy={copy} />
        <Experience copy={copy} />
        <Skills copy={copy} />
        <Projects copy={copy} />
        <Recommendations copy={copy} />
        <Hobbies copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  )
}

export default App
