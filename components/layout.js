import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>My Next.js Blog</title>
        <meta name="description" content="Learning Next.js with the Pages Router" />
      </Head>

      <header>
        <h1>
          <Link href="/">Next.js Basics Exercise</Link>
        </h1>
      </header>

      <main>{children}</main>
    </div>
  )
}
