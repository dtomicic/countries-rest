import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SlMagnifier } from "react-icons/sl";

export default function Home({theme}) {
  return (
    <div>
        <Head>
          <title>Countries List</title>
          <meta name="description" content="List of countries" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.mainSection}>
          <div className={styles.searchSection}>
            <SlMagnifier className={`${styles["searchSectionIcon"]} ${theme ? styles["searchSectionIconLight"] : ''}`} />
            <input className={`${styles["searchSectionInput"]} ${theme ? styles["searchSectionDark"] : styles["searchSectionLight"]}`} placeholder="Search for a country..."></input>
          </div>
          <div className={styles.filterSection}>

          </div>
        </div>
    </div>
  )
}
