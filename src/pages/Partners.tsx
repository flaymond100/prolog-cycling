import type { CSSProperties } from 'react'
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

const ROADMAP = [
  { year: '2027', stage: 'Club team', detail: '1m video views. Foundation built in public.' },
  { year: '2028', stage: 'Frauen-Bundesliga', detail: 'National results. First title partner.' },
  { year: '2029', stage: 'UCI Continental', detail: 'Full UCI race calendar.' },
  { year: '2030', stage: 'Elite Continental', detail: "First Women's WorldTour start." },
  { year: '2032', stage: 'UCI ProTeam', detail: 'WorldTour access route opens.', final: true },
]

const WHY_US = [
  {
    title: 'An audience before the first race',
    body: 'Content production starts before racing does. The story is already being filmed.',
  },
  {
    title: 'In-house performance department',
    body: 'Individual training plans with testing and metabolic profiling. We invest in every rider.',
  },
  {
    title: 'Technical capability built-in',
    body: 'Our founder builds and maintains the software. Data, analytics and content infrastructure, developed in-house at zero cost.',
  },
  {
    title: 'Modern vision on cycling and business',
    body: 'Cycling has always worked as a B2B network, and we build that in deliberately: riders selected on data and numbers, not connections.',
  },
]

const ENGINE = [
  {
    n: '01',
    title: 'Document a journey',
    body: 'Ongoing story of development from zero to hero. The asset your brand attaches to, and the reason people come back.',
    dark: true,
  },
  {
    n: '02',
    title: 'Daily content',
    body: '5–7 Reels/Posts/Stories per week. Reach at the top of the funnel, produced at near-zero marginal cost.',
  },
  {
    n: '03',
    title: 'Rider channels',
    body: 'Every rider contract includes content obligations. Eight distribution points, not one.',
  },
]

const PACKAGE = [
  'Guaranteed monthly impressions and watch-time, reported to you.',
  'Product integrated into content, not pasted onto it.',
  'Content we produce is yours to use.',
  'Athlete access for your own campaigns.',
  'Community events and rider appearances.',
  'A named position in a growth story you can tell internally for a decade.',
]

const TIERS = [
  {
    name: 'Founding Partner',
    commitment: '3-year commitment',
    highlight: true,
    slots: '1 slot, ever',
    rows: [
      ['Naming rights', 'Yes'],
      ['Jersey placement', 'Primary'],
      ['Content series', 'Dedicated'],
      ['Athlete days / year', '6'],
      ['Content licence', 'Full'],
    ],
  },
  {
    name: 'Performance Partner',
    commitment: '2-year commitment',
    slots: '3 slots',
    rows: [
      ['Naming rights', 'None'],
      ['Jersey placement', 'Secondary'],
      ['Content series', 'Integrated'],
      ['Athlete days / year', '3'],
      ['Content licence', 'Full'],
    ],
  },
  {
    name: 'Official Supplier',
    commitment: 'Product partnership',
    slots: '6 slots',
    rows: [
      ['Naming rights', 'None'],
      ['Jersey placement', 'Logo'],
      ['Content series', 'Mentions'],
      ['Athlete days / year', '1'],
      ['Content licence', 'Limited'],
    ],
  },
]

const MEASUREMENT = [
  {
    title: 'Monthly reporting',
    body: 'Impressions, watch-time minutes, engagement rate and audience demographics, delivered every month.',
  },
  {
    title: 'Benchmarked value',
    body: 'Earned media value measured against equivalent paid social spend.',
  },
  {
    title: 'Direct attribution',
    body: 'Trackable links and discount codes so revenue can be traced, not estimated.',
  },
  {
    title: 'Contracted targets',
    body: 'Media targets written into the agreement. Quarterly review.',
  },
]

const PEOPLE = [
  {
    initials: 'KG',
    name: 'Kostiantyn Garbar',
    role: 'Team Principal',
    bio: 'Cycling coach, software engineer, consultant. Founder of NRC International Team.',
  },
  {
    initials: 'SS',
    name: 'Simon Schulz',
    role: 'Director of Strategic Partnerships',
    bio: 'Bio coming soon.',
  },
  {
    initials: 'JW',
    name: 'Jan Wagebach',
    role: 'Finance Director',
    bio: 'Bio coming soon.',
  },
]

