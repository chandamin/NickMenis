// import React, { useState } from "react";

// // import { dummyLeads } from "./data/dummyLeads";
// import { dummyAgents } from "./components-admin/data/dummyAgents";
// import { dummyLeads } from "./components-admin/data/dummyLeads";


// import Sidebar from "./components-admin/Sidebar";
// import Topbar from "./components-admin/Topbar";
// import Overview from "./components-admin/Overview";
// import Sellers from "./components-admin/Sellers";
// import Agents from "./components-admin/Agents";
// import Leads from "./components-admin/Leads";
// import Reports from "./components-admin/Reports";
// import Settings from "./components-admin/Settings";
// import LeadModal from "./components-admin/LeadModal";

// export default function AdminDashboard() {
//   const [activeView, setActiveView] = useState("overview");
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [modalLead, setModalLead] = useState(null);

//   const leads = dummyLeads;
//   const agents = dummyAgents;

//   function addManualLead() {
//     alert("Manual lead add (mock)");
//   }

//   return (
//     <div className="custom-admin-root">
//       <Sidebar
//         activeView={activeView}
//         setActiveView={setActiveView}
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//       />

//       <main className="custom-admin-main">
//         <Topbar search={search} setSearch={setSearch} addManualLead={addManualLead} />

//         {activeView === "overview" && <Overview leads={leads} />}
//         {activeView === "sellers" && <Sellers leads={leads} openLeadModal={setModalLead} />}
//         {activeView === "agents" && <Agents agents={agents} />}
//         {activeView === "leads" && <Leads leads={leads} openLeadModal={setModalLead} />}
//         {activeView === "reports" && <Reports />}
//         {activeView === "settings" && <Settings />}
//       </main>

//       {modalLead && (
//         <LeadModal lead={modalLead} close={() => setModalLead(null)} />
//       )}
//     </div>
//   );
// }
