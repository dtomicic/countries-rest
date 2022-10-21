import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SlMagnifier } from "react-icons/sl";
import Card from '../components/Card';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home({theme}) {
  const [countries, setCountries] = useState([])

  const callApi = async () => {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      setCountries(data);
    }catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    callApi();
  }, [])
  
  console.log(countries[0] && countries[0].flags.svg);

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
          {countries.map((country) => {
            return <Card theme={theme} country={country} key={country.name.official} />
          })}
        </div>
    </div>
  )
}
