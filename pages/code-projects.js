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
                    <div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">{Constants.project1}</h5>
                                <p class="card-text">{Constants.project1desc}</p>
                            </div>
                            <footer class="card-footer">
                                <a href={Constants.project1git} class="btn-projects">Code</a>
                            </footer>
                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">{Constants.project2}</h5>
                                <p class="card-text">{Constants.project2desc}</p>
                            </div>  
                            <footer class="card-footer">
                                <a href={Constants.project2git} class="btn-projects">Code</a>
                            </footer>
                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">{Constants.project3}</h5>
                                <p class="card-text">{Constants.project3desc}</p>
                            </div>
                            <footer class="card-footer">
                                <a href={Constants.project3git} class="btn-projects">Code</a>
                            </footer>

                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">{Constants.project4}</h5>
                                <p class="card-text">{Constants.project4desc}</p>
                            </div>
                            <footer class="card-footer">
                                <a href={Constants.project4git} class="btn-projects">Code</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}