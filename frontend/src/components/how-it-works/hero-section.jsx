import React from "react";
import Hero from "../../assets/how-img.png";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1>Lorem Ipsum is simply dummy text of the printing</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s
        </p>

        <form className="hero-form">
          <input type="email" placeholder="Enter your email..." />
          <button type="submit">Get Started</button>
        </form>
      </div>

      <div className="hero-right">
        <img
          src={Hero}
          alt="House"
        />
      </div>
    </section>
  );
};

export default HeroSection;
