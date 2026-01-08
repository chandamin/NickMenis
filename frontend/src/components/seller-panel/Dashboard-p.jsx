import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import EditSellerForm from "./EditSellerForm";
import AgentMatchQueue from "./AgentMatchQueue";


const Dashboard = ({ user, sellerLeads, backendUrl, fetchSellerLeads }) => {
  const hasSellerLeads = !!sellerLeads;
  const [editMode, setEditMode] = useState(false);
  const [agents, setAgents] = useState([]);
  const token = localStorage.getItem("token");

  const status = sellerLeads?.status || "New";

   const fetchAgentQueue = useCallback(async () => {
    try {
      const res = await axios.get(
        `${backendUrl}/api/seller/agent-queue`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAgents(res.data);
    } catch (err) {
      console.error("Failed to fetch agent queue", err);
    }
  }, [backendUrl, token]);

   const respondToAgent = async (agentId, action) => {
    await axios.put(
      `${backendUrl}/api/seller/agent-response`,
      { agentId, action },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchAgentQueue(); // refresh after response
  };

  // ✅ EFFECT RUNS ONLY WHEN STATUS BECOMES MATCHED
  useEffect(() => {
    if (sellerLeads?.status === "Matched") {
      fetchAgentQueue();
    }
  }, [sellerLeads?.status, fetchAgentQueue]);

  return (
    <div className="custom-pannles-seller-wrapper">
      <div className="seller-panel">

        {/* ================= STATUS BAR ================= */}
        <div className="status-bar">
          <div className={`status-step ${status !== "New" ? "done" : "active"}`}>
            <span>✓</span>
            <p>Lead Submitted</p>
          </div>

          <div className="status-line" />

          <div className={`status-step ${status === "New" ? "active" : "done"}`}>
            <span className={status === "New" ? "spinner" : ""}></span>
            <p>Being Matched</p>
          </div>

          <div className="status-line" />

          <div className={`status-step ${status === "Assigned" ? "done" : ""}`}>
            <span>🔒</span>
            <p>Agents Notified</p>
          </div>
        </div>

        {/* ================= WELCOME ================= */}
        <h2 className="title">
          Welcome, {user?.firstName || user?.name || "Home Owner"}
          <span>
            {!hasSellerLeads
              ? " Please submit your property details to begin."
              : status === "New"
              ? " Your selling request is currently in progress."
              : status === "Matched"
              ? " Agents have been matched to your lead."
              : ""}
          </span>
        </h2>

        {/* ================= PROPERTY / FORM ================= */}
{hasSellerLeads ? (
  editMode ? (
    <EditSellerForm
      seller={sellerLeads}
      backendUrl={backendUrl}
      onCancel={() => setEditMode(false)}
      onSaved={() => {
        fetchSellerLeads();
        setEditMode(false);
      }}
    />
  ) : (
    <>
      <div className="card">
        <h3>Property Summary</h3>
        <div className="grid">
          <div>
            <label>Property Type</label>
            <p>{sellerLeads.propertyType}</p>
          </div>
          <div>
            <label>Price Range</label>
            <p>${sellerLeads.price?.toLocaleString()}</p>
          </div>
          <div>
            <label>Area</label>
            <p>{sellerLeads.area}</p>
          </div>
          <div>
            <label>Timeline</label>
            <p>{sellerLeads.timeline}</p>
          </div>
          <div>
            <label>Reason</label>
            <p>{sellerLeads.summary}</p>
          </div>
        </div>
      </div>

      {status === "New" && (
        <button
          className="btn-light"
          onClick={() => setEditMode(true)}
        >
          Edit My Details
        </button>
      )}
    </>
  )
) : (
  <EditSellerForm
    seller={null}
    backendUrl={backendUrl}
    onSaved={fetchSellerLeads}
  />
)}

      <>
      {sellerLeads?.status === "Matched" && (
        <AgentMatchQueue
          agents={agents}
          onRespond={respondToAgent}
        />
      )}
    </>

        {/* ================= NEXT STEPS ================= */}
        <div className="card">
          <h3>What Happens Next?</h3>
          <ol className="steps">
            <li>We review your information</li>
            <li>Local agents offering 3% are notified</li>
            <li>Interested agents request access</li>
            <li>You decide who you want to speak with</li>
          </ol>
        </div>

        {/* ================= PRIVACY ================= */}
        <div className="privacy-box">
          <h4>Your Privacy Matters</h4>
          <ul>
            <li>No pressure</li>
            <li>No obligation</li>
            <li>No contracts</li>
            <li>No spam</li>
          </ul>
        </div>

        {/* ================= PROGRESS ================= */}
        <div className="progress-container">
          <div className={`progress-fill ${status}`} />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
