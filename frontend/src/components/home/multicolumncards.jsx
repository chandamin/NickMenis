import React from "react";
import { useNavigate } from "react-router-dom";
const MultiColumnCards = ({scrollToForm}) => {
  // function MultiColumnCards ({scrollToForm})  {
  const navigate = useNavigate();
  return (
    <div className="custom-multi-sellers-bar-main">
      <div className="custom-multi-sellers-bar-inner">
        <div className="custom-multi-sellers-inner-flex">

          {/* Card 1 - Property Sellers */}
          <div className="multi-card">
            <h2 className="multi-title">Property Sellers</h2>
            <p className="multi-desc">
              Are you looking to sell your property for just 3% (no hidden fees)?
            </p>
            <button className="multi-btn" onClick={scrollToForm}>Click here →</button>
          </div>

          {/* Card 2 - Agents */}
          <div className="multi-card">
            <h2 className="multi-title">Agents</h2>
            <p className="multi-desc">
              Are you a 5-star agent who wants to join 3% Agents and get matched
              with motivated sellers?
            </p>
            <button className="multi-btn" onClick={()=> navigate("/agent")}>Click here →</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MultiColumnCards;
