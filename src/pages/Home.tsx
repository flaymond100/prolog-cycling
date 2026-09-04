import Seo from '../components/Seo'
import './Home.css'

const JOIN_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd_qNpqO2Tuz-VpnB4NPq-oOti9teQuLl2HicjRsHMk8XBEJg/viewform?fbzx=-4112900210892274421&pli=1'

function Home() {
  return (
    <section className="page page-home">
      <Seo
        title="Prolog Cycling"
        description="Prolog Cycling is a women's competitive cycling team recruiting riders of every level. Join the team and race with us this season."
        path="/"
      />
      <div className="home-hero home-block">
        {/* <div className="hero-tags">
          <span className="kicker-tag">Women's Racing Team</span>
          <span className="kicker-tag">Est. 2026</span>
        </div> */}
          {/* The logo is the visual headline, but crawlers need real text —
              this h1 carries the page's actual topic, hidden accessibly. */}
          <h1 className="visually-hidden">Prolog Cycling — Women's Competitive Cycling Team</h1>
          <img className="hero-logo" src={`${import.meta.env.BASE_URL}prolog-big-logo.png`} alt="Prolog Cycling" />
        <p className="hero-text">
We are a new name in women's peloton.
We don't do it the traditional way.
We are not like the rest - we just different. Want in?        </p>
        <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
          Join the team <span className="cta-arrow" aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div className="home-block home-block--center" id="team">
        <span className="kicker-tag">The Team</span>
        <h2>Riding for more than results</h2>
        <p>
          Prolog Cycling brings together riders, directeurs sportifs, and support staff
          racing at the top level of the sport. Placeholder copy — swap in rider bios,
          squad photos, and season results here.
        </p>
      </div>

      <div className="home-block join-cta">
        <span className="kicker-tag">Join Us</span>
        <h2>Sign up to ride with us</h2>
        <p>
          We're recruiting women riders of every level for the next season. No
          experience required — just the drive to race. Sign up and we'll be in touch.
        </p>
        <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
          Join the team <span className="cta-arrow" aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  )
}

export default Home
