import type { ReactNode } from 'react'
import useInView from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/** Fades/slides children in once they scroll into view. Pair with the
 * `.reveal` / `.reveal.is-in` CSS rules already defined in Partners.css
 * (and mirrored in Home.css) — add them to a page's CSS if it's the first
 * one there to use Reveal. */
function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal${inView ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export default Reveal
