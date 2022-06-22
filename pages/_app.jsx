import Layout from '~/components/layout/layout'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  const { meta } = pageProps || {}
  
  return <Layout meta={meta}>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
