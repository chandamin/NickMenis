import banner from "../../assets/banner.jpg";

function Banner({scrollToForm}) {
  return (
    <section 
      className="home-banner" 
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="banner-overlay"></div>

      <div className="banner-content">
        
        <p className="badge">Flat, honest 3% commission</p>

        <h1>
          Sell Your Home With a Local Real Estate Agent — for a Flat,
          <span> Honest 3% Commission.</span>
        </h1>

        <p className="sub-text">
          Why pay the outdated 5% industry standard when a top-performing local
          real estate agent will provide the exact same full-service
          experience for only 3%? No hidden fees. No surprises. No games.
        </p>

        <div className="tags">
          <span>No hidden fees</span>
          <span>No surprises</span>
          <span>No games</span>
          <span>Full-service real estate</span>
          <span>Only verified local agents</span>
          <span>Save thousands in commission</span>
        </div>

        <button className="banner-btn" onClick={scrollToForm}>Get My 3% Agent Match →</button>
      </div>

    </section>
  );
}

export default Banner;
