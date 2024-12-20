import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../../next-i18next.config.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp = ({ Component, pageProps }: any) => (
  <Component {...pageProps} />
)

export default appWithTranslation(MyApp, nextI18NextConfig)