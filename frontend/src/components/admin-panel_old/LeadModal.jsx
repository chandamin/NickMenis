import { useState, useEffect } from "react";

export default function LeadModal({
  assignLeadMulti,
  agents = [],
  markMatched,
  closeLeadModal,
  modalLead,
  setSelectedAgent,
  selectedAgent,
  assignLead
}) {
  const [selectedAgents, setSelectedAgents] = useState([]);

  useEffect(() => {
    setSelectedAgents([]); // reset when lead changes
  }, [modalLead]);

  // ✅ RETURN EARLY
  if (!modalLead) return null;

  // ✅ DEFINE IT HERE (AFTER modalLead check)
  const matchedAgentIds =
  modalLead.matchedAgents?.map(m => m.agentId) || [];

    console.log(modalLead);

  const toggleAgent = (id) => {
    if (matchedAgentIds.includes(id)) return; // 🚫 already matched

    setSelectedAgents(prev =>
      prev.includes(id)
        ? prev.filter(a => a !== id)
        : [...prev, id]
    );
  };

  const formatCurrency = (val) =>
    val ? `$${Number(val).toLocaleString()}` : "$0";

  return (
    <div className="custom-admin-modal">
      <div className="custom-admin-modal-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <strong>Lead Details</strong>
          <button
            onClick={closeLeadModal}
            style={{ border: 'none', background: 'transparent', fontWeight: 700, cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>

        <div className="custom-admin-modal-grid">
          <div>
            <div className="custom-admin-small-muted">
              Lead ID: <span>{modalLead.id || modalLead._id}</span>
            </div>
            <h3 style={{ marginTop: 6 }}>{modalLead.type} — {modalLead.area}</h3>
            <p className="custom-admin-small-muted">{modalLead.summary}</p>
            <div style={{ marginTop: 12 }}>
              <div className="custom-admin-small-muted">
                Note: Contact details are only revealed to agents after purchase or assignment.
              </div>
            </div>
          </div>

          <aside>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {modalLead.tier && (
                <div>
                  <strong>Tier</strong>
                  <div className="custom-admin-pill" style={{ display: 'inline-block', marginLeft: 8 }}>
                    {modalLead.tier}
                  </div>
                </div>
              )}
              <div className="custom-admin-small-muted">
                Value: <strong>{formatCurrency(modalLead.value)}</strong>
              </div>
              <div className="custom-admin-small-muted">
                Age: <strong>{modalLead.ageDays} days</strong>
              </div>

              <label className="custom-admin-small-muted">Match Agents</label>
              <div className="agent-multi-select">
              {agents.map(agent => {
  const isMatched = matchedAgentIds.includes(agent.id);
  console.log(matchedAgentIds);

  return (
    <label
      key={agent.id}
      className="agent-checkbox"
      style={{ opacity: isMatched ? 0.5 : 1 }}
    >
      <input
        type="checkbox"
        checked={selectedAgents.includes(agent.id)}
        disabled={isMatched}
        onChange={() => toggleAgent(agent.id)}
      />
      {agent.name} ({agent.email})
      {isMatched && (
        <span style={{ marginLeft: 6, fontSize: 12, color: "#888" }}>
          — already matched
        </span>
      )}
    </label>
  );
})}

              </div>

              <button
  className="custom-admin-btn"
  disabled={!selectedAgents.length}
  onClick={() =>
    assignLeadMulti(modalLead.id || modalLead._id, selectedAgents)
  }
>
  Match Selected Agents
</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
