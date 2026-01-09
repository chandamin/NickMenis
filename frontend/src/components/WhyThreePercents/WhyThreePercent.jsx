import banner from "../../assets/banner.jpg";
import media from "../../assets/media.png";
import imagetext from "../../assets/imagetext.png";
import people from "../../assets/people.png";

const WhyThreePercent = () => {
  return (
    <div className="custom-why-three-percent-main">
      <div className="custom-why-three-percent-inner">
        <div className="custom-why-three-percent-inner-flex">

          {/* HERO BANNER */}
          <section
            className="custom-why-three-percent-hero"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="custom-why-three-percent-hero-overlay">
                <div className="custom-three-percantage-banners">
              <span className="custom-why-three-percent-pill">Built for Alberta</span>
              <h2>Why 3 Percent Agents Exists</h2>
              <p>
                A transparent, results-based alternative to traditional real estate
                commissions in Alberta.
              </p>
              </div>
            </div>
          </section>

          {/* PROBLEM SECTION */}
          <section className="custom-why-three-percent-section split">
           
            <div className="image">
              <img src={media} alt="Real estate process" />
            </div>

             <div className="text">
              <h2>The Problem We Set Out to Solve</h2>
              <p>
                Real estate commissions have stayed high—even though the way homes are sold
                has changed. Technology and buyer behaviour have made selling more efficient,
                yet many Alberta homeowners still pay outdated commission rates.
              </p>
              <p>
                At the same time, many agents are trapped in cold calling, door knocking,
                chasing referrals, and heavy ad spend—costs passed directly to sellers.
              </p>
            </div>
          </section>

          {/* MODEL SECTION */}
          <section className="custom-why-three-percent-section split reverse">
            <div className="image">
              <img src={imagetext} alt="Fair commission model" />
            </div>
            <div className="text">
              <h2>A Fair, Results-Based Model</h2>
              <p>
                Alberta allows flexible, negotiated commission structures. 3 Percent Agents
                uses that flexibility to create a simple alternative:
              </p>
              <ul>
                <li>Homes sold for a total commission of <strong>3%</strong></li>
                <li>Homeowners keep more of their equity</li>
                <li>Agents are paid only when a sale is successful</li>
              </ul>
              <p className="highlight">
                No inflated fees. No outdated assumptions. No pressure.
              </p>
            </div>
          </section>

          {/* STATS */}
          <section className="custom-why-three-percent-stats">
            <div className="stat-card">
              <h3>3%</h3>
              <p>Total Commission</p>
            </div>
            <div className="stat-card">
              <h3>$000s</h3>
              <p>Saved by Homeowners</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Aligned Incentives</p>
            </div>
          </section>

          {/* ALIGNMENT */}
          <section className="custom-why-three-percent-section center">
            <h2>Aligned Incentives. Better Outcomes.</h2>
            <p>
              Homeowners save thousands. Agents eliminate constant prospecting.
              No one gets paid unless the home sells.
            </p>
          </section>

          {/* TRANSPARENCY */}
          <section className="custom-why-three-percent-section split">
            <div className="text">
              <h2>Built for Alberta. Built on Transparency.</h2>
              <p>
                3 Percent Agents is not a brokerage and does not represent buyers or sellers.
                All services are provided by licensed Alberta real estate agents operating
                under provincial law, approved brokerages, and written agreements.
              </p>
            </div>
            <div className="image">
              <img src={people} alt="Licensed Alberta agents" />
            </div>
          </section>

          {/* CTA */}
          <section className="custom-why-three-percent-cta">
            <h2>No Obligations. Just Better Options.</h2>
            <p>
              Exploring your options costs nothing. Overpaying on commission can cost you a lot.
            </p>
            <button>Explore Your Options</button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default WhyThreePercent;
