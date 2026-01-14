import { useEffect, useState, useRef } from "react";
import axios from "axios";

const SellerMessages = ({ leadId, backendUrl }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const token = localStorage.getItem("token");
  const messagesEndRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const sellerId = user?._id;

  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        `${backendUrl}/api/seller/messages/${leadId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch messages", err);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [leadId]);

  useEffect(() => {
    //messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!text.trim()) return;
    try {
      await axios.post(
        `${backendUrl}/api/seller/messages/${leadId}`,
        { text },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setText("");
      fetchMessages();
    } catch (err) {
      console.error("Failed to send message", err);
    }
  };

  return (
    <div className="card">
      <h3>Messages</h3>

      <div className="messages" style={{ maxHeight: 300, overflowY: "auto" }}>
        {messages.map(m => {
          const isMine =
            m.senderId?._id?.toString() === sellerId?.toString();

          return (
            <div
              key={m._id}
              className={`message ${isMine ? "mine" : "theirs"}`}
            >
              <strong>{isMine ? "You" : "Agent"}:</strong> {m.text}
              <div className="timestamp">
                {new Date(m.createdAt).toLocaleString()}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className="message-input" style={{ display: "flex", marginTop: 8 }}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type your message…"
          style={{
            flex: 1,
            padding: 6,
            borderRadius: 4,
            border: "1px solid #ccc"
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: 6,
            padding: "6px 12px",
            borderRadius: 4,
            backgroundColor: "#007bff",
            color: "#fff"
          }}
        >
          Send
        </button>
      </div>
      {/* ================= PLATFORM DISCLAIMER ================= */}
<div className="platform-disclaimer">
  <strong>Platform Disclaimer</strong>
  <p>
    3PercentAgents.ca is a neutral marketplace. We do not represent sellers or
    agents and are not a brokerage. Any agreement is strictly between you and
    the agent.
  </p>
</div>
    </div>
  );
};

export default SellerMessages;
