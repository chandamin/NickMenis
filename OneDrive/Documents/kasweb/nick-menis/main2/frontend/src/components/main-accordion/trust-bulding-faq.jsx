import React, { useState } from "react";
import down from "../../assets/down.png";

const TrustBuldingFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
        {
    q: "How do you guarantee the agent is professional?",
    a: (
      <ul className="faq-points">
        <li>5-star ratings</li>
        <li>Discipline-free records</li>
        <li>Proven results</li>
        <li>Client satisfaction</li>
      </ul>
    )
  },
  {
    q: "What if the agent pressures me?",
    a: "You can report them immediately — we will remove any agent who violates our strict no-pressure policy."
  },
  {
    q: "Do your agents sign long-term exclusive contracts?",
    a: "They must respect transparent, fair contracts — no tricks."
  },
  {
    q: "What are the red flags in choosing an agent?",
    a: "Lack of communication, pressure tactics, vague pricing, and poor reviews — and we filter these out for you."
  },
  {
    q: "How many listings do your agents handle at once?",
    a: "We avoid agents who are overloaded with listings."
  },
  {
    q: "Do agents pay you for leads?",
    a: "Yes, the agents cover the cost — never the seller."
  },
  {
    q: "Why do you limit the agent to one per seller?",
    a: "To respect your privacy and avoid overwhelming you."
  },
  {
    q: "Are your agents trained in marketing?",
    a: "Yes — they provide full marketing campaigns."
  },
  {
    q: "Why should I trust your process?",
    a: "Because our business only works if we match you with excellent agents."
  },
  {
    q: "What happens if the agent doesn’t call me?",
    a: "We will rematch you instantly."
  }



];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="custom-faqs-main">
      <div className="custom-faqs-inner">
        <div className="custom-faqs-accordion-flex">
          
          <h2 className="faq-heading"> AGENT BEHAVIOR, RED FLAGS & TRUST BUILDING</h2>
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

export default TrustBuldingFaq;