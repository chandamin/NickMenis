export default function Overview({ leads,totalSellers,sellersLast30Days,matchedLeads,activeAgents }) {
  // last 5 recent leads
  const recentLeads = leads.slice(0, 5);

  const formatCurrency = (value) => {
    return `$${Number(value).toLocaleString()}`;
  };

  return (
    <div className="custom-admin-card">
      {/* ===== STATS ===== */}
      <div className="custom-admin-overview">
        <div className="custom-admin-stat">
          <div className="custom-admin-small-muted">
            Total Home Owners (new)
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, marginTop: 6 }}>
             {totalSellers}
          </div>
          <div className="custom-admin-muted" style={{ marginTop: 6 }}>
            New in last 30 days: {sellersLast30Days}
          </div>
        </div>

        <div className="custom-admin-stat">
          <div className="custom-admin-small-muted">
            Matched (3% Agents)
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, marginTop: 6 }}>
            {matchedLeads}
          </div>
          <div className="custom-admin-muted" style={{ marginTop: 6 }}>
            Avg match time: 3.4 hours
          </div>
        </div>

        <div className="custom-admin-stat">
          <div className="custom-admin-small-muted">
            Active Agents
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, marginTop: 6 }}>
            {activeAgents}
          </div>
          <div className="custom-admin-muted" style={{ marginTop: 6 }}>
            3% Club members: 92
          </div>
        </div>
      </div>

      {/* ===== RECENT LEADS TABLE ===== */}
      <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div className="custom-admin-small-muted">
            Recent leads (no contact details shown)
          </div>

          <table className="custom-admin-table" aria-hidden>
            <thead>
              <tr>
                <th>Lead ID</th>
                <th>Type</th>
                <th>Area</th>
                <th>Value</th>
                <th>Age</th>
              </tr>
            </thead>

            <tbody>
              {recentLeads.map((l) => (
                <tr key={l.id}>
                  <td>{l.leadName}</td>
                  <td>{l.type}</td>
                  <td>{l.area}</td>
                  <td>{formatCurrency(l.value)}</td>
                  <td>{l.ageDays}d</td>
                </tr>
              ))}

              {recentLeads.length === 0 && (
                <tr>
                  <td colSpan="5" className="custom-admin-muted">
                    No recent leads
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
