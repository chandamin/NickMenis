import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional delay for better UX
    const timer = setTimeout(() => {
      navigate("/agent/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <h1>✅ Payment Submitted Successfully</h1>
      <p>Your 1% admin fee has been submitted.</p>
      <p>Awaiting admin approval.</p>
      <p>You’ll be redirected to your dashboard shortly.</p>
    </div>
  );
};

export default PaymentSuccess;
