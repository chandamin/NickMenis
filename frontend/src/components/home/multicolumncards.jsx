import React from "react";

const MultiColumnCards = () => {
  return (
    <div className="custom-multi-sellers-bar-main">
      <div className="custom-multi-sellers-bar-inner">
        <div className="custom-multi-sellers-inner-flex">

          {/* Card 1 - Property Home Owners */}
          <div className="multi-card">
            <h2 className="multi-title">Property Home Owners</h2>
            <p className="multi-desc">
              Are you looking to sell your property for just 3% (no hidden fees)?
            </p>
            <button className="multi-btn">Click here →</button>
          </div>

          {/* Card 2 - Agents */}
          <div className="multi-card">
            <h2 className="multi-title">Agents</h2>
            <p className="multi-desc">
              Are you a agent who wants to join 3% Agents and get matched
              with motivated home owners?
            </p>
            <button className="multi-btn">Click here →</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MultiColumnCards;
