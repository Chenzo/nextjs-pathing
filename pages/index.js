import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <h1>HOME PAGE</h1>

    <div>
    <Link href="luxury-homes-for-sale/Arizona">
      <a>luxury-homes-for-sale/Arizona</a>
    </Link>
    </div>

    <div>
    <Link href="luxury-homes-for-sale/Arizona/Sereno-Canyon/Enclave-Collection/Palmer">
      <a>luxury-homes-for-sale/Arizona/Sereno-Canyon/Enclave-Collection/Palmer</a>
    </Link>
    </div>
    

    </>
  )
}
