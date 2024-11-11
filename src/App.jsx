// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import Flight from './Flight/Flight'
import Hotel from './Hotel/Hotel'
import Login from './Login/Login';
import Signup from './Login/Signup';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flight" element={<Flight />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
