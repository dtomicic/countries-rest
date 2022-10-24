import countryStyles from '../../styles/Page.module.css'
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Country({ country, theme }) {
    const array = Object.keys(country);
    return (
        <>
            <Head>
                <title>{country.name.official}</title>
            </Head>
            <div className={countryStyles.country}>
                <Link href='/'>
                    <a>
                        <div className={`${countryStyles["countryBack"]} ${theme ? countryStyles["countryBackDark"] : countryStyles["countryBackLight"]}`}>
                            <AiOutlineArrowLeft />
                            <h3 className={countryStyles.countryBackText}>Back</h3>
                        </div>
                    </a>
                </Link>
                <div className={`${countryStyles["countryMain"]} ${theme ? countryStyles["countryMainDark"] : countryStyles["countryMainLight"]}`}>
                    <div className={countryStyles.countryMainImage}>
                        <Image src={country.flags.svg} width="100%" height="50%" layout="responsive" objectFit="cover" />
                    </div>
                    <div className={countryStyles.countryMainText}>
                        <div className={countryStyles.countryMainTextHeader}>
                            <h3 className={countryStyles.countryMainTextHeaderName}>{country.name.official}</h3>
                        </div>
                        <div className={countryStyles.countryMainTextInfo}>
                            <div className={countryStyles.countryMainTextInfoFirst}>
                                <h3 className={countryStyles.countryMainTextInfoItem}><span className={countryStyles.countryMainTextInfoBold}>Population: </span>{(country.population).toLocaleString('en-US')}</h3>
                                <h3 className={countryStyles.countryMainTextInfoItem}><span className={countryStyles.countryMainTextInfoBold}>Region: </span>{country.region}</h3>
                                <h3 className={countryStyles.countryMainTextInfoItem}><span className={countryStyles.countryMainTextInfoBold}>Sub Region: </span>{country.subregion}</h3>
                                <h3 className={countryStyles.countryMainTextInfoItem}><span className={countryStyles.countryMainTextInfoBold}>Capital: </span>{country.capital}</h3>
                            </div>
                            <div className={countryStyles.countryMainTextInfoSecond}>
                                <h3 className={countryStyles.countryMainTextInfoItem}><span className={countryStyles.countryMainTextInfoBold}>Top Level Domain: </span>{array.includes('tld') ? country.tld : 'No TLD'}</h3>
                                <h3 className={countryStyles.countryMainTextInfoItem}><span className={countryStyles.countryMainTextInfoBold}>Currencies: </span>{array.includes('currencies') ? Object.values(country.currencies).map((currency) => {
                                    return (
                                        <span key={currency.name}>{currency.name}</span>
                                    )
                                }) : 'No currency'}</h3>
                                <h3 className={countryStyles.countryMainTextInfoItem}><span className={countryStyles.countryMainTextInfoBold}>Languages: </span>{array.includes('languages') ? Object.values(country.languages).map((language, index) => {
                                    return (
                                        <span key={language}>{(index ? ', ' : '') + language}</span>
                                    )
                                }) : 'No info available'}</h3>
                            </div>
                        </div>
                        <div className={countryStyles.countryMainTextBorder}>
                            <h3 className={countryStyles.countryMainTextBorderHeader}>Border Countries: </h3>
                            <div className={countryStyles.countryMainTextBorderList}>
                                {array.includes('borders') ? country.borders.map((country) => {
                                    return (
                                        <div className={`${countryStyles["countryMainTextBorderBox"]} ${theme ? countryStyles["countryMainTextBorderBoxDark"] : countryStyles["countryMainTextBorderBoxLight"]}`} key={country}>
                                            <h3 className={countryStyles.countryMainTextBorderBoxHeader}>{country}</h3>
                                        </div>
                                    )
                                }) : `Country doesen't have any borders`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps({ params }) {
    const result = await fetch (`https://restcountries.com/v3.1/name/${params.countryId}`);
    const data = await result.json();
    return {
        props: {
            country: data[0]
        }
    }
}

export async function getStaticPaths() {
    const result = await fetch ('https://restcountries.com/v3.1/all');
    const countries = await result.json();
    return {
        paths: countries.map(country => {
            const countryId = country.name.common.toLowerCase();
            return {
                params: {
                    countryId
                }
            }
        }),
        fallback: false
    }
}