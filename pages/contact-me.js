import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import * as Constants from '../components/constants'

export default function Contact() {
    return (
        <Layout home>
            <Head>
                <title>{Constants.siteTitle}</title>
            </Head>

            <section className={utilStyles.headingMd}>
                <h1 className="title">Need to Contact Me?</h1>
            </section>

            <section className={utilStyles.p}>
                <div class="contact-info">
                    <a href={Constants.email} class="btn-contact">Email</a>
                    <a href={Constants.linkedin} class="btn-contact">LinkedIn</a>
                </div>
            </section>
        </Layout>
    )
}