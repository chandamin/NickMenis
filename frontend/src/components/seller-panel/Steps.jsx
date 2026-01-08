export default function Steps({ step, setStep }) {
  const steps = ["Lead Submitted", "Matching Agents", "Agents Notified"];

  return (
    <div className="steps">
      <div className="customstep-left">
        {steps.map((label, i) => (
          <span
            key={i}
            className={step >= i + 1 ? "done" : ""}
            onClick={() => setStep(i + 1)}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
