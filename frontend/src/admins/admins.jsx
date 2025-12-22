import React, { useEffect, useState } from "react";
import logo from "../assets/3percent.jpg";
import logo2 from "../assets/3percentrt.png";

export default function AdminDashboardSingleFile() {

  const [leads, setLeads] = useState([
    { id: 'L-1001', type: 'House', area: 'Kensington', value: 720000, ageDays: 0, tier: 'Diamond', summary: '3 bed detached, thinking of selling ASAP' },
    { id: 'L-1002', type: 'Condo', area: 'Downtown', value: 420000, ageDays: 2, tier: 'Gold', summary: '2 bed condo with balcony, flexible timeline' },
    { id: 'L-1003', type: 'Townhouse', area: 'Etobicoke', value: 560000, ageDays: 9, tier: 'Silver', summary: 'Owner relocating, prefers email first' },
    { id: 'L-1004', type: 'House', area: 'North York', value: 980000, ageDays: 22, tier: 'Bronze', summary: 'High value property, may list later' },
  ]);

  const [agents, setAgents] = useState([
    { id: 'A-501', name: 'Karen Singh', email: 'karen@3percent.ca', joined: '2025-07-12', status: '3% Club' },
    { id: 'A-502', name: 'Michael Lee', email: 'michael@3percent.ca', joined: '2025-08-01', status: 'Pending' },
    { id: 'A-503', name: 'Priya Sharma', email: 'priya@3percent.ca', joined: '2025-09-15', status: '3% Club' },
  ]);

  // UI state
  const [activeView, setActiveView] = useState('overview'); // overview, sellers, agents, leads, reports, settings
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalLead, setModalLead] = useState(null); // lead object or null
  const [ageFilter, setAgeFilter] = useState(0);
  const [inviteEmail, setInviteEmail] = useState('');
  const [search, setSearch] = useState('');

  // Derived lists
  const recentLeads = leads.slice(0, 4);
  const filteredLeads = leads.filter(l => l.ageDays >= Number(ageFilter));

  // Handlers ported from original JS
  useEffect(() => {
    // close sidebar on escape
    const onKey = (e) => { if (e.key === 'Escape') setSidebarOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function openLeadModal(id) {
    const lead = leads.find(x => x.id === id);
    if (!lead) return;
    setModalLead(lead);
  }

  function closeLeadModal() { setModalLead(null); }

  function assignLeadMock() {
    alert('Assigning lead — in the real system this would reveal contact info to the chosen agent.');
    closeLeadModal();
  }

  function markMatchedMock() {
    alert('Marked lead as matched with agent (internal).');
    closeLeadModal();
  }

  function addManualLead() {
    const nid = 'L-' + (1000 + leads.length + 1);
    const newLead = { id: nid, type: 'House', area: 'NewArea', value: 500000, ageDays: 0, tier: 'Gold', summary: 'Manually added lead' };
    setLeads(prev => [newLead, ...prev]);
    alert('Manual lead added: ' + nid);
  }

  function inviteAgent() {
    const email = inviteEmail.trim();
    if (!email) { alert('Enter an email'); return; }
    const newAgent = { id: 'A-' + (500 + agents.length + 1), name: email.split('@')[0], email, joined: new Date().toISOString().slice(0,10), status: 'Pending' };
    setAgents(prev => [...prev, newAgent]);
    setInviteEmail('');
    alert('Invitation sent to ' + email);
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

  // small util
  function formatCurrency(n){ return '$' + Number(n).toLocaleString(); }

  return (
    <div className="custom-admin-root">
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        :root{--bg:#f5f2f1;--card:#ffffff;--muted:#6b6b6b;--accent:#c8102e;--nav:#0f2430;--success:#0a8a5f;--glass:rgba(255,255,255,0.6)}
        body{font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;background:var(--bg);color:#111}
        .custom-admin-root{display:flex;min-height:100vh}
        .mobile-hamburger{display:none}
        .sidebar-overlay{display:none}
        .custom-admin-sidebar{width:260px;background:var(--nav);color:#fff;padding:22px;display:flex;flex-direction:column;gap:18px}
        .custom-admin-brand{display:flex;gap:12px;align-items:center}
        .custom-admin-brand-title img{width:209px}
        .custom-admin-sidebar-nav{margin-top:12px;display:flex;flex-direction:column;gap:6px}
        .custom-admin-nav-item{padding:10px 12px;border-radius:8px;color:rgba(255,255,255,0.9);display:flex;justify-content:space-between;align-items:center;font-weight:600;cursor:pointer}
        .custom-admin-nav-item.custom-admin-active{background:rgba(255,255,255,0.06)}
        .custom-admin-main{flex:1;padding:22px 28px}
        .custom-admin-topbar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:18px}
        .custom-admin-search{flex:1;max-width:520px}
        .custom-admin-top-actions{display:flex;gap:10px}
        .custom-admin-btn{background:var(--accent);color:#fff;padding:10px 14px;border-radius:8px;border:none;cursor:pointer;font-weight:700}
        .custom-admin-ghost{background:transparent;color:var(--nav);border:1px solid #ddd}
        .custom-admin-grid{display:grid;grid-template-columns:1fr 420px;gap:18px}
        .custom-admin-card{background:var(--card);padding:18px;border-radius:12px;box-shadow:0 6px 18px rgba(12,12,12,0.06)}
        .custom-admin-overview{display:flex;gap:12px}
        .custom-admin-stat{flex:1;padding:14px;border-radius:8px;background:linear-gradient(180deg,#fff,#fbfbfb);border:1px solid #f0eaea}
        .custom-admin-table{width:100%;border-collapse:collapse}
        .custom-admin-table th,.custom-admin-table td{padding:10px;border-bottom:1px solid #f1eded;text-align:left;font-size:14px}
        .custom-admin-muted{color:var(--muted);font-size:13px}
        .custom-admin-panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
        .custom-admin-list{display:flex;flex-direction:column;gap:8px}
        .custom-admin-list-item{display:flex;justify-content:space-between;align-items:center;padding:10px;border-radius:8px;border:1px solid #f1eded}
        .custom-admin-pill{padding:6px 8px;border-radius:999px;background:#f6f6f6;font-weight:700}
        .custom-admin-lead-tier{display:flex;gap:8px}
        .custom-admin-tier{padding:8px 10px;border-radius:8px;background:#fff8f8;border:1px solid rgba(200,16,46,0.08);font-weight:700}
        .custom-admin-lead-actions button{margin-left:8px}
        .custom-admin-modal{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(12,12,12,0.4);display:flex;align-items:center;justify-content:center;z-index:120}
        .custom-admin-modal-card{width:820px;max-width:calc(100% - 40px);background:var(--card);padding:20px;border-radius:12px}
        .custom-admin-modal-grid{display:grid;grid-template-columns:1fr 260px;gap:12px}
        .custom-admin-small-muted{font-size:13px;color:var(--muted)}
        @media (max-width:980px){.custom-admin-grid{grid-template-columns:1fr}.custom-admin-top-actions .custom-admin-btn{padding:8px 10px}}
        @media (max-width:768px){.custom-admin-sidebar{transform:translateX(-100%);position:fixed;left:0;top:0;height:100vh;z-index:9999;transition:0.3s}.custom-admin-sidebar.active{transform:translateX(0)}.mobile-hamburger{display:block !important;position:absolute}button#closeSidebar{display:block}}
      `}</style>

      {/* Sidebar */}
      <button className="mobile-hamburger" onClick={() => setSidebarOpen(true)}>☰</button>
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} style={{display: sidebarOpen ? 'block' : 'none'}} />

      <aside className={`custom-admin-sidebar ${sidebarOpen ? 'active' : ''}`}>
        <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>✕</button>
        <div className="custom-admin-brand">
          <div>
        <h1 className="custom-admin-brand-title">
          <a href="/home">
            <img src={logo} alt="Logo" />
          </a>
        </h1>

            <div className="custom-admin-small-muted">Admin — Matchmaking Platform</div>
          </div>
        </div>

        <nav className="custom-admin-sidebar-nav" aria-label="Admin navigation">
          {['overview','sellers','agents','leads','reports','settings'].map(v => (
            <a key={v}
               className={`custom-admin-nav-item ${activeView===v? 'custom-admin-active':''}`}
               onClick={() => { setActiveView(v); setSidebarOpen(false); }}
               role="button"
               tabIndex={0}
            >{v.charAt(0).toUpperCase() + v.slice(1).replace('-', ' ')}</a>
          ))}
        </nav>

        <div style={{marginTop:'auto',fontSize:13,opacity:0.85}}>
          <div>Signed in as <strong>admin@3percent.ca</strong></div>
          <div style={{marginTop:8}} className="custom-admin-small-muted">Keep seller-facing site privacy-focused — do not expose leads publicly.</div>
        </div>
      </aside>

      {/* Main */}
      <main className="custom-admin-main">
        <div className="custom-admin-topbar">
          <div style={{display:'flex',alignItems:'center',gap:12,flex:1}}>
            <input className="custom-admin-search" placeholder="Quick search: property type, neighbourhood, lead id..." value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
          <div className="custom-admin-top-actions">
            <button className="custom-admin-btn" onClick={addManualLead}>Add Manual Lead</button>
            <button className="custom-admin-btn custom-admin-ghost">Import CSV</button>
          </div>
        </div>

        <section id="custom-admin-view-area">

          {/* Overview */}
          {activeView === 'overview' && (
            <div className="custom-admin-view custom-admin-view-overview">
              <div className="custom-admin-grid">
                <div className="custom-admin-card">
                  <div className="custom-admin-overview">
                    <div className="custom-admin-stat">
                      <div className="custom-admin-small-muted">Total Sellers (new)</div>
                      <div style={{fontSize:22,fontWeight:800,marginTop:6}}>1,232</div>
                      <div className="custom-admin-muted" style={{marginTop:6}}>New in last 30 days: 412</div>
                    </div>

                    <div className="custom-admin-stat">
                      <div className="custom-admin-small-muted">Matched (3% Agents)</div>
                      <div style={{fontSize:22,fontWeight:800,marginTop:6}}>684</div>
                      <div className="custom-admin-muted" style={{marginTop:6}}>Avg match time: 3.4 hours</div>
                    </div>

                    <div className="custom-admin-stat">
                      <div className="custom-admin-small-muted">Active Agents</div>
                      <div style={{fontSize:22,fontWeight:800,marginTop:6}}>158</div>
                      <div className="custom-admin-muted" style={{marginTop:6}}>3% Club members: 92</div>
                    </div>
                  </div>

                  <div style={{marginTop:18,display:'flex',gap:12,alignItems:'center'}}>
                    <div style={{flex:1}}>
                      <div className="custom-admin-small-muted">Recent leads (no contact details shown)</div>
                      <table className="custom-admin-table" aria-hidden>
                        <thead>
                          <tr>
                            <th>Lead ID</th>
                            <th>Type</th>
                            <th>Area</th>
                            <th>Value</th>
                            <th>Age</th>
                          </tr>
                        </thead>
                        <tbody id="custom-admin-recentLeads">
                          {recentLeads.map(l => (
                            <tr key={l.id}>
                              <td>{l.id}</td>
                              <td>{l.type}</td>
                              <td>{l.area}</td>
                              <td>{formatCurrency(l.value)}</td>
                              <td>{l.ageDays}d</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

                <aside className="custom-admin-card">
                  <div className="custom-admin-panel-head"><strong>Platform Notes</strong></div>
                  <div className="custom-admin-small-muted">This admin dashboard is for internal use only. Sellers must never see any marketplace or lead-selling interface. Use the Leads Marketplace panel to manage tiers and availability for agents.</div>

                  <div style={{marginTop:12}}>
                    <div className="custom-admin-small-muted">Lead pricing</div>
                    <div style={{display:'flex',gap:8,marginTop:8}}>
                      <div className="custom-admin-tier">Diamond $1,000</div>
                      <div className="custom-admin-tier">Gold $500</div>
                      <div className="custom-admin-tier">Silver $250</div>
                      <div className="custom-admin-tier">Bronze $100</div>
                    </div>
                  </div>

                </aside>
              </div>
            </div>
          )}

          {/* Sellers view */}
          {activeView === 'sellers' && (
            <div className="custom-admin-view custom-admin-view-sellers">
              <div className="custom-admin-card">
                <div className="custom-admin-panel-head">
                  <h3>Sellers (leads)</h3>
                  <div className="custom-admin-muted">List shows only non-sensitive public fields until a lead is purchased/allocated.</div>
                </div>

                <div className="custom-admin-list" id="custom-admin-sellersList">
                  {searchedLeads.map(l => (
                    <div key={l.id} className="custom-admin-list-item">
                      <div><strong>{l.type}</strong> — {l.area} <div className='custom-admin-small-muted'>{l.summary}</div></div>
                      <div style={{display:'flex',alignItems:'center'}}>
                        <div className='custom-admin-pill'>{l.tier}</div>
                        <div style={{width:12}}></div>
                        <button className='custom-admin-btn custom-admin-ghost' onClick={()=>openLeadModal(l.id)}>View</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Agents view */}
          {activeView === 'agents' && (
            <div className="custom-admin-view custom-admin-view-agents">
              <div className="custom-admin-card">
                <div className="custom-admin-panel-head">
                  <h3>Agents — 3% Club</h3>
                  <div className="custom-admin-muted">Manage approved agents and memberships.</div>
                </div>
                <div style={{marginBottom:12,display:'flex',gap:8}}>
                  <input placeholder="Invite email" value={inviteEmail} onChange={e=>setInviteEmail(e.target.value)} style={{flex:1,padding:10,borderRadius:8,border:'1px solid #eee'}} />
                  <button className="custom-admin-btn" onClick={inviteAgent}>Invite</button>
                </div>

                <div className="custom-admin-list" id="custom-admin-agentList">
                  {agents.map(a => (
                    <div key={a.id} className="custom-admin-list-item">
                      <div><strong>{a.name}</strong><div className='custom-admin-small-muted'>Joined {a.joined} • {a.status}</div></div>
                      <div><button className='custom-admin-btn' onClick={()=>alert('Open agent management (mock): '+a.id)}>Manage</button></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Leads marketplace */}
          {activeView === 'leads' && (
            <div className="custom-admin-view custom-admin-view-leads">
              <div className="custom-admin-card">
                <div className="custom-admin-panel-head">
                  <h3>Leads Marketplace (Admin Tools)</h3>
                  <div className="custom-admin-muted">Control visibility, age-based availability and tiering.</div>
                </div>

                <div style={{marginBottom:12,display:'flex',gap:8,alignItems:'center'}}>
                  <label className='custom-admin-small-muted'>Show leads older than (days)</label>
                  <input type='number' value={ageFilter} onChange={e=>setAgeFilter(e.target.value)} style={{width:80,padding:8,borderRadius:6,border:'1px solid #eee'}} />
                  <button className='custom-admin-btn' onClick={refreshLeads}>Apply</button>
                </div>

                <table className='custom-admin-table' id='custom-admin-leadsTable'>
                  <thead>
                    <tr>
                      <th>Lead ID</th>
                      <th>Type</th>
                      <th>Area</th>
                      <th>Value</th>
                      <th>Age</th>
                      <th>Tier</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map(l => (
                      <tr key={l.id}>
                        <td>{l.id}</td>
                        <td>{l.type}</td>
                        <td>{l.area}</td>
                        <td>{formatCurrency(l.value)}</td>
                        <td>{l.ageDays}d</td>
                        <td>{l.tier}</td>
                        <td style={{textAlign:'right'}}><button className='custom-admin-btn' onClick={()=>openLeadModal(l.id)}>Details</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
            </div>
          )}

          {/* Reports */}
          {activeView === 'reports' && (
            <div className='custom-admin-view custom-admin-view-reports'>
              <div className='custom-admin-card'>
                <h3>Reports</h3>
                <div className='custom-admin-muted'>Export monthly reports for internal analytics (no PII included).</div>
                <div style={{marginTop:12,display:'flex',gap:8}}>
                  <button className='custom-admin-btn'>Export Leads Summary (CSV)</button>
                  <button className='custom-admin-btn custom-admin-ghost'>Export Agent Activity</button>
                </div>
              </div>
            </div>
          )}

          {/* Settings */}
          {activeView === 'settings' && (
            <div className='custom-admin-view custom-admin-view-settings'>
              <div className='custom-admin-card'>
                <h3>Settings</h3>
                <div style={{marginTop:12}} className='custom-admin-small-muted'>Platform-level settings. Make sure seller-facing site does not show marketplace features.</div>
                <div style={{marginTop:12,display:'flex',gap:8,flexDirection:'column'}}>
                  <label><input type='checkbox' defaultChecked disabled /> Disallow public listing pages (required)</label>
                  <label><input type='checkbox' id='custom-admin-allowAgentSignup' /> Allow agent self-signup (toggle)</label>
                  <label><input type='checkbox' id='custom-admin-allowLeadDownload' /> Enable 3-month-old lead downloads ($5 ea)</label>
                </div>
              </div>
            </div>
          )}

        </section>

      </main>

      {/* Modal (react) */}
      {modalLead && (
        <div className='custom-admin-modal'>
          <div className='custom-admin-modal-card'>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
              <strong>Lead Details</strong>
              <button onClick={closeLeadModal} style={{border:'none',background:'transparent',fontWeight:700,cursor:'pointer'}}>✕</button>
            </div>

            <div className='custom-admin-modal-grid'>
              <div>
                <div className='custom-admin-small-muted'>Lead ID: <span>{modalLead.id}</span></div>
                <h3 style={{marginTop:6}}>{modalLead.type} — {modalLead.area}</h3>
                <p className='custom-admin-small-muted'>{modalLead.summary}</p>

                <div style={{marginTop:12}}>
                  <div className='custom-admin-small-muted'>Note: Contact details are only revealed to agents after purchase or assignment.</div>
                </div>

              </div>
              <aside>
                <div style={{display:'flex',flexDirection:'column',gap:8}}>
                  <div><strong>Tier</strong>
                    <div className='custom-admin-pill' style={{display:'inline-block',marginLeft:8}}>{modalLead.tier}</div>
                  </div>
                  <div className='custom-admin-small-muted'>Value: <strong>{formatCurrency(modalLead.value)}</strong></div>
                  <div className='custom-admin-small-muted'>Age: <strong>{modalLead.ageDays} days</strong></div>

                  <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:8}}>
                    <button className='custom-admin-btn' onClick={assignLeadMock}>Assign to Agent</button>
                    <button className='custom-admin-btn custom-admin-ghost' onClick={markMatchedMock}>Mark as Matched</button>
                  </div>
                </div>
              </aside>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}



