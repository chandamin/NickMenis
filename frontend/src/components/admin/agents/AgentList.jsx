import AgentRow from "./AgentRow";

export default function AgentList({ agents }) {
  return (
    <div className="custom-admin-list">
      {agents.map(a => <AgentRow key={a.id} agent={a} />)}
    </div>
  );
}
