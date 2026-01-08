import logo from "../../assets/3percent.jpg";

export default function Sidebar({
  user,
  menu,
  setMenu,
  sidebarOpen,
  setSidebarOpen,
}) 

{
  console.log(user);
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="logo-sellers">
        <a href="/"><img src={logo} alt="Logo" /></a>
      </div>

      <div className="profile">
        <div className="avatar">S</div>
        <div>
          <h4>{user.name}</h4>
          <span>{user.role}</span>
        </div>
      </div>

      <nav>
        {["dashboard", "activity", "property", "support"].map((item) => (
          <button
            key={item}
            className={menu === item ? "active" : ""}
            onClick={() => {
              setMenu(item);
              setSidebarOpen(false);
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </nav>
    </aside>
  );
}