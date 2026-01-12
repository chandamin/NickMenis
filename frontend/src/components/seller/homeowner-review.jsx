import React, { useEffect, useState } from "react";
import icon1 from "../../assets/icon-1.png";

const HomeownerReview = () => {
  const testimonials = [
    {
      text: "I was extremely skeptical at first. A lower commission usually means lower service—but not with 3% Agents. The service was exceptional, the process was smooth, and we saved a massive amount in commission. I honestly felt foolish for ever considering a traditional brokerage.",
      name: "Home Seller",
      role: "Alberta",
    },
    {
      text: "I thought there had to be a catch. There wasn’t. 3% Agents delivered full-service support, constant communication, and real results—while saving us tens of thousands. This completely changed how I view selling real estate.",
      name: "Verified Seller",
      role: "Alberta",
    },
    {
      text: "We almost went with a traditional agent out of fear. Choosing 3% Agents was the best decision we made. Professional, responsive, and incredibly efficient. Same—or better—service, far less commission. Total no-brainer.",
      name: "Homeowner",
      role: "Alberta",
    },
    {
      text: "I expected compromises because of the lower commission. Instead, I got white-glove service. Everything was handled professionally from start to finish, and the savings were life-changing. I would never sell another home any other way.",
      name: "Repeat Seller",
      role: "Alberta",
    },
    {
      text: "Selling our home with 3% Agents felt effortless. The team knew exactly what they were doing, guided us every step of the way, and saved us a huge amount of money. This model makes traditional commissions feel outdated.",
      name: "Home Seller",
      role: "Alberta",
    },
    {
      text: "If you’re hesitant because it sounds too good to be true—I was too. But 3% Agents absolutely delivered. Five-star service, zero stress, and enormous savings. This is the future of selling homes.",
      name: "Verified Client",
      role: "Alberta",
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
    <div className="custom-testimonial-main">
      <div className="custom-testimonial-inner">

        <h2 className="test-title">What Homeowners Are Saying</h2>
        <p className="test-subtitle">
          Real experiences from Alberta homeowners who chose a smarter way to sell.
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

                {/* <div className="test-user">
                  <img src={icon1} alt="User" />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div> */}
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

export default HomeownerReview;
