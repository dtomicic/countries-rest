import cardStyles from '../styles/Card.module.css';
import Image from 'next/image'
import image from '../public/images/de.svg'

const Card = ({theme, country}) => {
  return (
    <div className={`${cardStyles["card"]} ${theme ? cardStyles["cardDark"] : cardStyles["cardLight"]}`}>
        <div className={cardStyles.cardHeader}>
            <Image src={country.flags.svg} alt="Flag of" style={{borderRadius: '5px 5px 0 0'}} width="100%" height="50%" layout="responsive" objectFit="cover"/>
        </div>
        <div className={cardStyles.cardText}>
            <h3 className={cardStyles.cardTextCountryName}>{country.name.official}</h3>
            <h5 className={cardStyles.cardTextCountryInfo}><span className={cardStyles.cardTextBold}>Population:</span>{(country.population).toLocaleString('en-US')}</h5>
            <h5 className={cardStyles.cardTextCountryInfo}><span className={cardStyles.cardTextBold}>Region:</span>{country.region}</h5>
            <h5 className={cardStyles.cardTextCountryInfo}><span className={cardStyles.cardTextBold}>Capital:</span>{country.capital}</h5>
        </div>
    </div>
  )
}
export default Card