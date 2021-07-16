import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Contact = () => {
 return (
  <section className={styles.hSection}>
   <div className="overlay">
    <div className="hero-banner">
     <h1>Hit the Road with Us</h1>
     <h2>Our professional dispatchers have the contacts to keep you loaded with the best loads at the highest rates.</h2>

     <button className={styles.heroBtn}>
      <Link href="/contact">
       Contact Us
      </Link>
     </button>
    </div>
   </div>
  </section>
 )
}

export default Contact
