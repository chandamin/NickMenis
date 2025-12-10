export default function AdminSidebar({ activeView, setActiveView }) {
  const items = ["overview","sellers","agents","leads","reports","settings"];

  return (
    <aside className="custom-admin-sidebar">
      <nav>
        {items.map(v => (
          <div 
            key={v}
            className={`custom-admin-nav-item ${activeView===v?'custom-admin-active':''}`}
            onClick={() => setActiveView(v)}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </div>
        ))}
      </nav>
    </aside>
  );
}
