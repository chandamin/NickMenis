export default function RightPanel({ notify, setNotify }) {
  return (
    <aside className="right">
      <div className="card highlight">
        <h4>Your Privacy Matters</h4>
        <p>No spam. No pressure. No contracts.</p>
      </div>

      <div className="card">
        <div className="toggle">
          <span>SMS Notifications</span>
          <input
            type="checkbox"
            checked={notify}
            onChange={() => setNotify(!notify)}
          />
        </div>
      </div>

      <div className="card agent-queue">
        <h4>Agent Match Queue</h4>

        <div className="agent">
          <span className="rating">4.8</span>
          <div>
            <b>Top Rated Agent</b>
            <p>Ready to connect</p>
          </div>
        </div>

        <div className="agent pending">
          <span className="rating">4.6</span>
          <div>
            <b>Verified Agent</b>
            <p>Reviewing your details</p>
          </div>
        </div>
      </div>
    </aside>
  );
}