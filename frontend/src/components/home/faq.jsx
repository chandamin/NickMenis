import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is it really just a flat 3% commission?",
      a: "No hidden fees. No surprises. No games."
    },
    {
      q: "Who will I be matched with?",
      a: "You will be matched with top-rated, verified agents in your area."
    },
    {
      q: "Why do these agents charge only 3%?",
      a: "Because our program connects motivated sellers directly to efficient agents."
    },
    {
      q: "Do I have to hire the matched agent?",
      a: "No. There is no obligation to hire any of the matched agents."
    },
    {
      q: "Will multiple agents call me?",
      a: "No. Only matched agents based on your preference will contact you."
    },
    {
      q: "Is my information secure?",
      a: "Yes, we use encrypted connections and do not share your information."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="custom-faqs-main">
      <div className="custom-faqs-inner">
        <div className="custom-faqs-flex">
          
          <h2 className="faq-heading">Frequently asked questions</h2>
          <p className="faq-subtitle">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>

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
                    ⌄
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

export default Faq;
