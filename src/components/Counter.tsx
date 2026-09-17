import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'

const reduceMotionQuery = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

interface CounterProps {
  to: number
  suffix?: string
}

/** Counts up from 0 to `to` once it scrolls into view. */
function Counter({ to, suffix = '' }: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.6)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotionQuery()) {
      setValue(to)
      return
    }

    const duration = 1200
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * to))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to])

  return (
    <span ref={ref} className="counter-value">
      {value}
      {suffix}
    </span>
  )
}

export default Counter
