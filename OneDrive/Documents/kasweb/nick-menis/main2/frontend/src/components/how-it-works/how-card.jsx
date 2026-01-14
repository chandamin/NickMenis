import React from "react";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";


const HowCard = () => {
  return (
    <div className="howitworks-main">
      <div className="howitworks-inner">
        
        <h2 className="howitworks-heading">How It Works</h2>
        <p className="howitworks-subtitle">
          Three simple steps — no street address required to start.
        </p>

        <div className="howitworks-box-container">

          {/* BOX 1 */}
          <div className="howitworks-box">
            <div className="step-badge">1</div>
            <img
              src={icon1}
              alt="icon"
              className="howitworks-icon"
            />
            <h3 className="box-title">Step 1 — Tell Us About Your Property</h3>
            <p className="box-text">
              Quick, simple questions.<br />No street address required.
            </p>
          </div>

          {/* BOX 2 */}
          <div className="howitworks-box">
            <div className="step-badge">2</div>
            <img
              src={icon2}
              alt="icon"
              className="howitworks-icon"
            />
            <h3 className="box-title">
              We Match You With a Local 5-Star Real Estate Agent
            </h3>
            <p className="box-text">
              A verified local expert — rated 5 stars — who has agreed in
              advance to provide full service for a flat 3% commission.
            </p>
          </div>

          {/* BOX 3 */}
          <div className="howitworks-box">
            <div className="step-badge">3</div>
            <img
              src={icon3}
              alt="icon"
              className="howitworks-icon"
            />
            <h3 className="box-title">Sell Your Home & Save Thousands</h3>
            <p className="box-text">
              No hidden fees. No surprises. No pressure.<br />
              Just a smarter way to sell your home.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowCard;
