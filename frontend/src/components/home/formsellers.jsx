import React, { useState, forwardRef } from "react";
import media from "../../assets/media.png";

const MultiStepForm = forwardRef((props, ref) => {
  const [step, setStep] = useState(1);

  const totalSteps = 5;

     
  const [formData, setFormData] = useState({
    propertyType: "",
    propertyValue: "",
    condition: "",
    city: "",
    neighbourhood: "",
    timeline: "",
    sellingReason: "",
    firstName: "",
    email: "",
    phone: "",
    homeOccupied: "",
  });

  // Update input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData, "formData");
  };

  // Go to next step
  const nextStep = () => {
    // Validate required fields for the current step
    const stepFields = getStepFields(step);
    for (let field of stepFields) {
      if (!formData[field]?.trim()) {
        alert("Please fill out required fields");
        return;
      }
    }

    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      submitForm();
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

    const getStepFields = (currentStep) => {
    switch (currentStep) {
      case 1:
        return ["propertyType", "propertyValue", "condition"];
      case 2:
        return ["city", "neighbourhood", "timeline"];
      case 3:
        return ["sellingReason"];
      case 4:
        return ["firstName", "email"];
      case 5:
        return []; // optional fields
      default:
        return [];
    }
  };

  const submitForm = async () => {
    try {
       localStorage.setItem("leadFormData", JSON.stringify(formData));
       console.log("leadformData", formData);
       alert("Form stored locally!");
      const response = await fetch(`${process.env.REACT_APP_BACKEND_UR}/api/sellers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // if (!response.ok) throw new Error("Submission failed");

      if (data.success) {
        alert("Your details have been submitted!");
        console.log("Saved:", data.seller);

        // Optional: Clear form or redirect
      } else {
        alert("Failed to submit form");
      }

      // alert("Form submitted successfully!");
        const savedData = JSON.parse(localStorage.getItem("leadFormData"));
  console.log(savedData,"LocalStorage");
    } catch (err) {
      console.error(err);
      alert("Error submitting form. Please try again.");
    }
  };

  return (

     <div className="custom-form-sale-main" ref={ref}>
      
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
            <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
              <option value="">Select property type</option>
              <option>House</option>
              <option>Condo</option>
              <option>Townhouse</option>
            </select>

            <label>What is the approximate value?</label>
            <select name="propertyValue" value= {formData.propertyValue} onChange={handleChange} required>
              <option value="">Select</option>
              <option>Under $400,000</option>
              <option>$400,000–$600,000</option>
            </select>

            <label>What is the condition?</label>
            <select name="condition" value={formData.condition} onChange={handleChange} required>
              <option value="">Select</option>
              <option>Move-in ready</option>
              <option>Needs renovation</option>
            </select>
          </div>

          {/* STEP 2 */}
          <div className="step" data-step="2" style={{ display: step === 2 ? "block" : "none" }}>
            <label>City</label>
            <input type="text" name="city" value={formData.city} placeholder="City (no street address)" onChange={handleChange} required />

            <label>Neighbourhood</label>
            <input type="text" name="neighbourhood" value={formData.neighbourhood} placeholder="e.g., Downtown" onChange={handleChange} required />

            <label>Timeline</label>
            <select name="timeline" value={formData.timeline} onChange={handleChange} required>
              <option value="">Select timeframe</option>
              <option>Immediately</option>
            </select>
          </div>

          {/* STEP 3 */}
          <div className="step" data-step="3" style={{ display: step === 3 ? "block" : "none" }}>
            <label>Main reason for selling</label>
            <select name="sellingReason" value={formData.sellingReason} onChange={handleChange} required>
              <option value="">Select</option>
              <option>Upsizing</option>
              <option>Moving</option>
            </select>
          </div>

          {/* STEP 4 */}
          <div className="step" data-step="4" style={{ display: step === 4 ? "block" : "none" }}>
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Phone (optional)</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Optional" />
          </div>

          {/* STEP 5 */}
          <div className="step" data-step="5" style={{ display: step === 5 ? "block" : "none" }}>
            <label>Is the home occupied?</label>
            <select name="homeOccupied" value={formData.homeOccupied} onChange={handleChange}>
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
});

export default MultiStepForm;