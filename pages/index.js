import Head from 'next/head'

import Header from '../components/Header'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Productivity Tool</title>
      </Head>
      
      <Header />
      <h1>Hello World</h1>
    </div>
  )
}
