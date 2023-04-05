import type { AppProps } from 'next/app'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
