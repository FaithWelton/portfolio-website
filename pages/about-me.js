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
                <p>??????????</p>
            </section>


            <footer>{footer}</footer>
        </Layout>
    )
}