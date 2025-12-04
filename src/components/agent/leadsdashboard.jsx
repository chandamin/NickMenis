import React, { useEffect, useState, useRef } from 'react';



const initialLeads = [
  { id: 1, type: '2BHK Condo Property', neighborhood: 'Vaughan', value: '$578,000', tier: 'Gold', sold: false, contact: '(hidden until purchase)' },
  { id: 2, type: '2BHK Condo Property', neighborhood: 'Vaughan', value: '$578,000', tier: 'Silver', sold: false, contact: '(hidden until purchase)' },
  { id: 3, type: '2BHK Condo Property', neighborhood: 'Vaughan', value: '$578,000', tier: 'Gold', sold: false, contact: '(hidden until purchase)' },
  { id: 4, type: '2BHK Condo Property', neighborhood: 'Vaughan', value: '$578,000', tier: 'Bronze', sold: false, contact: '(hidden until purchase)' },
  { id: 5, type: '2BHK Condo Property', neighborhood: 'Vaughan', value: '$578,000', tier: 'Gold', sold: false, contact: '(hidden until purchase)' },
  { id: 6, type: '2BHK Condo Property', neighborhood: 'Vaughan', value: '$578,000', tier: 'Gold', sold: false, contact: '(hidden until purchase)' }
];

function priceForTier(tier) {
  switch (tier) {
    case 'Diamond': return '$1,000';
    case 'Gold': return '$500';
    case 'Silver': return '$250';
    case 'Bronze': return '$100';
    default: return '$0';
  }
}

function fakeContactFor(id) {
  const map = {
    1: 'Sunita K — 647-555-0123',
    2: 'Rahul P — 416-555-0199',
    3: 'Sapna S — 905-555-0211',
    4: 'Deepak R — 519-555-0177'
  };
  return map[id] || 'Contact — (demo)';
}

function useInterval(callback, ms) {
  const cb = useRef(callback);
  useEffect(() => { cb.current = callback; }, [callback]);
  useEffect(() => {
    if (ms == null) return;
    const id = setInterval(() => cb.current(), ms);
    return () => clearInterval(id);
  }, [ms]);
}

