import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page page-not-found">
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Back to home</Link>
    </section>
  )
}

export default NotFound
