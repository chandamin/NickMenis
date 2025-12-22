import React, { useEffect, useState } from "react";
import icon1 from "../../assets/icon-1.png";

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "It is a long established fact that a reader will be distracted...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
    {
      text: "The point of using Lorem Ipsum is that it has a more-or-less normal...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
    {
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
    {
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
    {
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    if (window.innerWidth < 600) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 992) {
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

        <h2 className="test-title">Our Testimonial</h2>
        <p className="test-subtitle">
          It is a long established fact that a reader will be distracted by readable content.
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
                <p className="test-text">{item.text}</p>

                <div className="test-user">
                  <img src={icon1} alt="" />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
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

export default TestimonialSlider;
