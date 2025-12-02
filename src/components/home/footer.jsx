import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="custom-footer-main">
      <div className="custom-footer-inner">
        <div className="custom-footer-flex">

          {/* ---- LOGO + TEXT ---- */}
          <div className="footer-col footer-about">
            <img
              src={logo}
              alt="Logo"
              className="footer-logo"
            />

            <p>
              We are committed to providing the most personalized real
              estate services from listing to close. We have exceptional
              results which are confirmed by the number of clients we serve.
              Discover our selection of income-generating rental properties
              and commercial ventures.
            </p>

            <div className="footer-social">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>

          {/* ---- GET IN TOUCH ---- */}
          <div className="footer-col">
            <h3>Get In Touch</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>How It Works</li>
              <li>For Sellers</li>
              <li>Become a 2% Agent</li>
            </ul>
          </div>

          {/* ---- QUICK LINKS ---- */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact</li>
              <li>Faq</li>
              <li>Home</li>
            </ul>
          </div>

          {/* ---- CONTACT INFO ---- */}
          <div className="footer-col footer-contact">
            <h3>Contact Info</h3>

            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <p>
                2% Agents <br />
                M1-1140 de Maisonneuve West, <br />
                Montreal, QC, H3A 1M8
              </p>
            </div>

            <div className="footer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <p>info@2PercentAgents.ca</p>
            </div>
          </div>

        </div>

        <hr />

        <p className="footer-copy">
          Copyright © 2025 2% AGENTS — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
