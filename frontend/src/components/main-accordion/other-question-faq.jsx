import React, { useState } from "react";
import down from "../../assets/down.png";

const OtherQuestionFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    q: "What if I’m selling a rental property?",
    a: "We have agents experienced in investment properties and tenancy laws."
  },
  {
    q: "What if my home needs renovations?",
    a: "Our agents are trained to evaluate condition fairly and price accordingly."
  },
  {
    q: "Can I use this service if I already spoke with another agent?",
    a: "Yes — as long as you have not signed a listing contract."
  },
  {
    q: "What if I’m selling FSBO (for sale by owner)?",
    a: "You can still compare with a 3% full-service agent."
  },
  {
    q: "Do you cover rural properties?",
    a: "Yes — we have agents in urban, suburban, and rural areas."
  },
  {
    q: "Do you cover condos?",
    a: "Absolutely — many of our agents specialize in condos."
  },
  {
    q: "How do agents pay you?",
    a: "They pay a flat fee for the lead — never a share of the sale."
  },
  {
    q: "Can a seller request a different agent?",
    a: "Yes — we can match you again anytime."
  },
  {
    q: "What if I’m not satisfied with the match?",
    a: "We rematch you within minutes."
  },
  {
    q: "Why is this free for Home Owners?",
    a: "Because our partner agents fund the platform in exchange for receiving high-quality seller leads."
  }
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="custom-faqs-main">
      <div className="custom-faqs-inner">
        <div className="custom-faqs-accordion-flex">
          
          <h2 className="faq-heading"> TECHNICAL, EDGE CASES & OTHER QUESTIONS</h2>
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

export default OtherQuestionFaq;