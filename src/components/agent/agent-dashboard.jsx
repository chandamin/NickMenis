import React from "react";
import banner from "../../assets/data-dashboard.png";
const AgentDashboard = () => {
return (
    <div className="custom-agent-dashboard-main">
      <div className="custom-agent-dashboard-inner">
        <div className="custom-agent-dashboard-flex">
          {/* Left Section */}
          <div className="dashboard-left">
            <h1 className="dash-title">Join the 3% Club — Get exclusive Canadian seller leads</h1>
            <p className="dash-desc">
              This is a matchmaking service connecting motivated sellers with agents who agree to a
              <strong> flat 3% commission.</strong>
            </p>
            <p className="dash-desc bold">
              No listing service. No home is listed on this site. No hidden fees or surprises — 3%
              flat rate for agent services.
            </p>

            <div className="why-join-box">
              <div className="dasboard-heading">
              <h3>Why join?</h3>
              <p>
                Access a curated marketplace of seller leads (tiered: Diamond / Gold / Silver /
                Bronze). Seller contact details are revealed only after purchase per tier rules.
              </p>
              <div className="btn-row">
                <button className="primary-btn">View plans / Subscribe</button>
                <button className="outline-btn">Browse available previews</button>
              </div>
              </div>
              <div className="chart-box">
                <img src={banner} alt="chart" />
              </div>
            </div>

            <div className="features-row">
              <div className="feature-item">Verified seller intent</div>
              <div className="feature-item">Fast notifications + purchase flow</div>
              <div className="feature-item">Tiered exclusivity (Diamond → Bronze)</div>
              <div className="feature-item">Simple refund policy — no refunds for purchased leads</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="dashboard-right">
            <h2 className="right-title">Join the 3% Club</h2>
            <p>Create a discreet agent account to access the marketplace.</p>

            <form className="signup-form">
              <input type="text" placeholder="Full Name*" />
              <input type="password" placeholder="Password*" />
              <input type="password" placeholder="Confirm Password*" />

              <div className="form-btn-row">
                <button type="submit" className="primary-btn dark">Create Account</button>
                <button type="button" className="primary-btn dark">Demo Login</button>
              </div>

              <p className="login-text">Already a member? <a href="/login">Login</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgentDashboard;