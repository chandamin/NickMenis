import React from "react";

export default function Settings() {
  return (
    <div className="custom-admin-card">
      <h3>Settings</h3>
      <label><input type="checkbox" checked readOnly /> Hide public pages</label>
    </div>
  );
}
