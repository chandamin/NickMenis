import React from "react";

const TaglineSection = () => {
  const items = [
    "Full-service real estate. Flat 3%. No surprises.",
    "Why pay 5%? Sell for 3%.",
    "Canada’s smartest way to sell a home.",
    "The future of real estate starts at 3%.",
    "The future of real estate starts at 3%."
  ];

  return (
    <div className="custom-tagline-main">
      <div className="custom-tagline-inner">
        
        <h2 className="tagline-title">
          Keep More. Sell Smarter. Flat 3% — No surprises.
        </h2>

        <div className="custom-tagline-flex">
          {items.map((item, index) => (
            <div className="tagline-box" key={index}>
              {item}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TaglineSection;
