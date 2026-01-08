import React from "react";

const methods = [
  {
    title: "Cold Calling",
    items: ["500–1,000+ calls", "25–50 hours", "High mental cost"],
  },
  {
    title: "Door Knocking",
    items: ["300–600 doors", "Evenings & weekends", "Low certainty"],
  },
  {
    title: "Online Advertising",
    items: ["$75–$250 per lead", "Low-quality leads"],
  },
  {
    title: "Open Houses",
    items: ["30–100 hours", "Inconsistent results"],
  },
];

const AlbertaMethods = () => {
  return (
    <section className="alberta-methods-modern">
      <div className="alberta-methods-inner">
        <span className="methods-badge">COMMON METHODS</span>

        <h2>How Alberta Agents Typically Get Listings</h2>

        <div className="methods-grid">
          {methods.map((m, i) => (
            <div className="method-card" key={i}>
              <h3>{m.title}</h3>
              <ul>
                {m.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbertaMethods;
