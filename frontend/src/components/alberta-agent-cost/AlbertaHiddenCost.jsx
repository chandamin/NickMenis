import React from "react";
import bannerImg from "../../assets/banner.jpg";

const AlbertaHiddenCost = () => {
  return (
    <section className="alberta-hidden-cost-modern">
      <div className="alberta-hidden-cost-inner">

       

        {/* CONTENT */}
        <div className="hidden-cost-text">
          <span className="hidden-cost-badge">
            THE REALITY
          </span>

          <h2>The Cost Is Hidden</h2>

          <p>
            It’s spread across time, energy, stress, rejection, and uncertainty.
            What most agents don’t see is the long-term toll it takes before
            a single listing is secured.
          </p>
        </div>

         {/* IMAGE */}
        <div className="hidden-cost-image">
          <img src={bannerImg} alt="Agent stress" />
        </div>

      </div>
    </section>
  );
};

export default AlbertaHiddenCost;
