import React, { useState, forwardRef } from "react";

const Calculator = forwardRef((props,ref) => {
  const [price, setPrice] = useState("");
  const [traditional, setTraditional] = useState(0);
  const [agent2, setAgent2] = useState(0);
  const [save, setSave] = useState(0);

  const calculate = () => {
    const homePrice = Number(price.replace(/,/g, ""));
    if (!homePrice) return;

    const t = homePrice * 0.05; 
    const a = homePrice * 0.03; 
    const s = t - a;

    setTraditional(t);
    setAgent2(a);
    setSave(s);
  };

  return (
    <section className="save-sec" ref={ref}>
      <div className="save-card">
        <h2>See How Much You Save With 3%</h2>
        <p>Enter your home price to calculate your estimated savings instantly.</p>

        {/* FORM */}
        <div className="save-form">
          <input
            type="text"
            placeholder="e.g. 750,000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <select>
            <option>USD</option>
            <option>INR</option>
            <option>CAD</option>
            <option>AUD</option>
          </select>
        </div>

        <button onClick={calculate}>Calculate Savings →</button>

        {/* RESULT */}
        <div className="save-result">
          <div>
            <p>Traditional 5% commission</p>
            <h3>${traditional.toLocaleString()}</h3>
          </div>

          <div>
            <p>3% AGENTS commission</p>
            <h3>${agent2.toLocaleString()}</h3>
          </div>

          <div className="highlight">
            <p>You Save</p>
            <h3>💰 ${save.toLocaleString()}</h3>
          </div>
        </div>
      </div>
    </section>
  );
});
export default Calculator;
