export default function LeadsTable({ leads, onView }) {
  return (
    <table className="custom-admin-table">
      <tbody>
        {leads.map(l => (
          <tr key={l.id}>
            <td>{l.id}</td>
            <td>{l.type}</td>
            <td>{l.area}</td>
            <td>${l.value.toLocaleString()}</td>
            <td>{l.ageDays}d</td>
            <td>{l.tier}</td>
            <td><button className="custom-admin-btn" onClick={() => onView(l.id)}>Details</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
