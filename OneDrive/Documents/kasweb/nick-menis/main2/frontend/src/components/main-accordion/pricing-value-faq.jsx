import React, { useState } from "react";
import down from "../../assets/down.png";

const PricingValueFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
      {
    q: "Will the agent help me determine my home value?",
    a: "Yes — a professional home valuation is included."
  },
  {
    q: "Do your agents help with staging?",
    a: "Yes, staging advice is included at no extra cost."
  },
  {
    q: "Can I use my own photos or do they take professional ones?",
    a: "They will provide professional photography for free."
  },
  {
    q: "Will my home be on Realtor.ca?",
    a: "Yes — full MLS exposure is included."
  },
  {
    q: "What if my home doesn’t sell?",
    a: "You are never tied to an agent. You can switch or cancel anytime."
  },
  {
    q: "Do your agents negotiate aggressively?",
    a: "Yes — negotiation is a key part of their service."
  },
  {
    q: "Is 3% enough for a good agent?",
    a: "Absolutely. Great agents value efficiency and high-quality leads, not inflated commissions."
  },
  {
    q: "Will I meet the agent in person?",
    a: "Yes — they will visit your home at your convenience."
  },
  {
    q: "Can I choose the appointment time?",
    a: "Yes — morning, evening, or weekend appointments are available."
  },
  {
    q: "Will my information be kept private?",
    a: "Yes — we will never share your info with multiple agents or spam lists."
  }
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="custom-faqs-main">
      <div className="custom-faqs-inner">
        <div className="custom-faqs-accordion-flex">
          
          <h2 className="faq-heading"> HOME SELLING, PRICING & VALUE QUESTIONS</h2>
          {/* <p className="faq-subtitle">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p> */}

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div key={index} className="faq-item">

                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span className="faq-number">{index + 1}. </span>
                  <span className="faq-text">{item.q}</span>

                  <span
                    className={
                      openIndex === index
                        ? "faq-icon rotate"
                        : "faq-icon"
                    }
                  >
                   <img src={down}alt="House"/>
                  </span>
                </button>

                {openIndex === index && (
                  <div className="faq-answer">{item.a}</div>
                )}

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PricingValueFaq;