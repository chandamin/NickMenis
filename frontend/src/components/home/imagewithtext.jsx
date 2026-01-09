import React from "react";
import imagetext from "../../assets/imagetext.png";
import people from "../../assets/people.png";

function ImageWithText({scrollToForm}) {
  return (
    <div className="custom-image-text-main">
      <div className="custom-image-text-inner">
        <div className="custom-icon-image-inner-flex">
          <div className="custom-left-content">
            <h2>Why 3% Makes More Sense Than 5%</h2>
            <p>
              Most Canadians still pay 5% because they don’t know better
              options exist.
            </p>

            <ul className="custom-list">
              <li>MLS listing included</li>
              <li>Professional photography & premium marketing</li>
              <li>Expert negotiation & open houses</li>
              <li>Full paperwork and start-to-finish support</li>
            </ul>

            <p className="custom-bold-text">
              No games. No fake fees. Full-service real estate — for an honest
              3%.
            </p>

           <button
  className="custom-btn"
  onClick={() => window.location.href = "/why-three-percent"}
>
  Get My 3% Agent Match →
</button>

          </div>

          <div className="custom-right-image">
            <img
              src={imagetext}
              alt="House"
            />
          </div>
        </div>
      </div>




      <div className="custom-image-text-inner" id="secong-image-text">
        <div className="custom-icon-image-inner-flex">

          <div className="custom-right-image">
            <img
              src={people}
              alt="House"
            />
          </div>

          <div className="custom-left-content">
            <h2>What Makes Us Different</h2>
            <p>
              A smarter, more transparent way to sell your home — without sacrificing service or results.
            </p>

            <ul className="custom-list">
              <li>Local Real Estate Agents Only</li>
              <li>Full Transparency — Flat 3% Commission</li>
              <li>No Obligations — You Choose the Agent</li>
              <li>Local Experts Who Know Your Neighbourhood</li>
              <li>Home Owners Save Thousands in Commission</li>
            </ul>

            <button className="custom-btn" >Compare 3% vs 5% →</button>
          </div>

          
        </div>
      </div>
      

      
    </div>
  );
}


export default ImageWithText;