import LeadModal from "./LeadModal"; 

export default function Sellers({ searchedLeads, openLead, modalLead,closeLead,assignLead,markMatched }) {

  return (
    <div className="custom-admin-view custom-admin-view-sellers">
      <div className="custom-admin-card">
        <div className="custom-admin-panel-head">
          <h3>Home Owners (leads)</h3>
          <div className="custom-admin-muted">
            List shows only non-sensitive public fields until a lead is purchased/allocated.
          </div>
        </div>

        <div className="custom-admin-list" id="custom-admin-sellersList">
           {searchedLeads.length === 0 && <div className="custom-admin-small-muted">No leads found.</div>}
              {searchedLeads.map(l => (
                <div key={l.id} className="custom-admin-list-item">
                  <div>
                    <strong>{l.type}</strong> — {l.area}
                    <div className='custom-admin-small-muted'>{l.summary}</div>
                  </div>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <div className={`custom-admin-tier-pill tier-${l.tier}`}>{l.tier}</div>
                    <div style={{width:12}}></div>
                    <button className='custom-admin-btn custom-admin-ghost' onClick={()=>openLead(l.id)}>View</button>
                  </div>
                </div>

            ))}
        </div>
      </div>

      {/* Lead Modal */}
      {modalLead && (
        <LeadModal
          lead={modalLead}
          onClose={closeLead}
          onAssign={assignLead}
          onMarkMatched={markMatched}
        />
      )}
    </div>
  );
}
