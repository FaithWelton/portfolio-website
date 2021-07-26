import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
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
                <h1 className="title">All About Me!</h1>
            </section>

            <section className={utilStyles.p}>
                <p>This will have some details about who I am, what I do</p>
            </section>


            <footer>
                This website was made by me!
            </footer>
        </Layout>
    )
}