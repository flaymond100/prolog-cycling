import type { CSSProperties } from 'react'
import { useLangT } from '../i18n/useLangT'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import './Partners.css'

const CONTACT_EMAIL = 'info@prolog-cycling.com'
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Prolog Cycling partnership inquiry')}`

function barStyle(percent: number): CSSProperties {
  return { '--h': `${percent}%` } as CSSProperties
}

const GROWTH: { year: string; label: string; value: number }[] = [
  { year: '2023', label: '€46m', value: 15 },
  { year: '2025', label: '€70m', value: 45 },
  { year: '2026', label: '€80m', value: 55 },
  { year: '2028', label: '€100m+', value: 120 },
]

const PROBLEM_IDS = ['paidSocial', 'passiveSponsorship', 'topTier'] as const

const ROADMAP: { year: string; final?: boolean }[] = [
  { year: '2027' },
  { year: '2028' },
  { year: '2029' },
  { year: '2030' },
  { year: '2032', final: true },
]

const WHY_US_IDS = ['audience', 'performance', 'technical', 'vision'] as const

const ENGINE: { id: string; n: string; dark?: boolean }[] = [
  { id: 'document', n: '01', dark: true },
  { id: 'daily', n: '02' },
  { id: 'channels', n: '03' },
]

const TIER_ROW_KEYS = ['namingRights', 'jerseyPlacement', 'contentSeries', 'athleteDays', 'contentLicence'] as const

const TIERS: { id: string; highlight?: boolean }[] = [
  { id: 'founding', highlight: true },
  { id: 'performance' },
  { id: 'supplier' },
]

const MEASUREMENT_IDS = ['monthly', 'benchmarked', 'attribution', 'targets'] as const

const PEOPLE = [
  { id: 'kg', initials: 'KG', name: 'Kostiantyn Garbar' },
  { id: 'ss', initials: 'SS', name: 'Simon Schulz' },
  { id: 'jw', initials: 'JW', name: 'Jan Wagebach' },
] as const

