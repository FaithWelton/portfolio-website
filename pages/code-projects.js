import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle, footer } from '../components/layout'
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
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">Deal or No Deal</h5>
                                <p class="card-text">Simple console game made in c++ where the player must choose from 26 briefcases containing 
                                    different unknown amounts of money. The remaining briefcases will be opened while the player
                                    receives offers to quit before their briefcase is revealed.</p>
                            </div>
                            <footer class="card-footer">
                                <a href="https://github.com/FaithMadore/DoND" class="btn-projects">Code</a>
                            </footer>
                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">TCPIP Chat App</h5>
                                <p class="card-text">Small client-server chat application made in C#</p>
                            </div>  
                            <footer class="card-footer">
                                <a href="https://github.com/FaithMadore/SimpleChatApp" class="btn-projects">Code</a>
                            </footer>
                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">TCP Web Server</h5>
                                <p class="card-text">Simple TCP web server with logging and client-server communications</p>
                            </div>
                            <footer class="card-footer">
                                <a href="https://github.com/FaithMadore/WDD-A6" class="btn-projects">Code</a>
                            </footer>

                        </div>
                    </div>
                    <div class="project-cols">
                        <div class="card-group">
                            <div class="card-body">
                                <h5 class="card-title">Portfolio Website</h5>
                                <p class="card-text">My personal Portfolio website - you're currently here!</p>
                            </div>
                            <footer class="card-footer">
                                <a href="https://github.com/FaithMadore/portfolio-website" class="btn-projects">Code</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}