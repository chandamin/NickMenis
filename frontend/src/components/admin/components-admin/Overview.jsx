import React from "react";

export default function Overview({ leads }) {
  const recent = leads.slice(0, 4);

  function currency(n) {
    return "$" + Number(n).toLocaleString();
  }

  return (
    <div className="custom-admin-card">
      <div className="custom-admin-overview">
        <div className="custom-admin-stat">
          <div className="custom-admin-small-muted">Total Sellers</div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>1,232</div>
        </div>

        <div className="custom-admin-stat">
          <div className="custom-admin-small-muted">Matched</div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>684</div>
        </div>

        <div className="custom-admin-stat">
          <div className="custom-admin-small-muted">Active Agents</div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>158</div>
        </div>
      </div>

      <table className="custom-admin-table" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th><th>Type</th><th>Area</th><th>Value</th><th>Age</th>
          </tr>
        </thead>
        <tbody>
          {recent.map(l => (
            <tr key={l.id}>
              <td>{l.id}</td>
              <td>{l.propertyType}</td>
              <td>{l.area}</td>
              <td>{currency(l.value)}</td>
              <td>{l.ageDays}d</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
