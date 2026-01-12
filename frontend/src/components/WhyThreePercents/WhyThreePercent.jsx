import banner from "../../assets/banner.jpg";
import media from "../../assets/media.png";
import imagetext from "../../assets/imagetext.png";
import people from "../../assets/people.png";

const WhyThreePercent = () => {
  return (
    <div className="custom-why-three-percent-main">
      {/* HERO */}
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

      <div className="custom-why-three-percent-inner">

        {/* Sections */}
        <Section
          number="1"
          title="The Real Problem Isn’t Commission — It’s How You Get the Listing"
          image={media}
          bullets={[
            "Cold calls",
            "Door knocking",
            "Chasing referrals",
            "Expensive ads",
            "Constant rejection",
            "Constant uncertainty",
          ]}
          text="Most Alberta agents don’t struggle because they’re bad at real estate. They struggle because getting the listing consumes their life. This grind isn’t a badge of honour. It’s the result of an outdated system. 3 Percent Agents exists to remove that part of your business."
        />

        <Section
          number="2"
          title="You’re Already Paying for Listings — Just Not All at Once"
          reverse
          image={imagetext}
          bullets={[
            "Advertising spend",
            "Fuel, materials, networking events",
            "Unpaid prospecting hours",
            "Missed evenings and weekends",
            "$2,000–$10,000+ per listing",
            "40–100+ hours of effort",
            "Countless rejections",
          ]}
          text="3 Percent Agents replaces all of that with one simple, predictable cost — paid only when a deal closes."
        />

        <Section
          number="3"
          title="Earn Less Stress — Not Less Professionalism"
          image={people}
          bullets={[
            "Spend less time securing opportunities",
            "Reduce effort per transaction",
            "Increase income per hour worked",
          ]}
          text="You earn 2% per sale, without months of chasing. Many agents quickly realize that consistent 2% deals with far less effort outperform higher commissions that require endless prospecting."
        />

        <Section
          number="4"
          title="The Sellers You Meet Are Already Ready"
          reverse
          image={media}
          bullets={[
            "Actively planning to sell",
            "Fully aware of the 3% commission",
            "Looking for professional representation",
          ]}
          text="You’re no longer convincing strangers to talk to you. You’re responding to homeowners who want the conversation. That shift alone changes everything."
        />

        <Section
          number="5"
          title="You Only Pay When You Get Paid"
          image={imagetext}
          bullets={[
            "No upfront fees",
            "No subscriptions",
            "No monthly commitments",
            "Pay 1% of the sale price only at closing",
          ]}
          text="If the home doesn’t sell, you owe nothing. That’s real risk reversal."
        />

        <Section
          number="6"
          title="Built for Alberta — Results-Based and Compliant"
          reverse
          image={people}
          bullets={[
            "Referral-based",
            "Paid at closing",
            "Fully disclosed",
            "Processed through the brokerage",
          ]}
          text="We are not a brokerage and do not interfere with your professional autonomy. Your license, brokerage relationship, and compliance remain fully protected."
        />

        <Section
          number="7"
          title="This Doesn’t Replace Your Business — It Fixes the Worst Part"
          image={media}
          bullets={[
            "Working referrals",
            "Serving repeat clients",
            "Building your personal brand",
          ]}
          text="You simply stop doing the parts that drain your energy, consume your evenings, and create anxiety about your pipeline. Most agents use 3 Percent Agents to reduce prospecting, not increase workload."
        />

        <Section
          number="8"
          title="Predictability Is the Real Luxury"
          reverse
          image={imagetext}
          bullets={[
            "Reduce stress",
            "Boost confidence",
            "Make better decisions",
            "Improve quality of life",
          ]}
          text="Knowing that listing opportunities are coming in and you’re not starting from zero every month changes everything."
        />

        <Section
          number="9"
          title="The Best Agents Value Time More Than Ego"
          image={people}
          text="Some agents resist lower-commission models out of pride. The best agents ask a better question: “How much is my time worth?” If this platform saves you 50+ hours per listing, the math becomes obvious very quickly."
        />

        <Section
          number="10"
          title="The Real Risk Is Staying Where You Are"
          reverse
          image={media}
          text="There’s very little risk in testing a platform that has no upfront cost, only gets paid when you get paid, doesn’t lock you in, and replaces the hardest part of your job. The bigger risk is continuing to burn time, money, and energy on a system you already know is exhausting."
        />

        {/* CTA */}
        <section className="custom-why-three-percent-cta">
          <h2>The Bottom Line</h2>
          <p>3 Percent Agents doesn’t ask you to work harder. It asks you to work smarter. If you’re a professional Alberta agent who values efficiency, predictability, peace of mind, and work-life balance, this platform was built for you.</p>
          <button>Explore Your Options</button>
          
        </section>

      </div>
    </div>
  );
};

// --- Section Component for Reusability ---
const Section = ({ number, title, text, bullets = [], image, reverse = false }) => (
  <section className={`custom-why-three-percent-section split ${reverse ? "reverse" : ""}`}>
    <div className="image">
      <img src={image} alt={title} />
    </div>
    <div className="text">
      <h2>{title}</h2>
      {bullets.length > 0 && (
        <ul className="highlight-list">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      <p>{text}</p>
    </div>
  </section>
);

export default WhyThreePercent;
