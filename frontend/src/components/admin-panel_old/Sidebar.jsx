import logo from "../../assets/3percent.jpg";

export default function Sidebar({ activeView, setActiveView, sidebarOpen, setSidebarOpen }) {
  const menu = ["overview", "sellers", "agents", "leads","service-areas", "reports", "settings",];

  return (
    <aside className={`custom-admin-sidebar ${sidebarOpen ? "active" : ""}`}>
      <img src={logo} alt="logo" width="200" />
      <nav className="custom-admin-sidebar-nav">
        {menu.map(m => (
          <div
            key={m}
            className={`custom-admin-nav-item ${activeView === m ? "custom-admin-active" : ""}`}
            onClick={() => { setActiveView(m); setSidebarOpen(false); }}
          >
            {m.toUpperCase()}
          </div>
        ))}
      </nav>
    </aside>
  );
}
