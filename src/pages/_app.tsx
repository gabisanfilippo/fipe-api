import '@styles/ @pages/ @services/ @utils/ @components/ @context/ @api/ @interfaces/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
