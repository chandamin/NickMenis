import React, { useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function AcceptInvite() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [params] = useSearchParams();
  const navigate = useNavigate();

  const token = params.get("token");
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!password) {
      setError("Password is required");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${backendUrl}/api/admin/agents/accept-invite`, {
        token,
        password,
      });

      alert("Account activated successfully");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid invite");
    } finally {
      setLoading(false);
    }
  }

  if (!token) {
    return <p>Invalid invite link</p>;
  }

  return (
    <div className="accept-invite">
      <h2>Accept Invitation</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button disabled={loading}>
          {loading ? "Activating..." : "Accept Invite"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
