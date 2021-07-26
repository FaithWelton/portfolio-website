import Head from 'next/head'
import Layout, { siteTitle, project1, project2, project3, project4, project1desc, project2desc, project3desc, project4desc, project1git, project2git, project3git, project4git} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Projects() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={utilStyles.headingMd}>
                <h1 className="title">My Projects!</h1>
            </section>

            <section className={utilStyles.p}>
                <div class="project-rows">
                    <div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">{project1}</h5>
                                <p class="card-text">{project1desc}</p>
                            </div>
                            <footer class="card-footer">
                                <a href={project1git} class="btn-projects">Code</a>
                            </footer>
                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">{project2}</h5>
                                <p class="card-text">{project2desc}</p>
                            </div>  
                            <footer class="card-footer">
                                <a href={project2git} class="btn-projects">Code</a>
                            </footer>
                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">{project3}</h5>
                                <p class="card-text">{project3desc}</p>
                            </div>
                            <footer class="card-footer">
                                <a href={project3git} class="btn-projects">Code</a>
                            </footer>

                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">{project4}</h5>
                                <p class="card-text">{project4desc}</p>
                            </div>
                            <footer class="card-footer">
                                <a href={project4git} class="btn-projects">Code</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}