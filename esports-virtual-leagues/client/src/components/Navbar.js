import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';




const Navbar = () => {
  return (
    <div className="net-overlay">
    <div className="navbar-bg">
            {/* <h1 className="main-title">Esports Virtual Leagues</h1> */}
      {/* <div className="navbar-wrap"> */}
   
      <div className="img-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/rules">Rules</Link>
        <Link to="/discord">Discord</Link>
      </div>
      <div className="chapter">
        <h1>ESPORTS VIRTUAL LEAGUES</h1>
        <h2>HOME</h2>
      </div>
      <div className="links">
        <Link to="/leagues">Leagues</Link>
        <Link to="/stats">Stats</Link>
      </div>
      <div className="signup-in">
        <Link to="/signin">Sign In/</Link>
        <Link to="/signin">Sign Up</Link>
      </div>
    </div>
  </div>
  )
};
export default Navbar;