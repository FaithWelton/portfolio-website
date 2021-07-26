import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
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

      <section className={utilStyles.headingMd}>
        <h1 className="title">Welcome!</h1>
      </section>

      <section className={utilStyles.p}>
        <p>This will be a little blurb of some kind introducing my site</p>
      </section>

      <footer>
        This website was made by me!
      </footer>
    </Layout>
  )
}