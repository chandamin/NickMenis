import React from "react";

export default function Sidebar({ selectedView, setSelectedView }) {
  return (
    <div className="custom-admin-sidebar">
      <button
        className="mobile-menu-button"
        onClick={() => document.body.classList.toggle("sidebar-visible")}
      >
        ☰
      </button>

      <ul className="sidebar-nav">
        <li
          className={selectedView === "dashboard" ? "active" : ""}
          onClick={() => setSelectedView("dashboard")}
        >
          Dashboard
        </li>
        <li
          className={selectedView === "sellers" ? "active" : ""}
          onClick={() => setSelectedView("sellers")}
        >
          Sellers
        </li>
        <li
          className={selectedView === "agents" ? "active" : ""}
          onClick={() => setSelectedView("agents")}
        >
          Agents
        </li>
      </ul>
    </div>
  );
}
