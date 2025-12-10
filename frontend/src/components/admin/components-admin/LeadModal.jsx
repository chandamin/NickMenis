import React from "react";

export default function LeadModal({ lead, close }) {
  return (
    <div className="custom-admin-modal">
      <div className="custom-admin-modal-card">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>Lead Details</strong>
          <button onClick={close}>✕</button>
        </div>

        <h3 style={{ marginTop: 6 }}>{lead.propertyType} — {lead.city}</h3>
        <p>{lead.summary}</p>

        <div style={{ marginTop: 20 }}>
          <button className="custom-admin-btn">Assign to Agent</button>
          <button className="custom-admin-btn custom-admin-ghost">Mark Matched</button>
        </div>
      </div>
    </div>
  );
}
