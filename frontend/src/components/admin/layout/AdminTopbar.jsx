export default function AdminTopbar() {
  return (
    <div className="custom-admin-topbar">
      <input className="custom-admin-search" placeholder="Search..." />
      <div className="custom-admin-top-actions">
        <button className="custom-admin-btn">Add Manual Lead</button>
        <button className="custom-admin-btn custom-admin-ghost">Import CSV</button>
      </div>
    </div>
  );
}
