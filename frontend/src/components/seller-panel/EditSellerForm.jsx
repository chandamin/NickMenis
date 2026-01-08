import React, { useState, useEffect, forwardRef } from "react";
import axios from "axios";

const EditSellerForm = forwardRef(
  ({ seller, onCancel, onSaved }, ref) => {

    const totalSteps = 2;
    const [step, setStep] = useState(1);

    const hassellerLeads = !!seller?.propertyType;
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    /* -------------------------------
       FORM STATE (MATCHES NEW TABLE)
    -------------------------------- */
    const [formData, setFormData] = useState({
      propertyType: "",
      price: "",
      area: "",
      timeline: "",
      tier: "Silver",
      summary: ""
    });

    /* -------------------------------
       Populate form when editing
    -------------------------------- */
    useEffect(() => {
      if (!seller) return;

      setFormData({
        propertyType: seller.propertyType ?? "",
        price: seller.price ?? "",
        area: seller.area ?? "",
        timeline: seller.timeline ?? "",
        tier: seller.tier ?? "Silver",
        summary: seller.summary ?? ""
      });
    }, [seller]);

    /* -------------------------------
       Handle input change
    -------------------------------- */
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    /* -------------------------------
       Step validation
    -------------------------------- */
    const validateStep = () => {
      if (step === 1) {
        return formData.propertyType && formData.price;
      }

      if (step === 2) {
        return formData.area && formData.timeline && formData.tier;
      }

      return true;
    };

    /* -------------------------------
       Navigation
    -------------------------------- */
    const nextStep = async () => {
      if (!validateStep()) {
        alert("Please fill out all required fields");
        return;
      }

      if (step < totalSteps) {
        setStep((s) => s + 1);
      } else {
        await handleSubmit();
      }
    };

    const prevStep = () => {
      if (step > 1) setStep((s) => s - 1);
    };

    /* -------------------------------
       Submit (ADD / UPDATE)
    -------------------------------- */
    const handleSubmit = async () => {
      try {
        await axios.put(
          `${backendUrl}/api/seller/details`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        onSaved?.();
        onCancel?.();

      } catch (err) {
        console.error("Update failed:", err);
        alert("Failed to save seller details");
      }
    };

    return (
      <div className="custom-form-sale-main" ref={ref}>
        <div className="form-main-wrapper">
          <aside className="form-panel">

            {/* ---------------- HEADER ---------------- */}
            <div className="form-header">
              <div>
                <div className="form-kicker">
                  {hassellerLeads ? "Edit" : "Add"} Property Details
                </div>
                <div className="form-title">
                  {hassellerLeads ? "Edit" : "Add"} your property information
                </div>
              </div>
              <div className="form-step-count">
                Step {step}/{totalSteps}
              </div>
            </div>

            {/* ---------------- STEP DOTS ---------------- */}
            <div className="step-progress">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className={`step-dot ${n <= step ? "active" : ""}`}
                />
              ))}
            </div>

            <form className="lead-form" autoComplete="off">

              {/* ---------------- STEP 1 ---------------- */}
              {step === 1 && (
                <>
                  <label>Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option>House</option>
                    <option>Condo</option>
                    <option>Townhouse</option>
                  </select>

                  <label>Expected Price ($)</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="e.g. 500000"
                    required
                  />
                </>
              )}

              {/* ---------------- STEP 2 ---------------- */}
              {step === 2 && (
                <>
                  <label>Area</label>
                  <input
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="e.g. Kensington"
                    required
                  />

                  <label>Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option>Immediately</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                  </select>

                  <label>Lead Tier</label>
                  <select
                    name="tier"
                    value={formData.tier}
                    onChange={handleChange}
                    required
                  >
                    <option>Diamond</option>
                    <option>Gold</option>
                    <option>Silver</option>
                    <option>Bronze</option>
                  </select>

                  <label>Summary (optional)</label>
                  <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    placeholder="Any additional details..."
                  />
                </>
              )}

              {/* ---------------- CONTROLS ---------------- */}
              <div className="form-controls">
                {step > 1 && (
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                )}

                <button
                  type="button"
                  className="btn-primary"
                  onClick={nextStep}
                >
                  {step === totalSteps ? "Save Changes" : "Next"}
                </button>

                <button
                  type="button"
                  className="btn-link"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </div>

            </form>
          </aside>
        </div>
      </div>
    );
  }
);

export default EditSellerForm;
