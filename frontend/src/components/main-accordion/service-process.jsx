import React, { useState } from "react";
import down from "../../assets/down.png";

const ServiceProcess = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
    q: "How fast will I be matched with an agent?",
    a: "Usually within minutes, but never longer than 24 hours."
  },
  {
    q: "Do you match me with agents who know my neighbourhood?",
    a: "Yes — local expertise is mandatory for all agents we approve."
  },
  {
    q: "Do your agents handle luxury properties?",
    a: "Yes. We have certified agents for every property type, including luxury, condo, and multi-unit."
  },
  {
    q: "What if I don’t like the agent you matched me with?",
    a: "We can match you with another local 5-star agent immediately."
  },
  {
    q: "Are there any hidden fees?",
    a: "No. 3% commission total, nothing more."
  },
  {
    q: "What if I’m just curious and not ready to sell yet?",
    a: "That’s fine — many home owners are just exploring their options."
  },
  {
    q: "Do you work with agents from all brokerages?",
    a: "We partner only with top-rated, licensed agents regardless of brokerage."
  },
  {
    q: "How do agents get selected for your platform?",
    a: (
      <ul className="faq-points">
        <p>They must meet strict criteria, including:</p>
        <li>5-star performance</li>
        <li>Proven results</li>
        <li>Professional ethics</li>
        <li>Excellent communication</li>
      </ul>
    )
  },
  {
    q: "How much experience do agents need?",
    a: "Our minimum requirement is 3 years, but most have 10+ years."
  },
  {
    q: "What happens after I submit my info?",
    a: "We review your details, confirm your neighbourhood, and match you with the best qualified 3% agent."
  }

];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="custom-faqs-main">
      <div className="custom-faqs-inner">
        <div className="custom-faqs-accordion-flex">
          
          <h2 className="faq-heading">SERVICE, PROCESS & MATCHING QUESTIONS</h2>
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

export default ServiceProcess;