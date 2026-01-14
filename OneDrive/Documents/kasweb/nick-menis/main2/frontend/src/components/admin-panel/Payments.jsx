import React, { useEffect, useState } from "react";

const token = localStorage.getItem("token");

const Payments = () => {
  const [payments, setPayments] = useState([]);
const backendUrl = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    fetch(`${backendUrl}/api/admin/payments/pending`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(setPayments);
  }, []);

  const approve = async (id) => {
    await fetch(`${backendUrl}/api/admin/payments/${id}/approve`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setPayments(prev => prev.filter(p => p._id !== id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Agent</th>
          <th>Lead</th>
          <th>Amount</th>
          <th>Paid At</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {payments.map(p => (
          <tr key={p._id}>
            <td>{p.agentId.firstName} {p.agentId.lastName}</td>
            <td>{p.leadId.leadName}</td>
            <td>${p.amount}</td>
            <td>{new Date(p.paidAt).toLocaleDateString()}</td>
            <td>
  {p.status != "approved" ? (
    <button onClick={() => approve(p._id)}>
      Approve
    </button>
  ) : (
    
    <span className="success">{p.status}</span>
  )}
</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Payments;
