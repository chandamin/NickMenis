import React from "react";

export default function Reports() {
  return (
    <div className="custom-admin-view custom-admin-view-reports">
      <div className="custom-admin-card">
        {/* Panel header */}
        <h3>Reports</h3>
        <div className="custom-admin-muted">
          Export monthly reports for internal analytics (no PII included).
        </div>

        {/* Buttons */}
        <div style={{ marginTop:12, display:'flex', gap:8 }}>
          <button className="custom-admin-btn">
            Export Leads Summary (CSV)
          </button>
          <button className="custom-admin-btn custom-admin-ghost">
            Export Agent Activity
          </button>
        </div>
      </div>
    </div>
  );
}
