import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> This is Medium 2.0 </h1>
      <h1>I will be using this as a tutorial to learn Next.js </h1> 
      <p> Test </p>
    </div>
  )
}

export default Home
