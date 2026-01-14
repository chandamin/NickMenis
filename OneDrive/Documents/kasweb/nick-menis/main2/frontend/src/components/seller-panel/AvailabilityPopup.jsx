import { useEffect, useState } from "react";
import axios from "axios";

const AvailabilityPopup = ({ open, onClose, backendUrl, token }) => {
  const [days, setDays] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;

    const fetchAvailability = async () => {
      setLoading(true);
      const res = await axios.get(
        `${backendUrl}/api/seller/availability`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setDays(res.data.days || []);
      setFrom(res.data.timeRange?.from || "");
      setTo(res.data.timeRange?.to || "");
      setLoading(false);
    };

    fetchAvailability();
  }, [open, backendUrl, token]);

  const toggleDay = (day) => {
    setDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const saveAvailability = async () => {
    await axios.put(
      `${backendUrl}/api/seller/availability`,
      { days, from, to },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    onClose();
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Edit Availability</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {loading ? (
            <p>Loading availability...</p>
          ) : (
            <>
              <label>Days Available</label>
              {["Monday","Tuesday","Wednesday","Thursday","Friday"].map(day => (
                <div key={day}>
                  <input
                    type="checkbox"
                    checked={days.includes(day)}
                    onChange={() => toggleDay(day)}
                  /> {day}
                </div>
              ))}

              <label>Available Times</label>
              <div className="time-row">
                <input type="time" value={from} onChange={e => setFrom(e.target.value)} />
                <span>to</span>
                <input type="time" value={to} onChange={e => setTo(e.target.value)} />
              </div>
            </>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-primary" onClick={saveAvailability}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityPopup;
