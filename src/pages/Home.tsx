import './Home.css'

const JOIN_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd_qNpqO2Tuz-VpnB4NPq-oOti9teQuLl2HicjRsHMk8XBEJg/viewform?fbzx=-4112900210892274421&pli=1'

function Home() {
  return (
    <section className="page page-home">
      <div className="home-hero home-block">
        <div className="hero-tags">
          <span className="kicker-tag">Women's Racing Team</span>
          <span className="kicker-tag">Est. 2026</span>
        </div>
        <h1>Prolog Cycling</h1>
        <p>
          Prolog Cycling is recruiting women riders ready to race at a competitive
          level. Whatever your background, if you've got the drive to push yourself
          and race as part of a team, we want to hear from you.
        </p>
        <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
          Join the team <span aria-hidden="true">&rarr;</span>
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

      <div className="home-block">
        <span className="kicker-tag">Vision</span>
        <h2>Our Vision</h2>
        <p>
          We race to open doors: building a program where talent is developed, backed,
          and given a real path to the top of the peloton. Placeholder copy — replace
          with the team's mission and values.
        </p>
      </div>

      <div className="home-block">
        <span className="kicker-tag">Future</span>
        <h2>The Road Ahead</h2>
        <p>
          New season, new goals — from the calendar of upcoming races to the next
          generation of riders joining the roster. Placeholder copy — replace with
          season previews and what's coming next.
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
          Join the team <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  )
}

export default Home
