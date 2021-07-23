import styles from '../styles/sections/Hero.module.css'
import Image from 'next/image'
import img from '../public/road.jpg'

const Hero = () => {
 return (
  <>
   <div className={styles.bgWrap}>
    <Image 
      alt="Road"
      src={img}
      layout="fill"
      objectFit="cover"
      quality={50}
    />
   </div>

   <div className={styles.bgText}>
    <h4>A small business helping small businesses</h4>
    <h1>GALLANT DISPATCHING</h1>
    <h2>COMPETITIVE RATES | FREE BILLING & INVOICING | DEDICATED DISPATCHER</h2>
    <button className={styles.heroBtn}>Learn More</button>
   </div>

  </>
 )
}

export default Hero
