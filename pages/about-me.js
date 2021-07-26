import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle, footer } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="menu-bar">
                <p>
                    <Link href="/"> Home</Link> |
                    <Link href="/code-projects"> Projects</Link> |
                    <Link href="/contact-me"> Contact</Link>
                </p>
            </div>

            <section className={utilStyles.headingMd}>
                <h1 className="title">Let me introduce myself...</h1>
            </section>

            <section className={utilStyles.p}>
                <p class="about-me">I am currently attending Conestoga College for the Software Engineering Technology program.
                    At the time of writing this I will be going into my third and final year.
                </p>
            </section>
        </Layout>
    )
}