import cardStyles from '../styles/Card.module.css';
import Image from 'next/image'
import image from '../public/images/de.svg'
const Card = () => {
  return (
    <div className={cardStyles.card}>
        <div className={cardStyles.cardHeader}>
            <Image src={image} style={{borderRadius: '15px 15px 0 0'}} />
        </div>
        <div className={cardStyles.cardText}>
            <h3>Test</h3>
            <h5>Test 1</h5>
        </div>
    </div>
  )
}
export default Card