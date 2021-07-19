import styles from '../styles/sections/Details.module.css'
import img from '../public/trailers.jpg'
import Image from 'next/image'

const Details = () => {
 return (
  <>
    <div className="">
      <Image
      alt="Road"
      src={img}
      layout="fill"
      objectFit="cover"
      quality={5}
      />
    </div>
      {/* <div className="overlay">
    <div className="title">
     <h2>How We Can Help You</h2>
    </div>
     <div className="section-center">
      <article className="detail">
       <h3>Customer Service</h3>
       <p>Our clients are the key to our success. We go above and beyond to ensure we’re delivering what the client is asking for. You tell us where and when you want to run. We inform you of your options. You choose the load. We book it and send you the rate confirmation. We can fill any gaps for future growth for a fraction of the cost.</p>
      </article>

      <article className="detail">
        <h3>Just Drive</h3>
        <p>Together we will succeed. You focus on safely delivering the load, and we’ll handle paperwork, phone calls, emails, fright negotiations, credit checks and roadside assistance. If you’re not making money then we’re not making money. Well paid freight opportunities from any location in the country, taking in consideration all your preferences.</p>
      </article>
      <article className="detail">
       <h3>Consulting</h3>
       <p>7% dispatching per/week (per truck). You will be billed at the end of the week for every load. Partnering with Factoring company allows us to use factoring invoicing. We help your business upgrade or downgrade as and when needed. Office overhead savings, Dedicated Freight, Trucking Experts, we add value to your bottom line.</p>
      </article>
     </div>
    </div> */}
  </>
 )
}

export default Details
