import { useEffect, useState, useRef } from "react";
import axios from "axios";

const AgentMessages = ({ leadId, backendUrl, agentId }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const token = localStorage.getItem("token");
  const endRef = useRef(null);

  const fetchMessages = async () => {
    const res = await axios.get(
      `${backendUrl}/api/agent/messages/${leadId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setMessages(res.data);
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [leadId]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!text.trim()) return;

    await axios.post(
      `${backendUrl}/api/agent/messages/${leadId}`,
      { text },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setText("");
    fetchMessages();
  };

  return (
    <div className="card">
      <h3>Seller Messages</h3>

      <div className="messages" style={{ maxHeight: 300, overflowY: "auto" }}>
        {messages.map(m => (
          <div
            key={m._id}
            className={`message ${m.senderId._id === agentId ? "mine" : "theirs"}`}
          >
            <strong>
  {m.senderId?._id?.toString() === agentId?.toString()
    ? "You"
    : "Seller"}:
</strong>

            {m.text}
            <div className="timestamp">
              {new Date(m.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="message-input">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type your message…"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AgentMessages;
