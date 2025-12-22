import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/3percent.jpg";

const Footer = () => {
  return (
    <footer className="custom-footer-main">
      <div className="custom-footer-inner">
        <div className="custom-footer-flex">
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
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          
          <div className="footer-col">
            <h3>Get In Touch</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/sellers">For Sellers</Link></li>
              <li><Link to="/agent">Become a 3% Agent</Link></li>
            </ul>
          </div>

          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
              <li><Link to="/accordion">FAQ</Link></li>
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>

          
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
              <a href="mailto:info@2PercentAgents.ca">
                info@2PercentAgents.ca
              </a>
            </div>
          </div>

        </div>

        <hr />

        <p className="footer-copy">
          Copyright © 2025 3% AGENTS — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;