import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

function IndexPage() {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>Hello, Cloudflare!</h1>
    </main>
  )
}

export default IndexPage
