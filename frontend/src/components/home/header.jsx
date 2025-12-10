import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="custom-header-bar-main">
      <div className="custom-header-bar-inner">
        <div className="custom-header-bar-inner-flex">

          
          <div className="desktop-header">
            <div className="logo">
             <a href="/">
              <img src={logo} alt="Logo" />
            </a>
            </div>

            <nav className="menu">
              {/* <a className="actives" href="/home">Home</a>
              <a href="/about">About</a>
              <a href="#">How It Works</a>
              <a href="#">Sellers</a>
               <a href="/agent">Agent</a>
              <a href="/contact-us">Contact Us</a> */}

              <Link className="actives" to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/sellers">Sellers</Link>
              <Link to="/agent">Agent</Link>
              <Link to="/contact-us">Contact Us</Link>

            </nav>

            <div className="auth-buttons">
              <Link className="login-btn" to="/login">Login</Link>
              <Link className="signup-btn" to="/signup">Signup</Link>
            </div>
          </div>

          
          <div className="mobile-header">

            
            <button className="hamburger" onClick={() => setOpen(true)}>
              <svg width="28" height="28" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <img className="mobile-logo" src={logo} alt="Logo" />

            <a className="mobile-signup-btn" href="#">Signup</a>
          </div>

         
          {open && (
            <div className="drawer-overlay" onClick={() => setOpen(false)}>
              <div className="drawer" onClick={(e) => e.stopPropagation()}>

                <div className="drawer-header">
                  <h2>Menu</h2>

                  
                  <button className="close-btn" onClick={() => setOpen(false)}>
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <path d="M6 6l12 12M6 18l12-12" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>

                <nav className="drawer-menu">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/how-it-works">How It Works</Link>
                  <Link to="/sellers">Sellers</Link>
                  <Link to="/agent">Agent</Link>
                  <Link to="/contact-us">Contact Us</Link>
                </nav>

                <div className="drawer-bottom">
                  <Link className="drawer-login-btn" to="/login">Login</Link>
                  <Link className="drawer-signup-btn" to="/signup">Signup</Link>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Header;
