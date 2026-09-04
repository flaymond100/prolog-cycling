import Seo from '../components/Seo'

function Contacts() {
  return (
    <section className="page page-contacts">
      <Seo
        title="Contact Us"
        description="Get in touch with Prolog Cycling, a women's competitive cycling team."
        path="/contacts"
      />
      <h1>Contacts</h1>
      <p>Get in touch with the Prolog Cycling team.</p>
      <ul className="contact-list">
        <li>Email: info@prolog-cycling.com</li>
        <li>Phone: +00 000 000 000</li>
        <li>Address: TBD</li>
      </ul>
    </section>
  )
}

export default Contacts
