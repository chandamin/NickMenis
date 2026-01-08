import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";

const AlbertaPackage = () => {
  return (
    <div className="custom-albeart-conversion-package">
      <div className="custom-conversion-package-albeart-inner">
        <div className="custom-conversion-package-albeart-inner-flex">

          {/* HERO */}
          <section className="ap-hero">
            <h1>Agent Conversion Package – Alberta</h1>
            <p>Ready to Publish</p>
          </section>

          {/* INTRO */}
          <section className="ap-section ap-intro">
            <ul>
              <li>
                <img
                   src={icon1}
                   alt="icon"
                   className="ap-intro-icon"
                    />
                High-trust agent testimonials (placed between sections)</li>
              <li>
                <img
                   src={icon2}
                   alt="icon"
                   className="ap-intro-icon"
                    />
                A clear cost comparison grid (Alberta-specific)</li>
              <li>
                <img
                   src={icon3}
                   alt="icon"
                   className="ap-intro-icon"
                    />
                Brokerage-approval talking points (results-based, compliant, calm)</li>
            </ul>
          </section>

          {/* SECTION 1 */}
          <section className="ap-section">
            <h2>The Real Problem Isn’t Commission — It’s How You Get the Listing</h2>
            <p>
              Most Alberta agents don’t struggle because they’re bad at real estate.
              They struggle because getting the listing consumes their life.
            </p>

            <div className="ap-testimonial">
              <p>
                “I didn’t realize how much mental energy prospecting was taking until it was gone.
                3 Percent Agents removed the grind and gave me clarity I hadn’t felt in years.”
              </p>
              <span>— Alberta Agent</span>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="ap-section">
            <h2>You’re Already Paying for Listings — Just Not All at Once</h2>

            <div className="ap-testimonial">
              <p>
                “When I actually added up my ads, fuel, hours, and follow-ups,
                I realized I was already paying thousands per listing. This just made it predictable — and only when I get paid.”
              </p>
              <span>— Alberta Agent</span>
            </div>
          </section>

          {/* PRICING TABLES */}
          <section className="ap-section">
            <h2>What Alberta Agents Usually Pay vs. 3 Percent Agents</h2>

            <div className="ap-pricing-grid">
              {/* LEFT */}
              <div className="ap-pricing-card negative">
                <h3>Traditional Prospecting</h3>
                <table>
                  <tbody>
                    <tr><td>Time</td><td>40–100+ hours</td></tr>
                    <tr><td>Cash</td><td>$2,000–$10,000+</td></tr>
                    <tr><td>Stress</td><td>High</td></tr>
                    <tr><td>Guarantee</td><td>No</td></tr>
                  </tbody>
                </table>
              </div>

              {/* RIGHT */}
              <div className="ap-pricing-card positive">
                <h3>3 Percent Agents</h3>
                <table>
                  <tbody>
                    <tr><td>Upfront Fees</td><td>$0</td></tr>
                    <tr><td>Monthly Fees</td><td>$0</td></tr>
                    <tr><td>Referral Fee</td><td>1% at closing only</td></tr>
                    <tr><td>If No Sale</td><td>$0 owed</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="ap-highlight-text">
              The real comparison isn’t commission — it’s cost per listing.
            </p>
          </section>

          {/* COMPLIANCE */}
          <section className="ap-section ap-compliance">
            <h2>Built for Alberta — Results-Based and Compliant</h2>

            <div className="ap-testimonial">
              <p>
                “I wouldn’t touch anything that put my license or brokerage relationship at risk.
                This structure is clean, disclosed, and easy to explain.”
              </p>
              <span>— Alberta Agent</span>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="ap-footer">
            <p>
              3 Percent Agents is not a real estate brokerage and does not provide trading,
              representation, or legal advice. All real estate services are provided by
              independently licensed Alberta real estate agents operating through approved
              brokerages. Participation does not guarantee transactions or outcomes.
            </p>
          </footer>

          {/* FINAL CTA */}
          <section className="ap-final-cta">
            <h2>You’re already paying for listings.</h2>
            <p>
              3 Percent Agents lets you pay only when you succeed.
              <br />No upfront risk. Cleaner compliance. Better life.
            </p>
             <a href="#" className="agent-cta-btn">Explore How It Works</a>
          </section>

          

        </div>
      </div>
    </div>
  );
};

export default AlbertaPackage;
