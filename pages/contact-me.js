import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Contact() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="menu-bar">
                <p>
                    <Link href="/"> Home</Link> |
                    <Link href="/about-me"> About</Link> |
                    <Link href="/code-projects"> Projects</Link>
                </p>
            </div>

            <section className={utilStyles.headingMd}>
                <h1 className="title">Need to Contact Me?</h1>
            </section>

            <section className={utilStyles.p}>
                <p><Link href="https://www.linkedin.com/in/faithmadore/">LinkedIn</Link></p>
            </section>

            <footer>
                This website was made by me!
            </footer>
        </Layout>
    )
}