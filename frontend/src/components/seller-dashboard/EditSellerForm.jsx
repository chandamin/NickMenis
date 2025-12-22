import React, {
  useState,
  useEffect,
  forwardRef
} from "react";
import axios from "axios";

const EditSellerForm = forwardRef(
  ({ seller, backendUrl, onCancel, onSaved }, ref) => {

    const totalSteps = 2;
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
      propertyType: "",
      price: "",
      city: "",
      timeline: ""
    });

    /* -------------------------------
       Populate form when seller loads
    -------------------------------- */
    useEffect(() => {
      if (!seller) return;

      setFormData({
        propertyType: seller.propertyType ?? "",
        price: seller.price ?? "",
        city: seller.city ?? "",
        timeline: seller.timeline ?? ""
      });
    }, [seller]);

    /* -------------------------------
       Handle input change
    -------------------------------- */
    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    };

    /* -------------------------------
       Step validation
    -------------------------------- */
    const validateStep = () => {
      if (step === 1) {
        return formData.propertyType && formData.price;
      }

      if (step === 2) {
        return formData.city && formData.timeline;
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
      if (step > 1) {
        setStep((s) => s - 1);
      }
    };

    /* -------------------------------
       Submit
    -------------------------------- */
    const handleSubmit = async () => {
      try {
        await axios.put(
          `${backendUrl}/api/seller/details`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );

        onSaved?.();
        onCancel?.();

      } catch (err) {
        console.error("Update failed:", err);
        alert("Failed to update seller details");
      }
    };

    return (
      <div className="custom-form-sale-main" ref={ref}>
        <div className="form-main-wrapper">

          <aside className="form-panel">
            <div className="form-header">
              <div>
                <div className="form-kicker">
                  Edit Property Details
                </div>
                <div className="form-title">
                  Update your property information
                </div>
              </div>
              <div className="form-step-count">
                Step {step}/{totalSteps}
              </div>
            </div>

            {/* STEP DOTS */}
            <div className="step-progress">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className={`step-dot ${n <= step ? "active" : ""}`}
                />
              ))}
            </div>

            <form className="lead-form" autoComplete="off">

              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <label>Property type</label>
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

                  <label>Approximate price ($)</label>
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

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <label>City</label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
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
                </>
              )}

              {/* CONTROLS */}
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
                  {step === totalSteps
                    ? "Save Changes"
                    : "Next"}
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
