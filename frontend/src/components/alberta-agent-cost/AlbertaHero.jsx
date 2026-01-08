import React from "react";
import bannerImg from "../../assets/banner.jpg";

const AlbertaHero = () => {
  return (
    <section
      className="alberta-hero-full"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="alberta-hero-overlay"></div>

      <div className="alberta-hero-inner">
        <h1>
          What Does It Really Cost an Alberta Agent to Get
          <span> ONE Listing?</span>
        </h1>

        <p>
          Most agents underestimate the true cost of a single listing —
          because the cost isn’t just money.
        </p>

        <button className="alberta-hero-btn">
          Learn More <span>↗</span>
        </button>
      </div>
    </section>
  );
};

export default AlbertaHero;
