// The Behold (behold.so) Instagram feed widget — a custom element with no
// React types of its own, loaded via a plain <script> in index.html.
import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'behold-widget': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'feed-id': string
      }
    }
  }
}
