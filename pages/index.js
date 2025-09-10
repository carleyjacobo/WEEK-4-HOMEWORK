// Import the Next.js Link component
import Link from 'next/link'

// Import the shared Layout component
import Layout from '../components/layout'

// Import the Next.js Image component
import Image from 'next/image'

// Import the Next.js Script component
import Script from 'next/script'

// React component for the root path "/"
export default function Home() {
  return (
    <Layout>
      <h2>Everything seems to be working! Here is a photo of my dog.</h2>

      <Image
        src="/images/luka.jpg"
        alt="photo of my dog"
        width={160}
        height={160}
      />

      <p>
        <Link href="/posts/first-post">Go to First Post</Link>
      </p>

      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Analytics script loaded')
        }}
      />
    </Layout>
  )
}


