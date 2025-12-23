export default function LeadDetailsModal({ lead, close }) {
  return (
    <div className="custom-admin-modal">
      <div className="custom-admin-modal-card">
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <strong>Lead Details</strong>
          <button onClick={close}>✕</button>
        </div>

        <h3>{lead.type} — {lead.area}</h3>
        <p className="custom-admin-small-muted">{lead.summary}</p>

        <div style={{marginTop:12}}>
          <button className="custom-admin-btn">Assign to Agent</button>
          <button className="custom-admin-btn custom-admin-ghost">Mark as Matched</button>
        </div>
      </div>
    </div>
  );
}
