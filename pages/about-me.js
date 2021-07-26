import Head from 'next/head'
import Layout, { siteTitle, about } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={utilStyles.headingMd}>
                <h1 className="title">Let me introduce myself...</h1>
            </section>

            <section className={utilStyles.p}>
                <p class="about-me">{about}</p>
            </section>
        </Layout>
    )
}