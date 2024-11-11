import React from 'react'
import { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {
  const [active,setactive]=useState(false)
  return (
    <div>
      <nav>
        <div className='logo'>
          Trippy Go!
        </div>
        <ul className={active ? 'active':''}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Flight'>Flight-Booking</Link></li>
          <li><Link to='/Hotel'>Hotel-Booking</Link></li>
          <li><Link to='/Login'><FaUserAlt /></Link></li>
        </ul>
        <div className='menus'>
          <i onClick={()=>setactive(!active)}><FaBars /></i>
        </div>
      </nav>

      <div className='info'>
        <div className='info1'>
          <h1>"Your Gateway to Unforgettable Journeys"</h1>
          <p>Explore curated destinations, expert travel guides, and tips <br/>designed to make your journey extraordinary. Let’s go<br/> beyond the maps together.</p>
        </div>
      </div>

      <div className='info2'>
        <h1>Book Your Flight & Hotel!</h1>
      </div>

      <section className='parent'>
        <section className='div1'>
           <Link to='/Flight'><img src="../src/image/flight.jpg"/></Link>
           <h1>Flight-Booking</h1>
           <p>"Effortlessly plan your next adventure with our seamless flight booking service.<br/> Find the best deals on flights to destinations worldwide, <br/>tailored to suit your budget and schedule."</p>
           <button className='button1'><Link to='/Flight'>Book</Link></button>
        </section>
        <section className='div1'>
          <Link to='/Hotel'><img src="../src/image/hhh.jpg" width="480px"/></Link>
          <h1>Hotel-Booking</h1>
          <p>"Find your perfect stay with our easy-to-use hotel booking service, <br/>
          offering access to thousands of hotels worldwide"<br/>Discover the best deals and start planning your next trip with confidence today!"</p>
          <button className='button1'><Link to='/Hotel'>Book</Link></button>
        </section>
      </section>

      <div className='info3'>
        <h1>Discover Latest offers on flight and hotel booking</h1>
      </div>

      <div className='flightb'>
        <div className='flight'>
            <Link to='/Flight'><img src="../src/image/goaa.jpg" alt="flight image"/></Link>
            <div className='inffo'>
              <h1>Trip to Goa</h1>
              <p>Description:<br/>"Experience the magic of Goa, where golden beaches meet vibrant 
                culture and endless adventure. Dive into Goa’s famous 
                beach life with sun-kissed sands, water sports, and beachside shacks, 
              explore the rich history of stunning Portuguese architecture, c
              enturies-old churches, and colorful markets.</p>
              <h1><p>cost:</p>20,000/-</h1>
              <button className='button2'><Link to='/Flight'>Book</Link></button>
            </div>
          
        </div>
        <div className='flight'>
          <Link to='/Flight'><img src="../src/image/am.jpg" width="72%" /></Link>
          <div className='inffo'>
            <h1>Trip to America</h1>
            <p>Description:<br/>"Embark on an unforgettable journey across America, a land of 
              diverse landscapes, iconic cities, and endless adventures. 
              From the vibrant streets of New York City and the entertainment 
              haven of Los Angeles to the natural wonders of the Grand Canyon 
              and the majestic Rockies, America offers something for every traveler. </p>
            <h1><p>cost:</p>60,000/-</h1>
            <button className='button2'><Link to='/Flight'>Book</Link></button>
          </div>
        </div>

        <div className='flight'>
          <Link to='/Flight'><img src="../src/image/mma.jpg" width="72%" /></Link>
          <div className='inffo'>
            <h1>Trip to Mussoorie</h1>
            <p>Description:<br/>"Escape to Mussoorie, the ‘Queen of Hills,’ where 
              natural beauty and serene landscapes offer the perfect retreat. 
              Perched in the Garhwal Himalayas, Mussoorie is known for its mist-covered mountains
              , charming colonial architecture, and tranquil vibe.Take a stroll down Mall Road, enjoy panoramic views from Gun Hill </p>
            <h1><p>cost:</p>80,000/-</h1>
            <button className='button2'><Link to='/Flight'>Book</Link ></button>
          </div>

        

          
        </div>

        
       
       
      </div>

      <div className='flightb'>
        <div className="flight">
          <Link to='/Hotel'><img src="../src/image/h1.jpg"/></Link>
          <div className='inffo'>
            <h1>Burj Al Arab</h1>
            <p>Description:<br/>"Discover unparalleled luxury at the Burj Al Arab, Dubai's architectural masterpiece and symbol of elegance. Rising majestically on its own island, this 7-star hotel offers a world-class experience with opulent suites, panoramic views of the Arabian Gulf, 
              
             and personalized service that redefines hospitality.Burj Al Arab is an unforgettable journey into luxury and sophistication."</p>
            <h1><p>cost:</p>90,000/-</h1>
            <button className='button2'><Link to='/Hotel'>Book</Link></button>
          </div>
        </div>

        <div className="flight">
        <Link to='/Hotel'><img src="../src/image/h3.jpg" /></Link>
          <div className='inffo'>
            <h1>Taj Hotel</h1>
            <p>Description:<br/>"Discover unparalleled luxury at the Burj Al Arab, Dubai's architectural masterpiece and symbol of elegance. Rising majestically on its own island, this 7-star hotel offers a world-class experience with opulent suites, panoramic views of the Arabian Gulf, 
             "Experience timeless luxury and rich heritage at the Taj Hotel, where legendary hospitality meets modern elegance.</p>
            <h1><p>cost:</p>70,000/-</h1>
            <button className='button2'><Link to='/Hotel'>Book</Link></button>
          </div>
        </div>

        <div className="flight">
          <Link to='/Hotel'><img src="../src/image/h4.jpg" with="80"/></Link>
          <div className='inffo'>
            <h1>Emirates Palace</h1>
            <p>Description:<br/>"Step into a world of opulence at Emirates Palace, an iconic landmark of luxury and Arabian hospitality in Abu Dhabi.
               Nestled on a private beach with stunning views of the Arabian Gulf, this palatial hotel offers a blend of modern comfort and traditional elegance. <b/>Guests are treated to spacious rooms and suites adorned with gold</p>
            <h1><p>cost:</p>88,000/-</h1>
            <button className='button2'><Link to='/Hotel'>Book</Link></button>
          </div>
        </div>
      </div>

      <div className='about'>
        <h1>About Trippy Go!</h1>
        <p>"Trippy Go is your one-stop destination for effortless travel planning, specializing in both hotel and flight bookings for destinations worldwide. Designed with ease and convenience in mind, Trippy Go allows travelers to seamlessly search, compare, and book accommodations and flights, all on one user-friendly platform. Whether you’re looking for budget-friendly stays or luxury resorts, last-minute flights or flexible booking options, Trippy Go has you covered with a range of choices to suit every budget and travel style. With secure payments, real-time booking updates, and 24/7 customer support, we aim to make travel planning a stress-free experience. Let Trippy Go handle the details while you focus on making memories!"
       </p>
      </div>

      <div className='footer'>
        <div className='text'>
          <h1>Trippy Go!</h1>
          <p>Where bookings is easy , and travel is fun</p>
        </div>
        <div className='inform'>
          <p>Email:trippy@gmail.com</p>
          <p>Contact:00-999-888-878</p>
          <p>Bookings Available:</p>
          <p><Link to='/Flight'>flight</Link></p><p><Link to='/Hotel'>Hotel</Link></p>
        </div>

        <div className='icons'>
          <FaInstagram className='icon'/>
          <FaFacebook className='icon'/>
          <FaTwitter className='icon'/>
          <FaWhatsapp className='icon'/>
          <FaLinkedin className='icon'/>
        </div>

        <div className='company'>
          <p>-2024 by trippy go !</p>
        </div>
      </div>
    </div>
  )
}

export default Home