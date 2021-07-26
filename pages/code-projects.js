import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Projects() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="menu-bar">
                <p>
                    <Link href="/"> Home</Link> |
                    <Link href="/about-me"> About</Link> |
                    <Link href="/contact-me"> Contact</Link>
                </p>
            </div>

            <section className={utilStyles.headingMd}>
                <h1 className="title">My Projects!</h1>
            </section>

            <section className={utilStyles.p}>
                <div class="project-rows">
                    <div class="project-cols">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Project Name</h5>
                                <p class="card-text">Description of project</p>
                                <a href="#" class="btn-projects">Demo</a>
                                <a href="#" class="btn-projects">Code</a>
                            </div>
                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Project Name</h5>
                                <p class="card-text">Description of project</p>
                                <a href="#" class="btn-projects">Demo</a>
                                <a href="#" class="btn-projects">Code</a>
                            </div>                            
                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Project Name</h5>
                                <p class="card-text">Description of project</p>
                                <a href="#" class="btn-projects">Demo</a>
                                <a href="#" class="btn-projects">Code</a>
                            </div>
                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Project Name</h5>
                                <p class="card-text">Description of project</p>
                                <a href="#" class="btn-projects">Demo</a>
                                <a href="#" class="btn-projects">Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                This website was made by me!
            </footer>
        </Layout>
    )
}