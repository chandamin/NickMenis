import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import EditSellerForm from "./EditSellerForm";

const SellersPannel = () => {

  const [sellerDetails, setSellerDetails] = useState(null);
  const [sellerProfile, setSellerProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [menu, setMenu] = useState("dashboard");
  const [step, setStep] = useState(2);
  const [notify, setNotify] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem("token");

  const fetchSellerProfile = async () => {
    try {
      const res = await axios.get(
        `${backendUrl}/api/seller/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSellerProfile(res.data);
    } catch (err) {
      console.error("Failed to fetch seller profile", err);
    }
  };

  const fetchSellerDetails = useCallback(async () => {
    try {
      const res = await axios.get(
        `${backendUrl}/api/seller/details`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSellerDetails(res.data);
    } catch (err) {
      console.error("Failed to fetch seller details", err);
    }
  }, [backendUrl, token]);

  useEffect(() => {
    fetchSellerProfile();
    fetchSellerDetails();
  }, [fetchSellerDetails]);


  return (
    <div className="custom-sallers-pannel-main">
      <div className="custom-sallers-pannel-inner">
        <div className="custom-sallers-pannel-inner-flex app">

          <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <div className="profile">
              <div className="avatar">s</div>
              <div>
                <h4>{sellerProfile?.firstName || sellerProfile?.name || ""}</h4>
                <span>Seller</span>
              </div>
            </div>

            <nav>
              {["dashboard", "activity", "property", "support"].map((item) => (
                <button
                  key={item}
                  className={menu === item ? "active" : ""}
                  onClick={() => {
                    setMenu(item);
                    setSidebarOpen(false);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
          </aside>

          <main className="main">
            <header className="header">
              <div className="header-left">
                <button
                  className="hamburger"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  ☰
                </button>
              </div>
            </header>

            <div className="steps">
              <div className="customstep-left">
              {[
                "Lead Submitted",
                "Matching Agents",
                "Agents Notified",
              ].map((label, i) => (
                <span
                  key={i}
                  className={step >= i + 1 ? "done" : ""}
                  onClick={() => setStep(i + 1)}
                >
                  {label}
                </span>
              ))}
              </div>


              <header className="header">
              <div className="header-left">
              </div>

              <div className="actions">
                <button>Download</button>
                <button>Message</button>
                <button>Notification</button>
              </div>
            </header>

            </div>

            <div className="grid">
              <section className="card large">
                {menu === "dashboard" ? (
                  <>
                  <div className="custom-welcoms">
                    <h3>Welcome, {sellerProfile?.firstName || sellerProfile?.name || ""}</h3>
                    <p className="muted">
                      Your selling request is currently in progress.
                    </p>
                    </div>
 {!editMode ? (
          <>
                    <div className="info">
                      <div><b>Property Type</b><span>{sellerDetails?.propertyType ?? null}</span></div>
                      <div><b>Price Range</b><span>${sellerDetails?.price ? `${sellerDetails.price}`: null}</span></div>
                      <div><b>City</b><span>{sellerDetails?.city ?? null}</span></div>
                      <div><b>Timeline</b><span>{sellerDetails?.timeline ?? null}</span></div>
                    </div>
                      <button
              className="btn-light"
              onClick={() => setEditMode(true)}
            >
              Edit My Details
            </button>
          </>
        ) : (
          <EditSellerForm
            seller={sellerDetails}
            backendUrl={backendUrl}
            onCancel={() => setEditMode(false)}
            onSaved={fetchSellerDetails}
          />
        )}
                  </>
                ) : (
                  <>
                    <h3>{menu.toUpperCase()}</h3>
                    <p className="muted">This section will be managed from backend.</p>
                  </>
                )}
              </section>

              <aside className="right">
                <div className="card highlight">
                  <h4>Your Privacy Matters</h4>
                  <p>No spam. No pressure. No contracts.</p>
                </div>

                <div className="card">
                  <div className="toggle">
                    <span>SMS Notifications</span>
                    <input
                      type="checkbox"
                      checked={notify}
                      onChange={() => setNotify(!notify)}
                    />
                  </div>
                </div>
               
                <div className="card agent-queue">
                  <h4>Agent Match Queue</h4>

                  <div className="agent">
                    <span className="rating">4.8</span>
                    <div>
                      <b>Top Rated Agent</b>
                      <p>Ready to connect</p>
                    </div>
                  </div>

                  <div className="agent pending">
                    <span className="rating">4.6</span>
                    <div>
                      <b>Verified Agent</b>
                      <p>Reviewing your details</p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default SellersPannel;
