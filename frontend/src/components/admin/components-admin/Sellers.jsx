import React from "react";
import { leads } from "./data/dummyLeads";

export default function SellersView({ openModal }) {
  return (
    <div className="dashboard-section">
      <h2 className="section-title">New Leads</h2>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Property Value</th>
              <th>Timeline</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.firstName}</td>
                <td>{lead.city}</td>
                <td>{lead.propertyValue}</td>
                <td>{lead.timeline}</td>
                <td>
                  <button
                    className="view-button"
                    onClick={() => openModal(lead)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
