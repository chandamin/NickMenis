import banner from "../../assets/banner.jpg";

function SellerBanner() {

  return (

    <section 
      className="home-banner sallers-main-banner" 
      style={{ backgroundImage: `url(${banner})` }}
    >
      
      <div className="banner-overlay"></div>

      <div className="banner-content">
              
        <h1>
          Sell Your Home With a LocalReal Estate Agent — for a Flat,
           Honest 3% Commission.
        </h1>

        <p className="sub-text">
          Why pay the outdated 5% industry standard when a top-performing local
           real estate agent will provide the exact same full-service
          experience for only 3%? No hidden fees. No surprises. No games
        </p>

        <a href="#" className="banner-btn">Get My 3% Agent Match →</a>

      </div>

    </section>

  );
}

export default SellerBanner;
