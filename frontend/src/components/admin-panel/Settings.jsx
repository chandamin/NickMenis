import React from "react";

export default function Settings() {
  return (
    <div className="custom-admin-view custom-admin-view-settings">
      <div className="custom-admin-card">
        {/* Panel header */}
        <h3>Settings</h3>

        {/* Description */}
        <div style={{ marginTop:12 }} className="custom-admin-small-muted">
          Platform-level settings. Make sure seller-facing site does not show marketplace features.
        </div>

        {/* Settings options */}
        <div className="custom-settings-mutesds" style={{ marginTop:12, display:'flex', gap:8, flexDirection:'column' }}>
          <label>
            <input type="checkbox" defaultChecked disabled /> Disallow public listing pages (required)
          </label>
          <label>
            <input type="checkbox" id="custom-admin-allowAgentSignup" /> Allow agent self-signup (toggle)
          </label>
          <label>
            <input type="checkbox" id="custom-admin-allowLeadDownload" /> Enable 3-month-old lead downloads ($5 ea)
          </label>
        </div>
      </div>
    </div>
  );
}
