import React from "react";
import { agents } from "./data/dummyAgents";

export default function AgentsView() {
  return (
    <div className="dashboard-section">
      <h2 className="section-title">Agents</h2>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {agents.map((agent) => (
              <tr key={agent._id}>
                <td>{agent.firstName + " " + agent.lastName}</td>
                <td>{agent.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
