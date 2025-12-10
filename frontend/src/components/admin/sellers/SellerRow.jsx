export default function SellerRow({ lead, onView }) {
  return (
    <div className="custom-admin-list-item">
      <div>
        <strong>{lead.type}</strong> — {lead.area}
        <div className="custom-admin-small-muted">{lead.summary}</div>
      </div>
      <button className="custom-admin-btn custom-admin-ghost" onClick={() => onView(lead.id)}>
        View
      </button>
    </div>
  );
}
