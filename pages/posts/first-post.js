// Import the Next.js Link component 
import Link from 'next/link'

// Import the shared Layout component
import Layout from '../../components/layout'

// Export the FirstPost function
export default function FirstPost() {
  return (
    <Layout>
      <h2>Week Four Homework: Sample Post</h2>
      <p>This is a sample post. This is a sample post. This is a sample post. This is a sample post. This is a sample post. This is a sample post.This is a sample post. This is a sample post. This is a sample post. This is a sample post. This is a sample post. This is a sample post.This is a sample post. This is a sample post. This is a sample post. This is a sample post. This is a sample post. This is a sample post.This is a sample post. This is a sample post. This is a sample post. This is a sample post. This is a sample post. This is a sample post.</p>
      <p>
        <Link href="/">Return to Home</Link>
      </p>
    </Layout>
  )
}