function Partners() {
  return (
    <section className="page-partners">
      <Seo
        title="Partner With Us"
        description="Partner with Prolog Cycling: our roadmap from club team to the Women's WorldTour, 2027–2032, the opportunity, and how to become a founding partner."
        path="/partners"
      />

      {/* Hero */}
      <div className="pp-band pp-band--dark pp-hero">
        <div className="pp-container">
          <span className="pp-eyebrow pp-eyebrow--gold">Partner With Us</span>
          <h1 className="pp-hero-title">Building Germany's most-watched women's racing team.</h1>
          <p className="pp-hero-sub">Our roadmap from club team to the Women's WorldTour, 2027 to 2032.</p>
          <div className="pp-hero-actions">
            <a href="#roadmap" className="pp-button pp-button--ghost">
              See the roadmap
            </a>
            <a href={MAILTO} className="pp-button pp-button--gold">
              Become a partner <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* The Opportunity */}
      <div className="pp-band">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">The Opportunity</span>
            <h2 className="pp-h2">The fastest-growing property in European sport</h2>
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
              <p className="pp-caption">Source: UCI 2026 team budget figures.</p>
            </Reveal>

            <div className="pp-stat-list">
              <Reveal className="pp-stat" delay={120}>
                <Counter to={74} suffix="%" />
                <span className="pp-stat-label">growth in 3 seasons</span>
              </Reveal>
              <Reveal className="pp-stat" delay={220}>
                <Counter to={15} />
                <span className="pp-stat-label">WorldTeams exist worldwide</span>
              </Reveal>
              <Reveal className="pp-stat" delay={320}>
                <Counter to={7} />
                <span className="pp-stat-label">ProTeams exist worldwide</span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="pp-band pp-band--alt">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">The Problem</span>
            <h2 className="pp-h2">Reaching cycling audiences keeps getting more expensive</h2>
          </Reveal>

          <div className="pp-numbered">
            <Reveal className="pp-numbered-item" delay={80}>
              <span className="pp-num">1</span>
              <div>
                <h3>Paid social costs more every year</h3>
                <p>CPMs rise, campaigns end and you own nothing afterwards. The spend leaves no asset behind.</p>
              </div>
            </Reveal>
            <Reveal className="pp-numbered-item" delay={160}>
              <span className="pp-num">2</span>
              <div>
                <h3>Traditional team sponsorship is passive</h3>
                <p>A logo on a jersey is unmeasurable and undifferentiated. You are one of fifteen.</p>
              </div>
            </Reveal>
            <Reveal className="pp-numbered-item" delay={240}>
              <span className="pp-num">3</span>
              <div>
                <h3>The top tier is priced out of reach</h3>
                <p>A men's WorldTour team costs €5–15m a year and still buys you a logo.</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="pp-callout" delay={80}>
            You need attention, attribution and a story. A jersey logo delivers none of them.
          </Reveal>
        </div>
      </div>

      {/* What We Are */}
      <div className="pp-band pp-band--dark">
        <div className="pp-container pp-split">
          <Reveal>
            <span className="pp-eyebrow pp-eyebrow--gold">What We Are</span>
            <h2 className="pp-h2 pp-h2--light">
              A media company
              <br />
              that races bikes.
            </h2>
            <p className="pp-body pp-body--light">
              Every other team races first and hopes coverage follows. We invert it: we build the audience, and the
              audience funds the racing.
            </p>
            <p className="pp-emphasis">It is the business model.</p>
          </Reveal>
          <Reveal delay={160} className="pp-stat-block">
            <Counter to={60} suffix="%" />
            <p className="pp-body pp-body--light">of our first-year budget goes to content production</p>
            <p className="pp-emphasis pp-emphasis--sm">No team at our level does this.</p>
          </Reveal>
        </div>
      </div>

      {/* Roadmap */}
      <div className="pp-band" id="roadmap">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">The Roadmap</span>
            <h2 className="pp-h2">Six years to the ProTeam tier</h2>
          </Reveal>

          <div className="pp-roadmap">
            {ROADMAP.map((r, i) => (
              <Reveal
                key={r.year}
                delay={i * 100}
                className={`pp-roadmap-step${r.final ? ' pp-roadmap-step--final' : ''}`}
              >
                <span className="pp-roadmap-year">{r.year}</span>
                <span className="pp-roadmap-stage">{r.stage}</span>
                <span className="pp-roadmap-detail">{r.detail}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-caption pp-caption--lg">
            Continental registration in 2029 is the point at which we enter the UCI system. Everything before it is
            preparation; everything after it is progression.
          </Reveal>
        </div>
      </div>

      {/* Why Us */}
      <div className="pp-band pp-band--alt">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">Why Us</span>
            <h2 className="pp-h2">Four things no other team at this level has</h2>
          </Reveal>

          <div className="pp-grid-2">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="pp-card">
                <span className="pp-num pp-num--outline">{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* The Engine */}
      <div className="pp-band">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">The Engine</span>
            <h2 className="pp-h2">Three layers, running continuously</h2>
          </Reveal>

          <div className="pp-grid-3">
            {ENGINE.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 110}
                className={`pp-card${item.dark ? ' pp-card--dark' : ''}`}
              >
                <span className="pp-num pp-num--gold">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-callout">
            <strong>Building a professional cycling team from nothing.</strong>
            <br />
            Your brand is in the story from season one. That position cannot be bought later.
          </Reveal>
        </div>
      </div>

      {/* The Package */}
      <div className="pp-band pp-band--alt">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">The Package</span>
            <h2 className="pp-h2">Not a logo. A measurable media package.</h2>
          </Reveal>

          <Reveal>
            <ul className="pp-checklist">
              {PACKAGE.map((line) => (
                <li key={line} className="pp-checklist-item">
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="pp-callout">
            We contract on media delivered, not on exposure hoped for.
          </Reveal>
        </div>
      </div>

      {/* Partnership Tiers */}
      <div className="pp-band" id="tiers">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">Partnership Tiers</span>
            <h2 className="pp-h2">Three levels. One founding position.</h2>
          </Reveal>

          <div className="pp-tiers">
            {TIERS.map((tier, i) => (
              <Reveal
                key={tier.name}
                delay={i * 110}
                className={`pp-tier${tier.highlight ? ' pp-tier--highlight' : ''}`}
              >
                {tier.highlight && <span className="pp-tier-badge">Only 1 available</span>}
                <h3>{tier.name}</h3>
                <p className="pp-tier-commitment">{tier.commitment}</p>
                <ul className="pp-tier-rows">
                  {tier.rows.map(([label, value]) => (
                    <li key={label}>
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </li>
                  ))}
                </ul>
                <p className="pp-tier-slots">{tier.slots}</p>
                <a href={MAILTO} className={`pp-button ${tier.highlight ? 'pp-button--gold' : 'pp-button--outline'}`}>
                  Enquire <span aria-hidden="true">&rarr;</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-caption pp-caption--lg pp-caption--center">
            One founding partner. Ever. The position cannot be created again.
          </Reveal>
        </div>
      </div>

      {/* Measurement */}
      <div className="pp-band pp-band--alt">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">Measurement</span>
            <h2 className="pp-h2">What you sign off on</h2>
          </Reveal>

          <div className="pp-grid-4">
            {MEASUREMENT.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="pp-card pp-card--flat">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-callout pp-callout--dark">
            <strong>Year one is priced on risk we carry, not risk you carry.</strong>
            <br />
            We take a reduced fee in year one, escalating only against delivered metrics. If we miss the numbers, you
            pay less.
          </Reveal>
        </div>
      </div>

      {/* People */}
      <div className="pp-band">
        <div className="pp-container">
          <Reveal className="pp-section-head">
            <span className="pp-eyebrow">The People</span>
            <h2 className="pp-h2">Who is building this</h2>
          </Reveal>

          <div className="pp-grid-3">
            {PEOPLE.map((person, i) => (
              <Reveal key={person.name} delay={i * 100} className="pp-person">
                <span className="pp-person-avatar">{person.initials}</span>
                <h3>{person.name}</h3>
                <span className="pp-person-role">{person.role}</span>
                <p>{person.bio}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-caption pp-caption--lg pp-caption--center">
            Sponsors fund people before they fund plans.
          </Reveal>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="pp-band pp-band--dark pp-closing">
        <div className="pp-container">
          <Reveal>
            <h2 className="pp-h2 pp-h2--light">
              In 2032 this team will start
              <br />a Women's WorldTour race.
            </h2>
            <p className="pp-closing-sub">The only question is whose name is on the jersey.</p>
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
