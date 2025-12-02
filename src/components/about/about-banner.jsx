import React from "react";
import bannerImg from "../../assets/banner.jpg"; 

const AboutBanner = () => {
return (
<div
className="about-hero-banner"
style={{ backgroundImage: `url(${bannerImg})` }}
> <div className="about-hero-overlay"></div>

  <div className="about-hero-content">
    <p className="about-subtitle-banner">Get to know our talented team.</p>
    <h1 className="about-title-banner">About</h1>
  </div>
</div>


);
};

export default AboutBanner;
