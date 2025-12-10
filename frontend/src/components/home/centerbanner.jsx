import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CenterBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="custom-center-banner-main">
      <div className="custom-center-banner-inner">
        <div className="custom-center-banner-flex">

          <h2 className="banner-title">
            Tell us about your property — <br /> no street address required
          </h2>

          <p className="banner-subtitle">
            Access opportunities through our 3% agent matching program.
          </p>
          {/* <Link to="/sellers"> */}
          <button className="banner-btn" onClick={() => navigate("/sellers", { state : {scrollToCalc: true}})}>
            Compare 3% vs 5% →
          </button>
          {/* </Link> */}

        </div>
      </div>
    </div>
  );
};

export default CenterBanner;
