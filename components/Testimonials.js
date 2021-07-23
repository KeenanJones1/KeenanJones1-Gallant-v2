import React from 'react'
import styles from '../styles/sections/Testimonials.module.css'
import img from '../public/ship.jpg'
import Image from 'next/image'

const Testimonials = () => {
 return (
  <>
  <div className={styles.bgWrap}>
   <Image 
    alt="trailers"
    src={img}
    layout="fill"
    objectFit="cover"
    quality={60}
   />
  </div>
   {/* <div className="overlay">

    <div className="title">
     <p>Testimonials</p>
     <h1>What People Say</h1>
    </div>

    <div className="testimonials">
     <article className="testimonial">
      <p>“My experience working with Gallant was very professional. They were such a pleasure to work with. Because their dedication to customer support, we enjoyed working with them daily. I recommend them to anyone interested in growing their fleet.“</p>
     <span>Pat M.</span>
    </article>

     <article className="testimonial">
      <p>“We most recently closed out our fiscal year and are pleased to report that our relationship with Gallant Solutions achieved all of the objectives we originally established. We look forward to a long-term partnership and hope to continue to reap incremental benefits by tapping into Gallant’s expertise.”</p>
      <span>David D.</span>
     </article>
    </div>
   </div> */}
  </>
 )
}

export default Testimonials
