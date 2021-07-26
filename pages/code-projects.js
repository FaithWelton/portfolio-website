import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import * as Constants from '../components/constants'

export default function Projects() {
    return (
        <Layout home>
            <Head>
                <title>{Constants.siteTitle}</title>
            </Head>

            <section className={utilStyles.headingMd}>
                <h1 className="title">My Projects!</h1>
            </section>

            <section className={utilStyles.p}>
                <div class="project-rows">
                    {Constants.projects.map(x => {
                        return (<div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">{x.title}</h5>
                                <p class="card-text">{x.content}</p>
                            </div>
                            <footer class="card-footer">
                                <a href={x.git} class="btn-projects">Code</a>
                            </footer>
                        </div>
                    </div>)
                    })}
                </div>
            </section>
        </Layout>
    )
}