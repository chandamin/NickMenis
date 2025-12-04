import React from "react";


export default function SubscriptionPlans() {
  const plans = [
    {
      title: "Basic",
      price: "$999 / mo",
      desc: "Entry access — limited instant alerts",
    },
    {
      title: "Professional",
      price: "$2,499 / mo",
      desc: "Higher quota, faster notifications",
    },
    {
      title: "Unlimited",
      price: "$6,999 / mo",
      desc: "Entry access — limited instant alerts",
    },
  ];

  return (
    <div className="custom-agent-subscribe-main">
      <h2 className="subscribe-title">Subscription Plans — agent access</h2>
      <p className="subscribe-subtitle">
        Subscribe to get marketplace access. Subscriptions grant different
        monthly quotas / priority for new leads.
      </p>

      <div className="custom-agent-subscribe-inner">
        <div className="custom-agent-subscribe-flex">
          {plans.map((p, i) => (
            <div className="plan-card" key={i}>
              <h3 className="plan-title">{p.title}</h3>
              <p className="plan-price">{p.price}</p>
              <p className="plan-desc">{p.desc}</p>
              <button className="plan-btn">Subscribe</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
