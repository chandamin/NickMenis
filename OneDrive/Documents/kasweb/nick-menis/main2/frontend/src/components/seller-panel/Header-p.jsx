import { FiDownload, FiMessageSquare, FiBell } from "react-icons/fi";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="header">
      <div className="header-left">
        <button
          className="hamburger"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      </div>

      <div className="actions">
        <button className="action-btn">
          <FiDownload size={18} />
          {/* <span>Download</span> */}
        </button>

        <button className="action-btn">
          <FiMessageSquare size={18} />
          {/* <span>Message</span> */}
        </button>

        <button className="action-btn">
          <FiBell size={18} />
          {/* <span>Notification</span> */}
        </button>
      </div>
    </header>
  );
}
