export default function Topbar({ search, setSearch, addManualLead }) {
  return (
    <div className="custom-admin-topbar">
      <input
        className="custom-admin-search"
        placeholder="Search leads..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button className="custom-admin-btn" onClick={addManualLead}>
        Add Manual Lead
      </button>
    </div>
  );
}
