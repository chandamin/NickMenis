import React, { useState } from "react";
import logo from "../../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="custom-header-bar-main">
      <div className="custom-header-bar-inner">
        <div className="custom-header-bar-inner-flex">

          
          <div className="desktop-header">
            <div className="logo">
             <a href="/home">
              <img src={logo} alt="Logo" />
            </a>
            </div>

            <nav className="menu">
              <a className="active" href="/home">Home</a>
              <a href="/about">About</a>
              <a href="#">How It Works</a>
              <a href="#">For Sellers</a>
              <a href="/contact-us">Contact Us</a>
            </nav>

            <div className="auth-buttons">
              <a className="login-btn" href="/login">Login</a>
              <a className="signup-btn" href="/signup">Signup</a>
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
                  <a href="/home">Home</a>
                  <a href="/about">About</a>
                  <a href="#">How It Works</a>
                  <a href="#">For Sellers</a>
                  <a href="/contact-us">Contact Us</a>
                </nav>

                <div className="drawer-bottom">
                  <a className="drawer-login-btn" href="/login">Login</a>
                  <a className="drawer-signup-btn" href="/signup">Signup</a>
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
