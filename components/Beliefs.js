import styles from '../styles/sections/Beliefs.module.css'
import Image from 'next/image'
import deskWorker from '../public/deskworker.jpg'

const Beliefs = () => {
 return (
  <>
   <div className={styles.bgWrap}>
    <Image
     alt="DeskWorker"
     src={deskWorker}
     layout="fill"
     objectFit="cover"
     quality={100}
    />
   </div>
   
   <article className={styles.title}>
    <h1 className={styles.heroBanner}>Our Beliefs</h1>
   </article>

   <article>
   <p className={styles.bText}>
        We work with owner-operators and trucking companies with any fleet size. Our dispatchers have a 5 truck limit so they have more time to concentrate on each of their trucks. We never book a load without Your approval, You will decide on dates, time, destinations and all your preferences will be taken in consideration. Therefore, the quality of our service is the priority for us. Keeping high standards, we prove our intentions and deliver solutions to assist our customers.
       </p>
   </article>
  </>
 )
}

export default Beliefs
