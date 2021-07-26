import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import * as Constants from '../components/constants'

export default function About() {
    return (
        <Layout home>
            <Head>
                <title>{Constants.siteTitle}</title>
            </Head>

            <div class="about-page">
                <section className={utilStyles.headingMd}>
                    <h1 className="title">Let me introduce myself...</h1>
                </section>

                <section className={utilStyles.p}>
                    <div class="about-me">
                        <p>{Constants.about}</p>

                        <h3>Education</h3>
                        <p class="about=me">{Constants.education}</p>

                        <h3>Skills</h3>
                        <div class="skills-rows">
                            {Constants.skills.map(x => {
                                return(<p>{x.content}</p>)
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}