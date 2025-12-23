import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SellersView from "./Sellers";
import AgentsView from "./Agents";

export default function Dashboard() {
  const [selectedView, setSelectedView] = useState("dashboard");
  const [modalData, setModalData] = useState(null);

  const openModal = (lead) => setModalData(lead);
  const closeModal = () => setModalData(null);

  return (
    <div className="custom-admin-root">
      <Sidebar selectedView={selectedView} setSelectedView={setSelectedView} />

      <div className="dashboard-content">
        {selectedView === "dashboard" && (
          <h1 className="dashboard-title">Admin Dashboard</h1>
        )}

        {selectedView === "sellers" && (
          <SellersView openModal={openModal} />
        )}

        {selectedView === "agents" && <AgentsView />}

        {modalData && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                ✕
              </button>

              <h3>Lead Details</h3>
              <div className="modal-field"><strong>Name:</strong> {modalData.firstName}</div>
              <div className="modal-field"><strong>Email:</strong> {modalData.email}</div>
              <div className="modal-field"><strong>Phone:</strong> {modalData.phone}</div>
              <div className="modal-field"><strong>City:</strong> {modalData.city}</div>
              <div className="modal-field"><strong>Property Value:</strong> {modalData.propertyValue}</div>
              <div className="modal-field"><strong>Condition:</strong> {modalData.condition}</div>
              <div className="modal-field"><strong>Timeline:</strong> {modalData.timeline}</div>
              <div className="modal-field"><strong>Selling Reason:</strong> {modalData.sellingReason}</div>
              <div className="modal-field"><strong>Occupied:</strong> {modalData.homeOccupied}</div>
              <div className="modal-field"><strong>Created:</strong> {modalData.createdAt}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
