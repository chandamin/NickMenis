import React from "react";
import imagetext from "../../assets/imagetext.png";
import people from "../../assets/people.png";

const DifferenceSection = () => {
  return (
    <section className="diff-section">
        <div class="diffrence-wrapper">
      <div className="diff-top">
        <h2>Where does it come from?</h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
        </p>
      </div>

      <div className="diff-bottom">
        {/* Images */}
        <div className="diff-images">
          <img src={imagetext} alt="House" />
          <img src={people} alt="Agent" />
        </div>

        {/* Text */}
        <div className="diff-content">
          <h3>What Makes Us Different</h3>
          <p>
            A smarter, more transparent way to sell your home — without sacrificing service or results.
          </p>

          <ul>
            <li>Local 5-Star Real Estate Agents Only</li>
            <li>Full Transparency — Flat 2% Commission</li>
            <li>No Obligations — You Choose the Agent</li>
            <li>Local Experts Who Know Your Neighbourhood</li>
            <li>Sellers Save Thousands in Commission</li>
          </ul>

          <button>Compare 2% vs 5% →</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
