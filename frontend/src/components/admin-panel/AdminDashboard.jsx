import React, { useEffect, useState,useCallback } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Overview from "./Overview";
import Sellers from "./Sellers";
import Agents from "./Agents";
import Leads from "./Leads";
import Reports from "./Reports";
import Settings from "./Settings";
import LeadModal from "./LeadModal";
import ServiceAreas from "./service-area/ServiceAreas";

import './admin.css';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);

  const [agents, setAgents] = useState([]);

  const [activeView, setActiveView] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalLead, setModalLead] = useState(null);
  const [search, setSearch] = useState("");
  const [ageFilter, setAgeFilter] = useState(0);
  const [inviteEmail, setInviteEmail] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const totalSellers = leads.length;


  const sellersLast30Days = leads.filter(l => {
    const created = new Date(l.createdAt);
    return (Date.now() - created.getTime()) / (1000 * 60 * 60 * 24) <= 30;
  }).length;

  const matchedLeads = leads.filter(l => l.status === "Matched").length;

  const activeAgents = agents.filter(a => a.status === "approved").length;

  useEffect(() => {
    const esc = e => e.key === "Escape" && setSidebarOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

const fetchLeads = useCallback(async () => {
  try {
    const res = await axios.get(`${backendUrl}/api/admin/leads`);
    setLeads(res.data); // axios returns parsed JSON
  } catch (err) {
    console.error('Error fetching leads:', err);
  }
}, [backendUrl]);

useEffect(() => {
  fetchLeads();
}, [fetchLeads]);

const assignLeadMulti = async (leadId, agentIds) => {
  await axios.post(
    `${backendUrl}/api/admin/leads/${leadId}/match-agents`,
    { agentIds }
  );

  // 1️⃣ Refresh table
  fetchLeads();

  // 2️⃣ Refresh modal lead
  const { data } = await axios.get(
    `${backendUrl}/api/admin/leads/${leadId}`
  );

  setModalLead(data);
};


const fetchAgents = useCallback(async () => {
  try {
    const res = await axios.get(`${backendUrl}/api/admin/agents`);
    setAgents(
      res.data.map(a => ({
        id: a._id,
        name: a.firstName,
        email: a.email,
        joined: a.joinedAt
          ? new Date(a.joinedAt).toISOString().slice(0, 10)
          : "—",
        status: a.status
      }))
    );
  } catch (err) {
    console.error("Error fetching agents:", err);
  }
}, [backendUrl]);


useEffect(() => {
  fetchAgents();
}, [fetchAgents]);



  const openLead = id => setModalLead(leads.find(l => l.id === id));
  const closeLead = () => setModalLead(null);

  async function markMatched() {
  if (!modalLead) return;
  try {
    const res = await axios.put(`${backendUrl}/api/admin/leads/${modalLead.id}/match`);
    alert(res.data.message);

    // Update local state so UI reflects the change
    setLeads(prev =>
      prev.map(l => l.id === modalLead.id ? { ...l, status: "Matched" } : l)
    );

    // Close modal (optional)
    closeLead();
  } catch (err) {
    console.error("Error marking lead as matched:", err);
    alert("Failed to mark lead as matched.");
  }
}

const [selectedAgent, setSelectedAgent] = useState('');

async function assignLead() {
  if (!modalLead || !selectedAgent) {
    alert("Select an agent first!");
    return;
  }

  try {
    const res = await axios.put(`${backendUrl}/api/admin/leads/${modalLead.id}/assign`, {
      agentId: selectedAgent
    });

    alert(res.data.message);

    // Update local state
    setLeads(prev =>
      prev.map(l => l.id === modalLead.id
        ? { ...l, status: "Assigned", assignedAgent: selectedAgent }
        : l
      )
    );

    closeLead();
  } catch (err) {
    console.error("Error assigning lead:", err);
    alert("Failed to assign lead.");
  }
}

  function addManualLead() {
    const nid = 'L-' + (1000 + leads.length + 1);
    const newLead = { id: nid, type: 'House', area: 'NewArea', value: 500000, ageDays: 0, tier: 'Gold', summary: 'Manually added lead' };
    setLeads(prev => [newLead, ...prev]);
    alert('Manual lead added: ' + nid);
  }

  async function inviteAgent() {
  if (!inviteEmail.trim()) {
    alert("Enter an email");
    return;
  }

  try {
    await axios.post(`${backendUrl}/api/admin/agents/invite`, {
      email: inviteEmail
    });

    setInviteEmail('');
    alert("Agent invited");

    // Refresh agents list
    await fetchAgents();

  } catch (err) {
    alert("Failed to invite agent");
  }
}


  function refreshLeads() {
    // filter is reactive already; this function kept for parity with original
    setAgeFilter(Number(ageFilter));
  }

  // simple search implementation used on overview topbar input (no heavy filtering to keep parity)
  const searchLower = search.toLowerCase();

  const searchedLeads = leads.filter(l => {
  if (!searchLower) return true;
  return [l.id, l.type, l.area, l.summary].some(f => String(f).toLowerCase().includes(searchLower));
  });
  const filteredMarketplaceLeads = leads
  .filter(l => l.ageDays >= Number(ageFilter))
  .filter(l => !searchLower || [l.id, l.type, l.area, l.summary].some(f => String(f).toLowerCase().includes(searchLower)));


  // small util
  function formatCurrency(n){ return '$' + Number(n).toLocaleString(); }
  
  return (
    <div className="custom-admin-root">
      <Sidebar activeView={activeView} setActiveView={setActiveView} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="custom-admin-main">
        <Topbar search={search} setSearch={setSearch} addManualLead={addManualLead} />

        {activeView === "overview" && <Overview leads={leads} totalSellers={totalSellers} sellersLast30Days={sellersLast30Days} matchedLeads={matchedLeads} activeAgents={activeAgents} />}
        {activeView === "sellers" && <Sellers searchedLeads={searchedLeads} openLead={openLead} modalLead={modalLead} closeLead={closeLead} assignLead={assignLead} markMatched={markMatched} />}
        {activeView === "agents" && <Agents agents={agents} inviteEmail={inviteEmail} setInviteEmail={setInviteEmail} />}
        {activeView === "leads" && <Leads leads={leads} refreshLeads={refreshLeads}  filteredMarketplaceLeads={filteredMarketplaceLeads} formatCurrency={formatCurrency} openLead={openLead} ageFilter={ageFilter} setAgeFilter={setAgeFilter}  />}
        {activeView === "service-areas" && <ServiceAreas />}
        {activeView === "reports" && <Reports />}
        {activeView === "settings" && <Settings />}
      </main>

{modalLead && (
  <LeadModal
    assignLeadMulti={assignLeadMulti}
    agents={agents}
    markMatched={markMatched}
    closeLeadModal={closeLead}
    modalLead={modalLead}
    setSelectedAgent={setSelectedAgent}
    selectedAgent={selectedAgent}
    assignLead={assignLead}
  />
)}    </div>
  );
}
