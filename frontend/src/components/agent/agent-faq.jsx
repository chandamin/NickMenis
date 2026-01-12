import React, { useState } from "react";

const AgentFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How does the commission work for me as an agent?",
      a: (
        <div className="faq-answer-structured">
          <p>When a home sells through 3 Percent Agents:</p>
          <ul>
            <li><strong>Total commission:</strong> 3%</li>
            <li><strong>1%</strong> is paid to 3 Percent Agents</li>
            <li><strong>You keep 2%</strong> of the sale price</li>
          </ul>

          <p><strong>There are:</strong></p>
          <ul>
            <li>No upfront costs</li>
            <li>No monthly fees</li>
            <li>No payment unless the home sells</li>
          </ul>

          <p><strong>Example:</strong></p>
          <ul>
            <li>$700,000 sale</li>
            <li>3% total = $21,000</li>
            <li>Our fee (1%) = $7,000</li>
            <li>Your earnings (2%) = $14,000</li>
          </ul>

          <p><strong>You only pay when you get paid.</strong></p>
        </div>
      )
    },
    {
      q: "Why would I give up 1% of the sale?",
      a: (
        <div className="faq-answer-structured">
          <p>Because in exchange, you remove the most stressful parts of real estate.</p>
          <ul>
            <li>Cold call</li>
            <li>Door knock</li>
            <li>Chase referrals</li>
            <li>Spend money on ads with uncertain results</li>
            <li>Constantly worry about your next listing</li>
          </ul>
          <p>
            Many agents prefer earning <strong>2% consistently</strong> with less stress
            rather than chasing higher commissions.
          </p>
        </div>
      )
    },
    {
      q: "How does this improve my quality of life as an agent?",
      a: (
        <div className="faq-answer-structured">
          <p>This platform is designed to eliminate burnout.</p>
          <p>Instead of:</p>
          <ul>
            <li>Evenings cold calling</li>
            <li>Weekends door knocking</li>
            <li>Constant networking pressure</li>
          </ul>
          <p>You focus on:</p>
          <ul>
            <li>Listings already in hand</li>
            <li>Closing transactions</li>
            <li>Family & personal time</li>
            <li>Predictable income</li>
          </ul>
          <p><strong>We handle seller acquisition. You handle the transaction.</strong></p>
        </div>
      )
    },
    {
      q: "What is 3 Percent Agents?",
      a: (
        <div className="faq-answer-structured">
          <p>
            3 Percent Agents is a referral-based platform connecting Alberta homeowners
            selling at a total commission of <strong>3%</strong> with licensed agents.
          </p>
          <p>We are not a brokerage and do not represent buyers or sellers.</p>
        </div>
      )
    },
    {
      q: "When do I pay 3 Percent Agents?",
      a: (
        <div className="faq-answer-structured">
          <p>You pay <strong>only at closing</strong>.</p>
          <p>If the property does not sell, <strong>you pay nothing</strong>.</p>
        </div>
      )
    },
    {
      q: "Is this legal and compliant in Alberta?",
      a: (
        <div className="faq-answer-structured">
          <ul>
            <li>Referral fees are allowed</li>
            <li>Success-based compensation is permitted</li>
            <li>Commission sharing through brokerages is legal</li>
          </ul>
          <p>All payments are fully disclosed and compliant.</p>
        </div>
      )
    },
    {
      q: "How do you get paid?",
      a: (
        <div className="faq-answer-structured">
          <p>
            We are paid a <strong>1% referral fee</strong>, settled at closing through the
            brokerage.
          </p>
          <p>No hidden fees. No surprises.</p>
        </div>
      )
    },
    {
      q: "Do I still work under my brokerage?",
      a: (
        <div className="faq-answer-structured">
          <ul>
            <li>You remain under your existing brokerage</li>
            <li>You follow all brokerage rules</li>
            <li>You keep full independence</li>
          </ul>
        </div>
      )
    },
    {
      q: "Do I need to discount my service?",
      a: (
        <div className="faq-answer-structured">
          <p>
            No. You provide full professional service. The commission cap simply helps you
            win more listings through volume.
          </p>
        </div>
      )
    },
    {
      q: "Are the leads exclusive?",
      a: (
        <div className="faq-answer-structured">
          <ul>
            <li>Geo-targeted</li>
            <li>Limited in volume</li>
            <li>Not oversold</li>
          </ul>
          <p>Quality over quantity.</p>
        </div>
      )
    },
    {
      q: "What type of sellers use the platform?",
      a: (
        <div className="faq-answer-structured">
          <ul>
            <li>Motivated</li>
            <li>Cost-conscious</li>
            <li>Actively planning to sell</li>
            <li>Looking specifically for a 3% solution</li>
          </ul>
        </div>
      )
    },
    {
      q: "Am I obligated to accept every lead?",
      a: (
        <div className="faq-answer-structured">
          <p>No.</p>
          <p>You review each lead and decide to accept or decline.</p>
        </div>
      )
    },
    {
      q: "What happens if the seller doesn’t sign or the home doesn’t sell?",
      a: (
        <div className="faq-answer-structured">
          <p><strong>If:</strong></p>
          <ul>
            <li>No listing agreement is signed, or</li>
            <li>The property does not sell</li>
          </ul>
          <p className="faq-highlight">➤ You owe us nothing.</p>
        </div>
      )
    },
    {
      q: "Do buyer agents still cooperate?",
      a: (
        <div className="faq-answer-structured">
          <p>
            Yes. Listings remain on MLS®, fully visible, and competitive.
          </p>
        </div>
      )
    },
    {
      q: "Is this a long-term contract?",
      a: (
        <div className="faq-answer-structured">
          <ul>
            <li>No long-term commitments</li>
            <li>No subscriptions</li>
            <li>No exclusivity</li>
          </ul>
        </div>
      )
    },
    {
      q: "How do I join?",
      a: (
        <div className="faq-answer-structured">
          <ul>
            <li>Submit Alberta licensing details</li>
            <li>Sign the referral agreement</li>
            <li>Start receiving seller leads</li>
          </ul>
          <p><strong>You only pay when a deal closes.</strong></p>
        </div>
      )
    }
  ];

  return (
    <div className="custom-faqs-main">
      <div className="custom-faqs-inner">
        <h2 className="faq-heading">Agent FAQ – Alberta</h2>
        <p className="faq-subtitle">
          Everything Alberta real estate agents need to know about working with
          3 Percent Agents.
        </p>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span>{index + 1}. {item.q}</span>
                <span className={openIndex === index ? "rotate" : ""}>⌄</span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentFaq;
