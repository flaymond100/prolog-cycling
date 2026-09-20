import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLangT } from '../i18n/useLangT'
import { localizedPath } from '../i18n/routing'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import './Home.css'

const JOIN_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd_qNpqO2Tuz-VpnB4NPq-oOti9teQuLl2HicjRsHMk8XBEJg/viewform?fbzx=-4112900210892274421&pli=1'

const MISSION_IDS = ['developmentFirst', 'dataOverGuesswork', 'differentStructure'] as const

const INSTAGRAM_URL = 'https://www.instagram.com/prologcycling/'

// From behold.so — connect @prologcycling there, create a 6-post feed, and
// swap this for the feed ID it gives you (Home is the only place it's used).
const BEHOLD_FEED_ID = 'FsioMwXSYgqlkWABzfyU'

const ROADMAP: { year: string; current?: boolean; final?: boolean }[] = [
  { year: '2027', current: true },
  { year: '2028' },
  { year: '2029' },
  { year: '2030' },
  { year: '2032', final: true },
]

function Home() {
  const { t, lang } = useLangT()
  const [openStep, setOpenStep] = useState<string | null>('2027')

  return (
    <section className="page page-home">
      <Seo title={t('seo.home.title')} description={t('seo.home.description')} lang={lang} />
      <div className="home-hero home-block">
        {/* Entrance choreography (opacity + delay) lives on .home-hero
            itself, timed against page load — a scroll-linked animation on
            the same element would fight it over `opacity`. The exit
            blur/fade on scroll lives on this inner wrapper instead, so the
            two never touch the same property on the same element. */}
        <div className="home-hero-inner scroll-fade">
          {/* The logo is the visual headline, but crawlers need real text —
              this h1 carries the page's actual topic, hidden accessibly. */}
          <h1 className="visually-hidden">{t('home.hiddenTitle')}</h1>
          <img className="hero-logo" src={`${import.meta.env.BASE_URL}prolog-logo-tp.png`} alt="Prolog Cycling" />
          <p className="hero-text">{t('home.heroText')}</p>
          <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
            {t('home.joinTeam')} <span className="cta-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="home-block home-media-block scroll-fade">
        <span className="kicker-tag kicker-tag--gold">{t('home.whatWeAreKicker')}</span>
        <h2 className="home-media-heading">{t('home.raisingLevel')}</h2>
        <p className="home-media-text">{t('home.mediaText')}</p>
        <div className="home-mission-grid">
          {MISSION_IDS.map((id, i) => (
            <Reveal key={id} delay={i * 100} className="home-mission-item">
              <h3>{t(`home.mission.${id}.title`)}</h3>
              <p>{t(`home.mission.${id}.body`)}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="home-block home-block--center roadmap-teaser scroll-fade">
        <span className="kicker-tag">{t('home.roadmapKicker')}</span>
        <h2>{t('home.roadmapHeading')}</h2>
        <p>
          {t('home.roadmapIntro')} <span className="roadmap-teaser-hint">{t('home.roadmapHint')}</span>
        </p>

        <Reveal className="timeline">
          <span className="timeline-line" aria-hidden="true" />
          {ROADMAP.map((step, i) => {
            const isOpen = openStep === step.year
            const points = t(`home.roadmap.${step.year}.points`, { returnObjects: true }) as string[]
            return (
              <Reveal
                key={step.year}
                delay={i * 140}
                className={`timeline-step${step.final ? ' timeline-step--final' : ''}${step.current ? ' timeline-step--current' : ''}${isOpen ? ' is-open' : ''}`}
              >
                <span className="timeline-badge">{String(i + 1).padStart(2, '0')}</span>
                <div className="timeline-content">
                  {step.current && (
                    <span className="timeline-now">
                      <span className="timeline-now-dot" aria-hidden="true" />
                      {t('home.weAreHere')}
                    </span>
                  )}
                  <button
                    type="button"
                    className="timeline-trigger"
                    onClick={() => setOpenStep(isOpen ? null : step.year)}
                    aria-expanded={isOpen}
                    aria-controls={`timeline-panel-${step.year}`}
                  >
                    <h3 className="timeline-stage">
                      {step.year} · {t(`home.roadmap.${step.year}.stage`)}
                    </h3>
                    <span className="timeline-toggle" aria-hidden="true" />
                  </button>
                  <ul className="timeline-points">
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="timeline-panel" id={`timeline-panel-${step.year}`}>
                    <div className="timeline-panel-inner">
                      <p>{t(`home.roadmap.${step.year}.detail`)}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </Reveal>

        <Link to={localizedPath(lang, '/partners')} className="cta-button">
          {t('home.partnerWithUs')} <span className="cta-arrow" aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="home-block home-block--center home-instagram scroll-fade">
        <span className="kicker-tag">{t('home.instagramKicker')}</span>
        <h2>{t('home.instagramHeading')}</h2>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="instagram-link">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          @prologcycling
        </a>
        <behold-widget feed-id={BEHOLD_FEED_ID} />
      </div>

      {/* <div className="home-block join-cta scroll-fade">
        <span className="kicker-tag">Join Us</span>
        <h2>Sign up to ride with us</h2>
        <p>
          We're recruiting women riders of every level for the next season. No
          experience required, just the drive to race. Sign up and we'll be in touch.
        </p>
        <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
          Join the team <span className="cta-arrow" aria-hidden="true">&rarr;</span>
        </a>
      </div> */}
    </section>
  )
}

export default Home
