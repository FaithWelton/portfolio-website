import Head from 'next/head'
import Layout, { siteTitle, email, linkedin } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Contact() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={utilStyles.headingMd}>
                <h1 className="title">Need to Contact Me?</h1>
            </section>

            <section className={utilStyles.p}>
                <div class="contact-info">
                    <a href={email} class="btn-contact">Email</a>
                    <a href={linkedin} class="btn-contact">LinkedIn</a>
                </div>
            </section>
        </Layout>
    )
}