import React, { useEffect, useState } from "react";
import banner from "../../assets/data-dashboard.png";
import agentBannerImg from "../../assets/agent-banner.png";
import AgentMessages from "./AgentMessages";
import "./style.css";
import { loadStripe } from "@stripe/stripe-js";

/* ======================================================
   API HELPERS
====================================================== */

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const token = localStorage.getItem("token");

const fetchAgentPayments = async () => {
  const res = await fetch(`${backendUrl}/api/agent/payments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  // Convert array → map by leadId
  const map = {};
  data.forEach(p => {
    map[p.leadId] = p;
  });

  return map;
};


const payNow = async (leadId) => {
  const res = await fetch(`${backendUrl}/api/agent/payments/checkout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ leadId }),
  });

  const data = await res.json();
  window.location.href = data.url;
};



const fetchAgentLeads = async () => {
  const res = await fetch(`${backendUrl}/api/agent/leads`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await res.json();
  return Array.isArray(data) ? data : data.leads || [];
};



/* ======================================================
   MAIN COMPONENT
====================================================== */

const AgentDashboard = () => {
    const [agent, setAgent] = useState(null);

  const [leads, setLeads] = useState([]);
  const [payments, setPayments] = useState(true);
  const [loading, setLoading] = useState(true);


 const fetchAgent = async () => {
    const res = await fetch(`${backendUrl}/api/agent/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch agent");
    return res.json();
  };

  /* ---------------- LOAD DATA ---------------- */
useEffect(() => {
  const loadDashboardData = async () => {
    try {
      const [agentData, leadsData, paymentsData] = await Promise.all([
        fetchAgent(),
        fetchAgentLeads(),
        fetchAgentPayments(),
      ]);

      setAgent(agentData);
      setLeads(leadsData);
      setPayments(paymentsData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  loadDashboardData();
}, []);


  if (loading) {
    return <div className="loader">Loading dashboard...</div>;
  }

  return (
    <div className="custom-agent-dashboard-main">

      {/* ================= AGENT BANNER ================= */}
      <div
        className="agent-hero-banner"
        style={{ backgroundImage: `url(${agentBannerImg})` }}
      >
        <div className="agent-hero-overlay"></div>
        <div className="agent-hero-content">
          <h1 className="agent-title-banner">Why agents choose 3%</h1>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div className="custom-agent-dashboard-inner">
        <div className="custom-agent-dashboard-flex">

          <div className="dashboard-left">
            <h1 className="dash-title">
              Join the 3% Club — Get exclusive Canadian seller leads
            </h1>

            <p className="dash-desc">
              Matchmaking platform for motivated sellers & agents offering a{" "}
              <strong>flat 3% commission</strong>.
            </p>

            <div className="chart-box">
              <img src={banner} alt="dashboard chart" />
            </div>
          </div>

        </div>
      </div>



{agent?.hasActiveLead && agent?.activeLeadId && (
  <AgentMessages
    leadId={agent.activeLeadId}
    backendUrl={backendUrl}
    agentId={agent._id}
  />
)}





      {/* ================= LEADS ================= */}
      <div className="leads-root card">
        <h2>Your Seller Leads</h2>

        {leads.length === 0 ? (
          <p>No leads assigned yet.</p>
        ) : (
          <table className="leads-table">
            <thead>
  <tr>
    <th>Property</th>
    <th>Area</th>
    <th>Value</th>
    <th>Status</th>
    <th>Payment</th>
    <th>Seller Contact</th>
  </tr>
</thead>


            <tbody>
  {leads.map(lead => {
    const payment = payments[lead._id];

    return (
      <tr key={lead._id}>
        <td>{lead.propertyType}</td>
        <td>{lead.area}</td>
        <td>${lead.price}</td>
        <td>{lead.status}</td>

        {/* ===== PAYMENT COLUMN ===== */}
        <td>
          {lead.status === "Assigned" && !payment && (
            <button
              className="btn-primary"
              onClick={() => payNow(lead._id)}
            >
              Pay 1%
            </button>
          )}

          {payment?.status === "pending" && (
            <span className="warning">Pending Approval</span>
          )}

          {payment?.status === "approved" && (
            <span className="success">Paid</span>
          )}
        </td>

        {/* ===== SELLER CONTACT ===== */}
        <td>
          {lead.status === "Assigned" && payment?.status === "approved"
            ? <span>{lead.sellerPhone}</span>
            : <span className="muted">Hidden</span>
          }
        </td>
      </tr>
    );
  })}
</tbody>

          </table>
        )}
      </div>

    </div>
  );
};

export default AgentDashboard;
