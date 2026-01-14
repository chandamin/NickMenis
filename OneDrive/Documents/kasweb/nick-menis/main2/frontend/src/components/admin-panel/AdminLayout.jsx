import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="custom-admin-root">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="custom-admin-main">
        <Topbar setSidebarOpen={setSidebarOpen} />
        {children}
      </main>
    </div>
  );
}
