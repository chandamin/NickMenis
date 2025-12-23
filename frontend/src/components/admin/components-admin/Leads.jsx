import React from "react";

export default function Leads({ leads, openLeadModal }) {
  return (
    <div className="custom-admin-card">
      <h3>Leads Marketplace</h3>

      <table className="custom-admin-table">
        <thead>
          <tr>
            <th>ID</th><th>Type</th><th>Area</th><th>Value</th><th>Age</th><th>Tier</th><th></th>
          </tr>
        </thead>
        <tbody>
          {leads.map(l => (
            <tr key={l.id}>
              <td>{l.id}</td>
              <td>{l.propertyType}</td>
              <td>{l.area}</td>
              <td>{l.propertyValue}</td>
              <td>{l.ageDays}d</td>
              <td>{l.tier}</td>
              <td>
                <button className="custom-admin-btn" onClick={() => openLeadModal(l)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
