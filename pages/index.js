import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Success!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

       <h1>SAKI SAKI !</h1>
  <img src="https://octodex.github.com/images/NUX_Octodex.gif" alt="Description of GIF" />
  <p>Well Done Saki on BOM Go-Live. Congratulations! 🥳</p>

      </main>
    </>
  )
}
