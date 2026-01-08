const AgentMatchQueue = ({ agents, onRespond }) => {
  if (!agents?.length) return null;

  return (
    <div className="card">
      <div className="agent-queue">
  <h3>Agent Match Queue</h3>

  <div className="agent-cards">
    {agents.map(agent => (
      <div key={agent.agentId} className="agent-card">
        <img
          src={agent.avatar || "/avatar-placeholder.png"}
          alt={agent.name}
          className="agent-avatar"
        />

        <div className="agent-info">
          <strong>{agent.name}</strong>

          <div className="agent-rating">
            ⭐⭐⭐⭐⭐ <span>{agent.rating}/5</span>
          </div>

          <p className="agent-tagline">
            {agent.tagline || "Ready to help you sell confidently"}
          </p>
        </div>

        <div className="agent-actions">
          {agent.status === "pending" && (
            <>
              <button
                className="btn-outline"
                onClick={() => onRespond(agent.agentId, "reject")}
              >
                Decline
              </button>
              <button
                className="btn-primary"
                onClick={() => onRespond(agent.agentId, "accept")}
              >
                Connect
              </button>
            </>
          )}

          {agent.status === "accepted" && (
            <span className="badge success">Connected</span>
          )}

          {agent.status === "rejected" && (
            <span className="badge muted">Declined</span>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default AgentMatchQueue;
