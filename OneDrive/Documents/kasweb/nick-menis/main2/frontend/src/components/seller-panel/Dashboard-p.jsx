import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import EditSellerForm from "./EditSellerForm";
import AgentMatchQueue from "./AgentMatchQueue";
import SellerMessages from "./SellerMessages";
import AvailabilityPopup from "./AvailabilityPopup";
import CancelLeadPopup from "./CancelLeadPopup";





const Dashboard = ({ user, sellerLeads, backendUrl, fetchSellerLeads }) => {
  const hasSellerLeads = !!sellerLeads;
  const [editMode, setEditMode] = useState(false);
  const [agents, setAgents] = useState([]);
  const token = localStorage.getItem("token");
  const [availabilityOpen, setAvailabilityOpen] = useState(false);
  const [cancelOpen, setCancelOpen] = useState(false);



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

  const respondToAgent = async (matchId, action) => {
    console.log(matchId);
  await axios.put(
    `${backendUrl}/api/seller/agent-response`,
    { matchId, action },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  fetchAgentQueue();
};

  // ✅ EFFECT RUNS ONLY WHEN STATUS BECOMES MATCHED
  useEffect(() => {
  if (["Matched", "Assigned"].includes(sellerLeads?.status)) {
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
              ? "Your request to be matched with a local 3% real estate agent has been received. We are currently reviewing your information."
              : status === "Matched"
              ? "Agents have been matched to your lead."
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

      <button
  className="btn-light"
  onClick={() => setAvailabilityOpen(true)}
>
  Edit Availability
</button>

<div>
  <label>Availability</label>
  <p>
    {sellerLeads?.availability?.days?.join(", ") || "Not set"} <br />
    {sellerLeads?.availability?.timeRange?.from} – {sellerLeads?.availability?.timeRange?.to}
  </p>
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
  {["Matched", "Assigned"].includes(sellerLeads?.status) && (
  <AgentMatchQueue
    agents={agents}
    onRespond={respondToAgent}
    locked={sellerLeads?.status === "Assigned"}
  />
)}
    </>
{sellerLeads?.status === "Assigned" ? (
  <SellerMessages
    leadId={sellerLeads._id}
    userId={user._id}
    backendUrl={backendUrl}
  />
) : (
  <div className="card locked">
    <h3>Messaging Locked</h3>
    <p>Messaging will be enabled once you connect with an agent.</p>
  </div>
)}

<AvailabilityPopup
  open={availabilityOpen}
  onClose={() => setAvailabilityOpen(false)}
  backendUrl={backendUrl}
  token={token}
  onSaved={fetchSellerLeads}
/>

{sellerLeads && sellerLeads.status !== "Assigned" && (
  <button
    className="btn-danger"
    onClick={() => setCancelOpen(true)}
  >
    Cancel Lead Request
  </button>
)}

<CancelLeadPopup
  open={cancelOpen}
  onClose={() => setCancelOpen(false)}
  backendUrl={backendUrl}
  token={token}
  onCancelled={fetchSellerLeads}
/>


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
