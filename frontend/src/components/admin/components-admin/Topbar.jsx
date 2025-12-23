import React from "react";

export default function Topbar({ search, setSearch, addManualLead }) {
  return (
    <div className="custom-admin-topbar">
      <input
        className="custom-admin-search"
        placeholder="Search leads..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="custom-admin-top-actions">
        <button className="custom-admin-btn" onClick={addManualLead}>
          Add Manual Lead
        </button>
        <button className="custom-admin-btn custom-admin-ghost">Import CSV</button>
      </div>
    </div>
  );
}
