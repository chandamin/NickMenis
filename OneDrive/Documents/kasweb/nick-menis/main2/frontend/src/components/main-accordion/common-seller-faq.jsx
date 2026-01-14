import React, { useState } from "react";
import down from "../../assets/down.png";

const CommonSeller = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    q: "What is 3% Agents?",
    a: "3% Agents is a service that connects home owners with a local 5-star real estate agent who agrees to provide full-service real estate for a total commission of just 3% instead of the traditional 5%."
  },
  {
    q: "Is the 3% commission real?",
    a: "Yes. It’s a total commission, fully transparent — no hidden fees, no surprises, no games."
  },
  {
    q: "What’s included in the 3% commission?",
    a: (
      <ul className="faq-points">
        <p>Everything:</p>
        <li>Professional photos</li>
        <li>MLS listing</li>
        <li>Open houses</li>
        <li>Negotiation</li>
        <li>Staging guidance</li>
        <li>Marketing</li>
        <li>Paperwork and closing assistance</li>
      </ul>
    )
  },
  {
    q: "Why would an agent work for 3% instead of 5%?",
    a: "Because they get warm, ready-to-sell leads from us, eliminating their need for cold calling, door knocking, or buying expensive ads."
  },
  {
    q: "How do you choose which agent I get matched with?",
    a: (
      <ul className="faq-points">
       <p>We use a strict screening process based on:</p> 
        <li>Experience</li>
        <li>5-star reviews</li>
        <li>Local market knowledge</li>
        <li>Track record of sales</li>
        <li>Professional integrity</li>
      </ul>
    )
  },
  {
    q: "Do I have to pay you anything?",
    a: "No. Home Owners pay nothing to use the service."
  },
  {
    q: "Are the agents full-service?",
    a: "Yes — every agent we work with provides the same full-service package you would expect from a traditional 5% agent."
  },
  {
    q: "Do I have to hire the agent you match me with?",
    a: "No. There is zero obligation. You decide only if you feel the agent is right for you."
  },
  {
    q: "Will multiple agents call me?",
    a: "No. We protect your privacy. Only one carefully selected agent will contact you."
  },
  {
    q: "Can I meet the agent before deciding?",
    a: "Absolutely. You can have a free consultation before signing anything."
  }
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="custom-faqs-main">
      <div className="custom-faqs-inner">
        <div className="custom-faqs-accordion-flex">
          
          <h2 className="faq-heading">MOST COMMON SELLER QUESTIONS</h2>
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

export default CommonSeller;