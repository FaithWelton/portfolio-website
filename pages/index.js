import Head from 'next/head'
import Layout from '../components/layout'
import * as Constants from '../components/constants'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{Constants.siteTitle}</title>
      </Head>
    </Layout>
  )
}