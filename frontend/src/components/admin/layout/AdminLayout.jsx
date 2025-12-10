import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

export default function AdminLayout({ children, activeView, setActiveView }) {
  return (
    <div className="custom-admin-root">
      <AdminSidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="custom-admin-main">
        <AdminTopbar />
        {children}
      </main>
    </div>
  );
}
