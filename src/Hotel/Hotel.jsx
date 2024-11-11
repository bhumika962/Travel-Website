import React from 'react'
import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {  FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

import img from '../image/leela.jpg';
import hh2 from '../image/hh2.jpg';
import hh3 from '../image/hh3.jpg';
import hh5 from '../image/hh5.jpg';
import hh6 from '../image/hh6.jpg';
import hh7 from '../image/hh7.jpg';
import { IoLocationSharp } from "react-icons/io5";

const Hotel = () => {
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

      <div className="text">
        <h1>"Find Your Perfect Stay: Book Your Dream Getaway Today!"</h1>
        <p>"Discover the perfect blend of comfort, style, and convenience at our hotels, where every stay feels like a getaway. Whether you're traveling for business, leisure, or a little of both, our handpicked accommodations and warm hospitality promise a memorable experience.</p>
      </div>

      <div className="text">
        <h1>Description of various latest travel hotels!</h1>
      </div>

      <div className='desp'>
          <div className='dessp'>
            <img src={img}/>
            <h1>The Leela</h1>
            <IoLocationSharp className='icon' /><p>Hotel in west suburs,Mumbai</p>
            <p>Description:<br/>Luxurious accommodation coupled with 6 dining options can be expected at The Leela Mumbai, <br/>just 5 minutes' drive from Chhatrapati Shivaji 
              International Airport.</p>
            <h1><p>Cost:</p>11,000/-</h1>
            <button className='button'>Book</button>
          </div>

          <div className='dessp'>
            <img src={hh2}/>
            <h1>JW Marriott</h1>
            <IoLocationSharp className='icon' /><p>Hotel in west suburs,Mumbai</p>
            <p> Description:<br/>Located 400 metres from Chhatrapati Shivaji International Airport Mumbai and offering an outdoor swimming pool, <br/>fitness centre and a spa wellness centre, JW Marriott Mumbai Sahar is located in Andheri...</p>
            <h1><p>Cost:</p>18,000</h1>
            <button className='button'>Book</button>

          </div>

          <div className='dessp'>
            <img src={hh3}/>
            <h1>Sahar hotel</h1>
            <IoLocationSharp className='icon' /><p>Hotel in west suburs,Mumbai</p>
            <p> Description:<br/>Located in Mumbai, Hotel Sahara Star, a 354 room property, <br/>offers spacious accommodation with a private balcony and views of the tropical lagoon.</p>
            <h1><p>Cost:</p>20,000/-</h1>
            <button className='button'>Book</button>

          </div>
      </div>

      <div className="desp">
        <div className="dessp">
          <img src={hh5}/>
          <h1>The Taj Mahal</h1>
          <IoLocationSharp className='icon' /><p>Hotel in colaba,Mumbai</p>
          <p>Description:<br/>Built in 1903, the iconic Taj Mahal Palace stands majestically opposite the Gateway of India, overlooking the Arabian Sea.Inside, the hotel’s lavish interiors showcase rich marble floors, combined with modern amenities to offer <br/>comfort and elegance.</p>
          <h1><p>Cost:</p>60,000/-</h1>
          <button className='button'>Book</button>
        </div>

        <div className="dessp">
          <img src={hh6}/>
          <h1>Taj The Trees</h1>
          <IoLocationSharp className='icon' /><p>Hotel in Central suburs,Mumbai</p>
          <p>Description:<br/>Located in Mumbai, 6.2 km from Phoenix Market City Mall, Taj The Trees, Mumbai provides accommodation with an outdoor swimming pool, free private parking, a fitness centre and a garden.Provides the best services.</p>
          <h1><p>Cost:</p>30,000/-</h1>
          <button className='button'>Book</button>
        </div>

        <div className="dessp">
          <img src={hh7}/>
          <h1>Moxy</h1>
          <IoLocationSharp className='icon' /><p>Hotel in western suburs,Mumbai</p>
          <p>Description:Set in Mumbai, 2.8 km from Juhu Beach, Moxy Mumbai Andheri West offers accommodation with an outdoor swimming pool, free private parking, a fitness centre and a shared lounge.<br/></p>
          <h1><p>Cost:</p>90,000/-</h1>
          <button className='button'>Book</button>
        </div>
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

export default Hotel