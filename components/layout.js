import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = 'Faith\'s Portfolio'
export const footer = <strong>This website was made by Faith Madore 2021</strong>

const name = 'Hi, I\'m Faith!'
export const email = 'mailto:faithmadore@hotmail.com'
export const linkedin = 'https://www.linkedin.com/in/faithmadore/'
export const about = 'I am currently attending Conestoga College for the Software Engineering Technology program. At the time of writing this I will be going into my third and final year.'

/* Projects Page */
export const project1 = 'Deal or No Deal'
export const project1desc = 'Simple console game made in c++ where the player must choose from 26 briefcases containing different unknown amounts of money. The remaining briefcases will be opened while the player receives offers to quit before their briefcase is revealed.'
export const project1git = 'https://github.com/FaithMadore/DoND'

export const project2 = 'TCPIP Chat App'
export const project2desc = 'Small client-server chat application made in C#'
export const project2git = 'https://github.com/FaithMadore/SimpleChatApp'

export const project3 = 'TCP Web Server'
export const project3desc = 'Simple TCP web server with logging and client-server communications'
export const project3git = 'https://github.com/FaithMadore/WDD-A6'

export const project4 = 'Portfolio Website'
export const project4desc = 'My personal Portfolio website - you\'re currently here!'
export const project4git = 'https://github.com/FaithMadore/portfolio-website'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Faith's Professional Portfolio" />
                <meta property="og:image" content={`Profile Image`} />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={styles.header}>
                <Image priority src="/images/profile.jpg" className={utilStyles.borderCircle} height={144} width={144} alt={name} />
                <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                </h2>
                <div className="menu-bar">
                    <p>
                    <Link href="/about-me">About</Link> |
                    <Link href="/code-projects"> Projects</Link> |
                    <Link href="/contact-me"> Contact</Link>
                    </p>
                </div>
            </header>

            <main>{children}</main>

            <footer className={styles.footer}>
                <p>{footer}</p>
            </footer>
        </div>
    )
}