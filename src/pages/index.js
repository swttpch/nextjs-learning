import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '../../components/NavBar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Learning</title>
        <meta name="description" content="Encontre a melhor roupa pra você" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keyworkds' content='Roupas, Calçados, Boné'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <h1 className={styles.title}>Hello, World</h1>
      </main>
    </>
  )
}
