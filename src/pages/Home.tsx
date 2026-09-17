import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import './Home.css'

const JOIN_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd_qNpqO2Tuz-VpnB4NPq-oOti9teQuLl2HicjRsHMk8XBEJg/viewform?fbzx=-4112900210892274421&pli=1'

const MISSION = [
  {
    title: 'Development First',
    body: "We're here to grow the sport itself: more riders, more opportunity, more depth in the women's peloton.",
  },
  {
    title: 'Data Over Guesswork',
    body: "Individual training plans, testing, and metabolic profiling. Every rider's progress is measured, not assumed.",
  },
  {
    title: 'A Different Structure',
    body: 'Riders selected on data and numbers, not connections. A team built around the people racing, not around hierarchy.',
  },
]

const ROADMAP = [
  {
    year: '2027',
    stage: 'Club Team',
    current: true,
    points: ['Building foundation of the team', 'Races accross Germany on different levels'],
    detail:
      'We start as an amateur club team, racing locally while documenting every step, building an audience and a training system before we ever chase a UCI licence.',
  },
  {
    year: '2028',
    stage: 'Frauen-Bundesliga',
    points: ['National results', 'First title partner'],
    detail:
      "Stepping up to Germany's national league. Real competition, real results, and the first commercial partner riding alongside us.",
  },
  {
    year: '2029',
    stage: 'UCI Continental',
    points: ['Full UCI race calendar', 'Entry into the UCI system'],
    detail:
      "Registering as a UCI Continental team opens the door to the international calendar. This is where we formally enter professional cycling's structure.",
  },
  {
    year: '2030',
    stage: 'Elite Continental',
    points: ["First Women's WorldTour start"],
    detail:
      'A stronger roster and a full European racing programme, aimed squarely at a start in the Women\'s WorldTour.',
  },
  {
    year: '2032',
    stage: 'UCI ProTeam',
    final: true,
    points: ['WorldTour access route opens', 'The breakaway becomes the peloton'],
    detail:
      "The destination: full ProTeam status and a start in the Women's WorldTour, proving the model works from zero.",
  },
]

function Home() {
  const [openStep, setOpenStep] = useState<string | null>('2027')

  return (
    <section className="page page-home">
      <Seo
        title="Prolog Cycling"
        description="Prolog Cycling is a women's competitive cycling team recruiting riders of every level. Join the team and race with us this season."
        path="/"
      />
      <div className="home-hero home-block">
        {/* Entrance choreography (opacity + delay) lives on .home-hero
            itself, timed against page load — a scroll-linked animation on
            the same element would fight it over `opacity`. The exit
            blur/fade on scroll lives on this inner wrapper instead, so the
            two never touch the same property on the same element. */}
        <div className="home-hero-inner scroll-fade">
          {/* The logo is the visual headline, but crawlers need real text —
              this h1 carries the page's actual topic, hidden accessibly. */}
          <h1 className="visually-hidden">Prolog Cycling | Women's Competitive Cycling Team</h1>
          <img className="hero-logo" src={`${import.meta.env.BASE_URL}prolog-logo-tp.png`} alt="Prolog Cycling" />
          <p className="hero-text">
            We're a new name in the women's peloton, built differently from day one.
          </p>
          <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
            Join the team <span className="cta-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="home-block home-media-block scroll-fade">
        <span className="kicker-tag kicker-tag--gold">What We Are</span>
        <h2 className="home-media-heading">Raising the level of women's cycling.</h2>
        <p className="home-media-text">
          Prolog Cycling exists to push women's cycling forward, not by doing things the
          traditional way, but by rethinking how a team is built.
        </p>
        <div className="home-mission-grid">
          {MISSION.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="home-mission-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="home-block home-block--center roadmap-teaser scroll-fade">
        <span className="kicker-tag">The Roadmap</span>
        <h2>Six years. One breakaway.</h2>
        <p>
          We've mapped the road from first race to the Women's WorldTour, 2027 to 2032. No
          shortcuts, no guesswork: here's exactly how we get there.{' '}
          <span className="roadmap-teaser-hint">Tap a step to see more.</span>
        </p>

        <Reveal className="timeline">
          <span className="timeline-line" aria-hidden="true" />
          {ROADMAP.map((step, i) => {
            const isOpen = openStep === step.year
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
                      We are here
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
                      {step.year} · {step.stage}
                    </h3>
                    <span className="timeline-toggle" aria-hidden="true" />
                  </button>
                  <ul className="timeline-points">
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="timeline-panel" id={`timeline-panel-${step.year}`}>
                    <div className="timeline-panel-inner">
                      <p>{step.detail}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </Reveal>

        <Link to="/partners" className="cta-button">
          Partner With Us <span className="cta-arrow" aria-hidden="true">&rarr;</span>
        </Link>
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
