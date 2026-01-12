import React, { useEffect, useState } from "react";

const AgentReview = () => {
  const testimonials = [
    {
      text: "I used to spend hours door knocking, cold calling, chasing referrals, and paying for ads with no certainty. 3% Agents changed everything. Homeowners who are already considering selling come through the platform, which completely removed the grind from my business. The stress relief alone has been life-changing.",
    },
    {
      text: "As an Alberta agent, I was careful about compliance before signing up. Once I understood the structure, it was an easy decision. Instead of chasing contracts, opportunities now come to me through the website. No more begging for listings or worrying about where the next deal will come from.",
    },
    {
      text: "This platform replaced door knocking, cold calls, referrals, and expensive ads overnight. Homeowners actively exploring selling are delivered directly through the system. I finally get to focus on real estate—not lead hunting. Absolute game changer.",
    },
    {
      text: "I can honestly say 3% Agents gave me my life back. No more uncertainty. No more constant prospecting. The platform connects me with sellers who are already motivated to have conversations. The mental relief and consistency are worth far more than I expected.",
    },
    {
      text: "I used to wake up every day stressed about finding my next listing. Since joining 3% Agents, that pressure is gone. Seller opportunities come through the platform in a structured, compliant way. This is how real estate should be practiced.",
    },
    {
      text: "I’ve never experienced anything like this in Alberta real estate. Instead of chasing homeowners, I now receive inquiries from people already thinking about selling. No cold calls, no door knocking, no ad spend. It fundamentally changed how I work—and how I feel about my business.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    if (window.innerWidth < 992) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const nextSlide = () => {
    const maxSlide = testimonials.length - slidesToShow;
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxSlide = testimonials.length - slidesToShow;
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <div className="custom-testimonial-main agent-testimonials">
      <div className="custom-testimonial-inner">

        <h2 className="test-title">What Alberta Agents Are Saying</h2>
        <p className="test-subtitle">
          Real feedback from licensed Alberta agents using the 3% Agents platform.
        </p>

        <div className="testimonial-slider-container">

          <button className="slide-arrow left" onClick={prevSlide}>‹</button>

          <div
            className="testimonial-slider"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                className="testimonial-card"
                key={index}
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="stars">★★★★★</div>
                <p className="test-text">“{item.text}”</p>

                <div className="agent-badge">
                  Licensed Alberta Agent
                </div>
              </div>
            ))}
          </div>

          <button className="slide-arrow right" onClick={nextSlide}>›</button>
        </div>

        <div className="slider-dots">
          {Array.from({ length: testimonials.length - (slidesToShow - 1) }).map(
            (_, i) => (
              <span
                key={i}
                className={i === currentSlide ? "dot active" : "dot"}
                onClick={() => setCurrentSlide(i)}
              ></span>
            )
          )}
        </div>

      </div>
    </div>
  );
};

export default AgentReview;
