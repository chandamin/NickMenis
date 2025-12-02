import banner from "../../assets/banner.jpg";

function Banner() {
  return (
    <section 
      className="home-banner" 
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="banner-overlay"></div>

      <div className="banner-content">
        
        <p className="badge">Flat, honest 2% commission</p>

        <h1>
          Sell Your Home With a Local 5-Star Real Estate Agent — for a Flat,
          <span> Honest 2% Commission.</span>
        </h1>

        <p className="sub-text">
          Why pay the outdated 5% industry standard when a top-performing local
          5-star real estate agent will provide the exact same full-service
          experience for only 2%? No hidden fees. No surprises. No games.
        </p>

        <div className="tags">
          <span>No hidden fees</span>
          <span>No surprises</span>
          <span>No games</span>
          <span>Full-service real estate</span>
          <span>Only verified local 5-star agents</span>
          <span>Save thousands in commission</span>
        </div>

        <a href="#" className="banner-btn">Get My 2% Agent Match →</a>
      </div>

    </section>
  );
}

export default Banner;
