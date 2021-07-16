import styles from '../styles/Home.module.css'
import Image from 'next/image'
import img from '../public/road.jpg'

const Hero = () => {
 return (
  <section className={styles.hSection}>
   <div className={styles.bgWrap}>
    <Image 
      alt="Road"
      src={img}
      layout="fill"
      objectFit="cover"
      quality={100}
    />
   </div>

   <div className={styles.bgText}>
    <h4>A small business helping small businesses</h4>
    <h1>GALLANT DISPATCHING</h1>
    <h2>COMPETITIVE RATES | FREE BILLING & INVOICING | DEDICATED DISPATCHER</h2>
    <button className={styles.heroBtn}>Learn More</button>
   </div>

  </section>
 )
}

export default Hero
