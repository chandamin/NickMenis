import React from "react";

export default function Agents({ agents, inviteEmail, setInviteEmail, inviteAgent }) {
  return (
    <div className="custom-admin-view custom-admin-view-agents">
      <div className="custom-admin-card">
        {/* Panel header */}
        <div className="custom-admin-panel-head">
          <h3>Agents — 3% Club</h3>
          <div className="custom-admin-muted">
            Manage approved agents and memberships.
          </div>
        </div>

        {/* Invite section */}
        <div className="agent-invite-emails">
          <input className="agent-input-invite"
            placeholder="Invite email"
            value={inviteEmail}
            onChange={e => setInviteEmail(e.target.value)}
            style={{ flex:1, padding:10, borderRadius:8, border:'1px solid #eee' }}
          />
          <button className="custom-admin-btn" onClick={inviteAgent}>Invite</button>
        </div>

        {/* Agents list */}
        <div className="custom-admin-list" id="custom-admin-agentList">
          {agents.map(a => (
            <div key={a.id} className="custom-admin-list-item">
              <div>
                <strong>{a.name}</strong>
                <div className="custom-admin-small-muted">
                  Joined {a.joined} • {a.status}
                </div>
              </div>
              <div>
                <button
                  className="custom-admin-btn"
                  onClick={() => alert('Open agent management (mock): ' + a.name)}
                >
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
