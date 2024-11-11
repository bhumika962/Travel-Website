import React, { useState, useRef } from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaCalendarAlt, FaSuitcase } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsBookmarkFill } from "react-icons/bs";
import { GiPerson } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './FlightApp.scss';

// Image Imports
import img from '../image/Mumbai.jpg';
import img2 from '../image/Goa Tour.jpg';
import img3 from '../image/Dubai.jpeg';
import img4 from '../image/Paris.jpg';
import img5 from '../image/Hong kong.jpg'
import img6 from '../image/Rome.jpg'

const FlightApp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const tripType = watch("tripType");
  const [formData, setFormData] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null); 

  const numAdults = watch("adults", 1);
  const numChildren = watch("children", 0);
  const totalSeats = parseInt(numAdults) + parseInt(numChildren);

  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const generateSeatLayout = () => {
    const rows = Math.ceil(totalSeats / 4); 
    const seatLayout = [];
    for (let i = 1; i <= rows; i++) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        const seatNumber = `${i}${String.fromCharCode(65 + j)}`;
        row.push(seatNumber);
      }
      seatLayout.push(row);
    }
    return seatLayout;
  };

  const seatLayout = generateSeatLayout();

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat); 
  };

  const onSubmit = (data) => {
    setFormData({ ...data, selectedSeat });
  };

  const closeModal = () => setFormData(null);

  return (
    <section>
      {/* Most Visited Destinations */}
      <div className="most-visited-destinations">
        <h2>Most Visited Destinations <MdFlight className="icon" /></h2>
        <div className="destination-cards grid">
          <div className="destination-card">
            <img src={img} alt="Mumbai" />
            <h3>New Delhi To Mumbai</h3>
            <HiOutlineLocationMarker className="icon" /><span className="name">India</span>
            <h5 className="price">Price: ₹4,000 -  ₹6,000/pp</h5>
            <p>Mumbai, known as the "City of Dreams," is Maharashtra’s capital and India’s financial hub. It’s famous for the Gateway of India, Marine Drive, and the UNESCO-listed Chhatrapati Shivaji Maharaj Terminus. Mumbai is home to Bollywood, India’s film industry, attracting talent nationwide. Iconic for its festivals like Ganesh Chaturthi and street foods like vada pav, the city combines historic charm with modern energy in areas like Colaba and Bandra.</p>
            <button className="btn" onClick={scrollToForm}>
              <span>Book Now</span>
            </button>
          </div>
          <div className="destination-card">
            <img src={img2} alt="Goa" />
            <h3>Mumbai To Goa</h3>
            <HiOutlineLocationMarker className="icon" /><span className="name">India</span>
            <h5 className="price">Price: ₹2,000 - ₹5,000/pp</h5>
            <p>Goa is a coastal state in western India, famous for its beautiful beaches like Baga, Anjuna, and Palolem, vibrant nightlife, and Portuguese-influenced culture. The state is known for its lively atmosphere with beach clubs, bars, and festivals like the Goa Carnival. Goa’s cuisine includes seafood dishes like fish curry rice, and it also features historical sites like the Basilica of Bom Jesus.</p>
            <button className="btn" onClick={scrollToForm}>
              <span>Book Now</span>
            </button>
          </div>
          <div className="destination-card">
            <img src={img3} alt="Lakshadweep" />
            <h3>Mumbai To Dubai</h3>
            <HiOutlineLocationMarker className="icon" /><span className="name">UAE - United Arab Emirates</span> 
            <h5 className="price">Price: ₹22,000 - ₹25,000/pp</h5>
            <p>Dubai, known as the “City of Gold,” is famous for its towering Burj Khalifa, luxury shopping, and stunning skyline. Iconic sites like Palm Jumeirah and Dubai Creek reflect its blend of modernity and tradition. Visitors can enjoy desert safaris, vibrant nightlife, and festivals like the Dubai Shopping Festival. Dubai’s multicultural vibe, upscale dining, and attractions make it a global hub of luxury and leisure..</p>
            <button className="btn" onClick={scrollToForm}>
              <span>Book Now</span>
            </button>
          </div>
          <div className="destination-card">
            <img src={img4} alt="Paris" />
            <h3>Mumbai To Paris</h3>
            <HiOutlineLocationMarker className="icon" /><span className="name">France</span>
            <h5 className="price">Price: ₹53,000 - ₹60,000/pp</h5>
            <p>Paris, known as the "City of Light," is the capital of France, famous for its iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. With charming neighborhoods like Montmartre and the Latin Quarter, the city boasts a rich cultural and artistic scene. Paris is celebrated for its gourmet cuisine, stylish cafes, and fashion events like Paris Fashion Week, making it a world capital of art, style, and romance.</p>
            <button className="btn" onClick={scrollToForm}>
              <span>Book Now</span>
            </button>
          </div>
          <div className="destination-card">
            <img src={img5} alt="Hong Kong" />
            <h3>Mumbai To Hong Kong</h3>
            <HiOutlineLocationMarker className="icon" /><span className="name">China</span>
            <h5 className="price">Price: ₹30,000 - ₹60,000/pp</h5>
            <p>Hong Kong is a vibrant metropolis known for its stunning skyline, bustling harbor, and unique blend of Eastern and Western cultures. The city features iconic attractions like Victoria Peak, offering panoramic views, and the bustling Kowloon markets. Hong Kong is also famous for its world-class shopping, street food, and dining, blending traditional Cantonese cuisine with international flavors. The city’s fast-paced lifestyle is balanced by serene spots like Lantau Island and lush parks.</p>
            <button className="btn" onClick={scrollToForm}>
              <span>Book Now</span>
            </button>
          </div>
          <div className="destination-card">
            <img src={img6} alt="Italy" />
            <h3>Mumbai To Rome</h3>
            <HiOutlineLocationMarker className="icon" /><span className="name">Italy</span>
            <h5 className="price">Price: ₹44,000 - ₹80,000/pp</h5>
            <p>Italy is a culturally rich and beautiful country known for its historic landmarks, art, and cuisine. Famous sites include the ancient ruins of Rome, the canals of Venice, and the Renaissance art of Florence. Italy offers a stunning variety of landscapes, from the rolling hills of Tuscany to the coastal beauty of the Amalfi Coast and the Alps in the north. Italian cuisine, beloved worldwide, features pizza, pasta, gelato, and fine wines.</p>
            <button className="btn" onClick={scrollToForm}>
              <span>Book Now</span>
            </button>
          </div>
          
        </div>
      </div>

      {/* Flight Booking Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flight-form" ref={formRef}>
        <div className="form-header">
          <p className="title"><Link to='/'>Flight Booking</Link></p>
        </div>

        {/* Trip Type Radio Buttons */}
        <div className="radio-group">
          <label>
            <input type="radio" value="round trip" {...register("tripType", { required: true })} />
            <span>Round trip</span>
          </label>
          <label>
            <input type="radio" value="one way" {...register("tripType", { required: true })} />
            <span>One way</span>
          </label>
          <label>
            <input type="radio" value="multi-city" {...register("tripType", { required: true })} />
            <span>Multi-city</span>
          </label>
          {errors.tripType && <span className="error-message">Please select a trip type</span>}
        </div>

        {/* Departure Input */}
        <div className="input-group">
          <label>Flying from</label>
          <div className="input-wrapper">
            <FaPlaneDeparture className="icon" />
            <select {...register("departure", { required: true })}>
              <option value="" disabled hidden>--Select Airport--</option>
              <option value="DEL">Indira Gandhi International Airport</option>
              <option value="BOM">Chhatrapati Shivaji Maharaj International Airport</option>
              <option value ="DXB">Dubai International Airport</option>
              <option value="BLR">Kempegowda International Airport</option>
              <option value="MAA">Chennai International Airport</option>
              <option value="HYD">Rajiv Gandhi International Airport</option>
              <option value="CCU">Netaji Subhas Chandra Bose International Airport</option>
              <option value="GOI">Dabolim International Airport</option>
              <option value="AMD">Sardar Vallabhbhai Patel International Airport</option>
              <option value="COK">Cochin International Airport</option>
              <option value="JAI">Jaipur International Airport</option>
              <option value="IXZ">Veer Savarkar International Airport (Andaman & Nicobar Islands)</option>
              <option value="VTZ">Visakhapatnam International Airport</option>
              <option value="GAU">Lokpriya Gopinath Bordoloi International Airport (Assam)</option>
              <option value="GAY">Gaya International Airport (Bihar)</option>
              <option value="IXC">Chandigarh International Airport</option>
              <option value="RPR">Swami Vivekananda International Airport (Chhattisgarh)</option>
              <option value="IXE">Mangalore International Airport (Karnataka)</option>
              <option value="CCJ">Calicut International Airport (Kerala)</option>
              <option value="TRV">Trivandrum International Airport (Kerala)</option>
              <option value="IDR">Devi Ahilya Bai Holkar International Airport (Madhya Pradesh)</option>
              <option value="NAG">Dr. Babasaheb Ambedkar International Airport (Maharashtra)</option>
              <option value="PNQ">Pune International Airport</option>
              <option value="SXR">Sheikh ul-Alam International Airport (Jammu & Kashmir)</option>
              <option value="BBI">Biju Patnaik International Airport (Odisha)</option>
              <option value="ATQ">Sri Guru Ram Dass Jee International Airport (Punjab)</option>
              <option value="LKO">Chaudhary Charan Singh International Airport (Uttar Pradesh)</option>
              <option value="IXB">Bagdogra International Airport (West Bengal)</option>

            </select>
          </div>
          {errors.departure && <span className="error-message">Departure is required</span>}
        </div>

        {/* Arrival Input */}
        <div className="input-group">
          <label>Flying to</label>
          <div className="input-wrapper">
            <FaPlaneArrival className="icon" />
            <select {...register("arrival", { required: true })}>
            <option value="BOM">Chhatrapati Shivaji Maharaj International Airport</option>
            <option value ="Paris">Charles de Gaulle Airport</option>
            <option value ="Rome">Leonardo da Vinci-Fiumicino Airport</option>
            <option value ="Hong Kong">Hong Kong International Airport</option>
            <option value ="DXB">Dubai International Airport</option>
            <option value="DEL">Indira Gandhi International Airport</option>
            <option value="BLR">Kempegowda International Airport</option>
            <option value="MAA">Chennai International Airport</option>
            <option value="HYD">Rajiv Gandhi International Airport</option>
            <option value="CCU">Netaji Subhas Chandra Bose International Airport</option>
            <option value="GOI">Dabolim International Airport</option>
            <option value="AMD">Sardar Vallabhbhai Patel International Airport</option>
            <option value="COK">Cochin International Airport</option>
            <option value="JAI">Jaipur International Airport</option>
            <option value="IXZ">Veer Savarkar International Airport (Andaman & Nicobar Islands)</option>
            <option value="VTZ">Visakhapatnam International Airport</option>
            <option value="GAU">Lokpriya Gopinath Bordoloi International Airport (Assam)</option>
            <option value="GAY">Gaya International Airport (Bihar)</option>
            <option value="IXC">Chandigarh International Airport</option>
            <option value="RPR">Swami Vivekananda International Airport (Chhattisgarh)</option>
            <option value="IXE">Mangalore International Airport (Karnataka)</option>
            <option value="CCJ">Calicut International Airport (Kerala)</option>
            <option value="TRV">Trivandrum International Airport (Kerala)</option>
            <option value="IDR">Devi Ahilya Bai Holkar International Airport (Madhya Pradesh)</option>
            <option value="NAG">Dr. Babasaheb Ambedkar International Airport (Maharashtra)</option>
            <option value="PNQ">Pune International Airport</option>
            <option value="SXR">Sheikh ul-Alam International Airport (Jammu & Kashmir)</option>
            <option value="BBI">Biju Patnaik International Airport (Odisha)</option>
            <option value="ATQ">Sri Guru Ram Dass Jee International Airport (Punjab)</option>
            <option value="LKO">Chaudhary Charan Singh International Airport (Uttar Pradesh)</option>
            <option value="IXB">Bagdogra International Airport (West Bengal)</option>
            </select>
          </div>
          {errors.arrival && <span className="error-message">Arrival is required</span>}
        </div>

        {/* Departure Date Input */}
        <div className="input-group">
          <label>Departure Date</label>
          <div className="input-wrapper">
            <FaCalendarAlt className="icon" />
            <input type="date" {...register("departureDate", { required: true })} />
          </div>
          {errors.departureDate && <span className="error-message">Date is required</span>}
        </div>

        {/* Return Date Input (only for Round Trip) */}
        {tripType === "round trip" && (
          <div className="input-group">
            <label>Return Date</label>
            <div className="input-wrapper">
              <FaCalendarAlt className="icon" />
              <input type="date" {...register("returnDate", { required: tripType === "round trip" })} />
            </div>
            {errors.returnDate && <span className="error-message">Return date is required for round trips</span>}
          </div>
        )}

        {/* Number of Adults */}
        <div className="input-group">
          <label>Adults</label>
          <div className="input-wrapper">
            <GiPerson className="icon" />
            <input type="number" {...register("adults", { required: true, min: 1, max: 20 })} placeholder="1" />
          </div>
          {errors.adults && <span className="error-message">Please enter number of adults</span>}
        </div>

        {/* Number of Children */}
        <div className="input-group">
          <label>Children</label>
          <div className="input-wrapper">
            <GiPerson className="icon" />
            <input type="number" {...register("children", { required: true, min: 0, max: 20 })} placeholder="0" />
          </div>
          {errors.children && <span className="error-message">Please enter number of children</span>}
        </div>

        {/* Class Selection */}
        <div className="input-group">
          <label>Class</label>
          <div className="input-wrapper">
            <select {...register("class", { required: true })}>
              <option value="" disabled hidden>--Select Class--</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
          </div>
          {errors.class && <span className="error-message">Class is required</span>}
        </div>

        {/* Baggage Option */}
        <div className="input-group">
          <label>Baggage</label>
          <div className="input-wrapper">
            <FaSuitcase className="icon" />
            <select {...register("baggage", { required: true })}>
              <option value="" disabled hidden>--Select Baggage--</option>
              <option value="no baggage">No Baggage</option>
              <option value="15kg">15 kg</option>
              <option value="30kg">30 kg</option>
            </select>
          </div>
          {errors.baggage && <span className="error-message">Please select a baggage option</span>}
        </div>

        {/* Price Range */}
        <div className="input-group">
          <label>Price Range (₹)</label>
          <select {...register("price", { required: true })} className="price-select">
            <option>All Prices</option>
            <option>₹ 3,000 - ₹ 10,000</option>
            <option>₹ 11,000 - ₹ 20,000</option>
            <option>₹ 21,000 - ₹ 30,000</option>
            <option>₹ 31,000 - ₹ 40,000</option>
            <option>₹ 41,000 - ₹ 50,000</option>
            <option>₹ 51,000 - ₹ 60,000</option>
            <option>₹ 61,000 - ₹ 70,000</option>
            <option>₹ 71,000 - ₹ 80,000</option>
            <option>₹ 81,000 - ₹ 90,000</option>
            <option>₹ 91,000 - ₹ 1,00,000</option>


          </select>
          {errors.price && <span className="error-message">Please specify a price</span>}
        </div>

        {/* Seat Selection */}
        <div className="seat-selection">
          <h3>Select Your Seat</h3>
          <div className="seat-grid" style={{ gridTemplateColumns: `repeat(4, minmax(40px, 1fr))` }}>
            {seatLayout.map((row, rowIndex) => (
              <div key={rowIndex} className="seat-row">
                {row.map((seat) => (
                  <div
                    key={seat}
                    className={`seat ${selectedSeat === seat ? "selected" : ""}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Book Flight  <BsBookmarkFill /></button>
        <button className="submit-button"><Link to='/'>Back To Home Page</Link></button>
      </form>

      {/* Custom Modal */}
      {formData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Flight Booking Details</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
            <button onClick={closeModal} className="close-button">Done</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FlightApp;