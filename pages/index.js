import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SlMagnifier } from "react-icons/sl";
import Card from '../components/Card';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link'

export default function Home({theme, country}) {
  const [clicked, setClicked] = useState('');
  const url = '/countries/[countryName]'

  const handleClick = (e, country) => {
    setClicked((country.name.common).toLowerCase());
  }

  console.log(clicked);

  return (
    <div>
        <Head>
          <title>Countries List</title>
          <meta name="description" content="List of countries" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.firstSection}>
          <div className={styles.searchSection}>
            <SlMagnifier className={`${styles["searchSectionIcon"]} ${theme ? styles["searchSectionIconLight"] : ''}`} />
            <input className={`${styles["searchSectionInput"]} ${theme ? styles["searchSectionDark"] : styles["searchSectionLight"]}`} placeholder="Search for a country..."></input>
          </div>
          <div className={styles.filterSection}>
            <select name="regions" className={`${styles["filterSectionDropdown"]} ${theme ? styles["filterSectionDropdownDark"] : ''}`}>
              <option value="">Filter by region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
        <div className={styles.secondSection}>
          {country.map((country) => {
            return (
              <Link href={{pathname: url, query: {countryName: (country.name.common).toLowerCase().replace(/ /g, '-')}}} key={country.name.common}>
                <a className={styles.links} onClick={(e) => handleClick(e, country)}>
                  <Card theme={theme} country={country} key={country.name.common} />
                </a>
              </Link>
            )
          })}
        </div>
    </div>
  )
}

export async function getStaticProps({}) {
  const result = await fetch (`https://restcountries.com/v3.1/all`);
  const country = await result.json();
  return {
      props: {
          country
      }
  }
}