export default function LeadsDashboard() {
  const [leads, setLeads] = useState(initialLeads);
  const [purchased, setPurchased] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [agentName, setAgentName] = useState('Agent');
  const [toast, setToast] = useState(null);
  const [modalLead, setModalLead] = useState(null);
  const [newLeadsCount, setNewLeadsCount] = useState(5);

  useInterval(() => {
    const id = Math.floor(Math.random() * 10000) + 100;
    const type = ['3BHK', '2BHK Condo', 'Plot', '1BHK'][Math.floor(Math.random() * 4)];
    const n = ['Scarborough', 'Brampton', 'Vaughan', 'Richmond Hill'][Math.floor(Math.random() * 4)];
    const v = '$' + (400 + Math.floor(Math.random() * 800)) + ',000';
    const tierPick = ['Bronze', 'Silver', 'Gold'][Math.floor(Math.random() * 3)];
    const newLead = { id, type: type + ' Property', neighborhood: n, value: v, tier: tierPick, sold: false, contact: '(hidden until purchase)' };
    setLeads(prev => [newLead, ...prev]);
    setToast('New lead available — ' + n);

    setNewLeadsCount(x => x + 1);
  }, 18000);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  function handleSignup(name) {
    setAgentName(name || 'Agent');
    setShowDashboard(true);
    setToast('Welcome, ' + (name || 'Agent'));
  }

  function logout() {
    setShowDashboard(false);
    setToast('Logged out');
  }

  function openBuyModal(leadId) {
    const lead = leads.find(l => l.id === leadId);
    if (!lead) return;
    setModalLead(lead);
  }

  function confirmBuy() {
    if (!modalLead) return;
    const contact = fakeContactFor(modalLead.id);
    const bought = { ...modalLead, contact, date: new Date().toISOString().slice(0,10) };
    setPurchased(prev => [bought, ...prev]);
    setLeads(prev => prev.map(l => l.id === modalLead.id ? {...l, sold: true} : l));
    setToast('Purchase successful — contact revealed');
    setModalLead(null);
  }

  function markRowSold(id) {
    setLeads(prev => prev.map(l => l.id === id ? {...l, sold: true} : l));
  }

  const TierPill = ({ tier }) => {
    const cls = tier === 'Gold' ? 'tier-gold' : tier === 'Silver' ? 'tier-silver' : 'tier-bronze';
    return <span className={"pill " + cls}>{tier}</span>;
  };

  return (
    <div className="leads-root">
      
      {!showDashboard && (
        <main class="custom-lead-main-container">
          <div className="hero">
            <h1>Available lead previews</h1>
            <div className="muted">Preview limited lead details. Contact information is revealed only after purchase per the lead tier rules.</div>
          </div>

          <div className="leads-table-wrap card">
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Neighborhood</th>
                  <th>Estimated Value</th>
                  <th>Tier</th>
                  <th style={{textAlign:'right'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id} data-lead={JSON.stringify(lead)}>
                    <td>{lead.type}</td>
                    <td>{lead.neighborhood}</td>
                    <td>{lead.value}</td>
                    <td><TierPill tier={lead.tier} /></td>
                    <td className="actions">
                      {lead.sold ? (
                        <span className="pill" style={{background:'#eef2f7', color:'#374151'}}>Sold</span>
                      ) : (
                        <button className="btn" onClick={() => openBuyModal(lead.id)}>Buy — {priceForTier(lead.tier)}</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div style={{marginTop:18, display:'flex', gap:12, justifyContent:'flex-end'}}>
            <button className="btn" onClick={() => { handleSignup('Demo Agent'); setToast('Logged in as Demo Agent'); }}>Demo Login</button>
            <button className="btn ghost" onClick={() => { window.location.hash = '#pricing'; }}>See Pricing</button>
          </div> */}
        </main>
      )}

      {showDashboard && (
        <section id="dashboard" className="card">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <h2>Dashboard</h2>
              <div className="muted small">Welcome, <strong id="agent-name">{agentName}</strong></div>
            </div>
            <div><button className="ghost" onClick={logout}>Logout</button></div>
          </div>

          <div className="grid3" style={{marginTop:12}}>
            <div className="stat">Active Plan<br /><strong id="plan-name">Professional</strong></div>
            <div className="stat">Total Leads Bought<br /><strong id="total-bought">{purchased.length}</strong></div>
            <div className="stat">New Leads (7d)<br /><strong id="new-leads">{newLeadsCount}</strong></div>
          </div>

          <h3 style={{marginTop:14}}>Purchased leads</h3>
          <div className="card purchased-wrap" style={{marginTop:8, padding:0, overflow:'auto'}}>
            <table className="purchased-table" style={{width:'100%'}}>
              <thead>
                <tr>
                  <th>Lead</th>
                  <th>Tier</th>
                  <th>Value</th>
                  <th>Contact (revealed)</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {purchased.length === 0 && (
                  <tr><td colSpan={5} className="muted small" style={{padding:12}}>No purchased leads yet.</td></tr>
                )}
                {purchased.map((p) => (
                  <tr key={p.id}>
                    <td>{p.type}</td>
                    <td>{p.tier}</td>
                    <td>{p.value}</td>
                    <td>{p.contact}</td>
                    <td>{p.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Modal */}
      {modalLead && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <h3 id="modal-title">Buy lead — {modalLead.type} ({modalLead.neighborhood})</h3>
            <div style={{marginTop:8}}>
              <div><strong>Tier:</strong> {modalLead.tier}</div>
              <div style={{marginTop:6}}><strong>Estimated value:</strong> {modalLead.value}</div>
              <div style={{marginTop:8, color:'#6b7280', fontSize:13}}>
                Contact information for this lead will be revealed to you immediately after purchase depending on the tier.
                <ul style={{margin:'6px 0 0 18px'}}>
                  <li><strong>Diamond</strong> — exclusive, contact revealed instantly (never resold).</li>
                  <li><strong>Gold</strong> — instant access if Diamond unsold.</li>
                  <li><strong>Silver</strong> — available 7 days after signup (demo behaves differently).</li>
                  <li><strong>Bronze</strong> — available 14 days after signup.</li>
                </ul>
                <div style={{marginTop:8, color:'#b31f22'}}><strong>No refunds</strong> once a lead is purchased.</div>
              </div>
              <div style={{marginTop:10}}><strong>Price:</strong> {priceForTier(modalLead.tier)}</div>
            </div>

            <div style={{display:'flex', gap:8, justifyContent:'flex-end', marginTop:12}}>
              <button className="btn ghost" onClick={() => setModalLead(null)}>Cancel</button>
              <button className="btn" id="confirm-buy" onClick={confirmBuy}>Confirm Purchase</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && <div className="toast" id="toast">{toast}</div>}

     
    </div>
  );
}

