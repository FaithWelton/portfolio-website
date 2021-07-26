import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle, footer } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="menu-bar">
        <p>
          <Link href="/about-me">About</Link> |
          <Link href="/code-projects"> Projects</Link> |
          <Link href="/contact-me"> Contact</Link>
        </p>
      </div>
    </Layout>
  )
}