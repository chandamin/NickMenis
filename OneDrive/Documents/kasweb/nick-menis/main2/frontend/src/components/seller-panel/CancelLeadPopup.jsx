import axios from "axios";

const CancelLeadPopup = ({
  open,
  onClose,
  backendUrl,
  token,
  onCancelled
}) => {
  if (!open) return null;

  const cancelLead = async () => {
    await axios.put(
      `${backendUrl}/api/seller/cancel`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    onCancelled();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Cancel Lead Request</h3>
        <p>
          This will stop agent matching and remove your request.
          You can submit a new request anytime.
        </p>

        <div className="modal-actions">
          <button className="btn-light" onClick={onClose}>
            Keep Request
          </button>
          <button className="btn-danger" onClick={cancelLead}>
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelLeadPopup;
