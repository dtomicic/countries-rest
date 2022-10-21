import countryStyles from '../../styles/Page.module.css'
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from 'next/image'

export default function Country({ country, theme }) {
    return (
        <div className={countryStyles.country}>
            <div className={`${countryStyles["countryBack"]} ${theme ? countryStyles["countryBackDark"] : countryStyles["countryBackLight"]}`}>
                <AiOutlineArrowLeft />
                <h3 className={countryStyles.countryBackText}>Back</h3>
            </div>
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
                            <h3 className={countryStyles.countryMainTextInfoItem}><span className={countryStyles.countryMainTextInfoBold}>Top Level Domain: </span>{country.tld}</h3>
                            <h3 className={countryStyles.countryMainTextInfoItem}><span className={countryStyles.countryMainTextInfoBold}>Currencies: </span>{Object.values(country.currencies).map((currency) => {
                                return (
                                    <span key={currency.name}>{currency.name}</span>
                                )
                            })}</h3>
                            <h3 className={countryStyles.countryMainTextInfoItem}><span className={countryStyles.countryMainTextInfoBold}>Languages: </span>{Object.values(country.languages).map((language, index) => {
                                return (
                                    <span key={language}>{(index ? ', ' : '') + language}</span>
                                )
                            })}</h3>
                        </div>
                    </div>
                    <div className={countryStyles.countryMainTextBorder}>
                        <h3 className={countryStyles.countryMainTextBorderHeader}>Border Countries: </h3>
                        <div className={countryStyles.countryMainTextBorderList}>
                            {country.borders.map((country) => {
                                return (
                                    <div className={`${countryStyles["countryMainTextBorderBox"]} ${theme ? countryStyles["countryMainTextBorderBoxDark"] : countryStyles["countryMainTextBorderBoxLight"]}`} key={country}>
                                        <h3 className={countryStyles.countryMainTextBorderBoxHeader}>{country}</h3>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const result = await fetch (`https://restcountries.com/v3.1/name/${params.countryId.replace(/\-/g, ' ')}`);
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
            const countryId = country.name.common.toLowerCase().replace(/ /g, '-');
            return {
                params: {
                    countryId
                }
            }
        }),
        fallback: false
    }
}