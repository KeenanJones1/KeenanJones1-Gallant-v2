import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/sections/Contact.module.css'
import img from '../public/map.jpg'

const Contact = () => {
 return (
  <>
  <div className={styles.bgWrap}>
   <Image 
    alt="Map"
    src={img}
    objectFit="cover"
    layout="fill"
    quality={45}
   />
  </div>

  <div className={styles.bgText}>
    <h1 className={styles.headLine}>Hit the Road with Us</h1>
    <h2 className={styles.subText}>Our professional dispatchers have the contacts to keep you loaded with the best loads at the highest rates.</h2>
    <button className={styles.heroBtn}><Link href="/contact">Contact Us</Link></button>
   </div>
   {/* <div className="overlay">
    <div className="hero-banner">
     <h1>Hit the Road with Us</h1>
     <h2>Our professional dispatchers have the contacts to keep you loaded with the best loads at the highest rates.</h2>

     <button className={styles.heroBtn}>
      <Link href="/contact">
       Contact Us
      </Link>
     </button>
    </div>
   </div> */}
  </>
 )
}

export default Contact
