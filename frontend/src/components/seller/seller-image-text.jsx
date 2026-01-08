import React from "react";
import imagetext from "../../assets/imagetext.png";

function SellerImageWith() {
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

            <button className="custom-btn">Get My 3% Agent Match →</button>
          </div>

          <div className="custom-right-image">
            <img
              src={imagetext}
              alt="House"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}


export default SellerImageWith;