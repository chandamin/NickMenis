import bannerImg from "../../assets/banner.jpg";

const AlbertaSolution = () => {
  return (
    <section className="alberta-solution-modern">
      <div className="alberta-solution-inner">

        <div className="solution-text">
          <span className="solution-badge">THE SOLUTION</span>

          <h2>
            How 3 Percent Agents <br />
            Changes the Equation
          </h2>

          <p>
            No cold calling. No chasing. No gambling.
            <br />
            <strong>
              Just motivated Alberta homeowners ready to sell at 3%.
            </strong>
          </p>
        </div>

        <div className="solution-image">
          <img src={bannerImg} alt="Relief & clarity" />
        </div>

      </div>
    </section>
  );
};

export default AlbertaSolution;
