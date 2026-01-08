import React, { useState } from "react";
import media from "../../assets/media.png";

const SellerStepForm = () => {
  const [step, setStep] = useState(1);

  const totalSteps = 5;

  const nextStep = () => {
    const inputs = document.querySelectorAll(`[data-step="${step}"] [required]`);
    for (let i of inputs) {
      if (!i.value.trim()) {
        alert("Please fill out required fields");
        i.focus();
        return;
      }
    }
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (

     <div className="custom-form-sale-main">
      
    <div className="form-main-wrapper">
      {/* LEFT FORM */}
      <aside className="form-panel">
        <div className="form-header">
          <div>
            <div className="form-kicker">Simple, 3-Minute Form</div>
            <div className="form-title">Tell us about your property — no street address required</div>
          </div>
          <div className="form-step-count">
            Step {step}/{totalSteps}
          </div>
        </div>

        {/* PROGRESS DOTS */}
        <div className="step-progress">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className={`step-dot ${n <= step ? "active" : ""}`}></div>
          ))}
        </div>

        <form className="lead-form" autoComplete="off">
          {/* STEP 1 */}
          <div className="step" data-step="1" style={{ display: step === 1 ? "block" : "none" }}>
            <label>What type of property are you selling?</label>
            <select required>
              <option value="">Select property type</option>
              <option>House</option>
              <option>Condo</option>
              <option>Townhouse</option>
            </select>

            <label>What is the approximate value?</label>
            <select required>
              <option value="">Select</option>
              <option>Under $400,000</option>
              <option>$400,000–$600,000</option>
            </select>

            <label>What is the condition?</label>
            <select required>
              <option value="">Select</option>
              <option>Move-in ready</option>
              <option>Needs renovation</option>
            </select>
          </div>

          {/* STEP 2 */}
          <div className="step" data-step="2" style={{ display: step === 2 ? "block" : "none" }}>
            <label>City</label>
            <input type="text" placeholder="City (no street address)" required />

            <label>Neighbourhood</label>
            <input type="text" placeholder="e.g., Downtown" required />

            <label>Timeline</label>
            <select required>
              <option value="">Select timeframe</option>
              <option>Immediately</option>
            </select>
          </div>

          {/* STEP 3 */}
          <div className="step" data-step="3" style={{ display: step === 3 ? "block" : "none" }}>
            <label>Main reason for selling</label>
            <select required>
              <option value="">Select</option>
              <option>Upsizing</option>
              <option>Moving</option>
            </select>
          </div>

          {/* STEP 4 */}
          <div className="step" data-step="4" style={{ display: step === 4 ? "block" : "none" }}>
            <label>First Name</label>
            <input type="text" required />

            <label>Email</label>
            <input type="email" required />

            <label>Phone (optional)</label>
            <input type="tel" placeholder="Optional" />
          </div>

          {/* STEP 5 */}
          <div className="step" data-step="5" style={{ display: step === 5 ? "block" : "none" }}>
            <label>Is the home occupied?</label>
            <select>
              <option>Select</option>
              <option>Owner occupied</option>
              <option>Vacant</option>
            </select>
          </div>

          <div className="form-controls">
            {step > 1 && (
              <button type="button" className="btn-ghost" onClick={prevStep}>
                Back
              </button>
            )}

            <button type="button" className="btn-primary" onClick={nextStep}>
              {step === totalSteps ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </aside>

      {/* RIGHT SIDE IMAGE CARD */}
      <aside className="right-panel">
        <img src={media} alt="home" />
        <div className="right-content">
          <h3>Fast. Transparent. Local.</h3>
          <p>Get matched with verified local 5-star agents who provide full service for 3%.</p>

          <div className="right-buttons">
            <button className="tag-btn">No hidden fees</button>
            <button className="tag-btn red">Save thousands</button>
          </div>
        </div>
      </aside>
      </div>
      </div>
  );
};

export default SellerStepForm;