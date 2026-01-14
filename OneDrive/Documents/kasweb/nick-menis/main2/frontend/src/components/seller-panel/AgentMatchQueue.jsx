const AgentMatchQueue = ({ agents, onRespond, locked = false }) => {
  if (!agents?.length) return null;

  return (
    <div className="card">
      <h3>Agent Match Queue</h3>

      <div className="agent-cards">
        {agents.map(agent => (
          <div key={agent.matchId} className="agent-card">

            <div className="agent-info">
              <strong>{agent.name || agent.email}</strong>
              <p className="agent-email">{agent.email}</p>
            </div>

            <div className="agent-actions">
              {/* PENDING */}
              {agent.status === "pending" && !locked && (
                <>
                  <button
                    className="btn-outline"
                    onClick={() => onRespond(agent.matchId, "rejected")}
                  >
                    Decline
                  </button>

                  <button
                    className="btn-primary"
                    onClick={() => onRespond(agent.matchId, "accepted")}
                  >
                    Connect
                  </button>
                </>
              )}

              {/* ACCEPTED */}
              {agent.status === "accepted" && (
                <span className="badge success">Connected</span>
              )}

              {/* REJECTED */}
              {agent.status === "rejected" && (
                <span className="badge muted">Declined</span>
              )}

              {/* LOCKED STATE */}
              {locked && agent.status === "pending" && (
                <span className="badge locked">Decision Locked</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentMatchQueue;
