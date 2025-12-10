export default function AgentRow({ agent }) {
  return (
    <div className="custom-admin-list-item">
      <div>
        <strong>{agent.name}</strong>
        <div className="custom-admin-small-muted">Joined {agent.joined} • {agent.status}</div>
      </div>
      <button className="custom-admin-btn">Manage</button>
    </div>
  );
}
