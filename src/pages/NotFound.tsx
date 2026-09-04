import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

function NotFound() {
  return (
    <section className="page page-not-found">
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Back to home</Link>
    </section>
  )
}

export default NotFound