function Partners() {
  const { t, lang } = useLangT()
  const packageItems = t('partners.package.items', { returnObjects: true }) as string[]

  return (
    <section className="page-partners">
      <Seo title={t('seo.partners.title')} description={t('seo.partners.description')} lang={lang} />

      {/* Hero */}
      <div className="pp-band pp-band--dark pp-hero scroll-fade">
        <div className="pp-container">
          <span className="pp-eyebrow pp-eyebrow--gold">{t('partners.hero.eyebrow')}</span>
          <h1 className="pp-hero-title">{t('partners.hero.title')}</h1>
          <p className="pp-hero-sub">{t('partners.hero.subtitle')}</p>
          <div className="pp-hero-actions">
            <a href="#roadmap" className="pp-button pp-button--ghost">
              {t('partners.hero.seeRoadmap')}
            </a>
            <a href={MAILTO} className="pp-button pp-button--gold">
              {t('partners.hero.becomePartner')} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* The Opportunity */}
      <div className="pp-band scroll-fade">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">{t('partners.opportunity.eyebrow')}</span>
            <h2 className="pp-h2">{t('partners.opportunity.heading')}</h2>
          </Reveal>

          <div className="pp-opportunity">
            <Reveal className="pp-chart" delay={80}>
              <div className="pp-chart-bars">
                {GROWTH.map((g, i) => (
                  <div className="pp-bar-col" key={g.year} style={{ transitionDelay: `${150 + i * 120}ms` }}>
                    <span className="pp-bar-value">{g.label}</span>
                    <span className="pp-bar" style={barStyle(g.value)} />
                    <span className="pp-bar-year">{g.year}</span>
                  </div>
                ))}
              </div>
              <p className="pp-caption">{t('partners.opportunity.chartCaption')}</p>
            </Reveal>

            <div className="pp-stat-list">
              <Reveal className="pp-stat" delay={120}>
                <Counter to={74} suffix="%" />
                <span className="pp-stat-label">{t('partners.opportunity.stats.growth')}</span>
              </Reveal>
              <Reveal className="pp-stat" delay={220}>
                <Counter to={15} />
                <span className="pp-stat-label">{t('partners.opportunity.stats.worldTeams')}</span>
              </Reveal>
              <Reveal className="pp-stat" delay={320}>
                <Counter to={7} />
                <span className="pp-stat-label">{t('partners.opportunity.stats.proTeams')}</span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="pp-band pp-band--alt scroll-fade">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">{t('partners.problem.eyebrow')}</span>
            <h2 className="pp-h2">{t('partners.problem.heading')}</h2>
          </Reveal>

          <div className="pp-numbered">
            {PROBLEM_IDS.map((id, i) => (
              <Reveal className="pp-numbered-item" delay={80 + i * 80} key={id}>
                <span className="pp-num">{i + 1}</span>
                <div>
                  <h3>{t(`partners.problem.items.${id}.title`)}</h3>
                  <p>{t(`partners.problem.items.${id}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-callout" delay={80}>
            {t('partners.problem.callout')}
          </Reveal>
        </div>
      </div>

      {/* What We Are */}
      <div className="pp-band pp-band--dark scroll-fade">
        <div className="pp-container pp-split">
          <Reveal>
            <span className="pp-eyebrow pp-eyebrow--gold">{t('partners.whatWeAre.eyebrow')}</span>
            <h2 className="pp-h2 pp-h2--light">
              {t('partners.whatWeAre.headingLine1')}
              <br />
              {t('partners.whatWeAre.headingLine2')}
            </h2>
            <p className="pp-body pp-body--light">{t('partners.whatWeAre.body')}</p>
            <p className="pp-emphasis">{t('partners.whatWeAre.emphasis')}</p>
          </Reveal>
          <Reveal delay={160} className="pp-stat-block">
            <Counter to={60} suffix="%" />
            <p className="pp-body pp-body--light">{t('partners.whatWeAre.statLabel')}</p>
            <p className="pp-emphasis pp-emphasis--sm">{t('partners.whatWeAre.statNote')}</p>
          </Reveal>
        </div>
      </div>

      {/* Roadmap */}
      <div className="pp-band scroll-fade" id="roadmap">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">{t('partners.roadmap.eyebrow')}</span>
            <h2 className="pp-h2">{t('partners.roadmap.heading')}</h2>
          </Reveal>

          <div className="pp-roadmap">
            {ROADMAP.map((r, i) => (
              <Reveal
                key={r.year}
                delay={i * 100}
                className={`pp-roadmap-step${r.final ? ' pp-roadmap-step--final' : ''}`}
              >
                <span className="pp-roadmap-year">{r.year}</span>
                <span className="pp-roadmap-stage">{t(`partners.roadmap.steps.${r.year}.stage`)}</span>
                <span className="pp-roadmap-detail">{t(`partners.roadmap.steps.${r.year}.detail`)}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-caption pp-caption--lg">{t('partners.roadmap.caption')}</Reveal>
        </div>
      </div>

      {/* Why Us */}
      <div className="pp-band pp-band--alt scroll-fade">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">{t('partners.whyUs.eyebrow')}</span>
            <h2 className="pp-h2">{t('partners.whyUs.heading')}</h2>
          </Reveal>

          <div className="pp-grid-2">
            {WHY_US_IDS.map((id, i) => (
              <Reveal key={id} delay={i * 90} className="pp-card">
                <span className="pp-num pp-num--outline">{i + 1}</span>
                <h3>{t(`partners.whyUs.items.${id}.title`)}</h3>
                <p>{t(`partners.whyUs.items.${id}.body`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* The Engine */}
      <div className="pp-band scroll-fade">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">{t('partners.engine.eyebrow')}</span>
            <h2 className="pp-h2">{t('partners.engine.heading')}</h2>
          </Reveal>

          <div className="pp-grid-3">
            {ENGINE.map((item, i) => (
              <Reveal
                key={item.id}
                delay={i * 110}
                className={`pp-card${item.dark ? ' pp-card--dark' : ''}`}
              >
                <span className="pp-num pp-num--gold">{item.n}</span>
                <h3>{t(`partners.engine.items.${item.id}.title`)}</h3>
                <p>{t(`partners.engine.items.${item.id}.body`)}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-callout">
            <strong>{t('partners.engine.calloutStrong')}</strong>
            <br />
            {t('partners.engine.calloutBody')}
          </Reveal>
        </div>
      </div>

      {/* The Package */}
      <div className="pp-band pp-band--alt scroll-fade">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">{t('partners.package.eyebrow')}</span>
            <h2 className="pp-h2">{t('partners.package.heading')}</h2>
          </Reveal>

          <Reveal>
            <ul className="pp-checklist">
              {packageItems.map((line) => (
                <li key={line} className="pp-checklist-item">
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="pp-callout">{t('partners.package.callout')}</Reveal>
        </div>
      </div>

      {/* Partnership Tiers */}
      <div className="pp-band scroll-fade" id="tiers">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">{t('partners.tiers.eyebrow')}</span>
            <h2 className="pp-h2">{t('partners.tiers.heading')}</h2>
          </Reveal>

          <div className="pp-tiers">
            {TIERS.map((tier, i) => (
              <Reveal
                key={tier.id}
                delay={i * 110}
                className={`pp-tier${tier.highlight ? ' pp-tier--highlight' : ''}`}
              >
                {tier.highlight && <span className="pp-tier-badge">{t('partners.tiers.badgeOnlyOne')}</span>}
                <h3>{t(`partners.tiers.${tier.id}.name`)}</h3>
                <p className="pp-tier-commitment">{t(`partners.tiers.${tier.id}.commitment`)}</p>
                <ul className="pp-tier-rows">
                  {TIER_ROW_KEYS.map((rowKey) => (
                    <li key={rowKey}>
                      <span>{t(`partners.tiers.rowLabels.${rowKey}`)}</span>
                      <strong>{t(`partners.tiers.${tier.id}.rows.${rowKey}`)}</strong>
                    </li>
                  ))}
                </ul>
                <p className="pp-tier-slots">{t(`partners.tiers.${tier.id}.slots`)}</p>
                <a href={MAILTO} className={`pp-button ${tier.highlight ? 'pp-button--gold' : 'pp-button--outline'}`}>
                  {t('partners.tiers.enquire')} <span aria-hidden="true">&rarr;</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-caption pp-caption--lg pp-caption--center">
            {t('partners.tiers.footerCaption')}
          </Reveal>
        </div>
      </div>

      {/* Measurement */}
      <div className="pp-band pp-band--alt scroll-fade">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">{t('partners.measurement.eyebrow')}</span>
            <h2 className="pp-h2">{t('partners.measurement.heading')}</h2>
          </Reveal>

          <div className="pp-grid-4">
            {MEASUREMENT_IDS.map((id, i) => (
              <Reveal key={id} delay={i * 90} className="pp-card pp-card--flat">
                <h3>{t(`partners.measurement.items.${id}.title`)}</h3>
                <p>{t(`partners.measurement.items.${id}.body`)}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-callout pp-callout--dark">
            <strong>{t('partners.measurement.calloutStrong')}</strong>
            <br />
            {t('partners.measurement.calloutBody')}
          </Reveal>
        </div>
      </div>

      {/* People */}
      <div className="pp-band scroll-fade">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">{t('partners.people.eyebrow')}</span>
            <h2 className="pp-h2">{t('partners.people.heading')}</h2>
          </Reveal>

          <div className="pp-grid-3">
            {PEOPLE.map((person, i) => (
              <Reveal key={person.id} delay={i * 100} className="pp-person">
                <span className="pp-person-avatar">{person.initials}</span>
                <h3>{person.name}</h3>
                <span className="pp-person-role">{t(`partners.people.${person.id}.role`)}</span>
                <p>{t(`partners.people.${person.id}.bio`)}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-caption pp-caption--lg pp-caption--center">
            {t('partners.people.footerCaption')}
          </Reveal>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="pp-band pp-band--dark pp-closing scroll-fade">
        <div className="pp-container">
          <Reveal>
            <h2 className="pp-h2 pp-h2--light">
              {t('partners.closing.headingLine1')}
              <br />
              {t('partners.closing.headingLine2')}
            </h2>
            <p className="pp-closing-sub">{t('partners.closing.subtitle')}</p>
            <div className="pp-hero-actions">
              <a href={MAILTO} className="pp-button pp-button--gold">
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Partners
