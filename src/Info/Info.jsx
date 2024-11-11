import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { CiLogin } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Home = () => {
  const [active, setActive] = useState('navBarMenu');
  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
  };
  const removeNavBar = () => {
    setActive('navBarMenu');
  };

  // Adding bgcolor to second navbar
  const [noBg, addBg] = useState('navBartTwo');
  
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg('navBartTwo navbar_With_Bg');
    } else {
      addBg('navBartTwo');
    }
  };
  window.addEventListener('scroll', addBgColor);

  return (
    <div className='home'>
      
      <div className='navBar flex'> 
        <div className={noBg}>
          <div className="logoDiv">
            <h1>TrippyGo!</h1>
          </div>
          <div className={active}>
            <ul className="menu flex">
              <li onClick={removeNavBar} className='listItems'><Link to='/'>Home</Link></li>
              <li onClick={removeNavBar} className='listItems'><Link to='/Flight'>Flight-Booking</Link></li>
              <li onClick={removeNavBar} className='listItems'><Link to='/Hotel'>Hotel-Booking</Link></li>
              <li onClick={removeNavBar} className='listItems'><Link to='/Login'><CiLogin fontSize="40px" /></Link></li>
            </ul>

            <button onClick={removeNavBar} className='btn flex btnOne'>
              Back
            </button>
          </div>
          <div onClick={showNavBar} className='toggleIcon'>
            <CgMenuGridO className='Icon' />
          </div>
        </div> 
      </div>

      {/* New div with text added here */}
      <div className="newDiv">
        <h2>Welcome to TrippyGo!</h2>
        <p>Your journey begins here. Explore flights, hotels, and more with ease.</p>
      </div>

    </div>
  );
}

export default Home;
