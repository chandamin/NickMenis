import React from "react";
import bannerImg from "../../assets/agent-banner.png"; 

const AgentBanner = () => {
return (
<div
className="agent-hero-banner"
style={{ backgroundImage: `url(${bannerImg})` }}
> <div className="agent-hero-overlay"></div>

  <div className="agent-hero-content">
    <h1 className="agent-title-banner">Why do we use it?</h1>
  </div>
</div>

);
};

export default AgentBanner;
