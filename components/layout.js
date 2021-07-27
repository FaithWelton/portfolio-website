import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import * as Constants from './constants'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Faith's Professional Portfolio" />
                <meta property="og:image" content={`Profile Image`} />
                <meta name="og:title" content={Constants.siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={styles.header}>
                <img src="/images/profile.jpg" className={utilStyles.borderCircle} height={144} width={144} alt={Constants.name} />
                <h2 className={utilStyles.headingXl}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{Constants.name}</a>
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
                <p>{Constants.footer}</p>
            </footer>
        </div>
    )
}