import React, { useState } from "react";
import down from "../../assets/down.png";

const SallersFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is 3 Percent Agents?",
      a: (
        <div className="faq-answer-structured">
          <p>
            3 Percent Agents connects Alberta homeowners with licensed real estate
            agents who sell homes for a total commission of <strong>exactly 3%</strong>.
          </p>
          <p>Not 5%.</p>
          <p>Not “up to.”</p>
          <p><strong>It is 3%.</strong></p>
        </div>
      )
    },
    {
      q: "Is the commission really only 3%?",
      a: (
        <div className="faq-answer-structured">
          <p>
            Yes. When you work with a 3 Percent Agent, the total commission is
            <strong> 3% of the final sale price</strong>.
          </p>
          <ul>
            <li>No hidden fees</li>
            <li>No added costs</li>
            <li>No surprises</li>
          </ul>
        </div>
      )
    },
    {
      q: "How much money will I save?",
      a: (
        <div className="faq-answer-structured">
          <p>Most homeowners save thousands — often tens of thousands — of dollars.</p>
          <p><strong>Example:</strong></p>
          <ul>
            <li>$700,000 home</li>
            <li>Traditional 5% = $35,000</li>
            <li>3% = $21,000</li>
          </ul>
          <p><strong>You save $14,000.</strong></p>
          <p>That savings stays with you.</p>
        </div>
      )
    },
    {
      q: "Is this legal in Alberta?",
      a: (
        <div className="faq-answer-structured">
          <p>Yes. Discount commission models are fully legal in Alberta.</p>
          <p>All agents on our platform are:</p>
          <ul>
            <li>Licensed in Alberta</li>
            <li>Active professionals</li>
            <li>Working through approved brokerages</li>
          </ul>
        </div>
      )
    },
    {
      q: "Will my home be listed on MLS®?",
      a: (
        <div className="faq-answer-structured">
          <p>
            Yes. Your home will be listed on MLS®, giving it full exposure to
            buyers and buyer agents across Alberta.
          </p>
          <p><strong>There is no reduced visibility.</strong></p>
        </div>
      )
    },
    {
      q: "Does using 3 Percent Agents cost me anything?",
      a: (
        <div className="faq-answer-structured">
          <p><strong>No.</strong> Homeowners never pay us anything.</p>
          <p>There are:</p>
          <ul>
            <li>No signup fees</li>
            <li>No service fees</li>
            <li>No upfront costs</li>
          </ul>
          <p>You only pay the 3% commission if your home sells.</p>
        </div>
      )
    },
    {
      q: "Are these real, professional agents?",
      a: (
        <div className="faq-answer-structured">
          <p>Yes. Every agent on our platform:</p>
          <ul>
            <li>Is fully licensed</li>
            <li>Is experienced in their local market</li>
            <li>Has agreed to the 3% model</li>
          </ul>
          <p><strong>Lower commission does not mean lower quality.</strong></p>
        </div>
      )
    },
    {
      q: "Will selling for 3% reduce my sale price?",
      a: (
        <div className="faq-answer-structured">
          <p>No.</p>
          <p>Your sale price is driven by:</p>
          <ul>
            <li>Market demand</li>
            <li>Proper pricing</li>
            <li>Exposure</li>
            <li>Negotiation</li>
          </ul>
          <p>Paying more commission does not guarantee a higher price.</p>
        </div>
      )
    },
    {
      q: "Do buyers still work with my listing?",
      a: (
        <div className="faq-answer-structured">
          <p>
            Yes. Your listing remains fully competitive and visible to buyers
            and buyer agents.
          </p>
          <p>Nothing about the 3% model limits interest in your property.</p>
        </div>
      )
    },
    {
      q: "Am I locked into anything?",
      a: (
        <div className="faq-answer-structured">
          <p>No. You are always in control:</p>
          <ul>
            <li>You speak with the agent</li>
            <li>You review the listing agreement</li>
            <li>You decide whether to proceed</li>
          </ul>
          <p>There is no obligation to move forward.</p>
        </div>
      )
    },
    {
      q: "What happens if my home doesn’t sell?",
      a: (
        <div className="faq-answer-structured">
          <p>If your home does not sell:</p>
          <ul>
            <li>You do not owe us anything</li>
            <li>There are no penalties</li>
            <li>There are no fees</li>
          </ul>
          <p><strong>We only succeed when you do.</strong></p>
        </div>
      )
    },
    {
      q: "Is this different from for sale by owner?",
      a: (
        <div className="faq-answer-structured">
          <p>Yes — completely different.</p>
          <ul>
            <li>You still have a licensed professional</li>
            <li>Your home is on MLS®</li>
            <li>You receive full guidance and representation</li>
          </ul>
          <p>You save money without selling on your own.</p>
        </div>
      )
    },
    {
      q: "Why would an agent agree to 3%?",
      a: (
        <div className="faq-answer-structured">
          <p>Agents on our platform focus on:</p>
          <ul>
            <li>Efficiency</li>
            <li>Volume</li>
            <li>Modern marketing</li>
            <li>Streamlined processes</li>
          </ul>
          <p>This allows professional service at a lower commission.</p>
        </div>
      )
    },
    {
      q: "Will I receive the same level of service?",
      a: (
        <div className="faq-answer-structured">
          <p>Yes. You receive:</p>
          <ul>
            <li>Professional representation</li>
            <li>Market expertise</li>
            <li>Negotiation support</li>
            <li>Transaction guidance</li>
          </ul>
          <p><strong>The only difference is you pay less.</strong></p>
        </div>
      )
    },
    {
      q: "How do I get started?",
      a: (
        <div className="faq-answer-structured">
          <ul>
            <li>Submit your property details</li>
            <li>Speak with a 3% agent</li>
            <li>Decide if it’s right for you</li>
          </ul>
          <p>No pressure. No obligation. No risk.</p>
        </div>
      )
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="custom-faqs-main">
      <div className="custom-faqs-inner">
        <div className="custom-faqs-flex">

          <h2 className="faq-heading">Homeowner FAQ – Alberta</h2>
          <p className="faq-subtitle">3 Percent Agents Alberta</p>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span className="faq-number">{index + 1}. </span>
                  <span className="faq-text">{item.q}</span>
                  <span className={openIndex === index ? "faq-icon rotate" : "faq-icon"}>
                    <img src={down} alt="Arrow" />
                  </span>
                </button>

                {openIndex === index && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>

          <a id="faq-main-button" href="/accordion">Read More</a>

        </div>
      </div>
    </div>
  );
};

export default SallersFaq;
